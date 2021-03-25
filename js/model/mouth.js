class mouth extends shape 
{
    constructor(id = 0)
    {
        let path = 'data/mouth/';
        let options = 
        {
            0: 
            {
                'name': null,
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 0; abstração: 0'
            },
            1: 
            {
                'name': 'anime',
                'attribute': 'força: 1; destreza: 0; resistência: 0; sabedoria: 0; abstração: 1'
            },
            2: 
            {
                'name': 'blackHole',
                'attribute': 'força: 4; destreza: 0; resistência: 0; sabedoria: 0; abstração: 6; sucção: 6'
            },
            3: 
            {
                'name': 'snake',
                'attribute': 'força: 2; destreza: 0; resistência: 0; sabedoria: 0; abstração: 2; veneno: 4'
            },
            4: 
            {
                'name': 'teeth',
                'attribute': 'força: 5; destreza: 0; resistência: 0; sabedoria: 0; abstração: 3; dentão: 6'
            },
            5: 
            {
                'name': 'grampeador',
                'attribute': 'força: 2; destreza: 0; resistência: 2; sabedoria: 2; abstração: 5; grampo: 10'
            },
        };
        super(id, path, options);
    }

}