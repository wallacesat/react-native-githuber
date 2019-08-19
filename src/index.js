import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import '~/config/ReactotronConfig';

import Routes from './routes';

const App = () => (
  // <View style={styles.container}>
  //   <ScrollView>
  //     <View style={styles.card}>
  //       <Text style={styles.cardTitle}>Hellooo Guys!</Text>
  //     </View>
  //   </ScrollView>
  // </View>
  <Routes />
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#a6dd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    minWidth: '85%',
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 6,
    marginTop: 80,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default App;
