import { Linking,View, Text,ImageBackground,ScrollView,TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import { Icon, SearchBar  } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';
import styles from './FQStyles';
import { styles_shadow } from '../OurServices/OurServicesStyles';
import QuestionIcon from '../../../Shared/Icons/QuestionIcon';

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
      title: '¿Qué servicios médicos ofrecen en el domicilio?',
      description: 'Ofrecemos una amplia variedad de servicios médicos en el domicilio, incluyendo ',
      content:'1) Consulta médica.\n\n 2) Fisioterapia .\n\n 3) Terapia respiratoria.\n\n 4) Terapia ocupacional.\n\n 5) Terapia del lenguaje.\n\n 6) Consulta de psicología.\n\n 7) Nutrición.\n\n 8) Consulta de especialidades por telemedicina.\n\n 9) Orientación médica telefónica.\n\n 10) Cuidados paliativos.\n\n 11) Trabajo social.\n\n 12) Hospitalización en casa para patologías de menor complejidad.\n\n 13) Curaciones de mayor y menor complejidad.\n\n 14) Curaciones de mayor y menor complejidad.\n\n 15) Actividades de enfermería.\n\n 16) Hidratación por vía intravenosa.\n\n 17) Exámenes de laboratorio.\n\n 18) Ecografías.\n\n 19) Electrocardiograma.\n\n 20) Trasporte asistencial básico.\n\n',
      link:'',
    },
    {
      title: '¿Cuánto tiempo tardan en llegar a mi domicilio después de solicitar el servicio?',
      description: '',
      content:'El tiempo de llegada puede variar dependiendo de varios factores como condiciones climáticas, alteraciones de movilidad o del orden público y la ubicación de su domicilio, sin embargo, nuestra promesa de servicio es de máximo 120 minutos para la consulta médica.',
      link:'',
    },
    {
      title: '¿Ofrecen servicios médicos los fines de semana y días festivos',
      description: '',
      content:'Sí, ofrecemos servicios médicos los fines de semana y días festivos las 24 horas para brindar atención médica de calidad y en momentos críticos.',
      link:'',
    },
    {
      title: '¿Cuál es la tarifa por los servicios de atención médica domiciliaria?',
      description: '',
      content:'Si eres afiliado tu copago de consulta médica es de $50.000, en áreas de cobertura y el 20% de descuento en nuestros demás servicios.  Si deseas conocer nuestras tarifas particulares puedes dar click en el siguiente enlace',
      link:'',
    },
    {
      title: '¿Cómo puedo pagar por los servicios de atención médica domiciliaria?',
      description: 'Nuestra empresa se encuentra comprometida con la supresión del efectivo en las transacciones con el fin de eliminar la contaminación cruzada entre domicilios y proteger la salud de nuestros pacientes. Aunque recibimos efectivo, le sugerimos cancelar nuestros servicios por medios electrónicos.',
      content:'Puede pagar con código QR disponible para Davivienda, Daviplata, Bancolombia y Nequi. O hacer transferencia electrónica a nuestras cuentas bancarias: \n\n-Cuenta corriente de Davivienda 086769999995 \n-Cuenta corriente de Bancolombia 623-000004-03. \n-Cuenta corriente de BBVA 537028193.\n\nTambién puedes pagar por medio de PSE:\n\nDebes ingresar a la página web: \n\n http://www.medicalhomecarecolombia.com \n\n en la sección servicios ir al botón realizar pago y en la parte izquierda ir al botón PSE. Seguir las instrucciones  y enviar comprobante del pago',
      link:'',
    },
    {
      title: '¿Cuál es el horario de atención al cliente?',
      description: '',
      content:'Nuestra atención para consulta prioritaria es los 7 días de la semana las 24 horas del día.  Nuestro horario de atención al cliente es de lunes a jueves de 7:00 a.m. a 6:00 p.m y viernes de 7:00 a.m. a 4:00 p.m.  para pacientes del programa de cuidado crónico. ',
      link:'',
    },
    {
      title: '¿Cómo puedo hacer una queja o reclamo sobre el servicio que recibí?',
      description: '',
      content:'¡¡Su opinión es muy importante para nosotros!! Si tiene alguna felicitación, petición, queja, reclamo o sugerencia sobre el servicio que recibió, por favor contáctenos inmediatamente a través de nuestro número de teléfono o diligencie la siguiente encuesta:',
      link:'https://docs.google.com/forms/d/e/1FAIpQLSfKsTGR8n4eoIS6liRYytLQ_KcDqbtRA_Tw0yepYqUsFVQ6EA/viewform?embedded=true',
      link_text:'Realizar encuesta',
    },
    {
      title: '¿Ofrecen servicios de atención médica a pacientes pediátricos?',
      description: '',
      content:'Sí, ofrecemos servicios de atención médica domiciliaria presencial para pacientes pediátricos, con atención de médico general.  Contamos además con consulta bajo la modalidad de telemedicina de pediatría y otras 13 especialidades médicas. ',
      link:'',
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
                <TouchableOpacity activeOpacity={0.99}  onPress={() => handleExpand(index)}>
                  <View style={{ padding:10,alignItems:'center',flexDirection:'column',minWidth:'98%',maxWidth:'98%',maxWidth:300,height: expanded[index] ? 'auto' : 'auto',backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:16,...styles_shadow,minHeight:60,justifyContent:'center'}} >
                        <Text style={{ ...Globalstyles.Purple, ...Globalstyles.Semibold, fontSize: 15, marginBottom:5,textAlign:'center' }} >
                            {faq.title}
                        </Text>
                        <QuestionIcon style={{width:20,height:20,marginBottom:5,marginTop:5}}></QuestionIcon>
                      {expanded[index] && (
                      <View style={{ marginBottom: 10 ,minWidth:'98%',maxWidth:'98%',alignItems:'center',justifyContent:'center'}}>
                          <Text style={{ ...Globalstyles.gray, fontSize: 10, marginBottom: 2,...Globalstyles.Medium}} >
                              {faq.description}
                          </Text> 
                          <Text style={{ ...Globalstyles.gray,fontSize: 10 , marginTop: 10 , marginBottom:20,...Globalstyles.Semibold}}>
                              {faq.content}
                          </Text>
                          {faq.link!=="" ?
                          <TouchableOpacity style={{ ...Globalstyles.blueWhite,fontSize:10 , marginTop: 10 , marginBottom:20,...Globalstyles.bold}} onPress={()=>Linking.openURL(faq.link)}>
                              <Text style={{ ...Globalstyles.blueWhite,fontSize:10,...Globalstyles.bold}}>{faq.link_text}</Text>
                          </TouchableOpacity>
                          :
                          <>

                          </>
                          }
                          
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

