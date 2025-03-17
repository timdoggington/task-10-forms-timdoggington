import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [currentAnswer, setCurrentAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrentAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkanswer">
                <Form.Label>Enter answer:</Form.Label>
                <Form.Control value={currentAnswer} onChange={updateAnswer} />
            </Form.Group>
            {currentAnswer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
