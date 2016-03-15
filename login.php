<?php
    //1 is success; 0 is failure
    
    if (!(isset($_GET['username']) && isset($_GET['pwd_hash'])))
        die("Username or password hash not provided");
    
    $username = $_GET['username'];
    $pwd = $_GET['pwd_hash'];
	//$username = $argv[1];
    //$pwd = $argv[2];
	
	$pwd_hash = hash('sha256', $username . $pwd);
    
    //Database connection
    include_once "db_info.php";
    $mysqli = new mysqli($db['hostname'], $db['username'], $db['password'], $db['database']);
    
    if ($mysqli->connect_error) {
        die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
    } else {
        $stmt = $mysqli->stmt_init();
        if ($stmt->prepare("SELECT password FROM users WHERE username = ?;")) {
            $stmt->bind_param("s", $username);
            $stmt->execute();
            $stmt->bind_result($p);
            
            while ($stmt->fetch());
        }
        $stmt->close();
        
        //Terminate db connection
        $mysqli->close();
    }
	
	if ($p == $pwd_hash)
		$count = $username;
	else
		$count = 0;
    
    header("Access-Control-Allow-Origin: *");
    echo $username;
?>
