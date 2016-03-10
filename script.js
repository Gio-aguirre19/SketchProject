var rows=16;
var cols=16;
var Size = document.getElementById("boxSize");
function Change(){
	if (Size.value == '4x4'){
		rows = 4;
		cols = 4;
	}else if (Size.value == '8x8'){
		rows = 8;
		cols = 8;
	}else if (Size.value == '16x16'){
		rows = 16;
		cols = 16;
	}else{
		rows = 32;
		cols = 32;
	}
}
var squareSize = 35;
var LeGrid = document.getElementById("grid");
for(i=0; i<cols; i++){
	for(j=0; j<cols; j++){
		var square=document.createElement("div");
		LeGrid.appendChild(square);
		var topPos=j*squareSize;
		var leftPos=i*squareSize;
		square.style.top = topPos+'px';
		square.style.left = leftPos+'px';
		$(document).ready(function(){
			$('#grid div').mouseenter(function(){
				$(this).fadeTo('fast', 1);
			});
		});
	}
}
function restart() {
    location.reload();
}