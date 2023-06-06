import { Search } from "@mui/icons-material"
import { FilterStyle, FormStyle, SearchNameStyle, SubmitStyle,SearchProductFilterStyle } from "../ProductsStyle"
import { useState } from "react"
import { useFilter } from "../../Utils/FiltersProducts"

const Filter = () => {
    const [filter, setfilter] = useState(false);
    const [filterName, setFilterName] = useState('');
    const [filterType, setFilterType] = useState('');
    const [filterWheels, setFilterwheels] = useState('');
    const [filterFrame, setFilterFrame] = useState('');
    const {Filter}=useFilter();

    const setFilterCheck = (e) => {
        e.preventDefault();
        !filter ? setfilter(true) : setfilter(false);
    }

    const SubmitForm =e=>{
        e.preventDefault(); 
        Filter(filterName,filterType,filterWheels,filterFrame);
        setFilterName('');
    }
    return (
        <FormStyle onSubmit={SubmitForm}>
            <SearchNameStyle type="text" placeholder="Buscar" value={filterName} onChange={(e)=>setFilterName((e.target.value).toLowerCase())}/>
            <FilterStyle onClick={setFilterCheck} type="button">Filtrar</FilterStyle>
            {filter ?
                <SearchProductFilterStyle>
                    <select onChange={(e)=>setFilterType(e.target.value)}>
                        <option value="tipo">Tipo</option>
                        <option value="urbana">Urbana</option>
                        <option value="mtb">Montaña</option>
                        <option value="ruta">Ruta</option>
                        <option value="accesorios">Accesorios</option>
                    </select>
                    <select onChange={(e)=>setFilterwheels(e.target.value)}>
                        <option value="rodado">Rodado</option>
                        <option value="29">Rodado 29</option>
                        <option value="28">Rodado 28</option>
                        <option value="27.5">Rodado 27,5</option>
                        <option value="26">Rodado 26</option>
                    </select>
                    <select onChange={(e)=>setFilterFrame(e.target.value)}>
                        <option value="cuadro">Cuadro</option>
                        <option value="aluminio">Aluminio</option>
                        <option value="acero">Acero</option>
                        <option value="carbono">Carbono</option>
                    </select>
                </SearchProductFilterStyle> : <></>}
            <SubmitStyle type="submit"><Search /></SubmitStyle>
        </FormStyle>
    )
}

export default Filter
