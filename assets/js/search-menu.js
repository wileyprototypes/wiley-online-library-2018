// enable menu in case it is being hidden in the editor
function setMenuDisplay() {
    myMenu.classList.remove("d-none");
}

// open the menu

function toggleClassMenu() {
	myMenu.classList.add("menu--animatable");	
	if(!myMenu.classList.contains("menu--visible")) {		
		myMenu.classList.add("menu--visible");
	} else {
		myMenu.classList.remove('menu--visible');		
	}	
}

function closeClassMenu(event) {
    console.log("going to close menu");
    myMenu.classList.add("menu--animatable");
    myMenu.classList.remove('menu--visible');
    event.stopPropagation();
}

function openClassMenu(event) {
    console.log("going to open menu");
    myMenu.classList.add("menu--animatable");
    myMenu.classList.add('menu--visible');
    event.stopPropagation();
}

function OnTransitionEnd() {
	// myMenu.classList.remove("menu--animatable");
}

var myMenu = document.querySelector(".menu");

if(myMenu) {
    setMenuDisplay();
    myMenu.addEventListener("transitionend", OnTransitionEnd, false);
}

var menuToggles = document.querySelectorAll(".menu-toggle"),
    menuClosers = document.querySelectorAll(".menu-closer"),
    menuOpeners = document.querySelectorAll(".menu-opener");

menuToggles.forEach(function(menuToggle) {
  menuToggle.addEventListener("click", toggleClassMenu, false);
});

menuClosers.forEach(function(menuCloser) {
  menuCloser.addEventListener("click", closeClassMenu, false);
});

menuOpeners.forEach(function(menuOpener) {
  menuOpener.addEventListener("click", openClassMenu, false);
});