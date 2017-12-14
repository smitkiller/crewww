import React, { PropTypes } from 'react';

const middle = {
   float       : 'none', 
   width       : '200px',
   marginLeft  : 'auto',
   marginRight : 'auto'
};

const ShowPage = ({
  page
}) => {
  return (
    <div className="App" style={middle}>
  
<article>

        <div >
          <h1>{page.title}</h1>
          <h1>{page.content}</h1>  
          </div>

        </article>
    </div>
  )
}

ShowPage.propTypes = {
  page: PropTypes.object.isRequired,
}

export default ShowPage
