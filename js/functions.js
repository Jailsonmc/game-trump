function hearth(w,h,k){

	this.w = w, this.h = h, this.k=k;
	// var w = 200, h = 200;

	ctx.strokeStyle = "#000000";
	// ctx.strokeWeight = 3;
	// ctx.shadowOffsetX = 4.0;
	// ctx.shadowOffsetY = 4.0;
	// ctx.lineWidth = 10.0;
	ctx.fillStyle = "#FF0000";
	var d = Math.min(w, h);
	// var k = 120;

	ctx.moveTo(k, k + d / 4);
	ctx.quadraticCurveTo(k, k, k + d / 4, k);
	ctx.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
	ctx.quadraticCurveTo(k + d / 2, k, k + d * 3/4, k);
	ctx.quadraticCurveTo(k + d, k, k + d, k + d / 4);
	ctx.quadraticCurveTo(k + d, k + d / 2, k + d * 3/4, k + d * 3/4);
	ctx.lineTo(k + d / 2, k + d);
	ctx.lineTo(k + d / 4, k + d * 3/4);
	ctx.quadraticCurveTo(k, k + d / 2, k, k + d / 4);
	ctx.stroke();
	ctx.fill();

}
function passarDeFase(){

	 velocidade++;
	 faseAtual++;
	 // bloco.vidas++;
	 

	 if (faseAtual==2)
	 	bloco.gravidade*=0.85;

	 if (faseAtual==3)
	 	bloco.gravidade*=0.85;

	 if (faseAtual==4)
	 	bloco.gravidade*=0.85;

	 if (faseAtual==5)
	 	bloco.gravidade*=0.85;

	 if (faseAtual==6) {
	 	faseHtml = $("#fase").html();
	 	faseHtml = parseInt(faseHtml);
		faseHtml = faseHtml+1;
		$("#fase").text(faseHtml);

		if(regiaoAtual==regiao.tutorial){
			$("#flag-mundi-colombia").addClass("aparecer");
			$("#flag-mundi-colombia").removeClass("desaparecer");
			$("#explosion-mundi-colombia").addClass("desaparecer");
			$("#explosion-mundi-colombia").removeClass("aparecer");
			regiaoAtual=regiao.americaSul;
		}else if(regiaoAtual==regiao.americaSul){
			$("#flag-mundi-colombia").addClass("desaparecer");
			$("#flag-mundi-colombia").removeClass("aparecer");
			$("#explosion-mundi-colombia").addClass("aparecer");
			$("#explosion-mundi-colombia").removeClass("desaparecer");
			regiaoAtual=regiao.europa;
		}else if(regiaoAtual==regiao.europa){
			$("#flag-mundi-germany").addClass("desaparecer");
			$("#flag-mundi-germany").removeClass("aparecer");
			$("#explosion-mundi-germany").addClass("aparecer");
			$("#explosion-mundi-germany").removeClass("desaparecer");
			regiaoAtual=regiao.asia;
		}else if(regiaoAtual==regiao.asia){
			$("#flag-mundi-china").addClass("desaparecer");
			$("#flag-mundi-china").removeClass("aparecer");
			$("#explosion-mundi-china").addClass("aparecer");
			$("#explosion-mundi-china").removeClass("desaparecer");
			regiaoAtual=regiao.africa;
		}else if(regiaoAtual==regiao.africa){
			$("#flag-mundi-arabia").addClass("desaparecer");
			$("#flag-mundi-arabia").removeClass("aparecer");
			$("#explosion-mundi-arabia").addClass("aparecer");
			$("#explosion-mundi-arabia").removeClass("desaparecer");
			regiaoAtual=regiao.korea;
		}else if(regiaoAtual==regiao.korea){
			$("#flag-mundi-korea").addClass("desaparecer");
			$("#flag-mundi-korea").removeClass("aparecer");
			$("#explosion-mundi-korea").addClass("aparecer");
			$("#explosion-mundi-korea").removeClass("desaparecer");
			regiaoAtual=regiao.final;
		}
	 }

	 if (faseAtual == 5) {
	 	labelNovaFase.texto = "Fase Final!";
	 	labelNovaFase.fadeIn(0.4);
	 }else if(faseAtual > 5){
	 	labelNovaFase.texto = "";
	 	labelNovaFase.fadeIn(0.4);
	 }else{
	 	// labelNovaFase.texto = "Level "+ faseAtual + " - :" + Math.floor(bloco.gravidade*100)/100;
	 	labelNovaFase.texto = "Level "+ faseAtual;
	 	labelNovaFase.fadeIn(0.4);
	 }
	 
	 money += bloco.score;

	 setTimeout(function(){
	 	labelNovaFase.fadeOut(0.4); 	
	 },800);
	 
}
function Circle(x, y, dx, dy, radius, minRadius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

	this.draw = function(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		// c.strokeStyle = 'blue';
		// c.stroke();
		ctx.fillStyle = this.color;
		ctx.fill();
	}
	this.update = function(){
		ligthenGradient(this.x, this.y, this.radius+10);
		// if (this.x + this.radius>LARGURA || this.x - this.radius < 0) {
		// 	this.dx = -this.dx;
		// }
		// if (this.y + this.radius>ALTURA - chao.altura || this.y - this.radius < 0) {
		// 	this.dy = -this.dy;
		// }

		if(this.x + this.radius>=LARGURA){
			this.x=LARGURA-this.radius-1;
			this.dx = -this.dx;
		}
		if(this.x - this.radius <= 0){
			this.x=this.radius+1;
			this.dx = -this.dx;
		}
		if(this.y + this.radius>=ALTURA - chao.altura){
			this.y=ALTURA-chao.altura-this.radius-1;
			this.dy = -this.dy;
		}
		if(this.y - this.radius <= 0){
			this.y=this.radius+1;
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		for (var i = 0; i < circleArray.length; i++) {
			if(getDistance(circleArray[i].x, circleArray[i].y, this.x, this.y) <= (circleArray[i].radius+this.radius)
				&& circleArray[i]!= this){

				let colapse = (circleArray[i].radius+this.radius) - getDistance(circleArray[i].x, circleArray[i].y, this.x, this.y);

				if(colapse>0){
					this.x = this.x + colapse;
					// this.x = -this.x;
					this.y = this.y + colapse;
					// this.y = -this.y;
				}

				let auxx = this.dx;
				let auxy = this.dy;
		    	this.dx = circleArray[i].dx;
		    	this.dy = circleArray[i].dy;
				circleArray[i].dx = auxx;
				circleArray[i].dy = auxy;

				this.radius -= this.radius/2;
				circleArray[i].radius -= circleArray[i].radius/2;
		    }
		}

		this.radius += this.radius/70;
		

		//interactivity
		if(mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
		   mouse.y - this.y < 50 && mouse.y - this.y > -50){
		   	if(this.radius < maxRadius){
		   		this.radius += 1;
		   	}
		}else if(this.radius > this.minRadius){
			this.radius -= 1;
		}
		if(bloco.x - this.x < 50 && bloco.x - this.x > -50 &&
		   bloco.y - this.y < 50 && bloco.y - this.y > -50){
		   	if(this.radius < maxRadius){
		   		this.radius += 1;
		   	}
		}

		this.draw();
	}
}

function CircleSkin(ativo,name,x, y, dx, dy, radius, minRadius,tem,loja){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.name = name;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
	this.color = '#B243FF';
	this.colorAntiga = '';
	this.ativo=ativo;
	this.clickado=false;
	this.tem=tem;
	this.loja=loja;
	this.texto="Comprar";
	this.draw = function(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		if(this.loja==true){
			if(this.ativo){
				ctx.fillStyle = "#49E83E";
				ctx.fill();
				eval(this.name).desenha(this.x-30,this.y-30);
				ctx.font = l5+letra; 
				ctx.fillStyle = "#49E83E";
				ctx.fillText("Já possui", this.x-40,this.y-40);
			}else{
				ctx.fillStyle = this.color;
				ctx.fill();
				eval(this.name).desenha(this.x-30,this.y-30);
				ctx.font = l5+letra; 
				ctx.fillStyle = this.color;
				ctx.fillText(this.texto, this.x-40,this.y-40);	
			}
		}else{
			if(this.ativo){
				ctx.fillStyle = "#49E83E";
				ctx.fill();
				eval(this.name).desenha(this.x-30,this.y-30);
				ctx.font = l5+letra; 
				ctx.fillStyle = "#49E83E";
				ctx.fillText("Ativo", this.x-40,this.y-40);
			}else{
				ctx.fillStyle = this.color;
				ctx.fill();
				eval(this.name).desenha(this.x-30,this.y-30);
				ctx.font = l5+letra; 
				ctx.fillStyle = this.color;
				ctx.fillText("Ativar", this.x-40,this.y-40);	
			}	
		}
		
		
		// ctx.fill();
	}
	this.update = function(){
		if(this.x + this.radius>=LARGURA){
			this.x=LARGURA-this.radius-1;
			this.dx = -this.dx;
		}
		if(this.x - this.radius <= 0){
			this.x=this.radius+1;
			this.dx = -this.dx;
		}
		if(this.y + this.radius>=ALTURA - chao.altura){
			this.y=ALTURA-chao.altura-this.radius-1;
			this.dy = -this.dy;
		}
		if(this.y - this.radius <= 0){
			this.y=this.radius+1;
			this.dy = -this.dy;
		}

		if(this.loja==true){
			for (var i = 0; i < circleArraySkinsLoja.length; i++) {
				if(getDistance(circleArraySkinsLoja[i].x, circleArraySkinsLoja[i].y, this.x, this.y) <= (circleArraySkinsLoja[i].radius+this.radius) && circleArraySkinsLoja[i]!= this){

					let colapse = (circleArraySkinsLoja[i].radius+this.radius) - getDistance(circleArraySkinsLoja[i].x, circleArraySkinsLoja[i].y, this.x, this.y);

					if(colapse>0){
						this.x = this.x + colapse + Math.random()*(this.radius/10);
						this.y = this.y + colapse + Math.random()*(this.radius/10) ;
					}
					// if(circleArraySkinsLoja[i].dx == this.dx){
					// 	this.x = (this.x + colapse)*((this.dx/this.dx)-1);
					// }
					// if(circleArraySkinsLoja[i].dy == this.dy){
					// 	this.y = this.y + colapse;
					// }

					let auxx = this.dx;
					let auxy = this.dy;
			    	this.dx = circleArraySkinsLoja[i].dx;
			    	this.dy = circleArraySkinsLoja[i].dy;
					circleArraySkinsLoja[i].dx = auxx;
					circleArraySkinsLoja[i].dy = auxy;

			    }
			}
		}else{
			for (var i = 0; i < circleArraySkins.length; i++) {
				if(getDistance(circleArraySkins[i].x, circleArraySkins[i].y, this.x, this.y) <= (circleArraySkins[i].radius+this.radius) && circleArraySkins[i]!= this){

					let colapse = (circleArraySkins[i].radius+this.radius) - getDistance(circleArraySkins[i].x, circleArraySkins[i].y, this.x, this.y);

					if(colapse>0){
						this.x = this.x + colapse + Math.random()*(this.radius/10);
						this.y = this.y + colapse + Math.random()*(this.radius/10) ;
					}

					let auxx = this.dx;
					let auxy = this.dy;
			    	this.dx = circleArraySkins[i].dx;
			    	this.dy = circleArraySkins[i].dy;
					circleArraySkins[i].dx = auxx;
					circleArraySkins[i].dy = auxy;
			    }
			}
		}
		
		this.x += this.dx;
		this.y += this.dy;

		//interactivity
		if(mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
		   mouse.y - this.y < 50 && mouse.y - this.y > -50){
		   	if(this.radius < maxRadius){
		   		this.radius += 1;
		   	}
		}else if(this.radius > this.minRadius){
			this.radius -= 1;
		}
		if(bloco.x - this.x < 50 && bloco.x - this.x > -50 &&
		   bloco.y - this.y < 50 && bloco.y - this.y > -50){
		   	if(this.radius < maxRadius){
		   		this.radius += 1;
		   	}
		}

		this.draw();
	}
}
// Objects
function Ball(x, y, dx, dy, radius, color) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = color;

	this.update = function() {
		if(this.y + this.radius + this.dy> canvas.height-50){
			this.dy = -this.dy * friction;
		}else {
			this.dy += gravity;
			// console.log(this.dy);
		}

		if(this.x + this.radius + this.dx > canvas.width ||
			this.x - this.radius <= 0){
			this.dx = -this.dx;
		}

		if ((chao.y - bloco.y) > 85 && (chao.y - bloco.y) < 89 && this.x - bloco.x < 200) {
			this.y -= (2-bloco.gravidade)*7;
		}

		this.x += this.dx;
		this.y += this.dy;
		
		this.draw();
	};

	this.draw = function() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);	
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	};
}
function gte(e) {

	if(e.keyCode == 32){
		// initBall();
		if(estadoAtual==estados.jogando){
			bloco.pula();
		}else if(estadoAtual==estados.jogar){
			estadoAtual=estados.jogando;
		}else if(estadoAtual==estados.perdeu && bloco.y >= 2*ALTURA){
			estadoAtual=estados.jogar;
			obstaculos.limpa();
			bloco.reset();
		}else if(estadoAtual==estados.ganhou && bloco.y >= 2*ALTURA){
			estadoAtual=estados.jogar;
			obstaculos.limpa();
			bloco.reset();
		}
	}

}

function getDistance(x1, y1, x2, y2){
	let xDistance = x2 - x1;
	let yDistance = y2 - y1;

	return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// Utility Functions
function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}
function clique(event){
	// initBall();
	if(mouse.x > LARGURA/2 - 50 && mouse.x < LARGURA/2 && mouse.y > ALTURA/8 - 50 && mouse.y < ALTURA/8) {
		if (confirm("Tem certeza que deseja ir para Home?")) {
			estadoAtual = estados.jogar;
			salvar();
			location.reload();
			// salvar();
			// window.location = "index.php";
		}
	}else if(estadoAtual==estados.jogando){
		bloco.pula();
	}else if(estadoAtual==estados.jogar){

		if(mouse.x > LARGURA/4 - 50 && mouse.x < LARGURA/4 && mouse.y > ALTURA/4 - 50 && mouse.y < ALTURA/4) {
			if (confirm("Tem certeza que deseja ir a loja?")) {
				estadoAtual = estados.loja;
				// salvar();
				// window.location = "loja.php";
			}
		}else if(mouse.x > LARGURA/4 - 30 && mouse.x < LARGURA/4 && mouse.y > ALTURA/3 - 30 && mouse.y < ALTURA/3) {
			if (confirm("Tem certeza que deseja ir para Skins?")) {
				estadoAtual = estados.skins;
				// navigator.notification.alert(
				//     'You are the winner!',  // message
				//     alertDismissed,         // callback
				//     'Game Over',            // title
				//     'Done'                  // buttonName
				// );
			// 	alert("Skins");
			}
		}else if(mouse.x > 3*LARGURA/4 - 50 && mouse.x < 3*LARGURA/4 && mouse.y > ALTURA/3 - 50 && mouse.y < ALTURA/3) {
			if (confirm("Tem certeza que deseja resetar?")) {

				// salvar();

				localStorage.setItem("regiao",0);
			}
		}else if(mouse.x > 3*LARGURA/4 - 50 && mouse.x < 3*LARGURA/4 && mouse.y > ALTURA/4 - 50 && mouse.y < ALTURA/4) {
			if (confirm("Tem certeza que deseja salvar?")) {

				// salvar();
			}
		}else if(mouse.x > LARGURA/4 - 50 && mouse.x < LARGURA/4 && mouse.y > ALTURA/2 - 50 && mouse.y < ALTURA/2){
			if (confirm("Tem certeza que deseja jogar o tutorial?")) {
				regiaoAtual = regiao.tutorial;
				estadoAtual=estados.jogando;
			}
		}else if(mouse.x > LARGURA/2 - 50 && mouse.x < LARGURA/2 && mouse.y > ALTURA/2 - 50 && mouse.y < ALTURA/2) {
			if (localStorage.regiao > 0) {
				if (confirm("Tem certeza que deseja jogar o América?")) {
					regiaoAtual = regiao.americaSul;
					estadoAtual=estados.jogando;
				}
			}else{
				if (confirm("Tem certeza que deseja jogar o América e pular o tutorial?")) {
					regiaoAtual = regiao.americaSul;
					estadoAtual=estados.jogando;
				}
			}
		}else if(mouse.x > 3*LARGURA/4 - 50 && mouse.x < 3*LARGURA/4 && mouse.y > ALTURA/2 - 50 && mouse.y < ALTURA/2) {
			if (localStorage.regiao > 1) {
				if (confirm("Tem certeza que deseja jogar o Europa?")) {
					regiaoAtual = regiao.europa;
					estadoAtual=estados.jogando;
				}
			}else{
				alert("Você precisa terminar a região América antes?");
			}


		}else if(mouse.x > LARGURA/4 - 50 && mouse.x < LARGURA/4 && mouse.y > 3*ALTURA/4 - 50 && mouse.y < 3*ALTURA/4) {
			if (localStorage.regiao > 2) {
				if (confirm("Tem certeza que deseja jogar o África?")) {
					regiaoAtual = regiao.africa;
					estadoAtual=estados.jogando;
				}
			}else{
				alert("Você precisa terminar a região Eurupa antes?");
			}

			
		}else if(mouse.x > LARGURA/2 - 50 && mouse.x < LARGURA/2 && mouse.y > 3*ALTURA/4 - 50 && mouse.y < 3*ALTURA/4) {
			if (localStorage.regiao > 3) {
				if (confirm("Tem certeza que deseja jogar o Ásia?")) {
					regiaoAtual = regiao.asia;
					estadoAtual=estados.jogando;
				}
			}else{
				alert("Você precisa terminar a região África antes?");
			}


			
		}else if(mouse.x > 3*LARGURA/4 - 50 && mouse.x < 3*LARGURA/4 && mouse.y > 3*ALTURA/4 - 50 && mouse.y < 3*ALTURA/4) {
			if (localStorage.regiao > 4) {
				if (confirm("Tem certeza que deseja jogar o Final?")) {
					regiaoAtual = regiao.final;
					estadoAtual=estados.jogando;
				}
			}else{
				alert("Você precisa terminar a região Ásia antes?");
			}
			
		}else{
			bloco.pula();
		}

		
		// estadoAtual=estados.jogando;
	// }else if(estadoAtual==estados.perdeu && bloco.y >= 2*ALTURA){
	}else if(estadoAtual==estados.perdeu){	
		estadoAtual=estados.jogar;
		fundoSecundario.limpa();
		obstaculos.limpa();
		bloco.reset();
	// }else if(estadoAtual==estados.ganhou && bloco.y >= 2*ALTURA){
	}else if(estadoAtual==estados.ganhou){
		estadoAtual=estados.jogar;
		fundoSecundario.limpa();
		obstaculos.limpa();
		bloco.reset();
	}else if(estadoAtual==estados.skins){
		for (var i = 0; i < circleArraySkins.length; i++) {
			if(mouse.x - circleArraySkins[i].x < 50 && mouse.x - circleArraySkins[i].x > -50 &&
		   		mouse.y - circleArraySkins[i].y < 50 && mouse.y - circleArraySkins[i].y > -50) {
				if(!circleArraySkins[i].ativo){
					for (var j = 0; j < circleArraySkins.length; j++) {
						if(circleArraySkins[j].ativo=true){
							circleArraySkins[j].ativo=false;
						}
					}
					circleArraySkins[i].ativo=true;
					skinAntiga=skinAtiva;
					skinAtiva=circleArraySkins[i].name;
					skin=skinAtiva;
					skinSprite = skin;
					localStorage.setItem('skinSprite', skinAtiva); 

					// ctx.clearRect(0, 0, LARGURA, ALTURA);
					// ctx.fillRect(0, 0, LARGURA, ALTURA);

					// bloco.desenha();
					// eval(skinAtiva).desenha();
					bloco.atualizaSkins();	



					
					
				}
			}
		}
	}else if(estadoAtual==estados.loja){
		for (var i = 0; i < circleArraySkinsLoja.length; i++) {
			if(mouse.x - circleArraySkinsLoja[i].x < 50 && mouse.x - circleArraySkinsLoja[i].x > -50 &&
		   		mouse.y - circleArraySkinsLoja[i].y < 50 && mouse.y - circleArraySkinsLoja[i].y > -50) {
				if(circleArraySkinsLoja[i].tem != true){
					if(money >= 20){
						if(confirm("Tem certeza que deseja comprar essa skin?")){
							money -= 20;
							alert("Skin "+circleArraySkinsLoja[i].name+" comprada.");
							circleArraySkinsLoja[i].tem = true;
							skinsCompradas.push(circleArraySkinsLoja[i].name);
							circleArraySkinsLoja[i].color="#49E83E";
							circleArraySkinsLoja[i].texto="Já possui!";
							localStorage.setItem('money', money);
							localStorage.setItem('skinCompradas', skinsCompradas);
							// for (var i = 0; i < skinsCompradas.length; i++) {
							// 	console.log(skinsCompradas[i]);
							// }
						}
					}else{
						alert("Você não possui money necessário.");
					}
				}
			}
		}
	}
}
function salvar(){
	// $.post('salvarGame.php', {
	// 'idUser':idUser,'idSkin':idSkin,'skinSprite':skinSprite, 'regiao':regiaoAtual, 'score':scoreAtual
	// }, function(data){
	// 	if(data==1){
			localStorage.setItem('idSkin', idSkin); 
			localStorage.setItem('skinSprite', skinSprite); 
			localStorage.setItem('regiao', regiaoAtual);
			localStorage.setItem('regiaoAtual', regiaoAtual);
			localStorage.setItem('score', scoreAtual);
			localStorage.setItem('scoreAtual', scoreAtual);
			localStorage.setItem('money', money);
			alert('Salvo com sucesso.');
	// 	}else{
	// 		alert('Erro ao salvar.');
	// 	}
	// });
}

// function onConfirm(buttonIndex) {
//     alert('You selected button ' + buttonIndex);
// }

function alertDismissed() {
    // do something
}
function atualizaTamanho(obj, img){

	bloco.altura = img.altura;
	bloco.largura = img.largura;

}