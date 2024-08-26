function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');

    // Open the envelope flap and body
    envelope.querySelector('.envelope-flap').style.transform = 'rotateX(-180deg)';
    envelope.style.transform = 'rotateX(-180deg)';

    // Reveal the letter
    setTimeout(() => {
        letter.style.transform = 'rotateX(0deg)'; // Rotate the letter into view correctly
        letter.style.opacity = '1';
    }, 500); // Delay the letter appearance slightly to sync with the envelope opening
}
