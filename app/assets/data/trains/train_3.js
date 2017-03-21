import { colors } from '../../../styles';
import stations from '../stations/train_3_stations';

const train_3 = {
  name: '3',
  line: 'IRT Broadway - Seventh Avenue Line',
  color: colors.subwayRed,
  textColor: '#FFFFFF',
  directions: ['Uptown3', 'Downtown3'],
  numCars: 10,
  numDoorsPerCar: 3,
  stations,
}
// const train_3 = {
//   name: '3',
//   directions: ['Uptown3', 'Downtown3'],
//   numCars: 10,
//   numDoorsPerCar: 3,
//   stations: [
//     {
//       name: 'Station One',
//       destinations: [
//         {
//           name: 'transfer to 4 train',
//           uptown: [3, 2],
//           downtown: [8, 2],
//         }
//       ],
//
//
//       // I need information
//       // - which direction is this?
//       // - which door to use
//       // - destination
//     },
//     {
//       name: 'Station Two',
//     }
//   ],
// }

export default train_3;
