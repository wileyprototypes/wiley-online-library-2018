function autoSuggest(e) {
    console.log(e.value.length);
    document.getElementById("searchTerm").innerHTML = e.value;
    $('#searchTerm').innerHTML = e.value;
    if (e.value.length > 2) {
        $('#autosuggest').collapse('show');
    } else if (e.value.length == 0) {
        $('#autosuggest').collapse('hide');        
    }   
    
}


var globalSearchInput = document.getElementById('global-header--search-input');

if (globalSearchInput) {
    globalSearchInput.onkeyup = function(){autoSuggest(this)};
}
