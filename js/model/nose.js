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
                'name': 'heart' 
            },
        };
        super(id, path, options);
    }

}