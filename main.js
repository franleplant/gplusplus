$(function () {

	var i;
	var newDiv;

	for (i=0; i<100; i++) {

		color = i % 2 == 0 ? "even" : "odd";

		newDiv = $('<div>', {class: "square" + " " + color });


		newDiv.html("<h3>Perro - Wikipedia</h3>\
			<div>\
				<cite>es.wikipedia.org/wiki/Canis_lupus_familiaris‎</cite>\
				<p>\
					El perro o perro doméstico —cuyo nombre científico es Canis lupus familiaris —,\
					 es un mamífero carnívoro de la familia de los cánidos, que constituye una ...\
				</p>\
			</div>\
		")

		$('body').append(  newDiv  );

		newDiv = ''; 
	};

})

