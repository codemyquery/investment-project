<?php
class Plan
{
    var $helper;
    function __construct($helper)
    {
        $this->helper = $helper;
    }

    function create_new_plan($rows)
    {
        try {
            $this->helper->connect->beginTransaction();
            $this->helper->data = array();
            foreach ($rows as $row) {
                $this->helper->data = array(
                    ':plan_code'              =>    $this->helper->clean_data($row['planCode']),
                    ':insurance_company'      =>    $this->helper->clean_data($row['insuranceCompany']),
                    ':plan_name'              =>    $this->helper->clean_data($row['planName']),
                    ':age_band'               =>    $this->helper->clean_data($row['ageBand']),
                    ':plan_ppt'               =>    $this->helper->clean_data($row['ppt']),
                    ':income_terms_options'   =>    $this->helper->clean_data($row['incomeTermOptions']),
                    ':maturity_value'         =>    $this->helper->clean_data($row['maturityValueOptions']),
                    ':income_frequency'       =>    $this->helper->clean_data($row['incomeFrequency']),
                    ':plan_details'           =>    json_encode($row['planDetails']),
                    ':created_by'             =>    1,
                    ':updated_by'             =>    1
                );
                $this->helper->query = "INSERT INTO plan_details (plan_code,  insurance_company, plan_name, age_band,ppt, income_terms_options,
            maturity_value,income_frequency,plan_details,created_by,updated_by) VALUES 
            (:plan_code,:insurance_company,:plan_name,:age_band,:plan_ppt,:income_terms_options,:maturity_value,:income_frequency,
            :plan_details,:created_by,:updated_by)
            ON DUPLICATE KEY UPDATE 
            insurance_company = :insurance_company,
            plan_name = :plan_name,
            age_band = :age_band,
            ppt = :plan_ppt,
            income_terms_options = :income_terms_options,
            maturity_value = :maturity_value,
            income_frequency = :income_frequency,
            plan_details = :plan_details,
            created_by = :created_by,
            updated_by = :updated_by
            ";
                $this->helper->execute_query();
            }
            $this->helper->connect->commit();
            return true;
        } catch (\Throwable $th) {
            $this->helper->connect->rollBack();
            return false;
        }
    }

    function update_plan_order($data)
    {
        $planId = $this->helper->clean_data($data['planCode']);
        $id = $this->helper->clean_data($data['serialNumber']);
        $this->helper->query = "UPDATE plan_details SET serial_number='$id' WHERE plan_code='$planId'";
        return $this->helper->execute_query();
    }

    function get_plan($itemID)
    {
        $this->helper->query = "SELECT * FROM plan_details WHERE plan_code='$itemID'";
        if ($this->helper->total_row() === 0) {
            return null;
        }
        $employee = $this->helper->query_result()[0];
        return formatPlanOutput($employee);
    }

    function get_plan_list()
    {
        @$pages_array = [];
        $this->helper->query = "SELECT * FROM plan_details "
            . $this->helper->getSortingQuery('plan_details', t_plans(@$_GET['orderBy']))
            . $this->helper->getPaginationQuery();
        $total_rows = $this->helper->query_result();
        $this->helper->query = "SELECT COUNT(*) as count FROM plan_details";
        $total_Count = $this->helper->query_result();
        foreach ($total_rows as $row) {
            $pages_array[] = formatPlanOutput($row);
        }
        return array(
            "count" =>    (int)$total_Count[0]['count'],
            "rows"  =>    @$pages_array,
        );
    }

    function delete_plan($ids)
    {
        $this->helper->query = "DELETE FROM plan_details WHERE plan_code in " . $this->helper->delete_query_from_array($ids);
        $this->helper->data = $ids;
        return $this->helper->execute_query();
    }
}

function formatPlanOutput($row)
{
    return (object) array(
        "id"                        => $row['plan_code'],
        "planCode"                  => $row['plan_code'],
        "insuranceCompany"          => $row['insurance_company'],
        "planName"                  => $row['plan_name'],
        "ageBand"                   => $row['age_band'],
        "incomeTermOptions"         => $row['income_terms_options'],
        "maturityValueOptions"      => $row['maturity_value'],
        "incomeFrequency"           => $row['income_frequency'],
        "planDetails"               => json_decode($row['plan_details']),
        "createdBy"                 => $row['created_by'],
        "updatedBy"                 => $row['updated_by'],
        "dateUpdated"               => $row['updated_on'],
        "ppt"                       => $row['ppt'],
        "serialNumber"              => $row['serial_number']
    );
}

function t_plans($fieldName)
{
    switch ($fieldName) {
        case 'dateUpdated':
            return 'updated_on';
        case 'planName':
            return 'plan_name';
        case 'serialNumber':
            return 'serial_number';
        default:
            return '';
    }
}
