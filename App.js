import React from 'react'
import { View, StatusBar  } from 'react-native'
import Search from './Components/Search'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'

export default class App extends React.Component {
  render() {
  	let persistor = persistStore(Store)
    return (
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#eeefec', }}>
	      <Provider store={Store}>
        	<PersistGate persistor={persistor}>
	          <Navigation />
        	</PersistGate>
	      </Provider>
      </View>
    )
  }
}