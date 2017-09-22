function Sprite(x, y, largura, altura){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha= function(xCanvas,yCanvas){
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}
function Sprite2(x, y, largura, altura){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha= function(xCanvas,yCanvas){
		ctx.drawImage(img2, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}
function Sprite3(x, y, largura, altura){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha= function(xCanvas,yCanvas){
		ctx.drawImage(imgBg, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}
function SpriteLavis(x, y, largura, altura){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha= function(xCanvas,yCanvas){
		ctx.drawImage(lavis, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}
function SpriteMulherMaravilha(x, y, largura, altura){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha= function(xCanvas,yCanvas){
		ctx.drawImage(mulherMaravilha, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}
function SpriteHoshikage(x, y, largura, altura){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha= function(xCanvas,yCanvas){
		ctx.drawImage(hoshikage, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}
function SpriteAsagi(x, y, largura, altura){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha= function(xCanvas,yCanvas){
		ctx.drawImage(asagi, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}
function SpriteKimAndChi(x, y, largura, altura){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha= function(xCanvas,yCanvas){
		ctx.drawImage(kimAndChi, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}
function SpriteHiei(x, y, largura, altura){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha= function(xCanvas,yCanvas){
		ctx.drawImage(hiei, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}
function SpriteCapitaoAmerica(x, y, largura, altura){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha= function(xCanvas,yCanvas){
		ctx.drawImage(capitaoAmerica, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}
function Smoke(x, y, largura, altura){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha= function(xCanvas,yCanvas){
		ctx.drawImage(smokeT, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

var bg = new Sprite(0,0,600,600),
bg2 = new Sprite3(0,0,768,450),
face = new Sprite2(0,0,200,400),
smoke = new Sprite(830,23,50,52),
smokeTrue = new Smoke(5,5,47,28),
// var bg = new Sprite(2122,0,2722,600),
// spriteBoneco = new Sprite(618,16,87,87),
spriteBoneco = new Sprite(740,16,87,87),
spriteBonecoPuloImpulso = new Sprite(1439,372,108,73),
// spriteBonecoPuloAlto = new Sprite(1756,372,83,83),
spriteBonecoPuloAlto = new Sprite(1912,444,63,84),
spriteBonecoPuloDesc = new Sprite(1642,370,106,75),
spriteBonecoPulo21 = new Sprite(1844,445,62,81),
spriteBonecoPulo22 = new Sprite(1756,372,83,83),
spriteBonecoPulo23 = new Sprite(1844,445,62,81),
spriteBonecoAndar1 = new Sprite(1439,16,82,87),
spriteBonecoAndar2 = new Sprite(1613,16,79,84),
spriteBonecoAndar3 = new Sprite(1783,16,79,84),
spriteBonecoAndar4 = new Sprite(1865,16,87,82),
spriteBonecoAndar5 = new Sprite(1613,106,82,84),
spriteBonecoAndar6 = new Sprite(1702,106,81,86),
spriteBonecoAndar7 = new Sprite(1788,106,81,85),
spriteBonecoAndar8 = new Sprite(1788,106,81,85),
spriteBonecoColidir = new Sprite(1970,90,75,93),
spriteBonecoPerdeu1 = new Sprite(603,478,397,358),
spriteBonecoPerdeu2 = new Sprite(603,478,397,358),
spriteBonecoPerdeu3 = new Sprite(603,478,397,358),
spriteBonecoPerdeu4 = new Sprite(603,478,397,358),
spriteBonecoPerdeu5 = new Sprite(603,478,397,358),
spriteBonecoPerdeu6 = new Sprite(603,478,397,358),
spriteBonecoPerdeu7 = new Sprite(603,478,397,358),
spriteBonecoPerdeu8 = new Sprite(603,478,397,358),
spriteBonecoGanhou1 = new Sprite(1130,408,335,340),
spriteBonecoGanhou2 = new Sprite(1130,408,335,340),
spriteBonecoGanhou3 = new Sprite(1130,408,335,340),
spriteBonecoGanhou4 = new Sprite(1130,408,335,340),
spriteBonecoGanhou5 = new Sprite(1130,408,335,340),
spriteBonecoGanhou6 = new Sprite(1130,408,335,340),
spriteBonecoGanhou7 = new Sprite(1130,408,335,340),
spriteBonecoGanhou8 = new Sprite(1130,408,335,340),

spriteLavis = new SpriteLavis(606,903,85,58),
spriteLavisPuloImpulso = new SpriteLavis(443,223,60,71),
spriteLavisPuloAlto = new SpriteLavis(505,197,41,90),
spriteLavisPuloDesc = new SpriteLavis(546,215,58,73),
spriteLavisPulo21 = new SpriteLavis(606,236,59,50),
spriteLavisPulo22 = new SpriteLavis(668,231,54,57),
spriteLavisPulo23 = new SpriteLavis(717,292,58,52),
spriteLavisAndar1 = new SpriteLavis(9,674,84,54),
spriteLavisAndar2 = new SpriteLavis(94,672,80,58),
spriteLavisAndar3 = new SpriteLavis(175,676,81,55),
spriteLavisAndar4 = new SpriteLavis(256,679,80,49),
spriteLavisAndar5 = new SpriteLavis(337,675,83,52),
spriteLavisAndar6 = new SpriteLavis(420,673,79,54),
spriteLavisAndar7 = new SpriteLavis(501,679,82,59),
spriteLavisAndar8 = new SpriteLavis(585,681,80,47),
spriteLavisColidir = new SpriteLavis(673,573,59,76),
spriteLavisPerdeu1 = new SpriteLavis(8,23,52,67),
spriteLavisPerdeu2 = new SpriteLavis(61,14,56,76),
spriteLavisPerdeu3 = new SpriteLavis(120,0,57,90),
spriteLavisPerdeu4 = new SpriteLavis(179,1,68,89),
// spriteLavisPerdeu5 = new SpriteLavis(249,3,57,87),
spriteLavisPerdeu5 = new SpriteLavis(309,4,48,86),
// spriteLavisPerdeu7 = new SpriteLavis(359,0,43,90),
spriteLavisPerdeu6 = new SpriteLavis(405,0,110,90),
spriteLavisPerdeu7 = new SpriteLavis(521,0,78,90),
spriteLavisPerdeu8 = new SpriteLavis(603,0,116,90),
spriteLavisGanhou1 = new SpriteLavis(625,901,74,49),
spriteLavisGanhou2 = new SpriteLavis(625,901,74,49),
spriteLavisGanhou3 = new SpriteLavis(625,901,74,49),
spriteLavisGanhou4 = new SpriteLavis(625,901,74,49),
spriteLavisGanhou5 = new SpriteLavis(697,901,74,49),
spriteLavisGanhou6 = new SpriteLavis(697,901,74,49),
spriteLavisGanhou7 = new SpriteLavis(697,901,74,49),
spriteLavisGanhou8 = new SpriteLavis(697,901,74,49),


spriteMulherMaravilha = new SpriteMulherMaravilha(6,30,48,98),
spriteMulherMaravilhaPuloImpulso = new SpriteMulherMaravilha(599,58,66,68),
spriteMulherMaravilhaPuloAlto = new SpriteMulherMaravilha(675,15,54,112),
spriteMulherMaravilhaPuloDesc = new SpriteMulherMaravilha(974,50,45,78),
spriteMulherMaravilhaPulo21 = new SpriteMulherMaravilha(740,40,87,56),
spriteMulherMaravilhaPulo22 = new SpriteMulherMaravilha(837,42,55,87),
spriteMulherMaravilhaPulo23 = new SpriteMulherMaravilha(899,40,66,62),
spriteMulherMaravilhaAndar1 = new SpriteMulherMaravilha(6,30,48,98),
spriteMulherMaravilhaAndar2 = new SpriteMulherMaravilha(65,37,72,91),
spriteMulherMaravilhaAndar3 = new SpriteMulherMaravilha(148,38,72,90),
spriteMulherMaravilhaAndar4 = new SpriteMulherMaravilha(229,40,72,88),
spriteMulherMaravilhaAndar5 = new SpriteMulherMaravilha(308,38,72,90),
spriteMulherMaravilhaAndar6 = new SpriteMulherMaravilha(389,35,59,93),
spriteMulherMaravilhaAndar7 = new SpriteMulherMaravilha(459,33,52,95),
spriteMulherMaravilhaAndar8 = new SpriteMulherMaravilha(459,33,52,95),
spriteMulherMaravilhaColidir = new SpriteMulherMaravilha(732,570,72,88),
spriteMulherMaravilhaPerdeu1 = new SpriteMulherMaravilha(926,617,141,41),
spriteMulherMaravilhaPerdeu2 = new SpriteMulherMaravilha(926,617,141,41),
spriteMulherMaravilhaPerdeu3 = new SpriteMulherMaravilha(926,617,141,41),
spriteMulherMaravilhaPerdeu4 = new SpriteMulherMaravilha(926,617,141,41),
spriteMulherMaravilhaPerdeu5 = new SpriteMulherMaravilha(926,617,141,41),
spriteMulherMaravilhaPerdeu6 = new SpriteMulherMaravilha(926,617,141,41),
spriteMulherMaravilhaPerdeu7 = new SpriteMulherMaravilha(926,617,141,41),
spriteMulherMaravilhaPerdeu8 = new SpriteMulherMaravilha(926,617,141,41),
spriteMulherMaravilhaGanhou1 = new SpriteMulherMaravilha(5,554,71,104),
spriteMulherMaravilhaGanhou2 = new SpriteMulherMaravilha(5,554,71,104),
spriteMulherMaravilhaGanhou3 = new SpriteMulherMaravilha(87,554,71,104),
spriteMulherMaravilhaGanhou4 = new SpriteMulherMaravilha(87,554,71,104),
spriteMulherMaravilhaGanhou5 = new SpriteMulherMaravilha(169,554,73,104),
spriteMulherMaravilhaGanhou6 = new SpriteMulherMaravilha(169,554,73,104),
spriteMulherMaravilhaGanhou7 = new SpriteMulherMaravilha(251,554,71,104),
spriteMulherMaravilhaGanhou8 = new SpriteMulherMaravilha(251,554,71,104),

spriteHoshikage = new SpriteHoshikage(137,4,45,76),
spriteHoshikagePuloImpulso = new SpriteHoshikage(338,662,57,73),
spriteHoshikagePuloAlto = new SpriteHoshikage(340,523,57,87),
spriteHoshikagePuloDesc = new SpriteHoshikage(340,523,57,87),
spriteHoshikagePulo21 = new SpriteHoshikage(402,621,56,73),
spriteHoshikagePulo22 = new SpriteHoshikage(275,622,58,61),
spriteHoshikagePulo23 = new SpriteHoshikage(423,701,39,68),
spriteHoshikageAndar1 = new SpriteHoshikage(211,171,66,53),
spriteHoshikageAndar2 = new SpriteHoshikage(283,170,66,54),
spriteHoshikageAndar3 = new SpriteHoshikage(360,170,45,54),
spriteHoshikageAndar4 = new SpriteHoshikage(414,169,46,55),
spriteHoshikageAndar5 = new SpriteHoshikage(162,312,55,60),
spriteHoshikageAndar6 = new SpriteHoshikage(300,302,43,70),
spriteHoshikageAndar7 = new SpriteHoshikage(357,299,46,73),
spriteHoshikageAndar8 = new SpriteHoshikage(414,298,49,74),
spriteHoshikageColidir = new SpriteHoshikage(423,1068,38,78),
spriteHoshikagePerdeu1 = new SpriteHoshikage(503,1367,51,60),
spriteHoshikagePerdeu2 = new SpriteHoshikage(503,1367,51,60),
spriteHoshikagePerdeu3 = new SpriteHoshikage(503,1367,51,60),
spriteHoshikagePerdeu4 = new SpriteHoshikage(503,1367,51,60),
spriteHoshikagePerdeu5 = new SpriteHoshikage(565,1368,53,59),
spriteHoshikagePerdeu6 = new SpriteHoshikage(565,1368,53,59),
spriteHoshikagePerdeu7 = new SpriteHoshikage(565,1368,53,59),
spriteHoshikagePerdeu8 = new SpriteHoshikage(565,1368,53,59),
spriteHoshikageGanhou1 = new SpriteHoshikage(137,4,45,76),
spriteHoshikageGanhou2 = new SpriteHoshikage(137,4,45,76),
spriteHoshikageGanhou3 = new SpriteHoshikage(193,4,45,76),
spriteHoshikageGanhou4 = new SpriteHoshikage(193,4,45,76),
spriteHoshikageGanhou5 = new SpriteHoshikage(249,6,45,74),
spriteHoshikageGanhou6 = new SpriteHoshikage(303,6,47,74),
spriteHoshikageGanhou7 = new SpriteHoshikage(359,5,47,75),
spriteHoshikageGanhou8 = new SpriteHoshikage(416,5,46,75),


// spriteHoshikageGanhou7 = new SpriteHoshikage(362,85,42,76),
// spriteHoshikageGanhou8 = new SpriteHoshikage(412,86,46,75),

spriteAsagi = new SpriteAsagi(678,80,29,63),
spriteAsagiPuloImpulso = new SpriteAsagi(325,1040,40,62),
spriteAsagiPuloAlto = new SpriteAsagi(433,1040,49,62),
spriteAsagiPuloDesc = new SpriteAsagi(542,1040,35,64),
spriteAsagiPulo21 = new SpriteAsagi(5,1662,72,36),
spriteAsagiPulo22 = new SpriteAsagi(87,1635,69,62),
spriteAsagiPulo23 = new SpriteAsagi(315,1648,68,43),
spriteAsagiAndar1 = new SpriteAsagi(361,1467,55,52),
spriteAsagiAndar2 = new SpriteAsagi(417,1471,55,50),
spriteAsagiAndar3 = new SpriteAsagi(476,1473,52,46),
spriteAsagiAndar4 = new SpriteAsagi(531,1473,55,47),
spriteAsagiAndar5 = new SpriteAsagi(592,1473,55,46),
spriteAsagiAndar6 = new SpriteAsagi(654,1474,53,47),

spriteAsagiAndar7 = new SpriteAsagi(361,1467,55,52),
spriteAsagiAndar8 = new SpriteAsagi(476,1473,52,46),
// spriteAsagiAndar7 = new SpriteAsagi(551,1528,69,44),
// spriteAsagiAndar8 = new SpriteAsagi(631,1529,71,44),
spriteAsagiColidir = new SpriteAsagi(613,2678,48,58),
spriteAsagiPerdeu1 = new SpriteAsagi(649,2751,57,30),
spriteAsagiPerdeu2 = new SpriteAsagi(649,2751,57,30),
spriteAsagiPerdeu3 = new SpriteAsagi(649,2751,57,30),
spriteAsagiPerdeu4 = new SpriteAsagi(649,2751,57,30),
spriteAsagiPerdeu5 = new SpriteAsagi(649,2751,57,30),
spriteAsagiPerdeu6 = new SpriteAsagi(649,2751,57,30),
spriteAsagiPerdeu7 = new SpriteAsagi(649,2751,57,30),
spriteAsagiPerdeu8 = new SpriteAsagi(649,2751,57,30),
spriteAsagiGanhou1 = new SpriteAsagi(343,234,29,64),
spriteAsagiGanhou2 = new SpriteAsagi(382,236,36,62),
spriteAsagiGanhou3 = new SpriteAsagi(426,220,32,78),
spriteAsagiGanhou4 = new SpriteAsagi(469,222,30,76),
spriteAsagiGanhou5 = new SpriteAsagi(509,222,32,76),
spriteAsagiGanhou6 = new SpriteAsagi(549,223,33,75),
spriteAsagiGanhou7 = new SpriteAsagi(590,220,32,78),
spriteAsagiGanhou8 = new SpriteAsagi(590,220,32,78),


spriteKimAndChi = new SpriteKimAndChi(449,834,31,62),
spriteKimAndChiPuloImpulso = new SpriteKimAndChi(322,267,45,71),
spriteKimAndChiPuloAlto = new SpriteKimAndChi(435,264,47,58),
spriteKimAndChiPuloDesc = new SpriteKimAndChi(377,267,48,65),
spriteKimAndChiPulo21 = new SpriteKimAndChi(299,549,47,55),
spriteKimAndChiPulo22 = new SpriteKimAndChi(401,539,32,67),
spriteKimAndChiPulo23 = new SpriteKimAndChi(256,542,26,72),

spriteKimAndChiAndar1 = new SpriteKimAndChi(115,134,51,54),
spriteKimAndChiAndar2 = new SpriteKimAndChi(177,136,54,46),
spriteKimAndChiAndar3 = new SpriteKimAndChi(241,135,57,57),
spriteKimAndChiAndar4 = new SpriteKimAndChi(302,134,51,54),
spriteKimAndChiAndar5 = new SpriteKimAndChi(365,136,53,57),
spriteKimAndChiAndar6 = new SpriteKimAndChi(365,136,53,57),
spriteKimAndChiAndar7 = new SpriteKimAndChi(430,135,55,58),
spriteKimAndChiAndar8 = new SpriteKimAndChi(430,135,55,58),

spriteKimAndChiColidir = new SpriteKimAndChi(437,702,45,51),

spriteKimAndChiPerdeu1 = new SpriteKimAndChi(322,709,45,41),
spriteKimAndChiPerdeu2 = new SpriteKimAndChi(322,709,45,41),
spriteKimAndChiPerdeu3 = new SpriteKimAndChi(322,709,45,41),
spriteKimAndChiPerdeu4 = new SpriteKimAndChi(322,709,45,41),
spriteKimAndChiPerdeu5 = new SpriteKimAndChi(378,706,48,44),
spriteKimAndChiPerdeu6 = new SpriteKimAndChi(378,706,48,44),
spriteKimAndChiPerdeu7 = new SpriteKimAndChi(378,706,48,44),
spriteKimAndChiPerdeu8 = new SpriteKimAndChi(378,706,48,44),

spriteKimAndChiGanhou1 = new SpriteKimAndChi(450,761,30,63),
spriteKimAndChiGanhou2 = new SpriteKimAndChi(450,761,30,63),
spriteKimAndChiGanhou3 = new SpriteKimAndChi(450,761,30,63),
spriteKimAndChiGanhou4 = new SpriteKimAndChi(450,761,30,63),
spriteKimAndChiGanhou5 = new SpriteKimAndChi(450,761,30,63),
spriteKimAndChiGanhou6 = new SpriteKimAndChi(450,761,30,63),
spriteKimAndChiGanhou7 = new SpriteKimAndChi(450,761,30,63),
spriteKimAndChiGanhou8 = new SpriteKimAndChi(450,761,30,63),

// spriteKimAndChiGanhou2 = new SpriteKimAndChi(441,474,44,60),
// spriteKimAndChiGanhou3 = new SpriteKimAndChi(241,631,47,54),
// spriteKimAndChiGanhou4 = new SpriteKimAndChi(296,630,41,59),
// spriteKimAndChiGanhou5 = new SpriteKimAndChi(342,622,35,72),
// spriteKimAndChiGanhou6 = new SpriteKimAndChi(387,620,40,75),
// spriteKimAndChiGanhou7 = new SpriteKimAndChi(435,625,49,70),
// spriteKimAndChiGanhou8 = new SpriteKimAndChi(256,542,26,72),

spriteHiei = new SpriteHiei(136,553,41,82),
spriteHieiPuloImpulso = new SpriteHiei(2,20,53,43),
spriteHieiPuloAlto = new SpriteHiei(104,6,48,80),
spriteHieiPuloDesc = new SpriteHiei(57,12,45,63),
spriteHieiPulo21 = new SpriteHiei(154,21,45,51),
spriteHieiPulo22 = new SpriteHiei(57,12,45,63),
spriteHieiPulo23 = new SpriteHiei(2,20,53,43),
spriteHieiAndar1 = new SpriteHiei(330,492,52,59),
spriteHieiAndar2 = new SpriteHiei(330,492,52,59),
spriteHieiAndar3 = new SpriteHiei(384,492,61,57),
spriteHieiAndar4 = new SpriteHiei(384,492,61,57),
spriteHieiAndar5 = new SpriteHiei(330,492,52,59),
spriteHieiAndar6 = new SpriteHiei(330,492,52,59),
spriteHieiAndar7 = new SpriteHiei(384,492,61,57),
spriteHieiAndar8 = new SpriteHiei(384,492,61,57),
spriteHieiColidir = new SpriteHiei(57,479,50,72),
spriteHieiPerdeu1 = new SpriteHiei(177,504,73,47),
spriteHieiPerdeu2 = new SpriteHiei(177,504,73,47),
spriteHieiPerdeu3 = new SpriteHiei(177,504,73,47),
spriteHieiPerdeu4 = new SpriteHiei(177,504,73,47),
spriteHieiPerdeu5 = new SpriteHiei(177,504,73,47),
spriteHieiPerdeu6 = new SpriteHiei(177,504,73,47),
spriteHieiPerdeu7 = new SpriteHiei(177,504,73,47),
spriteHieiPerdeu8 = new SpriteHiei(177,504,73,47),
spriteHieiGanhou1 = new SpriteHiei(100,553,34,82),
spriteHieiGanhou2 = new SpriteHiei(100,553,34,82),
spriteHieiGanhou3 = new SpriteHiei(100,553,34,82),
spriteHieiGanhou4 = new SpriteHiei(100,553,34,82),
spriteHieiGanhou5 = new SpriteHiei(100,553,34,82),
spriteHieiGanhou6 = new SpriteHiei(100,553,34,82),
spriteHieiGanhou7 = new SpriteHiei(100,553,34,82),
spriteHieiGanhou8 = new SpriteHiei(100,553,34,82),

spriteCapitaoAmerica = new SpriteCapitaoAmerica(7,22,85,111),
spriteCapitaoAmericaPuloImpulso = new SpriteCapitaoAmerica(210,427,71,152),
spriteCapitaoAmericaPuloAlto = new SpriteCapitaoAmerica(304,430,89,68),
spriteCapitaoAmericaPuloDesc = new SpriteCapitaoAmerica(414,431,75,86),
spriteCapitaoAmericaPulo21 = new SpriteCapitaoAmerica(328,609,108,111),
spriteCapitaoAmericaPulo22 = new SpriteCapitaoAmerica(464,609,106,83),
spriteCapitaoAmericaPulo23 = new SpriteCapitaoAmerica(584,610,115,76),
spriteCapitaoAmericaAndar1 = new SpriteCapitaoAmerica(5,293,97,115),
spriteCapitaoAmericaAndar2 = new SpriteCapitaoAmerica(114,290,68,114),
spriteCapitaoAmericaAndar3 = new SpriteCapitaoAmerica(199,292,83,115),
spriteCapitaoAmericaAndar4 = new SpriteCapitaoAmerica(297,294,101,115),
spriteCapitaoAmericaAndar5 = new SpriteCapitaoAmerica(297,294,101,115),
spriteCapitaoAmericaAndar6 = new SpriteCapitaoAmerica(416,294,67,117),
spriteCapitaoAmericaAndar7 = new SpriteCapitaoAmerica(501,297,82,115),
spriteCapitaoAmericaAndar8 = new SpriteCapitaoAmerica(501,297,82,115),
spriteCapitaoAmericaColidir = new SpriteCapitaoAmerica(6,630,87,79),
spriteCapitaoAmericaPerdeu1 = new SpriteCapitaoAmerica(9,1079,120,84),
spriteCapitaoAmericaPerdeu2 = new SpriteCapitaoAmerica(143,1088,126,77),
spriteCapitaoAmericaPerdeu3 = new SpriteCapitaoAmerica(289,1091,229,77),
spriteCapitaoAmericaPerdeu4 = new SpriteCapitaoAmerica(537,1055,201,116),
spriteCapitaoAmericaPerdeu5 = new SpriteCapitaoAmerica(756,1057,129,116),
spriteCapitaoAmericaPerdeu6 = new SpriteCapitaoAmerica(23,1218,129,112),
spriteCapitaoAmericaPerdeu7 = new SpriteCapitaoAmerica(172,1228,103,101),
spriteCapitaoAmericaPerdeu8 = new SpriteCapitaoAmerica(172,1228,103,101),
spriteCapitaoAmericaGanhou1 = new SpriteCapitaoAmerica(141,6308,87,114),
spriteCapitaoAmericaGanhou2 = new SpriteCapitaoAmerica(141,6308,87,114),
spriteCapitaoAmericaGanhou3 = new SpriteCapitaoAmerica(244,6307,114,114),
spriteCapitaoAmericaGanhou4 = new SpriteCapitaoAmerica(244,6307,114,114),
spriteCapitaoAmericaGanhou5 = new SpriteCapitaoAmerica(371,6304,114,114),
spriteCapitaoAmericaGanhou6 = new SpriteCapitaoAmerica(371,6304,114,114),
spriteCapitaoAmericaGanhou7 = new SpriteCapitaoAmerica(496,6304,111,114),
spriteCapitaoAmericaGanhou8 = new SpriteCapitaoAmerica(496,6304,111,114),

perdeu = new Sprite(603,478,397,358),
ganhou = new Sprite(1130,408,335,340),
jogar = new Sprite(603,127,397,347),
novo = new Sprite(68, 721, 287, 93),
spriteRecord = new Sprite(28,879,441,95),
spriteChao = new Sprite(0,604,600,654),

spriteFundo1As = new Sprite(33,993,166,156 ),
spriteFundo2As = new Sprite(216,1014,149,138 ),
spriteFundo3As = new Sprite(425,1004,186,178 ),
spriteFundo4As = new Sprite(619,999,211,198 ),
spriteFundo5As = new Sprite(1004,1001,238,171 ),

spriteFundo1Am = new Sprite(1278,1004,146,173 ),
spriteFundo2Am = new Sprite(2249,983,173,176 ),
spriteFundo3Am = new Sprite(1592,1014,211,163 ),
spriteFundo4Am = new Sprite(1834,1009,128,156 ),
spriteFundo5Am = new Sprite(1995,993,186,172 ),

spriteFundo1Eu = new Sprite(28,1167,151,186 ),
spriteFundo2Eu = new Sprite(249,1170,73,173 ),
spriteFundo3Eu = new Sprite(365,1190,161,196 ),
spriteFundo4Eu = new Sprite(578,1200,139,181 ),
spriteFundo5Eu = new Sprite(757,1217,166,159 ),

spriteFundo1OM = new Sprite(949,1213,268,155 ),
spriteFundo2OM = new Sprite(1265,1198,174,162 ),
spriteFundo3OM = new Sprite(1474,1209,245,155 ),

buildingMObstacle1 = new Sprite(971,855,63,138 ),
buildingMObstacle2 = new Sprite(1097,855,98,138 ),
buildingMObstacle3 = new Sprite(1202,863,63,123 ),
buildingMObstacle4 = new Sprite(1300,870,86,118 ),
buildingMObstacle5 = new Sprite(1408,850,58,133 ),
buildingMObstacle6 = new Sprite(1512,865,83,118 ),
buildingMObstacle7 = new Sprite(1622,870,86,113 ),

buildingGObstacle1 = new Sprite(1733,770,93,221 ),
buildingGObstacle2 = new Sprite(1854,762,88,221 ),

redObstacle = new Sprite(662,867,50,120 ),
pinkObstacle = new Sprite(719,867,50,120 ),
blueObstacle = new Sprite(779,867,50,120 ),
greenObstacle = new Sprite(839,867,50,120 ),
yellowObstacle = new Sprite(898,867,50,120 ),
yellowObstacle2 = new Sprite(959,848,63,137 );