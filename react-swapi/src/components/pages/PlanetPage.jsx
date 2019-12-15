import React, {useState} from 'react'
import Row from '../row/Row'
import PlanetDetails from '../sw-component/PlanetDetails'
import { PlanetList } from '../sw-component/SWComponent'

const PlanetPage = () =>{
    const [selectedItem, setSelectedItem] = useState(null)

    const onItemSelected = (id) => {
        setSelectedItem(id)
    }
    return (
        <Row 
            left={<PlanetList onItemSelected={onItemSelected}/>}
            right={<PlanetDetails selectedItem={selectedItem}/>}     
        />
    )
}

export default PlanetPage
