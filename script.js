const files = [
  {
    name: "Giroflex Vermelho 1",
    path: "Giroflex Vermelho 1",
    file: "Giroflex Vermelho 1.zip",
    image: "giroflex.png"
  },
  {
    name: "Giroflex Vermelho 2",
    path: "Giroflex Vermelho 2",
    file: "Giroflex Vermelho 2.zip",
    image: "giroflex.png"
  },
  {
    name: "Giroflex Vermelho 3",
    path: "Giroflex Vermelho 3",
    file: "Giroflex Vermelho 3.zip",
    image: "giroflex.png"
  },
  //-----------------------//
  {
    name: "giroflex vermelho reto 1",
    path: "giroflex vermelho reto 1",
    file: "giroflex vermelho reto 1.zip",
    image: "giroflex.png"
  },
  {
    name: "giroflex vermelho curvado 2",
    path: "giroflex vermelho curvado 2",
    file: "giroflex vermelho curvado 2.zip",
    image: "giroflex.png"
  },
  {
    name: "giroflex vermelho azul reto 1",
    path: "giroflex vermelho azul reto 1",
    file: "giroflex vermelho azul reto 1.zip",
    image: "giroflex.png"
  },
  {
    name: "giroflex branco curvado 1",
    path: "giroflex branco curvado 1",
    file: "giroflex branco curvado 1.zip",
    image: "giroflex.png"
  },
  {
    name: "giroflex vermelho curvado 3",
    path: "giroflex vermelho curvado 3",
    file: "giroflex vermelho curvado 3.zip",
    image: "giroflex.png"
  },
  {
    name: "giroflex vermelho curvado 1",
    path: "giroflex vermelho curvado 1",
    file: "giroflex vermelho curvado 1.zip",
    image: "giroflex.png"
  },
  {
    name: "led 1 carro",
    path: "led 1 carro",
    file: "led 1 carro.zip",
    image: "led.png"
  },
  {
    name: "leds bau moto",
    path: "leds bau moto",
    file: "leds bau moto.zip",
    image: "led.png"
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