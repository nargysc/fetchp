/*
axios.post('https://dummyjson.com/users',
{
    name:"Terry",
    age:"50",
    gender:"Male"
})
.then((res) => console.log((res))
.catch((err) => console.log(err)))
*/


const url = 'https://dummyjson.com/users';
axios(url).then(response => {
    console.log('response', response.data
    );
});