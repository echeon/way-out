import React, { Component } from 'react'
import NavigationBar from 'react-native-navbar'
import { colors } from '../../styles'

export default ({title, leftButton, rightButton}) => {
  const titleConfig = {
    title: title.toUpperCase(),
    tintColor: colors.primaryColorText,
  }

  const statusBarConfig = {
    style: 'light-content'
  }

  return (
    <NavigationBar
      title={titleConfig}
      tintColor={colors.primaryColor}
      statusBar={statusBarConfig}
      leftButton={leftButton}
      rightButton={rightButton}
    />
  )
}
