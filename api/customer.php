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
            ':customer_id'              =>    $this->helper->clean_data($data['customer_id']),
            ':name'            =>    $this->helper->clean_data($data['name']),
            ':address'                =>    $this->helper->clean_data($data['address']),
            ':pan_card_no'               =>    $this->helper->clean_data($data['panNumber']),
            ':mobile'                 =>    $this->helper->clean_data($data['mobile']),
            ':email'                  =>    $this->helper->clean_data($data['email']),
            ':is_kyc_verified'             =>   $this->helper->clean_data($data['is_kyc_verified']),
            ':aadhar_no'               =>    $this->helper->clean_data($data['aadharCardNo']),
            ':created_dt'             =>     $this->helper->clean_data($data['created_dt']),
        );
        $this->helper->query = "INSERT INTO vendor (customer_id, name, address, pan_card_no, mobile, email,is_kyc_verified, aadhar_no, created_dt) 
         VALUES (:customer_id,:name,:address,:panNumber,:mobile,:email,:is_kyc_verified,:aadharCardNo,:created_dt)";
        return $this->helper->execute_query();
    }

    function update_customer($data){
        $this->helper->data = array(
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
        return $this->helper->execute_query();
    }

    function get_customer($custId){
        $this->helper->query = "SELECT *FROM customer WHERE customer_id='$custId'";
        if($this->helper->total_row() === 0){
            return null;
        }
        $vendor = $this->helper->query_result()[0];
        return formatCustomerOutput($customer);
    }

    function get_customer_list()
    {
        $this->helper->query = "SELECT *FROM customer "
            . $this->helper->getSortingQuery('customer', t_customer(@$_GET['orderBy']) )
            . $this->helper->getPaginationQuery();
        $total_rows = $this->helper->query_result();
        $this->helper->query = "SELECT COUNT(*) as count FROM customer";
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
        "customer_id"            =>     $row['customer_id'],
        "name"          =>     $row['name'],
        "address"               =>    $row['address'],
        "pan_card_no"              =>     $row['panNumber'],
        "mobile"               =>     $row['mobile'],
        "email"                  =>    $row['email'],
        "is_kyc_verified"           =>  $row  ['is_kyc_verified'],
        "aadhar_no"              =>    $row['aadharCardNo'],
        "created_dt"             =>     $row['created_dt'],
        "date_updated"          =>   $row['date_updated']
   
  
    );}

function t_customer($fieldName){
    switch ($fieldName) {
        case 'dateUpdated':
            return 'date_updated';
        case 'customer':
            return 'name';
        default:
            return '';
    }
}