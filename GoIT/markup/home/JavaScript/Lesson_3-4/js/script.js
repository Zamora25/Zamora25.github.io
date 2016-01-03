  var app = {
    createElement: function(params) {
      var element = document.createElement(params.tagName);
 
      if (params.inputType){
        element.setAttribute('type', params.inputType);
      } 
        
      if (params.className){    
         element.className = params.className;
      }

      if (params.content){
         element.innerHTML = params.content;
      }

      if (params.parentElement){
         params.parentElement.appendChild(element);
      }
        return element;
    },
    
    generateQuestions: function(guestionsAmount, answersAmount) { 
      for (var i = 0; i < guestionsAmount; i++) {
        var Question = this.createElement({
          tagName: 'h2',
          content: 'Вопрос №' + (i + 1),  
          parentElement: form
      });

      for (var j = 0; j < answersAmount; j++) {
        var label = this.createElement({
        tagName: 'label',
        content: 'Вариант ответа №' + (j + 1),
        parentElement: form
      });

        var checkbox = this.createElement({
          tagName: 'input',
          inputType: 'checkbox' 
        });
        
        label.insertAdjacentElement('afterBegin', checkbox);
      }
    };
  }
}


  var body = document.querySelector('body');

  app.createElement({
    tagName: 'h1',
    content: 'Тест по програмированию',
    parentElement: body
  });

  var form = app.createElement({
    tagName: 'form',
    parentElement: body
  });

  app.generateQuestions(3, 3);

  var submit = app.createElement({
     tagName: 'input',
     inputType: 'submit',
     content: 'Проверить мои результаты',
     parentElement: form
  });

  submit.classList.add('submit');
  submit.setAttribute('value', 'Проверить мои результаты')
  


