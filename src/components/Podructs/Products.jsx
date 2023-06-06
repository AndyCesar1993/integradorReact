import { ErrorStyle, ProductCardsContainerStyle, ProductContainerStyle, } from "./ProductsStyle"
import { useState } from "react"
import ProductCard from "./ProductCard/ProductCard"
import { Pagination } from "@mui/material"
import { useSelector } from "react-redux"
import Filter from "./Filter/Filter"

const Products = () => {
    const [page, setPage] = useState(1);
    const [productInit, setProductInit] = useState(0);

    const handleChange = (event, value) => {
        setPage(value);
        setProductInit((5 * value) - 5)
    };


    const allProducts = (useSelector(state => state.products.products));
    const totalProducts = (useSelector(state => state.products.totalProducts));

    return (
        <ProductContainerStyle>
            <h1>Nuestros Productos</h1>
            <Filter />
            <div>

                <ProductCardsContainerStyle>
                    {!allProducts.length ? <ErrorStyle>Producto no Encontrado!!</ErrorStyle> :
                        allProducts.slice(productInit, page * 5).map((products) =>
                            <ProductCard key={products.id} {...products} />
                        )}
                </ProductCardsContainerStyle>


            </div>
            {allProducts.length ?
                <Pagination count={Math.ceil(totalProducts / 5)}
                    page={page}
                    onChange={handleChange}
                    style={{
                        width: 'fit-content',
                        margin: 'auto'
                    }} /> :
                <></>
            }

        </ProductContainerStyle>
    )
}

export default Products
