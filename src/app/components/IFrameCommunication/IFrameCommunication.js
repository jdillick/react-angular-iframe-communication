import React, { Component, Fragment } from 'react';
// import Frame, { FrameContextConsumer } from 'react-frame-component';
import { Bellhop } from 'bellhop-iframe';

/**
 * -----------------------------------------------------------------------------
 * React Component: IFrameCommunication
 * -----------------------------------------------------------------------------
 */
export default class IFrameCommunication extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.input = React.createRef();
        this.iframe = React.createRef();
        this.bellhop = new Bellhop();
    }

    shouldComponentUpdate() {
        return false;
    }

    onSend() {
        if (this.input.current.value) {
            this.bellhop.send('products', [this.input.current.value]);
            this.input.current.value = '';
        }
    }

    componentDidMount() {
        this.bellhop.connect(this.iframe.current);
    }

    render() {
        const rowStyle = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '33vw',
            margin: '60px auto',
            minHeight: '100px',
        };

        return (
            <main>
                <section style={rowStyle}>
                    React Control
                    <input
                        ref={this.input}
                        type='text'
                        placeholder='Add item from React'
                    />
                    <button onClick={this.onSend.bind(this)}>
                        Send to iframe
                    </button>
                </section>

                <section style={rowStyle}>
                    Angular iFrame
                    <iframe
                        id={'iframe-ng'}
                        style={{ border: '1px solid grey', padding: '20px' }}
                        onLoad={() => {}}
                        frameBorder={0}
                        scrolling={'no'}
                        ref={this.iframe}
                        src='/assets/ng/ng.html'
                    />
                </section>
            </main>
        );
    }
}

IFrameCommunication.defaultProps = {};
