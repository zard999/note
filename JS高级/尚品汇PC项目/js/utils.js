// 添加事件
function addEvent(el, type, fn) {
	if (el.addEventListener) {
		el.addEventListener(type, fn, false);
	} else if (el.attachEvent) {
		el.attachEvent('on' + type, function() {
			fn.call(el);
		})
	} else {
		el['on' + type] = fn;
	}
}

// 移除事件
function removeEvent(elem, type, fn) {
	if (elem.removeEventListener) {
		elem.removeEventListener(type, fn, false);
	} else if (elem.detachEvent) {
		elem.detachEvent('on' + type, fn)
	} else {
		elem['on' + type] = null;
	}
}

// 取消冒泡
function canceBubble(e) {
	var e = e || window.event;

	if (e.stopPropagation) {
		e.stopPropagation();
	} else {
		e.cancelBubble = true;
	}
}

// 取消默认事件
function preventEvent(e) {
	var e = e || window.event;
	if (e.preventDefault) {
		e.preventDefault();
	} else if (e.returnValue) {
		e.returnValue = false;
	}
}

// e.pageX/Y封装
function pagePos(e) {
	var sLeft = getScrollOffset().left,
		sTop = getScrollOffset().top,
		// 这是获取文档偏移量的，IE8以上会有可能会是undefined
		cLeft = document.documentElement.clientX || 0,
		cTop = document.documentElement.clientY || 0;

	return {
		X: e.clientX + sLeft - cLeft,
		Y: e.clientY + sTop - cTop
	}
}

// 获取滚动条滚动的距离
function getScrollOffset() {
	if (window.pageXOffset) {
		return {
			left: window.pageXOffset,
			top: window.pageYOffset
		}
	} else {
		return {
			left: document.body.scrollLeft + document.documentElement.scrollLeft,
			top: document.body.scrollTop + document.documentElement.scrollTop
		}
	}
}

// 获取样式属性
function getStyle(elem, prop) {
	if (window.getComputedStyle) {
		if (prop) {
			return parseInt(window.getComputedStyle(elem, null)[prop]);
		} else {
			return window.getComputedStyle(elem, null);
		}
	} else {
		if (prop) {
			return parseInt(elem.currentStyle[prop]);
		} else {
			return elem.currentStyle;
		}
	}
}

// 根据索引获取子元素节点
Element.prototype.elemChildren = function(index) {
	var childNodes = this.childNodes,
		len = childNodes.length,
		item,
		type = typeof index,
		temp = {
			"length": 0,
			"push": Array.prototype.push,
			"slice": Array.prototype.slice
		}
	for (var i = 0; i < len; i++) {
		item = childNodes[i];
		if (item.nodeType === 1) {
			temp.push(item);
		}
	}
	if (type !== 'undefined' && type !== 'number') {
		return undefined;
	}

	return index === undefined ? temp : temp[index];
}

/*
 * 提取出一个函数，可以处理一些简单的动画效果
 * 参数：
 * 		obj: 要执行动画的元素
 * 		attr: 执行动画是要修改的属性
 * 		target: 执行动画的目标位置
 * 		speed: 执行动画的速度
 * 		callback: 回调函数，这个函数将会在动画执行完毕之后被调用
 */
function move(obj, attr, target, speed, callback) {
	clearInterval(obj.timer);

	var current = getStyle(obj, attr) + speed;

	if (current > target) {
		// 此时speed应该是负数
		speed = -speed;
	}
	// 将timer存起来，不影响其他的盒子
	obj.timer = setInterval(function() {

		current = getStyle(obj, attr) + speed;

		if ((speed > 0 && current > target) || (speed < 0 && current < target)) {
			current = target;
		}

		obj.style[attr] = current + 'px';
		// console.log(current);

		if (current == target) {
			clearInterval(obj.timer);
			callback && callback();
		}
	}, 10)
}


/*
 * 定义一个函数，专门用来为一个元素添加class属性值
 * 参数
 * 	obj 要添加class属性的元素
 * 	cn 要添加的class的值
 * 	
 */
function addClass(obj, cn) {

	//判断obj中是否含有cn这个class
	if (!hasClass(obj, cn)) {
		obj.className += " " + cn;
	}

}

/*
 * 判断一个对象中是否含有指定的class属性
 * 	参数：
 * 		obj：要检查的对象
 * 		cn：要检查class值
 * 如果对象中具有该class则返回true，否则返回false
 */
function hasClass(obj, cn) {

	//检查obj中是否与b2这个class
	//var reg = /\bb2\b/;
	var reg = new RegExp("\\b" + cn + "\\b");

	return reg.test(obj.className);

}

/*
 * 删除一个元素中的class
 */
function removeClass(obj, cn) {

	//创建一个正则表达式
	var reg = new RegExp("\\b" + cn + "\\b");

	//将class属性中符合正则表达式的内容，替换为空串
	obj.className = obj.className.replace(reg, "");

}

/*
 * 切换一个元素的class属性值
 * 	如果有，则删除
 * 	如果没有，则添加
 */
function toggleClass(obj, cn) {
	//判断obj中是否有cn
	if (hasClass(obj, cn)) {
		//如果有，则删除
		removeClass(obj, cn);
	} else {
		//如果没有，则添加
		addClass(obj, cn);
	}
}
