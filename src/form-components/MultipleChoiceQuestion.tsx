import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    function updateChoice(evt: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(evt.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group
                controlId="multiple-choice-q"
                style={{ justifyItems: "center" }}
            >
                <Form.Label>Choose an Answer From Selections: </Form.Label>
                <Form.Select
                    value={choice}
                    onChange={updateChoice}
                    style={{ width: "max-content" }}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
                {choice === expectedAnswer ? "✔️" : "❌"}
            </Form.Group>
        </div>
    );
}
