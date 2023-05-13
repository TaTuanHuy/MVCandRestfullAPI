"use strict";
class Validate {
    constructor(element, value, minlenght, maxLenght, regex, message) {
        element = element,
            value = value,
            minlenght = minlenght,
            maxLenght = maxLenght,
            regex = regex,
            message = message;
    }
}
const firstName = new Validate('first-name', '', 3, 16, /^[A-Z]/g, 'First name must be alphanumeric and contain 3 - 16 characters');
const lastName = new Validate('last-name', '', 3, 16, /^[A-Z]/g, 'Last name must be alphanumeric and contain 3 - 16 characters');
function validateElement(user) {
    let inputItem = document.querySelector('.' + user.element);
    const element = document.querySelector('#' + user.element);
    let notification = document.createElement('div');
    notification.classList.add('input-notification');
    notification.innerHTML = user.message;
    element.onblur = () => {
        const elementValue = element.value.trim();
        // console.log(elementValue.length)
        console.log(elementValue.match(user.regex1).length);
        const test = user.hasOwnProperty('regex1');
        let tets2 = 0;
        if (test) {
            tets2 = elementValue.match(user.regex1).length;
            console.log(tets2);
        }
        else {
            tets2 = elementValue.length;
            console.log(tets2);
        }
        if (elementValue.length < user.minLenght || elementValue.length > user.maxLenght
            || elementValue.match(user.regex) === null || tets2 < elementValue.length) {
            element.value = '';
            inputItem.appendChild(notification);
        }
    };
    element.onkeydown = () => {
        notification.remove();
    };
}
