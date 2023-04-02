import { View, Text,ImageBackground,ScrollView,TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import { Icon, SearchBar  } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';
import styles from './FQStyles';
import { styles_shadow } from '../OurServices/OurServicesStyles';


export default function FQ(props) {

  
    /* PANTALLA */
  const windowHeight = Dimensions.get('window').height;
  const newHeight = windowHeight  - 100;

  /* NAVIGATION */
  let { navigation } = props;

  /* SEARCH */
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  /* FAQS */
  const faqs = [
    {
      title: '¿Cómo puedo solicitar una consulta en linea?',
      description: 'Hay diferentes canales de comunicación donde puedes agendar una cita con MHC. A continuación menionaremos las formas más sencillas de solicitar una consulta.',
      content:'1) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado consulta médica.\n\n 2) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado de consulta médica.\n\n 3) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado consulta médica.'
    },
    {
      title: '¿Cómo puedo cancelar una conuslta médica?',
      description: 'Hay diferentes canales de comunicación donde puedes agendar una cita con MHC. A continuación menionaremos las formas más sencillas de solicitar una consulta.',
      content:'1) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado consulta médica.\n\n 2) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado de consulta médica.\n\n 3) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado consulta médica.'
    },
    {
      title: '¿Cómo puedo cancelar una consulta médica',
      description: 'Hay diferentes canales de comunicación donde puedes agendar una cita con MHC. A continuación menionaremos las formas más sencillas de solicitar una consulta.',
      content:'1) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado consulta médica.\n\n 2) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado de consulta médica.\n\n 3) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado consulta médica.'
    },
    {
      title: '¿Cómo puedo revisar mi fórmula médica?',
      description: 'Hay diferentes canales de comunicación donde puedes agendar una cita con MHC. A continuación menionaremos las formas más sencillas de solicitar una consulta.',
      content:'1) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado consulta médica.\n\n 2) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado de consulta médica.\n\n 3) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado consulta médica.'
    },
    {
      title: '¿Cuál es el precio de una consulta médica?',
      description: 'Hay diferentes canales de comunicación donde puedes agendar una cita con MHC. A continuación menionaremos las formas más sencillas de solicitar una consulta.',
      content:'1) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado consulta médica.\n\n 2) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado de consulta médica.\n\n 3) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado consulta médica.'
    },
    {
      title: '¿Cuál es el precio de una consulta médica?',
      description: 'Hay diferentes canales de comunicación donde puedes agendar una cita con MHC. A continuación menionaremos las formas más sencillas de solicitar una consulta.',
      content:'1) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado consulta médica.\n\n 2) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado de consulta médica.\n\n 3) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado consulta médica.'
    },
    {
      title: '¿Cuál es el precio de una consulta médica?',
      description: 'Hay diferentes canales de comunicación donde puedes agendar una cita con MHC. A continuación menionaremos las formas más sencillas de solicitar una consulta.',
      content:'1) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado consulta médica.\n\n 2) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado de consulta médica.\n\n 3) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado consulta médica.'
    },
    {
      title: '¿Cuál es el precio de una consulta médica?',
      description: 'Hay diferentes canales de comunicación donde puedes agendar una cita con MHC. A continuación menionaremos las formas más sencillas de solicitar una consulta.',
      content:'1) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado consulta médica.\n\n 2) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado de consulta médica.\n\n 3) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado consulta médica.'
    },
    {
      title: '¿Cuál es el precio de una consulta médica?',
      description: 'Hay diferentes canales de comunicación donde puedes agendar una cita con MHC. A continuación menionaremos las formas más sencillas de solicitar una consulta.',
      content:'1) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado consulta médica.\n\n 2) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado de consulta médica.\n\n 3) Puedes solicitar una consulta a través del menú de la app móvil, en el apartado consulta médica.'
    },
  ];

const [expanded, setExpanded] = useState({});

const handleExpand = (index) => {
  setExpanded({
    ...expanded,
    [index]: !expanded[index]
  });
};


  const filteredFaqs = faqs.filter((faq) => {
    const title = faq.title.toLowerCase();
    const description = faq.description.toLowerCase();
    const searchTextLower = searchText.toLowerCase();
    return (
      title.includes(searchTextLower) || description.includes(searchTextLower)
    );
  });


  return (
  <View style={styles.container}>
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
        </View>
        <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={{...styles.FormContainer,alignItems:'center', minHeight: newHeight}}>
            <Text style={{...Globalstyles.Semibold,...Globalstyles.Purple,fontSize:20,marginBottom:20}}>Preguntas frecuentes</Text>
            <View style={{...styles.searchBarContainer,...styles_shadow}}>
              <Icon name="search" size={20} color="#c4c4c4" style={{marginRight:10}}/>
                <TextInput
                    placeholder="Buscar preguntas"
                    onChangeText={handleSearch}
                    value={searchText}
                    style={{ ...Globalstyles.gray, fontSize:14,...Globalstyles.Medium,width:'90%'}}

                />
            </View>
            {filteredFaqs.map((faq, index) => (
            <View key={index} style={styles.cardContainer}>
                <TouchableOpacity activeOpacity={0.99} onPress={() => handleExpand(index)}>
                  <View style={{ padding:10,alignItems:'center',flexDirection:'column',minWidth:'98%',maxWidth:'98%',maxWidth:500,height: expanded[index] ? 'auto' : 'auto',backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:16,...styles_shadow,minHeight:60,justifyContent:'center'}} >
                      <Text style={{ ...Globalstyles.Purple, ...Globalstyles.Semibold, fontSize: 15, marginBottom:5,textAlign:'center' }} >
                          {faq.title}
                      </Text>
                      {expanded[index] && (
                      <View style={{ marginBottom: 10 ,minWidth:'98%',maxWidth:'98%',alignItems:'center',justifyContent:'center'}}>
                          <Text style={{ ...Globalstyles.gray, fontSize: 10, marginBottom: 2,...Globalstyles.Medium}} >
                              {faq.description}
                          </Text> 
                          <Text style={{ ...Globalstyles.gray,fontSize: 10 , marginTop: 10 , marginBottom:20,...Globalstyles.Semibold}}>
                              {faq.content}
                          </Text>
                      </View>
                      )}
                  </View>
                </TouchableOpacity>
            </View>
            ))}
        </LinearGradient>
      </View>
    </ScrollView>
  </ImageBackground>
</View>

  )
}

