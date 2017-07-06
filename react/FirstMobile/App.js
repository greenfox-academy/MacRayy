import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, FlatList, SectionList, ActivityIndicator, ListView } from 'react-native';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
        />
      </View>
    );
  }
}

// export default class SectionListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <SectionList
//           sections={[
//             {title: 'D', data: ['Devin']},
//             {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//         />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22,
//   },
//   item: {
//     padding: 10,
//     fontSize: 22,
//     height: 44,
//     backgroundColor: '#0075ff',
//     color: '#f7ff55'
//   },
//   sectionHeader: {
//       fontSize: 30
//   }
// })

// export default class FlatListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={[
//             {key: 'Devin'},
//             {key: 'Jackson'},
//             {key: 'James'},
//             {key: 'Joel'},
//             {key: 'John'},
//             {key: 'Jillian'},
//             {key: 'Jimmy'},
//             {key: 'Julie'},
//             {key: 'Devin1'},
//             {key: 'Jackson1'},
//             {key: 'James1'},
//             {key: 'Joel1'},
//             {key: 'John1'},
//             {key: 'Jillian1'},
//             {key: 'Jimmy1'},
//             {key: 'Julie1'},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//         />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22,
//   },
//   item: {
//     padding: 10,
//     fontSize: 22,
//     height: 44,
//     backgroundColor: '#0075ff',
//     color: '#f7ff55'
//   },
// })

// export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//       return (
//         <ScrollView>
//           <Text style={{fontSize:96}}>Scroll me plz</Text>
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Text style={{fontSize:96}}>If you like</Text>
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Text style={{fontSize:96}}>Scrolling down</Text>
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Text style={{fontSize:96}}>What's the best</Text>
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Text style={{fontSize:96}}>Framework around?</Text>
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Image source={require('./favicon.png')} />
//           <Text style={{fontSize:80}}>React Native</Text>
//         </ScrollView>
//     );
//   }
// }

// export default class ButtonBasics extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button!')
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color="#841584"
//           />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="This looks great!"
//           />
//           <Button
//             onPress={this._onPressButton}
//             title="OK!"
//             color="#841584"
//           />
//         </View>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// })

// export default class PizzaTranslator extends Component {
//     constructor (props) {
//         super(props);
//         this.state = {text: ''}
//     }
//
//     render () {
//         return (
//             <View style={{padding: 10}}>
//                 <TextInput
//                     style={{height: 40}}
//                     placeholder="Type here to translate!"
//                     onChangeText={(text) => this.setState({text})}
//                 />
//                 <Text style={{padding: 10, fontSize: 42}}>
//                     {this.state.text.split(' ').map((word) => word && '🍕 and 💩').join(' ')}
//                 </Text>
//             </View>
//         );
//     }
// }

// export default class FlexDimensionsBasics extends Component {
//   render() {
//     return (
//       // Try removing the `flex: 1` on the parent View.
//       // The parent will not have dimensions, so the children can't expand.
//       // What if you add `height: 300` instead of `flex: 1`?
//       <View style={{
//           flex: 1,
//           flexDirection: 'row',
//           justifyContent: 'center',
//           alignItems: 'center'
//       }}>
//         <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}} />
//         <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//         <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }

// export default class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//         <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }

// export default class LotsOfStyles extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigblue}>just bigblue</Text>
//         <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
//         <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });

// class Blink extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {showText: true};
//
//         setInterval(() => {
//             this.setState(previousState => {
//                 return { showText: !previousState.showText };
//             });
//         }, 1000)
//     }
//     render() {
//         let display = this.state.showText ? this.props.text : ' ';
//         return(
//             <Text>{display}</Text>
//         )
//     }
// }
//
// export default class BlinkApp extends Component {
//     render() {
//         return (
//             <View>
//                 <Blink text='I love to blink' />
//                 <Blink text='Yes blinking is so great' />
//                 <Blink text='Why did they ever take this out of HTML' />
//                 <Blink text='Look at me look at me look at me' />
//             </View>
//         );
//     }
// }

// class Greeting extends Component {
//   render() {
//     return (
//       <Text>Hello {this.props.name}!</Text>
//     );
//   }
// }
//
// export default class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Greeting name='Fanni' />
//         <Greeting name='Balint' />
//         <Greeting name='Zsolt' />
//       </View>
//     );
//   }
// }

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Hello world!</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'skyblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
