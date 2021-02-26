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
                spacing['top'] = -170;   
                spacing['left'] = 75; 
                break;
            case 3:
                spacing['top'] = -155;   
                spacing['left'] = 140; 
                break;
            case 4:
                spacing['top'] = -110;   
                spacing['left'] = 165; 
                break;
            case 5: //Asas
                spacing['top'] = 105;   
                spacing['left'] = 65; 
                break;
            case 6:
                spacing['top'] = 85;   
                spacing['left'] = 180; 
                break;
            case 7:
                spacing['top'] = 5;   
                spacing['left'] = 70; 
                break;
        }
        return spacing;
    }


}