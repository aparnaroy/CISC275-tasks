import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import puppy from "./assets/puppy.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>
                <h1>Hello World!</h1>
                <span style={{ color: "purple" }}>My name is Aparna Roy.</span>
                <br />
                <br />
                <img src={puppy} alt="A picture of a cute puppy" />
            </div>
            <br />
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <br />
            <br />
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    border: "1px solid red",
                                    width: 635,
                                    height: 26,
                                    backgroundColor: "red"
                                }}
                            >
                                List of Tasks I Need to Do:
                                <ul>
                                    <li>Add a header</li>
                                    <li>Add an image with alt text</li>
                                    <li>
                                        Add a list with at least three elements
                                    </li>
                                    <li>
                                        Change the background color of the
                                        header area
                                    </li>
                                    <li>
                                        Add a bootstrap button with the text Log
                                        Hello World
                                    </li>
                                    <li>
                                        Make the button log Hello World! when
                                        clicked
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    border: "1px solid red",
                                    width: 635,
                                    height: 26,
                                    backgroundColor: "red"
                                }}
                            >
                                Tasks Not Represented in the Tests:
                                <br />
                                Have a two-column layout on the page somewhere.
                                <br />
                                Put a red-filled rectangle in each column using
                                a div tag with width, height, and
                                backgroundColor styles.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
