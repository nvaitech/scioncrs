import { useState } from 'react'
import './App.css'
import React from 'react'; 
import Language from './pages/Language/Language.jsx';
import Age from './pages/Age/Age.jsx';
import WorkExperience from './pages/WorkExperience/WorkExperience.jsx';
import Education from './pages/Education/Education.jsx';
import Employment from './pages/Employment/Employment.jsx';
import Adaptability from './pages/Adaptability/Adaptability.jsx';
const description1 = "It seems like you may qualify for the Federal Skilled Worker Program!"
const footer1 = "Please fill out the form below and a member of our team will get in touch with you soon."
const description2 = "Unfortunately, it does not seem like you qualify for the Express Entry program."
const footer2 = "Please fill out the form below and a member of our team will get in touch with you soon." ;
function App() {
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(1); 
  return (
    <>
      <div className='crs-contact-form' style={step == 7 ? { display: 'flex' } : { display: 'none' }}>
          <form id='crs-contact-form' className='contact-form'>
            <div className='title'>{score >= 67 ? 'Congrats!' : 'Oops...'}</div>
            <div className='desc'>{score >= 67 ? description1 : description2}</div>
            <div className='footer'>{score >= 67 ? footer1 : footer2}</div> 
          </form>  
        <div className='crs-form-display'>
          <img src="https://cdn.jsdelivr.net/gh/nvaitech/scioncrs/public/Logo.png" />
          <div>Your Score:<br />{score}/100</div>
        </div>
        <div className='crs-form-display-small'>   
          <div>Your Score: {score}/100</div>
          <img src="https://cdn.jsdelivr.net/gh/nvaitech/scioncrs/public/Logo.png" />
        </div>
      </div>
      <div className="crs-form-container" style={step != 7 ? { display: 'flex' } : { display: 'none' }}>
        <div className='crs-form'>
          <div className='crs-form-step-display'>
            <div className='crs-form-step'>STEP {step} OF 6</div>
            <div className='crs-form-step-box'>
              <div className='box' style={step == 1 ? { backgroundColor: 'var(--primaryColor)' } : {}} />
              <div className='box' style={step == 2 ? { backgroundColor: 'var(--primaryColor)' } : {}} />
              <div className='box' style={step == 3 ? { backgroundColor: 'var(--primaryColor)' } : {}} />
              <div className='box' style={step == 4 ? { backgroundColor: 'var(--primaryColor)' } : {}} />
              <div className='box' style={step == 5 ? { backgroundColor: 'var(--primaryColor)' } : {}} />
              <div className='box' style={step == 6 ? { backgroundColor: 'var(--primaryColor)' } : {}} />
            </div>
          </div>
          <div className='crs-form-inputs'>
            <Age score={score} setScore={setScore} step={step} setStep={setStep} />
            <Language score={score} setScore={setScore} step={step} setStep={setStep} />
            <Education score={score} setScore={setScore} step={step} setStep={setStep} />
            <Employment score={score} setScore={setScore} step={step} setStep={setStep} />
            <Adaptability score={score} setScore={setScore} step={step} setStep={setStep} />
            <WorkExperience score={score} setScore={setScore} step={step} setStep={setStep} />
          </div>
        </div>
        <div className='crs-score-display'>
          <div className='crs-score-banner'>
            <img className='crs-score-banner-img' src="https://cdn.jsdelivr.net/gh/nvaitech/scioncrs/public/Logo.png" />
          </div>
          <div className='crs-score-section'>
            <div className='crs-score-title'>Your score:</div>
            <div className='crs-score'>{score}</div>
          </div>
          <div className='crs-score-banner-contact'>
            <div className='crs-score-banner-contact-text'>Questions?<br /><a href='http://scionimmigration.in/booking-online' target="_blank" style={{ color: '#000', textDecoration: 'underline' }}>Talk to an expert</a></div>
          </div>
        </div>
        <div className='crs-score-display-small'>
          <span className='crs-score'>Score: {score}/100</span>
          <img className='crs-score-banner-img' src="https://cdn.jsdelivr.net/gh/nvaitech/scioncrs/public/Logo.png" />
        </div>
      </div>
    </>
  )
}







export default App
