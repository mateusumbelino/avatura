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
                'name': 'pilulas',
                'attribute': 'macarrão: 9; berinjela: 2',
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
            9: 
            {
                'name': 'reptil' 
            },
            10: 
            {
                'name': 'floppa' 
            },
            11: 
            {
                'name': 'RedMonster' 
            },
            12: 
            {
                'name': 'PixelRobot' 
            },
            13: 
            {
                'name': 'King' 
            }
        };
        super(id, path, options);
    }

}