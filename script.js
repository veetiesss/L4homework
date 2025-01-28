const select = document.getElementById('select');
const allLang = ['en', 'ru', 'deu', 'ua'];
const changeUrLang = () => {
	let lang = select.value;
	location.href = window.location.href.split('#')[0] + '#' + lang; // Уникаємо дублювання хешів
	changeLanguage();
};
select.addEventListener('change', changeUrLang);

const changeLanguage = () => {
	let hash = window.location.hash;
	hash = hash.substr(1);
	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#en'; // Виправлено шлях
		hash = 'en';
	}
	select.value = hash;

	// Виправлено використання невизначеної змінної lang
	if (langArr && langArr['title'] && langArr['title'][hash]) {
		document.querySelector('title').innerHTML = langArr['title'][hash];
	}
	for (let key in langArr) {
		const element = document.querySelector('.lang-' + key);
		if (element && langArr[key][hash]) {
			element.innerHTML = langArr[key][hash];
		}
	}
};
changeLanguage();