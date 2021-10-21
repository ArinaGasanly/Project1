const bookList = document.querySelector('.books');
const bookElem = document.querySelectorAll('.book');
const bookHeading = document.querySelectorAll('[target="_blank"]');
const bookAd = document.querySelector('.adv');
const chapterOrder = document.querySelectorAll('li');


bookList.append(bookElem[2]);
bookList.prepend(bookElem[1]);
bookElem[3].before(bookElem[4]);


document.body.style.backgroundImage = "url('image/you-dont-know-js.jpg')";

bookHeading[4].innerHTML ='Книга 3. this и Прототипы Объектов';

bookAd.remove();


chapterOrder[1].after(chapterOrder[3]);
chapterOrder[3].after(chapterOrder[6]);
chapterOrder[6].after(chapterOrder[8]);
chapterOrder[8].after(chapterOrder[4]);
chapterOrder[4].after(chapterOrder[5]);
chapterOrder[5].after(chapterOrder[7]);
chapterOrder[7].after(chapterOrder[9]);


chapterOrder[47].after(chapterOrder[55]);
chapterOrder[55].after(chapterOrder[49]);
chapterOrder[49].after(chapterOrder[50]);
chapterOrder[50].after(chapterOrder[48]);
chapterOrder[48].after(chapterOrder[52]);
chapterOrder[52].after(chapterOrder[53]);


const newChapter = document.createElement('li');
newChapter.className = "";
newChapter.innerHTML = "Глава 8: За пределами ES6";

chapterOrder[25].append(newChapter)

