import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about'


const screens = {
    About : {
        screen : About ,
        navigationOptions:{
            title : 'About Gamezone' ,
        }
    },
   

}
const AboutStack = createStackNavigator(screens , {
    defaultNavigationOptions: {
        headerTintColor: 'black',
        headerStyle: {backgroundColor : 'gray' , }

    }
});

export default AboutStack