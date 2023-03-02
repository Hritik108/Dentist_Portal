import './testimonials.css';

const Testimonials = ()=>{
return ( <div className="testimonial-container">
<h2 className="testimonial-heading">What Our Patients Say</h2>
<div className="testimonial-grid">
  <div className="testimonial">
    <p>"I'm always impressed with the level of care I receive at this dental office. The staff are friendly and knowledgeable, and they always make me feel comfortable during my visits. Highly recommend!"</p>
    <p className="author">- Jane D.</p>
  </div>
  <div className="testimonial">
    <p>"I've been going to this dentist for years and have always had a great experience. The staff are professional and caring, and they do an excellent job explaining any procedures I need. I wouldn't trust my dental care to anyone else."</p>
    <p className="author">- John S.</p>
  </div>
  <div className="testimonial">
    <p>"I was nervous about getting a root canal, but the dentist and staff put me at ease and the procedure went smoothly. I appreciate their expertise and compassionate care. Thank you!"</p>
    <p className="author">- Sarah M.</p>
  </div>
  <div className="testimonial">
    <p>"I was nervous about getting a root canal, but the dentist and staff put me at ease and the procedure went smoothly. I appreciate their expertise and compassionate care. Thank you!"</p>
    <p className="author">- Sarah M.</p>
  </div>
</div>
</div>);
}
export default Testimonials;