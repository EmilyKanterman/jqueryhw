console.log("here")

var msg = "Hover over an image below."

	$('img').mouseover(function(){
		$('#image').css('background-image', "url('" + this.src +"')");
		console.log("url('" + this.src +"')")
		console.log(this)
		$('#image').html(this.alt)
	})

	$('img').focus(function(){
		$('#image').css('background-image', "url('" + this.src +"')");
		console.log("url('" + this.src +"')")
		console.log(this)
		$('#image').html(this.alt)
	})



	$('img').mouseleave(function(){
		$('#image').css('background-image', "url('')");
		console.log(this)
		$('#image').html(msg)
	})

	$('img').blur(function(){
		$('#image').css('background-image', "url('')");
		console.log(this)
		$('#image').html(msg)
	})


