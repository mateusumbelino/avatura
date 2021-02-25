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
            4: 
            {
                'name': 'pilulas' 
            },
            5: 
            {
                'name': 'flor' 
            },
            6: 
            {
                'name': 'ndormir' 
            },
            7: 
            {
                'name': 'fechados' 
            },
            8: 
            {
                'name': 'magico' 
            },
        };
        super(id, path, options);
    }

}