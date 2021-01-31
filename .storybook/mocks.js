export const mockLists = {
  items: [
    {
      _id: '5f78411d5cd72c14cc947259',
      name: 'Backlog',
      cards: [
        {
          _id: '5f788feba88e353396e54dc3',
          name: 'Important task',
          labels: [1, 2, 3, 4, 5],
          description: 'Really important task',
          dueDate: '1603651162',
          progressStatus: 'Not Started',
        },
        {
          _id: '5f788feba88e353396e52ec2',
          name: 'Fix feature bug',
          labels: [1, 2, 3, 4, 5],
        },
        {
          _id: '5f788feba88e353396e55ec1',
          name: 'Test the app',
        },
      ],
      __v: 26,
    },
    {
      _id: '5f787eb99d84c024bfa2bacc',
      name: 'Current',
      cards: [
        {
          _id: '5f788feba88e353396e54dc4',
          name: 'Implement a feature',
          labels: [1, 2, 3, 4, 5],
          description: 'Lorem ipsum description',
          dueDate: '1603651162',
          progressStatus: 'Not Started',
        },
      ],
      __v: 0,
    },
  ],
  isFetching: false,
};

export const mockLabels = {
  items: [
    { _id: 1, name: 'Backend', color: '#61bd4f' },
    { _id: 2, name: 'Frontend', color: '#f2d600' },
    { _id: 3, color: '#ff9f1a' },
    {
      _id: 4,
      name: 'Middleware',
      color: '#eb5a46',
    },
    { _id: 5, name: 'Test', color: '#c377e0' },
  ],
  isFetching: false,
};