class back extends shape 
{
    constructor(id = 0)
    {
        let path = 'data/back/';
        let options = 
        {
            0: 
            {
                'name': null,
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 0; abstração: 0'
            },
            1: 
            {
                'name': 'tail',
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 0; abstração: 3; maléfico: 2'
            },
            2: 
            {
                'name': 'tentacle',
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 0; abstração: 0; tentaculo: 100'
            },
            3: 
            {
                'name': 'devil',
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 0; abstração: 0; maléfico: 4' 
            },
            4: 
            {
                'name': 'insect',
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 0; abstração: 0; zumbido: 100'
            },
            5: 
            {
                'name': 'wing',
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 0; abstração: 0; angelical: 20'
            },
        };
        super(id, path, options);
    }

}