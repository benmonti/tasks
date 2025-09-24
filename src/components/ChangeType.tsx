import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, changeType] = useState<QuestionType>("short_answer_question");

    const type_transitions: Record<QuestionType, QuestionType> = {
        multiple_choice_question: "short_answer_question",
        short_answer_question: "multiple_choice_question",
    };

    function change() {
        const newType = type_transitions[type];
        changeType(newType);
    }

    return (
        <span>
            <Button onClick={change}>Change Type</Button>
            {type === "multiple_choice_question" ?
                <div>Multiple Choice</div>
            :   <div>Short Answer</div>}
        </span>
    );
}
