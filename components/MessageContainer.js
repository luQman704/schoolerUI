import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import LeftMessage from './LeftMessage';
import RightMessage from './RightMessage'

import materialTheme from '../constants/Theme';

const { width } = Dimensions.get('screen');

class MessageContainer extends React.Component {
  render() {
    const { navigation, product, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

    return (
        <ImageBackground
            source={require('../assets/images/back.jpg')}
            style={styles.image}
          >
               <Block flex space="between">
               <Block>
        <LeftMessage />
          </Block>
        <Block right>
        <RightMessage />
        </Block>
        <Block>
        <LeftMessage />
          </Block>
        <Block right>
        <RightMessage />
        </Block>
        <Block>
        <LeftMessage />
          </Block>
        <Block right>
        <RightMessage />
        </Block>
        <Block>
        <LeftMessage />
          </Block>
        <Block right>
        <RightMessage />
        </Block>
        <Block>
        <LeftMessage />
          </Block>
        <Block right>
        <RightMessage />
        </Block>
        <Block>
        <LeftMessage />
          </Block>
        <Block right>
        <RightMessage />
        </Block>
        <Block>
        <LeftMessage />
          </Block>
        <Block right>
        <RightMessage />
        </Block>
        <Block>
        <LeftMessage />
          </Block>
        <Block right>
        <RightMessage />
        </Block>
        <Block>
        <LeftMessage />
          </Block>
        <Block right>
        <RightMessage />
        </Block>
        <Block>
        <LeftMessage />
          </Block>
        <Block right>
        <RightMessage />
        </Block>
        
               </Block>

              </ImageBackground>
    );
  }
}

export default withNavigation(MessageContainer);

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 100,
  },
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    
  },
  imageContainer: {
    elevation: 1,
    width: width * 0.30
  },
  image: {
    borderRadius: 3,
  
    marginTop: -30,
    width: width,
    marginBottom: -30,
    padding: 5
  },
  horizontalImage: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});