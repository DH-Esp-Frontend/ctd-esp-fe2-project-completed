export const locationData1Json = {
  id: 1,
  name: 'Planet 1',
  type: 'Planet',
  dimension: 'Dimension C-137',
  residents: ['https://rickandmortyapi.com/api/character/38'],
  url: 'https://rickandmortyapi.com/api/location/1',
  created: '2017-11-10T12:42:04.162Z'
};

export const locationDataPage1Json = {
  info: {
    count: 7,
    pages: 3,
    next: 'https://rickandmortyapi.com/api/location?page=2',
    prev: null
  },
  results: [
    {
      id: 1,
      name: 'Planet 1',
      type: 'Planet',
      dimension: 'Dimension C-137',
      residents: ['https://rickandmortyapi.com/api/character/38'],
      url: 'https://rickandmortyapi.com/api/location/1',
      created: '2017-11-10T12:42:04.162Z'
    },
    {
      id: 2,
      name: 'Planet 2',
      type: 'Cluster',
      dimension: 'unknown',
      residents: ['https://rickandmortyapi.com/api/character/6'],
      url: 'https://rickandmortyapi.com/api/location/2',
      created: '2017-11-10T13:06:38.182Z'
    },
    {
      id: 3,
      name: 'Planet 3',
      type: 'Space station',
      dimension: 'unknown',
      residents: [
        'https://rickandmortyapi.com/api/character/8',
        'https://rickandmortyapi.com/api/character/14',
        'https://rickandmortyapi.com/api/character/15',
        'https://rickandmortyapi.com/api/character/18'
      ],
      url: 'https://rickandmortyapi.com/api/location/3',
      created: '2017-11-10T13:08:13.191Z'
    }
  ]
};

export const locationDataPage2Json = {
  info: {
    count: 7,
    pages: 3,
    next: 'https://rickandmortyapi.com/api/location/?page=3',
    prev: 'https://rickandmortyapi.com/api/location/?page=1'
  },
  results: [
    {
      id: 4,
      name: 'Planet 4',
      type: 'Planet',
      dimension: 'Dimension C-137',
      residents: ['https://rickandmortyapi.com/api/character/38'],
      url: 'https://rickandmortyapi.com/api/location/1',
      created: '2017-11-10T12:42:04.162Z'
    },
    {
      id: 5,
      name: 'Planet 5',
      type: 'Cluster',
      dimension: 'unknown',
      residents: ['https://rickandmortyapi.com/api/character/6'],
      url: 'https://rickandmortyapi.com/api/location/2',
      created: '2017-11-10T13:06:38.182Z'
    },
    {
      id: 6,
      name: 'Planet 6',
      type: 'Space station',
      dimension: 'unknown',
      residents: [
        'https://rickandmortyapi.com/api/character/8',
        'https://rickandmortyapi.com/api/character/14',
        'https://rickandmortyapi.com/api/character/15',
        'https://rickandmortyapi.com/api/character/18'
      ],
      url: 'https://rickandmortyapi.com/api/location/3',
      created: '2017-11-10T13:08:13.191Z'
    }
  ]
};

export const locationDataPage3Json = {
  info: {
    count: 7,
    pages: 3,
    next: null,
    prev: 'https://rickandmortyapi.com/api/location?page=2'
  },
  results: [
    {
      id: 7,
      name: 'Planet 7',
      type: 'Planet',
      dimension: 'Dimension C-137',
      residents: ['https://rickandmortyapi.com/api/character/38'],
      url: 'https://rickandmortyapi.com/api/location/1',
      created: '2017-11-10T12:42:04.162Z'
    }
  ]
};
