import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPoem } from './../actions';

const Poem = ({ poem, isFetching, error, dispatch})=>{

    useEffect(()=>{
        dispatch(getPoem('love'))
    }, [])

    if(error) {
        return <h3> uh oh, there's an error: {error}</h3>;
    }

    if(isFetching) {
        return <h3>poem loading...</h3>;
    }

    const handleLoveClick = ()=>{
        dispatch(getPoem('love'))
    }

    const handleNoLoveClick = ()=>{
        dispatch(getPoem('hate'))
    }

    return (
        <div>
            <div className='buttons'>
              <button onClick={handleLoveClick}>love me</button >
              <button onClick={handleNoLoveClick}>love me not</button>  
            </div>
        {poem && 
            <div className='poemContainer'>
                <h3 className='poemTitle'>{poem.title}</h3>
                <h3 className='author'>{`By ${poem.author}`}</h3>
                <p>{poem.lines.join('\n')}</p>
            </div>
            }
       
      </div>
    )
}

const mapStateToProps = state =>{
    return {
        poem: state.poem,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(Poem);