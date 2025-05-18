import "./blog.css";

export default function Blog() {
  return (
    <section className="blog">
      <div className="main-container" id="osw" name="open source contributions and works">
        <h1>Open Source Works and Blogs</h1>

        <div className="cards">
          <img
            src={`${process.env.PUBLIC_URL}/assets/works/a_hacking.png`}
            alt="Android Hacking Impact on Privacy"
          />
          <h3>Android Hacking Impact on Privacy</h3>
          <p>
            This is an article about how hacking can impact your privacy according to the webpage. It discusses different
            types of hacking and what information hackers can steal from you.
          </p>
          <a href="https://brunda1.odoo.com/blog/our-blogs-1/2" className="button" target="_blank" rel="noopener noreferrer">
            View More
          </a>
        </div>

        <div className="cards">
          <img
            src={`${process.env.PUBLIC_URL}/assets/works/pyarcS.png`}
            alt="pyarcS Tool"
          />
          <h3>pyarcS</h3>
          <p>
            This innovative tool eliminates the complexities and tediousness associated with database tasks, allowing developers to allocate their valuable time and energy towards other critical projects.
            We invite you to explore QueryManager and discover how it can benefit your workflow and productivity.
          </p>
          <a href="https://pypi.org/project/pyarcS/" className="button" target="_blank" rel="noopener noreferrer">
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
