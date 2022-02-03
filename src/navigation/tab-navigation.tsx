import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from 'screens/Home'
import ProductDetailSCreen from 'screens/ProductDetail'
import NavTextIcon from './components/NavTextIcon'
import TabBar from './components/TabBar'
import { HomeRoutes } from './routes'

const Tab = createBottomTabNavigator()
const HomeStack = createStackNavigator()

function HomeScreens() {
    return (
        <HomeStack.Navigator initialRouteName={HomeRoutes.Home} screenOptions={{ headerShown: false }}>
          <HomeStack.Screen name={HomeRoutes.Home} component={HomeScreen} />
          <HomeStack.Screen name={HomeRoutes.ProductDetail} component={ProductDetailSCreen} />
        </HomeStack.Navigator>
    )
}

const sampleTabs = [1, 2, 3, 4];

const TabNavigator = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props: any) => <TabBar {...props} />}>
      {sampleTabs.map((tabNumber)=><Tab.Screen
        name={HomeRoutes.HomeInner}
        component={HomeScreens}
        options={{
          tabBarTestID: `tab-home-${tabNumber}`,
          tabBarIcon: ({ color }: any) => <NavTextIcon key={`tab-home-${tabNumber}`} iconValue={tabNumber}/>,
        }}
      />)}
    </Tab.Navigator>
  )
  
  export default TabNavigator