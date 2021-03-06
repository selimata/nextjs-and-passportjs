import Head from 'next/head'

export default () => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h3 className="title">Welcome!</h3>
      <p className="description">
        Some references about <code>React</code>, <code>NextJS</code> , <code>ExpressJS</code> and <code>PassportJS</code> are below!
      </p>

      <div className="grid">
        <a href="https://reactjs.org" className="card">
          <h3>React &rarr;</h3>
        </a>

        <a href="https://nextjs.org/docs" className="card">
          <h3>NextJS &rarr;</h3>
        </a>

        <a href="http://www.passportjs.org/" className="card">
          <h3>PassportJS &rarr;</h3>
        </a>

        <a href="https://expressjs.com/" className="card">
          <h3>ExpressJS &rarr;</h3>
        </a>
      </div>


      <p className="description">
        So, let's start test to the project!
      </p>

      <div className="grid">
        <a
          href="/user"
          className="card"
          style={{ 'width': 500 }}
        >
          <h3>Try go to the <code><a href="https://github.com/selimata/nextjs-and-passportjs/tree/master/pages/User/index.js">User</a></code> page! 👇</h3>
          <p>
            Opps! You can't if you not authorized! :)
          </p>
        </a>
        <a
          href="/login"
          className="card"
          style={{ 'width': 500 }}
        >
          <h3>Are you not logged in? Come here! 👇</h3>
          <p>
            Go to the <code><a href="https://github.com/selimata/nextjs-and-passportjs/tree/master/pages/Auth/Loginindex.js">Login</a></code>  page!
          </p>
        </a>
      </div>
    </main>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #a2a2a261;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        margin-top: 2rem;
        margin-bottom: 2rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 0 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
        margin: 10px 0 0 0;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)