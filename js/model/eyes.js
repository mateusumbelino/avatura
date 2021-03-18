class eyes extends shape 
{
    constructor(id = 0)
    {
        let path = 'data/eye/';
        let options = 
        {
            0: 
            {
                'name': null,
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 0; abstração: 0'
            },
            1: 
            {
                'name': 'Normal' 
            },
            2: 
            {
                'name': 'Triangle'  
            },
            3: 
            {
                'name': 'Alien' 
            },
            4: 
            {
                'name': 'pilulas',
                'attribute': 'força: 0; destreza: 0; resistência: 1; sabedoria: 0; abstração: 5; narcóticos: 6'
            },
            5: 
            {
                'name': 'flor',
                'attribute': 'força: 0; destreza: 0; resistência: 1; sabedoria: 0; abstração: 2; fofura: 2'
            },
            6: 
            {
                'name': 'ndormir',
                'attribute': 'força: 0; destreza: -2; resistência: 0; sabedoria: 4; abstração: 3; cansaço: 5'
            },
            7: 
            {
                'name': 'fechados',
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 2; abstração: 3; mágico: 5'
            },
            8: 
            {
                'name': 'magico',
                'attribute': 'força: 0; destreza: 3; resistência: 0; sabedoria: 1; abstração: 2; mágico: 4'
            },
            9: 
            {
                'name': 'reptil',
                'attribute': 'força: 0; destreza: 2; resistência: 0; sabedoria: 0; abstração: 1; escamas: 2'
            },
            10: 
            {
                'name': 'floppa',
                'attribute': 'força: 0; destreza: 5; resistência: 0; sabedoria: 3; abstração: 2; floppa: 500'
            },
            11: 
            {
                'name': 'RedMonster',
                'attribute': 'força: 1; destreza: 2; resistência: 0; sabedoria: 0; abstração: 1; pavor: 3'
            },
            12: 
            {
                'name': 'PixelRobot',
                'attribute': 'força: 1; destreza: 0; resistência: 0; sabedoria: 3; abstração: 2; robô: 2'
            },
            13: 
            {
                'name': 'King',
                'attribute': 'força: 0; destreza: 1; resistência: 0; sabedoria: 0; abstração: 1; realeza: 2'
            }
        };
        super(id, path, options);
    }

}