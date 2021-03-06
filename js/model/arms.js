class arms extends shape 
{

    constructor(id = 0)
    {
        let path = 'data/arm/';
        let options = 
        {
            0: 
            {
                'name': null 
            },
            1: 
            {
                'name': 'Muscle' 
            },
            2: 
            {
                'name': 'Noodle'  
            },
            3: 
            {
                'name': 'Stick' 
            },
            4: 
            {
                'name': 'Robot' 
            },
            5: 
            {
                'name': 'Wing' 
            },
            6: 
            {
                'name': 'Noodle3D' 
            },
            7: 
            {
                'name': 'reptil' 
            },
            8: 
            {
                'name': 'RedMonster' 
            },
            9: 
            {
                'name': 'PixelRobot' 
            },
            10: 
            {
                'name': 'Hairy' 
            },
            11: 
            {
                'name': 'Toothbrush' 
            }
        };
        super(id, path, options);
        
    }

    getHandSpacing()
    {
        let spacing = [];
        spacing['index'] = 5;
        switch (this.id) {
            case 1:
                spacing['top'] = -180;   
                spacing['left'] = 160; 
                break;
            case 2:
                spacing['top'] = -185;   
                spacing['left'] = 75; 
                spacing['rotate'] = 345;
                break;
            case 3:
                spacing['top'] = -155;   
                spacing['left'] = 140; 
                break;
            case 4: //Robot
                spacing['top'] = -165;   
                spacing['left'] = 130; 
                spacing['rotate'] = 320;
                break;
            case 5: //Asas
                spacing['top'] = 190;   
                spacing['left'] = 65; 
                spacing['rotate'] = 50;
                break;
            case 6:
                spacing['top'] = 85;   
                spacing['left'] = 180; 
                break;
            case 7:
                spacing['top'] = 5;   
                spacing['left'] = 70; 
                break;
            case 8: //Red Monster
                spacing['top'] = 5;   
                spacing['left'] = 70; 
                break;
            case 9: //Pixel Robot
                spacing['top'] = 205;   
                spacing['left'] = -90; 
                spacing['rotate'] = 90;
                break;
            case 10: //Hairy
                spacing['top'] = 205;   
                spacing['left'] = -90; 
                spacing['rotate'] = 90;
                break;
            case 11: //Toothbrush
                spacing['top'] = 205;   
                spacing['left'] = -90; 
                spacing['rotate'] = 90;
                break;
        }
        return spacing;
    }


}