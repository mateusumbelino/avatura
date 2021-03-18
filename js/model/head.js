class head extends shape 
{

    constructor(id = 0)
    {
        let path = 'data/head/';
        let options = 
        {
            0: 
            {
                'countEyes': 0,
                'countEars': 0,
                'countMouth': 0,
                'countNose': 0,
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 0; abstração: 0',
                'name': null 
            },
            1: 
            {
                'countEyes': 1,
                'countEars': 2,
                'countMouth': 1,
                'countNose': 1,
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 0; abstração: 1; brilho: 2',
                'name': 'RedMonster2' 
            },
            2: 
            {
                'countEyes': 1,
                'countEars': 2,
                'countMouth': 1,
                'countNose': 1,
                'attribute': 'força: 1; destreza: 0; resistência: 0; sabedoria: 0; abstração: 0; pavor: 2',
                'name': 'RedMonster'  
            },
            3: 
            {
                'countEyes': 1,
                'countEars': 2,
                'countMouth': 1,
                'countNose': 1,
                'attribute': 'força: 0; destreza: 0; resistência: 1; sabedoria: 2; abstração: 1; realeza: 2',
                'name': 'King' 
            },
            4: 
            {
                'countEyes': 1,
                'countEars': 2,
                'countMouth': 1,
                'countNose': 1,
                'attribute': 'força: 0; destreza: 0; resistência: 1; sabedoria: 0; abstração: 2; fofura: 2',
                'name': 'Doll' 
            },
            5: 
            {
                'countEyes': 1,
                'countEars': 2,
                'countMouth': 1,
                'countNose': 1,
                'attribute': 'força: 0; destreza: 0; resistência: -1; sabedoria: 1; abstração: 2; ovo: 2',
                'name': 'Egg' 
            },
            6: 
            {
                'countEyes': 1,
                'countEars': 2,
                'countMouth': 1,
                'countNose': 1,
                'attribute': 'força: 0; destreza: 0; resistência: 1; sabedoria: 1; abstração: 1; pulso: 3',
                'name': 'Heart3D' 
            },
            7: 
            {
                'countEyes': 1,
                'countEars': 2,
                'countMouth': 1,
                'countNose': 1,
                'attribute': 'força: 0; destreza: 1; resistência: 0; sabedoria: 1; abstração: 2; saúde: 3',
                'name': 'Cabagge' 
            },
            8: 
            {
                'countEyes': 1,
                'countEars': 2,
                'countMouth': 1,
                'countNose': 1,
                'attribute': 'força: 2; destreza: -2; resistência: 3; sabedoria: 0; abstração: 3; brilho: 5',
                'name': 'Gem' 
            },
            9: 
            {
                'countEyes': 1,
                'countEars': 2,
                'countMouth': 1,
                'countNose': 1,
                'attribute': 'força: 2; destreza: 2; resistência: 0; sabedoria: 0; abstração: 1; escamas: 2',
                'name': 'reptil' 
            },
            10: 
            {
                'countEyes': 1,
                'countEars': 2,
                'countMouth': 1,
                'countNose': 1,
                'attribute': 'força: 1; destreza: 1; resistência: 1; sabedoria: 0; abstração: 2; robô: 2',
                'name': 'PixelRobot' 
            }
        };
        super(id, path, options);
        
    }

    getCountEyes()
    {
        return this.options[this.id]['countEyes'];
    }

    getCountEars()
    {
        return this.options[this.id]['countEars'];
    }

    getCountNose()
    {
        return this.options[this.id]['countNose'];
    }

    getCountMouth()
    {
        return this.options[this.id]['countMouth'];
    }

    getEyesSpacing()
    {
        let spacing = [];
        switch (this.id) {
            case 1:
                spacing['top'] = 0;   
                spacing['left'] = 0; 
                break;
            case 2:
                spacing['top'] = 0;   
                spacing['left'] = 0; 
                break;
            case 3:
                spacing['top'] = 0;   
                spacing['left'] = 0; 
                break;
            case 9:
                spacing['top'] = 35;   
                spacing['left'] = -10; 
                break;
            case 10:
                spacing['top'] = 70;   
                break;
        }
        spacing['index'] = 7;
        return spacing;
    }

    getEarSpacing(ear)
    {
        let spacing = [];
        spacing['index'] = 6
        switch (this.id) {
            case 1:
                spacing['top'] = -200 - ((ear-1)*200);  
                switch(ear)
                {
                    case 1: 
                        spacing['left'] = -90;  
                        break;
                    case 2:
                        spacing['left'] = 105;  
                        spacing['index'] = -1;
                        spacing['flip'] = true;
                        break;
                }
                break;
            case 2:
                spacing['top'] = -180 - ((ear-1)*200);
                switch(ear)
                {
                    case 1: 
                        spacing['left'] = -100;  
                        break;
                    case 2:
                        spacing['left'] = 150;  
                        spacing['index'] = -1;
                        spacing['flip'] = true;
                        break;
                } 
                break;
            case 3:
                spacing['top'] = -175 - ((ear-1)*200);  
                switch(ear)
                {
                    case 1: 
                        spacing['left'] = -80;  
                        break;
                    case 2:
                        spacing['left'] = 130;  
                        spacing['index'] = -1;
                        spacing['flip'] = true;
                        break;
                } 
                break;
            case 4:
                spacing['top'] = -200 - ((ear-1)*200);  
                switch(ear)
                {
                    case 1: 
                        spacing['left'] = -90;  
                        break;
                    case 2:
                        spacing['left'] = 105;  
                        spacing['index'] = -1;
                        spacing['flip'] = true;
                        break;
                }
                break;
            case 5:
                spacing['top'] = -200 - ((ear-1)*200);  
                switch(ear)
                {
                    case 1: 
                        spacing['left'] = -90;  
                        break;
                    case 2:
                        spacing['left'] = 105;  
                    spacing['index'] = -1;
                        spacing['flip'] = true;
                        break;
                }
                break;
            case 6:
                spacing['top'] = -200 - ((ear-1)*200);  
                switch(ear)
                {
                    case 1: 
                        spacing['left'] = -90;  
                        break;
                    case 2:
                        spacing['left'] = 105;  
                    spacing['index'] = -1;
                        spacing['flip'] = true;
                        break;
                }
                break;
            case 7:
                spacing['top'] = -200 - ((ear-1)*200);  
                switch(ear)
                {
                    case 1: 
                        spacing['left'] = -90;  
                        break;
                    case 2:
                        spacing['left'] = 105;  
                    spacing['index'] = -1;
                        spacing['flip'] = true;
                        break;
                }
                break;
            case 8:
                spacing['top'] = -200 - ((ear-1)*200);  
                switch(ear)
                {
                    case 1: 
                        spacing['left'] = -90;  
                        break;
                    case 2:
                        spacing['left'] = 105;  
                    spacing['index'] = -1;
                        spacing['flip'] = true;
                        break;
                }
                break;
                case 9:
                    switch(ear)
                    {
                        case 1: 
                            spacing['top'] = -212;  
                            spacing['left'] = -100;  
                            break;
                        case 2:
                            spacing['top'] = -415;  
                            spacing['left'] = 150;  
                            spacing['flip'] = true;
                            break;
                    }
                    break;
                case 10: //PixelRobot
                    switch(ear)
                    {
                        case 1: 
                            spacing['top'] = -166;  
                            spacing['left'] = -82;  
                            break;
                        case 2:
                            spacing['top'] = -366;  
                            spacing['left'] = 134;  
                            spacing['flip'] = true;
                            break;
                    }
                    break;
    }
        return spacing;
    }

    getNoseSpacing()
    {
        let spacing = [];
        switch (this.id) {
            default:
                spacing['top'] = -595;   
                spacing['left'] = 8; 
                break;
        }
        spacing['index'] = 9;
        return spacing;
    }

    getMouthSpacing()
    {
        let spacing = [];
        switch (this.id) {
            default:
                spacing['top'] = -800;   
                spacing['left'] = 4; 
                break;
        }
        spacing['index'] = 5;
        return spacing;
    }


}