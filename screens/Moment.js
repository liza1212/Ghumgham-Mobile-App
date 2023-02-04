import React from 'react';
import {View, Image,Text,FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import FocusedStatusBar from '../components/Home/FocusedStatusBar';
import PostDetails from '../components/Post/PostDetails';
import {data} from "../Dummy.js"



const Moment = () => {
  
  return (
    <SafeAreaView style={{padding:10,flex:1} }>
      <FocusedStatusBar/>
      <FlatList
        data={data}
        renderItem={({ item }) => <PostDetails data={item} />}
        keyExtractor={item => item.title}
        ListHeaderComponent={()=>(
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <Text style={{
                fontFamily:"InterBold",
                fontSize:30,
                color:"#a4c3a2"}}>Moments</Text>
          </View>
        )}
      />
      
    </SafeAreaView>
  );
};

export default Moment;