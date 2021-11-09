// Assalomu aleykum do'stlar. Kodimning faqat javascript qismida o'zbek tilida tushuntirganman. 
// Qolgan qismdagi inglizcha so'zlarni tarjima qila olasiz degan umiddaman. Foydam teggan bo'lsa xursandman :)

// Assalamu alaykum guys. In my code maybe some code parts write in uzbek. It's my an officiallanguage. 
// But I will try to translate all this part into English. I hope you enjoy :)) 

///=======///=======///=======///=======///=======///=======///=======///=======///=======///=======///


// kerakli barcha o'zgaruvchi va o'zgarmaslarni e'lon qilib olamiz.
// firstly we gonna create all variables and constants.

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email')
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Fomrning submit bo'lishini tekshiramiz(tinglaymiz). Bu xuddi buttonga bosilish bilan bir xil. 
// Agar o'sha knopka(buttonga) bosilganda va form submit bo'lganda biz  checkInput() funksiyasini chaqiramiz.
// we gonna listen submiting form. This equal like button clicked form submited. 
// And if form submited we gona call checkInputs function

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


// Bu bizning asosiy funksiyamiz. Bu funksiyada barcha inputlarni tekshirib chiqamiz.
// This is our main function. in this function we gonna check all inputs

function checkInputs() {

	// inputdan kelgan malumotlarni olib olamiz.
	// trim metodi bo'sh joylarni o'chirish uchun xizmat qiladi. 
	// we gonna get values from inputs.
	// trim methods remove the whitespaces

	const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
	
	// deyarli barcha qismlar uchun logika bir xil. Avval kerakli inputdan bizga bo'sh data kelmasligini 
	// tekshiramiz. Agar bu to'g'ri bo'lsa setErrorFor funksiyasini chaqiramiz. Aks holda setSuccesFor funksiyasini. 
	
	// All part is same but with small additions. Firstly we  gonna chechk all inputs if there woudn't be empty.
	// And if it give us true we gonna call setErrorFor function else we call setSuccesFor function.

	if(usernameValue === '') {
		setErrorFor(username, 'Username can not be empty');
	} else {
		setSuccessFor(username);
	}

	// email uchun ham shu jarayon faqat farqi emailni aynan emailligni tekshirishimiz kerak. Yani u aynan 
	// valid email bo'lishi kerak. Bu uchun bizda isValidEmail degan funksiya mavjud.

    // exact thing like username but in  this part we must check email is vald or not. 
	// For this we gonna call isValidEmail() function which we gonna see in las part.

	if(emailValue === '') {
		setErrorFor(email, 'Email can not be empty');
	} else if (!isValidEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

	// password uchun xuddi usernamedagi kabi bo'ladi.

	// exact thing like username for password

    if(passwordValue === '') {
		setErrorFor(password, 'Password can not be empty');
	} else {
		setSuccessFor(password);
	}

	// password2 uchun ham shunday faqat farqi password2 ni password bilan taqqoslaymiz. 
	// Agar to'g'ri kelmasa boshqa xatoni chiqaramiz.

	// For password2 is also like password. But in this part we gonna check if password2 equal password.
	// if it give us true we call same function with another message.

    if(password2Value === '') {
		setErrorFor(password2, 'Password2 can not be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}

}


// Bu funksiya yordamida biz xatolarni html sahifamizga olib chiqamiz.
// Buning uchun inputimizning ona elementiga murojaat qilamiz (Ya'ni form-control div ga). Va u yerd dynamic tarzda error clasini yaratib olamiz 
// Show qilmoqchi bogan elemntlarimizni chaqirib olamiz (Ya'ni small agar bo'lsa icon va xohlagan element).
// Va uni htmlga qo'shamiz.

// with this function we gonna show our errors to html. Firstly we gonna  apply inputs parent elements. 
// Which means form-control div. And we get all thing wich we want to add like small icon and etc. And dynamicly create error class in form-control class. 
// And add it to html. 

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

// Success qismi ham xuddi error qismidagidek bo'ladi. Faqat bu yerda xatolar chiqmaydi faqat borderdagi rang o'zgaradi.

// Exact thing like error part. But we dont need add errors so we dont add it.
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}



// Bu biz email uchun chaqirgan funksiya. Bu funksiya yagona emailni chekch qilish uchun bo'lib uni aynan xuddi shu garzda yozish kerak.

// we create this function for checking email is valid or not. This is a one way to checking email is valid.
function isValidEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}