 
 function Header (){
    const click = () => {
        console.log("You have clicked me")
    }

    return <button onClick={() => click()}>Click here</button>
 }

 export default Header