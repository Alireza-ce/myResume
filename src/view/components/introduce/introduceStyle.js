/* eslint-disable import/prefer-default-export */
/* eslint-disable no-dupe-keys */
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
      opacity: 0.9,
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
    opacity: 0,
    transform: 'translateY(20px) scale(0)',
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
    fontFamily: 'Courgette', //  Iceland
    fontWeight: 'bold',

    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      'font-size': 36,
    },
  },
  name: {
    transform: 'translateY(20px)',
    opacity: 0,
    fontFamily: 'Lobster', //  Iceland
    'font-size': 54,
    paddingLeft: 24,
    color: '#017AB1',
    fontWeight: 'bold',
    marginTop: -42,
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
    transform: 'translateY(20px)',
    opacity: 0,
    // font-family: 'Bubblegum Sans', Pacifico,
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      marginTop: -32,
    },
  },
  contactMail: {
    marginTop: 8,
    transform: 'translateY(20px)',
    opacity: 0,
    color: '#0BA8C3',
    display: 'flex',
    paddingLeft: 24,
  },
  contact: {
    transform: 'translateY(20px)',
    opacity: 0,
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
