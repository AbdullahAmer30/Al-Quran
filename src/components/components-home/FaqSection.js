import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FaqSection.css'; // Assuming you have CSS for styling

const FaqSection = () => {
    const navigate = useNavigate();

    // State for FAQ Accordion
    const [activeItem, setActiveItem] = useState(null);

    const faqData = [
        {
            question: 'Easy Online Quran Classes for Kids',
            answer: 'Experience the easiest online Quran learning methods for kids. Learn Quran online with expert tutors and recite the Quran beautifully in Arabic!',
        },
        {
            question: 'While Teaching the Quran we also do Tarbiyah',
            answer: 'Tarbiyah signifies growth. We will ensure you or your child develop the right mindset to grow and transform through online Quran learning.',
        },
        {
            question: '1 on 1 online Quran classes',
            answer: 'Learn the Quran online with personalized 1-on-1 classes to ensure you get the most out of your lessons. Choose your own teacher and schedule to receive the full attention you deserve.',
        },
        {
            question: 'Affordable Monthly Tuition Fee',
            answer: 'We offer online Quran courses for everyone and ensure they are affordable. Our fees range from $30 to $45.',
        },
        {
            question: 'Learn Quran Online with Flexible Schedule',
            answer: 'You or your child can learn the Quran online and set your own schedule! We offer 1-on-1 online Quran learning and reading classes available 24/7.',
        },
        {
            question: 'Qualified Quran Teachers',
            answer: 'Our online Quran teachers are highly qualified, having received proper education from prestigious Islamic institutions. We offer both Arab and non-Arab speaking teachers who are dedicated to providing the best instruction.',
        },
        // Add more FAQ items as needed
    ];

    const toggleAccordion = (index) => {
        setActiveItem(activeItem === index ? null : index);
    };

    return (
        <div id="MainBody">
            <div id="About_ten">
                <div id="sub_About_ten">
                    <h2>Facts & Questions</h2>
                    <div id="sub_box_ten">
                        <div className="sub_ten">
                            {faqData.map((item, index) => (
                                <div key={index}>
                                    <div
                                        className={`ten_1_1 ${activeItem === index ? 'active' : ''}`}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <div className="ten_1_1_icon"></div>
                                        <h6 className='question'>{item.question}</h6>
                                    </div>
                                    <div className={`ten_1_2 ${activeItem === index ? 'active' : ''}`}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
