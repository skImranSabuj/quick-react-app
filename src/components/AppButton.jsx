import React from 'react'
import { appStyles } from '../utils/appStyles'

function AppButton(props) {
  console.log("props: ",props)
  return (
    <button {...props} style={appStyles[props.name]}>{props.children}</button>
  )
}

export default AppButton