import { View, Text ,ImageBackground,Image,FlatList,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { Input, Icon } from 'react-native-elements';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import styles from './BeneficientStyles'
import Globalstyles from '../../../Shared/Icons/GlobalStyles'
import { styles_shadow } from '../OurServices/OurServicesStyles';
import { AppContext } from '../../../AppContext/Context';
import { GetName, GetName_Beneficient } from '../../../services/Auth/Login/Login';
import { getAge } from '../../../services/DateManagement/DateManagement';
import LoadingScreen from '../../../Shared/Alerts/Loader';
import CustomModal from '../../../Shared/Alerts/Alert';
import { getBeneficients } from '../../../services/MainApp/Beneficient/Beneficient';


export default function Beneficient(props) {

  /* APP CONTEXT */
  let {userData, setUserData, token, setToken,currentDate,setCurrentDate,listBeneficient,setListBeneficient,selectBeneficient,setSelectBeneficient} =React.useContext(AppContext);
  
  /* NAVIGATE */
  let {navigation}=props

  /* MODAL */
  const [showModal, setShowModal] = React.useState(false);
  const [message,setMessage]= React.useState("");
  const [iconName,setIconName]=React.useState("");
  const [preloader,setPreloader] = React.useState(false);

  const handleSuccess = () => {
    setMessage('Login exitoso');
    setIconName('check-circle');
    setShowModal(true);
  };

  const handleError = () => {
    setMessage('Error comprueba los campos');
    setIconName('error');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  React.useEffect(()=>{
    if(token){
      if(selectBeneficient===null || selectBeneficient==={}){
        getData();
      }
    }
  },[selectBeneficient])

  /* FUNCTIONS */

  const getData=async()=>{
    
    setPreloader(true);
    let result=undefined;
    result= await getBeneficients(userData,token).catch((error)=>{
      
      console.log(error);
      setPreloader(false);
      handleError();
    })
    if(result){
      setPreloader(false);
      setListBeneficient(result.data);
    }
    
  }

  const EDITBeneficient=(beneficient)=>{
    setSelectBeneficient(beneficient);
    navigation.navigate('EditBeneficient');
  }

  return (
    <View style={styles.container}>
      {preloader ? 
        <LoadingScreen/>
        :
        <></>
      }
      <ImageBackground source={require('../../../assets/Home/BG-Medical.png')} style={styles.imageBackground}></ImageBackground>
      <View style={styles.LobbyContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.navBar}>
            <TouchableOpacity>
              <Icon name="chevron-left" color={'#FFF'} size={40} onPress={()=>navigation.navigate('Drawer')}></Icon>
            </TouchableOpacity>
            <LogoMedicalComplete style={{width:160,height:100}}></LogoMedicalComplete>
          </View>
          <Text style={{...Globalstyles.bold,...Globalstyles.white,...Globalstyles.SubTitle_2}}>{GetName(userData)}</Text>
          <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>{getAge(userData?.date_birth)+" Años"}</Text>
          <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.bold}}>{userData?.coverage_city} | <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>{userData.address}</Text></Text>
        </View>
        <LinearGradient colors={['#FFFFFF', '#695F9766']} style={{...styles.FormContainer,alignItems:'center'}}>
          <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,marginBottom:20}}>Beneficiarios</Text>
          <View style={{width:'100%',alignItems:'center'}}>
            <View>
                <TouchableOpacity style={{width:30,height:30,borderRadius:30,backgroundColor:'#F19420',alignItems:'center',justifyContent:'center',marginBottom:20}} onPress={()=>{navigation.navigate('RegisterBeneficient')}}>
                        <Text style={{textAlign:'center',...Globalstyles.white,textAlignVertical:'center',...Globalstyles.Title,position:'relative',bottom:7}}>+</Text>
                </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={{width:'100%',marginBottom:0,maxWidth:470,maxHeight:'160%',height:'140%'}} showsVerticalScrollIndicator={false}>
            <View style={{width:"100%",flexDirection:'column',alignItems:'center'}}>
                
              {listBeneficient.map((beneficient, index) => (
                <View key={index} style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <TouchableOpacity onPress={()=>EDITBeneficient(beneficient)}  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                        {beneficient?.genre.toLowerCase()==="masculino" ? 
                          <View style={{borderRadius:60,maxWidth:68,maxHeight:68,overflow:'hidden',marginRight:10}}>
                           <ImageBackground source={require('../../../assets/Male-User.png')} style={styles.photo}></ImageBackground>
                          </View>
                          
                          :
                          <View style={{borderRadius:60,maxWidth:68,maxHeight:68,overflow:'hidden',marginRight:10}}>
                           <ImageBackground source={require('../../../assets/Female-User.png')} style={styles.photo}></ImageBackground>
                          </View>
                        }
                        <View style={{width:'70%',alignItems:'flex-start',justifyContent:'flex-start'}}>
                        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                          <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:17,textAlign:'center'}}>{GetName(beneficient)}</Text>
                          <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text}}>{beneficient.identification_type+'. '+beneficient.identification}</Text>
                        </View>
                        </View>
                      </TouchableOpacity>
                </View>
              ))}
                
            </View>
          </ScrollView>
          
        </LinearGradient>
      </View>
      <CustomModal visible={showModal} onClose={()=>setShowModal(false)} message={message} iconName={iconName}></CustomModal>
    </View>
  )
}