import "./hub.css";

export default function Hub() {
  return (
    <section className="hub">
      <div className="main-container" id="hub" name="tools">    
        <h1>Hub</h1>

        <div className="cards">
          <img src={process.env.PUBLIC_URL + "/assets/hub/WCS.png"} alt="Chat Summarizer" />
          <h3>Chat Summarizer</h3>
          <p>
            We all love sharing funny moments or juicy gossip from our chats with friends. But copying and pasting long conversations or screenshots can be tedious, especially if you want your friend to understand the context. This chat summarizer is your solution! It acts like your personal cliff-notes generator for chats.
          </p>
          <a href="https://huggingface.co/spaces/srinadhch07/Chat-Summarizer" className="button" target="_blank" rel="noopener noreferrer">Try it</a>
        </div>

        <div className="cards">
          <img src={process.env.PUBLIC_URL + "/assets/hub/Studybot.png"} alt="StudyBot" />
          <h3>StudyBot</h3>
          <p>
            StudyBot is a cutting-edge AI-driven platform designed to significantly enhance exam preparation. By meticulously analyzing vast datasets of past question papers and subject syllabi, StudyBot employs advanced algorithms to predict potential exam questions with remarkable accuracy.
          </p>
          <a href="https://huggingface.co/spaces/srinadhch07/DocBot" className="button" target="_blank" rel="noopener noreferrer">Try it</a>
        </div>

      </div>
    </section>
  );
}
