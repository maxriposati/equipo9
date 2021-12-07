import React from 'react'

export const Payment = (props) => {
    return (
        <div>
            <p>
                pago {props.cedula}... <br />
                mes {props.name}<br />
                añon {props.lastname}<br />

                valor a pagar {props.lastname}<br />
            </p>
        </div>
    )
}
