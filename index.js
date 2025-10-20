const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');



//route to get a joke on programming
app.get('/jokes/programming', async (req,res) =>{
 try{
    const response = await
axios.get('https://official-joke-api.appspot.com/jokes/programming/random');

    res.json(response.data);
 }catch (error) {
    res.status(500).json({
        error: "Failed to fetch joke"
    })
 }
 

}); 

app.get('/jokes/breadjokes', (req, res) => {
  const breadJokes = [
    "Why did the loaf of bread break up with the butter? It couldn't spread the love.",
    "I loaf you more than words can say.",
    "That was a toastally great joke!",
    "Why did the slice of bread break up with the toaster? It just couldn’t handle the heat.",
      "Why did the loaf go to therapy? It had too many crumbs to deal with.",
      "What did the baguette say to the croissant?Stop buttering me up!"
 ];
  const joke = breadJokes[Math.floor(Math.random() * breadJokes.length)];
  res.json({ joke });
});

//route to get dad jokes
app.get('/jokes/dadjokes', async (req,res) =>{
 try{
    const response = await
 axios.get('https://icanhazdadjoke.com/', {
  headers: { Accept: 'application/json' }
});


    res.json( response.data
    );
 }catch (error) {
    res.status(500).json({
        error: "Failed to fetch joke"
    })
 }
 

}); 

//route to get chucknorris jokes on animal
app.get('/jokes/animal', async (req,res) =>{
 try{
    const response = await
axios.get('https://api.chucknorris.io/jokes/random?category=animal');

   res.json(response.data.value);

 }catch (error) {
    res.status(500).json({
        error: "Failed to fetch joke"
    })
 }
 

}); 

app.listen(port, ()=> console.log(`Server is running on port ${port}`));

