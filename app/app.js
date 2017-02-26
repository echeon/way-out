import React, { Component } from 'react'
import { TabBarIOS } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { globals } from './styles'
import InfoView from './components/InfoView'
import LineView from './components/LineView'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedTab: 'LineView'
    }
  }

  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItemIOS
          title=''
          selected={this.state.selectedTab === 'LineView'}
          iconName='directions-subway'
          onPress={() => this.setState({ selectedTab: 'LineView' })}
        >
          <LineView />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title=''
          selected={this.state.selectedTab === 'InfoView'}
          iconName='info-outline'
          onPress={() => this.setState({ selectedTab: 'InfoView' })}
        >
          <InfoView />
        </Icon.TabBarItemIOS>
      </TabBarIOS>

    )
  }
}