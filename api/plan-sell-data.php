<?php
require_once('./plan.php');
class PlanSell
{
    var $helper;
    function __construct($helper)
    {
        $this->helper = $helper;
    }

    function get_plan_sell($itemID)
    {
        $this->helper->query = "SELECT 
        plan_sell_data.id,
        plan_sell_data.plan_id,
        plan_sell_data.customer_purchase_status,
        plan_sell_data.purchase_amount,
        plan_sell_data.updated_on,
        plan_sell_data.created_on,
        plan_details.plan_name as plan_name,
        users.name as customer_name
        FROM plan_sell_data 
        INNER JOIN plan_details ON plan_sell_data.plan_id=plan_details.plan_code 
        INNER JOIN users ON plan_sell_data.customer_id=users.id WHERE plan_sell_data.id = $itemID";

        if ($this->helper->total_row() === 0) {
            return null;
        }
        $plan = $this->helper->query_result()[0];
        return formatplanSellOutput($plan);
    }

    function get_plansell_list()
    {
        $pages_array = array();
        $this->helper->query = "SELECT 
        plan_sell_data.id,
        plan_sell_data.plan_id,
        plan_sell_data.customer_purchase_status,
        plan_sell_data.purchase_amount,
        plan_sell_data.updated_on,
        plan_sell_data.created_on,
        plan_details.plan_name as plan_name,
        users.name as customer_name
        FROM plan_sell_data 
        INNER JOIN plan_details ON plan_sell_data.plan_id=plan_details.plan_code 
        INNER JOIN users ON plan_sell_data.customer_id=users.id"
            . $this->helper->getSortingQuery('plan_sell_data', t_plansell(@$_GET['orderBy']))
            . $this->helper->getPaginationQuery();

        $total_rows = $this->helper->query_result();
        $this->helper->query = "SELECT COUNT(*) as count FROM plan_sell_data";
        $total_Count = $this->helper->query_result();
        foreach ($total_rows as $row) {
            $pages_array[] = formatplanSellOutput($row);
        }
        return array(
            "count" =>    (int)$total_Count[0]['count'],
            "rows"  =>    $pages_array,
        );
    }

    function create_plan_sell_data($data)
    {
        $planId = $this->helper->clean_data($data['planId']);
        $plan = new Plan($this->helper);
        $plan_details = $plan->get_plan($planId);

        $this->helper->data = array(
            ':customer_id'                  =>  $this->helper->clean_data($data['customerId']),
            ':plan_id'                      =>  $this->helper->clean_data($planId),
            ':customer_purchase_status'     =>  $this->helper->clean_data($data['purchaseStatus']),
            ':purchase_plan_details'        => json_encode($plan_details),
            ':purchase_amount'              =>  $this->helper->clean_data($data['purchaseAmount'])
        );
        $this->helper->query = "INSERT INTO plan_sell_data (customer_id,plan_id,customer_purchase_status,purchase_plan_details,purchase_amount) 
        VALUES(:customer_id,:plan_id, :customer_purchase_status,:purchase_plan_details,:purchase_amount)";
        return $this->helper->execute_query();
    }

    function update_planSellData($data)
    {
        $this->helper->data = array(
            ':id'                           =>  $this->helper->clean_data($data['id']),
            ':customer_purchase_status'     =>  $this->helper->clean_data($data['purchaseStatus'])
        );
        $this->helper->query = "UPDATE plan_sell_data 
        SET customer_purchase_status = :customer_purchase_status WHERE id = :id";
        return $this->helper->execute_query();
    }

    function get_active_plans($itemID)
    {
        $pages_array = array();
        $this->helper->query = "SELECT 
        plan_sell_data.id,
        plan_sell_data.customer_id,
        plan_sell_data.plan_id,
        plan_sell_data.customer_purchase_status,
        plan_sell_data.purchase_amount,
        plan_sell_data.purchase_plan_details,
        plan_sell_data.updated_on,
        plan_sell_data.created_on,
        users.name as customer_name,
        plan_details.plan_name as plan_name
        FROM plan_sell_data 
        INNER JOIN plan_details ON plan_sell_data.plan_id=plan_details.plan_code 
        INNER JOIN users ON plan_sell_data.customer_id=users.id WHERE customer_id='$itemID' AND customer_purchase_status='YES'";
        $total_rows = $this->helper->query_result();
        foreach ($total_rows as $row) {
            $pages_array[] = formatplanSellOutput($row);
        }
        return $pages_array;
    }
}

function formatplanSellOutput($row)
{
    return (object) array(
        "id" => $row['id'],
        "customerName" =>  $row['customer_name'],
        "planName" => $row['plan_name'],
        "planAmount" => $row['purchase_amount'],
        "purchase_plan_details" => @json_decode($row['purchase_plan_details']),
        "planCode" => $row['plan_id'],
        "purchaseStatus" => $row['customer_purchase_status'],
        "orderDate" =>  $row['created_on'],
        "dateUpdated" => $row['updated_on']
    );
}

function t_plansell($fieldName)
{
    switch ($fieldName) {
        case 'orderDate':
        case 'dateUpdated':
            return 'created_on';
        case 'purchaseStatus':
            return 'purchase_plan_details';
        default:
            return '';
    }
}
