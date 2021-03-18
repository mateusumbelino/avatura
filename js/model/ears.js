class ears extends shape 
{
    constructor(id = 0)
    {
        let path = 'data/ear/';
        let options = 
        {
            0: 
            {
                'name': null,
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 0; abstração: 0'
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
            4: 
            {
                'name': 'Planta1',
                'attribute': 'força: 0; destreza: 0; resistência: 1; sabedoria: 0; abstração: 3; saúde: 3'
            },
            5: 
            {
                'name': 'Planta2' 
            },
            6: 
            {
                'name': 'reptil',
                'attribute': 'força: 0; destreza: 1; resistência: 0; sabedoria: 0; abstração: 1; escamas: 2'
            },
            7: 
            {
                'name': 'floppa',
                'attribute': 'força: 2; destreza: 2; resistência: 0; sabedoria: 0; abstração: 2; floppa: 1000'
            },
            8: 
            {
                'name': 'RedMonster',
                'attribute': 'força: 0; destreza: 2; resistência: 0; sabedoria: 0; abstração: 1; pavor: 2'
            },
            9: 
            {
                'name': 'PixelRobot',
                'attribute': 'força: 0; destreza: 0; resistência: 1; sabedoria: 1; abstração: 2; robô: 2'
            },
            10: 
            {
                'name': 'Hairy',
                'attribute': 'força: 1; destreza: 0; resistência: 1; sabedoria: 0; abstração: 1; peludo: 3'
            },
            11: 
            {
                'name': 'Blue',
                'attribute': 'força: 1; destreza: 0; resistência: 0; sabedoria: 1; abstração: 2; azulão: 3'
            },
            12: 
            {
                'name': 'Elf',
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 1; abstração: 1; mágico: 2'
            },
        };
        super(id, path, options);
    }

}