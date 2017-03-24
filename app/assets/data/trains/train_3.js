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

export default train_3;
