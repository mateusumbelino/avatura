class mouth extends shape 
{
    constructor(id = 0)
    {
        let path = 'data/mouth/';
        let options = 
        {
            0: 
            {
                'name': null 
            },
            1: 
            {
                'name': 'anime' 
            },
        };
        super(id, path, options);
    }

}