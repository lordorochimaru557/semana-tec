$(document).ready (function () {
	var sections      = $('section');
	var navbar        =	$('#nav');
	var navbarHeight  = navbar.height();

	var sectionOffset = [];

	sections.each(function() {
		var section = $(this);

        var position = section.offset().top - navbarHeight;
        var backgroundColor = section.css("background-color");

        sectionOffset.push({'postion': position,'color': backgroundColor});
       
    });

	$(window).on('scroll', function(){
		var scrollPos = $(document).scrollTop();

		$.each(sectionOffset, function(index, section){
			if (scrollPos >= section.postion) {
				navbar.css("background-color", section.color);
			}
		}) 
	});

});

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("nav").style.padding = "30px 10px";
     
    } else {
      document.getElementById("nav").style.padding = "80px 10px";
      
    }
  } 