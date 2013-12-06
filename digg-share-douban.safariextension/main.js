if (window.top === window) {

	setTimeout(function(){
		$(".feeditem-fuzzytime").each(function(idx,item){
			var self=$(this);
			var href=self.find("a:first").attr("href");
			console.log(href);
			var url='http://www.douban.com/share/service/?href='+encodeURIComponent(href);
			var share_html='<a href="'+url+'" class="share-story-link">db</a>';
			self.append(share_html);
			//console.log(item);
		});
	},8000);
}//END of check window.top