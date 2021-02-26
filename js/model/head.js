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
                'name': null 
            },
            1: 
            {
                'countEyes': 1,
                'countEars': 2,
                'name': 'Oval' 
            },
            2: 
            {
                'countEyes': 1,
                'countEars': 2,
                'name': 'Square'  
            },
            3: 
            {
                'countEyes': 1,
                'countEars': 2,
                'name': 'Triangle' 
            },
            4: 
            {
                'countEyes': 1,
                'countEars': 2,
                'name': 'Doll' 
            },
            5: 
            {
                'countEyes': 1,
                'countEars': 2,
                'name': 'Egg' 
            },
            6: 
            {
                'countEyes': 1,
                'countEars': 2,
                'name': 'Heart3D' 
            },
            7: 
            {
                'countEyes': 1,
                'countEars': 2,
                'name': 'Cabagge' 
            },
            8: 
            {
                'countEyes': 1,
                'countEars': 2,
                'name': 'Gem' 
            },
            9: 
            {
                'countEyes': 1,
                'countEars': 2,
                'name': 'reptil' 
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
    }
        return spacing;
    }


}