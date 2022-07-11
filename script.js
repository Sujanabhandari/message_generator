const message_array = [
  { author: "Sinclair Lewi", message: "The author says one character's definition of a classic is any book he'd heard of before he was thirty." },
  { author: "Jack Kerouac", message: "The best teacher is experienced and not through someone's distorted point of view" },
  { author: "Jack Kerouac", message: "One day I will find the right words, and they all will be simple."},
  { author: "Jane Austen", message: "Laugh as much as you choose, but you will not laugh me out of my opinion.",},
  { author: "Alfred Lord Tennyson", message: "Made weak by time and fate, but strong in will To strive, to seek, to find, and not to yield."},
  { author: "J.K. Rowling", message: "It matters not what someone is born, but what they grow to be."},
  { author: "William Shakespeare", message:"I will wear him; In my heart’s core, ay, in my heart of heart."},
  
];

const message_generator = () => {
  let randomMessage = Math.floor(Math.random() * message_array.length);
  return (document.querySelector("#messages").innerHTML =
    message_array[randomMessage].author +
    " : " +
    message_array[randomMessage].message);
};
// message_generator()
console.log(message_generator);