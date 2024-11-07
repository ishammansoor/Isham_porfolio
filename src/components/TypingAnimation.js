import { React } from "react";
import { TypeAnimation } from "react-type-animation";

function Typewriter() {
    return (
        <span>
            <TypeAnimation
                sequence={[
                    400,
                    "full-stack developer",
                ]}
                wrapper="span"
                speed={30}
                style={{ display: "inline-block", color: 'whitesmoke', fontWeight: '100', fontSize: 24 }}
                repeat={1}
            />
        </span>
    );
}

export default Typewriter;