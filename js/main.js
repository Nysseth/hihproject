var hamburger = document.querySelector('.hamburger__button');
var input = document.querySelector('.navigation__hamburger')
var first_span = document.querySelector('.stripe__first');
var second_span = document.querySelector('.stripe__second');
var third_span = document.querySelector('.stripe__third');

input.addEventListener('click', function() {
    first_span.classList.toggle('stripe__first--active')
    second_span.classList.toggle('stripe__second--active')
    third_span.classList.toggle('stripe__third--active')
})

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
var parallax = document.querySelector('.parallax');
parallax.style.height = height;

$(".smooth-scroll").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop:
            $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
        }
    });


var dialog = $( ".login__modal" ).dialog({
    autoOpen: false,
    modal: true,
});
$( ".navigation__modal" ).click(function() {
    dialog.dialog( "open" );
});

$( ".modal__close").click(function() {
    dialog.dialog( "close" );
})