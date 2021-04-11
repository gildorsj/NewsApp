import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import commonStyles from '../utils/commonStyles'

export default function AddNews(props) {

  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [notice, setNotice] = useState('')

  const save = () => {
    const newNews = {
      author: author,
      title: title,
      notice: notice,
    }
    setAuthor('')
    setTitle('')
    setNotice('')
    Alert.alert(newNews.title, 'Notícia salva.')
    props.onSave && props.onSave(newNews)
  }

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={props.isVisible}
      onRequestClose={props.onCancel}>
      <View style={styles.modalConteiner}>
        <View style={styles.modalHeader}>
          <TouchableOpacity
            style={styles.button}
            onPress={props.onCancel}>
            <Icon name='arrow-left' size={20} color={commonStyles.colors.mainText} />
          </TouchableOpacity>
          <Text style={styles.pageTitle}>
            Nova notícia
            </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={save}>
            <Icon name='save' size={20} color={commonStyles.colors.mainText} />
          </TouchableOpacity>
        </View>

        <View style={{flex: 0.95}}>
          <TextInput
            style={{
              paddingBottom: 0,
              marginBottom: 0,
              color: commonStyles.colors.mainText,
              fontSize: 20,
            }}
            placeholder="Título"
            placeholderTextColor={commonStyles.colors.placeHolder}
            onChangeText={title => setTitle(title)}
            value={title} />
          <TextInput
            style={{
              paddingTop: 0,
              marginTop: 0,
              color: commonStyles.colors.mainText,
              fontStyle: 'italic',
            }}
            placeholder="Autor"
            placeholderTextColor={commonStyles.colors.placeHolder}
            onChangeText={author => setAuthor(author)}
            value={author} />
          <TextInput
            style={{
              flex: 1,
              textAlign: 'left',
              textAlignVertical: 'top',
              color: commonStyles.colors.mainText,
            }}
            multiline={true}
            placeholder="Texto"
            placeholderTextColor={commonStyles.colors.placeHolder}
            onChangeText={notice => setNotice(notice)}
            value={notice} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalConteiner: {
    flex: 1,
    backgroundColor: commonStyles.colors.background,
    padding: '4%',
  },
  modalHeader: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 30,
    paddingHorizontal: '1%',
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    width: '14%',
    borderRadius: 40,
    backgroundColor: commonStyles.colors.opacityBackgroundColor,
  },
  pageTitle:{
    color: commonStyles.colors.mainText,
    fontSize: 20,
    fontWeight: 'bold',
  },
})