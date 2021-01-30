export const mockLists = {
  items: [
    {
      _id: '5f78411d5cd72c14cc947259',
      name: 'First list',
      cards: [
        {
          _id: '5f788feba88e353396e54dc3',
          name: 'With labels',
          labels: [1, 2, 3, 4, 5],
          description: 'Lorem ipsum description',
          dueDate: '1603651162',
          progressStatus: 'Not Started',
        },
        {
          _id: '5f788feba88e353396e52ec2',
          name: 'With labels',
          labels: [1, 2, 3, 4, 5],
        },
        {
          _id: '5f788feba88e353396e55ec1',
          name: 'Markoooo',
        },
      ],
      __v: 26,
    },
    {
      _id: '5f787eb99d84c024bfa2bacc',
      name: 'Second list',
      cards: [
        {
          _id: '5f788feba88e353396e54dc4',
          name: 'With labels',
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
    { _id: 1, name: 'Whatever', color: 'lightcoral' },
    { _id: 2, name: 'A', color: 'lightblue' },
    { _id: 3, color: 'lightgreen' },
    {
      _id: 4,
      name: 'quick brown fox jumps over a lazy dog',
      color: 'lightgray',
    },
    { _id: 5, name: 'bo problemo', color: 'lightpink' },
  ],
  isFetching: false,
};
