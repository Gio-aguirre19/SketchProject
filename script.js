var rows = 16;
var cols = 16;
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
				$(this).fadeTo('fast', 0.2);
			});
			$('#restart').click(function(){
				$(LeGrid).appendChild(square);
			});
		});
	}
}