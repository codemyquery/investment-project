<?php
class Login
{
    var $helper;
    function __construct($helper)
    {
        $this->helper = $helper;
    }

    function validateUserCredentails($data)
    {
        $userName = $this->helper->clean_data($data['username']);
        $password = $this->helper->clean_data($data['password']);
        $this->helper->query = "SELECT * FROM admin WHERE username='$userName' OR email='$userName' AND BINARY password='$password'";
        if ($this->helper->total_row() === 1) {
            $userDetails = $this->helper->query_result()[0];
            $_SESSION["admin_username"] = $userDetails['username'];
            return formatUserOutput($userDetails);
        } else {
            return null;
        }
    }
}

function formatUserOutput($row)
{
    return (object) array(
        "userName" => $row['username'],
        "email" => $row['email'],
        "lastLogin" => $row['last_login']
    );
}
