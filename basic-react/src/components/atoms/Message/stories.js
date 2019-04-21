import React from 'react';
import { storiesof, storiesOf } from '@storybook/react';

import Message from '.';

storiesOf ('Atoms / Message', module)
    .add ('with HelLo content', () => {
        return (
            <Message>Hello</Message>
        )
    })
    .add('with content string date', () => {
        return (
            <Message>12 January 2019 </Message>
        )
    })