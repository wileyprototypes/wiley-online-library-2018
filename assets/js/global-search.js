// early concept

var gsStylesOnFocus = {
      transform : "scale(1,1)"
};
var gsStylesOffFocus = {
      transform : "scale(0,0)"
};

$( "#global-header-search" ).focusin(function() {
    $( "#global-search-actions" ).css(gsStylesOnFocus);
    $( "#global-search-input" ).css("width", "300px");
});
$( "#global-header-search" ).focusout(function() {
    $( "#global-search-actions" ).css(gsStylesOffFocus);
    $( "#global-search-input" ).css("width", "150px");
});

// enhanced search experience

var globalSearchInput = document.querySelector("#global-header--search-input"),
    searchExpClosers = document.querySelectorAll(".search-exp-closer");

function openSearchExperience() {
    $('#global-brand').collapse('hide');
    $('#global-actions').collapse('hide');
    $('#search-collapse').collapse('show');
    $('#close-search-experience-actions').collapse('show');
}
function closeSearchExperience() {
    $('#global-brand').collapse('show');
    $('#global-actions').collapse('show');
    $('#search-collapse').collapse('hide');
    $('#close-search-experience-actions').collapse('hide');
}

if (globalSearchInput) {
    $( "#global-header--search-input" ).focusin(function() {
        openSearchExperience();
    });
    searchExpClosers.forEach(function(searchExpCloser) {
        searchExpCloser.addEventListener("click", closeSearchExperience, false);
    });
}