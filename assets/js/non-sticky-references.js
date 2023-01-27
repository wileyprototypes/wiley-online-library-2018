function showPanel() {
    var y = window.scrollY - 715;
    console.log(y);
    panel.classList.add("non-sticky-references--panel--active");
    panel.style.top = y + "px";
}

var panel = document.querySelector(".non-sticky-references--panel"),
    refLinks = document.querySelectorAll(".reference-link");

refLinks.forEach(function(refLink) {
  refLink.addEventListener("click", showPanel, false);
});

// $("#header-2").hide(); // hide the fixed navbar initially

// var topofDiv = $("#rr-panel").offset().top; //gets offset of header
// var height = $("#rr-panel").outerHeight(); //gets height of header

// $(window).scroll(function(){
//     if($(window).scrollTop() > (topofDiv + height)){
//        $("#rr-tab-content").collapse('hide');
//     }
//     else{
//        $("#rr-tab-content").collapse('show');
//     }
// });