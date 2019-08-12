# ReactNativeLabs
**ReactNative Templates**
* React Native for Web - [link](https://github.com/hmheng/ReactNativeLabs/tree/master/RNWeb)
* React Native for Windows (Javascript) - [link](https://github.com/hmheng/ReactNativeLabs/tree/master/RNWindowsCurrent)
* React Native for Windows (Typescript) - [link](https://github.com/hmheng/ReactNativeLabs/tree/master/RNWindowsCurrentTS)
* React Native for Android, iOS, Windows and Web - [link](https://github.com/hmheng/ReactNativeLabs/tree/master/RNWebWindows)

**ReactXP**
* ReactXP by Microsoft's Skype Team - [link](https://github.com/hmheng/ReactNativeLabs/tree/master/ReactXPTemplate)

**To init new React-Native project (Not ReactXP)**<br/>
```
react-native init <projectname> --version react-native@0.59 --template Typescript
```

**Windows** <br/>
To Add RN for Windows<br/>
Step 1 : In your RN project, add rnpm-plugin-windows package<br/>
If you are using NPM, run<br/>
```
npm install --save-dev rnpm-plugin-windows
```
If you are using Yarn, run<br/>
```
yarn add rnpm-plugin-windows --dev
```

Step 2 : Initialize your React Native Windows project in the project directory by running:<br/>
```
react-native windows
```
<br/>

**Web** <br/>
To Add RN for Web<br/>
Step 1 : In your RN project, add dependencies react-scripts react-dom react-native-web react-art react-router-native react-router-dom<br/>

```
npm install react-scripts react-dom react-native-web react-art react-router-native react-router-dom
```

Step X : Add dependencies - @types/react-router-dom <br/>

```
npm install @types/react-router-dom
```

Step X : Add dependencies - @types/react-router-native <br/>

```
npm install @types/react-router-native
```

Step X : Add following lines in your package.json<br/>

```
// package.json
"scripts": {
    "start-web": "react-scripts start",
    "build-web": "react-scripts build"
},
```
Step X : Remove Jest related packages<br/>

```
// package.json
- "jest": "24.8.0",
- "@types/jest": "24.0.17",
```

Step X : Replace App.tsx in the root folder with following line.

```
// /App.tsx
import React from 'react';
import HybridApp from './src/App';
const App = (props : any) => {
  return (
    <HybridApp />
  );
}
export default App;
```
Step X : Add following index.html to new folder 'public'<br/>

```
<!-- public/index.html -->
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8" />
      <title>React Native (Android, iOS, Windows + Web)</title>
   </head>
   <body>
      <div id="root"></div>
   </body>
</html>
```

Step X : Create a new folder 'src' and add App.tsx file. This will be the first page that will be displayed. <br/>

```
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Router, Switch, Route } from './routing/routing';

const instructions =
  'Press Ctrl+R to reload,\n' +
  'Shift+F10 or shake for dev menu';

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.tsx
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

```

Step X : Under 'src' folder and add index.js and index.css file<br/>

```
// src/index.js
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';

ReactDom.render(<App />, document.getElementById("root"));
```
<br/>

```
/* src/index.css */
#root {
    /* layout adjustments for web app */
    background-color: black;
}
```

Step X : Create 'routing' folder and add two separate files - routing.tsx and routing.web.tsx . This will allow routing to load dom for web project. <br/>

```
/*routing.tsx*/
export {
    NativeRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-native';
```

```
/*routing.web.tsx*/
export {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
```

Step X : Run Web<br/>

```
npm run start-web
```
