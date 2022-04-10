import React from "react";
import Base from "../Base";
import styles from "./Styles/index.module.css"
import { Link } from "react-router-dom";
import {FaLinkedin, FaTwitterSquare, FaGithubSquare} from "react-icons/fa"

const Aboutus = () => {
  const members = [
    {
      id: 1,
      name: "John Doe",
      profession: "Founder & co-founder",
      github_url: "https://github.com/Dezenix/frontend-reactjs",
      linkedin_url: "https://github.com/Dezenix/frontend-reactjs",
      twitter_url: "https://github.com/Dezenix/frontend-reactjs",
    },
    {
      id: 2,
      name: "Mario",
      profession: "CEO & co-founder",
      github_url: "https://github.com/Dezenix/frontend-reactjs",
      linkedin_url: "https://github.com/Dezenix/frontend-reactjs",
      twitter_url: "https://github.com/Dezenix/frontend-reactjs",
    },
    {
      id: 3,
      name: "Johnson",
      profession: "Software Developer",
      github_url: "https://github.com/Dezenix/frontend-reactjs",
      linkedin_url: "https://github.com/Dezenix/frontend-reactjs",
      twitter_url: "https://github.com/Dezenix/frontend-reactjs",
    },
    {
      id: 4,
      name: "Dan",
      profession: "Marketing Head",
      github_url: "https://github.com/Dezenix/frontend-reactjs",
      linkedin_url: "https://github.com/Dezenix/frontend-reactjs",
      twitter_url: "https://github.com/Dezenix/frontend-reactjs",
    },
  ];

  return (
    <Base>
      <section className={styles['member_section']}>
        {members.map((member) => {
          return (
            <div className={styles.card} key={member.id}>
              <div className={styles.card__details}>
                <div className={styles.image}>
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                </div>

                <div className={styles.details}>
                  <span className={styles.name}>{member.name}</span>
                  <span className={styles.profession}>{member.profession}</span>
                </div>

                <div className={styles.media__icons}>
                  <Link
                    to={member.github_url}
                    target="_blank"
                    className={styles.one}
                  >
                    <FaGithubSquare size="2rem" />
                  </Link>
                  <Link
                    to={member.linkedin_url}
                    target="_blank"
                    className={styles.two}
                  >
                    <FaLinkedin size="2rem" />
                  </Link>
                  <Link
                    to={member.twitter_url}
                    target="_blank"
                    className={styles.three}
                  >
                    <FaTwitterSquare size="2rem" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </Base>
  );
};

export default Aboutus;
