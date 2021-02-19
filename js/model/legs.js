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
        };
        super(id, path, options);
        
    }
    
    getFootSpacing()
    {
        let spacing = [];
        switch(this.id) {
            case '1':
                spacing['top'] = 198;   
                spacing['left'] = 75; 
                break;
            case '2':
                spacing['top'] = 192;   
                spacing['left'] = 143; 
                break;
            case '3':
                spacing['top'] = 190;   
                spacing['left'] = 80; 
                break;
        }
        spacing['index'] = 5;
        return spacing;
    }


}