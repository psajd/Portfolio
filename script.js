function typeWriter(textElement, text, speed) {
    let i = 0;
    const breakPoint = 'Backend developer from Saint-Petersburg, Russia.';
    function type() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);

            if (textElement.innerHTML.endsWith(breakPoint)) {
                textElement.innerHTML += '<br><br>';
            }

            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

const aboutTextElement = document.querySelector('.about-text');

const yourText = 'Backend developer from Saint-Petersburg, Russia. Java, Kotlin enjoyer.';

typeWriter(aboutTextElement, yourText, 75);
