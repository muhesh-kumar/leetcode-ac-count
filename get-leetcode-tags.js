const className = "group flex items-center m-[10px]"
const tags = Array.from(document.getElementsByClassName(className))

let allTags = ""
tags.forEach((tag) => {
  allTags += tag.childNodes[0].childNodes[0].innerText + "\n";
})

console.log(allTags)

