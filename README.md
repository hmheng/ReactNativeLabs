# ReactNativeLabs
ReactNative Templates
* React Native for Web [link](https://github.com/hmheng/ReactNativeLabs/tree/master/RNWeb)
* React Native for Windows (Javascript) [link](https://github.com/hmheng/ReactNativeLabs/tree/master/RNWindowsCurrent)
* React Native for Windows (Typescript) [link](https://github.com/hmheng/ReactNativeLabs/tree/master/RNWindowsCurrentTS)
* React Native for Android, iOS, Windows and Web [link](https://github.com/hmheng/ReactNativeLabs/tree/master/RNWebWindows)


To init new React-Native project
```
react-native init <projectname> --version react-native@0.59 --template Typescript
```

To Add RN for Windows
Step 1 : In your RN project, add rnpm-plugin-windows package
If you are using NPM, run
```
npm install --save-dev rnpm-plugin-windows
```
If you are using Yarn, run
```
yarn add rnpm-plugin-windows --dev
```

Step 2 : Initialize your React Native Windows project in the project directory by running:
```
react-native windows
```