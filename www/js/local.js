/*
// wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// wait for device API libraries to be ready
function onDeviceReady()
{
    isConnected();
}
*/


// check internet connection, return true/false
    // returns false if connection type is none
    // returns true otherwise
function isConnected() {
    var networkState = navigator.network.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';

    //alert('Connection type: ' + states[networkState]);

    if(stats[networkState] == Connection.NONE)
        return false;
    else
        return true;
}

// keep track of deleted locally (class)
    // delete if internet connection
    // css display none?

// delete by item description?
// txt of all list transactions 
    // add/delete   /  (edit maybe)
    // posible to store user name?



// Parses through list, calls store to store value
    // key value of stored items are itemN
    // N is index of item in list
function parseList()
{
    var nlItems = document.getElementsByTagName("li");  // node list

    var keyValue = "item";  // key value is item + index of li item

    for(var i = 0; i < nlItems.length; i++)
    {                    
        // keyValue + i             //key =  item(NUMBER)
        //nlItems[0].innerHTML;     // value
        store(keyValue + i, nlItems[0].innerHTML)
        document.getElementById("result").id = "1_local"
    }

}

function parseStorage()
{
    for(var i = 0; i < localStorage.length; i++)
    {
        localStorage.key(i);    // this SHOULD get items in local storage without needing to know key
                                    // (should just get everything in local storage)
                                    // just send into database
    }
}

function store(key, value) {
    // Check browser support
    if (typeof(Storage) !== "undefined") {
    // Store
        localStorage.setItem(key, value);
    // Retrieve
        document.getElementById("result").innerHTML = localStorage.getItem(key);
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}                
