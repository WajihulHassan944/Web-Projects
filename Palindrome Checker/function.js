const input = document.querySelector(".inputs input"),
	  checkBtn = document.querySelector(".inputs button"),
	  info = document.querySelector(".info-txt");


let filterInput;


checkBtn.addEventListener("click", ()=>{
	//Splitting user word , reversing it , and
	//then joining it in a single world
	
	let reverseInput = filterInput.split("").reverse().join("");
	info.style.display="block";
	if(filterInput!=reverseInput){
		return info.innerHTML= `No, <span>'${input.value}'</span> is not a palindrome!`;
	}
	info.innerHTML= `Yes, <span>'${input.value}'</span> is a palindrome!`;
	console.log(reverseInput);
});


input.addEventListener("keyup",()=>{
	//Removing spaces and all special characters from entered value 
	filterInput = input.value.toLowerCase().replace(/[^A-Z0-9]/ig,"");
	if(filterInput){
		return checkBtn.classList.add("active");
	}
	checkBtn.classList.remove("active");
});