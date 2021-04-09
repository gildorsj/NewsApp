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

class ViewerNews extends Component {

  state = {
    ...initialState
  }

componentDidMount = () => {
  this.setState ({
    author: this.props.payload.author,
    title: this.props.payload.title,
    notice: this.props.payload.notice,
  })
}
componentWillUnmount = () =>{
  this.setState ({state: initialState})
}

  render() {
    return (

      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.isVisible}
        onRequestClose={this.props.onCancel}>
        <View style={styles.modalConteiner}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Text style={{color:'#FFF'}}>Voltar</Text>
            </TouchableOpacity>
            <Text style={{color:'#FFF'}}>{this.state.title}</Text>
            <TouchableOpacity onPress={this.save}>
              <Text style={{color:'#FFF'}}>  </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.modalBody}>
            <TextInput 
              style={{
                paddingBottom: 0,
                color: '#FFF',
              }}
              editable={false}
              placeholder="Autor"
              placeholderTextColor={'#5e5f63'}
              onChangeText={author => this.setState({ author })}
              value={this.state.author} />
            <TextInput style={{
              paddingBottom: 0,
              color: '#FFF',
            }}
              placeholder="Título"
              placeholderTextColor={'#5e5f63'}
              onChangeText={title => this.setState({ title })}
              value={this.state.title} />
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

export default ViewerNews