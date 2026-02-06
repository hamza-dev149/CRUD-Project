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
let dataProduct;
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
    clearInputs();
    showData();
}

function clearInputs()
{
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    count.value = '';
    category.value = '';
}

function showData()
{
    table = '';
    for(let i = 0 ;i < dataProduct.length; i++)
    {
        table += `
        <tr>
            <td>${i}</td>
            <td>${dataProduct[i].title}</td>
            <td>${dataProduct[i].price}</td>
            <td>${dataProduct[i].taxes}</td>
            <td>${dataProduct[i].ads}</td>
            <td>${dataProduct[i].discount}</td>
            <td>${dataProduct[i].total}</td>
            <td>${dataProduct[i].category}</td>
            <td><button class="update">Update</button></td>
            <td><button onclick = "deleteData(${i})" class="delete">Delete</button></td>
        </tr>
        
        `
    }


    document.getElementById('tbody').innerHTML = table;
    let btnDlelte = document.getElementById('deleteAll');
    if(dataProduct.length > 0)
    {
        btnDlelte.innerHTML = `
        
        <button onclick = "deleteAll()">Delete All</button>
        
        `
    }
    else
    {
        btnDlelte.innerHTML = '';
    }
}

showData();

function deleteData(i)
{
    dataProduct.splice(i,1);
    localStorage.product = JSON.stringify(dataProduct);
    showData();
}

function deleteAll()
{
    localStorage.clear();

}