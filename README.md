# Expense Tracker (Sample)

This is a sample expense tracker. I used these technology to develop this project
  - React Native
  - React Navigation
  - React Redux
  - React Redux Persist
  - React Redux Saga
  - React I18 Next
  - Some cool feature like: Context, hooks, state and etc

### Note
Because I don't have a backend for this project I follow simulate backend API and API call approach! For some taxonomy like categories and types, I used static data and read the JSON file. For form POST data I used redux and redux-persist to hold the data.
I tried to implement many aspect of application development in React Native likes  multi themes, multi-language, context, and hooks.
I developed some pure and custom components like Text-Input Select-Box, etc. In addition I create Category and Type selector components for concern separator in this project because you only expect mission delivered to the component. for example, we expect a list of category and select one of an item in the category selector and we don't care about how that component acquires data and show them.

### Installation
```sh
$ npm install
```

### Run for IOS
```sh
$ cd ios
$ pod install
$ cd ..
$ npm run ios
```

### Run for Android
Connect your device or run an Android emulator so:
```sh
$ npm run android
```

### Preview