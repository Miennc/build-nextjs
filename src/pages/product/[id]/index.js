import React, {useEffect, useState} from 'react';
import NavBar from "../../../components/NavBar";
import Slide from "../../../components/Slide";
import ProductItem from "../../../components/ProductItem";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getProductDetail} from "../../../actions/product";
import ProductDetail from "../../../components/ProductDetail";
import CheckboxItem from "../../../components/CheckboxItem";

function Index(props) {
    const router = useRouter();
    const dispatch = useDispatch();

    const productQuery = router.query;
    const alias = productQuery.alias;

    const product = useSelector(state => state.product.productDetail.data.data);
    const [currentFilter, setCurrentFilter] = useState([]);
    const [quantity, setQuantity] = useState('');

    useEffect(() => {
        dispatch(getProductDetail({alias}));
    }, []);

    return (
        <div className="container mx-auto space-y-4">
            <NavBar/>
            <Slide page_type={2}/>

            <div className="flex flex-no-wrap gap-6">
                <div className="py-10 md:w-4/5 w-11/12">
                    <ProductDetail product={product} handleQuantityProduct={(quantity)=>setQuantity(quantity)}/>
                </div>
                <div
                    className="my-12 w-64 absolute sm:relative bg-gray-800 shadow flex-col justify-between hidden sm:flex">
                    <div className="px-8 h-full flex items-center">
                        <ul className="mt-12 list-disc">
                            {(product?.filters || []).map((filter, index) => (
                                <li className="w-full items-center mb-6 cursor-pointer" key={index}>
                                    <span
                                        className="text-sm text-gray-300 hover:text-gray-500  ml-2">{filter.name}</span>
                                    <ul className="list-decimal ml-8 text-white">
                                        {(filter.childs || []).map((value, index) => (
                                            <CheckboxItem handleFunc={(selected) => setCurrentFilter(selected)}
                                                          item={value} current={currentFilter} key={index}/>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button type="button"
                            className="py-2 px-4 mx-auto mb-4 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-2/3 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full">
                        Add to cart
                    </button>
                </div>
                {/* Sidebar ends */}

            </div>
        </div>
    );
}

export default Index;