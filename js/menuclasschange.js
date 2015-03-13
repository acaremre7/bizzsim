 function changecurrent(index) {
        if (index == 1) {
            $('#menu1').addClass('currentparent');
            $('#menuimg1').removeClass('logmenu1');
            $('#menuimg1').addClass('logmenu1hover');

            $('#menu2').removeClass('currentparent');
            $('#menuimg2').removeClass('logmenu2hover');
            $('#menuimg2').addClass('logmenu2');

            $('#menu3').removeClass('currentparent');
            $('#menuimg3').removeClass('logmenu3hover');
            $('#menuimg3').addClass('logmenu3');

            $('#menu4').removeClass('currentparent');
            $('#menuimg4').removeClass('logmenu4hover');
            $('#menuimg4').addClass('logmenu4');

            $('#menu5').removeClass('currentparent');
            $('#menuimg5').removeClass('logmenu5hover');
            $('#menuimg5').addClass('logmenu5');
        }
        else if (index == 2) {
            $('#menu2').addClass('currentparent');
            $('#menuimg2').removeClass('logmenu2');
            $('#menuimg2').addClass('logmenu2hover');

            $('#menu1').removeClass('currentparent');
            $('#menuimg1').removeClass('logmenu1hover');
            $('#menuimg1').addClass('logmenu1');

            $('#menu3').removeClass('currentparent');
            $('#menuimg3').removeClass('logmenu3hover');
            $('#menuimg3').addClass('logmenu3');

            $('#menu4').removeClass('currentparent');
            $('#menuimg4').removeClass('logmenu4hover');
            $('#menuimg4').addClass('logmenu4');

            $('#menu5').removeClass('currentparent');
            $('#menuimg5').removeClass('logmenu5hover');
            $('#menuimg5').addClass('logmenu5');
        }
        else if (index == 3) {
            $('#menu3').addClass('currentparent');
            $('#menuimg3').removeClass('logmenu3');
            $('#menuimg3').addClass('logmenu3hover');

            $('#menu1').removeClass('currentparent');
            $('#menuimg1').removeClass('logmenu1hover');
            $('#menuimg1').addClass('logmenu1');

            $('#menu2').removeClass('currentparent');
            $('#menuimg2').removeClass('logmenu2hover');
            $('#menuimg2').addClass('logmenu2');

            $('#menu4').removeClass('currentparent');
            $('#menuimg4').removeClass('logmenu4hover');
            $('#menuimg4').addClass('logmenu4');

            $('#menu5').removeClass('currentparent');
            $('#menuimg5').removeClass('logmenu5hover');
            $('#menuimg5').addClass('logmenu5');
        }
        else if (index == 4) {
            $('#menu4').addClass('currentparent');
            $('#menuimg4').removeClass('logmenu4');
            $('#menuimg4').addClass('logmenu4hover');

            $('#menu1').removeClass('currentparent');
            $('#menuimg1').removeClass('logmenu1hover');
            $('#menuimg1').addClass('logmenu1');

            $('#menu3').removeClass('currentparent');
            $('#menuimg3').removeClass('logmenu3hover');
            $('#menuimg3').addClass('logmenu3');

            $('#menu2').removeClass('currentparent');
            $('#menuimg2').removeClass('logmenu2hover');
            $('#menuimg2').addClass('logmenu2');

            $('#menu5').removeClass('currentparent');
            $('#menuimg5').removeClass('logmenu5hover');
            $('#menuimg5').addClass('logmenu5');
        }
        else if (index == 5) {
            $('#menu5').addClass('currentparent');
            $('#menuimg5').removeClass('logmenu5');
            $('#menuimg5').addClass('logmenu5hover');

            $('#menu1').removeClass('currentparent');
            $('#menuimg1').removeClass('logmenu1hover');
            $('#menuimg1').addClass('logmenu1');

            $('#menu3').removeClass('currentparent');
            $('#menuimg3').removeClass('logmenu3hover');
            $('#menuimg3').addClass('logmenu3');

            $('#menu4').removeClass('currentparent');
            $('#menuimg4').removeClass('logmenu4hover');
            $('#menuimg4').addClass('logmenu4');

            $('#menu2').removeClass('currentparent');
            $('#menuimg2').removeClass('logmenu2hover');
            $('#menuimg2').addClass('logmenu2');
        }
	else{
	    $('#menu2').removeClass('currentparent');
	    $('#menuimg2').removeClass('logmenu2hover');
	    $('#menuimg2').addClass('logmenu2');

	    $('#menu1').removeClass('currentparent');
	    $('#menuimg1').removeClass('logmenu1hover');
	    $('#menuimg1').addClass('logmenu1');

	    $('#menu3').removeClass('currentparent');
	    $('#menuimg3').removeClass('logmenu3hover');
	    $('#menuimg3').addClass('logmenu3');

	    $('#menu4').removeClass('currentparent');
	    $('#menuimg4').removeClass('logmenu4hover');
	    $('#menuimg4').addClass('logmenu4');

	    $('#menu5').removeClass('currentparent');
	    $('#menuimg5').removeClass('logmenu5hover');
	    $('#menuimg5').addClass('logmenu5');

	}
	
    }