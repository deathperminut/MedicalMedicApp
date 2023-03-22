import { View, Text ,FlatList, StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import Globalstyles from '../../../../../Shared/Icons/GlobalStyles';
import SwiperData from './SwiperData';
import SwiperItem  from './SwiperItem';
import { Icon } from 'react-native-elements';
import styles from './SwiperStyles';

export default function Swiper(props) {

  let {navigation}=props;
  return (
    <View style={styles2.container  }>
      
      <FlatList style={{width:'100%'}}  data={SwiperData} renderItem={({item})=><SwiperItem item={item} props={props}></SwiperItem>} horizontal  showsHorizontalScrollIndicator pagingEnabled>Swiper</FlatList>
      <TouchableOpacity style={{...styles.button,position:'absolute',top:'87%'}} onPress={() => navigation.navigate('NewServices')}>
              <Icon name="chevron-right" type="font-awesome" size={20} color="#fff" style={{position:'relative'}} />
              <Text style={{...styles.buttonText,...Globalstyles.Medium,}}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles2 = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
    }
})