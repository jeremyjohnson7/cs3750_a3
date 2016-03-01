<?php
    if (!(isset($_GET['username']) && isset($_GET['item'])))
        die("Username or item not provided");
    
    $username = $_GET['username'];
    $item_description = $_GET['item'];
    
    //Database connection
    include_once "db_info.php";
    $mysqli = new mysqli($db['hostname'], $db['username'], $db['password'], $db['database']);
    
    if ($mysqli->connect_error) {
        die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
    } else {
        $stmt = $mysqli->stmt_init();
        if ($stmt->prepare("INSERT INTO items(user_id, item_desc) VALUES ((SELECT user_id FROM users WHERE username = ?), ?);")) {
            $stmt->bind_param("ss", $username, $item_description);
            $stmt->execute();
            echo $mysqli->affected_rows;
        }
        $stmt->close();
        
        //Terminate db connection
        $mysqli->close();
    }
?>
