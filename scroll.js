var pagetop, menu, yPos;

yPos=0;
function yScroll(){
	pagetop = document.getElementById('pagetop');
    menu = document.getElementById('navDiv');	
	yPos = window.pageYOffset;
	if(yPos > 125){
		pagetop.style.height = "36px";
	
	
	} else {
		pagetop.style.height = "100px";
		pagetop.style.paddingTop = "50px";
		menu.style.height = "50px";
	}
}
window.addEventListener("scroll", yScroll);
