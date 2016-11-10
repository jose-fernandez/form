function form(){
	document.getElementById("submit").addEventListener("click", function(e){
		document.getElementById("check").innerHTML="";
		userId(document.getElementsByName("userId")[0].value, document.getElementById("check").innerHTML);
		password(document.getElementsByName("password")[0].value, document.getElementById("check").innerHTML);
		name(document.getElementsByName("name")[0].value, document.getElementById("check").innerHTML);		
		country(document.getElementsByName("country")[0].value, document.getElementById("check").innerHTML);
		zip(document.getElementsByName("zip")[0].value, document.getElementById("check").innerHTML);
		mail(document.getElementsByName("email")[0].value, document.getElementById("check").innerHTML);
		sex(document.getElementsByName("sex"), document.getElementById("check").innerHTML);
		language(document.getElementsByName("language"), document.getElementById("check").innerHTML);

	});
}
function userId(x,y){
	if (x.length<4 || x.length>13){
		document.getElementById("check").innerHTML=`${y}User id must be 5 to 12 character.<br>`;
	}
}

function password(x,y){
	if (x.length<6 || x.length>13){
		document.getElementById("check").innerHTML=`${y}Password must be 7 to 12 character.<br>`;
	}
}

function name(x,y){
	if (!validateName(x) || x.length < 1){
		document.getElementById("check").innerHTML=`${y}Name, you cannot use numbers.<br>`;
	}
}
function validateName(x){
	return /^[a-zA-Z]*$/.test(x);
}

function country(x,y){
	if (x=="(Select a country)"){
		document.getElementById("check").innerHTML=`${y}Address, you must to choose one.<br>`;
	}
}

function zip(x,y){
	if (isNaN(x)){
		document.getElementById("check").innerHTML=`${y}Zip can contain just numbers.<br>`;
	}
}

function mail(x,y){
	if (!validateEmail(x)){
		document.getElementById("check").innerHTML=`${y}E-mail invalid.<br>`;
	}
}
function validateEmail(x){
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(x);
}

function sex(x,y){
	if (!x[0].checked && !x[1].checked){
		document.getElementById("check").innerHTML=`${y}Sex required.<br>`;
	}
}

function language(x,y){
	if (!x[0].checked && !x[1].checked){
		document.getElementById("check").innerHTML=`${y}Language required.<br>`;
	}else if(x[0].checked && x[1].checked){
		document.getElementById("check").innerHTML=`${y}Language, choose just one.<br>`;
	}
}

window.onload=function(){
	form();
};