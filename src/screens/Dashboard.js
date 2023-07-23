import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'

import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

import { Button, Text } from 'react-native';
import { Drawer } from 'react-native-drawer-layout';


export default function Dashboard({ navigation }) {
  return (
    <Background>
       
       <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return <Text>Drawer content</Text>;
      }}
    >
      <Button
        onPress={() => setOpen((prevOpen) => !prevOpen)}
        title={`${open ? 'Close' : 'Open'} drawer`}
      />
    </Drawer>
    </Background>
  )
}
