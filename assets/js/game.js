

document.addEventListener("DOMContentLoaded", (event) => {

    // Constantes
    let GV = 2.8;
    let CONS = 335;

    // Definicion canvas
    let cvs = document.getElementById("game");
    let ctx = cvs.getContext("2d");

    // Background
    let bg = new Image();
    bg.src = "https://s03.s3c.es/imag/_v0/770x420/4/d/d/fondo-marino-ep.jpg";

    // Holberton
    let hb = new Image();
    hb.src = "https://i.ibb.co/jgBfqdx/holberton.png";

    // Caballito
    let hs = {
	x: 150,
	y: cvs.height/2 +50,
    }

    // Evento al teclear caballo
    document.addEventListener("keydown", moveUp);
    function moveUp(event) {
	switch(event.keyCode) {
	case 37:
	    if (hs.x > 0) {
		hs.x -= 20;
		console.log(hs.x);
	    }
	    break;
	case 38:
	    if (hs.y > 0) {
		hs.y -= 20;
	    }
	    break;
	case 39:
	    hs.x += 20;
	    break;
	case 40:
	    hs.y += 10;
	    break;
	}
    }
    document.addEventListener("touchstart", () => {
	if (hs.y > 0) {
	    hs.y -= 20;
	}
    });
    
    // Tiburones
    let sk1 = new Image();
    sk1.src = "https://i.ibb.co/wr7jQhF/tiburon.png";
    let sk2 = new Image();
    sk2.src = "https://i.ibb.co/wr7jQhF/tiburon.png";
    
    // Coordenadas Tiburones
    let sks = [];
    sks[0] = {
	x: cvs.width,
	y: 20
    }


    // Reproduccion
    let draw = () => {
	// Background
	ctx.drawImage(bg, 0, 0, cvs.width, cvs.height);

	// Holberton
	ctx.drawImage(hb, hs.x, hs.y);

	// Efecto gravitatorio
	hs.y++;

	for(let i = 0; i < sks.length; i++) {
	    ctx.drawImage(sk1, sks[i].x, sks[i].y, sk1.width, sk1.height * 1.5);

	    // Velocidad tiburones
	    if(i == 0) {
		sks[i].x -= 1 ;
	    } else if(i > 0 && i < 5) {
		sks[i].x -= i;
	    } else {
		sks[i].x -= 4
	    }

	    
	    // Generador de tiburones
	    if(sks[i].x == 150 || sks[i].x == 147) {
		sks.push({
		    x: cvs.width,
		    y: Math.floor(Math.random() * 190)
		});
	    } else if (i > 4 && i < 20) {
		setInterval(() => {
		    sks.push({
			x: cvs.width,
			y: Math.floor(Math.random() * 190)
		    });
		}, 3000);
	    }

	    
	    

	    // Funcion para Game Over
	    let remover = () => {
		document.getElementById("game").remove();
		let inst = document.getElementById("instrucciones");
		inst.style.display = "none";
		let element = document.getElementById("gameover");
		let div = document.createElement("div");
		div.innerHTML = `
		    <img src="https://cdn140.picsart.com/264463632000202.png?r1024x1024" alt="go" />
		    `;
		element.appendChild(div);
	    }


	    // Colisión
	    if (hs.y > cvs.height) {
		remover();
	    } else if(hs.x + hb.width > sks[i].x && hs.x + hb.width < sks[i].x + sk1.width) {
		if (hs.y < sks[i].y + sk1.height + 60 && hs.y > sks[i].y -20) {
		    remover();
		}
	    }


	}
	
	
	
	requestAnimationFrame(draw);
    }

    draw();


});

/*
ctx.drawImage(sk1, 450, -60, sk1.width, 250);
ctx.drawImage(sk2, 450, -60 + 280, sk2.width, 250);
*/
