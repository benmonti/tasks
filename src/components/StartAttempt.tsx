import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, decreaseAttempts] = useState<number>(4);
    const [inProgress, quizStatus] = useState<boolean>(false);

    return (
        <span>
            <Button
                onClick={() => {
                    decreaseAttempts(attempts - 1);
                    quizStatus(!inProgress);
                }}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            &nbsp;
            <Button
                onClick={() => {
                    quizStatus(false);
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            &nbsp;
            <Button
                onClick={() => {
                    decreaseAttempts(attempts + 1);
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            &nbsp;
            <span>{attempts}</span>
        </span>
    );
}
