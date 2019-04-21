import React from 'react';
import { storiesOf } from '@storybook/react';

import ListsAndKeys from '.';

storiesOf('Molecules / ListsAndKeys', module)
    .add('simple', () => {
        return (
            <ListsAndKeys/>
        )
    }
)
