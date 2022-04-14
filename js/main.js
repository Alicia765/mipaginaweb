document.querySelector('.menu-btn').addEventListener('click', ()=>{
	document.querySelector('.nav-menu').classList.toggle('show');
});


ScrollReveal().reveal('.comprom');
ScrollReveal().reveal('.discap', {delay:500}) ;
ScrollReveal().reveal('.social-media', {delay:500}) ;
ScrollReveal().reveal('.videos', {delay:500}) ;
ScrollReveal().reveal('.noticias', {delay:500}) ;

//SCROLL UP//
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){
	var currentScroll= document.documentElement.scrollTop;
		if (currentScroll>0){
			window.requestAnimationFrame(scrollUp);
			window.scrollTo (0, currentScroll - (currentScroll/10));
		}	
}


buttonUp = document.getElementById ("button-up");

window.onscroll = function(){
	
	var scroll= document.documentElement.scrollTop;
	
	if (scroll>200){
		buttonUp.style.transform="scale(1)";	
	} else {
		buttonUp.style.transform="scale(0)";
	}
	
}