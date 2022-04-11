import React from "react";
import Base from "../Base";
import styles from "./Styles/index.module.css"
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Aboutus = () => {
  const members = [
    {
      id: 1,
      name: "Abir Pal",
      profession: "Full Stack Web Developer",
      github_url: "https://github.com/Abirpal202049",
      linkedin_url: "https://www.linkedin.com/in/abir-pal/",
      mail_url: "abirpal282002@gmail.com",
      image:"https://res.cloudinary.com/sahebcloud/image/upload/v1646982134/AECCC%20Members/AbirPal_ddkviz.jpg"
    },
    {
      id: 2,
      name: "SK Mukherjee",
      profession: "Backend Developer",
      github_url: "https://github.com/saikatmu31",
      linkedin_url: "https://www.linkedin.com/in/saikat-mukherjee-2a925b1b7",
      mail_url: "saikat943422@gmail.com",
      image:"https://res.cloudinary.com/sahebcloud/image/upload/v1646982136/AECCC%20Members/SaikatMukherjee_tnrgka.jpg"
    },
    {
      id: 3,
      name: "Aritra Biswas",
      profession: "Frontend Developer",
      github_url: "https://github.com/Aritra777",
      linkedin_url: "https://www.linkedin.com/in/aritra-biswas-13718b228/",
      mail_url: "https://github.com/Dezenix/frontend-reactjs",
      image : "https://testaeccc.web.app/static/media/AritraBiswas.c0cf92b76053d1f0b939.jpg"
    },
    {
      id: 4,
      name: "Souvik Mandal",
      profession: "Backend Developer",
      github_url: "https://github.com/8-bit-souvik",
      linkedin_url: "https://www.linkedin.com/in/8bitsouvik/",
      mail_url: "https://github.com/Dezenix/frontend-reactjs",
      image:"https://res.cloudinary.com/sahebcloud/image/upload/v1646982134/AECCC%20Members/SouvikMandal_uduvds.jpg"
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
                  <img src={member.image} alt="" />
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
                    to={member.mail_url}
                    target="_blank"
                    className={styles.three}
                  >
                    <IoMail size="2rem" />
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
