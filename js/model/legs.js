class legs extends shape 
{

    constructor(id = 0)
    {
        let path = 'data/leg/';
        let options = 
        {
            0: 
            {
                'name': null,
                'attribute': 'força: 0; destreza: 0; resistência: 0; sabedoria: 0; abstração: 0'
            },
            1: 
            {
                'name': 'CurvedLeft' 
            },
            2: 
            {
                'name': 'Straight'  
            },
            3: 
            {
                'name': 'CurvedRight' 
            },
            4: 
            {
                'name': 'ReptilLeg',
                'attribute': 'força: 0; destreza: 2; resistência: 2; sabedoria: 0; abstração: 1; escamas: 3'
            },
            5: 
            {
                'name': 'Jeans',
                'attribute': 'força: 0; destreza: -3; resistência: 2; sabedoria: 0; abstração: 1; jeans: 7'
            },
            6: 
            {
                'name': 'Microphone',
                'attribute': 'força: 0; destreza: 2; resistência: 2; sabedoria: 0; abstração: 3; som: 10'
            },
            7: 
            {
                'name': 'Pasta',
                'attribute': 'força: 0; destreza: 3; resistência: -1; sabedoria: 5; abstração: 6; fome: 6'
            },
            8: 
            {
                'name': 'Subway',
                'attribute': 'força: 0; destreza: -2; resistência: -2; sabedoria: 0; abstração: 6; fome: 20'
            },
            9: 
            {
                'name': 'Spider',
                'attribute': 'força: 0; destreza: 3; resistência: 0; sabedoria: 0; abstração: 3; pavor: 20' 
            },
            10: 
            {
                'name': 'Toothpick',
                'attribute': 'força: 0; destreza: 2; resistência: -30; sabedoria: 2; abstração: 5; fragil: 20'
            },
            11: 
            {
                'name': 'RedMonster',
                'attribute': 'força: 2; destreza: 3; resistência: 2; sabedoria: 0; abstração: 1; pavor: 6'
            },
            12: 
            {
                'name': 'PixelRobot',
                'attribute': 'força: 0; destreza: 1; resistência: 2; sabedoria: 0; abstração: 2; robô: 3'
            },
        };
        super(id, path, options);
        
    }
    
    getFootSpacing()
    {
        let spacing = [];
        switch (this.id) {
            case 1:
                spacing['top'] = 139;   
                spacing['left'] = 55; 
                break;
            case 2:
                spacing['top'] = 133;   
                spacing['left'] = 120; 
                break;
            case 3:
                spacing['top'] = 130;   
                spacing['left'] = 53; 
                break;
            case 4:
                spacing['top'] = 60;   
                spacing['left'] = 185; 
                break;
            case 5:
                spacing['top'] = 125;   
                spacing['left'] = 120; 
                break;
            case 6:
                spacing['top'] = 111;   
                spacing['left'] = 155; 
                break;
            case 7:
                spacing['top'] = 100;   
                spacing['left'] = 135; 
                break;
            case 8:
                spacing['top'] = 130;   
                spacing['left'] = 165; 
                break;
            case 9:
                spacing['top'] = 95;   
                spacing['left'] = 115; 
                break;
            case 10:
                spacing['top'] = 133;   
                spacing['left'] = 125; 
                break;
            case 11: //Red Monster
                spacing['top'] = 140;   
                spacing['left'] = 115; 
                break;
            case 12: //PixelRobot   
                spacing['top'] = 23;   
                spacing['left'] = 120; 
                break;
        }
        spacing['index'] = 5;
        return spacing;
    }


}