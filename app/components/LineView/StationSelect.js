import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ListView,
  ScrollView,
 } from 'react-native';
import { colors, globals } from '../../styles';
import NavigationBar from '../shared/NavigationBar';
import BackButton from '../shared/BackButton';
import InstructionBar from '../shared/InstructionBar';
import { List, ListItem } from 'react-native-elements';
import stations from './stations';
import { groupBy } from '../shared/helpers';

export default class StationSelect extends Component {
  constructor() {
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    // this.state = {
    //   dataSource: ds.cloneWithRows(stations),
    // };
    this.goBack = this.goBack.bind(this)
    this.visitResult = this.visitResult.bind(this)
    this.renderRow = this.renderRow.bind(this)
    this.stations = groupBy(stations, 'borough')
  }

  goBack() {
    this.props.navigator.pop();
  }

  visitResult() {
    this.props.navigator.push({ name: 'ResultView' })
  }

  renderRow(station, sectionId) {
    return (
      <View style={[{borderLeftWidth: 10, borderLeftColor: 'red'}]}>
        <ListItem
          onPress={this.visitResult}
          underlayColor='yellow'
          key={sectionId}
          title={station.name}
          subtitle={'/ ' + station.crossStreet}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={globals.flexContainer}>
        <NavigationBar
          title='Station'
          leftButton={<BackButton handlePress={this.goBack}/>}
        />
        <InstructionBar prompt='Select the stop' />
        <ScrollView>
            {
              Object.keys(this.stations).map(borough => {
                const stations = this.stations[borough]
                return (
                  <View style={{marginTop: 10}}>
                    <Text style={{paddingLeft: 5, marginBottom: 5}}>{borough}</Text>
                    <List containerStyle={{marginTop: 0}}>
                      <ListView
                        renderRow={this.renderRow}
                        dataSource={this.ds.cloneWithRows(stations)}
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
