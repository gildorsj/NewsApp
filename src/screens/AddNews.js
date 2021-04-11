import React, { Component } from 'react'
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

const initialState = {
  author: '',
  title: '',
  notice: '',
}

class AddNews extends Component {

  state = {
    ...initialState
  }


  save = () => {
    const newNews = {
      author: this.state.author,
      title: this.state.title,
      notice: this.state.notice,
    }
    this.props.onSave && this.props.onSave(newNews)
    this.setState({ ...initialState })
    Alert.alert(this.state.title,'Noticia Salva')
  }

  render() {
    return (
      <Modal
        animationType='slide'
        transparent={true}
        visible={this.props.isVisible}
        onRequestClose={this.props.onCancel}>
        <View style={styles.modalConteiner}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Icon name='arrow-left' size={20} color='#FFF' />
            </TouchableOpacity>
            <Text style={{
              color: '#FFF',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
              Nova notícia
            </Text>
            <TouchableOpacity onPress={this.save}>
              <Icon name='save' size={20} color='#FFF' />
            </TouchableOpacity>
          </View>

          <View style={styles.modalBody}>
            <TextInput
              style={{
                paddingBottom: 0,
                marginBottom: 0,
                color: '#FFF',
                fontSize: 20,
              }}
              placeholder="Título"
              placeholderTextColor={'#5e5f63'}
              onChangeText={title => this.setState({ title })}
              value={this.state.title} />
            <TextInput
              style={{
                paddingTop: 0,
                marginTop: 0,
                color: '#FFF',
                fontStyle: 'italic',
              }}
              placeholder="Autor"
              placeholderTextColor={'#5e5f63'}
              onChangeText={author => this.setState({ author })}
              value={this.state.author} />
            <TextInput
              style={{
                flex: 1,
                textAlign: 'left',
                textAlignVertical: 'top',
                color: '#FFF',
              }}
              multiline={true}
              placeholder="Texto"
              placeholderTextColor={'#5e5f63'}
              onChangeText={notice => this.setState({ notice })}
              value={this.state.notice} />
          </View>
        </View>
      </Modal>
    )
  }
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

export default AddNews