var qntLegs;

function changeBody(newBody) {
    switch(newBody) {
        case 'bipede':
            bodyImg = 'data/body/biped.png';
            headLeftOffset = 286;
            qntLegs = 2;
            break;
        case 'quadrupede':
            bodyImg = 'data/body/quadruped.png';        
            headLeftOffset = 483;
            qntLegs = 4;
            break;
        case 'aracnideokkk':
            bodyImg = 'data/body/arachnid.png';
            headLeftOffset = 558;
            qntLegs = 6;
            break;
      }
    
    $('#result-body').css("background-image", "url("+bodyImg+")");  
    $('#result-head').css("left", headLeftOffset+"px");  
    addLegs(newBody, qntLegs);
}

function changeHead(newHead) {
    switch(newHead) {
        case 'opcao a':
            headImg = 'data/head/head1.png';
            break;
        case 'opcao b':
            headImg = 'data/head/head2.png';
            break;
        case 'opcao c':
            headImg = 'data/head/head3.png';
            break;
      }
    
    $('#result-head').css("background-image", "url("+headImg+")");  
}

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

function getLegSpacing(bodyType, leg) {
    var pos = new Array();
    switch(bodyType) {
        case 'bipede':
            pos['top'] = 420;    
            pos['index'] = 1;
            if(leg == 1) {
                pos['left'] = 875;    
            } else if (leg == 2) {
                pos['left'] = 795;
            }
            return pos;
            break;
        case 'quadrupede':
            if(leg == 1) {
                pos['left'] = 1038;
                pos['top'] = 375;
                pos['index'] = -1;
            } else if (leg == 2) {
                pos['left'] = 945;
                pos['top'] = 375;
                pos['index'] = 1;
            } else if (leg == 3) {
                pos['left'] = 730;
                pos['top'] = 367;
                pos['index'] = -1;
            } else if (leg == 4) {
                pos['left'] = 655;
                pos['top'] = 367;
                pos['index'] = 1;
            }
            return pos;
            break;
            case 'aracnideokkk':
                if(leg == 1) {
                    pos['left'] = 1075;
                    pos['top'] = 422;
                    pos['index'] = -1;
                } else if (leg == 2) {
                    pos['left'] = 1030;
                    pos['top'] = 422;
                    pos['index'] = 1;
                } else if (leg == 3) {
                    pos['left'] = 905;
                    pos['top'] = 422;
                    pos['index'] = -1;
                } else if (leg == 4) {
                    pos['left'] = 840;
                    pos['top'] = 422;
                    pos['index'] = 1;
                }  else if (leg == 5) {
                    pos['left'] = 735;
                    pos['top'] = 422;
                    pos['index'] = -1;
                }  else if (leg == 6) {
                    pos['left'] = 675;
                    pos['top'] = 422;
                    pos['index'] = 1;
                }
                return pos;
            break;
      }
      
}

function changeLegs(newLegs) {
    switch(newLegs) {
        case 'opcao a':
            LegImg = 'data/leg/leg1.png';
            break;
        case 'opcao b':
            LegImg = 'data/leg/leg2.png';
            break;
        case 'opcao c':
            LegImg = 'data/leg/leg3.png';
            break;
      }
    
    $('.result-leg').css("background-image", "url("+LegImg+")");  
    
}

$( document ).ready(function() {
    $( "#select-body" ).change(function() {
        changeBody($(this).val());
    });

    $( "#select-head" ).change(function() {
        changeHead($(this).val());
    });

    $( "#select-legs" ).change(function() {
        changeLegs($(this).val());
    });
});