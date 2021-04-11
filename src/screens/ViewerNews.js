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
    Alert.alert(title,'Noticia Salva')
  }

  const toggleEdit = () => {
    if(editable){
      save()
    }
    setEditable (!editable)
  }


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isVisible}
      onRequestClose={props.onCancel}>
      <View style={styles.modalConteiner}>
        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={() => props.onBack(props.payload) }>
            <Icon name='arrow-left' size={20} color='#FFF' />
          </TouchableOpacity>
          <Text style={{
            color: '#FFF',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
            {title}
          </Text>
          <TouchableOpacity onPress={toggleEdit}>
            {editable ? <Icon name='save' size={20} color='#FFF' /> : <Icon name='edit' size={20} color='#FFF' />}


          </TouchableOpacity>
        </View>

        <View style={styles.modalBody}>
          <ScrollView>
            <TextInput style={{
              paddingBottom: 0,
              marginBottom: 0,
              color: '#FFF',
              fontSize: 20,
            }}
              editable={editable}
              placeholder="Título"
              placeholderTextColor={'#5e5f63'}
              onChangeText={title =>setTitle( title )}
              value={title} />
            <TextInput
              style={{
                paddingTop: 0,
                marginTop: 0,
                color: '#FFF',
                fontStyle: 'italic',
              }}
              editable={editable}
              placeholder="Autor"
              placeholderTextColor={'#5e5f63'}
              onChangeText={author => setAuthor( author )}
              value={author} />
            <TextInput
              style={{
                flex: 1,
                textAlign: 'left',
                textAlignVertical: 'top',
                color: '#FFF',
              }}
              editable={editable}
              multiline={true}
              placeholder="Texto"
              placeholderTextColor={'#5e5f63'}
              onChangeText={notice => setNotice( notice )}
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
    backgroundColor: '#202125',
    padding: '4%',
  },
  modalHeader: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 30,
  },
  modalBody: {
    flex: 0.95,
    paddingVertical: '4%'
  },
})

