import React from "react";

export default function Profile(props) {
  return (
    <>
      <div className="container">
        <div className="repo-card">
          <div>
            <div>
              <div className="repo-header-area">
                <div>
                  <p className="repo-title">{props.name}</p>
                  <div className="repo-topics">
                    {props.topics &&
                      props.topics.map((topic, index) => (
                        <React.Fragment key={index}>
                          <button className="btn-tag">{topic}</button>
                        </React.Fragment>
                      ))}
                  </div>
                </div>

                <div>
                  {props.private ? (
                    <button className="btn-tag-outline">Private</button>
                  ) : (
                    <button className="btn-tag-outline">Public</button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="profile-lang">
            <div className="repo-profile-details">
              <img
                className="profile-image"
                src={props.owner.avatar_url}
                alt={props.owner.login}
              />

              <li>
                <p className="my-username">{props.owner.login}</p>
              </li>
            </div>
            <div>
              <ul>
                <li>{props.language}</li>
              </ul>
            </div>
          </div>

          <div className="card-footer">
            <ul className="repo-stats">
              <button className="btn-tag-outline">
                {props.stargazers_count.toLocaleString()} stars
              </button>
              <button className="btn-tag-outline">
                {props.watchers_count.toLocaleString()} Watchers
              </button>
              <button className="btn-tag-outline">
                {props.open_issues} issues
              </button>
            </ul>
            <button className="btn">
              <a href={props.html_url} target="_blank" rel="noreferrer">
                View Repo
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
