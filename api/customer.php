<?php
require_once('./helper.php');
class Customer
{
    var $helper;
    function __construct($helper)
    {
        $this->helper = $helper;
    }

    function create_new_customer($data)
    {
        $this->helper->data = array(
            ':name'             =>    $this->helper->clean_data($data['customer_id']),
            ':email'            =>    $this->helper->clean_data($data['name']),
            ':mobile'           =>    $this->helper->clean_data($data['address']),
            ':kyc_status'       =>    $this->helper->clean_data($data['panNumber'])
        );
        $this->helper->query = "INSERT INTO customers (name, email, mobile, kyc_status) 
         VALUES (:name,:email,:mobile,:kyc_status)";
        return $this->helper->execute_query();
    }

    function update_customer($data)
    {
        /* $this->helper->data = array(
            ':customer_id'              =>    $this->helper->clean_data($data['customer_id']),
            ':name'            =>    $this->helper->clean_data($data['name']),
            ':address'                =>    $this->helper->clean_data($data['address']),
            ':pan_card_no'               =>    $this->helper->clean_data($data['panNumber']),
            ':mobile'                 =>    $this->helper->clean_data($data['mobile']),
            ':email'                  =>    $this->helper->clean_data($data['email']),
            ':is_kyc_verified'             =>   $this->helper->clean_data($data['is_kyc_verified']),
            ':aadhar_no'               =>    $this->helper->clean_data($data['aadharCardNo']),
            ':created_dt'             =>     $this->helper->clean_data($data['created_dt']),
            ':date_updated'           =>    $this->helper->get_current_datetimestamp()
        );
        $this->helper->query = "UPDATE customer SET 
        name = :name, 
        address = :address, 
        mobile = :mobile, 
        email = :email, 
        pan_card_no = :pan_card_no,
        is_kyc_verified= :is_kyc_verified,
        aadhar_no= :aadhar_no,
        created_dt = :created_dt,
        date_updated = :date_updated
        WHERE customer_id = :customer_id";
        return $this->helper->execute_query(); */
    }

    function get_customer($mobileNo)
    {
        $this->helper->query = "SELECT *FROM customers WHERE mobile='$mobileNo'";
        if ($this->helper->total_row() === 0) {
            return null;
        }
        $customer = $this->helper->query_result()[0];
        return formatCustomerOutput($customer);
    }

    function get_customer_list()
    {
        $pages_array = array();
        $this->helper->query = "SELECT * FROM customers "
            . $this->helper->getSortingQuery('customers', t_customer(@$_GET['orderBy']))
            . $this->helper->getPaginationQuery();
        $total_rows = $this->helper->query_result();
        $this->helper->query = "SELECT COUNT(*) as count FROM customers";
        $total_Count = $this->helper->query_result();
        foreach ($total_rows as $row) {
            $pages_array[] = formatCustomerOutput($row);
        }
        return array(
            "count" =>    (int)$total_Count[0]['count'],
            "rows"  =>    $pages_array,
        );
    }
}

function formatCustomerOutput($row)
{
    return (object) array(
        "id"            =>     $row['id'],
        "name"          =>     $row['name'],
        "email"         =>     $row['email'],
        "mobile"        =>     $row['mobile'],
        "kycStatus"     =>     $row['kyc_status'],
        "dateUpdated"   =>     $row['updated_on']
    );
}

function t_customer($fieldName)
{
    switch ($fieldName) {
        case 'dateUpdated':
            return 'updated_on';
        case 'customers':
            return 'name';
        case 'kycStatus':
            return 'kyc_status';
        default:
            return '';
    }
}