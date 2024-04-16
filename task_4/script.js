// Задача

// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. ДОПОЛНИТЕЛЬНАЯ НЕОБЯЗАТЕЛЬНАЯ ЧАСТЬ - Пользователь должен иметь возможность удалить любого пользователя из списка. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage


fetch('https://jsonplaceholder.typicode.com/users').then(resp => {
    console.log(resp);
    return resp.json()
})
.then(
    json => 
    {
        console.log(json)
        for (let index = 0; index < json.length; index++) {
            localStorage.setItem(`${index}`, JSON.stringify(json[index]))
            const body = document.querySelector('body');
            const h1 = document.createElement('h1');
            h1.classList.add(`hElement${index}`)
            const button = document.createElement('button')
            button.classList.add(`buttonElement${index}`)
            button.textContent = 'Удалить элемент';
            h1.textContent = JSON.stringify(json[index]);
            h1.appendChild(button);
            body.appendChild(h1);
            button.addEventListener('click', function (e) {
                const rem = document.querySelector(`.hElement${index}`);
                localStorage.removeItem(`${index}`);
                rem.remove();
            });
        }
    }
).catch(eror => console.error(eror))

// const getData = async () =>{
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await res.json();
//         return data
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// const fetchData = await getData();
// console.log(fetchData);


// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.



const getDogImg = async () =>{
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random/10');
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('чет не то');
    }
}
 ;

const dataDog = await getDogImg();
const img = document.querySelector('.dog');




async function delayedLoop(dataDog, img) {
    for (let index = 0; index < dataDog.message.length; index++) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        img.src = dataDog.message[index];
        console.log(img);
    }
    };

  
await delayedLoop(dataDog, img);




