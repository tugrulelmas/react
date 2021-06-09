export default function Page() {
    const sayHello = () => {
        console.log("Hello world");
    }

    return (
        <>
            <button onClick={sayHello}>Click Me!</button>
        </>
    );
}

/*
import React from 'react';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    sayHello = () => {
        console.log("Hello world");
    }

    render() {
        return (
            <>
                <button onClick={this.sayHello}>Click Me!</button>
            </>
        );
    }
}
*/