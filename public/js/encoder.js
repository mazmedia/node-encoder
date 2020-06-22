const __INPUT__ = document.querySelector('#input');
const __BUTTON__ = document.querySelector('#button');
const emptyArray = [];
const emptyArrayThree = [];
const emptyArrayTwo = [];
const uppercaseLettersEncodeNumber = 1;
const lowercaseLettersEncodeNumber = 2;

const main = () => {
    addEventListener('click', (event) => {
        event.preventDefault();
    });

    emptyArray.length = 0;
    emptyArrayTwo.length = 0;
    emptyArrayThree.length = 0;

    for (let i = 0; i < __INPUT__.value.length; i++) {
        emptyArray.push(__INPUT__.value[i].charCodeAt(__INPUT__.value[i]));
        // console.error('PUSH() is not defined');
    }

    for (let i = 0; i < emptyArray.length; i++) {
        if (emptyArray[i] >= 65 && emptyArray[i] <= 90) {
            let dude = (emptyArray[i] += uppercaseLettersEncodeNumber);
            if (dude >= 90) {
                dude = (emptyArray[i] -= 25);
                emptyArrayTwo.push(dude);
            } else {
                emptyArrayTwo.push(dude);
            }
        } else if (emptyArray[i] >= 97 && emptyArray[i] <= 122) {
            let dude = (emptyArray[i] += lowercaseLettersEncodeNumber);
            if (dude >= 122) {
                dude = (emptyArray[i] -= 25);
                emptyArrayTwo.push(dude);
            } else {
                emptyArrayTwo.push(dude);
            }
        } else {
            emptyArrayTwo.push((emptyArray[i]) += 0);
        }
    }

    for (let i = 0; i < emptyArrayTwo.length; i++) {
        emptyArrayThree.push(String.fromCharCode(emptyArray[i]));

        // Add to localStorage
        localStorage.setItem(__INPUT__.value, emptyArrayThree.join(''));
        console.log(emptyArrayThree);

    }

    for (let i = 0; i < 2; i++) {
        tellEncodedMessage();
    }
}

const tellEncodedMessage = () => {
    if (emptyArrayThree.length === 0) {
        document.querySelector('#header').innerHTML = 'Encoded A Error:';
        document.querySelector('#paragraph').innerHTML = 'The Input Is Empty! Try Again';
    } else {
        document.querySelector('#header').innerHTML = 'Encoded:';
        document.querySelector('#paragraph').innerHTML = '';
        document.querySelector('#paragraph').innerHTML = emptyArrayThree.join('');
    }
}

console.clear();
