const cat = document.getElementById('cat');
const c = cat.getContext('2d');

const cw = cat.width;
const ch = cat.height;

function draw() {
	drawRect('black', 0, 0, cw, ch);
	drawRect('white', cw/2, ch/2, 10, 10);
}

function drawRect(color, x, y, w, h) {
	c.fillStyle = color;
	c.fillRect(x,y,w,h);
}

function update() {
	draw();
	requestAnimationFrame(update);
}

update();
