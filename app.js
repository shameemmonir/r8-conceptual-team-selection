// const price = document.getElementById('budget').innerText;
// const convertPrice = parseInt(price);

// const cartCount = document.getElementById('cart').innerText;
// const convertCartCount = parseInt(cartCount);

// const leftCount = document.getElementById('left').innerText;
// const convertLeftCount = parseInt(leftCount);

const allBtn = document.getElementsByClassName('add-btn');
// console.log(allBtn);

for(const btn of allBtn){
    // console.log(btn);
    btn.addEventListener('click', function (event){
        const name = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;

        const selectedContainer = document.getElementById('selected-players-container');

        const div = document.createElement('div');
        div.classList.add('selected-players');

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div);

        // console.log(event.target.parentNode.childNodes[5].childNodes[1].innerText);
        // console.log(event.target.parentNode.childNodes[3].childNodes[1].innerText);
    })
}

function getConvertedValue (id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}

// const result = getConvertedValue('budget');
// console.log(result);