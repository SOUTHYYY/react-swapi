import React, {useState} from 'react'
import Row from '../row/Row'
import {StarshipList} from '../sw-component/SWComponent'
import StarshipsDetails from '../sw-component/StarshipsDetails'

const StarshipPage = () => {
    const [selectedItem, setSelectedItem] = useState(null)

    const onItemSelected = (id) => {
        setSelectedItem(id)
    }
    return (
        <Row 
            left={<StarshipList onItemSelected={onItemSelected} />}
            right={<StarshipsDetails selectedItem={selectedItem} />} 
        />
    )
}

export default StarshipPage
