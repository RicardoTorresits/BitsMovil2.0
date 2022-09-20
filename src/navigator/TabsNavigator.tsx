import React, { useRef,useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { CalendarScreen } from '../screens/CalendarScreen';
import { Image,TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { StackMymood } from './StackMymood';





const TabArr=[
  {route:'Home',IconNameInAvtive:require('../assets/homes.png'),IconNameAvtive:require('../assets/Vector_Bco.png'),component:HomeScreen},
  {route:'MyMood',IconNameInAvtive:require('../assets/sentiment_very_satisfiedd.png'),IconNameAvtive:require('../assets/sentiment_very_satisfied_Bco.png'),component:StackMymood},
  {route:'Contacs',IconNameInAvtive:require('../assets/supervisor_account.png'),IconNameAvtive:require('../assets/supervisor_account_Bco.png'),component:ContactsScreen},
  {route:'Calendar',IconNameInAvtive:require('../assets/calendar_month.png'),IconNameAvtive:require('../assets/calendar_month_Bco.png'),component:CalendarScreen}
]


const Tab = createBottomTabNavigator();

const TabButton = (props:any) =>{
  const {item,onPress,accessibilityState} = props;
  const focused = accessibilityState.selected
  const circleRef = useRef(null);
  
  useEffect(() => {
    if(focused){
      circleRef.current;
    }else{
      circleRef.current;
    }
  }, [focused])

  return(
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
      }}
    >
      <View>
        {
          focused
            ?<Animatable.View
              
              ref={circleRef}
              style={{
                backgroundColor:'#093C5D',
                borderRadius:100,
                width:50,
                height:50,
                justifyContent:'center',
                alignItems:'center',
                alignContent:'center',
                shadowColor: "#000",
                shadowOffset: {
	                width: 0,
	                height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 4.65,
                elevation: 8,
              }}
            >
              <Image
                source={focused? item.IconNameAvtive: item.IconNameInAvtive}
                style={{
                  width:30,
                  height:30
                }}
              />
            
            </Animatable.View>
            :<Animatable.View
              
            ref={circleRef}
            style={{
              borderRadius:100,
              width:50,
              height:50,
              justifyContent:'center',
              alignItems:'center',
              alignContent:'center'
            }}
          >
            <Image
              source={focused? item.IconNameAvtive: item.IconNameInAvtive}
              style={{
                width:30,
                height:30
              }}
            />
          
          </Animatable.View>
        }  
      </View>

    </TouchableOpacity>
  )
  

}

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarStyle:{
          height:83,
          paddingTop:2,
          justifyContent:'center',
          alignItems:'center',
        }
      }}
    >
      {TabArr.map((item,index)=>{
        return(
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel:false,
              tabBarButton: (props) => <TabButton{...props} item={item}/>
            }}
          />
        )
      })}

    </Tab.Navigator>

  )
}