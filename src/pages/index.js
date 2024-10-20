import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react';

export default function Home() {
  const mediaLinks = [{
      'name': 'LinkedIn',
      'endpoint': 'https://www.linkedin.com/in/thisisadityapatel/',
      'icon': 'bi-linkedin',
    },
    {
      'name': 'GitHub',
      'endpoint': 'https://github.com/thisisadityapatel',
      'icon': 'bi-github',
    },
    {
      'name': 'Email',
      'endpoint': 'mailto:adityakdpatel@gmail.com',
      'icon': 'bi-envelope-fill',
    },
  ]

  const [emoji, setEmoji] = useState('🏂');

  useEffect(() => {
    const interval = setInterval(() => {
      const emojis = ['🏀', '💱', '🏂', '⚙️'];
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * emojis.length);
      } while (emojis[randomIndex] === emoji);
      setEmoji(emojis[randomIndex]);
    }, 2500);

    return () => clearInterval(interval);
  }, [emoji]);

  const current_Date = new Date();

  return (
    <>
      <Head>
        <title>adihascode</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className="container introDiv portfolioElement"
        style={{ marginTop: "auto", marginBottom: "auto" }}
      >
        <div className="text-center my-5">
          <img
            src="/introProfileImage.png"
            alt="Aditya Patel Profile Picture"
            className="introProfileImage border border-5 rounded-circle"
          />
        </div>
        <p>
          Hey, I'm Aditya, a {" "}
          <span style={{ textDecoration: "underline" }}>Computer Science</span>{" "}
          undergrad at{" "}
          <Link
            href="https://www.torontomu.ca/about/"
            target="_blank"
            className="introLink hover-underline-animation"
          >
            Toronto Metropolitan University
          </Link>{" "}
          in my senior year, planning to graduate by 2026. A passionate programmer,
          I like challenging myself to do things I’ve never accomplished before and
          I strive to learn, build, and engineer stuff.
        </p>
        <p>
          Previously a{" "}
          <span style={{ textDecoration: "underline" }}>Software Engineer Intern</span>{" "}
          at{" "}
          <Link
            href="/experience/Wealthsimple"
            className="introLink hover-underline-animation"
          >
            Wealthsimple
          </Link>
          . Before that, I was a{" "}
          <span style={{ textDecoration: "underline" }}>Software Engineer Intern</span>{" "}
          at{" "}
          <Link
            href="/experience/RBC"
            className="introLink hover-underline-animation"
          >
            Royal Bank of Canada
          </Link>
          , a{" "}
          <span style={{ textDecoration: "underline" }}>
            Trading Floor Software Developer Intern
          </span>{" "}
          for{" "}
          <Link
            href="/experience/Scotiabank"
            className="introLink hover-underline-animation"
          >
            Scotiabank GBM
          </Link>
          , and am currently open to Internship/Research opportunities for 2025.
        </p>
        <p>
          I'm into Swimming and Basketball. I also love talking about F1, Physics, 
          and different food options here in Toronto. So feel free to shoot me an 
          email at{" "}
          <a
            className="hover-underline-animation introLink"
            href="mailto:adityakdpatel@gmail.com"
          >
            adityakdpatel@gmail.com
          </a>
          , or set up some time in my schedule by clicking the calendar below!
        </p>
        <div className="introSocials">
          {mediaLinks.map((item, index) => (
            <Link
              href={item.endpoint}
              className="introSocialIconLink"
              target="_blank"
              key={index}
            >
              <i className={"bi " + item.icon + " introIconFont"}></i>
            </Link>
          ))}
        </div>
        <div
          className="text-secondary text-center mt-5 mb-5"
          style={{ fontSize: "80%" }}
        >
          <span style={{ fontSize: "130%" }} className="wave mx-1">
            {emoji}
          </span>{" "}
          Developed by{" "}
          <Link
            href="https://www.linkedin.com/in/thisisadityapatel/"
            style={{ textDecoration: "underline" }}
            className="text-secondary"
          >
            Aditya Patel
          </Link>{" "}
          © {current_Date.getFullYear()} All Rights Reserved.
        </div>
      </div>
      <footer></footer>
    </>
  )
}
