# ReactNativeLabs
**ReactNative Templates**
* React Native for Web [link](https://github.com/hmheng/ReactNativeLabs/tree/master/RNWeb)
* React Native for Windows (Javascript) [link](https://github.com/hmheng/ReactNativeLabs/tree/master/RNWindowsCurrent)
* React Native for Windows (Typescript) [link](https://github.com/hmheng/ReactNativeLabs/tree/master/RNWindowsCurrentTS)
* React Native for Android, iOS, Windows and Web [link](https://github.com/hmheng/ReactNativeLabs/tree/master/RNWebWindows)


**To init new React-Native project**<br/>
```
react-native init <projectname> --version react-native@0.59 --template Typescript
```

** Windows ** <br/>
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

** Web ** <br/>
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
npm install react-scripts react-dom react-native-web react-art react-router-native react-router-dom
```

Step X : Run Web<br/>

```
npm run start-web
```