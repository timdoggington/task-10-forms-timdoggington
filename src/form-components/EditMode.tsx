import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [student, setStudent] = useState<boolean>(true);
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            {edit && (
                <Form.Group controlId="name">
                    <Form.Label>Enter name:</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
            )}
            {edit && (
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Student"
                    checked={student}
                    onChange={updateStudent}
                />
            )}
            <Form.Switch
                type="switch"
                id="in-edit-mode"
                label="Edit-mode"
                checked={edit}
                onChange={updateEdit}
            />
            {edit ? "" : name + " is " + (student ? "" : "not ") + "a student."}
        </div>
    );
}
