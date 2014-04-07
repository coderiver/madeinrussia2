$(document).ready(function() {
    b = $('body');
    function doclass(){
        if($(window).width()<1150){
            b.addClass('is-narrow')
        }
        else{
            b.removeClass('is-narrow')
        }
    }
    doclass();
    $(window).resize(function(event) {
        doclass();
    });

    $('.sidebar__logo a').click(function(event) {
        if(b.hasClass('is-narrow')){
            b.addClass('is-sidebar');
            return false;
        }
    });
    $('.sidebar__overlay').click(function(event) {
        b.removeClass('is-sidebar');
    });

	// select
    function select() {
        $(".js-select").each(function(){
            var select_list = $(this).find(".js-select-list");
            var text = select_list.find("li").first().text();
            select_list.hide();
            //$(this).find(".js-select-text").text(text);
            $(this).click(function(event){
                if ($(this).hasClass("is-active")) {
                    $(this).removeClass("is-active");
                    select_list.slideUp("fast");
                }
                else {
                    $(".js-select").removeClass("is-active");
                    $(".js-select-list").hide();
                    select_list.slideDown("fast");
                    $(this).addClass("is-active");
                }
                event.stopPropagation();
            });
            select_list.find("li").click(function(event) {
                var id = $(this).attr("data-id");
                var text = $(this).text();
                $(this).parent().parent().find(".js-select-text").text(text);
                $(this).parent().parent().find(".js-select-input").val(id);
                $(this).parent().hide();
                $(this).parents(".js-select").removeClass("is-active");
                event.stopPropagation();
                return false;
            });
        });

    }
    select();
    $('.js-select').click(function(event){
        event.stopPropagation();
    });


    // tabs

    function tab() {
        $(".js-tab").each(function(){
            var tab_link = $(this).find("a");
            var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
            tab_cont.hide();
            $(this).parents(".js-tab-group").find(".js-tab1").show();
                tab_link.bind("click", function() {
                var index = $(this).attr("href");
                tab_link.removeClass("is-active");
                tab_link.parent().removeClass("is-active");
                $(this).addClass("is-active");
                $(this).parent().addClass("is-active");
                tab_cont.hide();
                $(this).parents(".js-tab-group").find("."+index).show();
                return false;
            });
        });
    } 
    tab();

    // select langueage

    function select_lang() {
        $(".js-lang").each(function(){
            var select_list = $(this).find(".js-lang-list");
            var text = select_list.find("li").first().text();
            select_list.hide();
            //$(this).find(".js-select-text").text(text);
            $(this).click(function(event){
                if ($(this).hasClass("is-active")) {
                    $(this).removeClass("is-active");
                    select_list.slideUp("fast");
                }
                else {
                    $(".js-lang").removeClass("is-active");
                    $(".js-lang-list").hide();
                    select_list.slideDown("fast");
                    $(this).addClass("is-active");
                }
                event.stopPropagation();
            });
            select_list.find("li").click(function(event) {
                var id = $(this).attr("data-id");
                var text = $(this).text();
                var text_short = text.substr(0,3);
                $(this).parent().parent().find(".js-lang-text").text(text_short);
                $(this).parent().parent().find(".js-lang-input").val(id);
                $(this).parent().hide();
                $(this).parents(".js-lang").removeClass("is-active");
                event.stopPropagation();
                return false;
            });
        });

    }
    select_lang();
    $('.js-lang').click(function(event){
        event.stopPropagation();
    });
    
    
    
    // body scroll-top  
    
    function scrollup(){
       if ($(window).scrollTop() >= 50) {
            $(".js-scrolltop").addClass('is-visible');
        }
        else{
            $(".js-scrolltop").removeClass('is-visible');
        } 
    };
    scrollup();

    $(".js-scrolltop").click(function (){
        $('html, body').animate({
            scrollTop: $(".wrapper").offset().top
        }, 500);
    })

    // fixed breadcrumbs

    function breadcrumbs(){

        var bc = $(".breadcrumbs");
        var bc_top = ($(".js-breadcrumbs").offset().top);
        console.log(bc_top);
        if ($(window).scrollTop() >= (bc_top - 50) ) {
            bc.addClass('is-fixed');
        }
        else{
            bc.removeClass('is-fixed');
        }
    
    }
    if ($(".breadcrumbs").length) {
        breadcrumbs();
    };
    
    // feedback popups

    $(".js-overlay").hide();
    $(".js-feedback").hide();
    $(".js-thanks").hide();
    
    $(".js-feedback-btn").on('click', function(){
        $(".js-overlay").show();
        $(".js-feedback").show();
    });
    $(".js-feedback-close").on('click', function(){
        $(this).parent().hide();
        $(".js-overlay").hide();
    });
    $(".js-feedback-submit").on('click', function(){
        $(this).parents('.js-feedback').hide();
        $(".js-thanks").show();
        return false;
    });
    $(".js-thanks-close").on('click', function(){
        $(this).parent().hide();
        $(".js-overlay").hide();
    });
    $(".js-feedback-again").on('click', function(){
        $(this).parents('.js-thanks').hide();
        $(".js-feedback").show();
    });
    $(".js-overlay").on('click', function(){
        $(".js-feedback").hide();
        $(".js-thanks").hide();
        $(this).hide();
    });


    // fancybox

    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            nextEffect : 'fade',
            prevEffect : 'fade',
            padding : 23,
            helpers: {
              overlay: {
                locked: false
              }
            }
        });
    };
    

    if(location.pathname == '/') {
        var url='/rss/twitter?new=1';
        var n = 4;
        if(n) { url=url+'/'+n; }
        $.get(url, {}, function(data) { $('#tweetbox').html(data); });
    }


    $(window).scroll(function(){
        if ($(".breadcrumbs").length) {
            breadcrumbs();
        };
        scrollup();
    });

    $(document).click(function(event){
      $(".js-select-list").slideUp('fast');
      $(".js-lang").removeClass('is-open');
	});


});