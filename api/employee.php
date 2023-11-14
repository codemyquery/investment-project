<?php
class Employee
{
    var $helper;
    function __construct($helper)
    {
        $this->helper = $helper;
    }

    function create_new_employee($data)
    {
        $this->helper->data = array(
            ':name'                   =>    $this->helper->clean_data($data['employeeName']),
            ':employee_code'          =>    $this->helper->clean_data($data['employeeCode']),
            ':mobile'                 =>    $this->helper->clean_data($data['mobile']),
            ':email'                  =>    $this->helper->clean_data($data['email']),
            ':designation'            =>    $this->helper->clean_data($data['designation']),
            ':created_by'             =>    1
        );
        $this->helper->query = "INSERT INTO employee (name, employee_code,  mobile, email, designation, created_by) VALUES (:name,:employee_code,:mobile,:email,:designation,:created_by)";
        return $this->helper->execute_query();
    }

    function update_employee($data)
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

    function get_employee($itemID)
    {
        $this->helper->query = "SELECT * FROM employee WHERE employee_code='$itemID'";
        if ($this->helper->total_row() === 0) {
            return null;
        }
        $employee = $this->helper->query_result()[0];
        return formatEmployeeOutput($employee);
    }

    function get_employee_list()
    {
        $pages_array = array();
        $this->helper->query = "SELECT * FROM employee "
            . $this->helper->getSortingQuery('employee', t_employee(@$_GET['orderBy']))
            . $this->helper->getPaginationQuery();
        $total_rows = $this->helper->query_result();
        $this->helper->query = "SELECT COUNT(*) as count FROM employee";
        $total_Count = $this->helper->query_result();
        foreach ($total_rows as $row) {
            $pages_array[] = formatEmployeeOutput($row);
        }
        return array(
            "count" =>    (int)$total_Count[0]['count'],
            "rows"  =>    $pages_array,
        );
    }
}

function formatEmployeeOutput($row)
{
    return (object) array(
        "id" => $row['employee_code'],
        "name" => $row['name'],
        "employeeCode" => $row['employee_code'],
        "email" => $row['email'],
        "mobile" => $row['mobile'],
        "designation" => $row['designation'],
        "dateUpdated" => $row['updated_on']
    );
}

function t_employee($fieldName)
{
    switch ($fieldName) {
        case 'dateUpdated':
            return 'updated_on';
        case 'employee':
            return 'name';
        default:
            return '';
    }
}
