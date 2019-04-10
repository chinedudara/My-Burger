import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Meat', type: 'meat'},
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    
]

const buildControls = (props) => {
return (
    <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.totalPrice.toFixed(2)} NGN</strong></p> 
        {controls.map((control) => <BuildControl 
                                        key={control.label} 
                                        label={control.label} 
                                        type={control.type}
                                        added={props.ingredientAdded} 
                                        removed={props.ingredientRemoved}
                                        disabled={props.disabled}
                                    />)}
    <button className={classes.OrderButton} disabled={!props.canPurchase} onClick={props.isPurchasing}>Order Now!</button>
    </div>)
}

export default buildControls;