import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "../components//TypingAnimation.js";
import { motion, cubicBezier } from "framer-motion";
const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 2000);

        return () => clearTimeout(timer); // Cleanup the timer
    }, [navigate]);

    return (
        <motion.div
            style={{height: '100%', overflow: 'hidden'}}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <motion.div
                style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                variants={{
                    hidden: { scale: 0, transition: { ease: cubicBezier(0.75, -0.01, 1, 0.81), duration: 0.1 } },
                    visible: {
                        scale: 1,
                        transition: {
                            ease: cubicBezier(0.75, -0.01, 1, 0.81),
                            duration: 0.5,
                            type: "spring",
                            bounce: 0.5,
                        },
                    },
                }}
                whileHover={{ scale: 1.08 }}
                transition={{
                    type: "spring",
                    bounce: 0.72,
                }}
            >
                <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <div style={{color: 'whitesmoke', fontSize: 32, fontWeight: '600'}}>Isham Kalappurackal Mansoor</div>
                    <div>
                        <Typewriter />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Splash;