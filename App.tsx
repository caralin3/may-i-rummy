import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { RootStack } from './src/navigation';
import { store } from './src/store';
import { SplashLoadingScreen } from './src/screens/SplashLoadingScreen';

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function App() {
  const [appIsReady, setAppIsReady] = React.useState(false);
  const persistor = persistStore(store);

  async function loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./src/appearance/assets/card-back-blue.png'),
      require('./src/appearance/assets/card-back-red.png'),
    ]);

    await Promise.all([...imageAssets]);
  }

  async function startAsync() {
    try {
      await SplashScreen.preventAutoHideAsync();
      await loadAssetsAsync();

      // TODO: Handle state loading
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
    }
  }

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return <AppLoading startAsync={startAsync} onFinish={() => setAppIsReady(true)} onError={console.warn} />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<SplashLoadingScreen />} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
              <RootStack />
            </SafeAreaView>
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
