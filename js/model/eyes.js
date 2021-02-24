class eyes extends shape 
{
    constructor(id = 0)
    {
        let path = 'data/eye/';
        let options = 
        {
            0: 
            {
                'name': null 
            },
            1: 
            {
                'name': 'Normal' 
            },
            2: 
            {
                'name': 'Triangle'  
            },
            3: 
            {
                'name': 'Alien' 
            },
        };
        super(id, path, options);
    }

}