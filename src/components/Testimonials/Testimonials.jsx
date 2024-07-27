import React, { useRef, useState } from 'react';
import './Testimonials.css'; 
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const sliderRef = useRef(null);
  const [tx, setTx] = useState(0);

  const slideForward = () => {
    setTx(prevTx => {
      const newTx = prevTx - 25;
      if (newTx < -75) return -75; // Adjust if you want to limit the sliding
      sliderRef.current.style.transform = `translateX(${newTx}%)`;
      return newTx;
    });
  };

  const slideBackward = () => {
    setTx(prevTx => {
      const newTx = prevTx + 25;
      if (newTx > 0) return 0; // Adjust if you want to limit the sliding
      sliderRef.current.style.transform = `translateX(${newTx}%)`;
      return newTx;
    });
  };

  return (
    <div className='testimonials'>
      <img src={back_icon} alt="Previous" className='back-btn' onClick={slideBackward} />
      <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
      <div className="slider">
        <ul ref={sliderRef}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Abdullah Khan</h3>
                  <span>Lahore, Pakistan</span>
                </div>
                <p>The purpose of a degree is to provide specialized knowledge and skills in a particular field, enhancing career opportunities and personal growth. It also serves as a formal recognition of academic achievement and competence.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Salman Khan</h3>
                  <span>Lahore, Pakistan</span>
                </div>
                <p>Degrees help build a foundation for critical thinking and problem-solving abilities, equipping individuals to tackle complex challenges. Additionally, they foster personal development and lifelong learning.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Shahrukh Khan</h3>
                  <span>Lahore, Pakistan</span>
                </div>
                <p>The purpose of a degree is to provide specialized knowledge and skills in a particular field, enhancing career opportunities and personal growth. It also serves as a formal recognition of academic achievement and competence.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Amir Khan</h3>
                  <span>Lahore, Pakistan</span>
                </div>
                <p>Degrees help build a foundation for critical thinking and problem-solving abilities, equipping individuals to tackle complex challenges. Additionally, they foster personal development and lifelong learning.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
