import React from 'react';
import { MainWrapper, PictureWrapper, InformationWrapper } from './styled';
import BadgePhoto from '../../components/BadgePhoto';
import { Text } from 'react-native';
import Card from '../../components/Card';
import { Icon } from 'react-native-elements';
import { colors } from '../../styles';

const PilotProfile = () => {
  return ( 
    <MainWrapper>
      <PictureWrapper>
        <BadgePhoto 
          width={150}
          height={150}
          borderRadius={100}
          imageUrl={"https://www.coogfans.com/uploads/db5902/original/3X/8/1/81173237ffa580ef710b0862fdddaac163274db1.jpeg"}
        /> 
      </PictureWrapper>
      <InformationWrapper>
        <Card 
          width={100}
          height={100}
          fontSize={15}
          onPress={() => {}}
          icon={
            <Icon 
              name='plane'
              type='font-awesome'
              size={40} color={colors.white} 
            />}          
          header="Aeronaves"
        />
                <Card 
          width={100}
          height={100}
          fontSize={15}
          onPress={() => {}}
          icon={
            <Icon 
              name='plane'
              type='font-awesome'
              size={40} color={colors.white} 
            />}          
          header="Aeronaves"
        />
                <Card 
          width={100}
          height={100}
          fontSize={15}
          onPress={() => {}}
          icon={
            <Icon 
              name='plane'
              type='font-awesome'
              size={40} color={colors.white} 
            />}          
          header="Aeronaves"
        />
                <Card 
          width={100}
          height={100}
          fontSize={15}
          onPress={() => {}}
          icon={
            <Icon 
              name='plane'
              type='font-awesome'
              size={40} color={colors.white} 
            />}          
          header="Aeronaves"
        />
                <Card 
          width={100}
          height={100}
          fontSize={15}
          onPress={() => {}}
          icon={
            <Icon 
              name='plane'
              type='font-awesome'
              size={40} color={colors.white} 
            />}          
          header="Aeronaves"
        />
                <Card 
          width={100}
          height={100}
          fontSize={15}
          onPress={() => {}}
          icon={
            <Icon 
              name='plane'
              type='font-awesome'
              size={40} color={colors.white} 
            />}          
          header="Aeronaves"
        />

      </InformationWrapper> 
    </MainWrapper>

  );
};

export default PilotProfile;