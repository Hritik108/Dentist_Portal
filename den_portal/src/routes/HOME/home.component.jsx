import './home.component.css'
const Home = () =>{
    console.log("Home");
return ( <div>
    {/* <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
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
        <a href="#" className="btn">Learn More</a>
      </section>
      <section id="home-services">
        <h2>Our Services</h2>
        <ul>
          <li><a href="#">Teeth Cleaning</a></li>
          <li><a href="#">Teeth Whitening</a></li>
          <li><a href="#">Dental Implants</a></li>
          <li><a href="#">Braces</a></li>
        </ul>
      </section>
      <section id="home-about">
        <h2>About Us</h2>
        <p>We are a team of experienced dentists committed to providing the highest quality of dental care to our patients. Our mission is to help you achieve optimal oral health and a beautiful smile that you can be proud of.</p>
        <a href="#" className="btn">Learn More</a>
      </section>
      <section id="home-contact">
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
      </section>
    </main>
    <footer>
      <p>&copy; My Dentist 2023</p>
    </footer>
  </div>
)
}

export default Home;