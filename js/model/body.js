class body extends shape 
{

    constructor(id = 0)
    {
        let path = 'data/body/';
        let options = 
        {
            0: 
            {
                'countLegs': 0,
                'countArms': 0,
                'name': null 
            },
            1: 
            {
                'countLegs': 1,
                'countArms': 2,
                'name': 'Uni' 
            },
            2: 
            {
                'countLegs': 2,
                'countArms': 2,
                'name': 'Duo'  
            },
            3: 
            {
                'countLegs': 4,
                'countArms': 2,
                'name': 'Snail' 
            },
            4: 
            {
                'countLegs': 6,
                'countArms': 4,
                'name': 'Sixti'  
            },
            5: 
            {
                'countLegs': 3,
                'countArms': 2,
                'name': 'noodle3D'  
            },
            6: 
            {
                'countLegs': 2,
                'countArms': 4,
                'name': 'Gel'  
            },
        };
        super(id, path, options);
        
    }

    getCountLegs()
    {
        return this.options[this.id]['countLegs'];
    }

    getCountArms()
    {
        return this.options[this.id]['countArms'];
    }

    getHeadSpacing()
    {
        let spacing = [];
        switch (this.id) {
            case 1:
                spacing['top'] = -12;   
                spacing['left'] = 250; 
                break;
            case 2:
                spacing['top'] = -13;   
                spacing['left'] = 248; 
                break;
            case 3:
                spacing['top'] = -19;   
                spacing['left'] = 425; 
                break;
            case 4:
                spacing['top'] = -2;   
                spacing['left'] = 245; 
                break;
            case 5:
                spacing['top'] = -2;   
                spacing['left'] = 245; 
                break;
            case 6:
                spacing['top'] = -2;   
                spacing['left'] = 245; 
                break;
        }
        return spacing
    }

    getArmSpacing(arm)
    {
        let spacing = [];
        switch (this.id) {
            case 1:
                switch(arm)
                {
                    case 1:
                        spacing['top'] = -110; 
                        spacing['left'] = 280;  
                        spacing['index'] = 2;
                        break;
                    case 2:
                        spacing['top'] = -522; 
                        spacing['left'] = 450;  
                        spacing['index'] = 1;
                        break;
                }
                break;
            case 2:
                switch(arm)
                {
                    case 1:
                        spacing['top'] = -110; 
                        spacing['left'] = 260;  
                        spacing['index'] = 1;
                        break;
                    case 2:
                        spacing['top'] = -543; 
                        spacing['left'] = 450;  
                        spacing['index'] = 0;
                        break;
                }
                break;
            case 3:
                switch(arm)
                {
                    case 1:
                        spacing['top'] = -130; 
                        spacing['left'] = 465;  
                        spacing['index'] = 1;
                        break;
                    case 2:
                        spacing['top'] = -530; 
                        spacing['left'] = 595;  
                        spacing['index'] = 0;
                        break;
                }
                break;
            case 4:
                switch(arm)
                {
                    case 1:
                        spacing['top'] = -143; 
                        spacing['left'] = 457;  
                        spacing['index'] = 4;
                        break;
                    case 2:
                        spacing['top'] = -530; 
                        spacing['left'] = -15;  
                        spacing['index'] = 4;
                        spacing['flip'] = true;
                        break;
                    case 3:
                        spacing['top'] = -775; 
                        spacing['left'] = 480;  
                        spacing['index'] = 3;
                        break;
                    case 4:
                        spacing['top'] = -1180; 
                        spacing['left'] = 5;  
                        spacing['index'] = 4;
                        spacing['flip'] = true;
                        break;
                }
                break;
            case 5:
                switch(arm)
                {
                    case 1:
                        spacing['top'] = -143; 
                        spacing['left'] = 457;  
                        spacing['index'] = 4;
                        break;
                    case 2:
                        spacing['top'] = -530; 
                        spacing['left'] = -15;  
                        spacing['index'] = 4;
                        spacing['flip'] = true;
                        break;
                }
                break;
            case 6:
                switch(arm)
                {
                    case 1:
                        spacing['top'] = -143; 
                        spacing['left'] = 457;  
                        spacing['index'] = 4;
                        break;
                    case 2:
                        spacing['top'] = -530; 
                        spacing['left'] = -15;  
                        spacing['index'] = 4;
                        spacing['flip'] = true;
                        break;
                    case 3:
                        spacing['top'] = -775; 
                        spacing['left'] = 480;  
                        spacing['index'] = 3;
                        break;
                    case 4:
                        spacing['top'] = -1180; 
                        spacing['left'] = 5;  
                        spacing['index'] = 4;
                        spacing['flip'] = true;
                        break;
                }
                break;
        }
        return spacing;
    }

    getLegSpacing(leg)
    {
        let spacing = [];
        let legHeight = 375;
        switch (this.id) {
            case 1:
                spacing['top'] = -564; 
                spacing['left'] = 275;  
                spacing['index'] = 1;
                break;
            case 2:
                switch(leg)
                {
                    case 1:
                        spacing['top'] = -600; 
                        spacing['left'] = 170;  
                        spacing['index'] = 1;
                        break;
                    case 2:
                        spacing['top'] = -973; 
                        spacing['left'] = 320;  
                        spacing['index'] = 0;
                        break;
                }
                break;
            case 3:
                spacing['top'] = -595-((leg-1)*legHeight);
                switch(leg)
                {
                    case 1:
                        spacing['left'] = 400;  
                        spacing['index'] = -1;
                        break;
                    case 2:
                        spacing['left'] = 310;  
                        spacing['index'] = 1;
                        break;
                    case 3:
                        spacing['left'] = 180;  
                        spacing['index'] = -1;
                        break;
                    case 4:
                        spacing['left'] = 90;  
                        spacing['index'] = 1;
                        break;
                }
                break;
            case 4:
                spacing['top'] = -1360-((leg-1)*legHeight); 
                switch(leg)
                {
                    case 1:
                        spacing['left'] = 435;  
                        spacing['index'] = -1;
                        break;
                    case 2:
                        spacing['left'] = 380;  
                        spacing['index'] = 1;
                        break;
                    case 3:
                        spacing['left'] = 275;  
                        spacing['index'] = -1;
                        break;
                    case 4:
                        spacing['left'] = 190;  
                        spacing['index'] = 1;
                        break;
                    case 5:
                        spacing['left'] = 95;  
                        spacing['index'] = -1;
                        break;
                    case 6:
                        spacing['left'] = 40;  
                        spacing['index'] = 1;
                        break;
                }
                break;
            case 5:
                spacing['top'] = -595-((leg-1)*legHeight);
                switch(leg)
                {
                    case 1:
                        spacing['left'] = 400;  
                        spacing['index'] = -1;
                        break;
                    case 2:
                        spacing['left'] = 310;  
                        spacing['index'] = 1;
                        break;
                    case 3:
                        spacing['left'] = 180;  
                        spacing['index'] = -1;
                        break;
                }
                break;
            case 6:
                spacing['top'] = -1330-((leg-1)*legHeight);
                switch(leg)
                {
                    case 1:
                        spacing['left'] = 400;  
                        spacing['index'] = -1;
                        break;
                    case 2:
                        spacing['left'] = 310;  
                        spacing['index'] = 1;
                        break;
                }
                break;
        }
        return spacing;
    }


}