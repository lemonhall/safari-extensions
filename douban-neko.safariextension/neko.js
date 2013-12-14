
var baseURI=safari.extension.baseURI;
var html='<div id="neko"></div>'+
		 '<video controls="" name="media" id="miao" style="display:none">'+
			'<source src="'+baseURI+'kitten4.wav" type="audio/x-wav">'+
		 '</video>';


$(".aside").prepend(html);

var miao_ctl=$("#miao")[0];
var neko_ctl=$("#neko");

neko_ctl.css("background-image","url('"+baseURI+"neko.gif');");
neko_ctl.css("background-position","-64px 0px");

neko_ctl.on('webkitAnimationEnd', function() {
    this.style.webkitAnimationPlayState = "paused";
    neko_ctl.css("-webkit-animation","mymove 6s");
    this.style.webkitAnimationPlayState = "running";
});

neko_ctl.click(function(){
		 neko_ctl.css("-webkit-animation","miao 3s");
		 this.style.webkitAnimationPlayState = "running";
		 miao_ctl.play();
		 setTimeout(function(){
		 		miao_ctl.play();
		 },4800);
});

// $(".lnk-people").each(function(){
// 		var people=$(this).attr("href");
// 		if(people==="http://www.douban.com/people/joycejojojo/"){
// 			miao_ctl.play();
// 		}
// });