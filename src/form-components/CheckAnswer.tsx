import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [text, setText] = useState<string>("");
    const [checkText, setCheckText] = useState<boolean>(false);

    function updateName(evt: React.ChangeEvent<HTMLInputElement>) {
        const text: string = evt.target.value;
        setText(text);
        if (text === expectedAnswer) {
            setCheckText(true);
        } else {
            setCheckText(false);
        }
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group
                controlId="checkAnswer"
                style={{ justifyItems: "center" }}
            >
                <Form.Label>Enter the answer:</Form.Label>
                <Form.Control
                    value={text}
                    onChange={updateName}
                    style={{ width: "max-content" }}
                ></Form.Control>
            </Form.Group>
            {checkText ? "✔️" : "❌"}
        </div>
    );
}
