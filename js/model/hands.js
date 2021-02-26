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
                'name': 'enamel' 
            },
            2: 
            {
                'name': 'planta' 
            },
            3: 
            {
                'name': 'ossuda1' 
            },
            4: 
            {
                'name': 'dark3D' 
            },
            5: 
            {
                'name': 'reptil' 
            },
            6: 
            {
                'name': 'ok' 
            },
            7: 
            {
                'name': 'thumbsup' 
            },
            8: 
            {
                'name': 'floppa' 
            },
            9: 
            {
                'name': 'speghetti' 
            }
        };
        super(id, path, options);
    }

}