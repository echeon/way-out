import React, { Component } from 'react';
import {
  View,
  ScrollView,
  ListView,
  Text,
  TouchableOpacity,
 } from 'react-native';
import { colors, globals } from '../../styles';
import NavigationBar from '../shared/NavigationBar'
import BackButton from '../shared/BackButton'
import InstructionBar from '../shared/InstructionBar'
import { groupBy } from '../shared/helpers'
import { List, ListItem } from 'react-native-elements'

const plans = [
  {
    type: 'exit',
    name: '42 Street & 7 Avenue'
  },
  {
    type: 'exit',
    name: '41 Street & 7 Avenue'
  },
  {
    type: 'exit',
    name: '40 Street & 7 Avenue'
  },
  {
    type: 'transfer',
    name: 'N, Q, R'
  },
  {
    type: 'transfer',
    name: 'S'
  },
  {
    type: 'transfer',
    name: 'A, C, E'
  },
  {
    type: 'transfer',
    name: '7'
  },
  {
    type: 'accessibility',
    name: 'accessibility'
  },
]

export default class PlanSelect extends Component {
  constructor(){
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.goBack = this.goBack.bind(this)
    this.visitResult = this.visitResult.bind(this)
    this.renderRow = this.renderRow.bind(this)
    this.plans = groupBy(plans, 'type')
  }

  goBack(){
    this.props.navigator.pop()
  }

  visitResult() {
    this.props.navigator.push({ name: 'ResultView' })
  }

  renderRow(plan, sectionId) {
    return (
      <View>
        <ListItem
          onPress={this.visitResult}
          key={sectionId}
          title={plan.name}
        />
      </View>
    )
  }


  render(){
    return (
      <View style={globals.flexContainer}>
        <NavigationBar
          title='Plan'
          leftButton={<BackButton handlePress={this.goBack}/>}
        />
      <InstructionBar prompt='Select your plan' />
        <ScrollView>
            {
              Object.keys(this.plans).map(type => {
                const plans = this.plans[type]
                return (
                  <View style={{marginTop: 10}}>
                    <Text style={{paddingLeft: 5, marginBottom: 5}}>{type}</Text>
                    <List containerStyle={{marginTop: 0}}>
                      <ListView
                        renderRow={this.renderRow}
                        dataSource={this.ds.cloneWithRows(plans)}
                      />
                    </List>
                  </View>
                )
              })
            }
        </ScrollView>
      </View>
    )
  }
}
