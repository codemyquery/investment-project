<?php
class PlanSell
{
    var $helper;
    function __construct($helper)
    {
        $this->helper = $helper;
    }


    function get_plan($itemID)
    {
        $this->helper->query = "SELECT * FROM plan_details WHERE plan_code='$itemID'";
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
        plan_sell_data.customer_id,
        plan_sell_data.plan_id,
        plan_sell_data.customer_purchase_status,
        plan_sell_data.purchase_amount,
        plan_sell_data.updated_on,
        plan_details.plan_name as plan_name,
        users.name as customer_name
        FROM plan_sell_data 
        INNER JOIN plan_details ON plan_sell_data.plan_id=plan_details.id 
        INNER JOIN users ON plan_sell_data.customer_id=users.id"
            . $this->helper->getSortingQuery('employee', t_plansell(@$_GET['orderBy']))
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
    function Insert_into_plansell($data)
    {
        $customer_id = $this->helper->clean_data($data['customer_id']);
        $this->helper->data = array(
            ':customer_id'                  =>  $this->helper->clean_data($data['customer_id']),
            ':plan_id'                      =>  $this->helper->clean_data($data['plan_id']),
            ':customer_purchase_status'     =>  'NO',
            ':purchase_amount'              =>  $this->helper->clean_data($data['purchase_amount'])
        );
        $this->helper->query = "
        INSERT INTO plan_sell_data (customer_id,plan_id,customer_purchase_status,purchase_amount) 
        VALUES(:customer_id,:plan_id, :customer_purchase_status,:purchase_amount)";

        return $this->helper->execute_query();
    }
}

function formatplanSellOutput($row)
{
    return (object) array(
        "id" => $row['customer_id'],
        "planCode" => $row['plan_id'],
        "planName" => $row['plan_name'],
        "planAmount" => $row['purchase_amount'],
        "purchaseStatus" => $row['customer_purchase_status'],
        "customerName" =>  $row['customer_name'],
        "orderDate" =>  $row['updated_on']
    );
}

function t_plansell($fieldName)
{
    switch ($fieldName) {
        case 'last_modified':
            return 'last_modified';

        default:
            return '';
    }
}
