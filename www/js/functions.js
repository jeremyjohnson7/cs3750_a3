// parse through string with newline separator
    // returns array
function splitDBList(value)
{
    split = value.split("\n");
    return split;                
}
		
function addItem(){
    var b = new XMLHttpRequest();
    b.onreadystatechange = function() {
        var a = new XMLHttpRequest();
        a.onreadystatechange = function() {

            document.getElementById("output").innerHTML = a.responseText;

            /*
            var splitArray = splitDBList(a.responseText);
            document.getElementById("output").innerHTML = "";
            for(var i = 0; i < splitArray.length; i++)
            {
                document.getElementById("output").innerHTML += "<li id=" + i + ">" + splitArray[i] + "</li>";
            }
            */
        };
        //a.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/get_items.php?username=<?echo $_POST['username']?>",true);
        //a.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/get_items.php?username=jeremy",true);
        a.open("GET","http://icarus.cs.weber.edu/~rm08786/l/get_items.php?username=" + document.getElementById("loginf").innerHTML, true);
        a.send();
    };
    b.open("GET","http://icarus.cs.weber.edu/~rm08786/l/add_item.php?username=" + document.getElementById("loginf").innerHTML + "&item_desc=" + document.getElementById("item").value ,true);
    b.send();
}
		
function removeItem(){
    var b = new XMLHttpRequest();
    b.onreadystatechange = function() {
        var a = new XMLHttpRequest();
        a.onreadystatechange = function() {
            document.getElementById("output").innerHTML = a.responseText;
        };
        //a.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/get_items.php?username=<?echo $_POST['username']?>",true);
        //a.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/get_items.php?username=jeremy",true);
        a.open("GET","http://icarus.cs.weber.edu/~rm08786/l/get_items.php?username=" + document.getElementById("loginf").innerHTML, true);
        a.send();
    };
    b.open("GET","http://icarus.cs.weber.edu/~rm08786/l/delete_item.php?username=" + document.getElementById("loginf").innerHTML + "&item_desc=" + document.getElementById("ritem").value ,true);
    b.send();
}