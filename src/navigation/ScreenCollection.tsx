import SplashScreen from '../screens/onboarding/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import HomeScreen from '../screens/onboarding/HomeScreen';

export const authStack = [
  {
    name: 'SplashScreen',
    component: SplashScreen,
  },
  {
    name: 'LoginScreen',
    component: LoginScreen,
  },
  {
    name: 'RegisterScreen',
    component: RegisterScreen,
  },
];

export const dashBoardStack = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
  },
];

export const mergeedStack = [...authStack, ...dashBoardStack];
