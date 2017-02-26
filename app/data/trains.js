import { colors } from '../styles'

export default [
  {
    name: 'IND Eighth Avenue Line',
    color: colors.subwayBlue,
    textColor: '#FFFFFF',
    trains: [
      {
        name: 'A',
      },
      {
        name: 'C',
      },
      {
        name: 'E',
      },
    ],
  },
  {
    name: 'IND Sixth Avenue Line',
    color: colors.subwayOrange,
    textColor: '#FFFFFF',
    trains: [
      {
        name: 'B',
        color: colors.subwayOrange,
      },
      {
        name: 'D',
        color: colors.subwayOrange,
      },
      {
        name: 'F',
        color: colors.subwayOrange,
      },
      {
        name: 'M',
        color: colors.subwayOrange,
      },
    ],
  },
  {
    name: 'IND Crosstown Line',
    color: colors.subwayLightGreen,
    textColor: '#FFFFFF',
    trains: [
      {
        name: 'G',
        color: colors.subwayLightGreen,
      },
    ],
  },
  {
    name: 'BMT Canarsie Line',
    color: colors.subwayLightGray,
    textColor: '#FFFFFF',
    trains: [
      {
        name: 'L',
        color: colors.subwayLightGray,
      },
    ],
  },
  {
    name: 'BMT Nassau Street Line',
    color: colors.subwayBrown,
    textColor: '#FFFFFF',
    trains: [
      {
        name: 'J',
        color: colors.subwayBrown,
      },
      {
        name: 'Z',
        color: colors.subwayBrown,
      },
    ],
  },
  {
    name: 'BMT Broadway Line',
    color: colors.subwayYellow,
    textColor: '#000000',
    trains: [
      {
        name: 'N',
        color: colors.subwayYellow,
      },
      {
        name: 'Q',
        color: colors.subwayYellow,
      },
      {
        name: 'R',
        color: colors.subwayYellow,
      },
      {
        name: 'W',
        color: colors.subwayYellow,
      },
    ],
  },
  {
    name: 'IRT Broadway – Seventh Avenue Line',
    color: colors.subwayRed,
    textColor: '#FFFFFF',
    trains: [
      {
        name: '1',
        color: colors.subwayRed,
        directions: ['Uptown', 'Downtown'],
        stops: [
          'stop1',
          'stop2',
        ],
      },
      {
        name: '2',
        color: colors.subwayRed,
      },
      {
        name: '3',
        color: colors.subwayRed,
      },
    ],
  },
  {
    name: 'IRT Lexington Avenue Line',
    color: colors.subwayGreen,
    textColor: '#FFFFFF',
    trains: [
      {
        name: '4',
        color: colors.subwayGreen,
      },
      {
        name: '5',
        color: colors.subwayGreen,
      },
      {
        name: '6',
        color: colors.subwayGreen,
      },
    ],
  },
  {
    name: 'IRT Flushing Line',
    color: colors.subwayPurple,
    textColor: '#FFFFFF',
    trains: [
      {
        name: '7',
        color: colors.subwayPurple,
      },
    ],
  },
  {
    name: 'Shuttles',
    color: colors.subwayGray,
    textColor: '#FFFFFF',
    trains: [
      {
        name: 'S',
        color: colors.subwayGray,
      },
    ],
  },
]
