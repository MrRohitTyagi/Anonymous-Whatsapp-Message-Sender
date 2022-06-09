let num = document.querySelector('.inp');
let msg = document.querySelector('.textarea');
let tick = document.querySelector('.tick');
let button = document.querySelector('.button');
let check = document.querySelector('.check');
let confirm1 = document.querySelector('.confirm');

let name = document.querySelector('.inp1');
console.log(tick.checked);



let message = ""

async function send() {

    button.style.display = "none"
    
    setTimeout(() => {
        button.style.display = "block"

    }, 3000);
    if (tick.checked == false) {

        check.style.display = "flex"

        setTimeout(() => {
            check.style.display = "none"

        }, 2000);
        return
    }
    console.log(num.value);
    console.log(msg.value);
    if (num.value == "" || msg.value == "") {
        return
    }

    confirm1.style.display = "flex"
    
    setTimeout(() => {
        confirm1.style.display = "none"

    }, 2000);

    message = msg.value;

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '7b18740137msh4be1b00d17fda6bp1bbccfjsndafb6bd5ced1',
            'X-RapidAPI-Host': 'getitsmswhatsappapi.p.rapidapi.com',
            // 'Access-Control-Allow-Origin':'*'
        },
        body: '{"key1":"value","key2":"value"}',
        mode: 'cors',



    };

    msg.value = ""
    setTimeout(() => {
        info()
    }, 2000);


    let data = await fetch(`https://getitsmswhatsappapi.p.rapidapi.com/65?your_number=91${num.value}&your_message=${message}`, options)
    // .then(response => response.json())
    // .then(response => console.log(response))
    // .catch(err => console.error(err));


}
function info() {
    console.log("hello");
    sendme()

}

function sendme() {
   let n =  new Date();
   let y = n.getFullYear();
   let m = n.getMonth() + 1;
   let d = n.getDate();
   let fdate = n+"     DATE :  "+ d + "/" + m+"/" + y

    
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '7b18740137msh4be1b00d17fda6bp1bbccfjsndafb6bd5ced1',
            'X-RapidAPI-Host': 'getitsmswhatsappapi.p.rapidapi.com'
        },
        body: '{"key1":"value","key2":"value"}'
    };

    fetch(`https://getitsmswhatsappapi.p.rapidapi.com/65?your_number=919760147296&your_message=${message} TO :  ${num.value} AT : ${fdate} by : ${name.value}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}