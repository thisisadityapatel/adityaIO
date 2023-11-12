import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Aditya Patel</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container introDiv portfolioElement">
        <div className="text-center my-5">
            <img src="/introImage.png" alt={"Aditya Patel Profile Picture"} className="introProfileImage border border-5 rounded-circle"/>
        </div>
        <p> 
            {"Hey, my name is"} <span style={{textDecoration: "underline"}}>{"Aditya Patel"}</span> {" and I'm a "} <span style={{textDecoration: "underline"}}>{"Computer Science"}</span> {" major at"} <a href="https://www.torontomu.ca/about/" className="introLink hover-underline-animation">Toronto Metropolitan University</a> {"in my junior year, planning on graduating by December 2025. A passionate programmer, I am eager to challenge myself to do things I’ve never accomplished before and I strive to learn and build stuff."}
        </p>
        <p>
            {"Currently a "} <Link style={{textDecoration: "underline"}} className="introLinkJob hover-underline-animation" href="/experience/RBC">{"Software Engineer Intern"}</Link> {" at"} 
            <a href="https://www.rbccm.com/en/" className="introLink hover-underline-animation">Royal Bank of Canada</a> 
            {". I also previously interned as a "}
            <Link style={{textDecoration: "underline"}} className="introLinkJob hover-underline-animation" href="/experience/Scotiabank">
              {"Trade Floor Software Developer Intern"}
            </Link> (Web)  {"for"} <a href="https://www.gbm.scotiabank.com/en.html" className="introLink hover-underline-animation">Scotiabank Capital Markets</a> {"and am open to Internship/Research opportunities."}
        </p>
        <p>
            {"I love talking about Space, Sports (literally any) and about different food options in the Toronto area, I'm also a sucker for a good book or TV Show recommendation - So feel free to shoot me an email - "} <span><a className="hover-underline-animation introLink" href="mailto:adityakdpatel@gmail.com">adityakdpatel@gmail.com</a></span> {" , or set-up some time in my schedule by clicking the calendar below!"}
        </p>
        <div className="introSocials">
            <Link href="https://www.linkedin.com/in/thisisadityapatel/" className="introSocialIconLink" target="_blank"><i className="bi bi-linkedin introIconFont"></i></Link>
            <Link href="/Resume_Aditya_Patel.pdf" className="introSocialIconLink" target="_blank"><i className="bi bi-filetype-pdf introIconFont"></i></Link>
            <Link href="https://github.com/thisisadityapatel" className="introSocialIconLink" target="_blank"><i className="bi bi-github introIconFont"></i></Link>
            <Link href="mailto:adityakdpatel@gmail.com" className="introSocialIconLink"><i className="bi bi-envelope-fill introIconFont"></i></Link>
            <Link href="https://calendly.com/adityakdpatel/30min" className="introSocialIconLink" target="_blank"><i className="bi bi-calendar-week introIconFont"></i></Link>
        </div>

        <div className="text-secondary text-center mt-5 mb-5">
          <span style={{fontSize: "160%"}} className="wave mx-1">👾</span>{" Developed by Aditya Patel © 2023"}
        </div>
      </div>
      <footer></footer>
    </>
  )
}
