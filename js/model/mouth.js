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
            2: 
            {
                'name': 'blackHole' 
            },
            3: 
            {
                'name': 'snake' 
            },
            4: 
            {
                'name': 'teeth' 
            },
        };
        super(id, path, options);
    }

}