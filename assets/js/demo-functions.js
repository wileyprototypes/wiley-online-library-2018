// global search auto complete
$( "#global-search-input" ).keypress(function() {
  console.log( "Handler for .keypress() called." );
});

// show modal on load
$(window).on('load',function(){
    $('.show-modal-on-load').modal('show');
});

// show dropdown on load
$(window).on('load',function(){
    $('.show-dropdown-on-load').dropdown('show');
});

// multiselect article
$('#select-all').change(function(){
    $('.article-check').prop('checked',this.checked);
    if ($('#select-all').is(':checked') || $('.article-check').is(':checked')) {
        console.log("show toolbar");
        $(".article-select-tools").removeClass("hidden");
    } else {
        console.log("hide toolbar");
        $(".article-select-tools").addClass("hidden");
    }
});

$(".article-check").change(function () {
    if ($(".article-check:checked").length == $(".article-check").length) {
        $('#select-all').prop('checked','checked');
    } else {
        $('#select-all').prop('checked',false);
    }
    if ($('#select-all').is(':checked') || $('.article-check').is(':checked')) {
        $(".article-select-tools").removeClass("hidden");
    } else {
        $(".article-select-tools").addClass("hidden");
    }
});

// email alert
// $('.toast').toast()
$( "#content-alert-success" ).click(function() {
    $('#test-toast').toast('show');
    this.classList.add('text-success');
    this.classList.remove('text-warning');
    this.innerHTML= '<span class="mr-3 mdi mdi-email-check" style="font-size: 24px;"></span><span>You are signed up for email alerts</span>';
});
// $('#test-toast').toast('show');

// favourite star toggle
$( "#favourite-toggle" ).click(function() {
  $( this ).toggleClass( "active" );
});

// figure viewer
$( "#caption-toggle--btn" ).click(function() {
  $( "#figure-viewer" ).toggleClass( "caption--open" );
});

// copy to clipboard
$( ".copy-clipboard" ).click(function() {
  alert( "token copied to clipboard" );
});

// institution search - show autocomplete on focus
$( "#institution-search" ).focusin(function() {
    $( "#institution-search--list" ).css("display", "block");
});
$( "#institution-search" ).focusout(function() {
    $( "#institution-search--list" ).css("display", "none");
});

// institution login - federation select
var fedSelect = document.getElementById("federation--select");
if (fedSelect) {
    fedSelect.addEventListener("change", showOptions);
}
function showOptions() {
    var x = document.getElementById("federation--select").value,
        fedOptions = document.getElementById("federation--options");
    if (x > 0) {
        fedOptions.classList.remove('d-none');
    } else {
        fedOptions.classList.add('d-none');
    }
}