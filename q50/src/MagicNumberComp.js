import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {genMagicNumber} from './redux/magicSlice/magicslice';
function MagicNumberComp() {

    const number = useSelector( (state ) => state.magic.value);
    let dispatch = useDispatch();
    console.log(number); 
  return (
    <div>
 
      <button   onClick={() => dispatch(genMagicNumber( Math.floor( Math.random() * 10) +1))} > Generate Magic Number </button>

 <h2> {  number!=0 &&  number}</h2>
    </div>
  )
}

export default MagicNumberComp