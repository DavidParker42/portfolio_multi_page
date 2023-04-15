import Navbar from "../components/navbar";
import Footer from "../components/footer";
import headshot from "../images/headshot.png";


function AboutMe(props) {
  return (
    <>
      {/* <Navbar/> */}
      <div className="aboutMe">
        <section id="about-me">
          
            <h3>About Me</h3>
          
          
          <img src={headshot} class="headshot" alt="" />
          <p>
            Full Stack Web Developer with a background in Education and
            life-long dedication to learning. Proficient in mobile and desktop
            development environments. Adept at using JavaScript and other
            programming languages to produce clean code. Well-organized and
            collaborative team player with strong communication and analytical
            abilities.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutMe;
