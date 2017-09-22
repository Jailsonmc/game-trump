// $(".button-fly").click(function(){
    // $('#'+$this.attr("code-fly")).click(function(){
    //     var = $(this).attr("id");
    //     var = "form-"+var;
    //     $('#eval(var)').click(function(){
    //     $('#container').append('<img src = "img/ajax/giphy.gif" alt="Currently loading" id = "loading" />');
    //     $.ajax({

    //             url: 'osb.php',
    //             type: 'POST',
    //             data: $('#form1').serialize(),
    //             success: function(result){
    //                  $('#response').remove();
    //                  $('#container').append('<p id = "response">' + result + '</p>');
    //                  $('#loading').fadeOut(500);

    //                }

    //     });         

    // });
    // });
// });

$("#login233").click(function(){
	document.getElementById("login-header").style.height = "100%";
});
$("#exit233").click(function(){
	document.getElementById("login-header").style.height = "100%";
});

function openNav() {
    document.getElementById("login-header").style.height = "100%";
};

function closeNav() {
    document.getElementById("login-header").style.height = "0%";
};

var position = 1;
var canClick = false; 

function playDice(){
	var aux = Math.round(Math.random()*5)+1;
	// $("#img-dado").css("animation","animacao 1s");
	return aux;	 	
};

$("#dado").click(function(){
	if ($(this).hasClass('active')) {
		$(this).removeClass("active");
		var aux = playDice();
		console.log(aux);
		$("#img-dado").addClass("img-dado2");
		setTimeout(function(){						
			var positionLeft = 127*(aux - 1);
			positionLeft = positionLeft+"px";
			$("#img-dado").attr("src","img/dado/2000px-Dice-red.png").css("top","0").css("left","-"+positionLeft);
			var posi = position;
			var posf = position +aux;
			for(var j = posi +1; j <= posf; j++){
				var aux2 = ".pass:nth-child("+j+")";
				$(aux2).html('<img class="img-face" src="img/face/trump1.png" alt="">');
			}
			position = position + aux;
			if (position>=16) {
				alert("Acabou");
			}
			$("#dado").addClass("active");
		},2000);
	};
});

function ask(){

}

function game(){


	var position = 1;

	
}

$("ul li").click(function(e){

	var pages = ["index.php","physics.php","ast.php","shop.php","magic.php","mapping.php","user.php","index.php"];

	var index = $(this).index();
	var aux = 0;
	if (index < 4) {
			var aux = $(this).index()*200;
	}else{
			var aux = ($(this).index() - 4 ) * 200;
	}

	if (aux == 0) {
		if( $("#dialog").html() == "1" ){
			$(".dialog-putin").css({
				display : "block"
			});
			$(".dialog-trump").css({
				display : "none"
			});
			$("#dialog").text("2");
		}else if( $("#dialog").html() == "2" ){
			$(".dialog-putin").css({
				display : "none"
			});
			$(".dialog-trump2").css({
				display : "block"
			});
			$("#dialog").text("3");
		}else if( $("#dialog").html() == "3" ){
			$(".dialog-putin2").css({
				display : "block"
			});
			$(".dialog-trump2").css({
				display : "none"
			});
			$("#dialog").text("25");
		}else if( $("#dialog").html() == "25" ){
			$(".dialog-putin2").css({
				display : "none"
			});
			$(".dialog-putin2-5").css({
				display : "block"
			});
			$("#dialog").text("4");
		}else if( $("#dialog").html() == "4" ){
			$(".dialog-putin2-5").css({
				display : "none"
			});
			$(".dialog-trump3").css({
				display : "block"
			});
			$("#dialog").text("5");
		}else if( $("#dialog").html() == "5" ){
			$(".dialog-putin3").css({
				display : "block"
			});
			$(".dialog-trump3").css({
				display : "none"
			});
			$("#dialog").text("6");
		}else if( $("#dialog").html() == "6" ){
			$(".dialog-putin3").css({
				display : "none"
			});
			$(".dialog-trump4").css({
				display : "block"
			});
			$("#dialog").text("7");
		}else if( $("#dialog").html() == "7" ){
			$(".dialog-putin4").css({
				display : "block"
			});
			$(".dialog-trump4").css({
				display : "block"
			});
			$("#dialog").text("8");
		}
	}	
	if (aux == 200 && index == 1) {
		$("canvas").css({
			display : "block"
		});
	}
	if (aux == 400 && index == 2) {
		$("canvas").css({
			display : "none"
		});
	}
	if (index < 4) {
		$(".slider").css({
			left : aux + "px"
		});
		$(".slider").css({
			bottom : "60px"
		});
	}else{
		$(".slider").css({
			left : aux + "px"
		});
		$(".slider").css({
			bottom : "0px"
		});
	}

	// $('#formNav').action(pages[index]);
	// console.log(pages[$(this).index()]);
	// $('#positionOld').text("ewe");
	
	// $('#formNav').submit();

});

 $(document).ready(function(){
	if ($('ul li').hasClass('0')){
		$(".slider").css({
			left : "0px"
		});
		$(".slider").css({
			bottom : "60px"
		});
	}else if($('ul li').hasClass('1')){
		$(".slider").css({
			left : "200px"
		});
		$(".slider").css({
			bottom : "60px"
		});
	}else if($('ul li').hasClass('2')){
		$(".slider").css({
			left : "400px"
		});
		$(".slider").css({
			bottom : "60px"
		});
	}else if($('ul li').hasClass('3')){
		$(".slider").css({
			left : "600px"
		});
		$(".slider").css({
			bottom : "60px"
		});
	}else if($('ul li').hasClass('4')){
		$(".slider").css({
			left : "0px"
		});
		$(".slider").css({
			bottom : "0px"
		});
	}else if($('ul li').hasClass('5')){
		$(".slider").css({
			left : "200px"
		});
		$(".slider").css({
			bottom : "0px"
		});
	}else if($('ul li').hasClass('6')){
		$(".slider").css({
			left : "400px"
		});
		$(".slider").css({
			bottom : "0px"
		});
	}else if($('ul li').hasClass('7')){
		$(".slider").css({
			left : "600px"
		});
		$(".slider").css({
			bottom : "0px"
		});
	}
});

function piscar(obj){
	$(obj).css("opacity","0.4");
	setInterval(function() {
		if($(obj).css("opacity") == 0){
			$(obj).css("opacity","1");
		}else{
			$(obj).css("opacity","0");
		}  
	}, 500);	
}


function ativarSkin(idSkin,skinSprite,idUser,ativacao){
	if(confirm("Tem certeza que deseja ativar essa skin?")){
		localStorage.setItem('idSkin', idSkin);  
		localStorage.setItem('skinSprite', skinSprite);
		$.post('salvarGame.php', {
		'idSkin':idSkin,'skinSprite':skinSprite,'idUser':idUser,'ativacao':ativacao
		}, function(data){
			if(data==1){
				// alert(data);
				alert('Salvo com sucesso.');
			}else{
				// alert(data);
				alert('Erro ao salvar.');
			}
		});
	}	
}

 $(document).ready(function(){
 	piscar(".seta-direita");
 	piscar(".seta-esquerda");
});

