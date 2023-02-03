import React from 'react';
import { View, Text, Image } from 'react-native';

const PostDetails = ({data}) => {
  return (
    <View style={{backgroundColor:"#DDDDDD", padding:10,marginBottom:10}}>
      <Text style={{fontFamily:"InterBold",fontSize:20}}>Title: {data.title}</Text>
      <Text>Destination: {data.destination}</Text>
      <Text>Days: {data.days}</Text>
      <Text>Experience Rating: {data.experienceRating}</Text>
      <Text>Total Cost: {data.totalCost}</Text>
      <Text>Description: {data.description}</Text>
      {data.photos.map(photo => (
        <Image source={{ uri: photo }} />
      ))}
    </View>
  );
};

export default PostDetails;