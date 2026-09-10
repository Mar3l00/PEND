const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

contexto.lineWidth = 6;
contexto.lineCap='round';
contexto.lineJoin='round';

//cabeça
contexto.beginPath();
contexto.arc(50, 110, 10, 0, Math.PI * 2);
//corpo
contexto.moveTo(50, 120);
contexto.lineTo(50, 165);
//braço esquerdo
contexto.moveTo(50, 120);
contexto.lineTo(30, 140);
contexto.lineTo(60, 154);
//braço direito
contexto.moveTo(50, 120);
contexto.lineTo(70, 140);
contexto.lineTo(90, 120);
//perna esquerda
contexto.moveTo(50,165);
contexto.lineTo(40, 195);
contexto.lineTo(38, 235);
//perna direita
contexto.moveTo(50,165);
contexto.lineTo(67, 195);
contexto.lineTo(72, 235);
contexto.stroke();

