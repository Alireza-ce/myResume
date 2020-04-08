import { nominalTypeHack } from 'prop-types';
import Image from './wall.jpg';
import PhoneBackground from './wall_phone.png';

export const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
    background: '#F8F8F8',
  },
  backImg: {
    display: 'none',
  },
  backInfo: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'none',
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      display: 'block',
      opacity: .9,
    },
  },
  card: {

    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 100,
    'z-index': 2,
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      marginTop: 32,
      paddingLeft: 0,
    },
  },
  content: {
    position: 'relative',
    padding: 16,
    borderRadius: '4px',
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      marginTop: 32,
    },

  },
  imageDiv: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      marginTop: 16,
      marginBottom: 16,

    },
  },
  image: {
    width: '60%',
    zIndex: 1,
  },
  container: {
    display: 'grid',
    position: 'relative',
    width: '100%',
    'grid-template-columns': '50% 50%',
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      'grid-template-columns': '100%',
    },
  },

  hello: {
    marginTop: 12,
    'font-size': 45,
    paddingLeft: 16,
    color: '#0BA8C3',
    opacity: 0,
    y: -10,
    fontFamily: 'Audiowide', //  Iceland
    fontWeight: 'bold',
    textShadow: '0 0 65px #fff, 0 0 3px #228DFF',
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      'font-size': 36,
    },
  },
  name: {
    fontFamily: 'Iceland', //  Iceland
    'font-size': 54,
    paddingLeft: 24,
    color: '#017AB1',
    fontWeight: 'bold',
    marginTop: -42,
    textShadow: '0 0 1px #fff, 0 0px #fff, 0 0 1px #fff, 0 0 2px #228DFF, 0 0px #228DFF, 0 0px #228DFF, 0 0px #228DFF, 0 0px #228DFF',
    ['@media (max-width:1000px)']: { // eslint-disable-line no-useless-computed-key
      'font-size': 42,
    },
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      'font-size': 32,
      marginTop: -28,
    },

  },
  developer: {
    fontSize: 16,
    fontFamily: 'Lora',
    marginTop: -42,
    paddingLeft: 24,
    color: '#0BA8C3',
    fontWeight: 'bold',
    // font-family: 'Bubblegum Sans', Pacifico,
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      marginTop: -32,
    },
  },
  contactMail: {
    marginTop: 8,
    color: '#0BA8C3',
    display: 'flex',
    paddingLeft: 24,
  },
  contact: {
    marginTop: 42,
    display: 'flex',
    color: '#0BA8C3',
    paddingLeft: 24,
  },
  info: {
    fontFamily: 'Lora',
    paddingLeft: 8,
    color: 'white',
    color: '#0BA8C3',
    fontWeight: 'bold',
  },
};
