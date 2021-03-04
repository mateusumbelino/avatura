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
                'name': 'Worm' 
            },
            2: 
            {
                'countLegs': 2,
                'countArms': 2,
                'name': 'Statue'  
            },
            3: 
            {
                'countLegs': 4,
                'countArms': 2,
                'name': 'Shell' 
            },
            4: 
            {
                'countLegs': 6,
                'countArms': 0,
                'name': 'Fly'  
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
            7: 
            {
                'countLegs': 2,
                'countArms': 2,
                'name': 'reptil'  
            },
            8: 
            {
                'countLegs': 2,
                'countArms': 2,
                'name': 'RedMonster'  
            },
            9: 
            {
                'countLegs': 4,
                'countArms': 2,
                'name': 'Camel'  
            },
            10: 
            {
                'countLegs': 2,
                'countArms': 2,
                'name': 'PixelRobot'  
            },
            11: 
            {
                'countLegs': 2,
                'countArms': 2,
                'name': 'King'
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
        spacing['index'] = 1;
        switch (this.id) {
            case 1: //Worm
                spacing['top'] = 155;   
                spacing['left'] = 405; 
                spacing['rotate'] = 130; 
                break;
            case 2: //Statue
                spacing['top'] = -65;   
                spacing['left'] = 300; 
                spacing['rotate'] = 10; 
                break;
            case 3: //Shell
                spacing['top'] = 320;   
                spacing['left'] = 410; 
                spacing['rotate'] = 60; 
                break;
            case 4: //Fly
                spacing['top'] = 475;   
                spacing['left'] = 460; 
                spacing['rotate'] = 147; 
                spacing['index'] = 2;
                break;
            case 5: //3D Noodle
                spacing['top'] = -55;   
                spacing['left'] = 315; 
                spacing['rotate'] = 25; 
                break;
            case 6:
                spacing['top'] = -2;   
                spacing['left'] = 245; 
                break;
            case 7:
                    spacing['top'] = -25;   
                    spacing['left'] = 255; 
                    break;
            case 7:
                spacing['top'] = -25;   
                spacing['left'] = 255; 
                break;
            case 8:
                spacing['top'] = 30;   
                spacing['left'] = 270; 
                break;
            case 9: //Camel
                spacing['top'] = 110;   
                spacing['left'] = 525; 
                spacing['rotate'] = 30;
                break;
            case 10: //Pixel Robot
                spacing['top'] = 40;   
                spacing['left'] = 255; 
                break;
            case 11: //King
                spacing['top'] = 40;   
                spacing['left'] = 255; 
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
                        spacing['top'] = -325; 
                        spacing['left'] = 10;  
                        spacing['index'] = 2;
                        spacing['flip'] = true;
                        spacing['rotate'] = 45;
                        break;
                    case 2:
                        spacing['top'] = -305; 
                        spacing['left'] = 460;  
                        spacing['index'] = -1;
                        spacing['rotate'] = 25;
                        break;
                }
                break;
            case 2:
                switch(arm)
                {
                    case 1:
                        spacing['top'] = -195; 
                        spacing['left'] = 10;  
                        spacing['index'] = 1;
                        spacing['flip'] = true;
                        break;
                    case 2:
                        spacing['top'] = -575;
                        spacing['left'] = 485;
                        spacing['index'] = -1;
                        break;
                }
                break;
            case 3: //Shell
                switch(arm)
                {
                    case 1:
                        spacing['top'] = 125; 
                        spacing['left'] = 335;  
                        spacing['index'] = 0;
                        spacing['rotate'] = 45;
                        break;
                    case 2:
                        spacing['top'] = -295; 
                        spacing['left'] = 470;  
                        spacing['index'] = -1;
                        spacing['rotate'] = 35;
                        break;
                }
                break;
            case 4: //Fly
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
            case 7:
                switch(arm)
                {
                    case 1:
                        spacing['top'] = -140; 
                        spacing['left'] = 15;  
                        spacing['index'] = 1;
                        spacing['flip'] = true;
                        break;
                    case 2:
                        spacing['top'] = -535; 
                        spacing['left'] = 450;  
                        spacing['index'] = 1;
                        break;
                }
                break;
            case 8:
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
            case 9: //Camel
                switch(arm)
                {
                    case 1:
                        spacing['top'] = -10; 
                        spacing['left'] = 475;  
                        spacing['index'] = 1;
                        break;
                    case 2:
                        spacing['top'] = -430; 
                        spacing['left'] = 555;  
                        spacing['index'] = -1;
                        break;
                }
                break;
            case 8:
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
            case 10:
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
            case 11:
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
        }
        return spacing;
    }

    getLegSpacing(leg)
    {
        let spacing = [];
        let legHeight = 375;
        switch (this.id) {
            case 1: //Worm
                spacing['top'] = 235; 
                spacing['left'] = 115;  
                spacing['index'] = 1;
                spacing['rotate'] = 45;
                break;
            case 2: //Statue
                switch(leg)
                {
                    case 1:
                        spacing['top'] = 220;
                        spacing['left'] = 130;  
                        spacing['index'] = -1;
                        spacing['flip'] = true;
                        break;
                    case 2:
                        spacing['top'] = -145;
                        spacing['left'] = 260;  
                        spacing['index'] = -1;
                        break;
                }
                break;
            case 3: //Shell
                spacing['top'] = 195-((leg-1)*legHeight);
                switch(leg)
                {
                    case 1:
                        spacing['left'] = 235;  
                        spacing['index'] = -1;
                        break;
                    case 2:
                        spacing['left'] = 150;  
                        spacing['index'] = 1;
                        break;
                    case 3:
                        spacing['left'] = 70;  
                        spacing['index'] = -1;
                        break;
                    case 4:
                        spacing['left'] = 0;  
                        spacing['index'] = 1;
                        break;
                }
                break;
            case 4: //Fly
                switch(leg)
                {
                    case 1:
                        spacing['top'] = 190; 
                        spacing['left'] = 225;  
                        spacing['index'] = 1;
                        spacing['rotate'] = 25;
                        break;
                    case 2:
                        spacing['top'] = -260; 
                        spacing['left'] = 135;  
                        spacing['index'] = -1;
                        spacing['rotate'] = 40;
                        break;
                    case 3:
                        spacing['top'] = -730; 
                        spacing['left'] = 60;  
                        spacing['index'] = -1;
                        spacing['rotate'] = 50;
                        break;
                    case 4:
                        spacing['top'] = -1080;
                        spacing['left'] = 540;  
                        spacing['index'] = 1;
                        spacing['rotate'] = 290;
                        spacing['flip'] = true;
                        break;
                    case 5:
                        spacing['top'] = -1575;
                        spacing['left'] = 510;  
                        spacing['index'] = -1;
                        spacing['rotate'] = 260;
                        spacing['flip'] = true;
                        break;
                    case 6:
                        spacing['top'] = -2020;
                        spacing['left'] = 480;  
                        spacing['index'] = -1;
                        spacing['rotate'] = 255;
                        spacing['flip'] = true;
                        break;
                }
                break;
            case 5:
                spacing['index'] = 1;
                switch(leg)
                {
                    case 1:
                        spacing['top'] = 170;
                        spacing['left'] = 45;
                        break;
                    case 2:
                        spacing['top'] = -175;
                        spacing['left'] = 215;
                        break;
                    case 3:
                        spacing['top'] = -495;
                        spacing['left'] = 330;
                        break;
                }
                break;
            case 6:
                spacing['top'] = 140-((leg-1)*legHeight);
                switch(leg)
                {
                    case 1:
                        spacing['left'] = 330;  
                        spacing['index'] = -1;
                        break;
                    case 2:
                        spacing['left'] = 130;  
                        spacing['index'] = 1;
                        break;
                }
                break;
            case 7:
                spacing['top'] = 150-((leg-1)*legHeight);
                switch(leg)
                {
                    case 1:
                        spacing['left'] = 280;  
                        spacing['index'] = 1;
                        break;
                    case 2:
                        spacing['left'] = 160;  
                        spacing['index'] = 1;
                        spacing['flip'] = true;
                        break;
                }
                break;
            case 8:
                spacing['top'] = 150-((leg-1)*legHeight);
                switch(leg)
                {
                    case 1:
                        spacing['left'] = 280;  
                        spacing['index'] = 1;
                        break;
                    case 2:
                        spacing['left'] = 160;  
                        spacing['index'] = 1;
                        spacing['flip'] = true;
                        break;
                }
                break;
            case 9: //Camel
                spacing['top'] = 150-((leg-1)*legHeight);
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
            case 10:
                spacing['top'] = 150-((leg-1)*legHeight);
                switch(leg)
                {
                    case 1:
                        spacing['left'] = 280;  
                        spacing['index'] = 1;
                        break;
                    case 2:
                        spacing['left'] = 160;  
                        spacing['index'] = 1;
                        spacing['flip'] = true;
                        break;
                }
                break;
            case 11:
                spacing['top'] = 150-((leg-1)*legHeight);
                switch(leg)
                {
                    case 1:
                        spacing['left'] = 280;  
                        spacing['index'] = 1;
                        break;
                    case 2:
                        spacing['left'] = 160;  
                        spacing['index'] = 1;
                        spacing['flip'] = true;
                        break;
                }
                break;
        }
        return spacing;
    }


}