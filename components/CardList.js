import Card from "./Card.js"
const cardListItem = (x) => {
  return `
    <li>
    ${Card(x)}
    </li>
    `;
};
const CardList =(data)=> {
    return `
    <link href="components/cardlist.css" rel="stylesheet" />
<div class="container">
<ul class="cardlist">
${data.map((x) => cardListItem(x)).join("")}
</ul>
</div>
    `;
}
export default CardList;