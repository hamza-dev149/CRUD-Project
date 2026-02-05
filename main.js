let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

// function get total 

function getTotal()
{
    if(price.value != '')
    {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = "rgb(0, 88, 0)"
    }
    else
    {
        total.innerHTML = "";
        total.style.background = '#a00d02'
    }
}

if(localStorage.product != '')
{
    dataProduct = JSON.parse(localStorage.product);
}
else
{
    dataProduct = [];
}

submit.onclick = function()
{
    let newProduct = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        category: category.value,
    }
    dataProduct.push(newProduct);
    localStorage.setItem('product', JSON.stringify(dataProduct));
}