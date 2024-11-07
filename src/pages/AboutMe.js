import { Grid } from "@mui/material";
import React from "react";


export default function AboutMe() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 32,
        }}
      >
        
      </div>
      <Grid container justifyContent="space-around">
        <Grid item style={{width: '50%'}}>
            <div
              style={{
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                fontSize: 24,
                marginBottom: 10
              }}
            >
              <img
                  src="/profileimge.png"
                  style={{ width: "20%", borderRadius: 10, }}
                  alt="profile img"
              />
              Isham Kalappurackal Mansoor
            </div>
            <div
              style={{textAlign: 'justify', padding: 10}}            
            >
            An active leader and motivated Computer Science major at Virginia Polytechnic Institute and State University, with a
strong passion for AI, ML and web/mobile development. Experienced in developing and implementing technical solutions through
various internships and academic projects. Adept at problem-solving, collaborating in team settings, and driving projects
to successful completion. Seeking opportunities to contribute to innovative projects, leverage my technical skills, and learn
from experienced professionals in a dynamic and collaborative environment. Eager to bring fresh ideas and a strong work
ethic to an organization that values continuous learning and growth.
            </div>
        </Grid>

        <Grid item style={{width: '50%'}}>
            Virginia Tech
        </Grid>
      </Grid>
    </div>
  );
}
