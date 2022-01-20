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
            <div>
              <button onClick={handleLoveClick}>Love Me</button >
              <button onClick={handleNoLoveClick}>Love Me Not</button>  
            </div>
        {poem && 
            <div>
                <h3>{poem.title}</h3>
                <h3>{poem.author}</h3>
                <p>{poem.lines.join('\n')}</p>
            </div>
            }
        {/* <div>
            
            <h3>Sonnet 12 - Indeed this very love which is my boast"</h3>
            <h3>By Elizabeth Barrett Browning</h3>
            <p>
            "Indeed this very love which is my boast,",
        "And which, when rising up from breast to brow,",
        "Doth crown me with a ruby large enow",
        "To draw men's eyes and prove the inner cost,—",
        "This love even, all my worth, to the uttermost,",
        "I should not love withal, unless that thou",
        "Hadst set me an example, shown me how,",
        "When first thine earnest eyes with mine were crossed,",
        "And love called love. And thus, I cannot speak",
        "Of love even, as a good thing of my own:",
        "Thy soul hath snatched up mine all faint and weak,",
        "And placed it by thee on a golden throne,—",
        "And that I love (O soul, we must be meek!)",
        "Is by thee only, whom I love alone."
            </p>
        </div> */}
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