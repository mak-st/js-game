const cat = document.getElementById('cat');
const c = cat.getContext('2d');

const cat1 = new Image();
cat1.src = 'img/cat1.png';
const cat2 = new Image();
cat2.src = 'img/cat2.png';


const cw = cat.width;
const ch = cat.height;

var started = false;

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

var startBtn = new Rect(cw/2, ch*3/4, 200, 100);

function drawButton(button) {
	drawRect('black', button.left, button.top, button.w, button.h);
	c.fillStyle = 'white';
	c.font = '30px Arial';
	c.textAlign = 'center';
	c.textBaseline = 'middle';
	c.fillText('Start Game', button.x, button.y);
}

function drawBackground() {
	drawRect('white', 0, 0, cw, ch);
}

function draw() {
	drawBackground();
	if (started == false) {
		drawButton(startBtn);
	} else {
		game();
	}
		
}
var i = 0;
function catTalk() {
	i++;
	if (i%2 == 1) {
		c.drawImage(cat1, cw/2 - 80, ch/3);
	} else {
		c.drawImage(cat2, cw/2 - 80, ch/3);
	}
}

function drawRect(color, x, y, w, h) {
	c.fillStyle = color;
	c.fillRect(x,y,w,h);
}

function game() {
	c.fillStyle = 'black';
	c.font = '30px';
	c.textAlign = 'center';
	c.textBaseline = 'middle';
	c.fillText('Cat: Meow!', cw / 2, ch *2 / 3);
	setInterval(catTalk(), 100);
}

function startPage() {
	drawBackground();
}

function update() {
	draw();
	requestAnimationFrame(update);
}

update();

cat.addEventListener('click', event => {
	if (event.offsetX >= startBtn.left &&
		event.offsetX <= startBtn.right &&
		event.offsetY >= startBtn.top &&
		event.offsetY <= startBtn.bottom) {
		started = true;
	}
});