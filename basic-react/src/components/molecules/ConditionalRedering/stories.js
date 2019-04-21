import React from 'react';
import { storiesOf } from '@storybook/react';

import ConditionalRendering from '.';

storiesOf('Molecules / ConditionalRendering', module)
    .add('simple', () => {
        return (
            <ConditionalRendering/>
        )
    }
)
