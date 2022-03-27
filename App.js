import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import * as React from 'react'
import Header from './components/header/index.js';
import Footer from './components/footer/index.js';
import Body from './components/body/index.js';
import { Provider as PaperProvider } from 'react-native-paper';
import {StoreProvider} from './store'



export default function App() {
  const [list, setList] = React.useState([])
  
  const showTasks = (tasks) => {
    setList(tasks)
  }
  // console.log(list)

  return (
    <StoreProvider>
      <PaperProvider> 
        <View style={styles.container}>
          <Header/>
          <ScrollView>
            <Body/>
          </ScrollView>
          <Footer/>
        </View>
      </PaperProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19196F',
    paddingHorizontal: 20,
    display: 'flex'
    // justifyContent: 'space-between'
  },
});
