function emailCheck() {

    let email = document.getElementById('email');
    let regex = new RegExp('^.+@.+\..+$');
    let isValid = regex.test (email.value);

    let parent = document.getElementById('three');
    let childPara = document.getElementById('para');
    let childFalsePara = document.getElementById('falsepara');
    let childFalseImg = document.getElementById('falseimg');

    if (parent.contains(childPara) === false && isValid === true) {
        let parent = document.getElementById('three');
        let para = document.createElement('p');

        para.textContent = 'Email is valid';
        para.id= 'para';
        para.style.color = 'green';
        parent.appendChild(para);
            if (parent.contains(childFalsePara) === true) {
                parent.removeChild(childFalseImg);
                parent.removeChild(childFalsePara);
            }
    }

    else if (parent.contains(childFalsePara) === false  && isValid !== true) {
        let parent = document.getElementById('three');
        let falsePara = document.createElement('p');
        falsePara.textContent = 'Email is not valid';
        falsePara.id= 'falsepara';
        falsePara.style.color = 'red';

        let falseImg = document.createElement('img');
        falseImg.src='./images/icon-error.svg';
        falseImg.id='falseimg';

        parent.appendChild(falsePara);
        parent.appendChild(falseImg);

            if (parent.contains(childPara) === true) {
                parent.removeChild(childPara);
            }
    }
}

function firstNameCheck() {
    let firstName = document.getElementById('name');
    let parent1 = document.getElementById('one');
    let childPara1 = document.getElementById('para1');
    let childFalsePara1 = document.getElementById('falsepara1');
    let childFalseImg1 = document.getElementById('falseimg1');
    if (parent1.contains(childPara1) === false && firstName.value.length >= 3) {
        let parent1 = document.getElementById('one');
        let para1 = document.createElement('p');
        para1.textContent = 'First Name is valid';
        para1.id= 'para1';
        para1.style.color = 'green';
        parent1.appendChild(para1);

        if (parent1.contains(childFalsePara1) === true) {
            parent1.removeChild(childFalseImg1);
            parent1.removeChild(childFalsePara1);
        }
    }

    else if (parent1.contains(childFalsePara1) === false  && firstName.value.length < 3) {
        let parent1 = document.getElementById('one');

        let falsePara1 = document.createElement('p');
        falsePara1.textContent = 'First Name is invalid (minimum 3 characters)';
        falsePara1.id= 'falsepara1';
        falsePara1.style.color = 'red';

        let falseImg1 = document.createElement('img');
        falseImg1.src='./images/icon-error.svg';
        falseImg1.id='falseimg1';

        parent1.appendChild(falsePara1);
        parent1.appendChild(falseImg1);

            if (parent1.contains(childPara1) === true) {
                parent1.removeChild(childPara1);
            }
    }
}

function lastNameCheck() {
    let lastName = document.getElementById('lastname');
    let parent2 = document.getElementById('two');
    let childPara2 = document.getElementById('para2');
    let childFalsePara2 = document.getElementById('falsepara2');
    let childFalseImg2 = document.getElementById('falseimg2');

    if (parent2.contains(childPara2) === false && lastName.value.length >= 3) {
        let parent2 = document.getElementById('two');
        let para2 = document.createElement('p');
        para2.textContent = 'Last Name is valid';
        para2.id= 'para2';
        para2.style.color = 'green';
        parent2.appendChild(para2);

            if (parent2.contains(childFalsePara2) === true) {
                parent2.removeChild(childFalsePara2);
                parent2.removeChild(childFalseImg2);
            }
    }

    else if (parent2.contains(childFalsePara2) === false  && lastName.value.length < 3) {
        let parent2 = document.getElementById('two');
        let falsePara2 = document.createElement('p');
        falsePara2.textContent = 'Last Name is invalid (minimum 3 characters)';
        falsePara2.id= 'falsepara2';
        falsePara2.style.color = 'red';

        let falseImg2 = document.createElement('img');
        falseImg2.src='./images/icon-error.svg';
        falseImg2.id='falseimg2';
        
        parent2.appendChild(falsePara2);
        parent2.appendChild(falseImg2);

            if (parent2.contains(childPara2) === true) {
                parent2.removeChild(childPara2)
            }
    }
}


function passwordCheck() {
    let passwordCheck = document.getElementById('password');
    let parent3 = document.getElementById('four');
    let childPara3 = document.getElementById('para3');
    let childFalsePara3 = document.getElementById('falsepara3');
    let childFalseImg3 = document.getElementById('falseimg3');

    if (parent3.contains(childPara3) === false && passwordCheck.value.length >= 8) {
        let parent3 = document.getElementById('four');
        let para3 = document.createElement('p');
        para3.textContent = 'Password is valid';
        para3.id= 'para3';
        para3.style.color = 'green';
        parent3.appendChild(para3);

            if (parent3.contains(childFalsePara3) === true) {
                parent3.removeChild(childFalsePara3);
                parent3.removeChild(childFalseImg3);
            }
    }

    else if (parent3.contains(childFalsePara3) === false  && passwordCheck.value.length < 8) {
        let parent3 = document.getElementById('four');
        let falsePara3 = document.createElement('p');
        falsePara3.textContent = 'Password is too weak';
        falsePara3.id= 'falsepara3';
        falsePara3.style.color = 'red';

        let falseImg3 = document.createElement('img');
        falseImg3.src='./images/icon-error.svg';
        falseImg3.id='falseimg3';

        parent3.appendChild(falsePara3);
        parent3.appendChild(falseImg3);

            if (parent3.contains(childPara3) === true) {
                parent3.removeChild(childPara3);
            }
    }
}