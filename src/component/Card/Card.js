import React from "react";
import classes from './Card.module.css'
import image from '../Asset/food-table.jpg'

const Card = ()=>{
    return(<React.Fragment>
        <div className={classes.card}>
        <img className={classes['card-img']} src={image}/>
        <h2 className={`${classes.name}`}>Butter Chicken</h2>
    <p className={classes.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates accusamus consequuntur mollitia. Provident corporis expedita ex iste consequatur nemo quae officia culpa nesciunt quisquam tenetur reprehenderit, omnis vitae. Rem.</p>
        </div>
    </React.Fragment>);
}
export default Card;