class nose extends shape 
{
    constructor(id = 0)
    {
        let path = 'data/nose/';
        let options = 
        {
            0: 
            {
                'name': null 
            },
            1: 
            {
                'name': 'heart',
                'attribute': 'melancia: 8; abóbora: 4', 
            },
            2: 
            {
                'name': 'trunk' 
            },
        };
        super(id, path, options);
    }

}