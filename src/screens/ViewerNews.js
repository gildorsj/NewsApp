import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import commonStyles from '../utils/commonStyles'


export default function ViewerNews(props) {

  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [notice, setNotice] = useState('')
  const [editable, setEditable] = useState(false)


  useEffect(() => {
    setAuthor(props.payload.author);
    setTitle(props.payload.title);
    setNotice(props.payload.notice);
  }, [props.payload]);


  const save = () => {
    const newNews = {
      author: author,
      title: title,
      notice: notice,
    }
    props.onBack && props.onBack(newNews)
  }

  const toggleEdit = () => {
    if (editable) {
      Alert.alert(title, 'Notícia salva.')
      save()
    }
    setEditable(!editable)
  }


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isVisible}
      onRequestClose={props.onCancel}>
      <View style={styles.modalConteiner}>
        <View style={styles.modalHeader}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '70%',
              width: '14%',
              borderRadius: 40,
              backgroundColor: commonStyles.colors.opacityBackgroundColor,
            }}
            onPress={() => props.onBack(props.payload)}>
            <Icon name='arrow-left' size={20} color={commonStyles.colors.mainText} />
          </TouchableOpacity>
          <Text style={{
            color: commonStyles.colors.mainText,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
            {editable ? 'Editor de notícia' : 'Visualizador de notícia' } 
          </Text>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '70%',
              width: '14%',
              borderRadius: 40,
              backgroundColor: commonStyles.colors.opacityBackgroundColor
            }}
            onPress={toggleEdit}>
            {editable ? <Icon name='save' size={20} color={commonStyles.colors.mainText} /> : <Icon name='keyboard-o' size={20} color={commonStyles.colors.mainText} />}
          </TouchableOpacity>
        </View>

        <View style={{flex: 0.95}}>
          <ScrollView>
            <TextInput style={{
              paddingBottom: 0,
              marginBottom: 0,
              color: commonStyles.colors.mainText,
              fontSize: 20,
            }}
              editable={editable}
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
              editable={editable}
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
              editable={editable}
              multiline={true}
              placeholder="Texto"
              placeholderTextColor={commonStyles.colors.placeHolder}
              onChangeText={notice => setNotice(notice)}
              value={notice} />
          </ScrollView>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({

  modalConteiner: {
    flex: 1,
    backgroundColor: commonStyles.colors.background,
    paddingHorizontal: '4%',

  },
  modalHeader: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 30,
    paddingHorizontal: '1%',
  },
})

