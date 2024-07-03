import './WorkExperience.css';
import React, { useState } from 'react';
const WEMap = {
    0: 9,
    1: 11,
    2: 13,
    3: 15,
    4: 0
}
export default function WorkExperience({ score, setScore, step, setStep }) {
    const [WE, setWE] = useState(-1);

    const handleClick = (WERange) => {
        const newScore = WEMap[WERange];
        if (WE == WERange) {
            setScore(score - newScore);
            setWE(-1);
            return;
        }
        let updatedScore = score;
        if (WE === -1) {
            updatedScore += newScore;
        } else {
            const oldScore = WEMap[WE];
            updatedScore += newScore - oldScore;
        }

        setScore(updatedScore);
        setWE(WERange);

    };

    return (
        <div className='we-container' style={step === 3 ? { display: 'block' } : { display: 'none' }}>
            <div className='crs-form-heading'>
                Work Experience (Maximum 15 points)
            </div>
            <div className='crs-form-description'>
                You can get points for the number of years you’ve spent doing full-time paid work (at least 30 hours per week, or an equal amount of part-time [15 hours per week for 24 months]) in most skilled occupations
            </div>
            <div className='we-buttons-title'>
                Select your experience
            </div>
            <div className='we-buttons'>
                <button className={WE==4?'selected':'de-selected'} onClick={() => handleClick(4)}>Less than 1 year</button>
                <button className={WE==0?'selected':'de-selected'} onClick={() => handleClick(0)}>1 years</button>
                <button className={WE==1?'selected':'de-selected'} onClick={() => handleClick(1)}>2-3 years</button>
                <button className={WE==2?'selected':'de-selected'} onClick={() => handleClick(2)}>4-5 years</button>
                <button className={WE==3?'selected':'de-selected'} onClick={() => handleClick(3)}>6+ years</button>
            </div>
            <div className="crs-form-buttons">
                <button className="crs-form-prev" onClick={() => setStep(step - 1)}>Prev</button>
                {WE != -1 ? <button className="crs-form-next" onClick={() => setStep(step + 1)}>Next</button> : <button className="crs-form-next">Next</button>}
            </div>
        </div>
    )
}

