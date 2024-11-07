import { cubicBezier } from "framer-motion";

const popIn = cubicBezier(0.75, -0.01, 1, 0.81);

const scale = {
    hidden: {
        color: "#555555",
        scale: 0,
        transition: {
            ease: popIn,
            duration: 0.15,
        },
    },
    visible: {
        scale: 1,
        color: "#555555",
        transition: {
            ease: popIn,
            duration: 0.5,
            type: "spring",
            bounce: 0.3,
        },
    },
};

export {
    scale,
}