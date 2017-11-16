$(document).ready(function(){

	var url = 'http://mindicador.cl/api/';
	var fecha = new Date();
	var dia = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
	var mes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

	$('.fecha').html('<h3 class="text-center">' 
		+ dia[fecha.getDay()] 
		+ ' ' 
		+ fecha.getDate() 
		+ ' de ' 
		+ mes[fecha.getMonth()] 
		+ ', ' 
		+ fecha.getFullYear() 
		+ '</h3>'
		);

	$.ajax({
		url: url,
		method: 'GET'
	}).then(function(data) {
		var dolar_valor = data.dolar.valor
  		var euro_valor = data.euro.valor
	  	$('.table').append('<tr><td class="text-center">$ ' 
	  	+ data.dolar.valor 
	  	+ '</td>'
	  	+ '<td class="text-center">$ '
	  	+ data.euro.valor
	  	+ '</td>'
	  	+ '<td class="text-center">$ '
	  	+ data.uf.valor
	  	+ '</td>'
	  	+ '<td class="text-center">$ '
	  	+ data.utm.valor
	  	+ '</td></tr>'
  		);
  		$('.convert1').on('click', function(){
  			var clp = parseInt($('.clp').val());
  			$('.dolar1').val('$ ' + (clp / dolar_valor).toFixed(2));
  			$('.euro1').val('$ ' + (clp / euro_valor).toFixed(2));
  		})
  		$('.convert2').on('click', function(){
  			var dolar_a = parseInt($('.dolar_a').val());
  			$('.dolar_b').val('$ ' + (dolar_a * dolar_valor).toFixed(2));
  		})
	});
});