import React, { useCallback } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { useNavigation } from '@react-navigation/native';
import mapStyle from '../../utils/MapStyleUber';

import Bottom from '../../components/Bottom';
import LinesIcon from '../../components/LinesIcon';

import MapIcon from '../../assets/map.svg';
import MiniArrowRight from '../../assets/miniarrowright.svg';

import {
  DescriptionTitle,
  BottomHeader,
  Line,
  BottomInfos,
  SearchContainer,
  LatastPosition,
  Circle,
  TitleLocal,
  TextBox,
} from './styles';

const LocalCare: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateToWaitingCare = useCallback(() => {
    navigate('WaitingCare');
  }, [navigate]);

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
      <Bottom height={318}>
        <BottomHeader>
          <DescriptionTitle>Selecione o Local de Partida</DescriptionTitle>
          <Line />
        </BottomHeader>
        <BottomInfos>
          <SearchContainer>
            <DescriptionTitle>Selecionar Local</DescriptionTitle>
          </SearchContainer>
          <LatastPosition onPress={handleNavigateToWaitingCare}>
            <Circle>
              <MapIcon />
            </Circle>
            <TextBox>
              <DescriptionTitle>Local Atual</DescriptionTitle>
              <TitleLocal>Av. Sen. Salgado Filho, 3006</TitleLocal>
            </TextBox>
            <MiniArrowRight />
          </LatastPosition>
        </BottomInfos>
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

export default LocalCare;
