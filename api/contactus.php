<?php
class ContactUs
{
    var $helper;
    function __construct($helper)
    {
        $this->helper = $helper;
    }

    function create_new_contactus($data)
    {
        $result = $this->helper->ValidateEmail($data['email']);
        if($result["status"] !== true)return $result;
        $result = $this->helper->ValidatePhoneNumber($data['mobile']);
        if($result["status"] !== true)return $result;
        $this->helper->data = array(
            ':name'                     =>    $this->helper->clean_data($data['name']),
            ':mobile_no'                =>    $this->helper->clean_data($data['mobile']),
            ':email'                    =>    $this->helper->clean_data($data['email']),
            ':message'                  =>    $this->helper->clean_data($data['message']),
            ':accepted_for_promotions'  =>    $this->helper->clean_data($data['acceptedPromotionMails']),
        );
        $this->helper->query = "INSERT INTO contact_us (name, mobile_no,  email, message, accepted_for_promotions) VALUES (:name,:mobile_no,:email,:message,:accepted_for_promotions)";
        return $this->helper->execute_query();
    }
    
    function get_contactus_list()
    {
        $pages_array = array();
        $this->helper->query = "SELECT * FROM contact_us "
            . $this->helper->getSortingQuery('contact_us', t_contactus(@$_GET['orderBy']))
            . $this->helper->getPaginationQuery();
        $total_rows = $this->helper->query_result();
        $this->helper->query = "SELECT COUNT(*) as count FROM contact_us";
        $total_Count = $this->helper->query_result();
        foreach ($total_rows as $row) {
            $pages_array[] = formatContactUsOutput($row);
        }
        return array(
            "count" =>    (int)$total_Count[0]['count'],
            "rows"  =>    $pages_array,
        );
    }
}

function formatContactUsOutput($row)
{
    return (object) array(
        "id" => $row['id'],
        "name" => $row['name'],
        "mobile" => $row['mobile_no'],
        "email" => $row['email'],
        "message" => $row['message'],
        "acceptedPromotionMails" => $row['accepted_for_promotions'],
        "dateUpdated" => $row['created_on']
    );
}

function t_contactus($fieldName)
{
    switch ($fieldName) {
        case 'dateUpdated':
            return 'created_on';
        case 'mobile_no':
            return 'mobile';
        case 'email':
            return 'email';
        default:
            return '';
    }
}
