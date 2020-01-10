var i = 0;
var txt = "Hi, I'm Shaelyn! \n \n I'm a user experience researcher and designer passionate about uncovering users' needs and creating joyful experiences. \n \nWelcome to my digital home :)";

 /* The text */
var speed = 43; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("greeting").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
// function setupTypewriter(t) {
//     var HTML = t.innerHTML;
//
//     t.innerHTML = "";
//
//     var cursorPosition = 0,
//         tag = "",
//         writingTag = false,
//         tagOpen = false,
//         typeSpeed = 1,
//       tempTypeSpeed = 0;
//
//     var type = function() {
//
//         if (writingTag === true) {
//             tag += HTML[cursorPosition];
//         }
//
//         if (HTML[cursorPosition] === "<") {
//             tempTypeSpeed = 0;
//             if (tagOpen) {
//                 tagOpen = false;
//                 writingTag = true;
//             } else {
//                 tag = "";
//                 tagOpen = true;
//                 writingTag = true;
//                 tag += HTML[cursorPosition];
//             }
//         }
//         if (!writingTag && tagOpen) {
//             tag.innerHTML += HTML[cursorPosition];
//         }
//         if (!writingTag && !tagOpen) {
//             if (HTML[cursorPosition] === " ") {
//                 tempTypeSpeed = 0;
//             }
//             else {
//                 tempTypeSpeed = (Math.random() * typeSpeed) + 38;
//             }
//             t.innerHTML += HTML[cursorPosition];
//         }
//         if (writingTag === true && HTML[cursorPosition] === ">") {
//             tempTypeSpeed = (Math.random() * typeSpeed) + 38;
//             writingTag = false;
//             if (tagOpen) {
//                 var newSpan = document.createElement("span");
//                 t.appendChild(newSpan);
//                 newSpan.innerHTML = tag;
//                 tag = newSpan.firstChild;
//             }
//         }
//
//         cursorPosition += 1;
//         if (cursorPosition < HTML.length - 1) {
//             setTimeout(type, tempTypeSpeed);
//         }
//
//     };
//
//     return {
//         type: type
//     };
// }
//
// var typer = document.getElementById('typewriter');
//
// typewriter = setupTypewriter(typewriter);
//
// typewriter.type();
