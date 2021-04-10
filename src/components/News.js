import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,

} from 'react-native'

export default props => {
  return (
    <TouchableOpacity onPress={props.onPress} onLongPress={props.onLongPress}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{props.title}</Text><Text style={styles.author}>por {props.author}{'\n'}</Text>
          
          <Text style={styles.notice}>{props.notice.substr(0, 100)}...</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#5e5f63',
    borderWidth: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#202125',
    padding: '5%',
    marginHorizontal: '4%',
    marginBottom: '3%',
    borderRadius: 7,

  },
  title: {
    fontSize: 15,
    color: '#FFF',

  },
  author: {
    fontSize: 12,
    color: '#FFF',
  },
  notice: {
    fontSize: 12,
    color: '#FFF',
  },
})