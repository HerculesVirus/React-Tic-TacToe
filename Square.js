import '../src/Game.css'
function Square(props){
    
    return(
        <button className='square' onClick={props.onClick}>
            {props.values}
        </button>
    )
}

export default Square;