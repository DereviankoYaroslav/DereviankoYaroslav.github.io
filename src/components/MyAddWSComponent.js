import React, { Component  } from 'react'

class MyAddWSComponent extends Component {

    componentDidMount() {
     (window.adsbygoogle = window.adsbygoogle || []).push({})
    }

   render () {
    return(
        <div>
        <ins className="adsbygoogle"
            style={{display:"block"}}
            data-ad-client="ca-pub-9892272589247017"
            data-ad-slot="5102827529"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </div>)
    }
}

export default MyAddWSComponent