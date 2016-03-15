function login(){
			var b = new XMLHttpRequest();
			b.onreadystatechange = function() {
                if (b.responseText != "1"){
					document.getElementById("loginf").innerHTML = b.responseText;
                    //document.getElementById("loginf").innerHTML = document.getElementById("u").innerHTML;
                    
					var a = new XMLHttpRequest();
					a.onreadystatechange = function() {
						document.getElementById("output").innerHTML = a.responseText;
						document.getElementById("addb").innerHTML = "<br><br>Item to add: <input type=\"text\" name=\"item\" id=\"item\"><br><button type=\"button\" onclick=\"addItem()\">Add</button>";
						document.getElementById("removeb").innerHTML = "<br><br>Item to remove: <input type=\"text\" name=\"ritem\" id=\"ritem\"><br><button type=\"button\" onclick=\"removeItem()\">Remove</button>";
					};
					//a.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/get_items.php?username=<?echo $_POST['username']?>",true);
					//a.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/get_items.php?username=jeremy",true);
					a.open("GET","http://icarus.cs.weber.edu/~rm08786/l/get_items.php?username=" + b.responseText,true);
					a.send();
					
                } else {
                    document.getElementById("output").innerHTML = b.responseText;
				}
			};
			b.open("GET","http://icarus.cs.weber.edu/~jj42670/a3/login.php?username=" + document.getElementById("u").value + "&pwd_hash=" + document.getElementById("p").value ,true);
			//b.open("GET","http://icarus.cs.weber.edu/~rm08786/l/login.php?username=" + document.getElementById("u").value + "&pwd_hash=" + //document.getElementById("p").value ,true);
			b.send();
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