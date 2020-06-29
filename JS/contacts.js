
function dinamico( elem ) 
{
		var link=$(elem).attr('href');
		// var back=$(elem).parent().css('background');
		
		$(link).addClass('triggered');
		$(link).siblings('div').removeClass('triggered');
		
		$('.triggered').css('height', '100%');
		$('.triggered').css('width', '75%');
$('.triggered').siblings('div').attr({style:""});
		
		
	}
	
function Email() {
	var email = "vale260296@gmail.com";
	var oggetto = document.modulo.oggetto.value;
	var messaggio = document.modulo.messaggio.value;

	if ((email.indexOf("@") == (-1)) || (email == "") || (email == "undefined")) {
		alert("Inserire un indirizzo email valido.");
		document.modulo.email.focus();
	}
	else if ((oggetto == "") || (oggetto == "undefined")) {
		alert("Inserire un oggetto.");
		document.modulo.oggetto.focus();
	}
	else if ((messaggio == "") || (messaggio == "undefined")) {
		alert("Inserire un messaggio.");
		document.modulo.messaggio.focus();
	}
	else {
		location.href = "mailto:" + email + "?Subject=" + oggetto + "&Body=" + messaggio;
	}
}