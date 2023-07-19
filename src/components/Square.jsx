import { useState } from "react"

const Square = ({value,onSquareClick }) => {

    return <button className="Square" onClick={onSquareClick}>{value}</button>
}

export default Square