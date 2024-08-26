function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');

    envelope.querySelector('.envelope-flap').style.transform = 'rotateX(-180deg)';
    envelope.style.transform = 'rotateX(-180deg)';
    letter.style.transform = 'rotateX(0deg)';
    letter.style.opacity = '1';
}