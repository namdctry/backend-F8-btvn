var content =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore suscipit veniam temporibus reiciendis fuga quisquam odit magnam placeat, adipisci dolor ex neque quod pariatur quis totam culpa esse accusantium cum assumenda consequuntur consectetur. Velit esse blanditiis nemo expedita, odit repellendus, pariatur doloribus sit ducimus quia autem voluptatum. Minima saepe atque dolore, doloribus assumenda harum voluptates consectetur magni molestias quo modi, eaque nam, impedit reprehenderit. Necessitatibus, quae iure minima earum ullam dolor quasi soluta aut ab, rem consequatur, mollitia deserunt. Modi incidunt molestias unde ducimus iusto doloremque, cumque ipsum, neque reiciendis quisquam repellat ab a, iure libero accusantium et? Suscipit, ut.";

content = content.replaceAll(" ", "</span> <span>");

content = `<span>${content}</span>`;

console.log(content);

var index = 0;
setInterval(function () {
  var char = content.charAt(index);
  var charNext = content.charAt(index + 1);

  if (char === ">" && charNext !== " ") {
    var html =
      content.slice(0, index) + ` class="highlight"` + content.slice(index);
    document.body.innerHTML = html;
  }

  index++;

  if (index === content.length) {
    index = 0;
  }
}, 1000);

document.write(content);
