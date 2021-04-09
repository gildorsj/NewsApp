import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native'

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
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isVisible}
        onRequestClose={this.props.onCancel}>
        <View style={styles.modalConteiner}>
          <Text style={styles.modalHeader}>Nova notícia</Text>
          <TextInput style={styles.modalInput}
            placeholder="Autor"
            onChangeText={author => this.setState({ author })}
            value={this.state.author} />
          <TextInput style={styles.modalInput}
            placeholder="Titulo"
            onChangeText={title => this.setState({ title })}
            value={this.state.title} />
          <TextInput style={styles.modalInput}
            placeholder="Texto"
            onChangeText={notice => this.setState({ notice })}
            value={this.state.notice} />
          <View style={styles.buttons}>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Text style={styles.button}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.save}>
              <Text style={styles.button}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  header: {
    flex: 0.1,
    marginHorizontal: '4%',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  headerBar: {
    flexDirection: 'row',
    paddingHorizontal: '4%',
    borderRadius: 7,
    backgroundColor: 'grey',
    height: '70%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  boby: {
    flex: 0.9,
  },
  modalConteiner: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  modalHeader: {

  },
  modalInput: {

  },
})

export default AddNews