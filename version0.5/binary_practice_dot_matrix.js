
window.addEventListener('DOMContentLoaded', function() {

	setup();

});

function event_set(str, cols, rows, light_on,light_off){

	for(let col=0; col < cols ; col++){
		document.getElementById('character_'+str+col).addEventListener('change', function(){

			let input = Number(document.getElementById('character_'+str+col).value);

			for(let row=0; row < rows ; row++){
				if(input >= Math.pow(2,3-row)      ){ document.getElementById(str+col+row).innerHTML=light_on; input -=Math.pow(2,3-row); }else{document.getElementById(str+col+row).innerHTML=light_off; }
			}

		}, true);

	}

}



function make_table(str,cols, rows, light_off){

	let tmp="";

	for(let col=0; col < cols ; col++){
	    tmp += "<table>"+ "<tr>";
		tmp += "<td>input(<input id='character_"+  str + col +   "' type='text' value='' size='5'>); </td>";

		for(let row=0; row < rows ; row++){
			tmp += "<td><span id='"+str+ col+row  + "'>"+light_off +"</span></td>";
		}

		tmp += "</tr>"+ "</table>";
	}

	return tmp;

}

