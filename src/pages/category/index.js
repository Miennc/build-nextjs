import React, {useEffect, useState} from 'react';
import NavBar from "../../components/NavBar";
import Slide from "../../components/Slide";
import CheckboxItem from "../../components/CheckboxItem";
import ProductItem from "../../components/ProductItem";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../actions/product";
import {getCategory, getFilterCategory} from "../../actions/category";
import {useRouter} from "next/router";

function Index() {
    const router = useRouter();
    const dispatch = useDispatch();

    const {category, categoryFilter} = useSelector(state => state.category);
    const listProduct = useSelector(state => state.product.product.data.data);
    const [showFilter, setShowFilter] = useState({});
    const [currentFilter, setCurrentFilter] = useState([]);

    const catSelectHandle = (id) => {
        router.push(`/category?id_cat=${id}`);
        setCurrentFilter([]);
    };
    
    useEffect(() => {  
        dispatch(getCategory());
        dispatch(getProducts());
    }, []);

    useEffect(() => {
        let idCat = router.query.id_cat;
        idCat && dispatch(getFilterCategory(idCat));
    }, [router]);

    useEffect(() => {
        if (currentFilter.length > 0) {
            let idCat = router.query.id_cat;
            let idFilter = currentFilter.toString();
            dispatch(getProducts({id_cart:idCat,id_filter:idFilter}));
        }
    }, [currentFilter])

    return (
        <div className="container mx-auto space-y-4">
            <NavBar/>
             <div className="mx-12">
             <Slide page_type={2}/>
             </div>

            <div className="flex flex-no-wrap mx-10">
                <div
                    className="w-64 absolute sm:relative text-black font-bold text-xl shadow flex-col justify-between hidden sm:flex my-12">
                    <div className="px-8">
                        <ul className="mt-12">

                            {(category?.data?.data || []).map((cat, index) => {
                                return (
                                    <li className="w-full text-black  cursor-pointer items-center mb-6"
                                        key={index}>
                                        <div className="flex items-center ">
                                            <span  onClick={() => {
                                                catSelectHandle(cat.id);
                                                setShowFilter({cate: `cat${cat.id}`})
                                            }
                                            } className="text-sm  ml-2">{cat.name}</span>
                                        </div>
                                        <ul className="list-disc ml-8">

                                            {showFilter?.cate === `cat${cat.id}` &&
                                                (categoryFilter?.data?.data || []).map((filter, index) => (
                                                    <div key={index} className="text-black">
                                                        <li onClick={() => {
                                                            setShowFilter({...showFilter, [filter.id]: true});
                                                        }}>{filter.name}</li>

                                                        {showFilter[filter.id] === true ? (
                                                            <ul className="list-decimal ml-8">
                                                                {(filter.childs || []).map((lab,index) => (
                                                                    <li key={index}>
                                                                        <CheckboxItem
                                                                            handleFunc={(selected) => setCurrentFilter(selected)}
                                                                            item={lab} current={currentFilter}/>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : null}
                                                    </div>
                                                ))}
                                        </ul>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
                    <div
                        className="w-full h-full rounded border-dashed border-2 border-gray-300">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                            {
                                (listProduct || []).map((item, index) =>
                                    <ProductItem key={index} product={item}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;