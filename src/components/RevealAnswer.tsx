import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function reveal(): void {
        setVisible(!visible);
    }
    return (
        <span>
            <Button
                onClick={() => {
                    reveal();
                }}
            >
                Reveal Answer
            </Button>
            <div>{visible && 42}</div>
        </span>
    );
}
