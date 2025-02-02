import { Button } from 'react-bootstrap';
import './home.component.css'
const Home = () =>{
    console.log("Home");
return ( <div>
    {/* <header>
      <nav>
        <ul>
          <li><a href="#">Homeeii</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </header> */}
    <main className='home-main'>
      <section id="home-hero">
        <h1>Welcome to My Dentist</h1>
        <p>Your smile is our top priority</p>
        <a href="#" className="btn-home">Learn More</a>
      </section>
      <section id="home-services">
        <h2>Our Services</h2>
        <ul>
          <li><a href="/services"><h3>Teeth Cleaning</h3></a></li>
          <li><a href="/services"><h3>Teeth Whitening</h3></a></li>
          <li><a href="/services"><h3>Dental Implants</h3></a></li>
          <li><a href="/services"><h3>Braces</h3></a></li>
        </ul>
      </section>
      <section id="home-about">
        <h2>About Us</h2>
        <p>We are a team of experienced dentists committed to providing the highest quality of dental care to our patients. Our mission is to help you achieve optimal oral health and a beautiful smile that you can be proud of.</p>
        <a href="aboutus" className="btn-home">Learn More</a>
      </section>
      {/* <section id="home-contact">
        <h2>Contact Us</h2>
        <form className='home-form'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section> */}
    </main>
    {/* <footer>
      <p>&copy; My Dentist 2023</p>
    </footer> */}
  </div>
)
}

export default Home;
