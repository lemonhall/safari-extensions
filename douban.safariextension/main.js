// document.getElementById('fp-sites').style.display = 'none';
// document.getElementById('events').style.display = 'none';


// var top = document.getElementById("dale_homepage_login_top_right");
// 	top.parentNode.removeChild(top);

// var bottom = document.getElementById("dale_homepage_login_bottom_right");
// 	bottom.parentNode.removeChild(bottom);

//$(".aside").hide();
$("#dale_homepage_login_top_right").hide();
$("#dale_homepage_login_bottom_right").hide();
$("#events").hide();
$("#fp-sites").hide();
$(".mobile-app-entrance").hide();
$("#dale_homepage_login_bottom_middle_right").hide();

var mine  = $("#friend .pl a")[1].href;

var start = mine.indexOf("minisite");

	mine  = mine.slice(0,start);

var	mine_status  = mine+"statuses";
var	mine_notes   = mine+"notes"


$("#friend").append("<p><a href='"+mine_status+"'>>我的广播"+"</p>");

//$("#friend").append("<p><a href='http://www.douban.com/people/joycejojojo/statuses'>>阿姨的广播"+"</p>");



// $.get(mine_notes, function( data ) {
// 	$("#friend").append("<p><a href='"+mine_notes+"'>>我的日记"+"</p>");
//   	var start = data.toString().indexOf('<div class="people_tags_more">');
//   		data  = data.toString().slice(start);
//   	var end   = data.indexOf('</div>');
//   		data  = data.slice(0,end+6);
//   	$("#friend").append(data);
//   	//console.log(data);
// });

// $.get("http://www.douban.com/contacts/list?tag=1", function( data ) {
// 		var result =  data.toString();

// 		//得到分页信息
// 		var p_start  =  result.indexOf('<span class="thispage" ');
// 		var	pages    =  result.slice(p_start);
// 		var p_end    =  pages.indexOf('<span class="next">');
// 			pages    =  pages.slice(0,p_end);

// 		//提取出user-list这整整一个ul列表
// 		var u_start  =  result.indexOf('<ul class="user-list">');
// 		var u_list   =  result.slice(u_start);
// 		var u_end    =  u_list.indexOf('<div class="paginator">');
// 			u_list   =  u_list.slice(0,u_end);


// 		var opt_start = u_list.indexOf('<div class="user-group-opt">');
// 		var	opt_div1  = u_list.indexOf('</div>',opt_start);
// 		var	opt_div2  = u_list.indexOf('</div>',opt_div1+6);
// 		var	opt_div3  = u_list.indexOf('</div>',opt_div2+6);
// 		var	opt_end   = opt_div3+6;
// 		var tmp       = u_list.slice(opt_start,opt_end);

// 		var newstr 	  = u_list.replace(tmp,"");
// 		//console.log(pages);
// 		console.log(newstr);

// });