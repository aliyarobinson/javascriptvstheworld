;var TABS = {}; 
;(function($) {

    TABS.FADE = {
        init: function()
     	{
			$('body').addClass('js');
			
			 $(".info ul li:not(:first)").hide();
	 
			 $(".info ul li:first").show();
			 
			 $(".tabs a").on('click', function(e){
			 	(TABS.FADE.fadeContent).call($(this));
			 	e.preventDefault();
			 });
		},
		
		fadeContent: function(e)
		{
			tabID = $(this).attr("href").split('#')[1];         
			/*$('.info ul li:not(#'+tabID+')').hide();*/
			$('.info ul li:not(#'+tabID+')').fadeOut();
			$('.info ul li#' + tabID).fadeIn();
			$(this).addClass('active');
			$(this).parent('li').siblings('li').children('a').removeClass('active');
		}
    }
    
})(jQuery);
TABS.FADE.init(); //function call

