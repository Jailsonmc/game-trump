var stats = new Stats();
var time, π = Math.PI;;
var 
colorArray = [
	'#813875',
	'#3ACE9B',
	'#5E5D66',
	'#3F1B11',
	'#6D3664',
	'#F9FFFF',
	'#49E83E',
	'#FFD432',
	'#E84B30',
	'#B243FF'
],
colorsBall = [
	'#2185C5',
	'#7ECEFD',
	'#FFF6E5',
	'#FF7F66'
],
mouse = {
	x : undefined,
	y : undefined
};

var idUser = localStorage.getItem('idUser');
if (!idUser) {
	idUser = 0;
}
var email = localStorage.getItem('email');
if (!email) {
	email = "email@email.com";
}
var name = localStorage.getItem('name');
if (!name) {
	name = "Visitante";
	localStorage.setItem('name', name);
}
var idSkin = localStorage.getItem('idSkin');
if (!idSkin) {
	idSkin = 1;
}
var skinSprite = localStorage.getItem('skinSprite'); 
if (!skinSprite) {
	skinSprite = "spriteBoneco";
	localStorage.setItem('skinSprite', skinSprite);
	localStorage.setItem('skinAtiva', skinSprite); 
}
var regiao = localStorage.getItem('regiao');
if (!regiao) {
	regiao = 0;
	localStorage.setItem('regiao', regiao);
	localStorage.setItem('regiaoAtual', regiao);
}
var score = localStorage.getItem('score');
if (!score) {
	score = 0;
	localStorage.setItem('score', score);
	localStorage.setItem('scoreAtual', score);
}
var money = localStorage.getItem('money');
if (!money) {
	money = 0;
	localStorage.setItem('money', money);
	localStorage.setItem('moneyAtual', money);
}else{
	money =30;
}

var skin = skinSprite,
skinAux = [skin+"Colidir",skin+"PuloImpulso",skin+"PuloAlto",skin+"PuloDesc",skin+"Pulo21",skin+"Pulo22",skin+"Pulo23",skin+"Andar1",skin+"Andar2",skin+"Andar3",skin+"Andar4",skin+"Andar5",skin+"Andar6",skin+"Andar7",skin+"Andar8",skin+"Ganhou1",skin+"Ganhou2",skin+"Ganhou3",skin+"Ganhou4",skin+"Ganhou5",skin+"Ganhou6",skin+"Ganhou7",skin+"Ganhou8",skin+"Perdeu1",skin+"Perdeu2",skin+"Perdeu3",skin+"Perdeu4",skin+"Perdeu5",skin+"Perdeu6",skin+"Perdeu7",skin+"Perdeu8"],
gravity = 1,
skinAntiga="",
skinAtiva=skin,
friction = .7,
maxRadius = 40,
canvas, ctx, vel = 0, vel2 = 627, frRate = 0,
ALTURA = innerHeight, 
LARGURA = innerWidth,
aux44=0,
explosionImg,
skins = ["spriteBoneco","spriteMulherMaravilha","spriteLavis","spriteHoshikage","spriteAsagi","spriteKimAndChi","spriteHiei","spriteCapitaoAmerica"],
skinsCompradas = ["spriteBoneco","spriteMulherMaravilha","spriteLavis","spriteHoshikage","spriteAsagi"],
// frames=0,
 maxPulos=2, velocidade=6, estadoAtual, regiaoAtual, record, scoreAtual=score
 vFundo = velocidade - (velocidade / 2),
	img = null, img2 = null,
	pontosParaNovaFase = [5, 10, 15, 20, 25, 30],
	faseAtual = 0, letra="px Arial", l1="7",l2="9",l3="10",l4="14",l5="25",l6="15",l7="18",l8="20",l9="28",l10="50",
	labelNovaFase={
		texto:"",
		opacidade:0.0,
		fadeIn: function(dt){
			var fadeInId = setInterval(function(){
				if(labelNovaFase.opacidade<1.0)
					 labelNovaFase.opacidade+=0.01;
				else{
					clearInterval(fadeInId);	
				}
			},10 * dt);
		},
		fadeOut: function(dt){
			var fadeOutId =  setInterval(function(){
				if(labelNovaFase.opacidade>0.0)
					 labelNovaFase.opacidade-=0.01;
				else{
					clearInterval(fadeOutId);	
				}
			},10*dt);						
		} 
	},
estados = {
	jogar : 0,
	jogando: 1,
	perdeu: 2,
	ganhou: 3,
	skins: 4,
	loja: 5
},
regiao = {
	tutorial: 0,
	americaSul : 1,
	europa: 2,
	africa: 3,
	asia: 4,
	final: 5,
	korea: 6
},
// trump1=document.getEmentById("img-trump1"),
// pat=ctx.createPattern(trump1,"no-repeat"),
chao={
	// y:550,
	y:ALTURA - 50,
	x:0,
	altura: 50,
	// cor: "#ffdf70",

	atualiza: function(){
		this.x -= velocidade;
		if(this.x<=-LARGURA/8)
			this.x+=LARGURA/8;		
	},

 	desenha: function(){
 		let aux = Math.ceil(LARGURA/spriteChao.largura);
 		for (var i = 0; i < aux; i++) {
 			spriteChao.desenha(this.x+(i*spriteChao.largura), ALTURA - this.altura);
 		}
 		// spriteChao.desenha(this.x, this.y);
 		// spriteChao.desenha(this.x+spriteChao.largura, this.y);
 	}
},
bloco = {
	x : 50,
	y : 670,
	altura : eval(skinAtiva).altura,
	largura : eval(skinAtiva).largura,
	gravidade: 1.6,
	// gravidade: 0.6,
	velocidade: 0,
	forcaDoPulo: 23.6,
	qntPulos: 0,
	score: 0,
	rotacao : 0,
	vidas: 5,
	colidindo: false,
	frAvatar: 0,

	atualiza: function(){
		// console.log(aux44);
		// console.log(Math.floor(this.y));

		this.velocidade += this.gravidade;
		this.y += this.velocidade;
		// this.y += (Math.sqrt(this.velocidade))/(2*this.gravidade);
		this.rotacao += Math.PI / 180 * velocidade;
		// aux44=aux44+1;
		if (this.frAvatar < 40) {
			this.frAvatar ++;
		} else {
			this.frAvatar = 1;
		}
		if(this.y > chao.y - this.altura && estadoAtual != estados.perdeu){
			this.y = chao.y-this.altura;
			this.qntPulos=0;
			this.velocidade=0;
		}
	},

	pula: function(){
		if (this.qntPulos<maxPulos) {
			this.velocidade = -this.forcaDoPulo; 
			this.qntPulos++;
		}
	},

	reset: function(){
		this.velocidade = 0;
		this.y=0;

		if(this.score>record){
			localStorage.setItem("record", this.score);
			record =this.score;
		}
		this.vidas=5;
		this.score= 0;

		velocidade=6; 
		faseAtual=0; 
		this.gravidade=1.6;
	},
	atualizaSkins: function(){
		// console.log(skinAtiva);
		eval(skinAtiva).desenha(this.x,this.y);

		eval(skinAntiga).onload = function(){
           ctx.drawImage(eval(skinAntiga),this.x,this.y);
        };
        eval(skinAntiga).src=eval(skinAtiva);

	},
	desenha : function(){
		if(estadoAtual== estados.jogando){

			ctx.fillStyle= "#fff";
			ctx.font = "12px Arial";

			// ctx.fillText("This.y: "+this.velocidade, 50, 380);
			// ctx.fillText("altura: "+ALTURA, 50, 400);

			if(this.colidindo){
				atualizaTamanho(bloco, eval(skinAux[0]));
				eval(skinAux[0]).desenha(this.x,this.y);
				navigator.vibrate(100);
			}else if(this.qntPulos >= 1){
				if(this.velocidade <= 0 && this.qntPulos == 1){
					if ( this.velocidade <= -this.forcaDoPulo*0.90 ) {
						atualizaTamanho(bloco, eval(skinAux[1]));
						eval(skinAux[1]).desenha(this.x,this.y);
				    }else if ( this.velocidade > -this.forcaDoPulo*0.90  ) {
				    	atualizaTamanho(bloco, eval(skinAux[2]));
					 	eval(skinAux[2]).desenha(this.x,this.y);
					}
				}else if(this.velocidade > 0){
					if ( this.velocidade <= this.forcaDoPulo*0.70 ) {
						atualizaTamanho(bloco, eval(skinAux[1]));
						eval(skinAux[1]).desenha(this.x,this.y);
				    }else if ( this.velocidade < this.forcaDoPulo*0.90 ) {
				    	atualizaTamanho(bloco, eval(skinAux[3]));
					 	eval(skinAux[3]).desenha(this.x,this.y);
					}
				}else if(this.velocidade < 0 && this.qntPulos == 2){
					if ( this.velocidade <= -this.forcaDoPulo*0.50 ) {
						atualizaTamanho(bloco, eval(skinAux[4]));
						eval(skinAux[4]).desenha(this.x,this.y);
				    }else if ( this.velocidade > -this.forcaDoPulo*0.50 ) {
				    	atualizaTamanho(bloco, eval(skinAux[5]));
					 	eval(skinAux[5]).desenha(this.x,this.y);
					}else if ( this.velocidade <= this.forcaDoPulo*0.50 ) {
				    	atualizaTamanho(bloco, eval(skinAux[5]));
					 	eval(skinAux[5]).desenha(this.x,this.y);
					}else if ( this.velocidade > this.forcaDoPulo*0.50 && this.velocidade <= this.forcaDoPulo) {
				    	atualizaTamanho(bloco, eval(skinAux[6]));
					 	eval(skinAux[6]).desenha(this.x,this.y);
					}else if ( this.velocidade > this.forcaDoPulo ) {
				    	atualizaTamanho(bloco, eval(skinAux[2]));
					 	eval(skinAux[2]).desenha(this.x,this.y);
					}
				}
			}else if (this.frAvatar > 0 && this.frAvatar <= 5) {
				atualizaTamanho(bloco, eval(skinAux[7]));
				eval(skinAux[7]).desenha(this.x,this.y);
				smokeTrue.desenha(this.x - smokeTrue.largura,this.y + this.altura - smokeTrue.altura);
			}else if (this.frAvatar > 5 && this.frAvatar <= 10) {
				atualizaTamanho(bloco, eval(skinAux[8]));
				eval(skinAux[8]).desenha(this.x,this.y);
				// smoke.desenha(this.x - somke.x,this.y + this.altura - somke.y);
			}else if (this.frAvatar > 10 && this.frAvatar <= 15) {
				atualizaTamanho(bloco, eval(skinAux[9]));
				eval(skinAux[9]).desenha(this.x,this.y);
				// smoke.desenha(this.x - somke.x,this.y + this.altura - somke.y);
			}else if (this.frAvatar > 15 && this.frAvatar <= 20) {
				atualizaTamanho(bloco, eval(skinAux[10]));
				eval(skinAux[10]).desenha(this.x,this.y);
				// smoke.desenha(this.x - somke.x,this.y + this.altura - somke.y);
			}else if (this.frAvatar > 20 && this.frAvatar <= 25) {
				atualizaTamanho(bloco, eval(skinAux[11]));
				eval(skinAux[11]).desenha(this.x,this.y);
				// smoke.desenha(this.x - somke.x,this.y + this.altura - somke.y);
			}else if (this.frAvatar > 25 && this.frAvatar <= 30) {
				atualizaTamanho(bloco, eval(skinAux[12]));
				eval(skinAux[12]).desenha(this.x,this.y);
				smokeTrue.desenha(this.x - smokeTrue.largura,this.y + this.altura - smokeTrue.altura);
			}else if (this.frAvatar > 30 && this.frAvatar <= 35) {
				atualizaTamanho(bloco, eval(skinAux[13]));
				eval(skinAux[13]).desenha(this.x,this.y);
				// smoke.desenha(this.x - somke.x,this.y + this.altura - somke.y);
			}else if (this.frAvatar > 35 && this.frAvatar <= 40) {
				atualizaTamanho(bloco, eval(skinAux[14]));
				eval(skinAux[14]).desenha(this.x,this.y);
				// smoke.desenha(this.x - somke.x,this.y + this.altura - somke.y);

			}

		}else if(estadoAtual== estados.jogar || estadoAtual== estados.skins || estadoAtual== estados.loja ){

			if(this.colidindo){
				atualizaTamanho(bloco, eval(skinAux[0]));
				eval(skinAux[0]).desenha(this.x,this.y);
			// }else if(this.y < chao.y - this.altura){
			}else if(this.qntPulos >= 1){
				// console.log(this.y);
				// console.log(chao.y - this.altura);
				// console.log("1");
				if(this.velocidade <= 0 && this.qntPulos == 1){
					if ( this.velocidade <= -this.forcaDoPulo*0.90 ) {
						atualizaTamanho(bloco, eval(skinAux[1]));
						eval(skinAux[1]).desenha(this.x,this.y);
				    }else if ( this.velocidade > -this.forcaDoPulo*0.90  ) {
				    	atualizaTamanho(bloco, eval(skinAux[2]));
					 	eval(skinAux[2]).desenha(this.x,this.y);
					}
				}else if(this.velocidade > 0){
					if ( this.velocidade <= this.forcaDoPulo*0.70 ) {
						atualizaTamanho(bloco, eval(skinAux[1]));
						eval(skinAux[1]).desenha(this.x,this.y);
				    }else if ( this.velocidade < this.forcaDoPulo*0.90 ) {
				    	atualizaTamanho(bloco, eval(skinAux[3]));
					 	eval(skinAux[3]).desenha(this.x,this.y);
					}
				}else if(this.velocidade < 0 && this.qntPulos == 2){
					if ( this.velocidade <= -this.forcaDoPulo*0.50 ) {
						atualizaTamanho(bloco, eval(skinAux[4]));
						eval(skinAux[4]).desenha(this.x,this.y);
				    }else if ( this.velocidade > -this.forcaDoPulo*0.50 ) {
				    	atualizaTamanho(bloco, eval(skinAux[5]));
					 	eval(skinAux[5]).desenha(this.x,this.y);
					}else if ( this.velocidade <= this.forcaDoPulo*0.50 ) {
				    	atualizaTamanho(bloco, eval(skinAux[5]));
					 	eval(skinAux[5]).desenha(this.x,this.y);
					}else if ( this.velocidade > this.forcaDoPulo*0.50 && this.velocidade <= this.forcaDoPulo) {
				    	atualizaTamanho(bloco, eval(skinAux[6]));
					 	eval(skinAux[6]).desenha(this.x,this.y);
					}else if ( this.velocidade > this.forcaDoPulo ) {
				    	atualizaTamanho(bloco, eval(skinAux[2]));
					 	eval(skinAux[2]).desenha(this.x,this.y);
					}
				}
			}else if (this.frAvatar > 0 && this.frAvatar <= 5) {
				atualizaTamanho(bloco, eval(skinAux[7]));
				eval(skinAux[7]).desenha(this.x,this.y);
				smokeTrue.desenha(this.x - smokeTrue.largura,this.y + this.altura - smokeTrue.altura);
			}else if (this.frAvatar > 5 && this.frAvatar <= 10) {
				atualizaTamanho(bloco, eval(skinAux[8]));
				eval(skinAux[8]).desenha(this.x,this.y);
				// smoke.desenha(this.x - somke.x,this.y + this.altura - somke.y);
			}else if (this.frAvatar > 10 && this.frAvatar <= 15) {
				atualizaTamanho(bloco, eval(skinAux[9]));
				eval(skinAux[9]).desenha(this.x,this.y);
				// smoke.desenha(this.x - somke.x,this.y + this.altura - somke.y);
			}else if (this.frAvatar > 15 && this.frAvatar <= 20) {
				atualizaTamanho(bloco, eval(skinAux[10]));
				eval(skinAux[10]).desenha(this.x,this.y);
				// smoke.desenha(this.x - somke.x,this.y + this.altura - somke.y);
			}else if (this.frAvatar > 20 && this.frAvatar <= 25) {
				atualizaTamanho(bloco, eval(skinAux[11]));
				eval(skinAux[11]).desenha(this.x,this.y);
				// smoke.desenha(this.x - somke.x,this.y + this.altura - somke.y);
			}else if (this.frAvatar > 25 && this.frAvatar <= 30) {
				atualizaTamanho(bloco, eval(skinAux[12]));
				eval(skinAux[12]).desenha(this.x,this.y);
				smokeTrue.desenha(this.x - smokeTrue.largura,this.y + this.altura - smokeTrue.altura);
			}else if (this.frAvatar > 30 && this.frAvatar <= 35) {
				atualizaTamanho(bloco, eval(skinAux[13]));
				eval(skinAux[13]).desenha(this.x,this.y);
				// smoke.desenha(this.x - somke.x,this.y + this.altura - somke.y);
			}else if (this.frAvatar > 35 && this.frAvatar <= 40) {
				atualizaTamanho(bloco, eval(skinAux[14]));
				eval(skinAux[14]).desenha(this.x,this.y);
				// smoke.desenha(this.x - somke.x,this.y + this.altura - somke.y);

			}

		}
		
	}
	},
	fundoSecundario = {
		_arv: [],
		slArvore: [0, 1, 2, 3, 5],
		tempoInsere: 0,

		insere: function(){
			this._arv.push({
				ptX: LARGURA,
				ptY: ALTURA - chao.altura + 5,
				largura: 0,
				altura: 0,
				arvore: this.slArvore[Math.floor(5 * Math.random())],
			});
			this.tempoInsere = 50 + Math.floor(200 * Math.random());
		},
		atualiza: function(){
			if (this.tempoInsere == 0) {
				this.insere();
			}else {
				this.tempoInsere--;
			}
			for (var i = 0, tam = this._arv.length; i < tam; i++) {
				var arv = this._arv[i];
				arv.ptX -= vFundo;
				
				if (arv.ptX <= -arv.largura) {
					this._arv.splice(i, 1);
					tam--;
					i--;
				}
			}
		},
		limpa: function(){
			this._arv = [];
		},
		desenha: function(){
			for (var i = 0, tam = this._arv.length; i < tam; i++) {
				var arv = this._arv[i];
				
				if(regiaoAtual==regiao.americaSul){
					if (arv.arvore == 0) {
						arv.largura = spriteFundo1Am.largura;
						arv.altura = spriteFundo1Am.altura;
						spriteFundo1Am.desenha(arv.ptX, arv.ptY - arv.altura);

					}else if (arv.arvore == 1) {
						arv.largura = spriteFundo2Am.largura;
						arv.altura = spriteFundo2Am.altura;
						spriteFundo2Am.desenha(arv.ptX, arv.ptY - arv.altura);
					}else if (arv.arvore == 2) {
						arv.largura = spriteFundo3Am.largura;
						arv.altura = spriteFundo3Am.altura;
						spriteFundo3Am.desenha(arv.ptX, arv.ptY - arv.altura);
					}else if (arv.arvore == 3) {
						arv.largura = spriteFundo4Am.largura;
						arv.altura = spriteFundo4Am.altura;
						spriteFundo4Am.desenha(arv.ptX, arv.ptY - arv.altura);
					}else if (arv.arvore == 4) {
						arv.largura = spriteFundo5Am.largura;
						arv.altura = spriteFundo5Am.altura;
						spriteFundo5Am.desenha(arv.ptX, arv.ptY - arv.altura);
					}
				}else if(regiaoAtual==regiao.europa){
					if (arv.arvore == 0) {
						arv.largura = spriteFundo1Eu.largura;
						arv.altura = spriteFundo1Eu.altura;
						spriteFundo1Eu.desenha(arv.ptX, arv.ptY - arv.altura);

					}else if (arv.arvore == 1) {
						arv.largura = spriteFundo2Eu.largura;
						arv.altura = spriteFundo2Eu.altura;
						spriteFundo2Eu.desenha(arv.ptX, arv.ptY - arv.altura);
					}else if (arv.arvore == 2) {
						arv.largura = spriteFundo3Eu.largura;
						arv.altura = spriteFundo3Eu.altura;
						spriteFundo3Eu.desenha(arv.ptX, arv.ptY - arv.altura);
					}else if (arv.arvore == 3) {
						arv.largura = spriteFundo4Eu.largura;
						arv.altura = spriteFundo4Eu.altura;
						spriteFundo4Eu.desenha(arv.ptX, arv.ptY - arv.altura);
					}else if (arv.arvore == 4) {
						arv.largura = spriteFundo5Eu.largura;
						arv.altura = spriteFundo5Eu.altura;
						spriteFundo5Eu.desenha(arv.ptX, arv.ptY - arv.altura);
					}
				}else if(regiaoAtual==regiao.africa){
					if (arv.arvore == 0) {
						arv.largura = spriteFundo1OM.largura;
						arv.altura = spriteFundo1OM.altura;
						spriteFundo1OM.desenha(arv.ptX, arv.ptY - arv.altura);

					}else if (arv.arvore == 1) {
						arv.largura = spriteFundo2OM.largura;
						arv.altura = spriteFundo2OM.altura;
						spriteFundo2OM.desenha(arv.ptX, arv.ptY - arv.altura);
					}else if (arv.arvore == 2) {
						arv.largura = spriteFundo3OM.largura;
						arv.altura = spriteFundo3OM.altura;
						spriteFundo3OM.desenha(arv.ptX, arv.ptY - arv.altura);
					}else if (arv.arvore == 3) {
						arv.largura = spriteFundo3OM.largura;
						arv.altura = spriteFundo3OM.altura;
						spriteFundo3OM.desenha(arv.ptX, arv.ptY - arv.altura);
					}else if (arv.arvore == 4) {
						arv.largura = spriteFundo1OM.largura;
						arv.altura = spriteFundo1OM.altura;
						spriteFundo1OM.desenha(arv.ptX, arv.ptY - arv.altura);
					}
				}else {
					if (arv.arvore == 0) {
						arv.largura = spriteFundo1As.largura;
						arv.altura = spriteFundo1As.altura;
						spriteFundo1As.desenha(arv.ptX, arv.ptY - arv.altura);

					}else if (arv.arvore == 1) {
						arv.largura = spriteFundo2As.largura;
						arv.altura = spriteFundo2As.altura;
						spriteFundo2As.desenha(arv.ptX, arv.ptY - arv.altura);
					}else if (arv.arvore == 2) {
						arv.largura = spriteFundo3As.largura;
						arv.altura = spriteFundo3As.altura;
						spriteFundo3As.desenha(arv.ptX, arv.ptY - arv.altura);
					}else if (arv.arvore == 3) {
						arv.largura = spriteFundo4As.largura;
						arv.altura = spriteFundo4As.altura;
						spriteFundo4As.desenha(arv.ptX, arv.ptY - arv.altura);
					}else if (arv.arvore == 4) {
						arv.largura = spriteFundo5As.largura;
						arv.altura = spriteFundo5As.altura;
						spriteFundo5As.desenha(arv.ptX, arv.ptY - arv.altura);
					}
				}	
			}
		} 
	},
	obstaculos = {
		_obs : [],
		_scored: false, 
		// cores: ["#ffbc1c","#ff1c1c","#ff85e1","#52a7ff","#78ff5d"],
		// _sprites: [redObstacle,pinkObstacle,blueObstacle,greenObstacle,yellowObstacle,yellowObstacle2],
		_sprites: [buildingMObstacle1,buildingMObstacle2,buildingMObstacle3,buildingMObstacle4,buildingMObstacle5,buildingGObstacle1,buildingGObstacle2],
		_sprites2: [buildingGObstacle1,buildingGObstacle2],
		tempoInsere: 0,

		insere: function(){
			this._obs.push({
				// x: LARGURA,
				x: LARGURA,
				// largura: 30 + Math.floor(20*Math.random()),
				
				// y:chao.y - Math.floor(3+Math.random()*100),
				// y:chao.y - 40 * (Math.floor(Math.random()*3) + 1),
				y:(ALTURA - 157),
				// y: 430,
				// altura: 30 + Math.floor(120*Math.random()),
				// cor: this.cores[Math.floor(5*Math.random())]
				largura:50,
				sprite: this._sprites[Math.floor(this._sprites.length*Math.random())]
				// y: sprite.altura
				
				
			});

			this.tempoInsere = 50 + Math.floor(20*Math.random());
		},
		atualiza: function(){ 
			if(this.tempoInsere == 0)
				this.insere();
			else
				this.tempoInsere--;

			for(var i=0, tam = this._obs.length; i<tam;i++){
				var obs=this._obs[i];
				obs.x-= velocidade;

				if( bloco.colidindo &&
					obs.x<=bloco.x + bloco.largura &&
					bloco.x <= obs.x+obs.largura &&
					obs.y <= bloco.y + bloco.altura
					){

					bloco.y = obs.y - 115;
					bloco.velocidade = 0;
				}
					
				if( !bloco.colidindo &&
					obs.x<=bloco.x + bloco.largura &&
					bloco.x <= obs.x+obs.largura &&
					obs.y <= bloco.y + bloco.altura
					){

					bloco.colidindo=true;
					// bloco.score--;
					// chao.x = chao.x - 30;

					setTimeout(function(){
						bloco.colidindo=false;
						
					},500);

					if (bloco.vidas>=1)
						bloco.vidas--;
					else
					 	estadoAtual = estados.perdeu;

				}
				
				// else if(obs.x <= 0 && !obs._scored){
				else if(obs.x + obs.largura < bloco.x && !bloco.colidindo && !obs._scored){
					bloco.score++;
					scoreAtual++;
					obs._scored=true;
					if (faseAtual < pontosParaNovaFase.length && 
						bloco.score == pontosParaNovaFase[faseAtual]) {
						passarDeFase();
					}
					if (bloco.score >= 30) {
						estadoAtual = estados.ganhou;

						if(localStorage.getItem('regiao') == 0 && regiaoAtual==regiao.tutorial){
							localStorage.setItem('regiao',1);
						}else if(localStorage.getItem('regiao') == 0 && regiaoAtual==regiao.americaSul){
							localStorage.setItem('regiao',2);
						}else if(localStorage.getItem('regiao') == 1 && regiaoAtual==regiao.americaSul){
							localStorage.setItem('regiao',2);
						}else if(localStorage.getItem('regiao') == 2 && regiaoAtual==regiao.europa){
							localStorage.setItem('regiao',3);
						}else if(localStorage.getItem('regiao') == 3 && regiaoAtual==regiao.africa){
							localStorage.setItem('regiao',4);
						}else if(localStorage.getItem('regiao') == 4 && regiaoAtual==regiao.asia){
							localStorage.setItem('regiao',5);
						}else if(localStorage.getItem('regiao') == 5 && regiaoAtual==regiao.final){
							localStorage.setItem('regiao',6);
						}
						// console.log(bloco.score);
						// console.log(money);
						money += bloco.score ;
						localStorage.setItem('money',money);
						// console.log(money);

					}
				} 

				else if(obs.x <= -obs.largura){
					this._obs.splice(i ,1);
					tam--;
					i--;
				}
			}
		},

		limpa: function(){
			this._obs=[];
		},

		desenha: function(){
			for(var i= 0, tam=this._obs.length; i< tam; i++){
				var obs = this._obs[i];
				obs.sprite.desenha(obs.x, obs.y);
				// ctx.fillStyle = obs.cor;
				// ctx.fillRect(obs.x,chao.y-obs.altura, obs.largura, obs.altura);
			}
		} 
	};









addEventListener("resize", function() {
	
	canvas.width = innerWidth;	
	canvas.height = innerHeight;

	ALTURA  = innerHeight;
	LARGURA = innerWidth;
	
	chao.y = innerHeight - 50,


	fundoSecundario.limpa();
	obstaculos.limpa();

	desenha();

	// init();

	// ctx.style.position = 'absolute';
	// 	ctx.style.left = (window.innerWidth - ctx.width) * .5 + 'px';
	// 	ctx.style.top = (window.innerHeight - ctx.height) * .5 + 'px';
});


// Implementation
var ball;
var ballArray;
function initBall() {
	ballArray = [];
	for (var i = 0; i < 50; i++) {
		var radius = randomIntFromRange(8, 20);
		var x = randomIntFromRange(radius,canvas.width - radius);
		var y = randomIntFromRange(0,canvas.height - radius);
		var dx = randomIntFromRange(-2, 2);
		var dy = randomIntFromRange(-2, 2);
		var color = randomColor(colorsBall);
		ballArray.push(new Ball(x, y, dx, dy, radius, color));
	}
	// ball = new Ball(canvas.width/2, canvas.height/2,2,30,"red");
	// console.log(ballArray);
}




var circleArray = [];
function initCircle(){
	circleArray = [];
	for (var i = 0; i < 30; i++) {
		var radius = Math.random() * 3 + 10;
		var x = Math.random() * (LARGURA - radius * 2) + radius;
		var dx = (Math.random()-1)*3;
		var y = Math.random() * (ALTURA - radius *2) + radius;
		var dy = (Math.random()-1)*3;
		circleArray.push(new Circle(x,y,dx,dy,radius));
	}
}

var circleArraySkins = [];
function initCircleSkins(){
	circleArraySkins = [];
	for (var i = 0; i < skinsCompradas.length; i++) {
		// var radius = Math.random() * 3 + 1;
		var radius = 30;
		var x = Math.random() * (LARGURA - radius * 2) + radius;
		if(x > LARGURA/2){
			x=x-radius;
		}else{
			x=x+radius;
		}
		var dx = (Math.random()+1)*1.5;
		var y = Math.random() * (ALTURA - radius *2) + radius;
		if(y > ALTURA/2){
			y=y-radius;
		}else{
			y=y+radius;
		}
		var dy = (Math.random()+1)*1.5;
		if(skinsCompradas[i]==skinAtiva){
			circleArraySkins.push(new CircleSkin(true,skinsCompradas[i],x,y,dx,dy,radius,30,true,false));
		}else{
			circleArraySkins.push(new CircleSkin(false,skinsCompradas[i],x,y,dx,dy,radius,30,true,false));
		}
		
	}
}

var circleArraySkinsLoja = [];
function initCircleSkinsLoja(){
	circleArraySkinsLoja = [];
	for (var i = 0; i < skins.length; i++) {
		// var radius = Math.random() * 3 + 1;
		var radius = 30;
		var x = Math.random() * (LARGURA - radius * 2) + radius;
		if(x > LARGURA/2){
			x=x-radius;
		}else{
			x=x+radius;
		}
		var dx = (Math.random()+1)*1.5;
		var y = Math.random() * (ALTURA - radius *2) + radius;
		if(y > ALTURA/2){
			y=y-radius;
		}else{
			y=y+radius;
		}
		var dy = (Math.random()+1)*1.5;
		let tem=false;
		for (var j = 0; j < skinsCompradas.length; j++) {
			if(skins[i]==skinsCompradas[j]){
				circleArraySkinsLoja.push(new CircleSkin(true,skins[i],x,y,dx,dy,radius,30,true,true));
				tem=true;
			}
		}
		if(tem != true){
			circleArraySkinsLoja.push(new CircleSkin(false,skins[i],x,y,dx,dy,radius,30,false,true));
		}
	}
}

// function animate(){
// 	requestAnimationFrame(animate);
// 	ctx.clearRect(0, 0, innerWidth, innerHeight);

// 	for (var i = 0; i < circleArray.length; i++) {
// 		circleArray[i].update();
// 	}
// }

// init();
// animate();




function main(){
	
	ALTURA  = innerHeight;
	LARGURA = innerWidth;
	// if(LARGURA >= 200){
		// LARGURA = 600;
		// ALTURA = 600;
	//}
	// canvas = document.createElement("canvas");
	canvas = document.getElementById("myCanvas");
	canvas.width = LARGURA;
	canvas.height = ALTURA;
	// canvas.style.border = "1px solid #000";

    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);

    var flag = 0;
	canvas.addEventListener("mousedown", function(){
		clique();

	    flag = 1;
	    
	}, false);
	canvas.addEventListener("mousemove", function(event){
		mouse.x = event.x;
		mouse.y = event.y;

		if(flag == 2){
			
		}else if(flag == 1){
			flag = 2;
			
		}else if(flag == 0){
			
		}

	}, false);
	canvas.addEventListener("mouseup", function(){
	    if(flag == 1){
	    	flag = 0;
	        
	    }else if(flag == 2){
	    	
	    	flag = 0;
	    }
	}, false);

	// addEventListener('mousemove',
	// 	function(event){
	// 		mouse.x = event.x;
	// 	    mouse.y = event.y;
	// });

    // canvas.addEventListener("mousedown",  clique);
    // canvas.addEventListener("mousemove",  clique2);
    // canvas.addEventListener("mouseup",    clique3);
    document.addEventListener( "keydown", gte);

    estadoAtual = estados.jogar;
    regiaoAtual = regiao.tutorial;
    record = localStorage.getItem("record");

    if(record==null)
    	record=0;

    img = new Image();
    img.src="img/novo4.png";

    img2 = new Image();
    img2.src="img/face/kimJongUn1.png";

    imgBg = new Image();
    imgBg.src="img/bg/mapa-mundi.png";

    explosionImg = new Image();
    explosionImg.src = "img/explosion1.png";
 	
 	lavis = new Image();
 	lavis.src = "img/Lavis_Sprite.png";

 	smokeT = new Image();
 	smokeT.src = "img/smoke10graus.png";

 	mulherMaravilha = new Image();
 	mulherMaravilha.src = "img/mulherMaravilha.png";

 	hoshikage = new Image();
 	hoshikage.src = "img/hoshikage.png";

 	asagi = new Image();
 	asagi.src = "img/asagi.png";

 	kimAndChi = new Image();
 	kimAndChi.src = "img/kimAndChi-theMagicKnights.png";

 	hiei = new Image();
 	hiei.src = "img/hiei.png";

 	capitaoAmerica = new Image();
 	capitaoAmerica.src = "img/capitaoAmerica.gif";

 	if(skin < 1){
 		skin=1;
 	}

 	
	stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
	document.body.appendChild( stats.dom );

   	initCircle();
   	initBall();
   	initCircleSkins();
   	initCircleSkinsLoja();
	// animate();
    roda();
if(email == null){
    email = "Visitante@visitante.com";
}
if (name == null) {
	name = "Visitante";
}

if (regiao == null || typeof regiao == 'undefined' ) {
	regiao = 0;
}

if (idUser == null) {
	idUser = 3;
}
//     email = localStorage.getItem('email'),
// name = localStorage.getItem('name'),
// regiao = localStorage.getItem('regiao'),
// idUser = localStorage.getItem('idUser'),


}
function roda(){

	stats.begin();

	atualiza();
	desenha();

	stats.end();

	// requestAnimationFrame( animate );

	window.requestAnimationFrame(roda);
}
function atualiza(){
	// console.log(frames);
	// obstaculos.insere();
	// console.log(obstaculos._obs.length);
	// frames++;
	// ctx.fillStyle = "#fff";
	if(estadoAtual == estados.jogando){
		obstaculos.atualiza();
		fundoSecundario.atualiza();
		chao.atualiza();
		bloco.atualiza();
	}else if(estadoAtual == estados.jogar){
		bloco.atualiza();
		chao.atualiza();
	}else if(estadoAtual == estados.skins || estadoAtual == estados.loja){
		// chao.atualiza();
	}
	
	
}
function darken(x, y, w, h, darkenColor, amount) {
    ctx.fillStyle = darkenColor;
    ctx.globalAlpha = amount;
    ctx.fillRect(x, y, w, h);
    ctx.globalAlpha = 1;
}
function ligthen(x, y, radius, color) {
    ctx.save();
    var rnd = 0.03 * Math.sin(1.1 * Date.now() / 1000);
    radius = radius * (1 + rnd);
    ctx.globalCompositeOperation = 'lighter';
    ctx.fillStyle = '#0B0B00';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * π);
    ctx.fill();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius * 0.90 + rnd, 0, 2 * π);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y, radius * 0.4 + rnd, 0, 2 * π);
    ctx.fill();
    ctx.restore();
}
function ligthenGradient(x, y, radius) {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    var rnd = 0.05 * Math.sin(1.1 * Date.now() / 1000);
    radius = radius * (1 + rnd);
    var radialGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    radialGradient.addColorStop(0.0, '#BB9');
    radialGradient.addColorStop(0.2 + rnd, '#AA8');
    radialGradient.addColorStop(0.7 + rnd, '#330');
    radialGradient.addColorStop(0.90, '#110');
    radialGradient.addColorStop(1, '#000');
    ctx.fillStyle = radialGradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * π);
    ctx.fill();
    ctx.restore();
}
function desenha(){

	// ctx.fillStyle = "#50beff";
	// ctx.fillStyle = "rgba(82, 191, 255, .01)";
	
	ctx.clearRect(0, 0, LARGURA, ALTURA);
	ctx.fillRect(0, 0, LARGURA, ALTURA);



    // darken(0, 0, LARGURA, ALTURA, '#003', 0.5);
    // draw a light abstacle
    // ctx.save();
    // ctx.strokeStyle = '#58B';
    // ctx.fillStyle = '#46A';
    // ctx.beginPath();
    // ctx.arc(280, 280, 50, 0, 2 * π);
    // ctx.lineWidth = 4;
    // ctx.fill();
    // ctx.stroke();
    // // clip with the light obstacle
    // ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.lineTo(LARGURA, 0);
    // ctx.lineTo(LARGURA, ALTURA);
    // ctx.lineTo(0, ALTURA);
    // ctx.lineTo(0, 0);
    // ctx.arc(280, 280, 50, 0, 2 * π, true);
    // ctx.clip();
    // draw the left light (clipped)
    ligthen(mouse.x, mouse.y, 120, '#9BEAFF');
    ctx.restore();
    // draw right light
    ligthenGradient(bloco.x+50, bloco.y, 20);
    ctx.restore();

		// for (var i = 0; i < circleArray.length; i++) {
		// 	// circleArray[i].update();
		// 	// ligthenGradient(circleArray[i].x, circleArray[i].y, circleArray[i].radius+10);			
		// }

	// bg2.desenha(0,0);
	//bg.desenha(0,0);	


	// ctx.clearRect( 0, 0, 512, 512 );
	time = performance.now() / 1000;
	ctx.fillStyle = 'rgba(127,0,255,0.05)';
	for ( var i = 0; i < 1000; i ++ ) {

		var x = Math.cos( time + i * 0.01 ) * 196 + 256;
		var y = Math.sin( time + i * 0.01234 ) * 196 + 256;

		ctx.beginPath();
		
		ctx.arc( x, y, 10, 0, Math.PI * 2, true );
		ctx.fill();

	}

// função fazer prédio
	var x=300,larguraPredio = 80,andar=3,i,j,aux;
	ctx.fillStyle = "#1E1C59";
	ctx.fillRect(x,ALTURA-chao.altura-larguraPredio*andar,larguraPredio,larguraPredio*andar);
	
	for (var k = 0; k < andar; k++) {
		j=1;
		while(j<=3) {
			i=1;
			aux=Math.floor(Math.random()+.5);
			while(i<=3){	
				if(aux==1){
					ctx.fillStyle = "#F2BC57";
					ctx.fillRect(x+((larguraPredio/5)*i),(ALTURA-chao.altura-(larguraPredio*andar))+(k*larguraPredio)+(larguraPredio/5*j),larguraPredio/5,larguraPredio/5);
					ligthenGradient(x+((larguraPredio/5)*i)+((larguraPredio/5)/2), (ALTURA-chao.altura-(larguraPredio*andar))+(k*larguraPredio)+(larguraPredio/5*j)+(larguraPredio/5/2), larguraPredio/5+2);
				}else{
					ctx.fillStyle = "#1B21A6";
					ctx.fillRect(x+((larguraPredio/5)*i),(ALTURA-chao.altura-(larguraPredio*andar))+(k*larguraPredio)+(larguraPredio/5*j),larguraPredio/5,larguraPredio/5);
				}
				i=i+2;
			}
			j=j+2;
		}
	}
// função fazer prédio	
	
	

	ctx.fillStyle = "#fff";
	ctx.font = l5+letra;
	ctx.fillText(bloco.score, 30, 68);

	ctx.fillStyle = "#fff";
	ctx.font = l3+letra;
	ctx.fillText(scoreAtual, 45, 95);

	ctx.fillStyle = "#fff";
	ctx.font = l5+letra;

	ctx.fillStyle = "#fff";
	ctx.font = l1+letra;

	ctx.fillText("Olá "+name+"!", 540, 68);

	ctx.fillStyle = "#fff";
	ctx.font = l5+letra;
	
	ctx.font = l3+letra;
	ctx.fillText("Money: "+money, LARGURA-100, 68);

	ctx.font = l3+letra;

	ctx.fillStyle = "rgba(0,0,0,"+labelNovaFase.opacidade+")";
	ctx.fillText(labelNovaFase.texto, canvas.width/2 - ctx.measureText(labelNovaFase.Texto).width/2, canvas.height/3);

	if (regiaoAtual == regiao.tutorial)
		ctx.fillText("Tutorial", 200, 68);
	else if (regiaoAtual == regiao.americaSul) 
		ctx.fillText("America", 200, 68);
	else if (regiaoAtual == regiao.europa)
		ctx.fillText("Europa", 200, 68);
	else if (regiaoAtual == regiao.africa)
		ctx.fillText("Oriente Medio", 200, 68);
	else
		ctx.fillText("Asia", 200, 68);

	ctx.font = l5+letra;
	// ctx.fillText(estadoAtual, 400, 68);

	if(estadoAtual == estados.jogar){	
		for (var i = 0; i < circleArray.length; i++) {
			circleArray[i].update();
		}
		for (var i = 0; i < ballArray.length; i++) {
			ballArray[i].update();
		}
		eval(skinAtiva).desenha();			
	}else if(estadoAtual== estados.skins){
		// eval(skinAtiva).desenha();	
		for (var i = 0; i < circleArraySkins.length; i++) {
			circleArraySkins[i].update();
		}
	}else if(estadoAtual== estados.loja){
		// eval(skinAtiva).desenha();	
		for (var i = 0; i < circleArraySkinsLoja.length; i++) {
			circleArraySkinsLoja[i].update();
		}
	}


	// if( bloco.colidindo &&
	// 	obs.x<=bloco.x + bloco.largura &&
	// 	bloco.x <= obs.x+obs.largura &&
	// 	obs.y <= bloco.y + bloco.altura){
	// 		ctx.fillText(bloco.gravidade, 200, 68);
	// }



	if(estadoAtual==estados.jogando){
		fundoSecundario.desenha();
		obstaculos.desenha();
		
		// chao.desenha();
		// bloco.desenha();
	}
	if(estadoAtual==estados.jogar || estadoAtual==estados.jogando){
		bloco.desenha();
	}

	chao.desenha();	
	
	ctx.font = l3+letra;
	ctx.fillStyle = "#2185C5";
	ctx.fillRect(LARGURA/2 - 50,ALTURA/8 - 50,50,50);
	ctx.fillStyle= "#fff";
	ctx.fillText("Home", LARGURA/2 - 25,ALTURA/8 - 25);

	if (estadoAtual==estados.jogar){

		ctx.fillStyle = "#3ACE9B";
		ctx.fillRect(LARGURA/4 - 30,ALTURA/3 - 30,30,30);
		ctx.fillStyle= "#fff";
		ctx.fillText("Skins", LARGURA/4 - 25,ALTURA/3 -25);

		ctx.fillStyle = "#3ACE9B";
		ctx.fillRect(LARGURA/4 - 50,ALTURA/4 - 50,50,50);
		ctx.fillStyle= "#fff";
		ctx.fillText("Loja", LARGURA/4 - 25,ALTURA/4 - 25);

		ctx.fillStyle = "#4365A6";
		ctx.fillRect(3*LARGURA/4 - 50,ALTURA/4 - 50,50,50);
		ctx.fillStyle= "#fff";
		ctx.fillText("Salvar", 3*LARGURA/4 - 25,ALTURA/4 -25);

		ctx.fillStyle = "#FF7F66";
		ctx.fillRect(3*LARGURA/4 - 30,ALTURA/3 - 30,30,30);
		ctx.fillStyle= "#fff";
		ctx.fillText("Resetar", 3*LARGURA/4 - 25,ALTURA/3 -25);

		ctx.font = l3+letra;   

		if(localStorage.getItem("regiao") < 0 && localStorage.getItem("regiao") > 6){
			localStorage.setItem("regiao",0);
		}

		ctx.fillStyle = "#151D2C";
		ctx.fillRect(LARGURA/4 - 50,ALTURA/2 - 50,50,50);
		ctx.fillStyle= "#F6C4B1";
		ctx.fillText("Tutorial", LARGURA/4 - 25,ALTURA/2 - 25);
		if(localStorage.regiao > 0 ){
			ctx.drawImage(explosionImg,LARGURA/4 - 50,ALTURA/2 - 50);
		}

		ctx.fillStyle = "#151D2C";
		ctx.fillRect(LARGURA/2 - 50,ALTURA/2 - 50,50,50);
		ctx.fillStyle= "#F6C4B1";
		// ctx.shadowBlur=20;
		// ctx.shadowColor = "black";
		if(localStorage.regiao > 1 ){
			ctx.drawImage(explosionImg,LARGURA/2 - 50,ALTURA/2 - 50);
		}
		ctx.fillText("América", LARGURA/2 - 25,ALTURA/2 - 25);
		

		ctx.fillStyle = "#151D2C";
		ctx.fillRect(3*LARGURA/4 - 50,ALTURA/2 - 50,50,50);
		ctx.fillStyle= "#F6C4B1";
		ctx.fillText("Europa", 3*LARGURA/4 - 25,ALTURA/2 - 25);
		if(localStorage.regiao > 2 ){
			ctx.drawImage(explosionImg,3*LARGURA/4 - 50,ALTURA/2 - 50);
		}

		ctx.fillStyle = "#151D2C";
		ctx.fillRect(LARGURA/4 - 50,3*ALTURA/4 - 50,50,50);
		ctx.fillStyle= "#F6C4B1";
		ctx.fillText("África", LARGURA/4 - 25,3*ALTURA/4 - 25);
		if(localStorage.regiao > 3 ){
			ctx.drawImage(explosionImg,LARGURA/4 - 50,3*ALTURA/4 - 50);
		}

		ctx.fillStyle= "#151D2C";
		if(mouse.x > LARGURA/2 - 50 && mouse.x < LARGURA/2 && mouse.y > 3*ALTURA/4 - 50 && mouse.y < 3*ALTURA/4) {
			ctx.fillStyle = "#151D2C";
			ctx.fillRect(LARGURA/2 - 50,3*ALTURA/4 - 50,50,50);	
		}else{
			ctx.fillStyle = "#151D2C";
			ctx.fillRect(LARGURA/2 - 50,3*ALTURA/4 - 50,50,50);
			ctx.fillStyle= "#F6C4B1";
		}
		if(localStorage.regiao > 4 ){
			ctx.drawImage(explosionImg,LARGURA/2 - 50,3*ALTURA/4 - 50);
		}
		ctx.fillText("Ásia", LARGURA/2 - 25,3*ALTURA/4 - 25);


		ctx.fillStyle = "#151D2C";
		ctx.fillRect(3*LARGURA/4 - 50,3*ALTURA/4 - 50,50,50);
		ctx.fillStyle= "#F6C4B1";
		ctx.fillText("Final", 3*LARGURA/4 - 25,3*ALTURA/4 - 25);
		if(localStorage.regiao == 6 ){
			ctx.drawImage(explosionImg,3*LARGURA/4 - 50,3*ALTURA/4 - 50);
		}
	}else if (estadoAtual==estados.perdeu){

		if(frRate < 5){
			eval(skinAux[23]).desenha(LARGURA/2-eval(skinAux[23]).largura/2,ALTURA/2 - eval(skinAux[23]).altura/2);
			frRate ++;
		}else if(frRate >= 5 && frRate < 10){
			eval(skinAux[24]).desenha(LARGURA/2-eval(skinAux[24]).largura/2,ALTURA/2 - eval(skinAux[24]).altura/2);
			frRate ++;
		}else if(frRate >= 10 && frRate < 15){
			eval(skinAux[25]).desenha(LARGURA/2-eval(skinAux[25]).largura/2,ALTURA/2 - eval(skinAux[25]).altura/2);
			frRate ++;
		}else if(frRate >= 15 && frRate < 20){
			eval(skinAux[26]).desenha(LARGURA/2-eval(skinAux[26]).largura/2,ALTURA/2 - eval(skinAux[26]).altura/2);
			frRate ++;
		}else if(frRate >= 20 && frRate < 25){
			eval(skinAux[27]).desenha(LARGURA/2-eval(skinAux[27]).largura/2,ALTURA/2 - eval(skinAux[27]).altura/2);
			frRate ++;
		}else if(frRate >= 25 && frRate < 30){
			eval(skinAux[28]).desenha(LARGURA/2-eval(skinAux[28]).largura/2,ALTURA/2 - eval(skinAux[28]).altura/2);
			frRate ++;
		}else if(frRate >= 30 && frRate < 35){
			eval(skinAux[29]).desenha(LARGURA/2-eval(skinAux[29]).largura/2,ALTURA/2 - eval(skinAux[29]).altura/2);
			frRate ++;
		}else if(frRate >= 35 && frRate < 40){
			eval(skinAux[30]).desenha(LARGURA/2-eval(skinAux[30]).largura/2,ALTURA/2 - eval(skinAux[30]).altura/2);
			frRate ++;
		}
		if(frRate >= 40){
			frRate = 0;
		}

		ctx.font = l5+letra;
		
		ctx.fillStyle= "#fff";

		if(bloco.score>record){
			novo.desenha(LARGURA/2-180,ALTURA/2 + 30);
			ctx.fillText(bloco.score,420,470);
		}else{
			ctx.fillText(record,420,470);
		}
	}else if (estadoAtual==estados.ganhou){

		if(frRate < 5){
			eval(skinAux[15]).desenha(LARGURA/2-spriteLavisGanhou1.largura/2,ALTURA/2 - spriteLavisGanhou1.altura/2);
			frRate ++;
		}else if(frRate >= 5 && frRate < 10){
			eval(skinAux[16]).desenha(LARGURA/2-spriteLavisGanhou2.largura/2,ALTURA/2 - spriteLavisGanhou2.altura/2);
			frRate ++;
		}else if(frRate >= 10 && frRate < 15){
			eval(skinAux[17]).desenha(LARGURA/2-spriteLavisGanhou2.largura/2,ALTURA/2 - spriteLavisGanhou2.altura/2);
			frRate ++;
		}else if(frRate >= 15 && frRate < 20){
			eval(skinAux[18]).desenha(LARGURA/2-spriteLavisGanhou2.largura/2,ALTURA/2 - spriteLavisGanhou2.altura/2);
			frRate ++;
		}else if(frRate >= 20 && frRate < 25){
			eval(skinAux[19]).desenha(LARGURA/2-spriteLavisGanhou2.largura/2,ALTURA/2 - spriteLavisGanhou2.altura/2);
			frRate ++;
		}else if(frRate >= 25 && frRate < 30){
			eval(skinAux[20]).desenha(LARGURA/2-spriteLavisGanhou2.largura/2,ALTURA/2 - spriteLavisGanhou2.altura/2);
			frRate ++;
		}else if(frRate >= 30 && frRate < 35){
			eval(skinAux[21]).desenha(LARGURA/2-spriteLavisGanhou2.largura/2,ALTURA/2 - spriteLavisGanhou2.altura/2);
			frRate ++;
		}else if(frRate >= 35 && frRate < 40){
			eval(skinAux[22]).desenha(LARGURA/2-spriteLavisGanhou2.largura/2,ALTURA/2 - spriteLavisGanhou2.altura/2);
			frRate ++;
		}
		if(frRate == 40){
			frRate = 0;
		}
		ctx.font = l4+letra;
		ctx.fillStyle= "#fff";
		ctx.fillText("WIN!!!", LARGURA/4 - 25,ALTURA/4 - 25);
		if (regiaoAtual == regiao.final){
			// spriteBonecoGanhou.desenha(LARGURA/2-jogar.largura/2,ALTURA/2 - jogar.altura/2);
			ctx.fillStyle= "#fff";
			ctx.fillText("Parabéns, acabou!!!", LARGURA/4 - 25,ALTURA/4 - 25);
		}
	}	
	ctx.fillStyle = "#FF0000";
	ctx.font = l7+letra;
	if(estadoAtual==estados.jogando){
		ctx.fillText("5/"+bloco.vidas, bloco.x, bloco.y - 40);
	}

	ctx.fillStyle = "#333";




}

main();
