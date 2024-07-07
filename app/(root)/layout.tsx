import React, { Children, ReactNode } from 'react'

const Rootlayout = ( {children} : {children: ReactNode}) => {
  return (
    <main> 
      {children}
      Footer
    </main>
  )
}

export default Rootlayout