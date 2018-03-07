/*设置、获取及删除所有cookies*/
export default{
	setCookie(name, value){
		var Days = 30;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days*24*60*60*1000);
		document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
	},
	getCookie(name){
				var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
				if(arr=document.cookie.match(reg)){
					return unescape(arr[2]);
				}else{
					return null;
				}
	},
	removeAllCookies(){
	    var myDate = new Date();    
        myDate.setTime(-1000);//设置时间    
        var data=document.cookie;    
        var dataArray=data.split("; ");    
        for(var i=0;i<dataArray.length;i++){    
             var varName=dataArray[i].split("=");    
             document.cookie=varName[0]+"=''; expires="+myDate.toGMTString();    
        }    
	}
}
