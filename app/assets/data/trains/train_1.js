import { colors } from '../../../styles';
import stations from '../stations/train_1_stations';

const train_1 = {
  name: '1',
  line: 'IRT Broadway - Seventh Avenue Line',
  color: colors.subwayRed,
  textColor: '#FFFFFF',
  directions: ['Uptown1', 'Downtown1'],
  numCars: 10,
  numDoorsPerCar: 3,
  stations,
}

export default train_1;
