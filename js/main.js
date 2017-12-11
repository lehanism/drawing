//initial canvas setup
const canvas = document.getElementById('drawing');
const ctx = canvas.getContext('2d');

const enterBtn = document.getElementById('enter');

function writeError(message) {
  const el = document.getElementById('errors');
  el.innerHTML = message;
}

function handleInput() {
  const userInput = document.getElementById('input__text').value;
  const enteredCommands = userInput.split(' ');
  const cmdToUse = enteredCommands[0];
  if(commands[cmdToUse]) {
    // execute appropriate function
    commands[cmdToUse].apply(commands, enteredCommands.slice(1));
  } else {
    // if cmd entered is not a function
    writeError('Error! Invalid command entered');
  }
}

const commands = {

  rectangle(x, y, w, h, colour) {
    if (!x || !y || !w || !h || !colour) {
      writeError('Error! Missing parameter(s)');
      return
    }

    ctx.strokeStyle = colour;
    ctx.strokeRect(x, y, w, h);
    writeError('');
  },

  circle(x, y, r, colour) {
    if (!x || !y || !r || !colour) {
      writeError('Error! Missing parameter(s)');
      return
    }
    ctx.strokeStyle = colour;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.stroke();
    writeError('');
  },

  line(x1, y1, x2, y2, colour) {
    if (!x1 || !y1 || !x2 || !y2 || !colour) {
      writeError('Error! Missing parameter(s)');
      return
    }
    ctx.strokeStyle = colour;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    writeError('');

  },

  clear(colour) {
    if (!colour) {
      writeError('Error! Missing parameter(s)');
      return
    }
    ctx.fillStyle = colour;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    writeError('');
  }

}

//enter key triggers enter button click event
document.getElementById('input__text').addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        enterBtn.classList.add('hover');
        enterBtn.click();
        setTimeout(function() {
          enterBtn.classList.remove('hover');
        }, 400);
    }
});

//let enter button click event trigger input handling function
enterBtn.addEventListener("click", handleInput);

//setup for autocomplete object
new autoComplete({
    selector: document.getElementById('input__text'),
    minChars: 1,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = ['clear', 'circle', 'rectangle', 'line'];
        var matches = [];
        for (i=0; i<choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    }
});
