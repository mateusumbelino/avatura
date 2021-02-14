var HeadType;
var ArmType;
var LegType;

var qntEyes;
var qntEars;
var qntLegs;
var qntArms;

var ArmHeight = 400;
var LegHeight = 375;

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
            qntEyes = 1;
            qntEars = 2;
            break;
        case 'Quadrado.':
            headImg = 'data/head/Square.png';
            qntEyes = 1;
            qntEars = 2;
            break;
        case 'Triângulo.':
            headImg = 'data/head/Triangle.png';
            qntEyes = 1;
            qntEars = 2;
            break;
      }
    
    $('#result-head').css("background-image", "url("+headImg+")");  

    $('#result-head').html("");   
    for(i = 1; i<=qntEyes; i++) {
        $('#result-head').append(
            "<div class='result-eye eye-n" + i + "'>" +

            "</div>"
        );
    }

    for(i = 1; i<=qntEars; i++) {
        $('#result-head').append(
            "<div class='result-ear ear-n" + i + "'>" +

            "</div>"
        );
    }
    
    HeadType = newHead;
    addEyes(HeadType, qntEyes);
    addEars(HeadType, qntEars);
}

function changeEyes(newEyes) {
    if(newEyes) {
        switch(newEyes) {
            case 'Normal.':
                EyeImg = 'data/eye/Normal.png';
                break;
            case 'Zoiao.':
                EyeImg = 'data/eye/Triangle.png';
                break;
            case 'Alien.':
                EyeImg = 'data/eye/Alien.png';
                break;
        }
        
        $('.result-eye').css("background-image", "url("+EyeImg+")");  
    }
}

function changeEars(newEars) {
    if(newEars) {
        switch(newEars) {
            case 'Pontudas.':
                EarImg = 'data/ear/PointyEar.png';
                break;
            case 'Chifrinho.':
                EarImg = 'data/ear/Horn.png';
                break;
            case 'Tufo.':
                EarImg = 'data/ear/HairTuf.png';
                break;
        }
        
        $('.result-ear').css("background-image", "url("+EarImg+")");  
    }
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
        
        LegType = newLegs;

        $('.result-leg').css("background-image", "url("+LegImg+")");  
        addFeet(LegType, qntLegs);
    }
}

function changeFeet(newFeet) {
    if(newFeet) {
        switch(newFeet) {
            case 'Cuei.':
                FeetImg = 'data/foot/Rabbit.png';
                break;
            case 'Cobra.':
                FeetImg = 'data/foot/Snake.png';
                break;
            case 'Dedo.':
                FeetImg = 'data/foot/Toe.png';
                break;
        }
        
        $('.result-foot').css("background-image", "url("+FeetImg+")");  
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

function addEyes(HeadType, qnt) {

    for(i = 1; i<=qnt; i++) {
        pos = getHandSpacing(HeadType, i); //CHANGE THIS
        $('.result-eye.eye-n'+i).css("left", 0);
        $('.result-eye.eye-n'+i).css("top", 0);
        $('.result-eye.eye-n'+i).css("z-index", 5);
    }

    changeEyes($( "#select-eye" ).val())
}

function addEars(HeadType, qnt) {

    for(i = 1; i<=qnt; i++) {
        pos = getEarSpacing(HeadType, i);
        $('.result-ear.ear-n'+i).css("left", pos['left']);
        $('.result-ear.ear-n'+i).css("top", pos['top']);
        $('.result-ear.ear-n'+i).css("z-index", pos['index']);
        if(pos['flip']) $('.result-ear.ear-n'+i).css("transform", 'scaleX(-1)');
    }

    changeEars($( "#select-ear" ).val())
}

function addLegs(newBody, qnt) {
    $('#result-legs').html("");
    $('.result-foot').html("");
    for(i = 1; i<=qnt; i++) {
        $('#result-legs').append(
            "<div class='result-leg leg-n" + i + "'>" +
                "<div class='result-foot foot-n" + i + "'>" +

                "</div>" +
            "</div>"
        );
    }

    for(i = 1; i<=qnt; i++) {
        pos = getLegSpacing(newBody, i);
        $('.result-leg.leg-n'+i).css("left", pos['left']);
        $('.result-leg.leg-n'+i).css("top", pos['top']);
        $('.result-leg.leg-n'+i).css("z-index", pos['index']);
    }

    changeLegs($( "#select-legs" ).val())
}

function addFeet(LegType, qnt) {
    $('.result-foot').html("");

    for(i = 1; i<=qnt; i++) {
        pos = getFootSpacing(LegType, i);
        $('.result-foot.foot-n'+i).css("left", pos['left']);
        $('.result-foot.foot-n'+i).css("top", pos['top']);
        $('.result-foot.foot-n'+i).css("z-index", pos['index']);
    }

    changeFeet($( "#select-feet" ).val())
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
            pos['top'] = -12;   
            pos['left'] = 250; 
            return pos;
            break;
        case 'Bipede.':
            pos['top'] = -13;   
            pos['left'] = 248; 
            return pos;
            break;
        case 'Caramujo.':
            pos['top'] = -19;   
            pos['left'] = 425; 
            return pos;
            break;
        case 'Sextuple.':
            pos['top'] = -2;   
            pos['left'] = 245; 
            return pos;
            break;
    }
}

function getEarSpacing(headType, ear) {
    var pos = new Array();
    
    pos['index'] = 6;
    switch(headType) {
        case 'Oval.':
            pos['top'] = -200 - ((ear-1)*200);             
            if(ear == 1)  pos['left'] = -90;    
            else {
                pos['index'] = -1;
                pos['left'] = 105;    
                pos['flip'] = true;
            }
            return pos;
            break;
        case 'Quadrado.':
            pos['top'] = -180 - ((ear-1)*200); 
            if(ear == 1)  pos['left'] = -100;    
            else {
                pos['index'] = -1;
                pos['left'] = 150;    
                pos['flip'] = true;
            }
            return pos;
            break;
        case 'Triângulo.':
            pos['top'] = -175 - ((ear-1)*200); 
            if(ear == 1)  pos['left'] = -80;    
            else {
                pos['index'] = -1;
                pos['left'] = 130;    
                pos['flip'] = true;
            }
            return pos;
            break;
      }
      
}

function getLegSpacing(bodyType, leg) {
    var pos = new Array();
    switch(bodyType) {
        case 'Unipede.':
            pos['index'] = 1;    
            pos['top'] = -564;                
            pos['left'] = 275;
            return pos;
            break;
        case 'Bipede.':   
                pos['index'] = 1;
                if(leg == 1) {
                    pos['top'] = -600; 
                    pos['left'] = 170;    
                } else if (leg == 2) {
                    pos['index'] = 0;
                    pos['top'] = -973; 
                    pos['left'] = 320;
                }
                return pos;
                break;
        case 'Caramujo.':
            pos['top'] = -595-((leg-1)*LegHeight);  
            if(leg == 1) {  
                pos['left'] = 400;    
                pos['index'] = -1;
            } else if (leg == 2) {
                pos['left'] = 310;
                pos['index'] = 1;
            } else if (leg == 3) {
                pos['left'] = 180;
                pos['index'] = -1;
            } else if (leg == 4) {
                pos['left'] = 90;
                pos['index'] = 1;
            }
            return pos;
            break;
            case 'Sextuple.':
                pos['top'] = -1360-((leg-1)*LegHeight);    
                if(leg == 1) {
                    pos['left'] = 435;
                    pos['index'] = -1;
                } else if (leg == 2) {
                    pos['left'] = 380;
                    pos['index'] = 1;
                } else if (leg == 3) {
                    pos['left'] = 275;
                    pos['index'] = -1;
                } else if (leg == 4) {
                    pos['left'] = 190;
                    pos['index'] = 1;
                }  else if (leg == 5) {
                    pos['left'] = 95;
                    pos['index'] = -1;
                }  else if (leg == 6) {
                    pos['left'] = 40;
                    pos['index'] = 1;
                }
                return pos;
            break;
      }
      
}

function getFootSpacing(LegType, foot) {
    var pos = new Array();
    pos['index'] = 5;
    switch(LegType) {
        case 'Curvado Esquerda.':
            pos['top'] = 198; 
            pos['left'] = 75;    
            return pos;
            break;
        case 'Reto.':
            pos['top'] = 192; 
            pos['left'] = 143;    
            return pos;
            break;
        case 'Curvado Direita.':
            pos['top'] = 190; 
            pos['left'] = 80;    
            return pos;
            break;
      }
      
}

function getArmSpacing(bodyType, arm) {
    var pos = new Array();
    switch(bodyType) {
        case 'Unipede.':
            if(arm == 1) {
                pos['top'] = -110; 
                pos['left'] = 280;    
                pos['index'] = 2;
            } else if (arm == 2) {
                pos['top'] = -522; 
                pos['left'] = 450;
                pos['index'] = 1;
            }
            return pos;
            break;
        case 'Bipede.':
                if(arm == 1) {
                    pos['index'] = 2;
                    pos['top'] = -110;
                    pos['left'] = 260; 
                } else if (arm == 2) {
                    pos['index'] = 1;
                    pos['top'] = -543;
                    pos['left'] = 450;
                }
                return pos;
                break;
        case 'Caramujo.':
            if(arm == 1) {
                pos['top'] = -130;    
                pos['left'] = 465;    
                pos['index'] = 1;
            } else if (arm == 2) {
                pos['top'] = -530;    
                pos['left'] = 595;
                pos['index'] = 0;
            }
            return pos;
            break;
            case 'Sextuple.':
                if(arm == 1) {
                    pos['top'] = -143;
                    pos['left'] = 457;
                    pos['index'] = 4;
                } else if (arm == 2) {
                    pos['top'] = -530;
                    pos['left'] = -15;
                    pos['index'] = 4;
                    pos['flip'] = true;
                } else if (arm == 3) {
                    pos['top'] = -775;
                    pos['left'] = 480;
                    pos['index'] = 3;
                } else if (arm == 4) {
                    pos['top'] = -1180;
                    pos['left'] = 5;
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
            pos['top'] = -11; 
            pos['left'] = 240;    
            return pos;
            break;
        case 'Macarrão.':
            pos['top'] = -10; 
            pos['left'] = 143;    
            return pos;
            break;
        case 'Palito.':
            pos['top'] = 0; 
            pos['left'] = 222;    
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

    $( "#select-eye" ).change(function() {
        changeEyes($(this).val());
    });

    $( "#select-ear" ).change(function() {
        changeEars($(this).val());
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

    $( "#select-feet" ).change(function() {
        changeFeet($(this).val());
    });
});