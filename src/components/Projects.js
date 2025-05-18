import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="main-container" id="projects" name="projects">
        <h1>Projects</h1>

        <div className="cards">
          <img src={process.env.PUBLIC_URL + "/assets/projects/UZ_banner.png"} alt="Urban ZoomIn banner" />
          <h3>Urban ZoomIn</h3>
          <p>Real-time information and commerce system</p>
          <p>
            Urban ZoomIn is a user-friendly web app that helps people discover nearby businesses and services. It offers categorized listings, real-time
            updates, and contact details, making it easier to connect with local shops and resources.
          </p>
          <a href="https://srinadhch07.pythonanywhere.com/" className="button">
            View More
          </a>
        </div>

        <div className="cards">
          <img src={process.env.PUBLIC_URL + "/assets/projects/BAv2.png"} alt="Project BAv2" />
          <h3>Project BAv2</h3>
          <p>
            BAv2 is a powerful command-line assistant designed to streamline your interactions with your computer. It's like having a personal assistant at your
            fingertips, ready to execute commands, automate tasks, and provide valuable information.
          </p>
          <a href="https://github.com/Srinadhch07/Project_BAv2" className="button">
            View More
          </a>
        </div>

        <div className="cards">
          <img src={process.env.PUBLIC_URL + "/assets/projects/Mark.png"} alt="MaRk Virtual Assistant" />
          <h3>MaRk virtual Assistant</h3>
          <p>
            Meet Mark, your virtual assistant (VA)! No more overflowing to-do lists or feeling stressed. Mark fits right into your day, making things easier and
            helping you get more done. Need your calendar managed, appointments scheduled, or deadlines remembered? Mark's your personal sidekick, keeping you
            organized and in control.
          </p>
          <a href="https://github.com/Srinadhch07/MaRk_VirtualAssistant" className="button">
            View More
          </a>
        </div>

        <div className="cards">
          <img src={process.env.PUBLIC_URL + "/assets/works/pyarcS.png"} alt="QueryManager" />
          <h3>QueryManager</h3>
          <p>
            The QueryManager project presents a simplified solution for Python developers and users who are seeking to streamline their database handling
            processes.
          </p>
          <a href="https://github.com/Srinadhch07/QueryManager" className="button">
            View More
          </a>
        </div>

        <div className="cards">
          <img src={process.env.PUBLIC_URL + "/assets/projects/PUI.png"} alt="URL Intelligence" />
          <h3>URL Intelligence</h3>
          <p>
            This project aims to develop a machine learning model capable of accurately predicting whether a given URL is malicious or not. By analyzing various
            features of URLs, such as length, presence of suspicious keywords, and host characteristics, the model will learn to identify patterns associated with
            malicious websites.
          </p>
          <a href="https://github.com/Srinadhch07/Predictive-URL-intelligence-" className="button">
            View More
          </a>
        </div>

        <div className="cards">
          <img src={process.env.PUBLIC_URL + "/assets/projects/YVT.png"} alt="YT Translator" />
          <h3>YT Translator</h3>
          <p>
            This project creates a tool that extracts key points from YouTube videos. It uses natural language processing to analyze the audio and identify
            important information. This helps users quickly understand the main content without watching the entire video.
          </p>
          <a href="https://github.com/Srinadhch07/YT-To-Notes" className="button">
            View More
          </a>
        </div>

        <div className="cards">
          <img src={process.env.PUBLIC_URL + "/assets/projects/DocBot.png"} alt="DocBot" />
          <h3>DocBot</h3>
          <p>
            The Document processing system utilizes natural language processing techniques to extract key information from PDFs and facilitates user interaction
            through a question and answer interface.
          </p>
          <a href="https://github.com/Srinadhch07/DocBot" className="button">
            View More
          </a>
        </div>

        <div className="cards">
          <img src={process.env.PUBLIC_URL + "/assets/projects/WCS.png"} alt="Chat Summarizer" />
          <h3>Chat Summarizer</h3>
          <p>No more overwhelming your friend with walls of text! This tool helps you share the best parts of your conversations quickly and easily.</p>
          <a href="https://github.com/Srinadhch07/whatsapp-chat-Summarizer" className="button">
            View More
          </a>
        </div>

        <div className="cards">
          <img src={process.env.PUBLIC_URL + "/assets/projects/Studybot.png"} alt="StudyBot" />
          <h3>StudyBot</h3>
          <p>
            StudyBot is a cutting-edge AI-driven platform designed to significantly enhance exam preparation. By meticulously analyzing vast datasets of past
            question papers and subject syllabi, StudyBot employs advanced algorithms to predict potential exam questions with remarkable accuracy.
          </p>
          <a href="https://github.com/Srinadhch07/StudyBot" className="button">
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
