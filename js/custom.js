var qntLegs;
var qntArms;
var ArmType;

/* ---------- Funções de Mudança de Membros ----------*/
/* ---------------------------------------------------*/

function changeBody(newBody) {
    switch(newBody) {
        case 'Unipede.':
            bodyImg = 'data/body/Uni.png';
            qntLegs = 1;
            qntArms = 2;
            break;
        case 'Bipede.':
            bodyImg = 'data/body/Duo.png';     
            qntLegs = 2;
            qntArms = 2;
            break;
        case 'Caramujo.':
            bodyImg = 'data/body/Snail.png';
            qntLegs = 4;
            qntArms = 2;
            break;
        case 'Sextuple.':
            bodyImg = 'data/body/Sixti.png';
            qntLegs = 6;
            qntArms = 4;
            break;
      }
    
    headPos = getHeadSpacing(newBody);

    $('#result-body').css("background-image", "url("+bodyImg+")");  
    $('#result-head').css("top", headPos['top']+"px");  
    $('#result-head').css("left", headPos['left']+"px");  
    addArms(newBody, qntArms);
    addLegs(newBody, qntLegs);
}

function changeHead(newHead) {
    switch(newHead) {
        case 'Oval.':
            headImg = 'data/head/Oval.png';
            break;
        case 'Quadrado.':
            headImg = 'data/head/Square.png';
            break;
        case 'Triângulo.':
            headImg = 'data/head/Triangle.png';
            break;
      }
    
    $('#result-head').css("background-image", "url("+headImg+")");  
}

function changeLegs(newLegs) {
    if(newLegs) {
        switch(newLegs) {
            case 'Curvado Esquerda.':
                LegImg = 'data/leg/CurvedLeft.png';
                break;
            case 'Reto.':
                LegImg = 'data/leg/Straight.png';
                break;
            case 'Curvado Direita.':
                LegImg = 'data/leg/CurvedRight.png';
                break;
        }
        
        $('.result-leg').css("background-image", "url("+LegImg+")");  
    }
}

function changeArms(newArms) {
    if(newArms) {
        switch(newArms) {
            case 'Forte.':
                ArmImg = 'data/arm/Muscle.png';
                break;
            case 'Macarrão.':
                ArmImg = 'data/arm/Noodle.png';
                break;
            case 'Palito.':
                ArmImg = 'data/arm/Stick.png';
                break;
        }

        ArmType = newArms;
        
        $('.result-arm').css("background-image", "url("+ArmImg+")");  
        addHands(ArmType, qntArms);
    }
}

function changeHands(newHands) {
    if(newHands) {
        switch(newHands) {
            case 'Garra.':
                HandImg = 'data/hand/Claw.png';
                break;
            case 'Mole.':
                HandImg = 'data/hand/Tentacle.png';
                break;
            case 'Joia.':
                HandImg = 'data/hand/ThumbsUp.png';
                break;
        }
        
        $('.result-hand').css("background-image", "url("+HandImg+")");  
    }
}

/* ---------- Funções de Adição de Novos Membros ----------*/
/* --------------------------------------------------------*/

function addLegs(newBody, qnt) {
    $('#result-legs').html("");
    for(i = 1; i<=qnt; i++) {
        $('#result-legs').append("<div class='result-leg leg-n" + i + "'></div>");
    }

    for(i = 1; i<=qnt; i++) {
        pos = getLegSpacing(newBody, i);
        $('.result-leg.leg-n'+i).css("left", pos['left']);
        $('.result-leg.leg-n'+i).css("top", pos['top']);
        $('.result-leg.leg-n'+i).css("z-index", pos['index']);
    }

    changeLegs($( "#select-legs" ).val())
}

function addArms(newBody, qnt) {
    $('#result-arms').html("");    
    $('.result-hands').html("");
    for(i = 1; i<=qnt; i++) {
        $('#result-arms').append(
            "<div class='result-arm arm-n" + i + "'>" +
                "<div class='result-hands arm-n" + i + "'>" +

                "</div>" +
            "</div>"
        );
    }

    for(i = 1; i<=qnt; i++) {
        pos = getArmSpacing(newBody, i);
        $('.result-arm.arm-n'+i).css("left", pos['left']);
        $('.result-arm.arm-n'+i).css("top", pos['top']);
        $('.result-arm.arm-n'+i).css("z-index", pos['index']);
        if(pos['flip']) $('.result-arm.arm-n'+i).css("transform", 'scaleX(-1)');
    }

    changeArms($( "#select-arms" ).val());
}

function addHands(ArmType, qnt) {
    $('.result-hands').html("");
    for(i = 1; i<=qnt; i++) {
        $('.result-hands.arm-n'+i).append("<div class='result-hand hand-n" + i + "'></div>");
    }

    for(i = 1; i<=qnt; i++) {
        pos = getHandSpacing(ArmType, i);
        $('.result-hand.hand-n'+i).css("left", pos['left']);
        $('.result-hand.hand-n'+i).css("top", pos['top']);
        $('.result-hand.hand-n'+i).css("z-index", pos['index']);
    }

    changeHands($( "#select-hands" ).val())
}

/* ---------- Funções de Espaçamento ----------*/
/* --------------------------------------------*/

function getHeadSpacing(bodyType) {
    var pos = new Array();
    switch(bodyType) {
        case 'Unipede.':
            pos['top'] = -27;   
            pos['left'] = 211; 
            return pos;
            break;
        case 'Bipede.':
            pos['top'] = -31;   
            pos['left'] = 208; 
            return pos;
            break;
        case 'Caramujo.':
            pos['top'] = -36;   
            pos['left'] = 368; 
            return pos;
            break;
        case 'Sextuple.':
            pos['top'] = -24;   
            pos['left'] = 210; 
            return pos;
            break;
    }
}

function getLegSpacing(bodyType, leg) {
    var pos = new Array();
    switch(bodyType) {
        case 'Unipede.':
            pos['top'] = 490;    
            pos['index'] = 1;
            pos['left'] = 827;
            return pos;
            break;
        case 'Bipede.':
                pos['top'] = 475;    
                pos['index'] = 1;
                if(leg == 1) {
                    pos['left'] = 885;    
                } else if (leg == 2) {
                    pos['left'] = 775;
                }
                return pos;
                break;
        case 'Caramujo.':
            pos['top'] = 460;    
            if(leg == 1) {
                pos['left'] = 980;    
                pos['index'] = -1;
            } else if (leg == 2) {
                pos['left'] = 880;
                pos['index'] = 1;
            } else if (leg == 3) {
                pos['left'] = 730;
                pos['index'] = -1;
            } else if (leg == 4) {
                pos['left'] = 655;
                pos['index'] = 1;
            }
            return pos;
            break;
            case 'Sextuple.':
                pos['top'] = 510;
                if(leg == 1) {
                    pos['left'] = 985;
                    pos['index'] = -1;
                } else if (leg == 2) {
                    pos['left'] = 945;
                    pos['index'] = 1;
                } else if (leg == 3) {
                    pos['left'] = 875;
                    pos['index'] = -1;
                } else if (leg == 4) {
                    pos['left'] = 810;
                    pos['index'] = 1;
                }  else if (leg == 5) {
                    pos['left'] = 725;
                    pos['index'] = -1;
                }  else if (leg == 6) {
                    pos['left'] = 640;
                    pos['index'] = 1;
                }
                return pos;
            break;
      }
      
}

function getArmSpacing(bodyType, arm) {
    var pos = new Array();
    switch(bodyType) {
        case 'Unipede.':
            pos['top'] = 190;    
            if(arm == 1) {
                pos['index'] = 2;
                pos['left'] = 860;    
            } else if (arm == 2) {
                pos['index'] = 1;
                pos['left'] = 1030;
            }
            return pos;
            break;
        case 'Bipede.':
                if(arm == 1) {
                    pos['index'] = 2;
                    pos['top'] = 190;
                    pos['left'] = 855; 
                } else if (arm == 2) {
                    pos['index'] = 1;
                    pos['top'] = 168;
                    pos['left'] = 1025;
                }
                return pos;
                break;
        case 'Caramujo.':
            if(arm == 1) {
                pos['top'] = 210;    
                pos['left'] = 1035;    
                pos['index'] = 1;
            } else if (arm == 2) {
                pos['top'] = 185;    
                pos['left'] = 1145;
                pos['index'] = 0;
            }
            return pos;
            break;
            case 'Sextuple.':
                if(arm == 1) {
                    pos['top'] = 300;
                    pos['left'] = 1035;
                    pos['index'] = 4;
                } else if (arm == 2) {
                    pos['top'] = 300;
                    pos['left'] = 590;
                    pos['index'] = 4;
                    pos['flip'] = true;
                } else if (arm == 3) {
                    pos['top'] = 166;
                    pos['left'] = 1026;
                    pos['index'] = 3;
                } else if (arm == 4) {
                    pos['top'] = 169;
                    pos['left'] = 580;
                    pos['index'] = 3;
                    pos['flip'] = true;
                }
                return pos;
            break;
      }
      
}

function getHandSpacing(ArmType, hand) {
    var pos = new Array();
    pos['index'] = 5;
    switch(ArmType) {
        case 'Forte.':
            pos['top'] = -3; 
            pos['left'] = 205;    
            return pos;
            break;
        case 'Macarrão.':
            pos['top'] = -15; 
            pos['left'] = 115;    
            return pos;
            break;
        case 'Palito.':
            pos['top'] = -23; 
            pos['left'] = 202;    
            return pos;
            break;
      }
      
}

/* ------- Funções dos Campos de Texto --------*/
/* --------------------------------------------*/

$( document ).ready(function() {
    $( "#select-body" ).change(function() {
        changeBody($(this).val());
    });

    $( "#select-head" ).change(function() {
        changeHead($(this).val());
    });

    $( "#select-arms" ).change(function() {
        changeArms($(this).val());
    });

    $( "#select-hands" ).change(function() {
        changeHands($(this).val());
    });

    $( "#select-legs" ).change(function() {
        changeLegs($(this).val());
    });
});