import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className="all_foot">
        <div className="foot_link_only">
          <div className="foot_column">
            <span className="link_foot_h">Practo</span>
            <Link className="link_foot">About</Link>
            <Link className="link_foot">Blog</Link>
            <Link className="link_foot">Careers</Link>
            <Link className="link_foot">Press</Link>
            <Link className="link_foot">Contact Us</Link>
          </div>
          <div className="foot_column">
            <span className="link_foot_h">For patients</span>
            <Link className="link_foot">Search for doctors</Link>
            <Link className="link_foot">Search for clinics</Link>
            <Link className="link_foot"> Search for hospitals</Link>
            <Link className="link_foot">Book Diagnostic Tests</Link>
            <Link className="link_foot">Book Full Body Checkups</Link>
            <Link className="link_foot">Practo Plus</Link>
            <Link className="link_foot">Covid Hospital listing</Link>
            <Link className="link_foot">Practo Care Clinics</Link>
            <Link className="link_foot">Read health articles</Link>
            <Link className="link_foot">Read about medicines</Link>
            <Link className="link_foot">Practo drive</Link>
            <Link className="link_foot">Health app</Link>
            <Link className="link_foot">Practo Plus Infinity</Link>
          </div>

          <div className="foot_column">
            <span className="link_foot_h">For doctors</span>
            <Link className="link_foot">Practo Profile</Link>
            <Link className="link_foot">For clinics</Link>
            <Link className="link_foot">Ray by Practo</Link>
            <Link className="link_foot">Practo Reach</Link>
            <Link className="link_foot">Ray Tab</Link>
            <Link className="link_foot">Practo Pro</Link>
          </div>
          <div className="foot_column">
            <span className="link_foot_h">For hospitals</span>
            <Link className="link_foot">Insta by Practo</Link>
            <Link className="link_foot">Qikwell by Practo</Link>
            <Link className="link_foot">Practo Profile</Link>
            <Link className="link_foot">Practo Reach</Link>
            <Link className="link_foot">Practo Drive</Link>
            <Link className="link_foot">For Corporates</Link>
            <Link className="link_foot">Wellness Plans</Link>
          </div>
          <div className="foot_column">
            <span className="link_foot_h"> More</span>
            <Link className="link_foot">Help</Link>
            <Link className="link_foot">Developers</Link>
            <Link className="link_foot">Privacy Policy</Link>
            <Link className="link_foot">Terms & Conditions</Link>
            <Link className="link_foot">PCS T&C</Link>
            <Link className="link_foot">Healthcare Directory</Link>
            <Link className="link_foot">Practo Health Wiki</Link>
          </div>
          <div className="foot_column">
            <span className="link_foot_h">Social</span>
            <Link className="link_foot">Facebook</Link>
            <Link className="link_foot">Twitter</Link>
            <Link className="link_foot">LinkedIn</Link>
            <Link className="link_foot">Youtube</Link>
            <Link className="link_foot">Github</Link>
          </div>
        </div>

        <div className="foot_logo">
          <img
            width="170px"
            height="40px"
            src="https://www.practostatic.com/web-assets/images/white_practo_logo.svg"
            alt=""
          />
          <span className="link_foot">
            Copyright © 2017, Practo. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer