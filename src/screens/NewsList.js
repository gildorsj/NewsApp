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
  ScrollView,
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
    this.setState({ payload }, this.setState({ viewerNewsModal: true }))
    // const news = this.state.news.filter(news => news.id !== payload.id)
    // this.setState({ news }, this.saveOnStorage)
    this.delNews(payload.id)
  }

  closeNews = payload => {

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
    this.setState({ news, addNewsModal: false, viewerNewsModal: false, }, this.saveOnStorage)
  }

  delNews = id => {
    const news = this.state.news.filter(news => news.id !== id)
    this.setState({ news }, this.saveOnStorage)
  }

  searchNews = newsList => {
    return newsList.filter(
      (listItem) =>
        listItem.notice.toLowerCase().includes(this.state.search.toLocaleLowerCase().trim()) ||
        listItem.author.toLowerCase().includes(this.state.search.toLocaleLowerCase().trim()) ||
        listItem.title.toLowerCase().includes(this.state.search.toLocaleLowerCase().trim()),
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <AddNews isVisible={this.state.addNewsModal} onCancel={() => this.setState({ addNewsModal: false })} onSave={this.addNews} />
        <ViewerNews isVisible={this.state.viewerNewsModal} payload={this.state.payload} onBack={this.addNews} />
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
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boby}>
          {/* <FlatList data={this.state.news}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => <News {...item} onLongPress={() => this.delNews(item.id)} onPress={() => this.openNews(item)} />} /> */}
          <ScrollView>
            {this.searchNews(this.state.news).map((filtedItem, index) => (
              <News key={filtedItem.id} {...filtedItem} onPress={() => this.openNews(filtedItem)} onLongPress={() => this.delNews(filtedItem.id)} />
            ))}
          </ScrollView>
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