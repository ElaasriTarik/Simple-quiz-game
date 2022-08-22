const questions = 
      {
      	question: "what is the biggest city in the world?",
      suggesstions: {
      	answer: "Marrakech",
      	answer: "London",
      	answer: "Paris",
      	answer: "Begein"
      },
      correction: {
      	correctAnswer: "London"
      }
      
  }
    // {
      // 	question: "what is the biggest country in the world?",
      // 	answer1: "Canada",
      // 	answer2: "China",
      // 	answer3: "France",
      // 	answer4: "Russia",
      // 	correctAnswer: "Russia"
      // },
      // {
      // 	question: "what is the biggest river in the world?",
      // 	answer1: "Nile",
      // 	answer2: "Al forat",
      // 	answer3: "Al Zat",
      // 	answer4: "anotherRiver",
      // 	correctAnswer: "Nile"
      // }

const answerAreas = document.getElementsByTagName('h4'); 
for(var i = 0; i< questions.suggesstions.length; i++)
{ 
	console.log(questions.suggesstions[i].answer);
	for(var j = 0; j<
answerAreas.length; j++){ answerAreas[i].textContent =
questions.suggesstions[i]; 
} 
}


// answerAreas.forEach((element) => {
// 	element.textContent = 
// });

console.log(answerAreas);