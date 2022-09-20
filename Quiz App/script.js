const quizDB = [
{
	question: "Q1: Which of the following is Tricontinental Country?",
	a: "Chad",
	b: "Chile",
	c: "Mali",
	d: "Swaziland",
	ans: "ans2"
},{
	question: "Q2: Famous fast food restaurant company Burger King belongs to which Country?",
	a: "America",
	b: "England",
	c: "Turkey",
	d: "None of These",
	ans: "ans1"
},{
	question: "Q3: The first person to draw the map of Earth?",
	a: "Hiraclitus",
	b: "Pythagoras",
	c: "Anaximander",
	d: "Thales",
	ans: "ans3"
},{
	question: "Q4: Who laid  first step on the Moon?",
	a: "LMP Edgar",
	b: "CMP Stuart",
	c: "Neil Armstrong",
	d: "None of these",
	ans: "ans3"
}
];

let questionCount=0;

const question=document.querySelector('.question');

const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');

const answers=document.querySelectorAll('.answer');
let score=0;
const btn=document.querySelector('#submit');
const scoreArea=document.querySelector('#showscore');

const getCheckedAns = () =>{
	let answer;
answers.forEach((curAnsElem)=>{
			if(curAnsElem.checked){
				answer = curAnsElem.id;
			}
	 });
	 
	 return answer;
	 };


const deselectAll = () =>{
	answers.forEach((curAnsElement)=>curAnsElement.checked=false);
}


const loadQuestion = () =>{
	const questionList=quizDB[questionCount];
	
	question.innerText=questionList.question;
	option1.innerText=questionList.a;
	option2.innerText=questionList.b;
	option3.innerText=questionList.c;
	option4.innerText=questionList.d;
	
	
}






loadQuestion();


btn.addEventListener("click",()=>{
	const checkedAns=getCheckedAns();
	if(checkedAns==quizDB[questionCount].ans){
		score++
	}
	deselectAll();
	questionCount++;
	
	if(questionCount<quizDB.length){
		loadQuestion();
	}else{
		scoreArea.innerHTML=`
		<h3>Your Score is ${score}/${quizDB.length} </h3>
		<button class="playAgainBtn" onclick="location.reload()">Play Again </button>
		`
		scoreArea.style.display="block";
	}
});



