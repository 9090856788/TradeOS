import {
  createNavigationContainerRef,
  CommonActions,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

function dispatch(action: any) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(action);
  } else {
    console.warn('Navigation not ready');
  }
}

export function navigate(routeName: string, params?: object) {
  dispatch(CommonActions.navigate(routeName, params));
}

export function replace(routeName: string, params?: object) {
  dispatch(StackActions.replace(routeName, params));
}

export function resetAndNavigate(routeName: string) {
  dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: routeName }],
    }),
  );
}

export function goBack() {
  dispatch(CommonActions.goBack());
}

export function push(routeName: string, params?: object) {
  dispatch(StackActions.push(routeName, params));
}

export function getCurrentRoute() {
  return navigationRef.getCurrentRoute();
}
