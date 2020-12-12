import React from 'react';
import * as Font from 'expo-font';
import { createIconSetFromIcoMoon, AntDesign} from '@expo/vector-icons';
import { Icon } from 'galio-framework';

import GalioConfig from '../assets/fonts/galioExtra';

const GalioExtra = require('../assets/fonts/galioExtra.ttf');
const IconGalioExtra = createIconSetFromIcoMoon(GalioConfig, 'GalioExtra');

export default class IconExtra extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({ GalioExtra: GalioExtra });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { name, family, ...rest } = this.props;
    
    if (name && family && this.state.fontLoaded) {
      if (family === 'GalioExtra') {
        return <IconGalioExtra name={name} family={family} {...rest} />;
      }
      return <Icon name={name} size={24} family={family} color="black" />;
    }

    return null;
  }
}
