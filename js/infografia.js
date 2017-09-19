var SEC2A = false;
var SEC2B = false;
var SEC2C = false;
var SEC2D = false;

var SEC3A = false;
var SEC3B = false;
var SEC3C = false;
var SEC3D = false;
var SEC3E = false;

var SEC4A = false;
var SEC4B = false;
var SEC4C = false;
var SEC4D = false;

var SEC6A = false;
var SEC6B = false;
var SEC6C = false;

var PART2T2C1 = false;
var PART2T2C2 = false;


$("document").ready(function(){
    $("#SEC02, #SEC03, #SEC04, #SEC05, #SEC06, #SEC07").hide();

    $("#BT-START").click(function(){
        $("#START").fadeOut();
    });
    
    $("#PDF1, #T1B1, #T1B2, #T1B3, #PDF2, #REC1, #T4B1, #T4B2, #T4B3, #CONCLU01").click(function(){
        $(this).css("opacity", ".5");
        $(this).removeClass("animated");
    });
    
    $("#PDF1").click(function(){
        $("#SEC02").fadeIn(3000);
    });
    
    ///Tema 1 (Sección 2)
    
    $("#AC01-T1").click(function(){
        SEC2A = true;
        pasarSEC3(SEC2A,SEC2B,SEC2C,SEC2D);
    });
    $("#AC02-T1").click(function(){
        SEC2B = true;
        pasarSEC3(SEC2A,SEC2B,SEC2C,SEC2D);
    });
    $("#AC03-T1").click(function(){
        SEC2C = true;
        pasarSEC3(SEC2A,SEC2B,SEC2C,SEC2D);
    });
    $("#AC04-T1").click(function(){
        SEC2D = true;
        pasarSEC3(SEC2A,SEC2B,SEC2C,SEC2D);
    });
    
    /// FIN Tema 1 (Sección 2)
    
    //// Tema 2 (Sección 3)

    $("#T2-TALKVID, #T2ICS, #CONT-IC01, #CONT-IC02, #CONT-IC03, #CONT-IC04, #CONT-IC05").hide();
    
    $("#T2CONT01").click(function(){
        PART2T2C1 = true;
        paseParte2(PART2T2C1,PART2T2C2);
        $(this).removeClass("animated");
        $(this).css("opacity", ".5");
    });
    $(" #T2CONT02").click(function(){
        PART2T2C2 = true;
        paseParte2(PART2T2C1,PART2T2C2);
        $(this).removeClass("animated");
        $(this).css("opacity", ".5");
    });
	$("#VID-T2").click(function(){
		$("#T2ICS").delay(168000).fadeIn(1500);
	});
	
	$("#T2-IC01, #T2-IC02, #T2-IC03, #T2-IC04, #T2-IC05").click(function(){
        $(this).removeClass("animated");
        $(this).css("opacity", ".5");
    });
	
	$("#T2-IC01").click(function(){
		SEC3A = true;
        pasarSEC4(SEC3A,SEC3B,SEC3C,SEC3D,SEC3E);
		$("#CONT-IC01").fadeIn();
		$("#CONT-IC02, #CONT-IC03, #CONT-IC04, #CONT-IC05").hide();
	});
	$("#T2-IC02").click(function(){
		SEC3B = true;
        pasarSEC4(SEC3A,SEC3B,SEC3C,SEC3D,SEC3E);
		$("#CONT-IC02").fadeIn();
		$("#CONT-IC01, #CONT-IC03, #CONT-IC04, #CONT-IC05").hide();
	});
	$("#T2-IC03").click(function(){
		SEC3C = true;
        pasarSEC4(SEC3A,SEC3B,SEC3C,SEC3D,SEC3E);
		$("#CONT-IC03").fadeIn();
		$("#CONT-IC01, #CONT-IC02, #CONT-IC04, #CONT-IC05").hide();
	});
	$("#T2-IC04").click(function(){
		SEC3D = true;
        pasarSEC4(SEC3A,SEC3B,SEC3C,SEC3D,SEC3E);
		$("#CONT-IC04").fadeIn();
		$("#CONT-IC01, #CONT-IC02, #CONT-IC03, #CONT-IC05").hide();
	});
	$("#T2-IC05").click(function(){
		SEC3E = true;
        pasarSEC4(SEC3A,SEC3B,SEC3C,SEC3D,SEC3E);
		$("#CONT-IC05").fadeIn();
		$("#CONT-IC01, #CONT-IC02, #CONT-IC03, #CONT-IC04").hide();
	});
    
    /// FIN Tema 2 (Sección 3)

    /// Actividad 2 (Sección 4)
    
    $("#AC2PDF1").click(function(){
        $(this).removeClass("animated");
		$(this).css("opacity", ".5");
    });
    
    /// Fin Actividad 2 (Sección 4)
    
    
});


function pasarSEC3(SEC2A,SEC2B,SEC2C,SEC2D){
    if(SEC2A && SEC2B && SEC2C && SEC2D){
        $("#SEC03").fadeIn(3000);
    }      
}
function pasarSEC4(SEC3A,SEC3B,SEC3C,SEC3D,SEC3E){
    if(SEC3A && SEC3B && SEC3C && SEC3D && SEC3E){
        $("#SEC04").fadeIn(3000);
    }      
}

function pasarSEC5(SEC4A,SEC4B,SEC4C,SEC4D){
    if(SEC4A && SEC4B && SEC4C && SEC4D){
        $("#SEC05").fadeIn(3000);
    }      
}

function pasarSEC7(SEC6A,SEC6B,SEC6C){
    if(SEC6A && SEC6B && SEC6C){
        $("#SEC07").fadeIn(3000);
    }      
}

function paseParte2(PART2T2C1,PART2T2C2){
    if(PART2T2C1 && PART2T2C2){
        $("#T2-TALKVID").delay(1500).fadeIn(3000);
    }      
}

