import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [currentAttempts, setCurrentAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function useAttempt() {
        if (currentAttempts > 0) {
            setCurrentAttempts(currentAttempts - 1);
        }
    }
    function gainAttempts() {
        setCurrentAttempts(
            currentAttempts + (parseInt(requestedAttempts) || 0),
        );
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="requestAttempts">
                <Form.Label>Request how many attempts: </Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts || ""}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestedAttempts(event.target.value);
                    }}
                />
            </Form.Group>
            <Button onClick={useAttempt} disabled={currentAttempts <= 0}>
                Use Attempt
            </Button>
            <Button onClick={gainAttempts}>Gain Attempts</Button>
            <div>Current attempts: {currentAttempts}</div>
        </div>
    );
}
