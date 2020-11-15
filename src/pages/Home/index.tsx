import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import mapStyle from '../../utils/MapStyleUber';

import Alert from '../../components/Alert';
import Bottom from '../../components/Bottom';
import LinesIcon from '../../components/LinesIcon';

import ArrowDown from '../../assets/miniarrowdown.svg';
import MiniArrowRight from '../../assets/miniarrowright.svg';
import MapIcon from '../../assets/map.svg';
import Clock from '../../assets/clock.svg';

import {
  SearchContainer,
  DescriptionTitle,
  TimerText,
  MarkerTime,
  LatastPosition,
  Circle,
  TextBox,
  TitleLocal,
} from './styles';

const Home: React.FC = () => {
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

      <Alert top={40} title="UberCare" action="Saiba mais">
        Suas viagens agora estão mais seguras com o novo UberCare.
      </Alert>

      <Bottom height={218}>
        <SearchContainer>
          <DescriptionTitle>Vai para onde?</DescriptionTitle>
          <MarkerTime>
            <Clock style={{ marginRight: 8 }} />
            <TimerText>Agora</TimerText>
            <ArrowDown style={{ marginLeft: 8 }} />
          </MarkerTime>
        </SearchContainer>
        <LatastPosition>
          <Circle>
            <MapIcon />
          </Circle>
          <TextBox>
            <DescriptionTitle>Local Atual</DescriptionTitle>
            <TitleLocal>Av. Sen. Salgado Filho, 3006</TitleLocal>
          </TextBox>
          <MiniArrowRight />
        </LatastPosition>
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

export default Home;
