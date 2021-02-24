class hands extends shape 
{
    constructor(id = 0)
    {
        let path = 'data/hand/';
        let options = 
        {
            0: 
            {
                'name': null 
            },
            1: 
            {
                'name': 'Claw' 
            },
            2: 
            {
                'name': 'Tentacle'  
            },
            3: 
            {
                'name': 'ThumbsUp' 
            },
        };
        super(id, path, options);
    }

}