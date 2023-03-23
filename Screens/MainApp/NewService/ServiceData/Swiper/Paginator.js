import { View, Text , StyleSheet ,Animated, useWindowDimensions } from 'react-native'
import React, {useState,useRef} from 'react'
import { Extrapolate } from 'react-native-reanimated';


export default function Paginator({data,scrollX,top}) {

  const {width}=useWindowDimensions();

  return (
    <View style={{flexDirection:'row',height:64 ,position:'absolute',top}}>
       {data.map((_,i)=>{
        const inputRange=[(i-1)*width,i*width,(i+1)*width];

        const dotWith=scrollX.interpolate({
            inputRange,
            outputRange:[10,20,10],
            extrapolate:'clamp',
        });

        const opacity=scrollX.interpolate({
            inputRange,
            outputRange:[0.3,1,0.3],
            extrapolate:'clamp',
        });

        return <Animated.View key={i} style={[styles.dot,{width:dotWith,opacity}]}/>
       })}
    </View>
  )
}


const styles = StyleSheet.create({
    dot:{
       height:10,
       borderRadius:5,
       backgroundColor:'#493d8a',
       marginHorizontal:8,
    }
})
