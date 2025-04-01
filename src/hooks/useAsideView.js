import { useEffect, useState } from "react";


export function useAsideView(){
    const [listContainerStyle, setListContainerSlyle] = useState('list')
    const [gridColsNumber, setGridColsNumber] = useState("3")
    const [isChecked, setIsChecked] = useState(false)
    const [prevstate, setPrevstate] = useState('list')

    useEffect(() => {
        const checkbox = document.getElementById("checkbox")

        if (!checkbox) return

        const handleChange = () => {
            setIsChecked(checkbox.checked)
        }

        const value = checkbox.checked
        setIsChecked(value)

        checkbox.addEventListener("change", handleChange);
        
        if (value){
            setPrevstate(listContainerStyle)
            setListContainerSlyle('list')
        } else {
            setListContainerSlyle(prevstate)
        }

        return () => {
            checkbox.removeEventListener("change", handleChange);
        }
    }, [isChecked])


    return {listContainerStyle, setListContainerSlyle, gridColsNumber, setGridColsNumber, isChecked}
}