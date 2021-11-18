import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Pages from '../pages';
import {Provider} from 'react-redux';
import {store} from '../redux';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={Pages.SplashScreenPages}
            options={{
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTitle: null,
              headerShown: null,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Pages.HomePages}
            options={{
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTitle: null,
              headerShown: null,
            }}
          />
          <Stack.Screen
            name="Tentang"
            component={Pages.TentangPages}
            options={{
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTitle: null,
              headerShown: null,
            }}
          />
          <Stack.Screen
            name="Materi"
            component={Pages.MateriPages}
            options={{
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTitle: null,
              headerShown: null,
            }}
          />
          <Stack.Screen
            name="ContohSoal"
            component={Pages.ContohSoalPages}
            options={{
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTitle: null,
              headerShown: null,
            }}
          />
          <Stack.Screen
            name="PolaBilangan"
            component={Pages.PolaBilanganPages}
            options={{
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTitle: null,
              headerShown: null,
            }}
          />
          <Stack.Screen
            name="BarisanAritmatika"
            component={Pages.BarisanAritmatikaPages}
            options={{
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTitle: null,
              headerShown: null,
            }}
          />
          <Stack.Screen
            name="DeretAritmatika"
            component={Pages.DeretAritmatikaPages}
            options={{
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTitle: null,
              headerShown: null,
            }}
          />
          <Stack.Screen
            name="BarisGeometri"
            component={Pages.BarisanGeometriPages}
            options={{
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTitle: null,
              headerShown: null,
            }}
          />
          <Stack.Screen
            name="Quis"
            component={Pages.QuisPages}
            options={{
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTitle: null,
              headerShown: null,
            }}
          />
          <Stack.Screen
            name="Questions"
            component={Pages.QuestionsPages}
            options={{
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTitle: null,
              headerShown: null,
            }}
          />
          <Stack.Screen
            name="Nilai"
            component={Pages.NilaiPages}
            options={{
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTitle: null,
              headerShown: null,
            }}
          />
          <Stack.Screen
            name="PolaBilanganContohSoal"
            component={Pages.PolaBilanganContohSoalPages}
            options={{
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTitle: null,
              headerShown: null,
            }}
          />
          <Stack.Screen
            name="BarisanAritmatikaContohSoal"
            component={Pages.BarisanAritmatikaContohSoalPages}
            options={{
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTitle: null,
              headerShown: null,
            }}
          />
          <Stack.Screen
            name="DeretAritmatikaContohSoal"
            component={Pages.DeretAritmatikaContohSoalPages}
            options={{
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTitle: null,
              headerShown: null,
            }}
          />
          <Stack.Screen
            name="BarisGeometriContohSoal"
            component={Pages.BarisGeometriContohSoalPages}
            options={{
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTitle: null,
              headerShown: null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Navigator;
