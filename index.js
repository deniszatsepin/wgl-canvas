module.exports = canvas;

function canvas (id, options) {
	var options = options || {};
	if (id) {
		this.element = document.getElementById(id);
	} else {
		this.element = document.createElement('canvas');
		document.body.appendChild(this.element);
	}

	this._width = options.width || 800;
	this._height = options.height || 600;
	this.width(this._width);
	this.height(this._height);

}

canvas.prototype.width = function (w) {
	if (!typeof w) {
		return this._width;
	} else {
		this._width = parseInt(w);
		this.element.style.width = w + "px";
	}
};

canvas.prototype.height = function (h) {
	if (!typeof h) {
		return this._height;
	} else {
		this._height = parseInt(h);
		this.element.style.height = h + "px";
	}
};