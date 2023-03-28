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
      title: 'Flevitis',
      description: 'Encuentra aquí las recomendaciones que te dejo el médico',
      content:'Ingrese aqui un lorem jajajajaajajajjajaajajjaajjajajajajajajajajajajaajajaj'
    },
    {
      title: 'Dolor de cabeza',
      description: 'Encuentra aquí las recomendaciones que te dejo el médico',
      content:'Ingrese aqui un lorem jajajajaajajajjajaajajjaajjajajajajajajajajajajaajajaj'
    },
    {
      title: 'Dolor de estómago',
      description: 'Encuentra aquí las recomendaciones que te dejo el médico',
      content:'Ingrese aqui un lorem jajajajaajajajjajaajajjaajjajajajajajajajajajajaajajaj'
    },
    {
      title: 'Fiebre',
      description: 'Encuentra aquí las recomendaciones que te dejo el médico',
      content:'Ingrese aqui un lorem jajajajaajajajjajaajajjaajjajajajajajajajajajajaajajaj'
    },
    {
      title: 'Herida',
      description: 'Encuentra aquí las recomendaciones que te dejo el médico',
      content:'Ingrese aqui un lorem jajajajaajajajjajaajajjaajjajajajajajajajajajajaajajaj'
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
        <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={{...styles.FormContainer,alignItems:'center', height: newHeight}}>
            <Text style={{...Globalstyles.Semibold,...Globalstyles.Purple,fontSize:20,marginBottom:20}}>Preguntas frecuentes</Text>
            <View style={styles.searchBarContainer}>
              <Icon name="search" size={20} color="#c4c4c4" />
                <TextInput
                    placeholder="Buscar ..."
                    onChangeText={handleSearch}
                    value={searchText}
                    style={{ ...Globalstyles.gray, ...Globalstyles.text, fontSize:15}}

                />
            </View>
            {filteredFaqs.map((faq, index) => (
            <View key={index} style={styles.cardContainer}>
                <TouchableOpacity activeOpacity={0.99} onPress={() => handleExpand(index)}>
                <View style={{ padding:10,alignItems:'center',flexDirection:'column',width:'100%',maxWidth:500,height: expanded[index] ? 'auto' : 80,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:16,...styles_shadow}} >
                    <Text style={{ ...Globalstyles.Purple, ...Globalstyles.Semibold, fontSize: 15, marginBottom:5, }} >
                        {faq.title}
                    </Text>
                    <Text style={{ ...Globalstyles.gray, ...Globalstyles.Medium, fontSize: 10, marginBottom: 5, fontWeight:'bold' }} >
                        {faq.description}
                    </Text>
                    {expanded[index] && (
                    <View style={{ marginBottom: 10 , width:'75%',}}>
                        <Text style={{ ...Globalstyles.gray, ...Globalstyles.Medium, fontSize: 10 , marginTop: 20 , marginBottom:20,}}>
                            {faq.content}
                        </Text>
                    </View>
                    )}
                    <Text style={{textDecorationLine: 'underline', ...Globalstyles.Medium, fontSize: 10, color:'#968DD6', marginBottom: 5,}}>
                        {expanded[index] ? 'Ver menos' : 'Ver más ...'}
                    </Text>
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

