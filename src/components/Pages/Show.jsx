import React, { PropTypes } from 'react';


const ShowPage = ({
  page
}) => {
  return (
    <div className="middle" >
  
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
