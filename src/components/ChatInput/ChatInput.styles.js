import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 65,
    width: '100%',
    minHeight: 80,
    backgroundColor: '#E5E5E5',
    padding: 10,
    paddingRight: 100,
    justifyContent: 'center',
  },
  input: {
    minHeight: 60,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 18,
    padding: 20,
    backgroundColor: '#fff',
    fontSize: 20,
    color: '#333',
  },
  button: {
    position: 'absolute',
    right: 18,
    bottom: 7,
    padding: 15,
    borderRadius: 10,
  },
  buttonTitle: {color: '#fff', fontWeight: '800'},
});
