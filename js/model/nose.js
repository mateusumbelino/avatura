class nose extends shape 
{
    constructor(id = 0)
    {
        let path = 'data/nose/';
        let options = 
        {
            0: 
            {
                'name': null,
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 0; abstração: 0'
            },
            1: 
            {
                'name': 'heart',
                'attribute': 'força: 0; destreza: 0; resistência: 1; sabedoria: 0; abstração: 6; fofura: 4'
            },
            2: 
            {
                'name': 'trunk',
                'attribute': 'força: 0; destreza: 0; resistência: 2; sabedoria: 0; abstração: 6; nereba: 2'
            },
            3: 
            {
                'name': 'pinocchio',
                'attribute': 'força: 0; destreza: 0; resistência: -2; sabedoria: -2; abstração: 3; nereba: 100'
            },
            4: 
            {
                'name': 'pig',
                'attribute': 'força: 2; destreza: 0; resistência: 2; sabedoria: 0; abstração: 1; lama: 5'
            },
            5: 
            {
                'name': 'rudolph',
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 3; abstração: 2; mágico: 4'
            },
        };
        super(id, path, options);
    }

}