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
    //check if not empty string
    var stringItem = document.getElementById("item").innerHTML;
    
//    if(isEmpty(stringItem))
//    {
//        return;
//    }
    
    var b = new XMLHttpRequest();
    b.onreadystatechange = function() {
        var a = new XMLHttpRequest();
        a.onreadystatechange = function() {
            var splitList = splitDBList(a.responseText);
            placeList(splitList);
        };
        //a.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/get_items.php?username=<?echo $_POST['username']?>",true);
        //a.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/get_items.php?username=jeremy",true);
        a.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/get_items.php?username=" + document.getElementById("loginf").innerHTML, true);
        a.send();
    };
    b.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/add_item.php?username=" + document.getElementById("loginf").innerHTML + "&item_desc=" + document.getElementById("item").value ,true);
    b.send();
}
		
// removes item from database
    // re-displays by calling placeList
function removeItem(){
    var b = new XMLHttpRequest();
    b.onreadystatechange = function() {
        var a = new XMLHttpRequest();
        a.onreadystatechange = function() {
            //document.getElementById("output").innerHTML = a.responseText;
            var splitList = splitDBList(a.responseText);
            placeList(splitList);
        };
        //a.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/get_items.php?username=<?echo $_POST['username']?>",true);
        //a.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/get_items.php?username=jeremy",true);
        a.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/get_items.php?username=" + document.getElementById("loginf").innerHTML, true);
        a.send();
    };
    b.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/delete_item.php?username=" + document.getElementById("loginf").innerHTML + "&item_desc=" + document.getElementById("ritem").value ,true);
    b.send();
}


function initialDisplay(bResponse)
{
    var a = new XMLHttpRequest();
                a.onreadystatechange = function() {
                    var outputList = splitDBList(a.responseText);
                    placeList(outputList);

                    document.getElementById("addb").innerHTML = "<br><br>Item to add: <input type=\"text\" name=\"item\" id=\"item\"><br><button type=\"button\" onclick=\"addItem()\">Add</button>";
                    document.getElementById("removeb").innerHTML = "<br><br>Item to remove: <input type=\"text\" name=\"ritem\" id=\"ritem\"><br><button type=\"button\" onclick=\"removeItem()\">Remove</button>";
                };
                //a.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/get_items.php?username=<?echo $_POST['username']?>",true);
                //a.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/get_items.php?username=jeremy",true);
                a.open("GET","http://icarus.cs.weber.edu/~rm08786/l/get_items.php?username=" + bResponse,true);
                a.send();
}

// adds user to DB
function addUser(){
    var b = new XMLHttpRequest();
    b.onreadystatechange = function() {
        //document.getElementById("I").innerHTML = "User Created";

        if (b.responseText == "1")
            //document.getElementById("output").innerHTML = b.responseText;
            document.getElementById("output").innerHTML = "User Created";
        else
            //document.getElementById("output").innerHTML = b.responseText;
            document.getElementById("output").innerHTML = "Operation Failed";
    };
    //b.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/add_user.php?username=" + document.getElementById("u").value + "&password=" + document.getElementById("p").value ,true);
    b.open("GET","http://icarus.cs.weber.edu/~rm08786/l/add_user.php?username=" + document.getElementById("u").value + "&password=" + document.getElementById("p").value ,true);
    b.send();
}