$(document).ready(function() {
	var name = "";

	var fadetime = 700;

	var displayOutput = function(title, description) {
		fadeSwap("#output");
		$("#output-title").text(title);
		$("#output-description").text(description);
	};

	var fadeSwap = function(newclass) {
		$(".questionaire").fadeOut(fadetime);
		setTimeout(function(){
			$(newclass).fadeIn(fadetime);
		}, fadetime)
	};

	$("#questions-name").fadeIn(fadetime);

	$("#form-name").submit(function(event) {
		event.preventDefault();
		name = $("#input-name").val();
		fadeSwap("#questions-initial")
	});

	$("#form-initial").submit(function(event) {
		event.preventDefault();

		var selected = $("input:radio[name=radio-initial]:checked").val();

		if (selected === "backend") {
			fadeSwap("#questions-weborother")
		} else {
			displayOutput("CSS/Design track", "The best option for those interested in designing and styling web pages or web sites, especially if you have a background in graphic design.")
		}
	});

	$("#reset").click(function(){
		fadeSwap("#questions-initial")
	})

});
