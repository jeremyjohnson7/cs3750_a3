<?php
    echo "Hello";
    
    echo hash("sha256", "jjj" . 50) . "\n";
    
    echo hash("sha256", "jason1234") . "\n";
    
    /*if (isset($_GET['guesses']) && isset($_GET['correct'])) {
        //Database connection
        include_once "db_info.php";
        $mysqli = new mysqli($db['hostname'], $db['username'], $db['password'], $db['database']);
        
        if ($mysqli->connect_error) {
            die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
        } else {
            //Insert guesses into database
            $stmt = $mysqli->stmt_init();
            if ($stmt->prepare("INSERT INTO attempts (tries, correct_no) VALUES (?, ?)")) {
                //$stmt->bind_param("ss", $_GET['guesses'], $_GET['correct']);
                $stmt->bind_param("ii", $_GET['guesses'], $_GET['correct']);
                $stmt->execute();
            }
            $stmt->close();
            
            //Terminate db connection
            $mysqli->close();
        }
    }*/
?>
