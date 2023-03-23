const userinput = document.querySelector('#userinput');
const enter = document.querySelector('#enter'); // onClick event
console.log(enter);
const list = document.querySelector('ul');

// Was müssen wir tun?
//


enter.addEventListener('click', () => {
    // console.log("Hallo");
    let li = document.createElement('li');
    list.appendChild(li);
    // console.log(li);
    li.textContent = userinput.value;
    userinput.value = "";
})



