var questionList;

window.onload = function() {
    loadJSON();
}

function loadJSON() {
    let requestURL = 'assets/data.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        processData(request.response);
    }
}

function processData(response) {
    questionList = response.questions.sort((a,b) => (parseInt(a.id) > parseInt(b.id)) ? 1 : ((parseInt(b.id) > parseInt(a.id)) ? -1 : 0));
    let rootDiv = document.getElementById('dynamic-questions-wrapper');

    for (const question of questionList) {

        let questionContainer = document.createElement('div');
        questionContainer.className = 'question-container';
        rootDiv.appendChild(questionContainer);

        let questionText = document.createElement('div');
        questionText.className = 'question';
        questionText.innerHTML = '<span class="number">' + question.id + '. </span>' + question.question;
        questionContainer.appendChild(questionText);
        
        let answers = document.createElement('div');
        answers.className = 'answers';
        questionContainer.appendChild(answers);

        switch(question.type) {
            case 'text':
                let inputContainer = document.createElement('div');
                inputContainer.className = 'mb-3';
    
                let input = document.createElement('input');
                input.type = 'text';
                input.className = 'form-control';
                input.name = 'q' + question.id;
    
                inputContainer.appendChild(input);
                answers.appendChild(inputContainer);
                break;
            case 'logical': case 'decidable':
                for (let i = 0; i < question.options.length; ++i) {
                    let radioButtonContainer = document.createElement('div');
                    radioButtonContainer.className = 'form-check';
        
                    let radioButton = document.createElement('input');
                    radioButton.type = 'radio';
                    radioButton.id = 'radio-q' + question.id + "-a" + (i + 1);
                    radioButton.className = 'form-radio-input';
                    radioButton.name = 'q' + question.id;

                    let label = document.createElement('label');
                    label.htmlFor = 'radio-q' + question.id + "-a" + (i + 1);
                    label.className = 'form-radio-label';
                    label.innerText = question.options[i];
        
                    radioButtonContainer.appendChild(radioButton);
                    radioButtonContainer.appendChild(label);
                    answers.appendChild(radioButtonContainer);
                }
                break;
            case 'options':
                for (let i = 0; i < question.options.length; ++i) {
                    let checkboxContainer = document.createElement('div');
                    checkboxContainer.className = 'form-check';
        
                    let checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.id = 'check-q' + question.id + "-a" + (i + 1);
                    checkbox.className = 'form-check-input';
                    checkbox.name = 'q' + question.id;

                    let label = document.createElement('label');
                    label.htmlFor = 'check-q' + question.id + "-a" + (i + 1);
                    label.className = 'form-check-label';
                    label.innerText = question.options[i];
        
                    checkboxContainer.appendChild(checkbox);
                    checkboxContainer.appendChild(label);
                    answers.appendChild(checkboxContainer);
                }
                break;
            default:
          }
    }
}