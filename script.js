function typeWriter(textElement, text, speed) {
    let i = 0;
    const breakPoint1 = 'Backend developer from ';
    const breakPoint2 = 'Saint-Petersburg, Russia.';
    function type() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);

            if (textElement.innerHTML.endsWith(breakPoint2)) {
                textElement.innerHTML += '<br><br>';
            }

            if (textElement.innerHTML.endsWith(breakPoint1)) {
                textElement.innerHTML += '<br>';
            }

            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

const aboutTextElement = document.querySelector('.about__personal-text');

const yourText = 'Backend developer from Saint-Petersburg, Russia. Java, Kotlin enjoyer.';

typeWriter(aboutTextElement, yourText, 75);
