import React, { Component } from 'react'
import { View, SafeAreaView, Text, Image } from 'react-native'
import FeedScreen from './Feed'

export default class CreatePost extends Component {
  renderItem = ({ item: story }) => {
    return <PostCard story={story} navigation={this.props.navigation} />;
  };
  render(){
    return (
      <View style={styles.droidSafeArea}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image source={require('../assets/logo.png')} style={styles.iconImage}></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Spectagram</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <FlatList keyExtractor={this.keyExtractor} data={posts} renderItem={this.renderItem}/>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  },
  droidSafeArea:{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight: RFValue(13)
  },
  appIcon:{
    flex:0.07,
    flexDirection:"row"
  },
  appIcon:{
    flex:0.2,
    justifyContent:"center",
    alignItems:"center"
  },
  iconImage:{
    width:"100%",
    height:"100%",
    resizeMode:"contain",
  },
  appTitleTextContainer:{
    flex:0.8,
    justifyContent:"center"
  },
  appTitleText:{
    color:"white",
    fontSize:RFValue(28)
  },
  cardContainer:{
    flex:0.85
  }
})