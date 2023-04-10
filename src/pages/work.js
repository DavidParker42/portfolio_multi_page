import Footer from "../components/footer";

import bookSearch from '../images/bookSearch.png';
import projectWhatch from "../images/project-whatch.png";
import techBlog from '../images/techBlog.png';
import textEditor from '../images/textEditor.png';
import noteTaker from '../images/noteTaker.png';

function Work(props) {
  return (
    <div>
      <section className="work-title">
        <aside>
          <h3>Work</h3>
        </aside>
      </section>

      <div class="picsContainer" id="work-pics">
        <div class="image1">
          <a href="https://booksearch92.herokuapp.com/">
            <img
              src={bookSearch}
              class="gridPics"
              alt=""
            />
          </a>
          <h4>Book Search Engine</h4>
        </div>

        <div class="image2">
          <a href="https://thelemmonade.github.io/project-whatch/">
            <img src={projectWhatch} class="gridPics" alt="" />
          </a>
          <h4>Interactive Front End Site</h4>
        </div>

        <div class="image3">
          <a href="https://techblog92.herokuapp.com">
            <img src={techBlog} class="gridPics" alt="" />
          </a>
          <h4>Tech Blog</h4>
        </div>

        <div class="image4">
          <a href="https://intense-brook-34675.herokuapp.com/">
            <img src={textEditor} class="gridPics" alt="" />
          </a>
          <h4 class="editor">Text Editor</h4>
        </div>

        <div class="image5">
          <a href="https://parker92-module-11-challenge.herokuapp.com/">
            <img src={noteTaker} class="gridPics" alt="" />
          </a>
          <h4>Note Taker</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Work;
