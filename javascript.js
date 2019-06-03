var button = document.getElementById("enter");
var input = document.getElementById("item");
var ul = document.querySelector("ul");

function createList()
{
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}
function checkLen()
{
	return input.value.length;
}

// function validation(reg) {
//     str = input.value;
//     if (str.trim() == "") {
//         alert("Enter your name");
//         str.focus();
//         return false;
//     }
// }
button.addEventListener("click", function(){
	if(input.value.trim()===event.keyCode===32)
	{
		alert("Enter your name");
	}
	else if(checkLen()>0&&event.keyCode!=32){
		createList();
}
})
input.addEventListener("keypress", function(event){
	if(input.value.trim()===event.keyCode===32)
	{
		alert("Enter your name");
	}
	else if(event.which===13 && checkLen()>0&&event.keyCode!=32){
	createList();
}
})




// button.addEventListener("click", function(){
// 	console.log("Click is working");
// })

// button.addEventListener("click", function(){
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode("testing"));
// 	ul.appendChild(li);
// })