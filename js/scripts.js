$(document).ready(function() {
	var name = "";

	var fadetime = 700;

	var displayOutput = function(title, description) {
		fadeSwap(".questionaire", "#output");
		$("#output-title").text(title);
		$("#output-description").text(description);
	};

	var fadeSwap = function(class1, class2) {
		$(class1).fadeOut(fadetime);
		setTimeout(function(){
			$(class2).fadeIn(fadetime);
		}, fadetime)
	};

	$("#questions-name").fadeIn(fadetime);

	$("#form-name").submit(function(event) {
		event.preventDefault();
		name = $("#input-name").val();
		fadeSwap("#questions-name", "#questions-initial")
	});

	$("#form-initial").submit(function(event) {
		event.preventDefault();
		
		var selected = $("input:radio[name=radio-initial]:checked").val();

		if (selected === "backend") {

		} else {
			displayOutput("CSS/Design track", "The best option for those interested in designing and styling web pages or web sites, especially if you have a background in graphic design.")
		}
	});

	$("#reset").click(function(){
		fadeSwap("#output", "#questions-initial")
	})

});
