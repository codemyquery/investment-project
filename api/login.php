<?php
class Login
{
    var $helper;
    function __construct($helper)
    {
        $this->helper = $helper;
    }

    function validateAdminUserCredentails($data)
    {
        $userName = $this->helper->clean_data($data['username']);
        $password = $this->helper->clean_data($data['password']);
        $this->helper->query = "SELECT * FROM admin WHERE (username='$userName' OR email='$userName') AND BINARY password='$password'";
        if ($this->helper->total_row() === 1) {
            $userDetails = $this->helper->query_result()[0];
            $_SESSION["admin_username"] = $userDetails['username'];
            return formatAdminUserOutput($userDetails);
        } else {
            return null;
        }
    }

    function logout(){
        unset($_SESSION['admin_username']);
    }
}

function formatAdminUserOutput($row)
{
    return (object) array(
        "userName" => $row['username'],
        "email" => $row['email'],
        "lastLogin" => $row['last_login']
    );
}
