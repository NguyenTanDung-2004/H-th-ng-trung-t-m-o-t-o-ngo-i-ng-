import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeImage: {
    width: 290,
    height: 290,
    borderRadius: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    color: '#Ffc000',
    marginBottom: 10,
    textAlign: 'left',
    width: 314,
    fontFamily: 'Inter-Bold',
  },
  subtitle: {
    fontSize: 17,
    color: '#FFFFFF',
    marginBottom: 30,
    textAlign: 'left',
    width: 314,
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 15,
    borderRadius: 25,
    marginBottom: 10,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  orText: {
    color: '#FFFFFF',
    marginVertical: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  registerLink: {
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
});

// styles for button in WelcomeScreen
export const welcomeStyles = StyleSheet.create({
  logginButton: {
    width: 318,
    height: 60,
    borderRadius: 60,
    paddingTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 30,

  },
  registerButton: {
    backgroundColor: '#ffc000',
    width: 318,
    height: 60,
    borderRadius: 60,
    paddingTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  }
})