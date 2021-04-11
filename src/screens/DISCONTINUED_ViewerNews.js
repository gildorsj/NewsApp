import React, { Component, useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const initialState = {
  author: '',
  title: '',
  notice: '',
  editable: false,
}

class ViewerNews extends Component {

  state = {
    author: '',
    title: '',
    notice: '',
    editable: false,
  }

  // useEffect(() => {
  //   this.setState({
  //     author: this.props.payload.author, 
  //     title: this.props.payload.title,
  //     notice: this.props.payload.notice,
  //   })
  // })


  toggleEdit = () => {
    this.setState({ editable: !this.state.editable })
  }

  save = () => {
    const newNews = {
      author: this.state.author,
      title: this.state.title,
      notice: this.state.notice,
    }
    this.props.onSave && this.props.onSave(newNews)
    //this.setState({ ...initialState })
  }

    render(){
    return (
      <Modal
        animationType="slide"
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
              {this.props.payload.title}
            </Text>
            <TouchableOpacity onPress={this.toggleEdit}>
              {this.state.editable ? <Icon name='save' size={20} color='#FFF' /> : <Icon name='edit' size={20} color='#FFF' />}


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
                editable={this.state.editable}
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
                editable={this.state.editable}
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
                editable={this.state.editable}
                multiline={true}
                placeholder="Texto"
                placeholderTextColor={'#5e5f63'}
                onChangeText={notice => this.setState({ notice })}
                value={this.state.notice} />

            </ScrollView>

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