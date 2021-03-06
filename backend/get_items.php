<?php
    if (!(isset($_GET['username'])))
        die("Username not provided");
    
    $username = $_GET['username'];
    
    //Database connection
    include_once "db_info.php";
    $mysqli = new mysqli($db['hostname'], $db['username'], $db['password'], $db['database']);
    
    $data = array();
    
    if ($mysqli->connect_error) {
        die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
    } else {
        $stmt = $mysqli->stmt_init();
        if ($stmt->prepare("SELECT item_id, item_desc FROM items WHERE user_id = (SELECT user_id FROM users WHERE username = ?) ORDER BY item_id;")) {
            $stmt->bind_param("s", $username);
            $stmt->execute();
            $stmt->bind_result($item_id, $item_desc);
            
            while ($stmt->fetch())
                $data[$item_id] = $item_desc;
        }
        $stmt->close();
        
        //Terminate db connection
        $mysqli->close();
    }
    
    header("Access-Control-Allow-Origin: *");
    
    /*foreach ($data as $id => $desc)
        echo "<div id='$id'>$desc <button onclick='deleteItem($id)'>Delete</button></div>\n";*/
    
    //print_r($data);
    //echo json_encode($data);
    echo join("\n", $data);
?>
