import React from 'react';
import { Button } from 'reactstrap';

export default class Buttons extends React.Component {
  render(){
    return(
      <div>
          <Button color="primary">Primary</Button>{''}
          <Button color="secondary">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="info">Info</Button>
          <Button color="warning">Warning</Button>
          <Button color="danger">Danger</Button>
          <Button color="link">Link</Button>
      </div>
    )
  }
}