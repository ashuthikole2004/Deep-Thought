let var1 = document.querySelector(".slider");
let var2 = document.querySelector(".slider-open");
function openNav() {
  var1.classList.add("hide");
  var2.classList.remove("hide");
}

function closeNav() {
  var2.classList.add("hide");
  var1.classList.remove("hide");
}

let data;
let nav_content = document.querySelector(".nav-content");
let nav_content_part1 = document.querySelector(".nav-content-part1");
let nav_content_part2 = document.querySelector(".nav-content-part2");
const url = "http://localhost:8080/items";
async function fetchAssets() {
  let result = await fetch(url);
  console.log(result);
  data = await result.json();
  console.log(data);

  let content = data.items[0].tasks;
  console.log(data.items[0].tasks[0]);
  let block_text = document.querySelector(".block-text");

  let explore = document.querySelector(".explore");
  content.forEach((element) => {
    let list_item1 = document.createElement("li");
    list_item1.innerHTML = `<b>${element.task_title}</b>`;
    nav_content.appendChild(list_item1);
    let assetArray = element.assets;

    assetArray.forEach((item) => {
      let list_item = document.createElement("li");
      list_item.innerHTML = `${item.asset_title}`;
      nav_content.appendChild(list_item);
    });

    let title = document.createElement("p");
    let description = document.createElement("p");
    title.innerHTML = `<b>${element.task_title}</b>`;
    description.innerHTML = `${element.task_description}`;
    explore.appendChild(title);
    explore.appendChild(description);

    const videoSrc = data.items[0].tasks[0].assets[0].asset_content;

    const block_video = document.querySelector(".block-video");

    if (block_video) {
      block_video.src = videoSrc;
      block_video.load();  
      block_video.play();
    }
  });
}
fetchAssets();
