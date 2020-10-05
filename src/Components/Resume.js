import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            {/* <p>{work.description.join(" \r\n ")}</p> */}
            <p>
              Tech stack: JavaScript, React, Redux, AngularJS, HTML, CSS, NodeJS,
              JQuery, SharePoint 2013 <br />
              - Participated in designing and realizing multiple FS hotel
              intranet web applications, responsible for <br />
              - Implemented user authorization management module using
              React, AngularJS, JQuery, which only grants correspond user groups
              permission to access certain items and helps admins to view and
              manage user management system efficiently. <br /> - Redesigned and
              realized company internal audit application using ReactJS, Redux, AngularJS and
              NodeJS, which provides more comprehensive functions, simpler user
              interface and reduced audit time by 40% <br /> - Created sites,
              built custom webparts, and managed permissions and content as
              requested from requestors <br /> - Utilized
              jQuery to create custom enhancements on app sites for user
              satisfaction and efficiency - Optimized custom workflows for
              multiple applications’ approval function, which simplifies the
              process <br />- Tested new application release to ensure its
              robustness <br />- Provided technical support to resolve ServiceNow
              tickets with applications currently in use, resulting in reducing
              the tickets queuing time by 20%
            </p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
