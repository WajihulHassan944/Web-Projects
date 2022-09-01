const words = [
{
	word: "pocket",
	hint: "A bag for carrying small items"
},
{
	word: "needle",
	hint: "A thin and sharp metal pin"
},
{
	word: "expert",
	hint: "Person with extensive knowledge"
},
{
	word: "statement",
	hint: "A declaration of something"
},
{
	word: "second",
	hint: "One-sixteinth of a minute"
},
{
	word: "library",
	hint: "Place containing collection of books"
},
{
	word: "addition",
	hint: "The process of adding numbers"
},
{
	word: "meeting",
	hint: "Event in which people come together"
},
{
	word: "number",
	hint: "Math symbol used for counting"
},
{
	word: "exchange",
	hint: "The act of trading"
},
{
	word: "canvas",
	hint: "Place of fabric for oil painting"
},
{
	word: "garden",
	hint: "Space for plant"
},
];













const word = document.querySelector(".ward"),
      hint = document.querySelector(".hint span"),
	  time = document.querySelector(".time b"),
	  input = document.querySelector("input"),
	  refreshBtn=document.querySelector(".refresh-word"),
	  checkBtn=document.querySelector(".check-word");

let correctWord,timer;


const initTimer = maxTime =>{
	
		clearInterval(timer);
	
	timer = setInterval(()=>{
		if(maxTime>0){
			maxTime--;
			return time.innerText=maxTime;
		}
		clearInterval(timer);
		alert(`Time Off! ${correctWord.toUpperCase()} was the correct word`);
		initGame();    //Calling this function for game to restarts
	},1000);
	
}

const initGame = () => {
	initTimer(30);
	let randomObj = words[Math.floor(Math.random() * words.length)];   //Getting random objects from words
	let wordArray = randomObj.word.split("");                     // Splitting Each letter of Random Word
	
	for(let i=wordArray.length-1;i>0;i--){
		let j= Math.floor(Math.random() * (i+1));       //Getting Random Number
		let temp= wordArray[i];						//Shuffling and Swiping words of wordarray randomly
		wordArray[i] = wordArray[j];
		wordArray[j] = temp;
	}
	word.innerText=wordArray.join("");
	hint.innerText=randomObj.hint;
	correctWord=randomObj.word.toLowerCase();
	input.value="";
	input.setAttribute("maxlength",correctWord.length);
	
}

initGame();
const checkWord = () => {
	let userword = input.value.toLocaleLowerCase();   //Getting user word
	if(!userword) return alert("Please enter a word");
	if(userword!= correctWord) return alert(`Oops! ${userword} is not a correct word`);
	alert(`Congrats! ${userword.toUpperCase()} is a correct word`);
	
initGame();
}

refreshBtn.addEventListener("click",initGame);
checkBtn.addEventListener("click",checkWord);
