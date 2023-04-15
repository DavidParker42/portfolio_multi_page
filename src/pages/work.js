import Footer from "../components/footer";
import bookSearch from "../images/bookSearch.png";
import projectWhatch from "../images/project-whatch.png";
import techBlog from "../images/techBlog.png";
import textEditor from "../images/textEditor.png";
import noteTaker from "../images/noteTaker.png";
function Work(props) {
  return (
    <div>
      <section className="work-title">
        <h3>Work</h3>
      </section>
      <div className="picsContainer" id="work-pics">
        <div className="image1">
          <a href="https://booksearch92.herokuapp.com/">
            <img src={bookSearch} className="gridPics" alt="" />
          </a>
          <h4>Book Search Engine</h4>
        </div>
        <div className="image2">
          <a href="https://thelemmonade.github.io/project-whatch/">
            <img src={projectWhatch} className="gridPics" alt="" />
          </a>
          <h4>Interactive Front End Site</h4>
        </div>
        <div className="image3">
          <a href="https://techblog92.herokuapp.com">
            <img src={techBlog} className="gridPics" alt="" />
          </a>
          <h4>Tech Blog</h4>
        </div>
        <div className="image4">
          <a href="https://intense-brook-34675.herokuapp.com/">
            <img src={textEditor} className="gridPics" alt="" />
          </a>
          <h4 className="editor">Text Editor</h4>
        </div>
        <div className="image5">
          <a href="https://parker92-module-11-challenge.herokuapp.com/">
            <img src={noteTaker} className="gridPics" alt="" />
          </a>
          <h4>Note Taker</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Work;