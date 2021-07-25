import { Fragment } from 'react';

import StreamBuilder from '../utils/StreamBuilder';

const Counter = ({ bloc }) => (
    <Fragment>
        <button onClick={() => bloc.increase()}>+</button>
        <button onClick={() => bloc.decrease()}>-</button>
        <lable size="large" color="olive">
            Count:
            <StreamBuilder
                initialData={0}
                stream={bloc.counter}
                builder={snapshot => <p>{snapshot.data}</p>}
            />
        </lable>
    </Fragment>
);

export default Counter;