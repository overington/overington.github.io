const YEAR = new Date().getFullYear()

// theme.config.js
export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> Samuel Overington
        <a href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  )
}
