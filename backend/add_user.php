<?php
    //http://icarus.cs.weber.edu/~jj42670/a3/add_user.php?username=abcde&password=kasdfgijoadflkgj
    
    if (!(isset($_GET['username']) && isset($_GET['password'])))
        die("Username or password not provided");
    
    $username = strtolower($_GET['username']);
    $password = $_GET['password'];
    $pwd_hash = hash("sha256", $username . $password);
    
    if (!preg_match('#^\w+$#', $username))
        die("0");
    
    //Database connection
    include_once "db_info.php";
    $mysqli = new mysqli($db['hostname'], $db['username'], $db['password'], $db['database']);
    
    if ($mysqli->connect_error) {
        die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
    } else {
        $stmt = $mysqli->stmt_init();
        if ($stmt->prepare("INSERT INTO users(username, password) VALUES (?, ?);")) {
            $stmt->bind_param("ss", $username, $pwd_hash);
            $stmt->execute();
            $affected_rows = $mysqli->affected_rows;
        }
        $stmt->close();
        
        //Terminate db connection
        $mysqli->close();
    }
    
    header("Access-Control-Allow-Origin: *");
    echo $affected_rows;
?>
