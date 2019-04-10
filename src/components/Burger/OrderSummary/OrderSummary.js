import React from 'react';

import Aux from '../../../hoc/Auxilliary';

const orderSummary = (props) => (
    <Aux>
        <strong>Your Order</strong>
        <p>A delicious burger with following ingredients:</p>
        <ul>
            {Object.keys(props.ingredients)
            .map((ingrKey) => (
                <li key={ingrKey + '123'}>
                    <span style={{textTransform: 'capitalize'}}>{ingrKey}: </span>{props.ingredients[ingrKey]}
                </li>)
            )
        }
        </ul>
        <p>Proceed to checkout?</p>
    </Aux>
);

export default orderSummary;