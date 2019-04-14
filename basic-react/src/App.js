import React from 'react';
import Buttons from './components/molecules/Buttons';
import Alerts from './components/organisms/Alert';



export default class App extends React.Component {
  render(){
    return(
        <div>
          <Buttons/>
          <Buttons/>
          <Buttons/>
          <Buttons/>
          <Buttons/>
          <Buttons/>
        </div>
    )
  }
}