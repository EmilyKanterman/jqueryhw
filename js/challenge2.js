$('#useBilling').click(function() {
	let home = $("#home");
	if ($(this).is(':checked')){
		console.log('same');
		home.val($('#billing').val())
		home.prop("disabled", true);
	}
	else {
		console.log('not the same')
		home.val($(""));
		home.prop("disabled", false);
	}
	});

