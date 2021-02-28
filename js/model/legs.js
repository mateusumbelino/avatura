class legs extends shape 
{

    constructor(id = 0)
    {
        let path = 'data/leg/';
        let options = 
        {
            0: 
            {
                'name': null 
            },
            1: 
            {
                'name': 'CurvedLeft' 
            },
            2: 
            {
                'name': 'Straight'  
            },
            3: 
            {
                'name': 'CurvedRight' 
            },
            4: 
            {
                'name': 'ReptilLeg' 
            },
            5: 
            {
                'name': 'Jeans' 
            },
            6: 
            {
                'name': 'Microphone' 
            },
            7: 
            {
                'name': 'Pasta' 
            },
            8: 
            {
                'name': 'Subway' 
            },
            9: 
            {
                'name': 'Spider' 
            },
            10: 
            {
                'name': 'Toothpick' 
            },
            11: 
            {
                'name': 'RedMonster' 
            },
            12: 
            {
                'name': 'PixelRobot' 
            },
        };
        super(id, path, options);
        
    }
    
    getFootSpacing()
    {
        let spacing = [];
        switch (this.id) {
            case 1:
                spacing['top'] = 139;   
                spacing['left'] = 55; 
                break;
            case 2:
                spacing['top'] = 133;   
                spacing['left'] = 120; 
                break;
            case 3:
                spacing['top'] = 130;   
                spacing['left'] = 53; 
                break;
            case 4:
                spacing['top'] = 60;   
                spacing['left'] = 185; 
                break;
            case 5:
                spacing['top'] = 125;   
                spacing['left'] = 120; 
                break;
            case 6:
                spacing['top'] = 111;   
                spacing['left'] = 155; 
                break;
            case 7:
                spacing['top'] = 100;   
                spacing['left'] = 135; 
                break;
            case 8:
                spacing['top'] = 130;   
                spacing['left'] = 165; 
                break;
            case 9:
                spacing['top'] = 95;   
                spacing['left'] = 115; 
                break;
            case 10:
                spacing['top'] = 133;   
                spacing['left'] = 125; 
                break;
            case 11: //Red Monster
                spacing['top'] = 140;   
                spacing['left'] = 115; 
                break;
            case 12: //PixelRobot   
                spacing['top'] = 23;   
                spacing['left'] = 120; 
                break;
        }
        spacing['index'] = 5;
        return spacing;
    }


}