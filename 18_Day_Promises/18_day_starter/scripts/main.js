

const square = async function (n) {
  return n * n
}

const ab= async function()
{
const value = await square(2)
console.log(value)
}
//ab()


const url = 'https://restcountries.com/v2/all'

//this para gives one output
/*
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

*/

/*
The .json() method is typically used with the fetch() function, which is used to make requests 
to a server and receive data in response. 

When fetch() receives a response with a Content-Type header of "application/json", it 
automatically parses the response body as a JSON object and 
returns a JavaScript object.

Here's an example of how you might use the .json() method with fetch():

fetch('https://example.com/data.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

In this example, the fetch() function is used to make a request to a server to 
retrieve a JSON object located at https://example.com/data.json. The .then() method 
is used to handle the response and parse the response body as a JSON object using the
.json() method. The resulting JavaScript object is then logged to the console using 
console.log(). If an error occurs during the request, it is caught and logged to the 
console using console.error().

*/

//same thing as before using async and await

const fetchData = async () => {
  try {
    const response = await fetch(url)
    console.log(response)

    //console.log(response.json())

    const vals = await response.json()
    console.log(vals)

  } 
   catch (err) 
{ console.error(err)
  }
}
fetchData()





