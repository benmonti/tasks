import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS: string[] = [
    "red",
    "orange",
    "pink",
    "green",
    "blue",
    "purple",
    "black",
    "brown",
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    function updateColor(evt: React.ChangeEvent<HTMLInputElement>) {
        setColor(evt.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group
                controlId="chooseColor"
                style={{ justifyItems: "center" }}
            >
                {COLORS.map((currColor: string) => (
                    <span
                        key={currColor}
                        style={{ marginLeft: "8px", color: "white" }}
                    >
                        <Form.Check
                            inline
                            type="radio"
                            name="colors"
                            onChange={updateColor}
                            value={currColor}
                            label={
                                <span style={{ backgroundColor: currColor }}>
                                    {currColor}
                                </span>
                            }
                            checked={color === currColor}
                        ></Form.Check>
                    </span>
                ))}
                <div>
                    You have chosen{" "}
                    <span
                        style={{ backgroundColor: color, color: "white" }}
                        data-testid="colored-box"
                    >
                        {color}
                    </span>
                </div>
            </Form.Group>
        </div>
    );
}
