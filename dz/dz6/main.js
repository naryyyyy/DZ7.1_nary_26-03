const card = document.querySelector('.card');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let count = 1;

const getData = async (id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const todo = await response.json();
    card.innerHTML = 
      `<h2>${todo.title}</h2>
      <span>${todo.id}</span>
      <h3>${todo.completed}</h3>`
    ;
  } catch (error) {
    console.log(error);
  }
};

btnNext.onclick = async () => {
  count++;
  await getData(count);
};

btnPrev.onclick = async () => {
  if (count > 1) {
    count--;
    await getData(count);
  }
};

 getData(count);
 //2
 const obj=async()=>{
    try{
        const resp=await fetch('https://jsonplaceholder.typicode.com/posts')
        const data=await resp.json()
        console.log(data);
    }catch (error) {console.log('error')}
 }
obj()