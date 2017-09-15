$(document).ready(function() {
	var name = "";

	var fadetime = 1300;

	var fadeSwap = function(class1, class2) {
		$(class1).fadeOut(fadetime);
		setTimeout(function(){
			$(class2).fadeIn(fadetime);
		}, fadetime)
	};

	$("#questions-name").fadeIn(fadetime);

	$("#form-name").submit(function(event) {
		event.preventDefault();
		fadeSwap("#questions-name", "#questions-initial")
		name = $("input-name").val();
	});

});
