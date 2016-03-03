<?php
    if (!(isset($_GET['username']) && isset($_GET['item_desc'])))
        die("Username or item not provided");
    
    $username = $_GET['username'];
    $item_desc = $_GET['item_desc'];
    
    //Database connection
    include_once "db_info.php";
    $mysqli = new mysqli($db['hostname'], $db['username'], $db['password'], $db['database']);
    
    if ($mysqli->connect_error) {
        die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
    } else {
        $stmt = $mysqli->stmt_init();
        if ($stmt->prepare("INSERT INTO items(user_id, item_desc) VALUES ((SELECT user_id FROM users WHERE username = ?), ?);")) {
            $stmt->bind_param("ss", $username, $item_desc);
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
