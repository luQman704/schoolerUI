import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { Block, Button, Text, theme, Input } from 'galio-framework';

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';

export default class Login extends React.Component {


    renderList = () => {
        const { navigation } = this.props;
    return (
        <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex center>
          <ImageBackground
            source={{  uri: Images.Onboarding }}
            style={{ height: height, width: width, marginTop: '-55%', zIndex: 1 }}
          />
        </Block>
        <Block flex space="between" style={styles.padded}>
                <Block flex space="between"  style={{ zIndex: 2 }}>
                <Block row>
                <Text color="white" size={50}>Login</Text>
                    </Block>
                    <Block center>
                    <Text size={16} color='rgba(255,255,255,255)'>
                UserName
              </Text>
                    <Input placeholder="rounded input" rounded  color={materialTheme.COLORS.BUTTON_COLOR} style={{ borderColor: materialTheme.COLORS.BUTTON_COLOR }}/>
                    </Block>
                    <Block center>
                    <Text size={16} color='rgba(255,255,255,255)'>
                Password
              </Text>
                    <Input placeholder="password" password viewPass rounded />
                    </Block>
                    
           
            <Block center>
              <Button
                shadowless
                style={styles.button}
                color={"#10ac84"}
                onPress={() => navigation.navigate('App')}>
                            login
              </Button>
              <Text onPress={() => navigation.navigate('Register')} size={16} color='rgba(255,255,255,0.6)'>
                Don't Have An Account? Register
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    )
  }

    render() {
        
    return (
      <Block flex center style={styles.container}>
        {this.renderList()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
    },
    container: {
        backgroundColor: "black",
      },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    },
    padded: {
        paddingHorizontal: theme.SIZES.BASE * 2,
        position: 'relative',
        bottom: theme.SIZES.BASE,
      },
      button: {
        width: width - theme.SIZES.BASE * 4,
        height: theme.SIZES.BASE * 3,
        shadowRadius: 0,
        shadowOpacity: 0,
      },
});
