############
READ ME
############

Welcome to Drawing.

Open drawing.html in your web browser to get started.

With this app you can enter simple commands to draw to a canvas.

I decided to go with a 'command line' look (black and green!) because of text
input based feel to the task. I'm now inspired to do something like a text
adventure game in this style.

As well as general design, I added some nice transition to the button and I
made the 'enter' key on the keyboard trigger the enter button on the UI.
Complete with hover state turning on and off on key press!

I did not include the 'fill' command. I ended up not having time to implement this.

Error handling works okay. There are cases where nothing happens, but there
should not be any cases where things actually break. If I had more time I
would extend the error handling to break down the parameters a lot more. I could
check each parameter specifically and output different messages accordingly.
I could check for numbers, even valid colour names etc...

I have used a library (js and a bit of css) to handle the autocomplete feature.
I'd be very interested in trying to develop this myself in future however, I did
not have time to implement a nice version of it. I'm quite happy with how it
works, however it would be much better if it completed into the actual input
box rather than the user have to select from the drop down.

Thank you for listening!
