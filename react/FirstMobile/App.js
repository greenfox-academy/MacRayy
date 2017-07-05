import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
      }}>
        <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

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
