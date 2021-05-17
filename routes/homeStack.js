import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails'


const screens = {
    Home : {
        screen :Home ,
        navigationOptions:{
            title : 'Gamezone' ,
            headerStyle: {backgroundColor : 'gray'}
        }
    },
    ReviewDetails : {
        screen : ReviewDetails ,
        navigationOptions:{
            title : 'Review Games'
    }
}
}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack)