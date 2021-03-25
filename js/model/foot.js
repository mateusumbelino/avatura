class foot extends shape 
{
    constructor(id = 0)
    {
        let path = 'data/foot/';
        let options = 
        {
            0: 
            {
                'name': null,
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 0; abstração: 0'
            },
            1: 
            {
                'name': 'Rabbit',
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 0; abstração: 0'
            },
            2: 
            {
                'name': 'Snake',
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 0; abstração: 0'
            },
            3: 
            {
                'name': 'Toe',
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 0; abstração: 0'
            },
            4: 
            {
                'name': 'reptil',
                'attribute': 'força: 0; destreza: 2; resistência: 2; sabedoria: 1; abstração: 0; escamas: 3'
            },
            5: 
            {
                'name': 'Timbs',
                'attribute': 'força: 0; destreza: 3; resistência: 3; sabedoria: 6; abstração: 3; timbs: 100'
            },
            6: 
            {
                'name': 'RedMonster',
                'attribute': 'força: 3; destreza: 3; resistência: 0; sabedoria: 0; abstração: 0; pavor: 3'
            },
            7: 
            {
                'name': 'PixelRobot',
                'attribute': 'força: 3; destreza: 0; resistência: 2; sabedoria: 2; abstração: 1; robô: 3'
            },
            8: 
            {
                'name': 'Ballet',
                'attribute': 'força: -2; destreza: 10; resistência: -2; sabedoria: 3; abstração: 0; delicadeza: 10'
            },
        };
        super(id, path, options);
    }

}