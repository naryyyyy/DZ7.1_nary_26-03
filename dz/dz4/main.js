const btn=document.querySelector('.btn')
btn.addEventListener('click', async()=>{
    try {
        const response = await fetch('data.json')
        const data = await response.json()
        data.students.map((data)=>{
            document.querySelector('.name').innerHTML=data.name
            document.querySelector('.age').innerHTML=data.age
        })
    }catch (error) {console.log('error')}

})
/////'example.json
const obj= async()=>{
    try{
        const resp=await fetch('example.json')
        const data=await resp.json()
        console.log(data);
    }catch (error) {console.log('error')}
}
obj()
