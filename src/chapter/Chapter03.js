import React, { Component } from 'react';
import Counter from '../component/Counter';
import Info from '../component/Info';
import InfoReducer from '../component/InfoReducer';
import CounterReducer from '../component/CounterReducer';
import Average from '../component/Average';

class Chapter03 extends Component {
    render() {
        return (
            <div>
                <Info></Info>
                <InfoReducer></InfoReducer>
                <Counter></Counter>
                <CounterReducer></CounterReducer>
                <Average></Average>
            </div>
        );
    }
}

export default Chapter03;