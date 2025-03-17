import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "brown",
    ];

    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((color) => (
                    <Form.Check
                        key={color}
                        type="radio"
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => {
                            setSelectedColor(color);
                        }}
                        inline
                        style={{ color: color }}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px",
                    textAlign: "center",
                    width: "200px",
                    border: "1px solid black",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
