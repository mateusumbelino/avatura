
const BODY = new body();
const ARMS = new arms();
const HANDS = new hands();
const LEGS = new legs();
const FOOT = new foot();
const HEAD = new head()
const EYES = new eyes();
const EARS = new ears();
const MOUTH = new mouth();
const NOSE = new nose();
const BACK = new back();

const BODY_PARTS = [BODY, ARMS, HANDS, LEGS, FOOT, HEAD, EYES, EARS, MOUTH, NOSE, BACK];

const BODY_OPTION = 'select-body';

const RESULT_BODY = 'result-body';

const RESULT_HEAD = 'result-head';

const RESULT_ARMS = 'result-arms';

const RESULT_ARM_SINGLE_CLASS = 'result-arm';

const RESULT_ARM_CLASS = 'result-arm arm-n';

const RESULT_HANDS = 'result-hands';

const RESULT_HAND_SINGLE_CLASS = 'result-hand';

const RESULT_HANDS_CLASS = 'result-hands arm-n';

const RESULT_SINGLE_HAND_CLASS = 'result-hand hand-n';

const ARMS_OPTION = 'select-arms';

const HANDS_OPTION = 'select-hands';

const RESULT_LEGS = 'result-legs';

const RESULT_BACK = 'result-back';

const RESULT_LEG_CLASS = 'result-leg leg-n';

const RESULT_LEG_SINGLE_CLASS = 'result-leg';

const RESULT_FOOT_SINGLE_CLASS = 'result-foot';

const RESULT_FOOT_CLASS = 'result-foot foot-n';

const LEGS_OPTION = 'select-legs';

const BACK_OPTION = 'select-back';

const FOOT_OPTION = 'select-feet';

const HEAD_OPTION = 'select-head';

const EYES_OPTION = 'select-eye';

const EARS_OPTION = 'select-ear';

const MOUTH_OPTION = 'select-mouth';

const NOSE_OPTION = 'select-nose';

const RESULT_EAR = 'result-ear';

const RESULT_EYES = 'result-eye';

const RESULT_MOUTH = 'result-mouth';

const RESULT_NOSE = 'result-nose';

const RESULT_EYES_CLASS = 'result-eye eye-n';

const RESULT_EARS_CLASS = 'result-ear ear-n';

const RESULT_MOUTH_CLASS = 'result-mouth mouth-n';

const RESULT_NOSE_CLASS = 'result-nose nose-n';

const FIRST_COLUMN_ATTR_ID = 'attr-1';

const SECOND_COLUMN_ATTR_ID = 'attr-2';

const ATTR_CONTAINER_CLASS = 'attribute-container';

const ATTR_NAME_CLASS = 'attribute-name';

const ATTR_VALUE_CLASS = 'attribute-value';

const changeBody = (newBody) => 
{
    BODY.setId(parseInt(newBody, 10));
    if (BODY.id == 0)
    {
        document.getElementById(RESULT_BODY).style.backgroundImage = '';
    }
    else
    {
        document.getElementById(RESULT_BODY).style.backgroundImage = `url(${BODY.getImg()})`;    
    }
    document.getElementById(HEAD_OPTION).disabled = BODY.id == 0;
    document.getElementById(ARMS_OPTION).disabled = BODY.id == 0;
    document.getElementById(LEGS_OPTION).disabled = BODY.id == 0;
    document.getElementById(BACK_OPTION).disabled = BODY.id == 0;
    changeHead(document.getElementById(HEAD_OPTION).value);
    addArms();
    addLegs();
    changeBack(document.getElementById(BACK_OPTION).value);
}

const changeHead = (newHead) =>
{
    HEAD.setId(parseInt(newHead, 10));
    document.getElementById(RESULT_HEAD).innerHTML = '';
    if (HEAD.id == 0 || BODY.id == 0)
    {
        document.getElementById(RESULT_HEAD).style.backgroundImage = '';
    }
    else
    {
        let headPos = BODY.getHeadSpacing();
        document.getElementById(RESULT_HEAD).style.top = `${headPos['top']}px`;
        document.getElementById(RESULT_HEAD).style.left = `${headPos['left']}px`;
        document.getElementById(RESULT_HEAD).style.zIndex = headPos['index'];
        
        if(headPos['rotate']) document.getElementById(RESULT_HEAD).style.transform = `rotate(${headPos['rotate']}deg)`;
        else document.getElementById(RESULT_HEAD).style.transform = `none`;
        
        document.getElementById(RESULT_HEAD).style.backgroundImage = `url(${HEAD.getImg()})`; 
    }
    document.getElementById(EYES_OPTION).disabled = HEAD.id == 0 || BODY.id == 0;
    document.getElementById(EARS_OPTION).disabled = HEAD.id == 0 || BODY.id == 0;
    document.getElementById(NOSE_OPTION).disabled = HEAD.id == 0 || BODY.id == 0;
    document.getElementById(MOUTH_OPTION).disabled = HEAD.id == 0 || BODY.id == 0;
    addEyes();
    addEars();
    addNose();
    addMouth();
    
}

const addEyes = () =>
{
    let countEyes = HEAD.getCountEyes();
    for (let i = 1; i <= countEyes; i++)
    {
        let eyeN = document.createElement('div');
        eyeN.className = RESULT_EYES_CLASS + i;
        let eyePos = HEAD.getEyesSpacing(i);
        eyeN.style.left = eyePos['left'];
        eyeN.style.top = eyePos['top'];
        eyeN.style.zIndex = eyePos['index'];
        document.getElementById(RESULT_HEAD).appendChild(eyeN);
    }
    changeEyes(document.getElementById(EYES_OPTION).value);
}

const changeEyes = (newEyes) => 
{
    EYES.setId(parseInt(newEyes, 10));
    let eyesArr = document.getElementsByClassName(RESULT_EYES);
    for (let i = 0; i < eyesArr.length; i++)
    {
        if (EYES.id == 0 || HEAD.id == 0 || BODY.id == 0)
        {
            eyesArr[i].style.backgroundImage = '';
        }
        else
        {
            let eyePos = HEAD.getEyesSpacing(i+1);
            eyesArr[i].style.left = eyePos['left'];
            eyesArr[i].style.top = eyePos['top'];
            eyesArr[i].style.zIndex = eyePos['index'];
            eyesArr[i].style.backgroundImage = `url(${EYES.getImg()})`;
        }
    }
}

const addEars = () =>
{
    let countEars = HEAD.getCountEars();
    for (let i = 1; i <= countEars; i++)
    {
        let earN = document.createElement('div');
        earN.className = RESULT_EARS_CLASS + i;
        let earPos = HEAD.getEarSpacing(i);
        earN.style.left = earPos['left'];
        earN.style.top = earPos['top'];
        earN.style.zIndex = earPos['index'];
        if (earPos['flip'])
        {
            earN.style.transform = 'scaleX(-1)';
        }
        document.getElementById(RESULT_HEAD).appendChild(earN);
    }
    changeEars(document.getElementById(EARS_OPTION).value);
}

const changeEars = (newEars) => 
{
    EARS.setId(parseInt(newEars, 10));
    let earsArr = document.getElementsByClassName(RESULT_EAR);
    for (let i = 0; i < earsArr.length; i++)
    {
        if (EARS.id == 0 || HEAD.id == 0 || BODY.id == 0)
        {
            earsArr[i].style.backgroundImage = '';
        }
        else
        {
            let earPos = HEAD.getEarSpacing(i+1);
            earsArr[i].style.left = earPos['left'];
            earsArr[i].style.top = earPos['top'];
            earsArr[i].style.zIndex = earPos['index'];
            if (earPos['flip'])
            {
                earsArr[i].style.transform = 'scaleX(-1)';
            }
            earsArr[i].style.backgroundImage = `url(${EARS.getImg()})`;
        }
    }
}

const addNose = () =>
{
    let countNose = HEAD.getCountNose();
    for (let i = 1; i <= countNose; i++)
    {
        let noseN = document.createElement('div');
        noseN.className = RESULT_NOSE_CLASS + i;
        let nosePos = HEAD.getNoseSpacing(i);
        noseN.style.left = nosePos['left'];
        noseN.style.top = nosePos['top'];
        noseN.style.zIndex = nosePos['index'];
        document.getElementById(RESULT_HEAD).appendChild(noseN);
    }
    changeNose(document.getElementById(NOSE_OPTION).value);
}

const changeNose = (newNose) => 
{
    NOSE.setId(parseInt(newNose, 10));
    let noseArr = document.getElementsByClassName(RESULT_NOSE);
    for (let i = 0; i < noseArr.length; i++)
    {
        if (NOSE.id == 0 || HEAD.id == 0 || BODY.id == 0)
        {
            noseArr[i].style.backgroundImage = '';
        }
        else
        {
            let nosePos = HEAD.getNoseSpacing(i+1);
            noseArr[i].style.left = nosePos['left'];
            noseArr[i].style.top = nosePos['top'];
            noseArr[i].style.zIndex = nosePos['index'];
            noseArr[i].style.backgroundImage = `url(${NOSE.getImg()})`;
        }
    }
}

const addMouth = () =>
{
    let countMouth = HEAD.getCountMouth();
    for (let i = 1; i <= countMouth; i++)
    {
        let mouthN = document.createElement('div');
        mouthN.className = RESULT_MOUTH_CLASS + i;
        let mouthPos = HEAD.getMouthSpacing(i);
        mouthN.style.left = mouthPos['left'];
        mouthN.style.top = mouthPos['top'];
        mouthN.style.zIndex = mouthPos['index'];
        document.getElementById(RESULT_HEAD).appendChild(mouthN);
    }
    changeMouth(document.getElementById(MOUTH_OPTION).value);
}

const changeMouth = (newMouth) => 
{
    MOUTH.setId(parseInt(newMouth, 10));
    let mouthArr = document.getElementsByClassName(RESULT_MOUTH);
    for (let i = 0; i < mouthArr.length; i++)
    {
        if (MOUTH.id == 0 || HEAD.id == 0 || BODY.id == 0)
        {
            mouthArr[i].style.backgroundImage = '';
        }
        else
        {
            let mouthPos = HEAD.getMouthSpacing(i+1);
            mouthArr[i].style.left = mouthPos['left'];
            mouthArr[i].style.top = mouthPos['top'];
            mouthArr[i].style.zIndex = mouthPos['index'];
            mouthArr[i].style.backgroundImage = `url(${MOUTH.getImg()})`;
        }
    }
}

const addArms = () =>
{
    document.getElementById(RESULT_ARMS).innerHTML = '';
    let countArms = BODY.getCountArms();
    for (let i = 1; i <= countArms; i++)
    {
        let armN = document.createElement('div');
        armN.className = RESULT_ARM_CLASS + i;
        let armPos = BODY.getArmSpacing(i);
        armN.style.left = armPos['left'];
        armN.style.top = armPos['top'];
        armN.style.zIndex = armPos['index'];
        
        let transformString = "";
        if (armPos['rotate'])
        {
            transformString += 'rotate('+armPos['rotate']+'deg) ';
        }
        if (armPos['flip'])
        {
            transformString += 'scaleX(-1) ';
        }
        armN.style.transform = transformString;

        let handN = document.createElement('div');
        handN.className = RESULT_HANDS_CLASS + i;
        let hand = document.createElement('div');
        hand.className = RESULT_SINGLE_HAND_CLASS + i;
        let handSpacing = ARMS.getHandSpacing();
        hand.style.left = handSpacing['left'];
        hand.style.top = handSpacing['top'];
        hand.style.zIndex = handSpacing['index'];
        handN.appendChild(hand);
        armN.appendChild(handN);
        document.getElementById(RESULT_ARMS).appendChild(armN);
    }
    changeArms(document.getElementById(ARMS_OPTION).value);
}

const changeArms = (newArms) => 
{
    ARMS.setId(parseInt(newArms, 10));
    document.getElementById(HANDS_OPTION).disabled = ARMS.id == 0 || BODY.id == 0;
    let armsArr = document.getElementsByClassName(RESULT_ARM_SINGLE_CLASS);
    for (let i = 0; i < armsArr.length; i++)
    {
        if (ARMS.id == 0 || BODY.id == 0)
        {
            armsArr[i].style.backgroundImage = '';
        }
        else
        {
            let armPos = BODY.getArmSpacing(i+1);
            armsArr[i].style.left = armPos['left'];
            armsArr[i].style.top = armPos['top'];
            armsArr[i].style.zIndex = armPos['index'];
            
            let transformString = "";
            if (armPos['rotate'])
            {
                transformString += 'rotate('+armPos['rotate']+'deg) ';
            }
            if (armPos['flip'])
            {
                transformString += 'scaleX(-1) ';
            }
            armsArr[i].style.transform = transformString;

            armsArr[i].style.backgroundImage = `url(${ARMS.getImg()})`;
        }
    }
    changeHands(document.getElementById(HANDS_OPTION).value);
}

const changeHands = (newHands) => 
{
    HANDS.setId(parseInt(newHands, 10));
    let handsArr = document.getElementsByClassName(RESULT_HAND_SINGLE_CLASS);
    for (let i = 0; i < handsArr.length; i++)
    {
        if (HANDS.id == 0 || ARMS.id == 0 || BODY.id == 0)
        {
            handsArr[i].style.backgroundImage = '';
        }
        else
        {
            let handSpacing = ARMS.getHandSpacing();
            handsArr[i].style.left = handSpacing['left'];
            handsArr[i].style.top = handSpacing['top'];
            handsArr[i].style.zIndex = handSpacing['index'];
            let transformString = "";
            if (handSpacing['rotate'])
            {
                transformString += 'rotate('+handSpacing['rotate']+'deg) ';
            }
            if (handSpacing['flip'])
            {
                transformString += 'scaleX(-1) ';
            }
            handsArr[i].style.transform = transformString;
            handsArr[i].style.backgroundImage = `url(${HANDS.getImg()})`;
        }
    }
}

const addLegs = () =>
{
    document.getElementById(RESULT_LEGS).innerHTML = '';
    let countLegs = BODY.getCountLegs();
    for (let i = 1; i <= countLegs; i++)
    {
        let legN = document.createElement('div');
        legN.className = RESULT_LEG_CLASS + i;
        let legPos = BODY.getLegSpacing(i);
        legN.style.left = legPos['left'];
        legN.style.top = legPos['top'];
        legN.style.zIndex = legPos['index'];
        
        let transformString = "";
        if (legPos['rotate'])
        {
            transformString += 'rotate('+legPos['rotate']+'deg) ';
        }
        if (legPos['flip'])
        {
            transformString += 'scaleX(-1) ';
        }
        legN.style.transform = transformString;

        let footN = document.createElement('div');
        footN.className = RESULT_FOOT_CLASS + i;
        let footSpacing = LEGS.getFootSpacing();
        footN.style.left = footSpacing['left'];
        footN.style.top = footSpacing['top'];
        footN.style.zIndex = footSpacing['index'];
        legN.appendChild(footN);
        document.getElementById(RESULT_LEGS).appendChild(legN);
    }
    changeLegs(document.getElementById(LEGS_OPTION).value);
}

const changeLegs = (newLegs) =>
{
    LEGS.setId(parseInt(newLegs, 10));
    document.getElementById(FOOT_OPTION).disabled = LEGS.id == 0 || BODY.id == 0;
    let legsArr = document.getElementsByClassName(RESULT_LEG_SINGLE_CLASS);
    for (let i = 0; i < legsArr.length; i++)
    {
        if (LEGS.id == 0 || BODY.id == 0)
        {
            legsArr[i].style.backgroundImage = '';
        }
        else
        {
            let legPos = BODY.getLegSpacing(i+1);
            legsArr[i].style.left = legPos['left'];
            legsArr[i].style.top = legPos['top'];
            legsArr[i].style.zIndex = legPos['index'];
            
            let transformString = "";
            if (legPos['rotate'])
            {
                transformString += 'rotate('+legPos['rotate']+'deg) ';
            }
            if (legPos['flip'])
            {
                transformString += 'scaleX(-1) ';
            }
            legsArr[i].style.transform = transformString;

            legsArr[i].style.backgroundImage = `url(${LEGS.getImg()})`;
        }
    }
    changeFeet(document.getElementById(FOOT_OPTION).value);
}

const changeFeet = (newFeet) => 
{
    FOOT.setId(parseInt(newFeet, 10));
    let footArr = document.getElementsByClassName(RESULT_FOOT_SINGLE_CLASS);
    for (let i = 0; i < footArr.length; i++)
    {
        if (FOOT.id == 0 || LEGS.id == 0 || BODY.id == 0)
        {
            footArr[i].style.backgroundImage = '';
        }
        else
        {
            let footSpacing = LEGS.getFootSpacing();
            footArr[i].style.left = footSpacing['left'];
            footArr[i].style.top = footSpacing['top'];
            footArr[i].style.zIndex = footSpacing['index'];
            footArr[i].style.backgroundImage = `url(${FOOT.getImg()})`;
        }
    }
}

const changeBack = (newBack) =>
{
    BACK.setId(parseInt(newBack, 10));
    let back = document.getElementById(RESULT_BACK);
    if (BACK.id == 0 || BODY.id == 0)
    {
        back.style.backgroundImage = '';
    }
    else
    {
        let backPos = BODY.getBackSpacing();
        back.style.left = backPos['left'];
        back.style.top = backPos['top'];
        back.style.zIndex = backPos['index'];
        back.style.backgroundImage = `url(${BACK.getImg()})`;
    }
}

//Obrigado Rodrigo Rodrigues
const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

const randomizeAll = () =>
{
    document.querySelectorAll('select').forEach(select => {
        const maxRandomNumber = select.options.length;
        const randomNumber = getRandomArbitrary(1, maxRandomNumber);
        select.selectedIndex = randomNumber;
    });

    changeBody(document.getElementById(BODY_OPTION).value);
    resizeBody();
    calculateAttributes();

}

const resizeBody = () => {
    let elm = document.getElementById('creature');
    let scale = elm.offsetWidth / (elm.scrollWidth + (window.innerWidth * 0.3));
    elm.style.transform = 'scale('+scale+')';
}

function changeSubtitle() {
    let subtitle = Math.floor(Math.random() * 4); //Numero aleatorio de 0 a 3
    switch(subtitle) {
        default:
            document.getElementById('header-subtitle').innerText = "Como você está hoje?";
            break;
        case 1:
            document.getElementById('header-subtitle').innerText = "Monte seu Avatar";
            break;
        case 2:
            document.getElementById('header-subtitle').innerText = "Revele sua Criatura";
            break;
        case 3:
            document.getElementById('header-subtitle').innerText = "Crie sua Aventura";
            break;
    }
}

function makeScreenshot() {
    html2canvas(document.getElementById("creature"), {scale: 1}).then(canvas => {
        document.body.appendChild(canvas);
    });
}

const calculateAttributes = () => 
{
    document.getElementById("attrs").style.visibility = "visible"; //MUDAR ISSO DEPOIS
    let allAttr = BODY_PARTS.map(part => part.getAttribute()).flat(1);
    let splitSize = 6;

    allAttr = Object.values(allAttr.reduce((total, nextPart) => {
        if (total[Object.keys(nextPart)[0]])
        {
            total[Object.keys(nextPart)[0]][Object.keys(nextPart)[0]] += nextPart[Object.keys(nextPart)[0]]; 
        }
        else if (!!nextPart)
        {
            total[Object.keys(nextPart)[0]] = Object.assign({}, nextPart);
        }
        return total;
    }, {}));

    let splited = Array.from(
        new Array(Math.ceil(allAttr.length / splitSize)),
        (_, i) => allAttr.slice(i * splitSize, i * splitSize + splitSize)
    );

    document.getElementById(FIRST_COLUMN_ATTR_ID).innerHTML = '';
    document.getElementById(SECOND_COLUMN_ATTR_ID).innerHTML = '';

    for (let i = 0; i < splited.length && i < 2; i++)
    {
        let div;
        switch (i)
        {
            case 0:
                div = document.getElementById(FIRST_COLUMN_ATTR_ID)
                break;
            case 1:
                div = document.getElementById(SECOND_COLUMN_ATTR_ID)
                break;
        }

        splited[i].forEach(attr => {
            let container = document.createElement('div');
            container.className = ATTR_CONTAINER_CLASS;
            let name = document.createElement('div');
            name.className = ATTR_NAME_CLASS;
            let nameText = `${Object.keys(attr)[0]}`;
            let span = document.createElement('span');
            span.appendChild(document.createTextNode(nameText.substr(0, 1).toUpperCase()));
            name.appendChild(span);
            name.appendChild(document.createTextNode(nameText.substr(1)));
            let value = document.createElement('div');
            value.className = ATTR_VALUE_CLASS;
            value.appendChild(document.createTextNode(`${String(attr[Object.keys(attr)[0]]).replace('.', ',')}`))
            container.appendChild(name);
            container.appendChild(value);
            div.appendChild(container);
        });
    }

}