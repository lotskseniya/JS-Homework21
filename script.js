let canvas = document.querySelector(".canvas1");
let ctx = canvas.getContext("2d");

// Красный показатель графика:
ctx.beginPath()
ctx.fillStyle = "#ca403d";
ctx.arc(67,340,6,0,Math.PI*2,true); 
ctx.lineWidth = '6';
ctx.strokeStyle = "#ca403d";
ctx.moveTo(70,340);
ctx.lineTo(182,350);
ctx.arc(188,350,6,0,Math.PI*2,true); 
ctx.lineTo(310,348);
ctx.arc(314,348,6,0,Math.PI*2,true); 
ctx.lineTo(436,344);
ctx.arc(438,344,6,0,Math.PI*2,true); 
ctx.lineTo(556,350);
ctx.arc(560,350,6,0,Math.PI*2,true); 
ctx.lineTo(686,350);
ctx.arc(686,350,6,0,Math.PI*2,true); 
ctx.stroke();

// закрашенный белым центр окружности:
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(438,344,1,0,Math.PI*2,true); 
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(560,350,1,0,Math.PI*2,true); 
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(686,350,1,0,Math.PI*2,true); 
ctx.stroke();

// Жёлтый показатель графика:
ctx.beginPath();
ctx.fillStyle = "#EDB048";
ctx.arc(67,376,6,0,Math.PI*2,true); 
ctx.lineWidth = '6';
ctx.strokeStyle = "#EDB048";
ctx.moveTo(70,376);
ctx.lineTo(182,350);
ctx.arc(188,350,6,0,Math.PI*2,true); 
ctx.lineTo(310,348);
ctx.arc(314,348,6,0,Math.PI*2,true); 
ctx.lineTo(438,335);
ctx.arc(438,336,6,0,Math.PI*2,true);
ctx.moveTo(438,337); 
ctx.lineTo(556,240);
ctx.arc(560,240,6,0,Math.PI*2,true); 
ctx.moveTo(560,241);
ctx.lineTo(686,26);
ctx.arc(686,26,6,0,Math.PI*2,true); 
ctx.stroke();

// закрашенный белым центр окружности:
ctx.beginPath()
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(188,350,1,0,Math.PI*2,true); 
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(314,348,1,0,Math.PI*2,true); 
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(438,336,1,0,Math.PI*2,true); 
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(560,240,1,0,Math.PI*2,true); 
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(686,26,1,0,Math.PI*2,true); 
ctx.stroke();


// Зелёный показатель графика:
ctx.beginPath();
ctx.fillStyle = "#6ea459";
ctx.lineWidth = '6';
ctx.fillRect(59,354,16,16);
ctx.strokeStyle = "#6ea459";
ctx.moveTo(59,364);
ctx.lineTo(182,340);
ctx.fillRect(180,330,16,16);
ctx.lineTo(310,334);
ctx.fillRect(306,324,16,16);
ctx.lineTo(438,320);
ctx.fillRect(430,310,16,16);
ctx.moveTo(438,322); 
ctx.lineTo(556,312);
ctx.fillRect(550,302,16,16);
ctx.lineTo(686,290);
ctx.fillRect(680,282,16,16);
ctx.stroke();

//закрашенный белым центр квадрата:
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(188,338,1,0,Math.PI*2,true); 
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(314,332,1,0,Math.PI*2,true); 
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(438,318,1,0,Math.PI*2,true); 
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(558,310,1,0,Math.PI*2,true); 
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(688,290,1,0,Math.PI*2,true); 
ctx.stroke();

// Синий показатель графика:
ctx.beginPath();
ctx.fillStyle = "#3b6c9d";
ctx.lineWidth = '6';
ctx.fillRect(59,354,16,16);
ctx.strokeStyle = "#3b6c9d";
ctx.moveTo(60,366);
ctx.lineTo(182,314);
ctx.fillRect(180,304,16,16);
ctx.moveTo(190,312);
ctx.lineTo(310,258);
ctx.fillRect(304,250,16,16);
ctx.moveTo(304,262);
ctx.lineTo(438,222);
ctx.fillRect(424,216,16,16);
ctx.moveTo(424,226); 
ctx.lineTo(556,192);
ctx.fillRect(550,186,16,16);
ctx.moveTo(564,190); 
ctx.lineTo(686,130);
ctx.fillRect(680,124,16,16);
ctx.stroke();

//закрашенный белым центр квадрата:
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(67,362,1,0,Math.PI*2,true); 
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(188,312,1,0,Math.PI*2,true); 
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(312,258,1,0,Math.PI*2,true); 
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(432,224,1,0,Math.PI*2,true); 
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(558,194,1,0,Math.PI*2,true); 
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.lineWidth = '3';
ctx.strokeStyle = 'white';
ctx.arc(688,132,1,0,Math.PI*2,true); 
ctx.stroke();


