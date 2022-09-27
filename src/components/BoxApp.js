import { useState } from 'react'

const BoxApp = () => {

    const [boxes, setBoxes] = useState([])

    const processForm = (e) => {
        e.preventDefault()

        // create a box.
        let colorValue = e.target.color.value
        setBoxes(boxes => [...boxes, colorValue])

        // clear the text input after the fact.
        e.target.color.value = ""
    }

    return (
        <>
          <form className="box-form" onSubmit={ processForm }>
            <label>Color:</label>
            <input type="text" name="color" />
            <input type="submit" value="Create Box" />
          </form>
          <div className="box-container">
            {
                boxes.map((box) =>
                    <div className='box' style={{ backgroundColor: box }}></div>
                )
            }
          </div>
        </>
    )
}

export default BoxApp