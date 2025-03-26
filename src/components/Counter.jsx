import { useState } from "react";
import Button from "./Button";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p className="counter">
                Count is {count}
            </p>
            <div className="count-button-wrapper">
                <Button onClick={() => setCount(count => count + 1)}>+</Button>
                <Button onClick={() => setCount(count => count - 1)}>-</Button>
                <Button onClick={() => setCount(0)}>Reset</Button>
            </div>
        </div>
    );
}