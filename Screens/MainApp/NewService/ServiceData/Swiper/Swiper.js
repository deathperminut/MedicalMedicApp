import { View, Text ,FlatList, StyleSheet ,TouchableOpacity, Animated} from 'react-native'
import React, {useRef} from 'react'
import Globalstyles from '../../../../../Shared/Icons/GlobalStyles';
import SwiperData from './SwiperData';
import SwiperItem  from './SwiperItem';
import { Icon } from 'react-native-elements';
import styles from './SwiperStyles';
import Paginator from './Paginator';
import CustomModal from '../../../../../Shared/Alerts/Alert';
import { AppContext } from '../../../../../AppContext/Context';

export default function Swiper(props) {

  let {navigation}=props;

  /* SCROLL */
  const scrollX=useRef(new Animated.Value(0)).current;

  /* MODAL */
 const [showModal, setShowModal] = React.useState(false);
 const [showModalCancel, setShowModalCancel] = React.useState(false);
 const [message,setMessage]= React.useState("");
 const [iconName,setIconName]=React.useState("");




 const handleInfo = () => {
   setMessage('Ya tienes una cita activa en estos momentos');
   setIconName('error');
   setShowModal(true);
 };

 /* APPCONTEXT */
 let {currentDate} =React.useContext(AppContext);


 /* FUNCTIONS */
 


 const ChoosePatient=()=>{

  if(currentDate===null || currentDate?.status==="COMPLETADA"){
    navigation.navigate('SelectPatient')
  }else{
    handleInfo()
  }

 }

  return (
    <View style={styles2.container  }>
      
      <FlatList onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{
        useNativeDriver:false,
      })} style={{width:'100%'}}  data={SwiperData} renderItem={({item})=><SwiperItem item={item} props={props}></SwiperItem>} horizontal showsHorizontalScrollIndicator={false}  pagingEnabled>Swiper</FlatList>
      <Paginator data={SwiperData} scrollX={scrollX} top='88%'></Paginator>
      <TouchableOpacity style={{...styles.button,position:'absolute',top:'87%'}} onPress={ChoosePatient}>
              <Icon name="chevron-right" type="font-awesome" size={20} color="#fff" style={{position:'relative'}} />
              <Text style={{...styles.buttonText,...Globalstyles.Medium,}}>Solicitar</Text>
      </TouchableOpacity>
      <CustomModal visible={showModal} onClose={()=>setShowModal(false)} message={message} iconName={iconName}></CustomModal>
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