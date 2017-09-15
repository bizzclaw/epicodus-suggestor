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
	// 2. Name Form
	$("#form-name").submit(function(event) {
		event.preventDefault();
		name = $("#input-name").val();
		fadeSwap("#questions-initial")
	});

	// 2. Initial Form
	$("#form-initial").submit(function(event) {
		event.preventDefault();

		var selected = $("input:radio[name=radio-initial]:checked").val();

		if (selected === "backend") {
			fadeSwap("#questions-weborother")
		} else {
			displayOutput("CSS/Design track", "The best option for those interested in designing and styling web pages or web sites, especially if you have a background in graphic design.")
		}
	});

	//3. Web or Other
	$("#form-weborother").submit(function(event) {
		event.preventDefault();

		var selected = $("input:radio[name=radio-weborother]:checked").val();

		if (selected === "games") {
			displayOutput("C# Track", "C# is used not only for website backend, but has a wide variety of applications in games aswell as enterprise applications.");
		} else if (selected === "apps"){
			fadeSwap("#questions-apporsite");
		} else if (selected === "mobile") {
			displayOutput("Java Track", "Java has a wide set of applications in everything (except games). It is especially used for writing the backend of websites, mobile interfaces, and many other types of applications.");
		}	else if (selected === "webdev") {
			fadeSwap("#questions-pageorsite");
		}
	});

	//4. Web Pages or Web Sites
	$("#questions-pageorsite").submit(function(event) {
		event.preventDefault();

		var selected = $("input:radio[name=radio-pageorsite]:checked").val();

		if (selected === "pages") {
			displayOutput("PHP Track", "PHP is widely used for programming the backend of each individual page.");
		} else  {
			displayOutput("Java Track", "A main use of javascript is programming the fundamental backend functionality for web sites.")
		}
	});

	//5. Apps or sites
	$("#questions-apporsite").submit(function(event) {
		event.preventDefault();
		var selected = $("input:radio[name=radio-apporsite]:checked").val();

		if (selected === "makesites") {
			displayOutput("Java Track", "While Java can, and is used widely for enterprise applications, if you want to primarily focus on Website Development, Java is the way to go.");
		} else {
			displayOutput("C# Track", "C# is used in web site development, however, it's also very widely used for programming enterprise applications.");
		}
	});

	// Reset button
	$("#reset").click(function(){
		fadeSwap("#questions-initial")
	})

});
