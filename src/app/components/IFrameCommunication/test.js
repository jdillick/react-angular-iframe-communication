import React from 'react';
import IFrameCommunication from './IFrameCommunication';
import { shallow } from 'reactium-core/enzyme';

test('<IFrameCommunication />', () => {
    const component = shallow(<IFrameCommunication />);

    expect(component.html().length).toBeGreaterThan(0);
});
