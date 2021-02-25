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
        };
        super(id, path, options);
        
    }

    getHandSpacing()
    {
        let spacing = [];
        switch (this.id) {
            case 1:
                spacing['top'] = -11;   
                spacing['left'] = 240; 
                break;
            case 2:
                spacing['top'] = -10;   
                spacing['left'] = 143; 
                break;
            case 3:
                spacing['top'] = 0;   
                spacing['left'] = 222; 
                break;
            case 4:
                spacing['top'] = 0;   
                spacing['left'] = 222; 
                break;
            case 5:
                spacing['top'] = 0;   
                spacing['left'] = 222; 
                break;
            case 6:
                spacing['top'] = 0;   
                spacing['left'] = 222; 
                break;
        }
        spacing['index'] = 5;
        return spacing;
    }


}