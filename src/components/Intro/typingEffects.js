// TypingEffect.js
import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
    const phrases = ["passionate about software development.", "passionate about data science."];
    const finalPhrase = "passionate about life.";
    
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [hasCompletedCycle, setHasCompletedCycle] = useState(false);
    const [joever, setJoever] = useState(false);

    useEffect(() => {
        if (hasCompletedCycle && text === finalPhrase) {
            setTimeout(() => setJoever(true), 3000);
            return;
        }
        const currentPhrase = hasCompletedCycle ? finalPhrase : phrases[phraseIndex];
        const typingSpeed = isDeleting ? 50 : 100;

        const handleTyping = () => {
            if (!isDeleting && text === currentPhrase) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);

                if (!hasCompletedCycle) {
                    if (phraseIndex === phrases.length - 1) {
                        setHasCompletedCycle(true);
                    } else {
                        setPhraseIndex(phraseIndex + 1);
                    }
                }
            } else {
                // Update text content during typing/deleting
                setText(prev => isDeleting 
                    ? currentPhrase.substring(0, prev.length - 1) 
                    : currentPhrase.substring(0, prev.length + 1)
                );
            }
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
};

export default TypingEffect;
