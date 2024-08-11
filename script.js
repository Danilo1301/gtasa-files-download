const files = [
  {
    name: "Lightbar 1 - white",
    path: "lightbars/Lightbar 1 - white",
    file: "Lightbar 1 - white.zip",
    image: "lightbar.png"
  },
  {
    name: "Lightbar 2 - red round",
    path: "lightbars/Lightbar 2 - red round",
    file: "Lightbar 2 - red round.zip",
    image: "lightbar.png"
  },
  {
    name: "Lightbar 3 - red white round",
    path: "lightbars/Lightbar 3 - red white round",
    file: "Lightbar 3 - red white round.zip",
    image: "lightbar.png"
  },
  {
    name: "Lightbar 4 - red white round",
    path: "lightbars/Lightbar 4 - red white round",
    file: "Lightbar 4 - red white round.zip",
    image: "lightbar.png"
  },
  {
    name: "Lightbar 5 - red blue",
    path: "lightbars/Lightbar 5 - red blue",
    file: "Lightbar 5 - red blue.zip",
    image: "lightbar.png"
  },
  {
    name: "Lightbar 6 - red",
    path: "lightbars/Lightbar 6 - red",
    file: "Lightbar 6 - red.zip",
    image: "lightbar.png"
  },
  {
    name: "Lightbar 7 - red",
    path: "lightbars/Lightbar 7 - red",
    file: "Lightbar 7 - red.zip",
    image: "lightbar.png"
  },
  {
    name: "led car 1",
    path: "leds/led car 1",
    file: "led car 1.zip",
    image: "led.png"
  },
  {
    name: "led car 2",
    path: "leds/led car 2",
    file: "led car 2.zip",
    image: "led.png"
  },
  {
    name: "led car 3",
    path: "leds/led car 3",
    file: "led car 3.zip",
    image: "led.png"
  },
  {
    name: "led door",
    path: "leds/led door",
    file: "led door.zip",
    image: "led.png"
  },
  {
    name: "led bike 1",
    path: "leds/led bike 1",
    file: "led bike 1.zip",
    image: "led.png"
  },
  {
    name: "led bike 2",
    path: "leds/led bike 2",
    file: "led bike 2.zip",
    image: "led.png"
  },
  {
    name: "chassis_vlo spin pmesp",
    path: "chassis_vlo/chassis_vlo spin pmesp",
    file: "chassis_vlo spin pmesp.zip",
    image: "chassis_vlo.png"
  },
  
];

function main()
{
  console.log(files);

  const template = $("#file-template");
  console.log(template);
  
  for(const file of files)
  {
    const fileForm = template.clone();
    const fileSrc = `files/${file.path}/${file.file}`;
    fileForm[0].style.display = "block"
    fileForm[0].action = fileSrc;
    
    const titleEl = $(fileForm).find(".title");
    titleEl.text(file.name)

    const imageEl = $(fileForm).find(".image");
    const imageSrc = `files/${file.path}/${file.image}`;
    imageEl[0].src = imageSrc;
  
    $("#files").append(fileForm);
  }
}

$(document).ready(() => main());