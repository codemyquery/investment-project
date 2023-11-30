<?php
date_default_timezone_set('Asia/Kolkata');
require_once('./class.phpmailer.php');
require_once('./statusCode.php');
require_once('./helper.php');
require_once('./employee.php');
require_once('./plan.php');
require_once('./login.php');
require_once('./user.php');
require_once('./contactus.php');
require_once('./plansell.php');
require_once('./Customer-kyc.php');
$method = $_SERVER['REQUEST_METHOD'];
$helper = new Helper();
//*****************Allow cross origion******************** */
// header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
		header("Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS, DELETE");
	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
		header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
	exit(0);
}
//*****************Allow cross origion******************** */
try {
	@$bodyRawData = json_decode(file_get_contents('php://input'), true);
	@$page = $method === 'GET' ? $_GET['page'] : $bodyRawData['route']['page'];
	@$action = $method === 'GET' ? $_GET['actions'] : $bodyRawData['route']['actions'];
	@$itemID = $_GET['itemID'];
} catch (\Throwable $th) {
	http_response_code(BAD_REQUEST);
	echo `{ error: 'Invalid Data' }`;
}

if (@$_GET['page'] === "upload" && @$_GET['actions'] === 'uploadKyc') {
	$new_name = uniqid() . '.' . "jpg";
	$target_path = 'upload/' . $new_name;
	if (move_uploaded_file($_FILES['uploadedFile']['tmp_name'], "../" . $target_path)) {
		http_response_code(OK);
		echo json_encode(array('url'    =>    $target_path));
	} else {
		echo json_encode(array('url'    =>    null));
		http_response_code(BAD_REQUEST);
	}
} else if ($page === 'login') {
	$result = null;
	$login = new Login($helper);
	if ($method === 'POST') {
		if ($action === 'login') {
			$result = $login->validateAdminUserCredentails($bodyRawData['data']);
		}
		if (!$result) http_response_code(BAD_REQUEST);
		echo json_encode($result);
	} else if ($method === "GET") {
		if ($action === "logout") {
			$login->logout();
			http_response_code(NO_CONTENT);
		}
	}
} else if ($page === 'employee') {
	$result = null;
	$employee = new Employee($helper);
	if ($method === 'GET') {
		if ($action === 'getEmployeeList') {
			$result = $employee->get_employee_list();
		} else if ($action === 'getEmployee') {
			$result = $employee->get_employee($itemID);
		}
		echo json_encode($result);
	} else if ($method === 'POST') { // For Create request
		if ($action === 'addEmployee') {
			$result = $employee->create_new_employee($bodyRawData['data']);
		}
		if (!$result) http_response_code(BAD_REQUEST);
		echo json_encode(array('status'    =>    $result));
	} else {
		http_response_code(METHOD_NOT_ALLOWED);
	}
} else if ($page === 'plan') {
	$result = null;
	$plan = new Plan($helper);
	if ($method === 'GET') {
		if ($action === 'getPlanList') {
			$result = $plan->get_plan_list();
		} else if ($action === 'getPlan') {
			$result = $plan->get_plan($itemID);
		}
		echo json_encode($result);
	} else if ($method === 'POST') { // For Create request
		if ($action === 'addPlan') {
			$result = $plan->create_new_Plan($bodyRawData['data']);
		}
		if (!$result) http_response_code(BAD_REQUEST);
		echo json_encode(array('status'    =>    $result));
	} else {
		http_response_code(METHOD_NOT_ALLOWED);
	}
} else if ($page === 'user') {
	$result = null;
	$user = new Users($helper);
	$userKyc = new CustomerKYC($helper);
	if ($method === 'GET') {
		if ($action === 'getUsersList') {
			$result = $user->get_user_list();
		} else if ($action === "getKYCData") {
			$result = $userKyc->get_kycData($itemID);
		}
		echo json_encode($result);
	} else if ($method === 'POST') {
		if ($action === 'createUser') {
			$result = $user->create_new_user($bodyRawData['data']);
		} else if ($action === 'loginUser') {
			$result = $user->login_user($bodyRawData['data']);
		}
		if (!$result) http_response_code(BAD_REQUEST);
		echo json_encode($result);
	} else if ($method === "PUT") {
		if ($action === 'updateKycData') {
			$result = $userKyc->update_kyc_data($bodyRawData['data']);
		}
		if (!$result) http_response_code(BAD_REQUEST);
		echo json_encode(array('status'    =>    $result));
	}
} else if ($page === 'contactus') {
	$result = null;
	$contactUs = new ContactUs($helper);
	if ($method === 'POST') { // For Create request
		if ($action === 'createContactUs') {
			$result = $contactUs->create_new_contactus($bodyRawData['data']);
		}
		if (!$result) http_response_code(BAD_REQUEST);
		echo json_encode(array('status'    =>    $result));
	} else if ($method === 'GET') {
		if ($action === 'getContactusList') {
			$result = $contactUs->get_contactus_list();
		}
		echo json_encode($result);
	}
} else if ($page === 'sell') {
	$result = null;
	$planSell = new PlanSell($helper);
	if ($method === 'GET') {
		if ($action === 'getSellist') {
			$result = $planSell->get_plansell_list();
		}
		echo json_encode($result);
	}
	else if ($method === 'POST') {
		if ($action === 'sellPlan') {
			$result = $planSell->insert_into_plansell($bodyRawData['data']);
		} 
		if (!$result) http_response_code(BAD_REQUEST);
		echo json_encode(array('status'    =>    $result));
	}
}
