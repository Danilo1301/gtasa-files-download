console.log("script.js");

const allItems = {};

async function main()
{
  var items = await loadItemsTxt();

  //console.log(items);

  for(const itemId of items)
  {
    //console.log(itemId);

    var template = await makeTemplate(itemId);
  }
}

async function loadItemsTxt() {
  try {
    const response = await fetch('items/items.txt');
    if (!response.ok) throw new Error("Erro ao carregar o arquivo");

    const text = await response.text();
    const lines = text.split("\n");

    const items = lines.map(line => line.replaceAll("\r", ""));

    //console.log(items);
    return items;

  } catch (err) {
    alert(err);
    return []; // retorna array vazio em caso de erro
  }
}

async function makeTemplate(id)
{
  const data = await getData(id);
  const title = getDataString(data, "title", id);
  const size = getDataString(data, "size", "");
  const adapted = getDataBool(data, "adapted", true);
  let description = await getDescription(id);

  console.log("descipt", description);

  description += `<div>${adapted ? "Adapted" : "<b>Not adapted</b>"}</div>`

  if(size.length > 0)
  {
    description += `<div>Size: ${size}</div>`;
  }

  const template = $("#file-template");
  const clone = template.clone();
  clone[0].style.display = "block"
  $("#files").append(clone);

  //

  if(!window["clone"]) window["clone"] = clone;

  clone.find("img")[0].src = `items/${id}/preview.png`;
  clone.find(".card-title").text(title);
  clone.find(".card-text").html(description);
  clone.attr("action", `/items/${id}/download.zip`);

  console.log(clone);

  //

  return clone;
}

function getDataString(data, key, defaultValue)
{
  if(!data[key]) return defaultValue;
  return data[key];
}

function getDataBool(data, key, defaultValue)
{
  if(!data[key]) return defaultValue;
  return data[key];
}

async function getData(id)
{
  var data = {};

  try {
    const response = await fetch('items/' + id + '/data.ini');
    if (!response.ok) throw new Error("Erro ao carregar o arquivo");

    const text = await response.text();

    const lines = text.split("\n");

    lines.forEach(line => {
      const cleanLine = line.trim(); // remove \r, \n e espaços
      let [key, value] = cleanLine.split(" = ");

      if(value.includes("false")) value = false;
      else if(value.includes("true")) value = true;

      data[key] = value;
    });
    
    return data;

  } catch (err) {
    console.error(err);
    return data; // retorna array vazio em caso de erro
  }
}

async function getDescription(id)
{
  var description = "";

  try {
    const response = await fetch('items/' + id + '/description.txt');
    if (!response.ok) throw new Error("Erro ao carregar o arquivo");

    const text = await response.text();
    console.log(text);

    description = parseTxtToHtml(text);

    console.log(description);

    return description;

  } catch (err) {
    //console.error(err);
    return description; // retorna array vazio em caso de erro
  }
}

main();

function parseTxtToHtml(txt) {
  const lines = txt.split("\n");
  let html = "";

  lines.forEach(line => {
    const cleanLine = line.trim();

    html += `<div>${cleanLine}</div>`;

    // if (!cleanLine) return;

    // const [key, value] = cleanLine.split(" = ");
    // if (key && value) {
    //   const formattedValue = value.replaceAll("\\n", "<br>");
    //   html += `<b>${key}:</b> ${formattedValue}<br>`;
    // }
  });

  return html;
}