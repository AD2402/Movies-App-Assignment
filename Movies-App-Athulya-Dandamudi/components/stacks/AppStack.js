import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Movies from '../screens/Movies';
import Search from '../screens/Search';
import Tv from '../screens/Tv'
import DetailsScreen from '../screens/DetailsScreen';
import { Text } from 'native-base';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";



const TabNavigator = createMaterialTopTabNavigator();
function Home() {
    return (
        <TabNavigator.Navigator>
            <TabNavigator.Screen name="Movies" component={Movies} />
            <TabNavigator.Screen name="Search Results" component={Search} />
            <TabNavigator.Screen name="TV Shows" component={Tv} />
        </TabNavigator.Navigator>
    );
}
const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (<NavigationContainer>
        <Stack.Navigator
            initialRouteName="Index" >

            <Stack.Screen
                name="Movies App"
                component={Home}
                options={{
                    headerStyle: {
                        backgroundColor: "#2c3e50",  
                        
                    },
                    
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 25,
                    },
                }}
            />


            <Stack.Group screenOptions={{ headerShown: true }}>
                <Stack.Screen name="Details" component={DetailsScreen}
                    options={({ route }) => ({ title: route.params.title })} />

            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer >)
}

export default AppStack;