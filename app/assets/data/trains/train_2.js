import { colors } from '../../../styles';
import stations from '../stations/train_2_stations';

const train_2 = {
  name: '2',
  line: 'IRT Broadway - Seventh Avenue Line',
  color: colors.subwayRed,
  textColor: '#FFFFFF',
  directions: ['Uptown2', 'Downtown2'],
  numCars: 10,
  numDoorsPerCar: 3,
  stations,
}

export default train_2;
