if (window.top === window) {

safari.self.addEventListener("message", handleMessage, false);

	function handleMessage(msgEvent) {
	    var messageName = msgEvent.name;
	    var messageData = msgEvent.message;
	    if (messageName === "share-to-douban") {
		    	console.log("share-to-douban");
		    	var url='http://www.douban.com/share/service/?href='+encodeURIComponent(document.location.href);
		    	safari.self.tab.dispatchMessage("shareThis",url);
	    }
	}//END of handleMessage


//如果URL为http://www.douban.com/share/service/?href=则证明已经打开了分享页面

}//END of check window.top


// //查找的时候的接口为
// var now = new Date();
// var year = now.getFullYear();
// var month = now.getMonth();
// var day = now.getDate();

// //这里的month和day都必须标准化成01，02----09这种形式
// var start_day = ""+year+month+"01";
// var end_day   = ""+year+month+day;
// //然后去取http://127.0.0.1:8080/?start=20131209&end=20131230


var url = document.location.href.toString();
var ifShare = url.indexOf("http:\/\/www.douban.com\/share\/service");
console.log("share-douban-url-working:"+url);

if(ifShare === 0){
	console.log("in share...");
	var title = $(".field-title").val();
	var summary = $(".field-abstract").html();
	var date = new Date();
	var url = $("input[name=href]").val();
	var tags = "";

	var payload={title:title,summary:summary,date:date,url:url,tags:tags};

	console.log(payload);

	var xhr = new XMLHttpRequest();
	var fd = new FormData();
		fd.append('url', url);
		fd.append('title', title);
		fd.append('summary', summary);
		fd.append('tags', tags);
		fd.append('date', date);

	xhr.open('POST', 'http://210.152.156.164:8080/set_url', true);
	xhr.send(fd);

}