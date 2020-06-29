$("#chooselife").click(function() {
				$(html, body).animate({
				scrollTop: $("#life").offset().top
				}, 'slow','linear');
			 }); <!-- DA CONTROLLARE -->
		
// this function runs every time you are scrolling
$(window).scroll( function() 
			{
				var top_of_life = $("#life").offset().top;
				var bottom_of_life = $("#life").offset().top + $("#life").outerHeight();
				var top_of_education = $("#education").offset().top;
				var bottom_of_education = $("#education").offset().top + $("#education").outerHeight();
				var top_of_passions = $("#passions").offset().top;
				var bottom_of_passions = $("#passions").offset().top + $("#passions").outerHeight();
				
				var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
				var top_of_screen = $(window).scrollTop();

				if ((bottom_of_screen > top_of_life) && (top_of_screen < bottom_of_life)){
					$("#life").addClass("triggered");
					$("#education").removeClass("triggered");
					$("#passions").removeClass("triggered");
				} else if ((bottom_of_screen > top_of_education) && (top_of_screen < bottom_of_education)){
					$("#education").addClass("triggered");
					$("#passions").removeClass("triggered");
					$("#life").removeClass("triggered");
				} else if ((bottom_of_screen > top_of_passions) && (top_of_screen < bottom_of_passions)){
					$("#passions").addClass("triggered");
					$("#education").removeClass("triggered");
					$("#life").removeClass("triggered");
				} else {
					$("#life").removeClass("triggered");	
					$("#education").removeClass("triggered");
					$("#passions").removeClass("triggered");
				}
				
				}
				);
			