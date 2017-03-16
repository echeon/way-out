const stations = [
  {
    name: 'Van Cortlandt Park-242 Street',
    rank: 1,
    borough: 'Bronx',
    crossStreet: 'Broadway',
    accessibility: false,
    closed: false,
    subwayTransfers: [],
  },
  {
    name: '238 Street',
    borough: 'Bronx',
    crossStreet: 'Broadway',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: '231 Street',
    borough: 'Bronx',
    crossStreet: 'Broadway',
    accessibility: true,
    closed: false,
    subwayTransfers: []
  },
  {
    name: 'Marble Hill-225 Street',
    borough: 'Manhattan',
    crossStreet: 'Broadway',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: '215 Street',
    borough: 'Manhattan',
    crossStreet: '10 Avenue',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: '207 Street',
    borough: 'Manhattan',
    crossStreet: '10 Avenue',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: 'Dyckman Street',
    borough: 'Manhattan',
    crossStreet: 'Nagle Avenue',
    accessibility: true,
    accessibilityInformation: 'Southbound Only',
    closed: false,
    subwayTransfers: []
  },
  {
    name: '191 Street',
    borough: 'Manhattan',
    crossStreet: 'Saint Nicholas Avenue',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: '181 Street',
    borough: 'Manhattan',
    crossStreet: 'Saint Nicholas Avenue',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: '168 Street-Washington Heights',
    borough: 'Manhattan',
    crossStreet: 'Broadway',
    accessibility: false,
    closed: false,
    subwayTransfers: ['A', 'C']
  },
  {
    name: '157 Street',
    borough: 'Manhattan',
    crossStreet: 'Broadway',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: '145 Street',
    borough: 'Manhattan',
    crossStreet: 'Broadway',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: '137 Street-City College',
    borough: 'Manhattan',
    crossStreet: 'Broadway',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: '125 Street',
    borough: 'Manhattan',
    crossStreet: 'Bradway',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: '116 Street-Columbia University',
    borough: 'Manhattan',
    crossStreet: 'Broadway',
    accessibility: false,
    closed: false,
    subwayTransfers: ['Airport']
  },
  {
    name: 'Cathedral Parkway (110 Street)',
    borough: 'Manhattan',
    crossStreet: 'Broadway',
    accessibility: false,
    closed: false,
    subwayTransfers: ['Airport']
  },
  {
    name: '103 Street',
    borough: 'Manhattan',
    crossStreet: 'Broadway',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: '96 Street',
    borough: 'Manhattan',
    crossStreet: 'Broadway',
    accessibility: true,
    closed: false,
    subwayTransfers: ['2', '3']
  },
  {
    name: '86 Street',
    borough: 'Manhattan',
    crossStreet: 'Broadway',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: '79 Street',
    borough: 'Manhattan',
    crossStreet: 'Broadway',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: '72 Street',
    borough: 'Manhattan',
    crossStreet: 'Broadway',
    accessibility: true,
    closed: false,
    subwayTransfers: ['2', '3']
  },
  {
    name: '66 Street-Lincoln Center',
    borough: 'Manhattan',
    crossStreet: 'Broadway',
    accessibility: true,
    closed: false,
    subwayTransfers: []
  },
  {
    name: '59 Street-Columbus Circle',
    borough: 'Manhattan',
    crossStreet: 'Broadway',
    accessibility: true,
    closed: false,
    subwayTransfers: ['2', 'A', 'C', 'B', 'D']
  },
  {
    name: '50 Street',
    borough: 'Manhattan',
    crossStreet: 'Broadway',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: 'Times Square-42 Street',
    borough: 'Manhattan',
    crossStreet: '7 Avenue-Broadway',
    accessibility: true,
    accessibilityInformation: 'except A, C, E, S',
    closed: false,
    subwayTransfers: ['2', '3', 'A', 'C', 'E', 'N', 'Q', 'R', 'W', 'S', '7', 'Airport']
  },
  {
    name: '34 Street-Penn Station',
    borough: 'Manhattan',
    crossStreet: '7 Avenue',
    accessibility: true,
    closed: false,
    subwayTransfers: ['2', '3', 'Airport']
  },
  {
    name: '28 Street',
    borough: 'Manhattan',
    crossStreet: '7 Avenue',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: '23 Street',
    borough: 'Manhattan',
    crossStreet: '7 Avenue',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: '18 Street',
    borough: 'Manhattan',
    crossStreet: '7 Avenue',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: '14 Street',
    borough: 'Manhattan',
    crossStreet: '7 Avenue',
    accessibility: false,
    closed: false,
    subwayTransfers: ['2', '3', 'F', 'M', 'L']
  },
  {
    name: 'Christopher Street-Sheridan Square',
    borough: 'Manhattan',
    crossStreet: '7 Avenue South',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: 'Houston Street',
    borough: 'Manhattan',
    crossStreet: 'Varick Street',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: 'Canal Street',
    borough: 'Manhattan',
    crossStreet: 'Varick Street',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: 'Franklin Street',
    borough: 'Manhattan',
    crossStreet: 'Varick Street',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: 'Chambers Street',
    borough: 'Manhattan',
    crossStreet: 'West Broadway',
    accessibility: true,
    closed: false,
    subwayTransfers: ['2', '3']
  },
  {
    name: 'Cortlandt Street',
    borough: 'Manhattan',
    crossStreet: 'West Broadway',
    accessibility: false,
    closed: true,
    subwayTransfers: []
  },
  {
    name: 'Rector Street',
    borough: 'Manhattan',
    crossStreet: '',
    accessibility: false,
    closed: false,
    subwayTransfers: []
  },
  {
    name: 'South Ferry',
    borough: 'Manhattan',
    crossStreet: '',
    accessibility: false,
    closed: false,
    subwayTransfers: ["N", "R", "W"]
  },
]

export default stations
