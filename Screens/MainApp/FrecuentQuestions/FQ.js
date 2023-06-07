import { Linking,View, Text,ImageBackground,ScrollView,TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import { Icon, SearchBar  } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';
import styles from './FQStyles';
import { styles_shadow } from '../OurServices/OurServicesStyles';
import { AppContext } from '../../../AppContext/Context';
import { GetName } from '../../../services/Auth/Login/Login';
import { getAge } from '../../../services/DateManagement/DateManagement';
import Documents from '../../../Shared/Icons/Documents';
import { getAreas, getDocumentsByArea } from '../../../services/Guias/Guias';
import LoadingScreen from '../../../Shared/Alerts/Loader';

export default function FQ(props) {

  
    /* USE CONTEXT */

  const {userData,token}=React.useContext(AppContext);
    /* PANTALLA */
  const windowHeight = Dimensions.get('window').height;
  const newHeight = windowHeight  - 100;

  /* NAVIGATION */
  let { navigation } = props;

  /* SEARCH */
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    if(text===""){
      setFilterDocuments(documents);
    }else{
      setFilterDocuments(documents.filter((obj)=>obj?.filename.toLowerCase().includes(text.toLowerCase())));
    }
  };
  /* OBTENEMOS LOS DOCUMENTOS */

  React.useEffect(() => {
    
    if(token){
      getData();
    }
    

  }, [token]);

  /* USE STATE */

  let [preloader,setPreloader]=React.useState(false);
  let [DocumentsAreas,setDocumentsAreas]=React.useState([]);
  let [documents,setDocuments]=React.useState([]);
  let [filterDocuments,setFilterDocuments]=React.useState([]);

  const getData=async()=>{

    let result=undefined;
    setPreloader(true);
    result=await getAreas(token).catch((error)=>{
      console.log(error);
      setPreloader(false);
    })

    if(result){
      console.log("Documentos: ",result.data)
      setDocumentsAreas(result.data);
      setPreloader(false);
      getDocuments(result.data)
    }
  }

  const getDocuments=async(areas)=>{
 
    let result=undefined;
    setPreloader(true);
    let filterArea=areas.filter((obj)=>{
      if(obj.area==="DOCUMENTOS DE GUÍAS PRÁCTICAS"){
        return obj
      }
    })
    console.log("CONSOLA: ",filterArea);
    result=await getDocumentsByArea(filterArea[0].id,token).catch((error)=>{
      console.log(error);
      setPreloader(false);
    })
    
    if(result){
      console.log("Data documentos: ",result.data);
      setDocuments(result.data);
      setFilterDocuments(result.data);
      setPreloader(false);
    }

  }

  const handleOpenDocument = (dc) => {
    const documentUrl = dc.path; // URL del documento que deseas abrir

    Linking.openURL(documentUrl)
      .catch((error) => {
        console.log('Error al abrir el documento:', error);
      });
  };


  return (
  <View style={styles.container}>
  {preloader ? 
      <LoadingScreen/>
      :
      <></>
  }
  <ImageBackground source={require('../../../assets/Bienvenida-Ingreso/BG-Menú-Ingresar.png')} style={styles.imageBackground}>
    <ScrollView showsVerticalScrollIndicator={false} style={{}}>
      <View style={styles.LobbyContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.navBar}>
            <TouchableOpacity>
              <Icon name="chevron-left" color={'#FFF'} size={40} onPress={() => navigation.navigate('Drawer')}></Icon>
            </TouchableOpacity>
            <LogoMedicalComplete style={{ width: 160, height: 100 }}></LogoMedicalComplete>
          </View>
          <Text style={{...Globalstyles.bold,...Globalstyles.white,...Globalstyles.SubTitle_2}}>{GetName(userData)}</Text>
          <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>{getAge(userData?.date_birth)+" Años"}</Text>
          <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.bold}}>{userData?.coverage_city} | <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>{userData.address}</Text></Text>
        </View>
        <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={{...styles.FormContainer,alignItems:'flex-start', minHeight: newHeight}}>
            <Text style={{...Globalstyles.Semibold,...Globalstyles.Purple,fontSize:20,marginBottom:20}}>Guías</Text>
            <View style={{...styles.searchBarContainer,...styles_shadow}}>
              <Icon name="search" size={20} color="#c4c4c4" style={{marginRight:10}}/>
                <TextInput
                    placeholder="Buscar guías"
                    onChangeText={handleSearch}
                    value={searchText}
                    style={{ ...Globalstyles.gray, fontSize:14,...Globalstyles.Medium,width:'90%'}}
                />
            </View>
            {filterDocuments.map((faq, index) => (
            <TouchableOpacity onPress={()=>handleOpenDocument(faq)} key={index} style={{padding:10,alignItems:'center',flexDirection:'column',width:'100%',maxWidth:500,height:120,backgroundColor:'#FAFAFB',borderRadius: 14, marginBottom:16, ...styles_shadow}}>
                <View style={{width:'100%',height:'100%',flexDirection:'row',alignItems:'center',paddingLeft:10,justifyContent:'center'}}>
                        <Documents style={{width:50,height:50}}></Documents>
                        <Text style={{...Globalstyles.Purple,...Globalstyles.Medium,fontSize:14,marginLeft:20,width:'75%',flexDirection:'column'}}>
                          <Text style={{width:'100%',fontWeight:900}}>Documento</Text>
                          {'\n'}
                          <Text style={{width:'100%',...Globalstyles.gray}}>{faq?.filename}</Text>
                        </Text>
                </View>
            </TouchableOpacity>
            ))}
        </LinearGradient>
      </View>
    </ScrollView>
  </ImageBackground>
</View>

  )
}

