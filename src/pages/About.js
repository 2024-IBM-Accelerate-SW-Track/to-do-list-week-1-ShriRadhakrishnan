import React, { Component } from 'react';
import './About.css';
import pfp from '../assets/pfp.jpeg'; 

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={pfp}
              alt="Profile Pic"
            />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Shri Radha</div>
            <div className="brief_description">
            Hi! I'm Shriharran Radhakrishnan but I go by Shri. I am a rising junior at UMass Amherst studying Computer Science and Math. One of my hobbies is making music and playing drums.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
