import {StyleSheet} from 'react-native';

const logoDimensions = 30;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    backgroundColor: '#01579b',
    paddingVertical: 150,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {
    width: logoDimensions,
    height: logoDimensions,
    margin: 10,
  },
  textInput: {
    backgroundColor: 'white',
    width: '50%',
    borderRadius: 5,
    textAlign: 'center',
    color: '#01579b',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {color: '#01579b', fontWeight: 'bold'},
});
