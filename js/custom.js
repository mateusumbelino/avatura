
const BODY = new body();
const ARMS = new arms();
const HANDS = new hands();
const LEGS = new legs();
const FOOT = new foot();

const HEAD = new head()
const EYES = new eyes();
const EARS = new ears();

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

const RESULT_LEG_CLASS = 'result-leg leg-n';

const RESULT_LEG_SINGLE_CLASS = 'result-leg';

const RESULT_FOOT_SINGLE_CLASS = 'result-foot';

const RESULT_FOOT_CLASS = 'result-foot foot-n';

const LEGS_OPTION = 'select-legs';

const FOOT_OPTION = 'select-feet';

const EYES_OPTION = 'select-eye';

const EARS_OPTION = 'select-ear';

const RESULT_EAR = 'result-ear';

const RESULT_EYES = 'result-eye';

const RESULT_EYES_CLASS = 'result-eye eye-n';

const RESULT_EARS_CLASS = 'result-ear ear-n';

const changeBody = (newBody) => 
{
    BODY.setId(newBody);
    if (BODY.id == 0)
    {
        document.getElementById(RESULT_BODY).innerHTML = '';
        document.getElementById(RESULT_BODY).style.backgroundImage = '';
    }
    else
    {
        headPos = BODY.getHeadSpacing();
        bodyImg = BODY.getImg();
        document.getElementById(RESULT_BODY).style.backgroundImage = `url(${bodyImg})`;
        document.getElementById(RESULT_HEAD).style.top = `${headPos['top']}px`;
        document.getElementById(RESULT_HEAD).style.left = `${headPos['left']}px`;
        addArms();
        addLegs();
        
    }
}

const changeLegs = (newLegs) =>
{
    LEGS.setId(newLegs);
    legsArr = document.getElementsByClassName(RESULT_LEG_SINGLE_CLASS);
    for (let i = 0; i < legsArr.length; i++)
    {
        if (LEGS.id == 0)
        {
            legsArr[i].style.backgroundImage = "";
        }
        else
        {
            legPos = BODY.getLegSpacing(i);
            legsArr[i].style.left = legPos['left'];
            legsArr[i].style.top = legPos['top'];
            legsArr[i].style.zIndex = legPos['index'];
            legsArr[i].style.backgroundImage = `url(${LEGS.getImg()})`;
        }
    }
}

const changeFeet = (newFeet) => 
{
    FOOT.setId(newFeet);
    footArr = document.getElementsByClassName(RESULT_FOOT_SINGLE_CLASS);
    for (let i = 0; i < footArr.length; i++)
    {
        if (FOOT.id == 0)
        {
            footArr[i].style.backgroundImage = "";
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

const changeArms = (newArms) => 
{
    ARMS.setId(newArms);
    armsArr = document.getElementsByClassName(RESULT_ARM_SINGLE_CLASS);
    for (let i = 0; i < armsArr.length; i++)
    {
        if (ARMS.id == 0)
        {
            armsArr[i].style.backgroundImage = '';
        }
        else
        {
            armPos = BODY.getArmSpacing(i);
            armsArr[i].style.left = armPos['left'];
            armsArr[i].style.top = armPos['top'];
            armsArr[i].style.zIndex = armPos['index'];
            if (armPos['flip'])
            {
                armsArr[i].style.transform = 'scaleX(-1)';
            }
            armsArr[i].style.backgroundImage = `url(${ARMS.getImg()})`;
        }
    }
}

const changeHands = (newHands) => 
{
    HANDS.setId(newHands);
    handsArr = document.getElementsByClassName(RESULT_HAND_SINGLE_CLASS);

    for (let i = 0; i < handsArr.length; i++)
    {
        if (HANDS.id == 0)
        {
            handsArr[i].style.backgroundImage = "";
        }
        else
        {
            let handSpacing = ARMS.getHandSpacing();
            handsArr[i].style.left = handSpacing['left'];
            handsArr[i].style.top = handSpacing['top'];
            handsArr[i].style.zIndex = handSpacing['index'];
            handsArr[i].style.backgroundImage = `url(${HANDS.getImg()})`;
        }
    }
}

const changeEars = (newEars) => 
{
    EARS.setId(newEars);
    earsArr = document.getElementsByClassName(RESULT_EAR);
    for (let i = 0; i < earsArr.length; i++)
    {
        if (EARS.id == 0)
        {
            earsArr[i].style.backgroundImage = "";
        }
        else
        {
            earPos = HEAD.getEarSpacing(i);
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

const changeEyes = (newEyes) => 
{
    EYES.setId(newEyes);
    eyesArr = document.getElementsByClassName(RESULT_EYES);
    for (let i = 0; i < eyesArr.length; i++)
    {
        if (EYES.id == 0)
        {
            eyesArr[i].style.backgroundImage = "";;
        }
        else
        {
            eyePos = HEAD.getEyesSpacing(i);
            eyesArr[i].style.left = eyePos['left'];
            eyesArr[i].style.top = eyePos['top'];
            eyesArr[i].style.zIndex = eyePos['index'];
            eyesArr[i].style.backgroundImage = `url(${EYES.getImg()})`;
        }
    }
}

const changeHead = (newHead) =>
{

    HEAD.setId(newHead);
    document.getElementById(RESULT_HEAD).innerHTML = '';
    
    if (HEAD.id != 0)
    {
        headPos = BODY.getHeadSpacing();
        document.getElementById(RESULT_HEAD).style.top = `${headPos['top']}px`;
        document.getElementById(RESULT_HEAD).style.left = `${headPos['left']}px`;
        headImg = HEAD.getImg();
        document.getElementById(RESULT_HEAD).style.backgroundImage = `url(${headImg})`;
        addEyes();
        addEars();
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
        legPos = BODY.getLegSpacing(i);
        legN.style.left = legPos['left'];
        legN.style.top = legPos['top'];
        legN.style.zIndex = legPos['index'];
        let footN = document.createElement('div');
        footN.className = RESULT_FOOT_CLASS + i;
        if (FOOT.getId())
        {
            let footSpacing = LEGS.getFootSpacing();
            footN.style.left = footSpacing['left'];
            footN.style.top = footSpacing['top'];
            footN.style.zIndex = footSpacing['index'];
        }
        legN.appendChild(footN);
        document.getElementById(RESULT_ARMS).appendChild(legN);
    }
    changeLegs(document.getElementById(LEGS_OPTION).value);
    changeFeet(document.getElementById(FOOT_OPTION).value);
}

const addArms = () =>
{
    document.getElementById(RESULT_ARMS).innerHTML = '';
    let countArms = BODY.getCountArms();
    for (let i = 1; i <= countArms; i++)
    {
        let armN = document.createElement('div');
        armN.className = RESULT_ARM_CLASS + i;
        armPos = BODY.getArmSpacing(i);
        armN.style.left = armPos['left'];
        armN.style.top = armPos['top'];
        armN.style.zIndex = armPos['index'];
        if (armPos['flip'])
        {
            armN.style.transform = 'scaleX(-1)';
        }
        let handN = document.createElement('div');
        handN.className = RESULT_HANDS_CLASS + i;
        let hand = document.createElement('div');
        hand.className = RESULT_SINGLE_HAND_CLASS + i;
        if (HANDS.getId())
        {
            let handSpacing = ARMS.getHandSpacing();
            hand.style.left = handSpacing['left'];
            hand.style.top = handSpacing['top'];
            hand.style.zIndex = handSpacing['index'];
        }
        handN.appendChild(hand);
        armN.appendChild(handN);
        document.getElementById(RESULT_ARMS).appendChild(armN);
    }
    changeArms(document.getElementById(ARMS_OPTION).value);
    changeHands(document.getElementById(HANDS_OPTION).value);
    
}


const addEars = () =>
{
    let countEars = HEAD.getCountEars();
    for (let i = 1; i <= countEars; i++)
    {
        let earN = document.createElement('div');
        earN.className = RESULT_EARS_CLASS + i;
        earPos = HEAD.getEarSpacing(i);
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


const addEyes = () =>
{
    let countEyes = HEAD.getCountEyes();
    for (let i = 1; i <= countEyes; i++)
    {
        let eyeN = document.createElement('div');
        eyeN.className = RESULT_EYES_CLASS + i;
        eyePos = HEAD.getEyesSpacing(i);
        eyeN.style.left = eyePos['left'];
        eyeN.style.top = eyePos['top'];
        eyeN.style.zIndex = eyePos['index'];
        document.getElementById(RESULT_HEAD).appendChild(eyeN);
    }
    changeEyes(document.getElementById(EYES_OPTION).value);
}
