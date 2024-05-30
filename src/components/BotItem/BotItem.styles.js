import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '95%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10.65,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingVertical: 40,
    alignItems: 'center',
    marginBottom: 40,
  },

  title: {
    fontSize: 30,
    marginBottom: 10,
    color: '#FF6347',
  },
  desc: '#494949',
  logo: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
