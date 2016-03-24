// parse through string with newline separator
    // returns array
function splitDBList(value)
{
    split = value.split("\n");
    return split;                
}

// places an array into div with id = output
function placeList(list)
{
    document.getElementById("output").innerHTML = ""; 
    for(var i = 0; i < list.length; i++)
    {
        document.getElementById("output").innerHTML +=  "<li id=" + i + ">" + list[i] + "</li>";
    }
}

function isEmpty(stringItem)
{
    var trimmed = stringItem.trim();
    if(trimmed.length == 0)
        return true;
    else
        return false;
}


// adds item into database
    // re-displays by calling placeList
function addItem(){
    var stringItem = document.getElementById("item");
    var trimmed = stringItem.value.trim();
    
    var b = new XMLHttpRequest();
    b.onreadystatechange = function() {
        var a = new XMLHttpRequest();
        a.onreadystatechange = function() {
            var splitList = splitDBList(a.responseText);
            placeList(splitList);
            stringItem.value = ""; // clear add item text
        };
        a.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/get_items.php?username=" + document.getElementById("loginf").innerHTML, true);
        a.send();
    };
    b.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/add_item.php?username=" + document.getElementById("loginf").innerHTML + "&item_desc=" + trimmed ,true);
    b.send();
}
		
// removes item from database
    // re-displays by calling placeList
function removeItem(){
    var stringItem = document.getElementById("ritem");
    var trimmed = stringItem.value.trim();
    
    var b = new XMLHttpRequest();
    b.onreadystatechange = function() {
        var a = new XMLHttpRequest();
        a.onreadystatechange = function() {
            var splitList = splitDBList(a.responseText);
            placeList(splitList);
            stringItem.value = "";  // clear ritem
        };
        a.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/get_items.php?username=" + document.getElementById("loginf").innerHTML, true);
        a.send();
    };
    b.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/delete_item.php?username=" + document.getElementById("loginf").innerHTML + "&item_desc=" + trimmed ,true);
    b.send();
}


function initialDisplay(bResponse)
{
    var a = new XMLHttpRequest();
    a.onreadystatechange = function() {
        var outputList = splitDBList(a.responseText);
        placeList(outputList);

        document.getElementById("addb").innerHTML = "Item to add: <input type=\"text\" name=\"item\" id=\"item\"><br><button type=\"button\" onclick=\"addItem()\">Add</button>";
        document.getElementById("removeb").innerHTML = "Item to remove: <input type=\"text\" name=\"ritem\" id=\"ritem\"><br><button type=\"button\" onclick=\"removeItem()\">Remove</button>";
    };
    a.open("GET","http://icarus.cs.weber.edu/~rm08786/l/get_items.php?username=" + bResponse,true);
    a.send();
}

function hashPass(){
    var lowerUser = document.getElementById("u").value;
    return sha256_digest(lowerUser.toLowerCase() + document.getElementById("p").value);
}
        
function addUser(){
    var b = new XMLHttpRequest();
    b.onreadystatechange = function() {

        if (b.responseText == "1")
            document.getElementById("output").innerHTML = "User Created";
        else
            document.getElementById("output").innerHTML = "Operation Failed";
    };
    b.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/add_user.php?username=" + document.getElementById("u").value + "&password=" + hashPass() ,true);
    b.send();
}

function login(){
    var b = new XMLHttpRequest();
    b.onreadystatechange = function() {
        if (b.responseText != 0){
            document.getElementById("loginf").innerHTML = b.responseText;
            document.getElementById("loginf").setAttribute("class", "itemf");
            var a = new XMLHttpRequest();
            a.onreadystatechange = function() {

                var outputList = splitDBList(a.responseText);
                placeList(outputList);

                document.getElementById("addb").innerHTML = "Item to add: <input type=\"text\" name=\"item\" id=\"item\"><br><button type=\"button\" onclick=\"addItem()\">Add</button>";
                document.getElementById("removeb").innerHTML = "Item to remove: <input type=\"text\" name=\"ritem\" id=\"ritem\"><br><button type=\"button\" onclick=\"removeItem()\">Remove</button>";
            };
            a.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/get_items.php?username=" + b.responseText,true);
            a.send();

        } else {
            document.getElementById("output").innerHTML = b.responseText;
        }
    };
    b.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/login.php?username=" + document.getElementById("u").value + "&pwd_hash=" + hashPass() ,true);
    b.send();
}

/*
// replaced
// adds user to DB
function addUser(){
    var b = new XMLHttpRequest();
    b.onreadystatechange = function() {

        if (b.responseText == "1")
            document.getElementById("output").innerHTML = "User Created";
        else
            document.getElementById("output").innerHTML = "Operation Failed";
    };
    b.open("GET","http://icarus.cs.weber.edu/~rm08786/l/add_user.php?username=" + document.getElementById("u").value + "&password=" + document.getElementById("p").value ,true);
    b.send();
}
*/