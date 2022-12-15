function EyesOnMe (){
    const focus = (event) => {
       console.log("Good!")
    }
    const blur = (event) => {
        console.log("Hey, Eyes on me!")
    }
    return (
    <div>
        <button onFocus={focus} onBlur={blur}></button>
    </div>
    )
}

export default EyesOnMe;