import React, { Component } from 'react';
import Counter from '../component/Counter';
import Info from '../component/Info';
import CounterReducer from '../component/CounterReducer';

class Chapter03 extends Component {
    render() {
        return (
            <div>
                <Info></Info>
                <Counter></Counter>
                <CounterReducer></CounterReducer>
            </div>
        );
    }
}

export default Chapter03;