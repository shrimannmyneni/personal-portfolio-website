// TypingEffect.js
import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
    // const finalPhrase = "Hi, I’m Shrimann Myneni, a Computer Science student at the University of Michigan passionate about software engineering, AI/ML, and backend development. I’ve gained experience building scalable systems, designing REST APIs with AWS and Node.js, and testing AI performance.\nOutside of academics, I enjoy playing poker, which sharpens my strategic thinking and decision-making skills, working out to stay focused and disciplined, and listening to podcasts to learn from experts and broaden my perspective.\nI’m currently seeking 2025 internship opportunities in Software Engineering and Backend Development, where I can apply my skills to solve impactful challenges and continue growing as a developer. Let’s connect!";

    const finalPhrase = "Welcome to my website!"
    const [text, setText] = useState('');
    const [joever, setJoever] = useState(false);

    useEffect(() =>{
        if (text === finalPhrase) {
            setTimeout(() => setJoever(true), 3000);
            return;
        }
        const typingSpeed = 10;

        const handleTyping = () => {
            setText(prev => finalPhrase.substring(0, prev.length + 1));
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    });

    return (
        <span>
            {text}
            {joever ? '' : <span className="regular-cursor">|</span>}
        </span>
    );
}

export default TypingEffect;
