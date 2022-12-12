import React, { useEffect, useState } from "react";
import "./App.css";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const newJobs = await res.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  const { company, title, dates, duties } = jobs[value];

  return (
    <>
      <div className="title">
        <h1>Experience</h1>
        <div className="underline"></div>
      </div>
      <div className="description">
        <div className="company">
          <div className="btn-container">
        {jobs.map((item, index) => {
          return(
            <button 
              key={item.id} 
              onClick = {() => setValue(index)}
              className={`job-btn ${index === value && 'active-btn'}`}

            >
              {item.company}

            </button>
          )
        })}
          </div>
        </div>
        <div className="information">
          <div className="info-title">
            <h2>{title}</h2>
            <div className="person-info">
              <span className="name">{company}</span>
              <span className="dates">{dates}</span>
            </div>
          </div>

          <div className="text">
            {duties.map((duty, index) => {
              return(
            <ul key={index}>
              <li>
              <FaAngleDoubleRight className="icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </li>
            </ul>

              )
            })}
          </div>
        </div>
      </div>
      <button className="btn">More info</button>
    </>
  );
}

export default App;
