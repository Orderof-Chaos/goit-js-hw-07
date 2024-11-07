const listItem = document.querySelectorAll(".item");
function logContent(item, i) {
    console.log(`category: ${item.children[0].textContent}`);
    console.log(`Elements: ${item.children[1].childElementCount}`);}
function listItemLog() {
    console.log(`number of categories: ${listItem.length}`);
    listItem.forEach(logContent)
};
listItemLog()