import * as React from 'react'
import { View, Text, TextInput } from 'react-native'
// import { ApolloProvider } from 'react-apollo'
// import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
// import Router from '../Router'
// import { UserProvider } from '../../screens/Login/UserContext'
// import { client } from '../../utils/apollo'

const App = () => {
  return (
    <View
      style={{ width: '80%', height: '100%', alignContent: 'center', justifyContent: 'center' }}
    >
      <View style={{ width: '100%', alignContent: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>Hello World</Text>
        <TextInput
          value={'Test'}
          style={{ height: '30%', borderWidth: 1, borderColor: 'blue', borderRadius: 5 }}
        />
      </View>
    </View>
  )
}

export default App
