// Create <main> landmark element
const main = document.createElement("main");
main.setAttribute("class", "page-wrapper");

// Create <section> landmark element
const section = document.createElement("section");
section.setAttribute("class", "page-content");

// Create <h1> element
const h1 = document.createElement("h1");
h1.setAttribute("class", "section-title"); 
h1.innerText = "Hello world!";

// Create <p> element
const p = document.createElement("p");
p.setAttribute("class", "section-text");
p.innerText = "lorem ipsum dorem dolor.";

// Create an <img> for cat-coding.jpg
const img = document.createElement("img");
img.setAttribute("class", "photo");
img.setAttribute("src", "cat-coding.jpg");
img.setAttribute("alt", "Cat, presumably coding a very complex system.");
img.setAttribute("loading", "lazy");

// Create <p> for image description
const p2 = document.createElement("p");
p2.setAttribute("class", "caption");
p2.innerHTML = `${img.alt}. This photo was found on bukk.it`;

// Bind the virtually created HTML elements to the DOM Tree.
section.appendChild(h1);
section.appendChild(p);
section.appendChild(img);
section.appendChild(p2);
main.appendChild(section);

// Append the first <main> element to the documents body.
document.body.appendChild(main);