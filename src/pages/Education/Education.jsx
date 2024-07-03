import './Education.css';
import React, { useState } from 'react';
const EducationMap = {
    0: 5,
    1: 15,
    2: 19,
    3: 21,
    4: 22,
    5: 23,
    6: 23,
    7: 25,
    8: 0
}
export default function Education({ score, setScore, step, setStep }) {
    const [Education, setEducation] = useState(-1);
    const handleClick = (EducationRange) => {
        const newScore = EducationMap[EducationRange];
        if (EducationRange == Education) {
            setScore(score - newScore);
            setEducation(-1);
            return;
        }
        let updatedScore = score;
        if (Education === -1) {
            updatedScore += newScore;
        } else {
            const oldScore = EducationMap[Education];
            updatedScore += newScore - oldScore;
        }

        setScore(updatedScore);
        setEducation(EducationRange);
    };

    return (
        <div className='education-container' style={step === 2 ? { display: 'block' } : { display: 'none' }}>
            <div className='crs-form-heading'>
                Education (Maximum 25 points)
            </div>
            <div className='crs-form-description'>
                You must include your Canadian credential or your foreign credential and Educational Credential Assessment report when you apply.
            </div>
            <div className='education-buttons-title'>
                Level of Education
            </div>
            <div className='education-buttons'>
                <button className={Education == 8 ? 'selected' : 'de-selected'} onClick={() => handleClick(8)}>None</button>
                <button className={Education == 0 ? 'selected' : 'de-selected'} onClick={() => handleClick(0)}>High School</button>
                <button className={Education == 1 ? 'selected' : 'de-selected'} onClick={() => handleClick(1)}>One-year degree, diploma, or certificate</button>
                <button className={Education == 2 ? 'selected' : 'de-selected'} onClick={() => handleClick(2)}>Two-year degree, diploma, or certificate</button>
                <button className={Education == 3 ? 'selected' : 'de-selected'} onClick={() => handleClick(3)}>Bachelor's degree</button>
                <button className={Education == 4 ? 'selected' : 'de-selected'} onClick={() => handleClick(4)}>Two or more certificates, diplomas or degrees</button>
                <button className={Education == 5 ? 'selected' : 'de-selected'} onClick={() => handleClick(5)}>Professional Degree</button>
                <button className={Education == 6 ? 'selected' : 'de-selected'} onClick={() => handleClick(6)}>Master's degree</button>
                <button className={Education == 7 ? 'selected' : 'de-selected'} onClick={() => handleClick(7)}>PHD</button>
            </div>
            <div className="crs-form-buttons">
                <button className="crs-form-prev" onClick={() => setStep(step - 1)}>Prev</button>
                {Education != -1 ? <button className="crs-form-next" onClick={() => setStep(step + 1)}>Next</button> : <button className="crs-form-next" >Next</button>}
            </div>
        </div>
    )
}

