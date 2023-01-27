$('.collapse-group .collapse').on('show.bs.collapse', function (i) {
    $(this).addClass("active-collapse");
    $('.collapse-group .collapse').each(function() {
        if (!$(this).hasClass("active-collapse")){
            $(this).collapse('hide');
        }
    });    
    $('.collapse-group .collapse').removeClass("active-collapse");
});

// show disclaimer on load
window.onload = function hpd(){
     setTimeout(function(){         
    console.log("hello");
         $("#hpd").collapse('show');// new left position is 1000px in this example
     }, 2000); // 2000 = 2 seconds after page load
}

$('#hpd-confirm').click(function() {
    console.log("hide the hpd");
    $("#hpd").collapse('hide');
});