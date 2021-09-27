;(function(){
	var Slider = function(opt){
		this.sliderItem = document.getElementsByClassName(opt.sliderItem);
		this.thumbsItem = document.getElementsByClassName(opt.thumbsItem);
		this.bindSlider();
	}
	
	Slider.prototype = {
		bindSlider: function(){
			var sItem = this.sliderItem;
			var tItem = this.thumbsItem;
			
			for (var i = 0; i < tItem.length; i++){
				(function(k){
					sItem[k].onclick = function(){
						for (var j = 0; j < tItem.length; j++){
							tItem[j].className = 'thumbs-item';
							sItem[j].className = 'slider-item';
						}
						tItem[k].className += ' active';
						this.className += ' cur';
					}
				})(i);
			}
		}
	}
	
	window.Slider = Slider;
})();