<<<<<<< HEAD
import React from 'react'

export const Payment = (props) => {
    const fecha = new Date();
    return (
        <div>
            <p>
                RECIBO DE PAGO<br />
                Grupo Éxito<br />
                dirección<br />
                <br />
                <br />

                Fecha: {fecha.toLocaleDateString()}<br />
                Número de Folio:<br /> 
                <br />
                <br />
                Recibí de: {props.empresa}<br />
                La cantidad de:{props.valor}<br />
                Por concepto de:{props.concepto}<br />
                <br />
                <br />
                <br />
                Recibo de conformidad,<br />
                empleado<br />
                {props.name} {props.lastname}

            </p>
        </div>
    )
}
=======
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
>>>>>>> c9fc84c6575ea9f9b046ab93b76d2e798dc56c19
