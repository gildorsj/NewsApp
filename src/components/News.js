import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import commonStyles from '../utils/commonStyles'

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
    borderColor: commonStyles.colors.borderLineColor,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: commonStyles.colors.cardBackgroundColor,
    padding: '2.5%',
    marginHorizontal: '3%',
    marginBottom: '5%',
    borderRadius: 7,

  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: commonStyles.colors.mainText,

  },
  author: {
    fontSize: 12,
    fontStyle: 'italic',
    color: commonStyles.colors.mainText,
  },
  notice: {
    fontSize: 12,
    color: commonStyles.colors.mainText,
  },
})