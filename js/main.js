

var imagenumber=0;
setInterval(carousel,2000);
function carousel (){
	if(imagenumber>=4){
		imagenumber =1;
	}
		varimage=[ "ksar","symphony","3D","mosquée"];
		$("#test-image").attr("src","res/"+varimage[imagenumber]+".jpg");
		imagenumber ++;
		console.log(imagenumber)
	}
																											