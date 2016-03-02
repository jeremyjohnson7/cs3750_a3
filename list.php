 <!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>List</title>
		<script type='text/javascript'>//<![CDATA[
			window.onload = getItems;
			
			function removeItem(id){
				var data = new FormData();
				data.append()
			
				var b = new XMLHttpRequest();
				b.onreadystatechange = function() {
					document.getElementById("table").innerHTML = b.responseText;
				};
				b.open("GET","list.php",true);
				b.send();
			}

			function addItem(){  
				var b = new XMLHttpRequest();
				b.onreadystatechange = function() {
					document.getElementById("table").innerHTML = b.responseText;
				};
				b.open("GET","add_item.php",true);
			    b.send();
			}
			
			function getItems(){
				var b = new XMLHttpRequest();
				b.onreadystatechange = function() {
					document.getElementById("items").innerHTML = b.responseText;
				};
				b.open("GET","get_items.php?username=<?echo $_POST['username']?>",true);
				b.send();
			}
		//]]></script>
	<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
    padding: 5px;
}
	</style>
</head>
<body>
	<h1>List</h1>
	<div id="items"> </div>
	<button type="button" onclick="addItem()">Add</button>
</body>
</html> 