import React, { Component } from 'react';
import Counter from '../component/Counter';
import Info from '../component/Info';
import InfoReducer from '../component/InfoReducer';
import CounterReducer from '../component/CounterReducer';
import Average from '../component/Average';
import AverageMemo from '../component/AverageMemo';

class Chapter03 extends Component {
    render() {
        return (
            <div>
                <Info></Info>
                <InfoReducer></InfoReducer>
                <Counter></Counter>
                <CounterReducer></CounterReducer>
                <p/>
                <Average></Average>
                <AverageMemo></AverageMemo>
            </div>
        );
    }
}

export default Chapter03;