const cat = document.getElementById('cat');
const c = cat.getContext('2d');

const cw = cat.width;
const ch = cat.height;

class Rect
{
	constructor(x, y, w, h)
	{
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
	get left()
	{
		return this.x - this.w / 2;
	}
	get right()
	{
		return this.x + this.w / 2;
	}
	get top()
	{
		return this.y - this.h / 2;
	}
	get bottom()
	{
		return this.y + this.h / 2;
	}

}

function drawButton() {
	var button = new Rect;
	button.x = cw/2;
	button.y = ch*3/4;
	button.w = 200;
	button.h = 100;
	drawRect('white', button.left, button.top, button.w, button.h);
}

function drawBackground() {
	drawRect('black', 0, 0, cw, ch);
}

function draw() {
	drawBackground();
	drawButton();	
}

function drawRect(color, x, y, w, h) {
	c.fillStyle = color;
	c.fillRect(x,y,w,h);
}

function startPage() {
	drawBackground();
}

function update() {
	draw();
	requestAnimationFrame(update);
}

update();
