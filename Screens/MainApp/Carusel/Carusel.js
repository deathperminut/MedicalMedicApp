import { View, Text ,ScrollView,Image,useWindowDimensions,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import styles from './CaruselStyles'
import Globalstyles from '../../../Shared/Icons/GlobalStyles'
import { styles_shadow } from '../OurServices/OurServicesStyles'
import Animated,{useSharedValue,useAnimatedScrollHandler,useAnimatedScr
,interpolate,
useAnimatedStyle} from 'react-native-reanimated'

export default function Carusel({data,props}) {

  let {navigation}=props

  /* WINDOW DIMENSIONS */

  //const {width}=useWindowDimensions();
  const width=200
  const size=(width)*0.8;
  const [newData]=useState([
    {key:'spacer-left'},
    ...data,
    {key:'spacer-right'},
  ]);

  const SPACER=100;

  const x=useSharedValue(0);
  const onScroll=useAnimatedScrollHandler({
    onScroll:event=>{
      x.value = event.contentOffset.x;
    }
  })

  return (
    <Animated.ScrollView onScroll={onScroll} scrollEventThrottle={16} decelerationRate={'fast'} snapToInterval={size} horizontal showsHorizontalScrollIndicator={false} bounces={false} style={{maxHeight:200,paddingTop:20,marginBottom:20}} >
      {newData.map((item,index)=>{
        //eslint-disable-next-line react-hooks/rules-of-hooks
        const style= useAnimatedStyle(()=>{
          const scale=interpolate(
            x.value,
            [(index-2)*size,(index-1)*size,index*size],
            [0.9,1,0.9],
          )
          return {
            transform:[{scale}],
          }
            
          
        })
        if(!item.image){
          return <View style={{width:SPACER}} key={index}></View>;
        }
        return(
            <TouchableOpacity  key={index} onPress={()=>navigation.navigate(item.navigate)} style={styles_shadow}>
            <Animated.View style={[styles.imageContainer,style]}>
            {item.id=='1' ? 
              <>
              <Image source={require('../../../assets/Home/Tarjeta-Historial.png')} style={styles.image}></Image>
              </>
              :
              <>
              {item.id=='2' ?
              <Image source={require('../../../assets/Home/Tarjeta-Reportar.png')} style={styles.image}></Image>
              :
              <>
              {item.id=='3' ?
              <Image source={require('../../../assets/Home//Tarjeta-Servicios.png')} style={styles.image}></Image>
              :
              <Image source={require('../../../assets/Home/Tarjeta-Solicitar.png')} style={styles.image}></Image>
              }
              
                
              </>
              
              }

              </>
             }

             <View style={{position:'absolute',padding:20,paddingTop:80}}>
                  
                  {item.id=="1" ?
                  <>
                  <Text style={{...Globalstyles.Semibold,...Globalstyles.green}}>{item.text_1}</Text>
                  <Text style={{...Globalstyles.Semibold,...Globalstyles.white}}>{item.text_2}</Text>
                  <Text style={{...Globalstyles.Semibold,...Globalstyles.white,position:'absolute',top:150,left:45}}>Ver +</Text>
                  </>
                  :
                  <>
                  <Text style={{...Globalstyles.Semibold,...Globalstyles.green,bottom:20}}>{item.text_1}</Text>
                  <Text style={{...Globalstyles.Semibold,...Globalstyles.white,bottom:20}}>{item.text_2}</Text>
                  <Text style={{...Globalstyles.Semibold,...Globalstyles.white,position:'absolute',top:150,left:45}}>Ver +</Text>
                  </>
                  }
                  
             </View>

            </Animated.View>
            </TouchableOpacity>
            
        )
      })}
    </Animated.ScrollView>
  )
}


