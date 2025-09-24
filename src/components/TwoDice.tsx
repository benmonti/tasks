import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, rollLeftDie] = useState<number>(6);
    const [rightDie, rollRightDie] = useState<number>(4);
    return (
        <div>
            <span data-testid="left-die">
                {leftDie}
                &nbsp;
                <Button
                    onClick={() => {
                        rollLeftDie(d6());
                    }}
                >
                    Roll Left
                </Button>
            </span>
            &nbsp;
            <span data-testid="right-die">
                <Button
                    onClick={() => {
                        rollRightDie(d6());
                    }}
                >
                    Roll Right
                </Button>
                &nbsp;
                {rightDie}
            </span>
            <div>
                {leftDie === rightDie && leftDie === 1 ?
                    <div>Lose</div>
                : leftDie === rightDie && leftDie !== 1 ?
                    <div>Win</div>
                :   <div></div>}
            </div>
        </div>
    );
}
