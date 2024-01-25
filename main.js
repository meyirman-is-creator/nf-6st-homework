// 1. Скрыть элемент по нажатию кнопки
// let button = document.getElementById("btn");
// button.addEventListener('click', function(e){
//     document.getElementById("text").remove();
// });
// 2. Какой обработчик запустится?
// button.addEventListener("click", () => alert("1"));
// button.removeEventListener("click", () => alert("1"));
// button.onclick = () => alert(2);
// ответ: 1 & 2
let list = document.getElementById("list");
let arr = [
    {
        text: 'Домашняя лошадь — животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади, вымершей в дикой природе, за исключением небольшой популяции лошади Пржевальского.',
    },
    {
        text: 'Кошка, или домашняя кошка (лат. Felis silvestris catus), — домашнее животное, одно из наиболее популярных(наряду с собакой) «животных-компаньонов». Являясь одиночным охотником на грызунов и других мелких животных, кошка — социальное животное, использующее для общения широкий диапазон звуковых сигналов.',
    },
    {
        text: 'Домашний осёл (лат. Equus asinus asinus), или ишак, — одомашненный подвид дикого осла (Equus asinus), сыгравший важную историческую роль в развитии хозяйства и культуры человека и по-прежнему широко в хозяйстве многих развивающихся стран.',
    },
]
update();

function update(){
    list.innerHTML="";
    for(let i =0;i<arr.length; i++){
        let li = document.createElement('li');

        let p = document.createElement('p');
        p.textContent = arr[i].text;

        let btn = document.createElement('button');
        btn.textContent = "CLICK";
        btn.addEventListener("click", function(){
            arr = arr.filter(item=> item.text!==arr[i].text);
            update();

        });
        li.appendChild(btn);
        li.appendChild(p);
        list.appendChild(li);
    }
};