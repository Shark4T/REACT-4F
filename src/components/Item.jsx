import React from "react";

const Item = ({data}) => {
    return(
        <div className="item">
            <img src={data.image} alt= {data.title} />
            <div className="item-text">
                <h2>{data.title}</h2>
                <h4>{data.subtitle}</h4>
            </div>
        </div>

    );
}

export default Item;