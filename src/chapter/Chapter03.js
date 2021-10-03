import React, { Component } from 'react';
import Counter from '../component/Counter';
import Info from '../component/Info';

class Chapter03 extends Component {
    render() {
        return (
            <div>
                <Info></Info>
                <Counter></Counter>
            </div>
        );
    }
}

export default Chapter03;