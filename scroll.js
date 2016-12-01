var pagetop, menu, yPos;

yPos=0;
function yScroll(){
	pagetop = document.getElementById('pagetop');
  	
	yPos = window.pageYOffset;
	if(yPos > 125){
		pagetop.style.height = "36px";
	menu.style.opacity = "0";
	
	} else {
		pagetop.style.height = "100px";
		pagetop.style.paddingTop = "50px";
      
	}
}
window.addEventListener("scroll", yScroll);
