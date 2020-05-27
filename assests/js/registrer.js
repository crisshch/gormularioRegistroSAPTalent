function cambioReg(val){
    var a = document.getElementById("optrut");
    var a1 = document.getElementById("formrut");
    var b = document.getElementById("optpas");
    var b1 = document.getElementById("formpas");

    v1 = document.getElementById("rut");
	v2 = document.getElementById("nom");
	v3 = document.getElementById("ape");
	v4 = document.getElementById("tel");
	v5 = document.getElementById("ema");
	v6 = document.getElementById("est");

	v01 = document.getElementById("nropas");
	v02 = document.getElementById("nompas");
	v03 = document.getElementById("apepas");
	v04 = document.getElementById("telpas");
	v05 = document.getElementById("emapas");
	v06 = document.getElementById("estpas");

    if(val==1){
        a.className ="boton-reg active";
        a1.style.display ="block";
        v01.value="";
        v02.value="";
        v03.value="";
        v04.value="";
        v05.value="";
        v06.value="";
        b.className ="boton-reg unactive";
        b1.style.display ="none";
    }
    if(val==2){
        b.className ="boton-reg active";
        b1.style.display ="block";
        v1.value="";
        v2.value="";
        v3.value="";
        v4.value="";
        v5.value="";
        v6.value="";
        a.className ="boton-reg unactive";
        a1.style.display ="none";
    }
}


function validate(val) {
	v1 = document.getElementById("rut");
	v2 = document.getElementById("nom");
	v3 = document.getElementById("ape");
	v4 = document.getElementById("tel");
	v5 = document.getElementById("ema");
	v6 = document.getElementById("est");

	v01 = document.getElementById("nropas");
	v02 = document.getElementById("nompas");
	v03 = document.getElementById("apepas");
	v04 = document.getElementById("telpas");
	v05 = document.getElementById("emapas");
	v06 = document.getElementById("estpas");
	flag = true;

	if(val>=1 || val==0) {
		if(v1.value == "" || !ValidaRut(v1.value)) {

			v1.style.borderColor = "red";
			v1.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v1.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=2 || val==0) {
		if(v2.value == "") {
			v2.style.borderColor = "red";
			v2.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v2.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=3 || val==0) {
		if(v3.value == "") {
			v3.style.borderColor = "red";
			v3.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v3.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=4 || val==0) {
		if(v4.value == "") {
			v4.style.borderColor = "red";
			v4.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v4.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=5 || val==0) {
		if(v5.value == "" || !validarEmail(v5.value)) {
			v5.style.borderColor = "red";
			v5.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v5.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=6 || val==0) {
		if(v6.value == "") {
			v6.style.borderColor = "red";
			v6.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v6.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=7 || val==0) {
		if(v01.value == "") {
			v01.style.borderColor = "red";
			v01.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v01.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=8 || val==0) {
		if(v02.value == "") {
			v02.style.borderColor = "red";
			v02.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v02.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=9 || val==0) {
		if(v03.value == "") {
			v03.style.borderColor = "red";
			v03.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v03.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=10 || val==0) {
		if(v04.value == "") {
			v04.style.borderColor = "red";
			v04.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v04.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=11 || val==0) {
		if(v05.value == "" || !validarEmail(v05.value)) {
			v05.style.borderColor = "red";
			v05.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v05.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=12 || val==0) {
		if(v06.value == "") {
			v06.style.borderColor = "red";
			v06.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v06.style.borderColor = "green";
			flag = true;
		}
	}

	return flag;
}

function validateGeo(val){
	v07 = document.getElementById("reg");
	v08 = document.getElementById("com");
	v09 = document.getElementById("dire");

	if(val>=13 || val==0) {
		if(v07.value == "") {
			v07.style.borderColor = "red";
			v07.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v07.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=14 || val==0) {
		if(v08.value == "") {
			v08.style.borderColor = "red";
			v08.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v08.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=15 || val==0) {
		if(v09.value == "") {
			v09.style.borderColor = "red";
			v09.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v09.style.borderColor = "green";
			flag = true;
		}
	}

	return flag;
}

function validateNivel(val){
	v10 = document.getElementById("niv");
	v11 = document.getElementById("explab");
	v12 = document.getElementById("expSAP");

	if(val>=16 || val==0) {
		if(v10.value == "") {
			v10.style.borderColor = "red";
			v10.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v10.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=17 || val==0) {
		if(v11.value == "") {
			v11.style.borderColor = "red";
			v11.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v11.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=18 || val==0) {
		if(v12.value == "") {
			v12.style.borderColor = "red";
			v12.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v12.style.borderColor = "green";
			flag = true;
		}
	}

	return flag;
}

$(document).ready(function(){

var current_fs, next_fs, previous_fs;

$(".next").click(function(){

str1 = "next1";
str2 = "next2";
str3 = "next3";
str4 = "next4";

if(!str1.localeCompare($(this).attr('id')) && document.getElementById("customCheck1").checked == 1) {
val1 = true;

}
else {
	val1 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("rut").value != "" && ValidaRut(document.getElementById("rut").value)) {
val21 = true;
}
else {
val21 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("nom").value != "") {
val22 = true;
}
else {
val22 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("ape").value != "") {
val23 = true;
}
else {
val23 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("tel").value != "") {
val24 = true;
}
else {
val24 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("ema").value != "" && validarEmail(document.getElementById("ema").value)) {
val25 = true;
}
else {
val25 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("est").value != "") {
val26 = true;
}
else {
val26 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("nropas").value != "") {
val021 = true;
}
else {
val021 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("nompas").value != "") {
val022 = true;
}
else {
val022 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("apepas").value != "") {
val023 = true;
}
else {
val023 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("telpas").value != "") {
val024 = true;
}
else {
val024 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("emapas").value != "" && validarEmail(document.getElementById("emapas").value)) {
val025 = true;
}
else {
val025 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("estpas").value != "") {
val026 = true;
}
else {
val026 = false;
}

if(!str3.localeCompare($(this).attr('id')) && document.getElementById("reg").value != "") {
val027 = true;
}
else {
val027 = false;
}

if(!str3.localeCompare($(this).attr('id')) && document.getElementById("com").value != "") {
val028 = true;
}
else {
val028 = false;
}

if(!str3.localeCompare($(this).attr('id')) && document.getElementById("dire").value != "") {
val029 = true;
}
else {
val029 = false;
}

if(!str4.localeCompare($(this).attr('id')) && document.getElementById("niv").value != "") {
val030 = true;
}
else {
val030 = false;
}

if(!str4.localeCompare($(this).attr('id')) && document.getElementById("explab").value != "") {
val031 = true;
}
else {
val031 = false;
}

if(!str4.localeCompare($(this).attr('id')) && document.getElementById("expSAP").value != "") {
val032 = true;
}
else {
val032 = false;
}

if((!str1.localeCompare($(this).attr('id')) && val1 == true) || 
(!str2.localeCompare($(this).attr('id')) && val21 == true && val22 == true && val23 == true && val24 == true && val25 == true && val26 == true) ||
(!str2.localeCompare($(this).attr('id')) && val021 == true && val022 == true && val023 == true && val024 == true && val025 == true && val026 == true) ||
(!str3.localeCompare($(this).attr('id')) && val027 == true && val028 == true && val029 == true) ||
(!str4.localeCompare($(this).attr('id')) && val030 == true && val031 == true && val032 == true) ) {

current_fs = $(this).parent().parent();
next_fs = $(this).parent().parent().next();

$(current_fs).removeClass("show");
$(next_fs).addClass("show");

current_fs.animate({}, {
step: function() {

current_fs.css({
'display': 'none',
'position': 'relative'
});

next_fs.css({
'display': 'block'
});
}
});
}


});

$(".prev").click(function(){

current_fs = $(this).parent().parent();
previous_fs = $(this).parent().parent().prev();

$(current_fs).removeClass("show");
$(previous_fs).addClass("show");

current_fs.animate({}, {
step: function() {

current_fs.css({
'display': 'none',
'position': 'relative'
});

previous_fs.css({
'display': 'block'
});
}
});
});

});





var RegionesYcomunas = {

	"regiones": [{
			"NombreRegion": "Arica y Parinacota",
			"comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
	},
		{
			"NombreRegion": "Tarapacá",
			"comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
	},
		{
			"NombreRegion": "Antofagasta",
			"comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
	},
		{
			"NombreRegion": "Atacama",
			"comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
	},
		{
			"NombreRegion": "Coquimbo",
			"comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
	},
		{
			"NombreRegion": "Valparaíso",
			"comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
	},
		{
			"NombreRegion": "Libertador Gral. Bernardo O’Higgins",
			"comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
	},
		{
			"NombreRegion": "Maule",
			"comunas": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
	},
		{
			"NombreRegion": "Biobío",
			"comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"]
	},
		{
			"NombreRegion": "Araucanía",
			"comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria", ]
	},
		{
			"NombreRegion": "Los Ríos",
			"comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
	},
		{
			"NombreRegion": "Los Lagos",
			"comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
	},
		{
			"NombreRegion": "Aisén del Gral. Carlos Ibáñez del Campo",
			"comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
	},
		{
			"NombreRegion": "Magallanes y de la Antártica Chilena",
			"comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "AntárVca", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
	},
		{
			"NombreRegion": "Metropolitana de Santiago",
			"comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
	}]
}


jQuery(document).ready(function () {

	var iRegion = 0;
	var htmlRegion = '<option readonly >Seleccione región</option>';
	var htmlComunas = '<option readonly >Seleccione comuna</option>';

	jQuery.each(RegionesYcomunas.regiones, function () {
		htmlRegion = htmlRegion + '<option value="' + RegionesYcomunas.regiones[iRegion].NombreRegion + '">' + RegionesYcomunas.regiones[iRegion].NombreRegion + '</option>';
		iRegion++;
	});

	jQuery('#regiones').html(htmlRegion);
	jQuery('#comunas').html(htmlComunas);
});

function cambiacom(val) {
		var iRegiones = 0;
		var valorRegion = val;
		var htmlComuna = '<option readonly >Seleccione comuna</option>';
		jQuery.each(RegionesYcomunas.regiones, function () {
			if (RegionesYcomunas.regiones[iRegiones].NombreRegion == valorRegion) {
				var iComunas = 0;
				jQuery.each(RegionesYcomunas.regiones[iRegiones].comunas, function () {
					htmlComuna = htmlComuna + '<option value="' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '">' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '</option>';
					iComunas++;
				});
			}
			iRegiones++;
		});
		jQuery('#comunas').html(htmlComuna);
	};

	jQuery('#comunas').change(function () {
		if (jQuery(this).val() == 'sin-region') {
			alert('selecciones Región');
		} else if (jQuery(this).val() == 'sin-comuna') {
			alert('selecciones Comuna');
		}
	});
	jQuery('#regiones').change(function () {
		if (jQuery(this).val() == 'sin-region') {
			alert('selecciones Región');
		}
	});


	function validarEmail(valor) {
  if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor)){
   return true;
  } else {
   return false;
  }
}

function ValidaRut( rut )
{
	var tmpstr = "";
	var crut = rut;
	if (crut.length> 0)
	{
		largo = crut.length;
		if ( largo <2 )
		{
			alert('rut inválido')
			return false;
		}
		for ( i=0; i <crut.length ; i++ )
		if ( crut.charAt(i) != ' ' && crut.charAt(i) != '.' && crut.charAt(i) != '-' )
		{
			tmpstr = tmpstr + crut.charAt(i);
		}
		rut = tmpstr;
		crut=tmpstr;
		largo = crut.length;
 
		if ( largo> 2 )
			rut = crut.substring(0, largo - 1);
		else
			rut = crut.charAt(0);
 
		dv = crut.charAt(largo-1);
 
		if ( rut == null || dv == null )
		return 0;
 
		var dvr = '0';
		suma = 0;
		mul  = 2;
 
		for (i= rut.length-1 ; i>= 0; i--)
		{
			suma = suma + rut.charAt(i) * mul;
			if (mul == 7)
				mul = 2;
			else
				mul++;
		}
 
		res = suma % 11;
		if (res==1)
			dvr = 'k';
		else if (res==0)
			dvr = '0';
		else
		{
			dvi = 11-res;
			dvr = dvi + "";
		}
 
		if ( dvr != dv.toLowerCase() )
		{
			return false;
		}
		return true;
	}
}