// 封装forEach方法
Array.prototype.myForEach = function(fn) {
	var arr = this,
		len = arr.length,
		arr2 = arguments[1] || window;

	for (var i = 0; i < arr.length; i++) {
		fn.call(arr2, arr[i], i, arr);
	}
}

// 判断对象类型
function checkType(obj) {
	return Object.prototype.toString.call(obj).toLowerCase().slice(8, -1);
}

// 深拷贝
function deepClone(origin) {
	if (checkType(origin)) {
		var target = {};
	} else if (checkType(origin)) {
		var target = [];
	} else {
		return origin;
	}
	for (var key in origin) {
		if (origin.hasOwnProperty(key)) {
			target[key] = deepClone(origin[key]);
		}
	}
	return target;
}
