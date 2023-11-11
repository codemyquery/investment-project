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
                    ':income_terms_options'   =>    $this->helper->clean_data($row['incomeTermOptions']),
                    ':maturity_value'         =>    $this->helper->clean_data($row['maturityValueOptions']),
                    ':income_frequency'       =>    $this->helper->clean_data($row['incomeFrequency']),
                    ':plan_details'           =>    json_encode($row['planDetails']),
                    ':created_by'             =>    1,
                    ':updated_by'             =>    1
                );
                $this->helper->query = "INSERT INTO plan_details (plan_code,  insurance_company, plan_name, age_band, income_terms_options,
            maturity_value,income_frequency,plan_details,created_by,updated_by) VALUES 
            (:plan_code,:insurance_company,:plan_name,:age_band,:income_terms_options,:maturity_value,:income_frequency,
            :plan_details,:created_by,:updated_by)";
                $this->helper->execute_query();
            }
            $this->helper->connect->commit();
            return true;
        } catch (\Throwable $th) {
            $this->helper->connect->rollBack();
            return false;
        }
    }

    function update_plan($data)
    {
        /* $this->helper->data = array(
            ':employee_id'      =>    $this->helper->clean_data($data['id']),
            ':name'             =>    $this->helper->clean_data($data['name']),
            ':employee_code'    =>    $this->helper->clean_data($data['employee_code']),
            ':mobile'           =>    $this->helper->clean_data($data['mobile']),
            ':email'            =>    $this->helper->clean_data($data['email']),
            ':designation'      =>    $this->helper->clean_data($data['designation']),
            ':created_on'       =>    $this->helper->clean_data($data['created_on']),
            ':date_updated'     =>    $this->helper->get_current_datetimestamp()
        );
        $this->helper->query = "UPDATE employee SET 
        name = :name, 
        designation = :designation, 
        mobile = :mobile, 
        email = :email, 
        updated_by = :updated_by,
        created_on = :created_on
        date_updated = :date_updated
        WHERE employee_id = :id";
        return $this->helper->execute_query(); */
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
}

function formatPlanOutput($row)
{
    return (object) array(
        "id"                        => $row['plan_code'],
        "planCode"                  => $row['plan_code'],
        "insuranceCompnay"          => $row['insurance_company'],
        "planName"                  => $row['plan_name'],
        "ageBand"                   => $row['age_band'],
        "incomeTermOptions"         => $row['income_terms_options'],
        "maturityValueOptions"      => $row['maturity_value'],
        "incomeFrequency"           => $row['income_frequency'],
        "planDetails"               => $row['plan_details'],
        "createdBy"                 => $row['created_by'],
        "updatedBy"                 => $row['updated_by'],
        "dateUpdated"               => $row['updated_on']
    );
}

function t_plans($fieldName)
{
    switch ($fieldName) {
        case 'dateUpdated':
            return 'updated_on';
        case 'planName':
            return 'plan_name';
        default:
            return '';
    }
}
