import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Picker } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import { TabView, SceneMap } from 'react-native-tab-view';

import { Icon, Product } from '../components/';
import MessageContainer from '../components/MessageContainer';

const { width } = Dimensions.get('screen');
import products from '../constants/products';

export default class ChatContainer extends React.Component {
  renderSearch = () => {
    const { navigation } = this.props;
    const iconCamera = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />

    return (
      <Input
        right
        color="black"
        style={styles.search}
        iconContent={iconCamera}
        placeholder="search company by username?"
      />
    )
  }
  
  renderTabs = () => {
    const { navigation } = this.props;

    return (
      <Block row style={styles.tabs}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Pro')}>
          <Block row middle>
            <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Categories</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Pro')}>
          <Block row middle>
            <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Best Deals</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Pro')}>
          <Block row middle>
            <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Best Deals</Text>
          </Block>
        </Button>
      </Block>
    )
  }

  renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block >
        <MessageContainer />
        </Block>
      </ScrollView>
    )
  }

  renderFooter = () =>{
      return (
          <Block row space="between" style={{backgroundColor: "white", width: width, padding: 3}}>
              <Block center style={{paddingLeft: 20}}>
              <Icon size={25}  name="attach-file" family="material" />
              </Block>
              <Block left>
               <Input placeholder="rounded input" rounded style={styles.footerInput} />
              </Block>
              <Block center style={{paddingRight: 20}}>
              <Icon size={25}  name="send" family="feather" />
              </Block>
          </Block>
      )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderProducts()}
        {this.renderFooter()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  footerInput: {
    width: width * 0.75, 
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
    width: width ,
    paddingVertical: theme.SIZES.BASE * 2,
  },
});
