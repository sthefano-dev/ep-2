$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 2,
			nav: true,
		},
		600: {
			items: 3,
			nav: true,
		},
		1000: {
			items: 4,
			nav: true,
			loop: true,
		},
	},
});

// Jquery del Proyecto
$(function () {
	// Efecto header
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$("header").addClass("navbar_scroll");
		} else {
			$("header").removeClass("navbar_scroll");
		}
	});
	// Menu con Jquery
	$("section").each(function () {
		var tituloSeccion = $(this).find("h2").text();
		var idSeccion = $(this).attr("id");
		$(".navbar_proyecto ul").append(
			'<li class="nav-item"><a class="nav-link" href="#' +
				idSeccion +
				'">' +
				tituloSeccion +
				"</a></li>"
		);
	});
	// Imagen a la derecha
	$(".insignia figure").append("<figcaption>");
	$(".insignia figure").mouseenter(function () {
		$(this).find("figcaption").fadeIn("fast");
	});
	$(".insignia figure").mouseleave(function () {
		$(this).find("figcaption").fadeOut("fast");
	});
	$(".insignia figure").each(function () {
		var nombre = $(this).find("img").attr("title");
		console.log(nombre);
		var rutaImagen = $(this).find("img").attr("src");
		$(this)
			.find("figcaption")
			.html("<div><h6>" + nombre + "</h6></div>");
		$(this).find("figcaption div").prepend("<i class='bi bi-zoom-in'></i>");
		$(this)
			.find("figcaption div")
			.click(function () {
				$("body").append("<div id='fondo-oscuro'>");
				$("#fondo-oscuro").append("<img src='" + rutaImagen + "'>");
				$("#fondo-oscuro").click(function () {
					$(this).remove();
				});
			});
	});
	// Otra seccion
	$("#lista-chefs li").click(function () {
		var nombrearchivo = $(this).attr("archivo-chefs");
		$("#chefs li").removeClass("active");
		$(this).addClass("active");
		fetch("chefs/" + nombrearchivo + ".html")
			.then(function (response) {
				return response.text();
			})
			.then(function (data) {
				$("#visor-chefs").html(data);
			});
	});
});
