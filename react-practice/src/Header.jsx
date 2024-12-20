 
 function Header (){
    let counter  = 0;
    const click = (name) => {
        counter++;
       
        if (counter > 3){
            console.log(`${name} Stop it!`)
        } else {
            console.log(`${name} You have clicked me ${counter} times`)
        }
    }

    return <button onClick={() => click('Jose')}>Click here</button>
 }

 export default Header