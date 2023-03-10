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

export function TwoDice(): JSX.Element {
    const [leftDie, rollLeft] = useState<number>(1);
    const [rightDie, rollRight] = useState<number>(2);

    function rollLeftDie(): void {
        rollLeft(d6());
    }

    function rollRightDie(): void {
        rollRight(d6());
    }

    const outcome =
        leftDie === rightDie ? (leftDie === 1 ? " Lose" : " Win") : "";

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <br></br>
            <span data-testid="right-die">{rightDie}</span>
            <Button onClick={rollRightDie}>Roll Right</Button>
            {<div>{outcome}</div>}
        </div>
    );
}
