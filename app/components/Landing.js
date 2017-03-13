import React, { Component } from 'react'
import { TabBarIOS } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, globals } from '../styles'
import InfoView from './InfoView'
import LineView from './LineView'

console.disableYellowBox = true;

export default class Landing extends Component {
  constructor() {
    super()
    this.state = {
      selectedTab: 'LineView'
    }
  }

  render() {
    return (
      <TabBarIOS
        barTintColor='#EEEEEE'
        translucent={false}
      >
        <Icon.TabBarItemIOS
          title=''
          selected={this.state.selectedTab === 'LineView'}
          iconName='ios-subway'
          onPress={() => this.setState({ selectedTab: 'LineView' })}
        >
          <LineView />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title=''
          selected={this.state.selectedTab === 'InfoView'}
          iconName='md-help-circle'
          onPress={() => this.setState({ selectedTab: 'InfoView' })}
        >
          <InfoView />
        </Icon.TabBarItemIOS>
      </TabBarIOS>

    )
  }
}
