import { AppRegistry, Platform } from 'react-native'
import App from './components/App'
import { Config } from './utils/config'

// register the app
AppRegistry.registerComponent('example', () => App)

// register the web
if (Platform.OS === Config.os.web) {
  AppRegistry.runApplication('example', {
    rootTag: document.getElementById(Config.web.root),
  })
}
