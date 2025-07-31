import ahtishamImage from '../assets/aa.jpeg'; // Make sure path & name match exactly

function Hero() {
  return (
    <section id="welcome" className="hero-section">
      <div className="hero-content">
        <img
          src={ahtishamImage}
          alt="Ahtisham Tanveer"
          className="profile-pic"
        />
        <div className="text-content">
          <h2>Welcome To My Portfolio</h2>
          <p>
            Hello, I’m <strong>Ahtisham Tanveer</strong> a passionate cybersecurity student dedicated to safeguarding digital systems. With a strong foundation in ethical hacking, digital forensics, and threat intelligence, I aim to contribute meaningfully to the field of information security through continuous learning and hands-on experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
