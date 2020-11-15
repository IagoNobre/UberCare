import React from 'react';
import { StyleSheet, Dimensions, Image, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import mapStyle from '../../utils/MapStyleUber';
import Bottom from '../../components/Bottom';
import LinesIcon from '../../components/LinesIcon';
import Alert from '../../components/Alert';

import imagem from '../../assets/motoristas.png';
import Call from '../../assets/telefone.svg';

import {
  ContainerInfo,
  DescriptionTitle,
  Squad,
  SquadText,
  Line,
  InfoMotorist,
  Number,
  Type,
  Names,
  MessageBox,
  Chat,
  TextChat,
  Circle,
} from './styles';

const WaitingCare: React.FC = () => {
  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={mapStyle}
        initialRegion={{
          latitude: -5.917921,
          longitude: -35.26359,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      />
      <LinesIcon />
      <Alert
        top={34}
        title="Sincronize a sua MiBand 4"
        action="Sincronizar Agora"
      >
        Sincronize seu relógio inteligente e compartilhe suas informações.
      </Alert>
      <Bottom height={308}>
        <ContainerInfo>
          <DescriptionTitle>Estamos a Caminho</DescriptionTitle>
          <Squad>
            <SquadText>3 min</SquadText>
          </Squad>
        </ContainerInfo>
        <Line />
        <InfoMotorist>
          <Image source={imagem} />
          <View>
            <Number>IFS2147</Number>
            <Type>Chevrolet Onix</Type>
          </View>
        </InfoMotorist>
        <Names>Juliana e Fernando</Names>
        <MessageBox>
          <Chat>
            <TextChat>Alguma observação?</TextChat>
          </Chat>
          <Circle>
            <Call />
          </Circle>
        </MessageBox>
      </Bottom>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default WaitingCare;
