import moment from 'moment';

export function calcTime(timezone) {
  return moment().add(timezone, 'h').format('HH:mm:ss');
}
