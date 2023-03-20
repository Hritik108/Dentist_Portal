import './faq.component.css'
import { useState } from "react";
const Faq =()=>{
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    const faqs = [
      {
        question: "What are your office hours?",
        answer: "Our office is open Monday to Friday from 8:00am to 5:00pm, and we also offer emergency appointments outside of our regular hours. Please call our office to schedule an appointment."
      },
      {
        question: "Do you accept dental insurance?",
        answer: "Yes, we accept most dental insurance plans. Please bring your insurance information with you to your appointment and we will gladly file your claim for you."
      },
      {
        question: "What types of payment do you accept?",
        answer: "We accept cash, check, and most major credit cards. We also offer financing options through CareCredit."
      },
      {
        question: "What should I expect during my first visit?",
        answer: "During your first visit, we will perform a comprehensive dental exam, including x-rays and a cleaning. We will discuss any concerns you may have and create a treatment plan tailored to your needs."
      }
    ];
  
    return (
      <div className="faq-container">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => handleAccordionClick(index)}>
                <h3>{faq.question}</h3>
                <i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`}></i>
              </div>
              {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    );
}

export default Faq;