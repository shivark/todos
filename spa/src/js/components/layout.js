import React from 'react';
import AdditemForm from './add-item-form';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Todos!',
        };
    }

    render() {
        return (
          <div>
              <h1>{this.state.title}</h1>
              <AdditemForm />
            </div>
        );
    }
}