'use strict'

import { products } from "./dataProduct.js";

////////////////////////////////////filter product/////////////////////////////////
let row_btn = document.querySelector('.courses-top-bar__row-btn')
let column_btn = document.querySelector('.courses-top-bar__column-btn')
let courses_input = document.querySelector('.courses-top-bar__input')
let search_btn = document.querySelector('.courses-top-bar__search-icon')
let productRowContainer = document.querySelector('.product-list__row')
let productColumnContainer = document.querySelector('.product-list__column')
let product_row_containe = document.querySelector('.product-list__row-containe')
let defaultSelect = document.querySelector('.defaultSelect')
let popSelect = document.querySelector('.popSelect')
let rateSelect = document.querySelector('.rateSelect')
let inexSelect = document.querySelector('.inexSelect')
let exSelect = document.querySelector('.exSelect')



row_btn.addEventListener('click', () => {
    productColumnContainer.classList.remove('active')
    product_row_containe.classList.add('active')
    row_btn.classList.add('active')
    column_btn.classList.remove('active')
})

column_btn.addEventListener('click', () => {
    product_row_containe.classList.remove('active')
    productColumnContainer.classList.add('active')
    column_btn.classList.add('active')
    row_btn.classList.remove('active')
})

products.forEach(product => {
    productRowContainer.insertAdjacentHTML('beforeend', `
        <li class="product-item" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-in-sine" data-aos-duration="800">
            <a href="">
                <img src="${product.src}" alt="" class="product-item__img">
                <p class="product-item__genre">${product.type}</p>
                <p class="product-item__name">${product.name}</p>
                <div class="product-item__stars">
                    <i class='bx bxs-star product-item__star'></i>
                    <i class='bx bxs-star product-item__star'></i>
                    <i class='bx bxs-star product-item__star'></i>
                    <i class='bx bxs-star product-item__star'></i>
                    <i class='bx bxs-star product-item__star'></i>
                </div>
                <p class="product-item__price">${Number(product.price).toLocaleString()}<span class="product-item__price__name"> تومان</span>
                </p>
                <i class='bx bx-heart product-item__like like'></i>
            </a>
        </li>
        `)
})


products.forEach(product => {
    productColumnContainer.insertAdjacentHTML('beforeend', `
        <li class="product-item__column" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
        data-aos-easing="ease-in-sine" data-aos-duration="800">
        <div class="product-item__column-right">
            <img src="${product.src}" alt="" class="item-column__img">
        </div>
        <div class="product-item__column-left">
            <p class="item-column__type">${product.type}</p>
            <p class="item-column__name">${product.name}</p>
            <p class="item-column__desc">${product.desc}</p>
            <div class="item-column__bottom">
                <div class="item-column__bottom-right">
                    <div class="item-column__bottom-stars">
                        <i class='bx bxs-star item-column__bottom-star'></i>
                        <i class='bx bxs-star item-column__bottom-star'></i>
                        <i class='bx bxs-star item-column__bottom-star'></i>
                        <i class='bx bxs-star item-column__bottom-star'></i>
                        <i class='bx bxs-star item-column__bottom-star'></i>
                    </div>
                    <p class="item-column__bottom-price">${Number(product.price).toLocaleString()}<span class="product-item__price__name">
                            تومان</span>
                    </p>
                </div>
                <div class="item-column__bottom-left">
                    <i class='bx bx-heart item-column__bottom-like'></i>
                </div>
            </div>
        </div>
    </li>
        `)
})


search_btn.addEventListener('click', () => {
    let userSearchRow = products.filter(product => product.name.startsWith(courses_input.value))
        .map(product =>
            `<li class="product-item" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
                data-aos-easing="ease-in-sine" data-aos-duration="1000">
                <a href="">
                <img src="${product.src}" alt="" class="product-item__img">
                <p class="product-item__genre">${product.type}</p>
                <p class="product-item__name">${product.name}</p>
                <div class="product-item__stars">
                 <i class='bx bxs-star product-item__star'></i>
                 <i class='bx bxs-star product-item__star'></i>
                 <i class='bx bxs-star product-item__star'></i>
                 <i class='bx bxs-star product-item__star'></i>
                 <i class='bx bxs-star product-item__star'></i>
                </div>
                <p class="product-item__price">${Number(product.price).toLocaleString()}<span class="product-item__price__name"> تومان</span>
                 </p>
                <i class='bx bx-heart product-item__like'></i>
                </a>
            </li>`)
        .join('')


    let userSearchColomn = products.filter(product => product.name.startsWith(courses_input.value))
        .map(product =>
            `<li class="product-item__column" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-in-sine" data-aos-duration="800">
            <div class="product-item__column-right">
                <img src="${product.src}" alt="" class="item-column__img">
            </div>
            <div class="product-item__column-left">
                <p class="item-column__type">${product.type}</p>
                <p class="item-column__name">${product.name}</p>
                <p class="item-column__desc">${product.desc}</p>
                <div class="item-column__bottom">
                    <div class="item-column__bottom-right">
                        <div class="item-column__bottom-stars">
                            <i class='bx bxs-star item-column__bottom-star'></i>
                            <i class='bx bxs-star item-column__bottom-star'></i>
                            <i class='bx bxs-star item-column__bottom-star'></i>
                            <i class='bx bxs-star item-column__bottom-star'></i>
                            <i class='bx bxs-star item-column__bottom-star'></i>
                        </div>
                        <p class="item-column__bottom-price">${Number(product.price).toLocaleString()}<span class="product-item__price__name">
                                تومان</span>
                        </p>
                    </div>
                    <div class="item-column__bottom-left">
                        <i class='bx bx-heart item-column__bottom-like'></i>
                    </div>
                </div>
            </div>
        </li>`)
        .join('')

    if (userSearchRow) {
        productRowContainer.innerHTML = userSearchRow
    }
    else {
        productRowContainer.innerHTML = '<p class="notFound">متاسفانه موردی یافت نشد !</p>'
    }
    if (userSearchColomn) {
        productColumnContainer.innerHTML = userSearchColomn
    }
    else {
        productColumnContainer.innerHTML = '<p class="notFound">متاسفانه موردی یافت نشد !</p>'
    }
})



//filter

defaultSelect.addEventListener('click', () => {
})
popSelect.addEventListener('click', () => {
})
rateSelect.addEventListener('click', () => {
})
inexSelect.addEventListener('click', () => {
})
exSelect.addEventListener('click', () => {
})





