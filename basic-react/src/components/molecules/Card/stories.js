import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '.';

storiesOf('Molecules / Card', module)
    .add('with no props and children', () => {
        return (
            <Card/>
        )
    }
)
