// function to find closest parent element with a particular class
var getClosest = function (elem, selector) {
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		if ( elem.matches( selector ) ) return elem;
	}
	return null;
};

function showPanel() {    
    // get the target panel ID
    var newPanelID = this.getAttribute("panel-target");
    console.log(newPanelID);
    // get the target panel placement    
    var newPanelPlacement = this.getAttribute("panel-target-placement");
    // set the target panel element
    var newPanel = document.querySelector(newPanelID);
    // animate the target panel in
    if (newPanelPlacement == "right") {        
        newPanel.style.animation = "fromRight 0.3s";
    } else {        
        newPanel.style.animation = "fromLeft 0.3s";
    }
    // apply the show class to make sure the target panel stays
    newPanel.classList.add("show");
    // get the current panel element
    var currentPanel = getClosest(this, '.menu-panel');
    // animate the current panel out    
    if (newPanelPlacement == "right") {        
        currentPanel.style.animation = "toLeft 0.3s";
    } else {        
        currentPanel.style.animation = "toRight 0.3s";
    }
    // remove the current panel show status
    currentPanel.classList.remove("show");
}

var panelTriggers = document.querySelectorAll(".panel-trigger");

panelTriggers.forEach(function(panelTrigger) {
  panelTrigger.addEventListener("click", showPanel);
});