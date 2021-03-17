class back extends shape 
{
    constructor(id = 0)
    {
        let path = 'data/back/';
        let options = 
        {
            0: 
            {
                'name': null 
            },
            1: 
            {
                'name': 'tail' 
            },
            2: 
            {
                'name': 'tentacle' 
            },
        };
        super(id, path, options);
    }

}