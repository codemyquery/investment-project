<?php
require_once('./helper.php');
class Users
{
    var $helper;
    function __construct($helper)
    {
        $this->helper = $helper;
    }

    function create_new_user($data)
    {
        $result = $this->helper->ValidateEmail($data['email']);
        if($result["status"] !== true)return $result;
        $result = $this->helper->ValidatePhoneNumber($data['mobile']);
        if($result["status"] !== true)return $result;
        $result = $this->helper->checkPasswordStrength($data['password']);
        if($result["status"] !== true)return $result;
        $this->helper->data = array(
            ':name'                    =>    $this->helper->clean_data($data['name']),
            ':email'                   =>    $this->helper->clean_data($data['email']),
            ':mobile'                  =>    $this->helper->clean_data($data['mobile']),
            ':lg_lc_code'              =>    $this->helper->clean_data($data['lgLcCode']),
            ':kyc_status'              =>    'NO',
            ':password'                =>    $this->helper->clean_data($data['password']),
            ':accepted_for_promotions' =>    $this->helper->clean_data($data['acceptedPromotionMails'])
        );
        $this->helper->query = "INSERT INTO users (name, email, mobile, lg_lc_code, kyc_status, password, accepted_for_promotions) 
         VALUES (:name,:email,:mobile,:lg_lc_code, :kyc_status, :password, :accepted_for_promotions)";
        return $this->helper->execute_query();
    }

    function update_user($data)
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

    function get_user($mobileNo)
    {
        $this->helper->query = "SELECT *FROM users WHERE mobile='$mobileNo'";
        if ($this->helper->total_row() === 0) {
            return null;
        }
        $customer = $this->helper->query_result()[0];
        return formatCustomerOutput($customer);
    }

    function login_user($data) {
        $username = $data['username'];
        $password = $data['password'];
        $result = $this->helper->ValidateEmail($username);
        if($result["status"] !== 1)return $result;
        
        $this->helper->query = "SELECT * FROM users WHERE (email='$username' OR mobile='$username') AND password='$password'";
        if ($this->helper->total_row() === 0) {
            return null;
        }
        $username = $this->helper->query_result()[0];
        $_SESSION["username_email"] = $username['email'];
        $_SESSION["username_mobile"] = $username['mobile'];
        return formatCustomerOutput($username);
    }

    function get_user_list()
    {
        $pages_array = array();
        $this->helper->query = "SELECT * FROM users "
            . $this->helper->getSortingQuery('users', t_customer(@$_GET['orderBy']))
            . $this->helper->getPaginationQuery();
        $total_rows = $this->helper->query_result();
        $this->helper->query = "SELECT COUNT(*) as count FROM users";
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
        "dateCreated"   =>     $row['created_on']
    );
}

function t_customer($fieldName)
{
    switch ($fieldName) {
        case 'dateUpdated':
            return 'created_on';
        case 'users':
            return 'name';
        case 'kycStatus':
            return 'kyc_status';
        default:
            return '';
    }
}
