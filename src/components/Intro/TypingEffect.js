import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
    const phrases = ["passionate about software development", "passionate about data science"];
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [hasCompletedCycle, setHasCompletedCycle] = useState(false);

    useEffect(() => {
        if (hasCompletedCycle) return;

        const currentPhrase = phrases[phraseIndex];
        let typingSpeed = isDeleting ? 30 : 60;

        const handleTyping = () => {
            if (!isDeleting && text === currentPhrase) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                if (phraseIndex === phrases.length - 1) {
                    setHasCompletedCycle(true);
                } else {
                    setPhraseIndex(phraseIndex + 1);
                }
            } else {
                setText((prev) => {
                    const nextText = isDeleting
                        ? currentPhrase.substring(0, prev.length - 1)
                        : currentPhrase.substring(0, prev.length + 1);
                    return nextText;
                });
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, phraseIndex, hasCompletedCycle]);

    return <span>{text}</span>;
};

export default TypingEffect;
