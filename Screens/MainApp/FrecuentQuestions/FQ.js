import { Linking,View, Text,ImageBackground,ScrollView,TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import { Icon } from 'react-native-elements';
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

    /*
    DOCUMENTOS DE GUIAS PRACTICAS 
    -----------------------------
    EN ESTA PESTAÑA EL PERSONAL ASISTENCIAL TENDRAN ACCESO A LOS DOCUMENTOS DE GUIAS PRACTICAS
    GESTIONADOS EN EL APARTADO DE LA WEB EN GESTIÓN HUMANA SUBMODULO DE GUIAS PRACTICAS 
    */

  
    /* USE CONTEXT */

  const {userData, // VARIABLE DE DATOS DEL USUARIO
          token // TOKEN DE VALIDACIÓN PARA LOS SERVICIOS
        }=React.useContext(AppContext);
    /* PANTALLA */
  const windowHeight = Dimensions.get('window').height;
  const newHeight = windowHeight  - 100;

  /* NAVIGATION */
  let { navigation } = props; // OBJETO PARA LA NAVEGACIÓN

  /* SEARCH */
  const [searchText, setSearchText] = useState(''); // VARIABLE PARA FILTRAR LOS DOCUMENTOS SEGUN EL NOMBRE

  const handleSearch = (text) => {
    /*
    función para filtrar los documentos segun el valor de searchtext como input del buscador
    */
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
      getData(); // obtenemos los documentos de la base de datos
    }
    

  }, [token]);

  /* USE STATE */

  let [preloader,setPreloader]=React.useState(false); // preloader controller
  let [DocumentsAreas,setDocumentsAreas]=React.useState([]); // variable para almacenar los ids de las areas en este caso de guias practicas
  let [documents,setDocuments]=React.useState([]); // variable para almacenar los documentos de guias practicas
  let [filterDocuments,setFilterDocuments]=React.useState([]); // lista de documentos filtrados

  const getData=async()=>{
    
    /*
    función para obtener las areas de los documentos registrados en base de datos
    */
    let result=undefined;
    setPreloader(true);
    result=await getAreas(token).catch((error)=>{
      console.log(error);
      setPreloader(false);
    })

    if(result){
      setDocumentsAreas(result.data);
      setPreloader(false);
      getDocuments(result.data)
    }
  }

  const getDocuments=async(areas)=>{
  
    /*
    función para obtener los documentos del area de guias practicas
    */
    let result=undefined;
    setPreloader(true);
    let filterArea=areas.filter((obj)=>{
      if(obj.area==="DOCUMENTOS DE GUÍAS PRÁCTICAS"){
        return obj
      }
    })
    result=await getDocumentsByArea(filterArea[0].id,token).catch((error)=>{
      console.log(error);
      setPreloader(false);
    })
    
    if(result){
      setDocuments(result.data);
      setFilterDocuments(result.data);
      setPreloader(false);
    }

  }

  const handleOpenDocument = (dc) => {
    /*
    función para abrir los documentos
    */
    const documentUrl = dc.path; 

    Linking.openURL(documentUrl)
      .catch((error) => {
        console.log(error);
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
        <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={{...styles.FormContainer,alignItems:'center', minHeight: newHeight}}>
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
            <TouchableOpacity onPress={()=>handleOpenDocument(faq)} key={index} style={{padding:10,alignItems:'center',flexDirection:'column',width:'100%',maxWidth:700,height:120,backgroundColor:'#FAFAFB',borderRadius: 14, marginBottom:16, ...styles_shadow}}>
                <View style={{width:'100%',height:'100%',flexDirection:'row',alignItems:'center',paddingLeft:10,justifyContent:'center'}}>
                        <Documents style={{width:50,height:50}}></Documents>
                        <Text style={{...Globalstyles.Purple,...Globalstyles.Medium,fontSize:14,marginLeft:20,width:'75%',flexDirection:'column'}}>
                          <Text style={{width:'100%'}}>Documento</Text>
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

