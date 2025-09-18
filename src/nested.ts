import { Answer } from "./interfaces/answer";
import { Question, QuestionType, createCopy } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let newQuestions: Question[] = questions.reduce(
        (accumulator: Question[], question: Question): Question[] => {
            if (question.published) accumulator.push(createCopy(question));
            return accumulator;
        },
        [],
    );
    return newQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    let newQuestions: Question[] = questions.reduce(
        (accumulator: Question[], question: Question): Question[] => {
            if (
                question.body !== "" ||
                question.expected !== "" ||
                question.options.length !== 0
            ) {
                let questionCopy: Question = createCopy(question);
                accumulator.push(questionCopy);
            }
            return accumulator;
        },
        [],
    );
    return newQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    let foundQuestion: Question | undefined = questions.find(
        (question: Question): boolean => question.id === id,
    );
    return foundQuestion === undefined ? null : foundQuestion;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    let newQuestions: Question[] = questions.reduce(
        (accumulator: Question[], question: Question): Question[] => {
            if (question.id !== id) accumulator.push(createCopy(question));
            return accumulator;
        },
        [],
    );
    return newQuestions;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    let questionNames: string[] = questions.map(
        (question: Question): string => question.name,
    );
    return questionNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    let pointsSum: number = questions.reduce(
        (accumulator: number, question: Question): number =>
            (accumulator += question.points),
        0,
    );
    return pointsSum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let sumOfPublishedPoints: number = questions.reduce(
        (accumulator: number, question: Question): number =>
            question.published ?
                (accumulator += question.points)
            :   (accumulator += 0),
        0,
    );
    return sumOfPublishedPoints;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let CSVRepresentation: string = questions.reduce(
        (csvAccumulator: string, question: Question): string => {
            if (question.id !== questions[0].id) csvAccumulator += "\n";
            csvAccumulator += `${question.id},${question.name},${question.options.length},${question.points},${question.published}`;
            return csvAccumulator;
        },
        "id,name,options,points,published\n",
    );
    return CSVRepresentation;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    let answers: Answer[] = questions.map((question: Question): Answer => {
        return {
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false,
        };
    });
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    let allPublished: Question[] = questions.reduce(
        (newArr: Question[], question: Question): Question[] => {
            let publishedQuestion: Question = createCopy(question);
            publishedQuestion.published = true;
            newArr.push(publishedQuestion);
            return newArr;
        },
        [],
    );
    return allPublished;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    let firstQuestionType: string = "";
    if (questions.length > 0) {
        firstQuestionType = questions[0].type;
    }
    let allSameType: boolean = questions.every(
        (question: Question): boolean => question.type === firstQuestionType,
    );
    return allSameType;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    let copyOfQuestions: Question[] = questions.reduce(
        (newArr: Question[], question: Question): Question[] => {
            newArr.push(createCopy(question));
            return newArr;
        },
        [],
    );
    copyOfQuestions.push(makeBlankQuestion(id, name, type));
    return copyOfQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    let renamedQuestions: Question[] = questions.reduce(
        (newArr: Question[], question: Question): Question[] => {
            let modifiedQuestion: Question = createCopy(question);
            if (question.id === targetId) {
                modifiedQuestion.name = newName;
            }
            newArr.push(modifiedQuestion);
            return newArr;
        },
        [],
    );
    return renamedQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    let modifiedQuestions: Question[] = questions.reduce(
        (newArr: Question[], question: Question): Question[] => {
            let modifiedQuestion: Question = createCopy(question);
            if (question.id === targetId) {
                modifiedQuestion.type = newQuestionType;
                if (modifiedQuestion.type !== "multiple_choice_question")
                    modifiedQuestion.options = [];
            }
            newArr.push(modifiedQuestion);
            return newArr;
        },
        [],
    );
    return modifiedQuestions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */

function insertOption(
    question: Question,
    targetOptionIndex: number,
    newOption: string,
): Question {
    if (targetOptionIndex === -1) question.options.push(newOption);
    else question.options[targetOptionIndex] = newOption;
    return question;
}

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    let modifiedQuestions: Question[] = questions.reduce(
        (newArr: Question[], question: Question): Question[] => {
            let modifiedQuestion: Question = createCopy(question);
            if (question.id === targetId) {
                modifiedQuestion = insertOption(
                    modifiedQuestion,
                    targetOptionIndex,
                    newOption,
                );
            }
            newArr.push(modifiedQuestion);
            return newArr;
        },
        [],
    );
    return modifiedQuestions;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    let newQuestions: Question[] = questions.reduce(
        (newArr: Question[], question: Question): Question[] => {
            if (question.id === targetId) {
                let dupeQ: Question = duplicateQuestion(newId, question);
                newArr.push(createCopy(question));
                newArr.push(dupeQ);
            } else newArr.push(createCopy(question));
            return newArr;
        },
        [],
    );
    return newQuestions;
}
