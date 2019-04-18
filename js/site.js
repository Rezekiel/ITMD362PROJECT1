var button=document.getElementById("entrybutton")
button.addEventListener("click", func);
		function func(){
			var input=document.getElementById("entryinput").value;
			alert("Raymond Ezekiel: "+ input);
			document.getElementById("textoutput").innerHTML=input;
		}
