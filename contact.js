



var slideDiv = document.getElementById("navId");
 var btn = document.getElementById("toggleButton");
btn.innerHTML = "Contact";

slideDiv.style.left = "-405px";

function toggle(){
	slideDiv.style.height = window.innerHeight - 60+"px";
	if(slideDiv.style.left == "-405px"){
		slideDiv.style.left = "0px";
        btn.innerHTML = "&#8592";
	} else {
		slideDiv.style.left = "-405px";
        btn.innerHTML = "Contact";
	}
}



var contactDiv = document.getElementById("contactDiv");
function address(){


var addString= " <br/> <br/> &copy; Punjiri Web and Mobile Technologies, 2016.  <br/> Mangalore, Karnataka, India  <br/>  Email: maya.ahmed@gmail.com <br/>  Phone: 918861659454";
contactDiv.innerHTML= addString;
}

address();
