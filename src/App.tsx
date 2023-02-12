import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is a mid-sized header!</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>
                <h1>Hello World!</h1>
                <span style={{ color: "blue" }}>My name is Aparna Roy.</span>
            </div>
            <br />
            <Button onClick={() => console.log("I am logged")}>Click Me</Button>
            <br />
            <br />
            <div>
                <Container>
                    <Row>
                        <Col>First column.</Col>
                        <Col>
                            Second column. You can put whatever you want in
                            here, and it will be on the right side. Maybe try
                            adding an image?
                        </Col>
                    </Row>
                </Container>
            </div>
            ;
        </div>
    );
}

export default App;
