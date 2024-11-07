import { Grid } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

import {scale} from './animations/animations'
import { Link } from "react-router-dom";
import { Email, GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const MotionLink = motion(Link)

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{
        staggerChildren: 0.12,
      }}
      style={{ height: "100%" }}
    >
      <Grid
        container
        justifyContent="space-between"
        style={{ padding: 40, height: "100%" }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <MotionLink
            to="/resume"
            variants={scale}
            whileHover={{scale: 0.99}}
            transition={{
              type: "spring",
              bounce: 0.72,
            }}
            className="home-box-outer"
          >
            <div style={{
                display: 'flex',
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100%',
                fontSize: 24,
                fontWeight: '500',
                color: '#d5d7d7'
            }}>
                Resume
            </div>
          </MotionLink>

          <MotionLink
            to="/projects"
            variants={scale}
            whileHover={{scale: 0.99}}
            transition={{
              type: "spring",
              bounce: 0.72,
            }}
            className="home-box-outer smaller"
          >
            <div style={{
                display: 'flex',
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100%',
                fontSize: 24,
                fontWeight: '500',
                color: '#d5d7d7'
            }}>
                Projects
            </div>
          </MotionLink>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <Link 
                class="button"
                to="https://github.com/ishammansoor?tab=repositories"
                target="_blank"
            >
                <GitHub/>
            </Link>
            <Link class="button"
                to="https://www.linkedin.com/in/isham-kalappurackal-mansoor-56a555286"
                target="_blank"
            >
                <LinkedIn/>
            </Link>
          </div>
          <MotionLink
            variants={scale}
            transition={{
              type: "spring",
              bounce: 0.65,
            }}
            className="home-box-inner"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <div
                style={{ color: "#d5d7d7", fontSize: 32, fontWeight: "600" }}
              >
                Isham Kalappurackal Mansoor
              </div>
              <div
                style={{ fontSize: 24, fontWeight: "100", color: "#d5d7d7" }}
              >
                full-stack developer
              </div>
            </div>
          </MotionLink>

          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Link
                class="button"
                to="https://www.instagram.com/ishammansoor/?next=%2F"
                target="_blank"
            >
                <Instagram/>
            </Link>
            <Link 
                class="button"
                to="/contactme"
            >
                <Email/>
            </Link>
          </div>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
            <MotionLink
            to="/contactme"
            variants={scale}
            whileHover={{scale: 0.99}}
            transition={{
              type: "spring",
              bounce: 0.72,
            }}
            className="home-box-outer smaller"
          >
            <div style={{
                display: 'flex',
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100%',
                fontSize: 24,
                fontWeight: '500',
                color: '#d5d7d7'
            }}>
                Contact Me
            </div>
          </MotionLink>
          <MotionLink
            to="/hobbies"
            variants={scale}
            whileHover={{scale: 0.99}}
            transition={{
              type: "spring",
              bounce: 0.72,
            }}
            className="home-box-outer"
            
          >
            <div style={{
                display: 'flex',
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100%',
                fontSize: 24,
                fontWeight: '500',
                color: "#d5d7d7"
            }}>
                Hobbies
            </div>
          </MotionLink>
        </Grid>
      </Grid>
    </motion.div>
  );
}
