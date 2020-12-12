import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Picker } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import { TabView, SceneMap } from 'react-native-tab-view';

import { Icon} from '../components/';
import Chats from '../components/chatList'
import Stories from '../components/Stories'

const { width } = Dimensions.get('screen');
import products from '../constants/products';

export default class chatContact extends React.Component {
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
        contentContainerStyle={styles.products}
        >
        <Block flex>
          
          <Chats product={products[0]} horizontal/>
          <Chats product={products[1]} horizontal />
          <Chats product={products[0]} horizontal/>
          <Chats product={products[1]} horizontal /> 
          <Chats product={products[0]} horizontal/>
          <Chats product={products[1]} horizontal />
        </Block>
      </ScrollView>
    )
  }

  renderStories = () =>{
      return (
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      
        >
         
          <Stories product={products[0]} horizontal/>
          <Stories product={products[0]} horizontal/>
          <Stories product={products[0]} horizontal/>
          <Stories product={products[0]} horizontal/>
          <Stories product={products[0]} horizontal/>
          <Stories product={products[0]} horizontal/>
          <Stories product={products[0]} horizontal/>
          
          
      </ScrollView>
      )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
          <Block style={{ backgroundColor: "white", padding: 10}} card >
              <Block>
                  <Text>
                      Stories
                  </Text>
              </Block>
              <Block row style={{ marginTop: 10}}>
          {this.renderStories()}

              </Block>
          </Block>
     
        {this.renderProducts()}

      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
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
});
