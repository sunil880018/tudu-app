/*var inputItem = document.getElementById("text");
inputItem.onkeyup = function(e)
{
	if(e.keyCode===13)
	{
		var ul = document.querySelector("#list");
        var li = document.createElement("li");
        li.innerHTML=inputItem.value;
        ul.appendChild(li);
        inputItem.value="";
        li.onclick = function(e){
        	var ul = document.querySelector("#list");
        	ul.removeChild(e.target);
        }
	}
	
}*/
var button = document.getElementById("button");
var inputItem = document.getElementById("text");
button.onclick = function(e)
{
		var ul = document.querySelector("#list");
        var li = document.createElement("li");
        li.innerHTML=inputItem.value;
        ul.appendChild(li);
        inputItem.value="";
        li.onclick = function(e){
        ul.removeChild(e.target);
	}
}
