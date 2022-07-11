// const nameFunction = (names) => {
//   for (let i = 0; i < names.length - 1; i++) {
//     document.querySelector(
//       ".messages"
//     ).innerHTML += `${names[i]} is here <br />`;
//   }
// };

  

const message_array = [
   
  "You are awesome",
  "Nothing is impossible",
  "The bad news is time flies",
  "Life has got all those twists and turns",
  "Keep your face always toward the sunshine, and shadows will fall behind you.",
  "Life has got all those twists and turns. You've got to hold on tight and off you go.",
  "You are never too old to set another goal or to dream a new dream.",
];


const message_generator = () => {
    //The Math.floor() function returns the largest integer less than or equal to a given number.
    let randomMessage = Math.floor(Math.random() * message_array.length);
    return document.querySelector(
              "#messages"
            ).innerHTML = message_array[randomMessage];
}
// message_generator()
console.log(message_generator());




// const nameFunction = (names) => {
//     let result = '';
//     let messageLength = message_array2.length
//     console.log(messageLength[2]);
//     for (let i = 0; i < messageLength; i++) {
//         console.log(messageLength[i]);
//         result += message_array2[i].charAt(Math.floor(Math.random() * messageLength));
//   };
//   return result
// }

// console.log(nameFunction(1));
 

// nameFunction(message_array);
