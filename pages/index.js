import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jared's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img className={styles.profile}src="/images/profile.jpg" alt="Your Name" />

      <main>
        <h1 className={styles.title}>
          Welcome to <a>JARED'S BLOGSITE</a>
        </h1>
        <div className={styles.grid}>
        <a className={styles.card}>
            <h2>Who am I? </h2>
            <p>
I'm Jared Lucas, and I've always been obsessed with automation. I come from a family that's passionate about computers, and my dad, who's no longer with us, pushed me to excel in everything I did. His guidance taught me resilience and a strong work ethic.

I've made it my life's goal to automate everything I can, to the best of my abilities. From coding to tinkering with gadgets, I'm all about streamlining processes and making life more efficient. My dad's memory fuels my dedication, and I believe technology can enhance our lives and give us more time for meaningful pursuits. </p>
          </a>



      
        <a className={styles.card}>
            <h2>What can I do? </h2>
            <p>With the right tools and knowledge, I've come to believe that I can practically do anything. My upbringing in a family deeply passionate about technology, and the influence of my late father, who was tough on me in the best way possible, have shaped my perspective. They instilled in me not just the skills but the resilience and unwavering work ethic required to succeed. My life's mission revolves around automation. From coding to crafting innovative solutions, I'm driven by the idea of optimizing processes and making life more efficient.</p>
          </a>

          <a className={styles.card}>
            <h2>The <b>Expectations</b></h2>
            <p>
              <ul>
              <li>I expect implementing applications</li>
              <li>Database integration</li>
              <li>Java integration to websites</li>
              </ul>
            </p>
          </a>

        </div>

        <p className={styles.headername}>10 Things that require Zero Talent</p>
        <ol>
        <li>Being on Time</li>
        <li>Making An Effort</li>
        <li>Being High Energy</li>
        <li>Having A Positive Attitude</li>
        <li>Being Passionate</li>
        <li>Using Good Body Language</li>
        <li>Being Coachable</li>
        <li>Doing A little Extra</li>
        <li>Being Prepared</li>
        <li>Strong Work Ethic</li>

        </ol>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
