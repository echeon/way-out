import React, { Component } from 'react'
import {
  TabBarIOS,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

import Line from './Line'
import Info from './Info'

export default class Landing extends Component {
  constructor() {
    super()
    this.state = {
      selectedTab: 'Line'
    }
  }

  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItemIOS
          title=''
          selected={this.state.selectedTab === 'Line'}
          iconName='directions-subway'
          onPress={() => this.setState({ selectedTab: 'Line' })}
        >
          <Line />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title=''
          selected={this.state.selectedTab === 'Info'}
          iconName='info-outline'
          onPress={() => this.setState({ selectedTab: 'Info' })}
        >
          <Info />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    )
  }
}
