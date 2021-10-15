import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import ReactPlayer from 'react-player'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alexander Sahli Full Stack Engineer</title>
        <meta name="description" />
      </Head>
     
      <main className={styles.main}>
        <h1 className={styles.title}>
          Alexander Sahli, <a href="https://github.com/d1yr">Full-Stack Engineer</a>
        </h1>

        <p className={styles.description}>
        EMAIL:<a href="mailto:alexander.m.sahli@gmail.com"> Alexander.M.Sahli@gmail.com</a>
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
          <Link href="https://vercel.com/alexandermsahli">
            <h2>TECHNICAL SKILLS</h2>
            </Link> 
            <p>
             A Flatiron School graduate experienced in Ruby, Ruby on Rails, SQLite3, mySQL, HTML, CSS, Javascript, Bootstrap, React, Figma, node.js, next.js, Redux, and version control such as Git and Vercel.</p>
            </a>
          <a className={styles.card}>
            <h2>BACKEND ENGINEER</h2>
            <p>Has experience building applications using relevant technologies such as Ruby, Activerecord, Bcrypt, SQLite3, mongoDB and MySQL.</p>
          </a>

          <a className={styles.card}>
            <h2>FRONTEND ENGINEER</h2>
            <p>Has built applications using Node.js, Javascript, React, next.js, JSON, Bootstrap, CSS, HTML, and Redux, as well as design experience.</p>
            </a>
          
          <a
            href="https://youtu.be/f4OOc2BImq0"
            className={styles.card}
          >
            <div className={ styles.card }>
        <ReactPlayer url="https://youtu.be/f4OOc2BImq0" max-height="200px" width="100%" />
        </div><br></br><br></br>
            <h2>Export Portal</h2>
            <p>A Ruby on Rails app to book time with a studio of the user’s choice<br></br>
● Created an SQL database to contain all info pertaining to Users and Studios<br></br>
● Used Bcrypt to accept and secure user passwords through hashing<br></br>
● Utilized a Nav Bar to allow our User to view all pages including their own profile</p><p><br></br>
<br></br>
</p>
          </a>
          
          <a
            href="https://youtu.be/Q621bGUZ1GU"
            className={styles.card}
          >
            <div className={styles.card}><ReactPlayer url="https://youtu.be/Q621bGUZ1GU" max-height="200px" width="100%" /></div>
            <br></br><br></br>
            <h2>No Gas Magazine</h2>
            <p>A magazine demonstrating proficiency in linking a Ruby backend to a Javascript SPA
          <br></br>● Created a user friendly layout and considered accessibility<br></br>● Created a user friendly layout and considered accessibility<br></br> ● Created backend using Node.js to retain the info of Staff, Users, and their Articles <br></br>● Incorporated an article editor via a form in a React.js component<br></br>●
          Created a component via React.js to contain a user’s comments on an article</p><p><br></br>
          <br></br>
          </p>
          </a>
          
          <a
            href="https://youtu.be/9U5DYzc6kDQ"
            className={styles.card}
          >
            <div className={styles.card}><ReactPlayer url="https://youtu.be/9U5DYzc6kDQ" max-height="200px" width="100%" /></div><br></br><br></br>
            <h2>Appointment Assistant</h2>
            <p>A Ruby CLI app to schedule events with<br></br>
     ● Used technologies such as TTY and Catpix to make a more legible interface<br></br>● Created a database through SQL with relationships that are robust and detailed<br></br>●
     First deployment of Bcrypt for us, secures user’s passwords through hashing algorithm</p><p><br></br>
<br></br>
</p>
          </a>

          
        </div>
        
      </main>

      <footer className={styles.footer}>
      <p>Built in Next.js AMS 2021</p>
      </footer>
    </div>
  )
}
