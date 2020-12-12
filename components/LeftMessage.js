import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import materialTheme from '../constants/Theme';

const { width } = Dimensions.get('screen');

class LeftMessage extends React.Component {
  render() {
    const { navigation, product, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

    return (
      <Block  flex  style={styles.leftMesage}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('ChatContainer', { product: product })}>
          <Block >
            <Text size={15} muted={!priceColor} color={"black"}>Call Me Tade</Text>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

export default withNavigation(LeftMessage);

const styles = StyleSheet.create({
    leftMesage: {
        backgroundColor: "#c8d6e5",
        borderRadius: 20,
        padding: 10,
        marginTop: 10,
        width: 200

    },
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
  imageContainer: {
    elevation: 1,
    width: width * 0.30
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
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
 

});