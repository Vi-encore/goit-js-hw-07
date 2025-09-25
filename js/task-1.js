const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

// Can use here querySelectorAll to select all elements with class 'item'
// That way I would not need Array.from() 

Array.from(categories.children).forEach((el) => {
  console.log(`Category: ${el.children[0].textContent}`);
  console.log(`Elements: ${el.children[1].children.length}`);
});

//Array.from() used here to convert HTMLCollection into operable array
