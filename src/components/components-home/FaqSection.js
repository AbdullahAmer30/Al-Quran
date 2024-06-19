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
            answer: 'Al-Hamd Official has the most simple online Quran teaching methods for kids. Learn Quran online with expert Quran tutors & recite the Quran in a beautiful Arabic way!',
        },
        {
            question: 'While Teaching the Quran we also do Tarbiyah',
            answer: 'Tarbiyah means growth. We will make sure to give you or your child the right kind of mindset to grow and become a new you with online Quran learning.',
        },
        {
            question: '1 on 1 online Quran classes',
            answer: 'Learn Quran online in 1 on 1 class to make sure you get the best out of the class. The teacher and time would be of your choice and will make sure you get the full attention you need',
        },
        {
            question: 'Affordable Monthly Tuition Fee',
            answer: 'We provide learn Quran online courses for everyone and we make sure that its affordable for everyone. Our charges start from 20€ to 80€.',
        },
        {
            question: 'Learn Quran Online with Flexible Schedule',
            answer: 'You or your child can learn Quran online and set up your schedule as you want! We offer 1 on 1 online Quran learning and online Quran reading classes 24/7.',
        },
        {
            question: 'Qualified Quran Teachers',
            answer: 'Our online Quran teachers are well qualified and given a proper education from a prestigious Islamic institution. We have Arab and non-Arab speaking teachers who will give their best',
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
