import React, { Component } from 'react';
import { Image } from 'react-native';
import { 
  Container, 
  Header, 
  Content, 
  Card, 
  CardItem, 
  Thumbnail, 
  Text, 
  Button, 
  Icon, 
  Left, 
  Body, 
  Right } from 'native-base';

export default class CardWithImage extends Component {
  render() {
    const text = this.props.item.text;
    return (
      <Container style={{ 
        marginTop : 50,
        maxHeight : 550,
       }}
      scrollEnabled={false}
       >
        <Content>
          <Card>
            <CardItem cardBody>
              <Image 
                source={{ uri: this.props.item.remote }} 
                style={{ height: 475, width: null, flex: 1 }}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="ios-navigate" />
                  <Text>{ text }</Text>
                </Button>
              </Left>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}