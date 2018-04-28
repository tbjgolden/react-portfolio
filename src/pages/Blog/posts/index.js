import nicemark from '../../../lib/nicemark.min';

import _2018_01_13 from './2018_01_13.md';
import _2018_04_26 from './2018_04_26.md';

export const posts = [
  {
    title: 'Why I quit Atom and went back to Sublime',
    date: '2018/01/13',
    html: nicemark(_2018_01_13.replace(/^\s*#{1,6} ?([^\n]+)/, ''))
  },
  {
    title: 'It\'s time to get back with your ex (units)',
    date: '2018/04/26',
    html: nicemark(_2018_04_26.replace(/^\s*#{1,6} ?([^\n]+)/, ''))
  }
].sort((a, b) => a.date < b.date);
