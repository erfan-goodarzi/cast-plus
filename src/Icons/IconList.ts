import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {
  faBook,
  faBriefcase,
  faBrush,
  faBuilding,
  faBurger,
  faChartLine,
  faCube,
  faFaceLaughSquint,
  faGraduationCap,
  faHandshake,
  faHouseLaptop,
  faMasksTheater,
  faMicrophone,
  faMoneyBillTrendUp,
  faMoneyCheckAlt,
  faPaintbrush,
  faPenNib,
  faSchool,
  faShirt,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

export interface IconList {
  icon: IconDefinition;
}

export const iconList: IconList[] = [
  { icon: faBrush },
  { icon: faBook },
  { icon: faPenNib },
  { icon: faShirt },
  { icon: faPaintbrush },
  { icon: faBurger },
  { icon: faUsers },
  { icon: faCube },
  { icon: faBuilding },
  { icon: faBriefcase },
  { icon: faHouseLaptop },
  { icon: faMoneyCheckAlt },
  { icon: faUser },
  { icon: faMoneyBillTrendUp },
  { icon: faMicrophone },
  { icon: faMasksTheater },
  { icon: faHandshake },
  { icon: faChartLine },
  { icon: faFaceLaughSquint },
  { icon: faSchool },
  { icon: faGraduationCap },
];
