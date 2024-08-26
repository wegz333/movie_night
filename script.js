function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');

    // Open the envelope flap
    envelope.querySelector('.envelope-flap').style.transform = 'rotateX(-180deg)';
    
    // Rotate the envelope body and reveal the letter with correct orientation
    setTimeout(() => {
        envelope.style.transform = 'rotateX(-180deg)';
        letter.style.transform = 'rotateX(0deg)'; // Rotate to 0deg to be right-side up
        letter.style.opacity = '1';
    }, 500); // Adjust delay if necessary
}
