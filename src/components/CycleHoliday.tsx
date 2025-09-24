import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Fourth_of_July"
    | "Halloween"
    | "New_Years_Eve"
    | "Thanksgiving";

function returnEmoji(holiday: Holiday): string {
    return (
        holiday === "Christmas" ? "🎅"
        : holiday === "Fourth_of_July" ? "🇺🇸"
        : holiday === "Halloween" ? "🎃"
        : holiday === "New_Years_Eve" ? "🎆"
        : "🍗"
    );
}

const nextHolidayAlphabetically: Record<Holiday, Holiday> = {
    Christmas: "Fourth_of_July",
    Fourth_of_July: "Halloween",
    Halloween: "New_Years_Eve",
    New_Years_Eve: "Thanksgiving",
    Thanksgiving: "Christmas",
};

const nextHolidaySequential: Record<Holiday, Holiday> = {
    Fourth_of_July: "Halloween",
    Halloween: "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "New_Years_Eve",
    New_Years_Eve: "Fourth_of_July",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");
    return (
        <div>
            Current Holiday: &nbsp;
            {returnEmoji(holiday)}
            <div>
                <Button
                    onClick={() => {
                        setHoliday(nextHolidayAlphabetically[holiday]);
                    }}
                >
                    Advance By Alphabet
                </Button>
                &nbsp;
                <Button
                    onClick={() => {
                        setHoliday(nextHolidaySequential[holiday]);
                    }}
                >
                    Advance By Year
                </Button>
            </div>
        </div>
    );
}
