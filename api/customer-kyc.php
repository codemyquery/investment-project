<?php
class CustomerKYC
{
    var $helper;
    function __construct($helper)
    {
        $this->helper = $helper;
    }


    function get_kycData($itemID)
    {

        $this->helper->query = "SELECT 
        KD.Customer_id,
        KD.Adhaar_no,	
        KD.Pan_no,	
        KD.Bank_Acc_no,	
        KD.Bank_name,	
        KD.Customer_dob,	
        KD.Bank_ifsc,	
        KD.Nominee_name,	
        KD.Nominee_relation,	
        KD.Nominee_dob,	
        KD.Nominee_address,
        U.name as customer_name
        FROM users U
        Left JOIN kyc_data KD ON KD.Customer_id=U.id 
        Where U.id = '$itemID'";
        if ($this->helper->total_row() === 0) {
            return null;
        }
        $kyc = $this->helper->query_result()[0];
        return formatKycOutput($kyc);
    }

    function get_kyc_list()
    {
        $pages_array = array();
        $this->helper->query = "SELECT 
        kyc_data.Customer_id	
        kyc_data.Adhaar_no	
        kyc_data.Pan_no	
        kyc_data.Bank_Acc_no	
        kyc_data.Bank_name	
        kyc_data.Customer_dob	
        kyc_data.Bank_ifsc	
        kyc_data.Nominee_name	
        kyc_data.Nominee_relation	
        kyc_data.Nominee_dob	
        kyc_data.Nominee_address
        users.name as customer_name
        FROM kyc_data 
        INNER JOIN users ON kyc_data.customer_id=users.id"
            . $this->helper->getSortingQuery('employee', t_plansell(@$_GET['orderBy']))
            . $this->helper->getPaginationQuery();
        $total_rows = $this->helper->query_result();
        $this->helper->query = "SELECT COUNT(*) as count FROM kyc_data.";
        $total_Count = $this->helper->query_result();
        foreach ($total_rows as $row) {
            $pages_array[] = formatKycOutput($row);
        }
        return array(
            "count" =>    (int)$total_Count[0]['count'],
            "rows"  =>    $pages_array,
        );
    }

    function update_kyc_data($data)
    {
        $customer_id = $this->helper->clean_data($data['id']);
        $pathName = $this->helper->Upload_file($data['aadharCard']['front']);
        echo $pathName;
        $this->helper->data = array(
            ':id'               => $customer_id,
            ':Adhaar_no'           =>  $this->helper->clean_data($data['aadharCardNumber']),
            ':Pan_no'          =>  $this->helper->clean_data($data['pancardNumber']),
            ':Bank_Acc_no'         =>  $this->helper->clean_data($data['bankAccNo']),
            ':Bank_name'          =>  $this->helper->clean_data($data['bankName']),
            ':Customer_dob'      =>  $this->helper->clean_data($data['dob']),
            ':Bank_ifsc'          =>  $this->helper->clean_data($data['ifsc']),
            ':Nominee_name'        =>  $this->helper->clean_data($data['nomineeName']),
            ':Nominee_relation'    =>  $this->helper->clean_data($data['nomineerelation']),
            ':Nominee_dob'         =>  $this->helper->clean_data($data['nomineeDob']),
            ':Nominee_address'     =>  $this->helper->clean_data($data['nomineeAddress'])
        );

        $this->helper->query = "
        INSERT INTO kyc_data (Customer_id,Adhaar_no,Pan_no,Bank_Acc_no,Bank_name,Customer_dob,Bank_ifsc,Nominee_name,Nominee_relation,Nominee_dob,Nominee_address) 
        VALUES(:id,:Adhaar_no, :Pan_no, :Bank_Acc_no, :Bank_name, :Customer_dob, :Bank_ifsc, :Nominee_name, :Nominee_relation, :Nominee_dob, :Nominee_address ) 
        ON DUPLICATE KEY Update
        Adhaar_no = :Adhaar_no,
        Pan_no	=:Pan_no,
        Bank_Acc_no =:Bank_Acc_no,	
        Bank_name	=:Bank_name,
        Customer_dob	=:Customer_dob,
        Bank_ifsc	=:Bank_ifsc,
        Nominee_name=:Nominee_name,
        Nominee_relation=:Nominee_relation,
        Nominee_dob=:Nominee_dob,	
        Nominee_address=:Nominee_address";
        $this->helper->execute_query();
    }
}

function formatKycOutput($row)
{
    return (object) array(
        "id" => $row['Customer_id'],
        "Adhaarno" => $row['Adhaar_no'],
        "Panno" => $row['Pan_no'],
        "Bank_Acc_no" => $row['Bank_Acc_no'],
        "Bank_name" => $row['Bank_name'],
        "Customer_dob" =>  $row['Customer_dob'],
        "Bank_ifsc" =>  $row['Bank_ifsc'],
        "Nominee_name" => $row['Nominee_name'],
        "Nominee_relation" =>  $row['Nominee_relation'],
        "Nominee_dob" =>  $row['Nominee_dob'],
        "Nominee_address" =>  $row['Nominee_address'],
        "Customer_name" => $row['customer_name']
    );
}

function t_customer_kyc($fieldName)
{
    switch ($fieldName) {
        case 'last_modified':
            return 'last_modified';

        default:
            return '';
    }
}
