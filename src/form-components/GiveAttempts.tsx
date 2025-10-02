import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [remaining, setRemaining] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");

    function increaseAttempts() {
        const num = parseInt(requested);
        if (!isNaN(num)) {
            setRemaining(remaining + num);
        }
    }

    function decreaseAttempts() {
        setRemaining(remaining - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group
                controlId="giveAttempts"
                style={{ justifyItems: "center" }}
            >
                <Form.Label>Attempts Left:</Form.Label>
                &nbsp;{remaining}
                <br></br>
                <Button onClick={decreaseAttempts} disabled={remaining === 0}>
                    use
                </Button>
                <Button onClick={increaseAttempts}>gain</Button>
                <Form.Control
                    type="number"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setRequested(e.target.value);
                    }}
                    value={requested}
                    style={{ width: "120px" }}
                ></Form.Control>
            </Form.Group>
        </div>
    );
}
