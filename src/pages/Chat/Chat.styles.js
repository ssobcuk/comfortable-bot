import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 100,
    height: '100%',
  },
  title: {
    width: '100%',
    fontSize: 40,
    color: '#FF6347',
    fontWeight: '600',
    padding: 20,
  },
  messagesContainer: {
    paddingHorizontal: 20,
    minWidth: '100%',
  },
  scrollViewContainer: {
    paddingBottom: 150,
    zIndex: 100,
  },
  scrollView: {flex: 1},
  close: {position: 'absolute', right: 20, top: 20},
});
