//---------------------get element by id----------------------
// const wrapper = document.getElementById("wrapper");
// console.log(wrapper);


//--------------------get element by class name------------------
// const bookTitles = document.getElementsByClassName("name");
// console.log(bookTitles);


// console.log(Array.isArray(bookTitles));

// console.log(Array.isArray(Array.from(bookTitles)));

// const arrayResult = Array.from(bookTitles);

// arrayResult.forEach((element) => {
//   console.log(element.textContent);
// })


const lis = document.getElementsByTagName('li');
console.log(lis);

const result = Array.from(lis);
console.log(result);


const pageBanner = document.querySelector("#page-banner");
console.log(pageBanner);

// const title = document.querySelectorAll(".title");
//console.log(title);


//---------------------To check Parent Element-----------------
// const title = document.querySelector('.title');
// console.log(title.parentElement);
// console.log(title.parentNode);


// ------------------To check next sibiling---------------------
// const pageBanners = document.querySelector(".title");
// console.log(pageBanners.nextElementSibling);


// --------------------- To count child element-----------------------
const pageBanners = document.querySelector("#page-banner");
console.log(pageBanners.childElementCount);


//---------------------- How to change the text content--------------------
const bookTitle = document.querySelectorAll(".name");
bookTitle.forEach(element =>{
  console.log(element.textContent);
  element.textContent +="  (test)";
})


//----------------------- How to pin point ul from book-list----------------- 
const booklist = document.querySelector('#book-list ul');

booklist.addEventListener('click', (event)=>{
    const deleteBtn = event.target.className;
    if(deleteBtn == "delete"){
      const liTag = event.target.parentNode;// target parent element of the delete button 
      booklist.removeChild(liTag);
    }
})

// -----------------------how to add to the list----------------------
  const addBook = document.querySelector('#add-book');
  const form = addBook.querySelector('input');
  const bookList = document.querySelector("#book-list ul");

  addBook.addEventListener("click", (event) => {
    event.preventDefault();
    const newBook = form.value;
    if(newBook !== ""){
      const addNewBook = document.createElement('li');
      const newBookSpan = document.createElement('span');
      newBookSpan.classList.add('name');
      newBookSpan.textContent = newBook;
      const deleteSpan = document.createElement('span');
      deleteSpan.classList.add('delete');
      deleteSpan.textContent = 'delete';
      addNewBook.appendChild(newBookSpan);
      addNewBook.appendChild(deleteSpan);
      bookList.appendChild(addNewBook);
      form.value ='';
    }
    else
    alert
  })

  //----------------------- how to search ------------------------
    // const search = document.getElementById("search-books");
    // const searchInput = search.querySelector('input');

    // const listOfBooks = document.getElementById('book-list');
    // const numberOfBook = listOfBooks.querySelector('ul');

    // searchInput.addEventListener('input', ()=> {
    // const searchBooks =searchInput.value.toLowerCase();

    // const listItems = numberOfBook.children;

    // for (let index = 0; index < listItems.length; index++){
    //   const listItem = listItems[index];
    //   const bookName =  listItem.querySelector('.name').textContent.toLowerCase();
    //     if(bookName.includes(searchBooks)){
    //       listItem.computedStyleMap.display = bookName;
    //     }
        
    // }
    // })



    document.getElementById('search-input').addEventListener('keyup', function (e) {
      const searchBook = e.target.value.toLowerCase();
      const books = document.querySelectorAll('#book-list ul li');
    
      books.forEach((book) => {
        const bookName = book.firstElementChild.textContent.toLowerCase();
        if (bookName.includes(searchBook)) {
          book.style.display = 'block';
        } else {
          book.style.display = 'none';
  }
  });
  });



  