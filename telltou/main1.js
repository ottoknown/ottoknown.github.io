// JavaScript Document
var i=0;
window.onload=function(){
	var iNO = document.getElementById("iNO");
	var iOK = document.getElementById("iOK");
	var iTEXT = document.getElementById("iTEXT");
	iNO.onclick=function(){
		i++;
		if(i==1){
	   		iTEXT.innerHTML = "~ 一生一世爱你 ~";
		}else if(i==2){
		   	iTEXT.innerHTML = "~ 一辈子宠着你 ~";
		}else if(i==3){
		   	iTEXT.innerHTML = "~ 家务我全干 ~";
		}else if(i==4){
			iTEXT.innerHTML = "~ 你一定要同意 ~";
		}else if(i==5){
			iTEXT.innerHTML = "~ 不藏私房钱 ~";
		}else if(i==6){
			iTEXT.innerHTML = "~ 房子写你名 ~";
		}else if(i==7){
			iTEXT.innerHTML = "~ 房子写你名 ~";
		}else if(i==8){
			iTEXT.innerHTML = "~ 给你操 ~";
			i=0;
		}
	}
	iOK.onclick=function(){
		iTEXT.innerHTML = "同意了，爱你呦~~~";
	}
}