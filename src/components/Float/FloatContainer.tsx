import React, { useEffect, useContext } from 'react'
import FloatContext from '~/contexts/FloatContext'
export default function FloatContainer({ children }: { children: React.ReactNode }) {
  const { attr} = useContext(FloatContext)
  return (
    <div className="fixed top-0 select-none ">
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return null
        }
        const childProps = {
          ...child.props,
          ...attr,
          style: {
            ...attr?.style,
            transition: 'all 800ms ease-in-out 0s',
            top: attr?.styles?.top,
            left: attr?.styles?.left,
          }
        }
        return React.cloneElement(child, childProps)       
      })
      }
    </div>
  )
  
}
