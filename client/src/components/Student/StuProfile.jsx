import React, { useEffect, useState } from "react";
import axios from "axios";
import StuAuthenticationService from "../../services/StuAuthenticationService";
import { Link } from "react-router-dom";

const stuProfile = () => {
  const [profileData, setProfileData] = useState({});
  const [completedProjects, setCompletedProjects] = useState({});
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/student/profile/project?userName=${StuAuthenticationService.getUserName()}`
      )
      .then((data) => {
        console.log(data.data);
        setProfileData(data.data);
      });
    axios
      .get(`http://localhost:8080/student/getcompletedprojects`)
      .then((data) => {
        console.log(data.data);
        setCompletedProjects(data.data);
      });
  }, []);
  return (
    <>
      <pre>{JSON.stringify(profileData, null, 2)}</pre>
      <ul>
        <li>{profileData.title}</li>
        <li>{profileData.status}</li>

        {/* <li>
          {profileData === {}
            ? ""
            : profileData["studentProjectDetails"][0]["firstName"]}
        </li> */}
      </ul>
      <div className=""></div>
      <a href="http://localhost:8080/student/get_ppt/sumeet" target="_blank">
        SRS
      </a>
      <br />
      <Link to="/UpdateDetails">Update</Link>
    </>
  );
};

export default stuProfile;
