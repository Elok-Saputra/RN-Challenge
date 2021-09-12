import Colors from './Colors';


export default [
    {
        id: 1,
        name: 'Plan a Trip',
        color: Colors.default.blue,
        todos: [
            {
                title: 'Book Flight',
                completed: false,
            },
            {
                title: 'Passport Check',
                completed: true,
            },
            {
                title: 'Reserve Hotel Room',
                completed: true,
            },
            {
                title: 'Pack Luggage',
                completed: false,
            },
        ]
    },
    {
        id: 2,
        name: 'Errands',
        color: Colors.default.purple,
        todos: [
            {
                title: 'Buy Milk',
                completed: false,
            },
            {
                title: 'Buy Meat',
                completed: true,
            },
            {
                title: 'But Parfume',
                completed: true,
            },
        ]
    },
    {
        id: 3,
        name: 'Study',
        color: Colors.default.green,
        todos: [
            {
                title: 'FireBase',
                completed: false,
            },
            {
                title: 'React JS',
                completed: true,
            },
            {
                title: 'React Native',
                completed: true,
            },
            {
                title: 'JavaScript',
                completed: true,
            },
            {
                title: 'HTML & CSS',
                completed: true,
            },
        ]
    },
    {
        id: 4,
        name: 'Build Portfolio Website',
        color: Colors.default.peach,
        todos: [
            {
                title: 'Deploy',
                completed: false,
            },
            {
                title: 'Build Project',
                completed: false,
            },
            {
                title: 'Set up environment',
                completed: true,
            },
            {
                title: 'Project',
                completed: true,
            },
            {
                title: 'Video tutorial',
                completed: true,
            },
        ]
    },
]