import React from 'react'

function RestaurantDisplayComponent(props) {
    return (
        <div>
            <div key={props.restaurant_id} >
                <div>ID: {props.restaurant_id}</div>
                <div>Name: {props.restaurant_name}</div>
                <div>Type: {props.restaurant_type}</div>
                <div>Hours: {props.open_hours}</div>
                <div>PriceLevel: {props.price_level}</div>
                <div>Location: {props.location}</div>
                </div>
        </div>
    )
}

export default RestaurantDisplayComponent
