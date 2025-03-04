<?php
require_once('./statusCode.php');
require_once('./user.php');
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
        KD.Adhaar_no_front_url,	
        KD.Adhaar_no_back_url,	
        KD.Pan_no,	
        KD.Pan_no_url,	
        KD.Bank_Acc_no,	
        KD.Bank_Acc_no_url,	
        KD.Signature_url,	
        KD.Bank_name,	
        KD.Customer_dob,	
        KD.Bank_ifsc,	
        KD.Nominee_name,	
        KD.Nominee_relation,	
        KD.Nominee_dob,	
        KD.Nominee_address,
        KD.address,
        KD.dob,
        U.name as customer_name,
        U.email as email,
        U.mobile as mobile
        FROM users U
        Left JOIN kyc_data KD ON KD.Customer_id=U.id 
        Where U.id = '$itemID'";
        if ($this->helper->total_row() === 0) {
            return null;
        }
        $kyc = $this->helper->query_result()[0];
        return formatKycOutput($kyc);
    }

    function update_kyc_data($data)
    {
        $user = new Users($this->helper);
        $customer_id = $this->helper->clean_data($data['id']);
        $this->helper->data = array(
            ':id'                  =>  $customer_id,
            ':Adhaar_no'           =>  $this->helper->clean_data($data['aadharCardNumber']),
            ':Adhaar_no_front_url' =>  $this->helper->clean_data($data['aadharCard']['frontUrl']),
            ':Adhaar_no_back_url'  =>  $this->helper->clean_data($data['aadharCard']['backUrl']),
            ':Pan_no'              =>  $this->helper->clean_data($data['pancardNumber']),
            ':Pan_no_url'          =>  $this->helper->clean_data($data['panCardUrl']),
            ':Bank_Acc_no'         =>  $this->helper->clean_data($data['bankAccNo']),
            ':Bank_Acc_no_url'     =>  $this->helper->clean_data($data['bankStatementUrl']),
            ':Signature_url'       =>  $this->helper->clean_data($data['signatureUrl']),
            ':Bank_name'           =>  $this->helper->clean_data($data['bankName']),
            ':Customer_dob'        =>  $this->helper->clean_data($data['dob']),
            ':Bank_ifsc'           =>  $this->helper->clean_data($data['ifsc']),
            ':Nominee_name'        =>  $this->helper->clean_data($data['nomineeName']),
            ':Nominee_relation'    =>  $this->helper->clean_data($data['nomineerelation']),
            ':Nominee_dob'         =>  $this->helper->clean_data($data['nomineeDob']),
            ':Nominee_address'     =>  $this->helper->clean_data($data['nomineeAddress']),
            ':address'             =>  $this->helper->clean_data($data['address']),
            ':dob'                 =>  $this->helper->clean_data($data['dob'])
        );

        $this->helper->query = "
        INSERT INTO kyc_data (dob,address,Customer_id,Adhaar_no,Pan_no,Bank_Acc_no,Bank_name,Customer_dob,Bank_ifsc,Nominee_name,Nominee_relation,Nominee_dob,Nominee_address, Signature_url, Pan_no_url, Adhaar_no_front_url, Adhaar_no_back_url, Bank_Acc_no_url) 
        VALUES(:dob,:address, :id,:Adhaar_no, :Pan_no, :Bank_Acc_no, :Bank_name, :Customer_dob, :Bank_ifsc, :Nominee_name, :Nominee_relation, :Nominee_dob, :Nominee_address, :Signature_url, :Pan_no_url, :Adhaar_no_front_url, :Adhaar_no_back_url, :Bank_Acc_no_url ) 
        ON DUPLICATE KEY Update
        dob = :dob,
        address = :address,
        Adhaar_no = :Adhaar_no,
        Adhaar_no_front_url = :Adhaar_no_front_url,
        Adhaar_no_back_url = :Adhaar_no_back_url,
        Pan_no	=:Pan_no,
        Pan_no_url	=:Pan_no_url,
        Bank_Acc_no =:Bank_Acc_no,	
        Bank_Acc_no_url =:Bank_Acc_no_url,	
        Signature_url =:Signature_url,
        Bank_name	=:Bank_name,
        Customer_dob =:Customer_dob,
        Bank_ifsc	=:Bank_ifsc,
        Nominee_name=:Nominee_name,
        Nominee_relation=:Nominee_relation,
        Nominee_dob=:Nominee_dob,	
        Nominee_address=:Nominee_address";
        if ($this->helper->execute_query()) {
            if(strlen($data['aadharCardNumber'])<1 || 
                strlen($data['aadharCard']['frontUrl']) < 1||
                strlen($data['aadharCard']['backUrl']) < 1||
                strlen($data['pancardNumber']) < 1||
                strlen($data['panCardUrl']) < 1||
                strlen($data['bankAccNo']) < 1||
                strlen($data['bankStatementUrl']) < 1||
                strlen($data['signatureUrl']) < 1||
                strlen($data['bankName']) < 1||
                strlen($data['dob']) < 1||
                strlen($data['ifsc']) < 1||
                strlen($data['nomineeName']) < 1||
                strlen($data['nomineerelation']) < 1||
                strlen($data['nomineeDob']) < 1||
                strlen($data['nomineeAddress']) < 1||
                strlen($data['address']) < 1||
                strlen($data['dob']) < 1
            ){
                return array('status'    =>    true );
            }else{
                return array('status'    =>  true, 'kycStatus' =>  $user->update_user_kyc($customer_id) );
            }
        }
        return false;
    }
}

function formatKycOutput($row)
{
    return (object) array(
        "id" => $row['Customer_id'],
        "Adhaarno" => $row['Adhaar_no'],
        "AdhaarnoFrontUrl" => $row['Adhaar_no_front_url'],
        "AdhaarnoBackUrl" => $row['Adhaar_no_back_url'],
        "Panno" => $row['Pan_no'],
        "PannoUrl" => $row['Pan_no_url'],
        "Bank_Acc_no" => $row['Bank_Acc_no'],
        "Bank_Acc_no_url" => $row['Bank_Acc_no_url'],
        "SignatureUrl" => $row['Signature_url'],
        "Bank_name" => $row['Bank_name'],
        "Customer_dob" =>  $row['Customer_dob'],
        "Bank_ifsc" =>  $row['Bank_ifsc'],
        "Nominee_name" => $row['Nominee_name'],
        "Nominee_relation" =>  $row['Nominee_relation'],
        "Nominee_dob" =>  $row['Nominee_dob'],
        "Nominee_address" =>  $row['Nominee_address'],
        "Customer_name" => $row['customer_name'],
        "email" => $row['email'],
        "mobile" => $row['mobile'],
        "address" => $row['address'],
        "dob" => $row['dob']
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
