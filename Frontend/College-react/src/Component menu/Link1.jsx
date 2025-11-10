import React from 'react'

function Link1() {
  return (
    <div>
        <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
      </Routes>
    </div>
  )
}

export default Link1