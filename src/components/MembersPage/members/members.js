import basak from '../members/images/basak.png';
import nate from '../members/images/nate.png';
import chibu from '../members/images/chibu.png';
// import aliza from '../members/images/aliza.png';
import anson from '../members/images/anson.png';
import gandhi from '../members/images/gandhi.png';
import jay from '../members/images/jay.png';
// import kelsey from '../members/images/kelsey.png';
import lava from '../members/images/lava.png';
import timothy from '../members/images/tf.png';
import paris from '../members/images/paris.png';
import manny from '../members/images/manny.png';

import { basakSocials } from './membersData/basakSocials';
import { nateSocials } from './membersData/nateSocials';
import { chibuSocials } from './membersData/chibuSocials';
import { timothySocials } from './membersData/timothySocials';
// import alizaSocials from '../members/membersData/alizaSocials.json';
import { ansonSocials } from './membersData/ansonSocials';
import { gandhiSocials } from './membersData/gandhiSocials';
import { lavaSocials } from './membersData/lavaSocials';
import { parisSocials } from './membersData/parisSocials';
import { jaySocials } from './membersData/jaySocials';
import { mannySocials } from './membersData/mannySocials';

const members = [
  {
    name: 'Başak Topal',
    img: basak,
    title: 'Industrial designer, researcher',
    socials: basakSocials,
    cardColor: '#2695CF',
  },
  {
    name: 'NateKodi',
    img: nate,
    title: 'Co-Founder, Artist',
    socials: nateSocials,
    cardColor: '#66B47B',
  },
  {
    name: 'Chibu Ichiban',
    img: chibu,
    title: 'Founder',
    socials: chibuSocials,
    cardColor: '#435AF2',
  },
  {
    name: 'Timothy Ford',
    img: timothy,
    title: 'Artist',
    socials: timothySocials,
    cardColor: '#366F49',
  },
  // {
  //   name: 'Aliza Makhani',
  //   img: aliza,
  //   title: '',
  //   socials: alizaSocials,
  //   cardColor: '#AFA5CA',
  // },
  // { name: "Kelsey Westphal", img: kelsey, title: "", socials:kelseySocials , cardColor: "#D475A5" },
  {
    name: 'Jay',
    img: jay,
    title: 'Business Development',
    socials: jaySocials,
    cardColor: '#7E589E',
  },
  {
    name: 'Anson Goode Jr',
    img: anson,
    title: 'Artist',
    socials: ansonSocials,
    cardColor: '#76BE8D',
  },
  {
    name: 'Manny',
    img: manny,
    title: 'Member',
    socials: mannySocials,
    cardColor: '#02734A',
  },
  {
    name: 'Big Baby Gandhi',
    img: gandhi,
    title: 'Artist',
    socials: gandhiSocials,
    cardColor: '#5574F5',
  },
  {
    name: 'Meltinginlava',
    img: lava,
    title: 'Artist',
    socials: lavaSocials,
    cardColor: '#2BA6D8',
  },
  {
    name: 'Paris Nicole',
    img: paris,
    title: 'Artist',
    socials: parisSocials,
    cardColor: '#D475A5',
  },
];

export default members;
