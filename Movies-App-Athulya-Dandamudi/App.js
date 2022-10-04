import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import Header from './components/layout/Header'
import Search from './components/containers/search'

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      <Search/>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  )
}


