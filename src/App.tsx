import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <div>
                <Container>
                    <Row>
                        <Col
                            style={{
                                height: 300,
                                width: 50,
                                backgroundColor: "red",
                            }}
                        >
                            This is the first column
                        </Col>
                        <Col
                            style={{
                                height: 300,
                                width: 50,
                                backgroundColor: "red",
                            }}
                        >
                            This is the second column
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
