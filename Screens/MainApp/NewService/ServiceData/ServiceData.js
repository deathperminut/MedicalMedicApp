import React, { useState } from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import DataServiceStyles from './ServiceDataStyles';

const { width, height } = Dimensions.get('window');

const DATA_SERVICE_IMAGES = [
  require('../../../../assets/Splash/Splash-BG.png'),
  require('../../../../assets/Splash/Splash-BG.png'),
  require('../../../../assets/Splash/Splash-BG.png'),
];

const DATA_SERVICE_TITLES = [
  'Tarjeta 1',
  'Tarjeta 2',
  'Tarjeta 3',
];

const DATA_SERVICE_TEXTS = [
  'Texto de la tarjeta 1',
  'Texto de la tarjeta 2',
  'Texto de la tarjeta 3',
];

const DataServiceScreen = () => {
  const [index, setIndex] = useState(0);

  const renderItem = ({ item }) => (
    <View style={DataServiceStyles.card}>
      <ImageBackground source={item.image} style={DataServiceStyles.background} resizeMode="cover">
        <Text style={DataServiceStyles.cardTitle}>{item.title}</Text>
        <Text style={DataServiceStyles.cardText}>{item.text}</Text>
      </ImageBackground>
    </View>
  );

  return (
    <View style={DataServiceStyles.container}>
      <Carousel
        data={DATA_SERVICE_IMAGES.map((image, i) => ({ key: i.toString(), image: image, title: DATA_SERVICE_TITLES[i], text: DATA_SERVICE_TEXTS[i] }))}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        itemHeight={height}
        autoplay={true}
        loop={true}
        autoplayInterval={3000}
        onSnapToItem={index => setIndex(index)}
      />
    </View>
  );
}

export default DataServiceScreen;
