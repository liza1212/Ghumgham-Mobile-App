import React from 'react';
import {View, Image,Text,FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import Logo from "../assets/Logo.png"
import FocusedStatusBar from '../components/Home/FocusedStatusBar';
import PostDetails from '../components/Post/PostDetails';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {data} from "../Dummy.js"
import Addplan from './Addplan';
import { useNavigation } from '@react-navigation/native';


const Moment = () => {
  const navigation = useNavigation()
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
              <TouchableOpacity onPress={()=>navigation.navigate("Addplan")}>
                <Ionicons name="add-circle" color="#a4c3a2" size={50}/>
              </TouchableOpacity>
          </View>
        )}
      />
      
    </SafeAreaView>
  );
};

export default Moment;