class hands extends shape 
{
    constructor(id = 0)
    {
        let path = 'data/hand/';
        let options = 
        {
            0: 
            {
                'name': null,
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 0; abstração: 0'
            },
            1: 
            {
                'name': 'enamel',
                'attribute': 'força: 0; destreza: 2; resistência: 0; sabedoria: 0; abstração: 2; paz: 4'
            },
            2: 
            {
                'name': 'planta',
                'attribute': 'força: 1; destreza: 1; resistência: 0; sabedoria: 0; abstração: 6; saúde: 3'
            },
            3: 
            {
                'name': 'ossuda1',
                'attribute': 'força: -4; destreza: 0; resistência: 0; sabedoria: 0; abstração: 3; magreza: 6'
            },
            4: 
            {
                'name': 'dark3D',
                'attribute': 'força: 1; destreza: 2; resistência: 0; sabedoria: 0; abstração: 4; óleo: 5'
            },
            5: 
            {
                'name': 'reptil',
                'attribute': 'força: 2; destreza: 4; resistência: 0; sabedoria: 0; abstração: 1; escamas: 6'
            },
            6: 
            {
                'name': 'ok',
                'attribute': 'força: 2; destreza: 6; resistência: 0; sabedoria: 0; abstração: 2; beleza: 100'
            },
            7: 
            {
                'name': 'joinha',
                'attribute': 'força: 1; destreza: 3; resistência: 0; sabedoria: 0; abstração: 2; joinha: 6'
            },
            8: 
            {
                'name': 'floppa'
            },
            9: 
            {
                'name': 'speghetti',
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 6; abstração: 5; fome: 10'
            },
            10: 
            {
                'name': 'PixelRobot',
                'attribute': 'força: 2; destreza: 0; resistência: 3; sabedoria: 6; abstração: 3; fome: 10'
            },
            11: 
            {
                'name': 'King2',
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 6; abstração: 2; fome: 10'
            },
            12: 
            {
                'name': 'King' 
            },
            13: 
            {
                'name': 'Olho',
                'attribute': 'força: 0; destreza: 2; resistência: 0; sabedoria: 10; abstração: 5'
            },
        };
        super(id, path, options);
    }

}