<?php
require_once('./dbconfig.php');
require_once('./class.phpmailer.php');
class Helper
{
	var $host;
	var $username;
	var $password;
	var $database;
	var $connect;
	var $home_page;
	var $query;
	var $data;
	var $statement;
	var $filedata;
	var $printError;

	function __construct()
	{
		$this->printError = false;
		$this->host = HOST;
		$this->username = USER_NAME;
		$this->password = PASSWORD;
		$this->database = DATABASE_NAME;
		$this->connect = new PDO("mysql:host=$this->host; dbname=$this->database", "$this->username", "$this->password");
	}

	function print_error($print) {
		$this->printError = $print;
	}

	function execute_query()
	{
		if($this->printError){
			$this->connect->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING );
		}
		$this->statement = $this->connect->prepare($this->query);
		$result = $this->statement->execute($this->data);
		$this->data = null;
		if($this->printError){
			print_r($this->query);
			print_r($this->connect->errorInfo());
		}
		return $result;
	}

	function total_row()
	{
		$this->execute_query();
		return $this->statement->rowCount();
	}

	function ValidateEmail($emailid){
		$emailStatus = true;
		if (!filter_var($emailid, FILTER_VALIDATE_EMAIL)) {
			$emailStatus = false;
		}
		return array(
			"status" =>    $emailStatus,
			"errMsg"  =>   $emailStatus==false ? "Please enter valid email-id" : ""
		);
	}

	function ValidatePhoneNumber($phone){
		$MobileNumberStatus = true;
		if(preg_match('/^[0-9]{10}+$/', $phone)) {
		
			} else {
				$MobileNumberStatus = false;//echo "Invalid Phone Number";
			}
		return array(
			"status" =>    $MobileNumberStatus,
			"errMsg"  =>    $MobileNumberStatus==false?"Please enter valid mobile no.": "",
		);
	}

	function checkPasswordStrength($password) {
		$PasswordStatus = true;
		// Define password strength requirements using regular expressions
		$uppercase = preg_match('@[A-Z]@', $password);
		$lowercase = preg_match('@[a-z]@', $password);
		$number = preg_match('@[0-9]@', $password);
		$specialChar = preg_match('@[^\w]@', $password);
		
		// Define minimum length for the password
		$minLength = 8;
		
		// Check if the password meets all the requirements
		if ($uppercase && $lowercase && $number && $specialChar && strlen($password) >= $minLength) {
			
		} else {
			$PasswordStatus = false;
		}

		return array(
			"status" =>    $PasswordStatus,
			"errMsg" =>   $PasswordStatus === false ? "Password should be 8 character long with atleast a uppercase letter,a lowercase letter, a numeric value & an special character": "",
		);
	}


	function send_email($receiver_email, $subject, $body, $headers)
	{
		return mail($receiver_email,$subject, $body, $headers);
	}

	function start() {
		$this->connect->beginTransaction();
	}

	function commit(){
		$this->connect->commit();
	}

	function rollback(){
		$this->connect->rollBack();
	}

	function redirect($page)
	{
		header('location:' . $page . '');
		exit;
	}

	function query_result()
	{
		$this->execute_query();
		return $this->statement->fetchAll();
	}

	function clean_data($data)
	{
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}

	function Upload_file($fieldName)
	{
		if (!empty($_FILES[$fieldName])) {
			$target_dir = '../upload/';
			$extension = strtolower(pathinfo(basename($_FILES[$fieldName]["name"]),PATHINFO_EXTENSION));
			$new_name = uniqid() . '.' . $extension;
			$target_path = $target_dir . $new_name;
			move_uploaded_file($_FILES[$fieldName]["tmp_name"], $target_path);
			return $target_path;
		}
	}

	function getPaginationQuery()
	{
		$pageNumber = @$_GET['pageNumber'];
		$itemPerPage = @$_GET['itemPerPage'];
		$offset = (int)$itemPerPage * (int)$pageNumber;
		if (strlen($itemPerPage) > 0 && strlen($pageNumber) > 0) {
			return " LIMIT " . $itemPerPage . " OFFSET " . $offset;
		} else {
			return "";
		}
	}

	function getSortingQuery( $tableName, $fieldName )
	{
		// FieldName -> $fieldName
		$order = @$_GET['order']; // Sorting Order ASC/DESC
		if (strlen($fieldName) > 0 && strlen($order) > 0) {
			return " ORDER BY " .$tableName .".". $fieldName . " " . $order;
		} else {
			return "";
		}
	}

	function getFilterQuery($allowedFileds){
		@$query = "";
		@$Valid_Operators = ['$in', '$like', '$eq', '$neq'];
		$operator  = @$_GET['operator']; // search opeartor
		$value  = @$_GET['value']; // value to search
		$field  = @$_GET['field']; // field to search
		if (strlen(@$operator) > 0 && strlen(@$value) > 0 && in_array(@$operator, @$Valid_Operators) && in_array(@$field, @$allowedFileds)) {
			if($field === 'productName'){
				switch ($operator) {
					case '$in':
						$query = " WHERE product_name ";
						break;
					case '$like':
						$query = " WHERE product_name ";
						break;
					case '$eq':
						$query= " WHERE product_name='".$value."' ";
						break;
					case '$neq':
						$query = " WHERE product_name ";
						break;
				}
			}
		}
		return $query;
	}

	function get_current_datetimestamp(){
		return date("Y-m-d") . ' ' . date("H:i:s", STRTOTIME(date('h:i:sa')));
	}

	function delete_query_from_array($arrayData){
		return " (".str_repeat("?,", count($arrayData) - 1)."?)";
	}

	/* 
	function admin_session_private()
	{
		if(!isset($_SESSION['admin_id']))
		{
			$this->redirect('login.php');
		}
	}

	function admin_session_public()
	{
		if(isset($_SESSION['admin_id']))
		{
			$this->redirect('index.php');
		}
	}

	function Is_exam_is_not_started($online_exam_id)
	{
		$current_datetime = date("Y-m-d") . ' ' . date("H:i:s", STRTOTIME(date('h:i:sa')));

		$exam_datetime = '';

		$this->query = "
		SELECT online_exam_datetime FROM online_exam_table 
		WHERE online_exam_id = '$online_exam_id'
		";

		$result = $this->query_result();

		foreach($result as $row)
		{
			$exam_datetime = $row['online_exam_datetime'];
		}

		if($exam_datetime > $current_datetime)
		{
			return true;
		}
		return false;
	}

	function Get_exam_question_limit($exam_id)
	{
		$this->query = "
		SELECT total_question FROM online_exam_table 
		WHERE online_exam_id = '$exam_id'
		";

		$result = $this->query_result();

		foreach($result as $row)
		{
			return $row['total_question'];
		}
	}

	function Get_exam_total_question($exam_id)
	{
		$this->query = "
		SELECT question_id FROM question_table 
		WHERE online_exam_id = '$exam_id'
		";

		return $this->total_row();
	}

	function Is_allowed_add_question($exam_id)
	{
		$exam_question_limit = $this->Get_exam_question_limit($exam_id);

		$exam_total_question = $this->Get_exam_total_question($exam_id);

		if($exam_total_question >= $exam_question_limit)
		{
			return false;
		}
		return true;
	}

	function execute_question_with_last_id()
	{
		$this->statement = $this->connect->prepare($this->query);

		$this->statement->execute($this->data);

		return $this->connect->lastInsertId();
	}

	function Get_exam_id($exam_code)
	{
		$this->query = "
		SELECT online_exam_id FROM online_exam_table 
		WHERE online_exam_code = '$exam_code'
		";

		$result = $this->query_result();

		foreach($result as $row)
		{
			return $row['online_exam_id'];
		}
	}

	function user_session_private()
	{
		if(!isset($_SESSION['user_id']))
		{
			$this->redirect('index.php');
		}
	}

	function user_session_public()
	{
		if(isset($_SESSION['user_id']))
		{
			$this->redirect('index.php');
		}
	}

	function Fill_exam_list()
	{
		$this->query = "
		SELECT online_exam_id, online_exam_title 
			FROM online_exam_table 
			WHERE exam_cateogry='".$_SESSION['exam_cateogry']."' AND exam_sub_cateogry='".$_SESSION['exam_sub_cateogry']."' AND (online_exam_status = 'Created' OR online_exam_status = 'Pending') 
			ORDER BY online_exam_title ASC
		";
		$result = $this->query_result();
		$output = '';
		foreach($result as $row)
		{
			$output .= '<option value="'.$row["online_exam_id"].'">'.$row["online_exam_title"].'</option>';
		}
		return $output;
	}
	function If_user_already_enroll_exam($exam_id, $user_id)
	{
		$this->query = "
		SELECT * FROM user_exam_enroll_table 
		WHERE exam_id = '$exam_id' 
		AND user_id = '$user_id'
		";
		if($this->total_row() > 0)
		{
			return true;
		}
		return false;
	}

	function Change_exam_status($user_id)
	{
		$this->query = "
		SELECT * FROM user_exam_enroll_table 
		INNER JOIN online_exam_table 
		ON online_exam_table.online_exam_id = user_exam_enroll_table.exam_id 
		WHERE user_exam_enroll_table.user_id = '".$user_id."'
		";

		$result = $this->query_result();

		$current_datetime = date("Y-m-d") . ' ' . date("H:i:s", STRTOTIME(date('h:i:sa')));

		foreach($result as $row)
		{
			$exam_start_time = $row["online_exam_datetime"];

			$duration = $row["online_exam_duration"] . ' minute';

			$exam_end_time = strtotime($exam_start_time . '+' . $duration);

			$exam_end_time = date('Y-m-d H:i:s', $exam_end_time);

			$view_exam = '';

			if($current_datetime >= $exam_start_time && $current_datetime <= $exam_end_time)
			{
				//exam started
				$this->data = array(
					':online_exam_status'	=>	'Started'
				);

				$this->query = "
				UPDATE online_exam_table 
				SET online_exam_status = :online_exam_status 
				WHERE online_exam_id = '".$row['online_exam_id']."'
				";

				$this->execute_query();
			}
			else
			{
				if($current_datetime > $exam_end_time)
				{
					//exam completed
					$this->data = array(
						':online_exam_status'	=>	'Completed'
					);

					$this->query = "
					UPDATE online_exam_table 
					SET online_exam_status = :online_exam_status 
					WHERE online_exam_id = '".$row['online_exam_id']."'
					";

					$this->execute_query();
				}					
			}
		}
	}

	function Get_user_question_option($question_id, $user_id)
	{
		$this->query = "
		SELECT user_answer_option FROM user_exam_question_answer 
		WHERE question_id = '".$question_id."' 
		AND user_id = '".$user_id."'
		";
		$result = $this->query_result();
		foreach($result as $row)
		{
			return $row["user_answer_option"];
		}
	}

	function Get_question_right_answer_mark($exam_id)
	{
		$this->query = "
		SELECT marks_per_right_answer FROM online_exam_table 
		WHERE online_exam_id = '".$exam_id."' 
		";

		$result = $this->query_result();

		foreach($result as $row)
		{
			return $row['marks_per_right_answer'];
		}
	}

	function Get_question_wrong_answer_mark($exam_id)
	{
		$this->query = "
		SELECT marks_per_wrong_answer FROM online_exam_table 
		WHERE online_exam_id = '".$exam_id."' 
		";

		$result = $this->query_result();

		foreach($result as $row)
		{
			return $row['marks_per_wrong_answer'];
		}
	}

	function Get_question_answer_option($question_id)
	{
		$this->query = "
		SELECT answer_option FROM question_table 
		WHERE question_id = '".$question_id."' 
		";

		$result = $this->query_result();

		foreach($result as $row)
		{
			return $row['answer_option'];
		}
	}

	function Get_exam_status($exam_id)
	{
		$this->query = "
		SELECT online_exam_status FROM online_exam_table 
		WHERE online_exam_id = '".$exam_id."' 
		";
		$result = $this->query_result();
		foreach($result as $row)
		{
			return $row["online_exam_status"];
		}
	}
	function Get_user_exam_status($exam_id, $user_id)
	{
		$this->query = "
		SELECT attendance_status 
		FROM user_exam_enroll_table 
		WHERE exam_id = '$exam_id' 
		AND user_id = '$user_id'
		";
		$result = $this->query_result();
		foreach($result as $row)
		{
			return $row["attendance_status"];
		}
	}
	function Get_user_exam_status_andBadActivity($exam_id, $user_id)
	{
		$this->query = "
		SELECT attendance_status,user_improper_activity 
		FROM user_exam_enroll_table 
		WHERE exam_id = '$exam_id' 
		AND user_id = '$user_id'
		";
		$result = $this->query_result();
		foreach($result as $row)
		{
			@$data->attendance_status = $row["attendance_status"];
			@$data->user_improper_activity = $row["user_improper_activity"];
		}
		return $data;
	} */
}
