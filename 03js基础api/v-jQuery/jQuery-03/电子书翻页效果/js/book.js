var Book = {
	curPage: 0,
	init: function(){
		this.len = $(".runPage").length;
		this.zIndex = this.len*2;
		for (var i=0; i<this.len; i++){
			$(".runPage").eq(i).css('z-index', this.zIndex-2*i);
			$(".runPage").eq(i).children("div").css('z-index',this.zIndex-2*i-1)
		}
		this.bind();
	},
	bind: function(){
		$(".nextBtn").click(()=>{this.nextPage()})
		$(".prevBtn").click(()=>{this.prevPage()})
	},
	nextPage: function(){
		if (this.curPage < this.len){
			var el = $(".runPage").eq(this.curPage);
			el.addClass("runClass")
			if (this.curPage > 0) {
				el.css('z-index', this.zIndex+2*this.curPage)
			}
		}
		this.curPage++;
	},
	prevPage: function(){
		if (this.curPage >= 1) {
			this.curPage--;
			var el = $(".runPage").eq(this.curPage);
			el.removeClass("runClass");
			if (this.curPage >= 0) {
				el.css('z-index', this.zIndex-2*this.curPage)
			}
		}
	}
}
$(function(){
	Book.init();
})