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
            4: 
            {
                'name': 'enamel' 
            },
            5: 
            {
                'name': 'planta' 
            },
            6: 
            {
                'name': 'ossuda1' 
            },
            7: 
            {
                'name': 'dark3D' 
            },
        };
        super(id, path, options);
    }

}