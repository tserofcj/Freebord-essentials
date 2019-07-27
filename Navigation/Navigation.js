import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'
import Search from '../Components/Search'
import Acquis from '../Components/Acquis'
import nonAcquis from '../Components/nonAcquis'

const SearchStackNavigator = createStackNavigator({
  'All': {
    screen: Search,
    navigationOptions: {
      title: 'Freebord Essentials'
    }
  },
})

const TabNavigator = createMaterialTopTabNavigator({
  All: {
    screen: Search
  },
  'To learn': {
    screen: nonAcquis
  },
  Done: {
    screen: Acquis
  }
},
{
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: '#7a7a7a',
    activeBackgroundColor: '#DDDDDD',
    inactiveBackgroundColor: '#FFFFFF',
    labelStyle: {
      fontSize: 12,
    },
    tabStyle: {
      justifyContent: 'center'
    },
    showIcon: false,
    style: {
      backgroundColor: '#FFFFFF',
    },
  }
})

export default createAppContainer(TabNavigator)