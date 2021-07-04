
import React from 'react'

import User from './components/User/User'
import Deparment from './components/Deparment/Deparment'

const App = () => {

  return (
    <div className="container" style={{ marginTop: 20 }}>
      <div className="row">
        <div className="col-6">
          < User />
        </div>
        <div className="col-6">
          <Deparment />
        </div>
      </div>

    </div>
  )

}

export default App;