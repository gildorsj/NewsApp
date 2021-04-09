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
          <Text style={styles.desc}>{props.title} por {props.author}</Text>
          <Text style={styles.date}>{props.notice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#5e5f63',
    borderWidth: 2,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#202125',
    padding: '5%',
    marginHorizontal: '4%',
    marginBottom: '3%',
    borderRadius: 7,

  },
  desc: {
    fontSize: 15,
    color: '#FFF',

  },
  date: {
    fontSize: 12,
    color: '#FFF',

  },
})