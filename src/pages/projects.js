import React from "react";
import {motion} from 'framer-motion'
import "./styles/profile.css";

export default function Projects() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ fontSize: 24, color: "whitesmoke", textAlign: "center", padding: 20 }}>
        Projects
      </div>
      <div className="main">
        <div className="card">
          <div className="img">E-dirasa</div>
          <div className="content">
            <div className="subtitle">
              e-Dirasa was the first website that I volunteered to create for a
              religous community, to encourage the education of Islamic bilefs
              to younger generations
            </div>

            <div className="card-footer"></div>
          </div>
        </div>

        <div className="card">
          <div className="img">English Leaners</div>
          <div className="content">
            <div className="subtitle">
              English Leaners is another website that I created with the help
              and support of one of Islamic teacher. He has earned a masters in
              English, so I met with him on the idea to create a website to
              spread the knowledge of both famous english books and writings.
              Dummy userInfo
              <p style={{ padding: 0, margin: 0 }}>Username: demo@gmail.com</p>
              <p style={{ padding: 0, margin: 0 }}>Password: user123</p>
            </div>
            <div className="card-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
