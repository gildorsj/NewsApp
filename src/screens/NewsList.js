import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-community/async-storage'
import News from '../components/News'
import AddNews from './AddNews'
import ViewerNews from './ViewerNews'


const initialState = {
  search: '',
  payload: [],
  news: [],
  addNewsModal: false,
  viewerNewsModal: false,
}

class NewsList extends Component {

  state = {
    ...initialState
  }

  componentDidMount = async () => {
    const stateString = await AsyncStorage.getItem('newsState')
    const state = JSON.parse(stateString) || initialState
    this.setState(state)
  }

  saveOnStorage = () => {
    AsyncStorage.setItem('newsState', JSON.stringify(this.state))
  }
  
  openNews = payload => {
    this.setState({ payload,  viewerNewsModal: true })
  }

  addNews = newNews => {
    if (!newNews.author || !newNews.author.trim()) {
      Alert.alert('Autor vazio', 'Informe o autor!')
      return
    }
    if (!newNews.title || !newNews.title.trim()) {
      Alert.alert('Titulo vazio', 'Informe o titulo!')
      return
    }
    if (!newNews.notice || !newNews.notice.trim()) {
      Alert.alert('Noticia vazia', 'Informe a noticia!')
      return
    }
    const news = [...this.state.news]
    news.push({
      author: newNews.author,
      title: newNews.title,
      notice: newNews.notice,
      id: Math.random(),
    })
    this.setState({ news, addNewsModal: false, }, this.saveOnStorage)
  }

  delNews = id => {
    const news = this.state.news.filter(news => news.id !== id)
    this.setState({ news }, this.saveOnStorage)
  }



  render() {
    return (
      <View style={styles.container}>
        <AddNews isVisible={this.state.addNewsModal} onCancel={() => this.setState({ addNewsModal: false })} onSave={this.addNews} />
        <ViewerNews isVisible={this.state.viewerNewsModal} payload={this.state.payload} onCancel={() => this.setState({ viewerNewsModal: false })}/>
        <View style={styles.header}>
          <View style={styles.headerBar}>
          <TextInput 
            style={{
              color: '#FFF',
              fontSize: 20,
            }}
            placeholder='Pesquise aqui'
            placeholderTextColor={'#5e5f63'}
            onChangeText={search => this.setState({ search })}
            value={this.state.search} />

         
            <TouchableOpacity
              onPress={() => this.setState({ addNewsModal: true })}>
              <Icon name='plus' size={20} color='#FFF' />
              {/* <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>+</Text> */}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boby}>
          <FlatList data={this.state.news}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => <News {...item} onLongPress={()=> {Alert.alert('Notícia excluída', item.title);this.delNews(item.id)}} onPress={ () => this.openNews(item) }/>} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202125',
  },
  header: {
    flex: 0.1,
    margin: '3%',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  headerBar: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 7,
    backgroundColor: 'grey',
    height: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 50,
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

export default NewsList