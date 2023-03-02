import './service.component.css'
const Service = ()=>{
    return  (<div className="services-container">
    <h1 className="services-main-head">Our Services</h1>
    <p className="services-desc">We offer a wide range of dental services to meet the needs of our patients. Our team is committed to providing exceptional care using the latest technology and techniques. Below are some of the services we offer:</p>
    <div className="services-grid">
      <div className="service">
        <h2>Dental Cleanings</h2>
        <p>Our dental cleanings are designed to remove plaque and tartar buildup, preventing cavities and gum disease.</p>
      </div>
      <div className="service">
        <h2>Fillings</h2>
        <p>We offer tooth-colored fillings that blend in seamlessly with your natural teeth.</p>
      </div>
      <div className="service">
        <h2>Root Canals</h2>
        <p>Our root canal treatments can save a damaged or infected tooth from extraction.</p>
      </div>
      <div className="service">
        <h2>Dental Implants</h2>
        <p>We offer dental implant placement and restoration to replace missing teeth and restore your smile.</p>
      </div>
      <div className="service">
        <h2>Orthodontics</h2>
        <p>We offer a variety of orthodontic treatments, including traditional braces and clear aligners.</p>
      </div>
      <div className="service">
        <h2>Teeth Whitening</h2>
        <p>We offer in-office and take-home teeth whitening options to help brighten your smile.</p>
      </div>
    </div>
  </div>
);
}

export default Service;