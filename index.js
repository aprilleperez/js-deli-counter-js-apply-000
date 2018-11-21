var katzDeli = [];

// function takeANumber(katzDeli, name) {
//   katzDeli.push(`${name}`)
//   return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
// }
var  = ;

function takeANumber(katzDeli) {
  let i = 0;
  i++;
  return (`You are number ${i}.`)
}

// takeANumber(array) -> 1
// takeANumber(array) -> 2
// nowServing(array) -> 1
// nowServing(array)  -> 2
// takeANumber(array) -> 3

function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }

  if (katzDeli.length === 0) {
    return ("There is nobody waiting to be served!");
  } else {
    return (`Currently serving ${katzDeli.shift()}.`);
  }
}

var line = [];
function currentLine(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    line.push(` `+[i+1]+`. ` + katzDeli[i])
    i++
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else {
    return (`The line is currently:` + line);
  }
}
