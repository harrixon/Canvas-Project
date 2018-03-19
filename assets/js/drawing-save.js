// $('#save').click(function() {
//         var gh = canvasDraft.toDataURL('png');
//         var a  = document.createElement('a');
//         a.href = gh;
//         a.download = 'image.png';
//         a.click();
//      });

function saveAsImage(contextReal){
	var gh = canvasReal.toDataURL('png');
	var a  = document.createElement('a');
	a.href = gh;
	a.download = 'image.png';
	a.click();
}