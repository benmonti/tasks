import React, { useState } from "react";
import { Form } from "react-bootstrap";

function RenderTextForm({
    name,
    setName,
    studentStatus,
    setStudentStatus,
}: {
    name: string;
    setName: (newName: string) => void;
    studentStatus: boolean;
    setStudentStatus: (newStatus: boolean) => void;
}): React.JSX.Element {
    function changeName(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function studentHelper() {
        studentStatus ? setStudentStatus(false) : setStudentStatus(true);
    }

    return (
        <Form.Group controlId="textbox-name">
            <Form.Label>Enter Your Name:&nbsp;</Form.Label>
            <Form.Control
                value={name}
                type="text"
                onChange={changeName}
            ></Form.Control>
            <Form.Check
                type="checkbox"
                id="is-student"
                label="Are you a student?"
                checked={studentStatus}
                onChange={studentHelper}
            ></Form.Check>
        </Form.Group>
    );
}

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [studentStatus, setStudentStatus] = useState<boolean>(true);

    function showText() {
        return (
            <span>
                {name} {studentStatus ? "is" : "is not"} a student
            </span>
        );
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group style={{ justifyItems: "center" }}>
                <Form.Check
                    type="switch"
                    id="edit-mode-check"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={() => {
                        editMode ? setEditMode(false) : setEditMode(true);
                    }}
                ></Form.Check>
                {editMode ?
                    <RenderTextForm
                        name={name}
                        setName={setName}
                        studentStatus={studentStatus}
                        setStudentStatus={setStudentStatus}
                    ></RenderTextForm>
                :   showText()}
            </Form.Group>
        </div>
    );
}
