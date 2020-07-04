// src/index.tsx

import * as React from "react";
import * as ReactDOM from "react-dom";

import App from './App';
import Clock from "./components/clock";

// Rendering a Functional Component
const FunctionalComponent = () => <div>1) I am a stateless React TypeScript functional component</div>;

// Rendering Functional components with props
interface Props {
    name: string,
}
const FunctionalComponentWithProps: React.FC<Props> = (props) => {
    return <div>{props.name}</div>;
}

ReactDOM.render(
    <React.StrictMode>
        <FunctionalComponent />
        <FunctionalComponentWithProps name={'2) I am a React TypeScript functional component with props'} />
        <Clock timeZoneDifference={5} name={'3) I am a React TypeScript class component with props'} />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);


