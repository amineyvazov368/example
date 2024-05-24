import React from 'react'
import {Helmet} from "react-helmet";

const index = () => {
  return (
   <>
   <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>BAsket</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
        </div>
   
   </>
  )
}

export default index