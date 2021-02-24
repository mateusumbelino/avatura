class ears extends shape 
{
    constructor(id = 0)
    {
        let path = 'data/ear/';
        let options = 
        {
            0: 
            {
                'name': null 
            },
            1: 
            {
                'name': 'PointyEar' 
            },
            2: 
            {
                'name': 'Horn'  
            },
            3: 
            {
                'name': 'HairTuf' 
            },
        };
        super(id, path, options);
    }

}