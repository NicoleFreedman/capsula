/**
 * Created by Liolya on 9/19/2015.
 */
$(document).ready(function(){
    btnMore();
    faqToggle();

    $('#ba-slider1').beforeAfter();

    $('.btn-faq').click(function() {
        $('#faq-modal').arcticmodal();
    });

    $('.btn-comment').click(function() {
        $('#comment-modal').arcticmodal();
    });
$("body").click(function(event) {
        // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
         if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible") ) {
            $('.navbar-collapse').collapse('toggle');
        }
  });


    //$('#order-modal').arcticmodal(); 

    $('.elem-styled').styler({ selectSmartPositioning: false }); 

    hasHtml5Validation = function() {
        return typeof document.createElement('input').checkValidity === 'function';
    };

    var forms = document.getElementsByTagName('form');
    for (var i = 0; i < forms.length; i++) {
        forms[i].noValidate = true;

        forms[i].addEventListener('submit', function(event) {
            //Prevent submission if checkValidity on the form returns false.
            if (!event.target.checkValidity()) {
                event.preventDefault();
                $this = $(this);
                $this.addClass('invalid');
                delay(1000, function() {
                    return $this.removeClass('invalid');
                });
                return false;
            } else {
                $(this).removeClass('invalid');
            }
        }, false);
    }

});

function btnMore() {

    var lastComment = $('.comment-list ul:first-child');
    lastComment.addClass('active');
    $('.more').click(
        function() {
            if(lastComment.next('ul').hasClass('g-hidden')){
                console.log('+1');
                lastComment = lastComment.next('ul.g-hidden');
                lastComment.slideToggle('slow').removeClass('g-hidden');

                if(lastComment.next('ul').hasClass('g-hidden')){}
                else {
                    $(this).hide();
                }
            }

        });
}


function faqToggle() {
    $('.faq-list .question').click(
        function() {
            $(this).siblings('.answer').slideToggle('slow');
        });
}

(function($){

    /* placeholder (begin) */
    jQuery.support.placeholder = false;
    test = document.createElement('input');
    if('placeholder' in test) jQuery.support.placeholder = true;

    if(!$.support.placeholder) {
        var active = document.activeElement;
        $("input[type='text'], input[type='email'], textarea").focus(function () {
            if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
                $(this).val('').removeClass('hasPlaceholder');
            }
        }).blur(function () {
            if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
                $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
            }
        });
        $("input[type='text'], input[type='email'], textarea").blur();
        $(active).focus();
        $('form').submit(function () {
            $(this).find('.hasPlaceholder').each(function() { $(this).val(''); });
        });
    }
    /* placeholder (end) */


})(jQuery);