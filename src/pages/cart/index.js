import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
const Index = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("carts")) {
            setCart(JSON.parse(localStorage.getItem("carts")))
        }
    }, []);

    const updateQuantity = (index, quantityUnit) => {
        if (cart[index].quantity + quantityUnit <= 0) {
            cart.splice(index, 1);
            localStorage.setItem("carts", JSON.stringify(cart));
        } else {
            cart[index].quantity += quantityUnit;
            localStorage.setItem('carts', JSON.stringify(cart));     
        }
        setCart(JSON.parse(localStorage.getItem("carts")))
    }

    const removeItemCart = (id) => {
        cart.splice(cart.find(item => item.id === id), 1);
        localStorage.setItem("carts", JSON.stringify(cart))
        setCart(JSON.parse(localStorage.getItem("carts")))
        alert('xóa sản phẩm khỏi giỏ hàng');
    }

    return (
        <div>
            <div className="container mx-auto">
                <div className="flex justify-center my-6 ">
                    <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                        <div className="flex-1">
                            <table className="w-full text-sm lg:text-base" cellSpacing={0} >
                                <thead>
                                    <tr className="h-12 uppercase">
                                        <th className="hidden md:table-cell" />
                                        <th className="text-left p-4 ">Product</th>
                                        <th className="lg:text-right text-left pl-5 lg:pl-0">
                                            <span className title="Quantity">Số Lượng</span>
                                        </th>
                                        <th className="hidden text-right md:table-cell">giá</th>
                                    </tr>
                                </thead>
                                {
                                    cart?.map((itemCart, index) => {
                                        return (
                                            <tbody>
                                                <tr>
                                                    <td className="hidden pb-4 md:table-cell">
                                                        <a href="#">
                                                            <img src={itemCart?.thumb ? `http://192.168.1.28/storage/` + itemCart?.thumb[0] : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65CXLkEWFDlHIHnU1hDnHHVn0GdfzBR7Ejg&usqp=CAU"} className="w-52  rounded" alt="Thumbnail" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a href="#">
                                                            <p className="mb-2 md:ml-4 text-3xl font-bold"> {itemCart.name} </p>
                                                            <div className="text-red-600 ml-3" onClick={() => removeItemCart(itemCart.id)}>Remove item</div>
                                                        </a>
                                                    </td>
                                                    <td className="justify-center md:justify-end md:flex mt-6">
                                                        <div className="w-20 h-10">
                                                            <div className="relative flex flex-row w-full items-center top-10">
                                                                <i className="fa-solid fa-minus cursor-pointer" onClick={() => updateQuantity(index, -1)} />
                                                                <span className="mx-4 font-bold text-lg "> {itemCart.quantity}</span>
                                                                <i className="fa-solid fa-plus cursor-pointer" onClick={() => updateQuantity(index, 1)} />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="hidden text-right md:table-cell mb-3">
                                                        <span className="text-sm lg:text-base font-medium">
                                                            {itemCart.price * itemCart.quantity}
                                                        </span>
                                                    </td>
                                                    <td className="text-right">
                                                        <span className="text-sm lg:text-base font-medium">
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                }
                            </table>
                            {
                                    cart.length > 0? <button className="flex justify-end w-80  float-right px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                                                <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" />
                                                </svg>
                                                <Link href="/order">
                                                <span className="ml-2 mt-5px">Procceed to checkout</span>
                                                </Link>
                                            </button> : <div className=""> 
                                                            <span>không có sản phẩm nào trong giỏ hàng</span>
                                                            <Link href="/">
                                                                <button className="ml-10 bg-blue-500 px-4 py-2 rounded text-white"> goToHome </button>
                                                            </Link>
                                                            
                                                        </div>
                                }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
