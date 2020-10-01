// Create <main> landmark element
const main = document.createElement("main");
var main_attr = document.createAttribute("class");
main_attr.value = "page-wrapper";
main.setAttributeNode(main_attr);

// Create <section> landmark element
const section = document.createElement("section");
var section_attr = document.createAttribute("class");
section_attr.value = "page-content";
section.setAttributeNode(section_attr);

// Create <h1> element
const h1 = document.createElement("h1");
var h1_att = document.createAttribute("class");
h1_att.value = "section-title";
h1.setAttributeNode(h1_att);

// Create <p> element
const p = document.createElement("p");
var p_att = document.createAttribute("class");
p_att.value = "section-text";
p.setAttributeNode(p_att);

// Give the <h1> and <p> element some inner text!
h1.innerText = "Hello world!";
p.innerText = "lorem ipsum dorem dolor.";

// Create an <img> for cat-coding.jpg
const img = document.createElement("img");
var img_attr = document.createAttribute("class");
var img_src = document.createAttribute("src");
var img_alt = document.createAttribute("alt");
img_attr.value = "photo";
img_src.value = "cat-coding.jpg";
img_alt.value = "Cat, presumably coding a very complex system on mini macbook pro."
img.setAttributeNode(img_attr);
img.setAttributeNode(img_src);
img.setAttributeNode(img_alt);

// Create <p> for image description
const p2 = document.createElement("p");
var p2_att = document.createAttribute("class");
p2_att.value = "caption";
p2.innerHTML = `${img_alt.value} This photo was found on bukk.it`
p2.setAttributeNode(p2_att);

// Bind the virtually created HTML elements to the DOM Tree.
section.appendChild(h1);
section.appendChild(p);
section.appendChild(img);
section.appendChild(p2);
main.appendChild(section);

// Append the first <main> element to the documents body.
document.body.appendChild(main);