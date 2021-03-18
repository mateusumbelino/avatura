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
        };
        super(id, path, options);
    }

}