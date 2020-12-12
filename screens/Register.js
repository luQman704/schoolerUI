import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, ScrollView, Image } from 'react-native';
import { Block, Button, Text, theme, Input } from 'galio-framework';
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";

const { height, width } = Dimensions.get('screen');
import Spinner from 'react-native-loading-spinner-overlay';

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';

export default class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      avatarSource: "https://reactnative.dev/img/tiny_logo.png",
      user_name: '',
      password: '',
      confirm_password: '',
      email: '',
      name: '',
      phone_number: '',
      company_name: '',
      url: 'http://fc84b48cb81c.ngrok.io',
      isLoading: false,
      errors:[],
    };
  }
  componentDidMount() {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }
  componentDidUpdate() {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }

  openImagePicker = async () => {
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    console.log(result);

    if (!result.cancelled) {
      let res = "data:image/png;base64,"+result.base64;
      this.setState({
        avatarSource: res,
      });
    }

  }
  validateUserInput(){
    return new Promise((resolve, reject) =>{
      let err = []
      if(!this.state.user_name){
        err['user_name'] = ('Please Add User Name')
      }
      if(!this.state.company_name){
        err.push('Please Type In A Company Name')
      }
      if(!this.state.avatarSource){
        err.push('Please Choose A Picture')
      }
      if(!this.state.email){
        err.push('Please Type In Your Email')
      }
      if(!this.state.password){
        err.push('Please Type In Your Password')
      }
      if(!this.state.confirm_password){
        err.push('Please Confirm Password')
      }
      if(this.state.password != this.state.confirm_password){
        err.push('Password Do No Match')
      }
      if(!this.state.phone_number){
        err.push('Please Type In Your Phone Number')
      }
      if(err.length > 0){
        reject(err)
      }else{
        resolve()
      }
    })
  }
  doRegister = () => {
          let data = {
            user_name: this.state.user_name,
            company_name: this.state.company_name,
            avatar: this.state.avatarSource,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            phone_number: this.state.phone_number,
        }
        console.log(data)
        this.setState({
          isLoading: true
        })
        axios.post(this.state.url + '/api/account/create', data)
          .then(res => {
          
            if (res.data.success) {
                alert('Registration Successfuly Done')
                }
          })
          .catch(err => {
            alert('Sorry, An Error Occured, Please Try Again Later'+err)
          })
          .finally(() => {
            this.setState({
              isLoading: false
            })
        })
    
  }

    renderList = () => {
     
        const { navigation } = this.props;
    return (
        <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        
        <Block flex center style={styles.padded}>

          <Block flex space="between" style={{ zIndex: 2 }}>
              <Spinner
              visible={this.state.isLoading}
              textContent={'Loading...'}
              textStyle={styles.spinnerTextStyle}
            />
                <Block row>
                <Text color="white" size={30}>Register</Text>
                    </Block>
                <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.products}>
                    <Block>
                    <Block center>
                    <Text size={16} color='rgba(255,255,255,255)'>
                Name
              </Text>
                    <Input placeholder="password" onChangeText={text => this.setState({name: text})} bgColor="rgba(0, 0, 0, 0.5)"   style={{ borderColor: materialTheme.COLORS.BUTTON_COLOR }} />
                    </Block>
                    <Block center>
                    <Text size={16} color='rgba(255,255,255,255)'>
                UserName
              </Text>
                    <Input placeholder="rounded input" onChangeText={text => this.setState({user_name: text})} bgColor="rgba(0, 0, 0, 0.5)"   style={{ borderColor: materialTheme.COLORS.BUTTON_COLOR }}/>
                    </Block>
                    <Block center>
                    <Text size={16} color='rgba(255,255,255,255)'>
                Company Name
              </Text>
                    <Input placeholder="password"  bgColor="rgba(0, 0, 0, 0.5)"  onChangeText={text => this.setState({company_name: text})} style={{ borderColor: materialTheme.COLORS.BUTTON_COLOR }} />
                    </Block>
                    <Block center>
                    <Text size={16} color='rgba(255,255,255,255)'>
                Email
              </Text>
                    <Input placeholder="password"  bgColor="rgba(0, 0, 0, 0.5)"  onChangeText={text => this.setState({email: text})} style={{ borderColor: materialTheme.COLORS.BUTTON_COLOR }} />
                    </Block>
                    <Block center>
                    <Text size={16} color='rgba(255,255,255,255)'>
                Phone Number
              </Text>
                    <Input placeholder="password" bgColor="rgba(0, 0, 0, 0.5)" onChangeText={text => this.setState({phone_number: text})}  style={{ borderColor: materialTheme.COLORS.BUTTON_COLOR }} />
                    </Block>
                    <Block center>
                    <Text size={16} color='rgba(255,255,255,255)'>
                Password
              </Text>
                    <Input placeholder="password" bgColor="rgba(0, 0, 0, 0.5)" onChangeText={text => this.setState({password: text})} password viewPass style={{ borderColor: materialTheme.COLORS.BUTTON_COLOR }} />
                    </Block>
                    <Block center>
                    <Text size={16} color='rgba(255,255,255,255)'>
                Confirm Password
              </Text>
                    <Input placeholder="password" bgColor="rgba(0, 0, 0, 0.5)"  onChangeText={text => this.setState({confirm_password: text})}password viewPass style={{ borderColor: materialTheme.COLORS.BUTTON_COLOR }}  />
                    </Block>
                <Block center>
                <Text size={16} color='rgba(255,255,255,255)'>
                Company Logo
              </Text>
                  <Image source={{ uri: this.state.avatarSource }} style={styles.tinyLogo} />
                  <Button
                shadowless
                style={styles.tinyButton}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() => this.openImagePicker()}>
                            Upload Image
              </Button>
                     </Block>
                        </Block> 
                        </ScrollView>
           
            <Block center>
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() => this.doRegister()}>
                            Register
              </Button>
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
  spinnerTextStyle: {
    color: '#FFF'
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
  tinyLogo: {
    marginTop:10,
    width: 50,
    height: 50,
  },
  tinyButton :{
    width: 100
  },
  products: {
    marginTop: 10,
    paddingVertical: theme.SIZES.BASE * 2,
    },
    padded: {
        paddingHorizontal: theme.SIZES.BASE * 2,
        position: 'relative',
        bottom: theme.SIZES.BASE,
        marginTop: 20,
        
      },
      button: {
        width: width - theme.SIZES.BASE * 4,
        height: theme.SIZES.BASE * 3,
        shadowRadius: 0,
          shadowOpacity: 0,
        bottom: 0
      },
      cameraButton: {
        width: width - theme.SIZES.BASE * 2,
        height: theme.SIZES.BASE * 3,
        shadowRadius: 0,
          shadowOpacity: 0,
        bottom: 0
      },
});
