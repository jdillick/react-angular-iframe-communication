/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component, Fragment } from 'react';

/**
 * -----------------------------------------------------------------------------
 * Toolkit Element: ColorTest
 * -----------------------------------------------------------------------------
 */

class ColorTest extends Component {
    static dependencies() {
        return typeof module !== 'undefined' ? module.children : [];
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <img src='/assets/images/color-tests.png' />
            </Fragment>
        );
    }
}

// Default properties
ColorTest.defaultProps = {};

export default ColorTest;
