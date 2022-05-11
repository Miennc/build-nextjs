import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router'
const ProductItem = ({product}) => {
    const addToCart = (product) => {
        let carts =   localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
        let check = false;
        let tmp = carts?.map(c => {
            if(c.id === product.id){
                alert('sản phẩm đã có trong giỏ hàng');
                check = true;
                return {...c, quantity: c.quantity + 1};
            }else{
                return c;
            }
        });
        if (check == false) {
            localStorage.setItem('carts', JSON.stringify([...carts, {...product, quantity: 1}]))
            alert('thêm sản phẩm vào giỏ hàng thành công');
        }else{
            localStorage.setItem('carts', JSON.stringify(tmp))
        }

        
        // if(carts.find(c => c.id === product.id)){
        //     alert('sản phẩm đã có trong giỏ hàng')
        //      carts.map((product)=>{
        //       product.quantity +=1
        //     })
        //     localStorage.setItem('carts', JSON.stringify(this.carts))
        // }else{ 
        //     carts.push({...product, quantity: 1})
        //     localStorage.setItem('carts', JSON.stringify(carts))
        //     setCarts(JSON.parse(localStorage.getItem('carts')))
        //     alert('thêm sản phẩm vào giỏ hàng thành công')
        // }
    } 
   const handClick = ()=>{
         Router.push(`details?alias=${product.alias}`)
   }
    return (
        <div className="shadow-lg rounded-2xl   bg-white w-full m-auto p-2">
            <div className="h-96 w-auto overflow-hidden">
                <img src={process.env.API_URL + "/storage/" + product?.thumb[0]} alt="adidas" className="w-full h-full object-cover rounded " />
            </div>
            <div className=" m-3 p-4 rounded-lg">
                <p className="text-black text-3xl font-bold ">
                    {product?.alias}
                </p>
                <p className="text-black font-bold text-2xl">
                    {product?.description}
                </p>
                <div className="flex items-center justify-between ">
                    <p className="text-red-500 font-bold ">
                        {product?.price} vnđ
                    </p>
                </div>
            </div>
            <div class="p-6 text-grey-darker text-justify flex flex-row  border-t">
                <button class="uppercase self-end text-blue text-sm hover:text-blue-dark rounded duration-4 self-center bg-blue-400 p-3 text-white" onClick={()=>handClick()}>details</button>
                <button onClick={() => addToCart(product)} class="uppercase self-end bg-green font-bold text-white  rounded hover:bg-green-dark duration-4 bg-blue-400 p-3 ml-5"><i class="fa fa-cart-plus mr-4"></i>Add  </button>
            </div>
        </div>
    );
}


export default ProductItem;