import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);
    function updateOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedOption(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group>
                    <Form.Label>Select an Option: </Form.Label>
                    <Form.Select value={selectedOption} onChange={updateOption}>
                        <option value={options[0]}>{options[0]}</option>
                        <option value={options[1]}>{options[1]}</option>
                        <option value={options[2]}>{options[2]}</option>
                    </Form.Select>
                </Form.Group>
                {selectedOption === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
