<?php
    //1 is success; 0 is failure
    
    if (!(isset($_GET['username']) && isset($_GET['pwd_hash'])))
        die("Username or password hash not provided");
    
    $username = $_GET['username'];
    $pwd_hash = $_GET['pwd_hash'];
    
    //Database connection
    include_once "db_info.php";
    $mysqli = new mysqli($db['hostname'], $db['username'], $db['password'], $db['database']);
    
    if ($mysqli->connect_error) {
        die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
    } else {
        $stmt = $mysqli->stmt_init();
        if ($stmt->prepare("SELECT COUNT(*) FROM users WHERE username = ? AND password = ?;")) {
            $stmt->bind_param("ss", $username, $pwd_hash);
            $stmt->execute();
            $stmt->bind_result($count);
            
            while ($stmt->fetch());
        }
        $stmt->close();
        
        //Terminate db connection
        $mysqli->close();
    }
    
    header("Access-Control-Allow-Origin: *");
    echo $count == 1 ? $username : 0;
?>
