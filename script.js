//your code here!
let list1 = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9","Item 10"];

// const list = document.querySelector("#infi-list"); // or use .list if it has a class

// // Add 10 list items by default
// for (let i = 1; i <= 10; i++) {
//   const li = document.createElement("li");
//   li.textContent = `Item ${i}`;
//   list.appendChild(li);
// }
const list = document.querySelector("ol"); // select your list
let itemCount = 0; // keep track of how many items are added

// function to add items
function addItems(count = 10) {
  for (let i = 1; i <= count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// add first 10 items by default
addItems();

// add more items when scrolling to bottom
document.querySelector("#infi-list").addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    addItems(); // add 10 more
  }
});
