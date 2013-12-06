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

}//END of check window.top