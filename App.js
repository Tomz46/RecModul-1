/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import {
  ScrollView,
  View,
  Image,
  ImageBackground,
  Text,
  StatusBar,
  TouchableHightlight
  
} from 'react-native'
import ViewPager from '@react-native-community/viewpager';
import{createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Styles} from './src/style/Style'
import shopScreen  from './src/screens/Shop'

function App(props) {
  
 return (
          
<View style= {Styles.wrapper}>
         <View style={Styles.header}>
          <Text style={Styles.title}> Logo Shop </Text>
          </View>
 <ScrollView>
<View>

  <ViewPager showPageIndicator={true} style={Styles.viewBanner} initialPage={0} >
      <View key="1">
       <Image style={Styles.banner} source={require('./src/images/banner-babastudio.webp')}/>
      </View> 
      <View key="2">
        <Image style={Styles.banner} source={require('./src/images/banner-babastudio.webp')}/>
      </View>
      <View key="3">
        <Image style={Styles.banner} source={require('./src/images/banner-babastudio.webp')}/>
      </View>
      <View key="4">
        <Image style={Styles.banner} source={require('./src/images/banner-babastudio.webp')}/>
      </View>
      <View key="5">
        <Image style={Styles.banner} source={require('./src/images/banner-babastudio.webp')}/>
      </View>
      <View key="6">
        <Image style={Styles.banner} source={require('./src/images/banner-babastudio.webp')}/>
      </View>
    </ViewPager>

    

<View style={[Styles.container,Styles.shadow]}>
<Text style={Styles.titleSection}>Smart Home</Text>
  
  <ScrollView horizontal={true}> 
        <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
          style={Styles.boxPaketShop}>    
              <Text style={Styles.textPaket}> Website </Text>   
              </ImageBackground>
        <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
           style={Styles.boxPaketShop}> 
             <Text style={Styles.textPaket}> Website </Text>            
               </ImageBackground>
        <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
            style={Styles.boxPaketShop}>  
              <Text style={Styles.textPaket}> Website </Text>     
                </ImageBackground>
        <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
            style={Styles.boxPaketShop}> 
              <Text style={Styles.textPaket}> Website </Text>            
                </ImageBackground>
        <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
          style={Styles.boxPaketShop}>    
              <Text style={Styles.textPaket}> Website </Text>   
              </ImageBackground>
        <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
           style={Styles.boxPaketShop}> 
             <Text style={Styles.textPaket}> Website </Text>            
               </ImageBackground>
        <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
            style={Styles.boxPaketShop}>  
              <Text style={Styles.textPaket}> Website </Text>     
                </ImageBackground>
        <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
            style={Styles.boxPaket}> 
              <Text style={Styles.textPaket}> Website </Text>            
                </ImageBackground>
  </ScrollView>
</View>

<View style={[Styles.container,Styles.shadow]}>
          <Text style={Styles.titleSection}>Smart Office</Text>
          
      <ScrollView horizontal={true}> 
        <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
          style={Styles.boxPaket}> 
          <Text style={Styles.textPaket}> Website </Text>            
          </ImageBackground>
              <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
              style={Styles.boxPaket}> 
              <Text style={Styles.textPaket}> Website </Text>            
              </ImageBackground>
                    <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
                    style={Styles.boxPaket}> 
                    <Text style={Styles.textPaket}> Website </Text>            
                    </ImageBackground>
                          <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
                          style={Styles.boxPaket}> 
                          <Text style={Styles.textPaket}> Website </Text>            
                          </ImageBackground>
                              <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
                              style={Styles.boxPaket}> 
                              <Text style={Styles.textPaket}> Website </Text> 
                                 </ImageBackground>
<ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
          style={Styles.boxPaket}> 
          <Text style={Styles.textPaket}> Website </Text>            
          </ImageBackground>
              <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
              style={Styles.boxPaket}> 
              <Text style={Styles.textPaket}> Website </Text>            
              </ImageBackground>
                    <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
                    style={Styles.boxPaket}> 
                    <Text style={Styles.textPaket}> Website </Text>            
                    </ImageBackground>
                          <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
                          style={Styles.boxPaket}> 
                          <Text style={Styles.textPaket}> Website </Text>            
                          </ImageBackground>
                              <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
                              style={Styles.boxPaket}> 
                              <Text style={Styles.textPaket}> Website </Text>  
                                </ImageBackground>
      </ScrollView>
    </View>
    </View>
  </ScrollView>  

  <View style={Styles.header}>
          <Text style={Styles.title}> @copyright 2020 </Text>
         
           </View>
</View>
           
  );
}

const appNavigator = createStackNavigator({
  Home : {
    screen : App
    
  },
  Shop : {
    screen: shopScreen
  }
})

export default createAppContainer (appNavigator);
