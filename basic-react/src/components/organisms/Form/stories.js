import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '.';

storiesOf('organisms / Form', module)
    .add('simple', () => {
        return (
            <Form/>
        )
    }
)
