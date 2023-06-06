import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setNewFilterProducts } from "../Redux/productsSice"
import { bikers } from '../Utils/AllProducts'

export const useFilter = () => {
    const dispatch = useDispatch();

    const productForName = (products, name) => {
        let product = products.toLowerCase();
        return product.includes(name);
    };

    const Filter = (name, type, wheels, frame) => {

        let filterName = bikers.filter((product) => productForName(product.name, name));
        let productFilterType = bikers.filter((product) => product.type.toLowerCase() === type);
        let productFilterWheels = bikers.filter((product) => product.wheels === Number(wheels));
        let productFilterFrame = bikers.filter((product) => product.frame.toLowerCase() === frame);

        let productNameType = filterName.filter((product) => product.type.toLowerCase() === type);
        let productNameWheels = filterName.filter((product) => product.wheels === Number(wheels));
        let productNameFrame = filterName.filter((product) => product.frame.toLowerCase() === frame);

        let productNameTypeWheels = productNameType.filter((product) => product.wheels === Number(wheels));
        let productNameTypeFrame = productNameType.filter((product) => product.frame.toLowerCase() === frame);

        let productNameWheelsFrame = productNameWheels.filter((product) => product.frame.toLowerCase() === frame);

        let productFilterNameTypeWheelsFrame = productNameTypeWheels.filter((product) => product.frame.toLowerCase() === frame);

        let productFilterTypeWheels = productFilterType.filter((product) => product.wheels === Number(wheels));
        let productFilterTypeFrame = productFilterType.filter((product) => product.frame.toLowerCase() === frame);

        let productFilterTypeWheelFrame = productFilterTypeWheels.filter((product) => product.frame.toLowerCase() === frame);

        let productFilterWheelsFrame = productFilterWheels.filter((product) => product.frame.toLowerCase() === frame);


        if (name !== '') {
            if ((type === '' || type === 'tipo') && (wheels === '' || wheels === 'rodado') && (frame === '' || frame === 'cuadro')) {
                if (filterName.length) {
                    dispatch(setNewFilterProducts(filterName));
                    return
                } else return dispatch(setNewFilterProducts([]))
            } if ((type === '' || type === 'tipo') && (wheels === '' || wheels === 'rodado') && (frame !== '' || frame !== 'cuadro')) {
                if (productNameFrame.length) {
                    dispatch(setNewFilterProducts(productNameFrame));
                    return
                } else return dispatch(setNewFilterProducts([]))
            } if ((wheels !== '' || wheels !== 'rodado') && (type === '' || type === 'tipo') && (frame === '' || frame === 'cuadro')) {
                if (frame === '' || frame === 'cuadro') {
                    if (productNameWheels.length) {
                        dispatch(setNewFilterProducts(productNameWheels));
                        return
                    } else return dispatch(setNewFilterProducts([]))
                } else {
                    if (productNameWheelsFrame.length) {
                        dispatch(setNewFilterProducts(productNameWheelsFrame));
                        return
                    } else return dispatch(setNewFilterProducts([]))
                }
            } if (type !== '' || type !== 'tipo') {
                if ((wheels === '' || wheels === 'rodado') && (frame === '' || frame === 'cuadro')) {
                    if (productNameType.length) {
                        dispatch(setNewFilterProducts(productNameType));
                        return
                    } else return dispatch(setNewFilterProducts([]))
                } if ((wheels === '' || wheels === 'rodado') && (frame !== '' || frame !== 'cuadro')) {
                    if (productNameTypeFrame.length) {
                        dispatch(setNewFilterProducts(productNameTypeFrame));
                        return
                    } else return dispatch(setNewFilterProducts([]))
                } if (wheels !== '' || wheels !== 'rodado') {
                    if ((frame === '' || frame === 'cuadro')) {
                        if (productNameTypeWheels.length) {
                            dispatch(setNewFilterProducts(productNameTypeWheels));
                            return
                        } else return dispatch(setNewFilterProducts([]))
                    } if ((frame !== '' || frame !== 'cuadro')) {
                        if (productFilterNameTypeWheelsFrame.length) {
                            dispatch(setNewFilterProducts(productNameTypeFrame));
                            return
                        } else return dispatch(setNewFilterProducts([]))
                    }
                }
            }
        } if (name === '') {
            if ((type === '' || type === 'tipo') && (wheels === '' || wheels === 'rodado') && (frame === '' || frame === 'cuadro')) {
                dispatch(setNewFilterProducts(bikers));
                return
            } if ((type === '' || type === 'tipo') && (wheels === '' || wheels === 'rodado')) {
                if (productFilterFrame.length) {
                    dispatch(setNewFilterProducts(productFilterFrame));
                    return
                } else return dispatch(setNewFilterProducts([]))
            } if (type === '' || type === 'tipo') {
                if (frame === '' || frame === 'cuadro') {
                    if (productFilterWheels.length) {
                        dispatch(setNewFilterProducts(productFilterWheels));
                        return
                    } else return dispatch(setNewFilterProducts([]))
                } else {
                    if (productFilterWheelsFrame.length) {
                        dispatch(setNewFilterProducts(productFilterWheelsFrame));
                        return
                    } else return dispatch(setNewFilterProducts([]))
                }
            } else {
                if ((wheels === '' || wheels === 'rodado') && (frame === '' || frame === 'cuadro')) {
                    if (productFilterType.length) {
                        dispatch(setNewFilterProducts(productFilterType));
                        return
                    } else return dispatch(setNewFilterProducts([]))
                } if (wheels === '' || wheels === 'rodado') {
                    if (productFilterTypeFrame.length) {
                        dispatch(setNewFilterProducts(productFilterTypeFrame));
                        return
                    } else return dispatch(setNewFilterProducts([]))
                } else {
                    if (frame === '' || frame === 'cuadro') {
                        if (productFilterTypeWheels.length) {
                            dispatch(setNewFilterProducts(productFilterTypeWheels));
                            return
                        } else return dispatch(setNewFilterProducts([]))
                    } else {
                        if (productFilterTypeWheelFrame.length) {
                            dispatch(setNewFilterProducts(productFilterTypeWheelFrame));
                            return
                        } else return dispatch(setNewFilterProducts([]))
                    }
                }
            }
        }
    }


    return {
        Filter,
    }

}

