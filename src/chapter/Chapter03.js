import React, { Component } from 'react';
import Counter from '../component/Counter';
import Info from '../component/Info';
import InfoReducer from '../component/InfoReducer';
import CounterReducer from '../component/CounterReducer';
import Average from '../component/Average';
import AverageMemo from '../component/AverageMemo';
import AverageWithCallback from '../component/AverageWithCallback';
import AverageRef from '../component/AverageRef';
import InfoCustomInput from '../component/InfoCustomInput';

class Chapter03 extends Component {
    render() {
        return (
            <div>
                <Info></Info>
                <InfoReducer></InfoReducer>
                <Counter></Counter>
                <CounterReducer></CounterReducer>
                <p>Normal</p>
                <Average></Average>
                <p>With Memo</p>
                <AverageMemo></AverageMemo>
                <p>With Callback</p>
                <AverageWithCallback></AverageWithCallback>
                <p>With useRef</p>
                <AverageRef></AverageRef>
                <p>Custom Reducer</p>
                <InfoCustomInput></InfoCustomInput>
            </div>
        );
    }
}

export default Chapter03;