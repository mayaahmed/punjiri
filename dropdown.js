	var cp = document.getElementById("cp");
cp.style.right = "-1200px";

function toggleCP(){

	cp.style.height = window.innerHeight - 60+"px";
	if(cp.style.right == "-1200px"){
		cp.style.right = "0px";
	} else {
		cp.style.right = "-1200px";
	}
}
