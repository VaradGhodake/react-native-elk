import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import SwipeComponent from './SwipeComponent'

const resizeMode = 'center';

export default class TestCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        { text : 'Italy', remote : 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&w=1000&q=80'}, 
        { text : 'US', remote : 'https://blog.aerlingus.com/wp-content/uploads/2019/03/the-space-needle-with-seattle-skyline-portrait.jpg'}, 
        { text : 'UK', remote : 'https://i.pinimg.com/736x/e5/bf/94/e5bf9479419b85615b87042434aca3f3.jpg'}, 
      ],
      sliderWidth : Dimensions.get('window').width,
      itemWidth : Dimensions.get('window').width * 9 / 10,
    }
  }
 
    _renderItem ({item, index}) {
        return (
          // <View>
            <SwipeComponent item={item} resizeMode={resizeMode}/>
          // 
          //   <View
          //     style={{
          //     flex: 1,
          //   }}
          //   >
          //     <View
          //       style={{
          //         position: 'absolute',
          //         top: 0,
          //         left: 0,
          //         width: '100%',
          //         height: '100%',
          //     }}
          //     >
          //       <Image
          //         style={{
          //           flex: 1,
          //           resizeMode,
          //       }}
          //         source={{ uri: remote }}
          //       />
          //     </View>
          //     <View
          //       style={{
          //         flex: 1,
          //         backgroundColor: 'transparent',
          //         justifyContent: 'center',
          //       }}
          //     >
          //       <Text
          //         style={{
          //           textAlign: 'center',
          //           fontSize: 30,
          //           color:'#F5FCFF'
          //         }}
          //       >
          //         {item}
          //       </Text>
          //     </View>
          //   </View>
          // </View>
        );
    }
 
    render () {
        return (
            <Carousel
              layout={'default'}
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={this.state.sliderWidth}
              itemWidth={this.state.itemWidth}
            />
        );
    }
}