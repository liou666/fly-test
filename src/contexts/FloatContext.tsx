import React,{ createContext ,FC,ReactNode,useReducer,} from "react";
type FloatActions = { type: 'SET_ATTRS', payload: {attr:any} } 
type FloatContainerProps = {
  children: ReactNode
}
export type FloatState = { attr: any ,proDispatch?:any,style?:any,position?:any} ;

const FloatContext = createContext<FloatState>({attr:null});

const reducer = (state:FloatState, action:FloatActions) => { 
  const { type, payload } = action;
  switch (type) { 
    case "SET_ATTRS":
      return {
        ...state,
        ...payload,
      };

  }
}

export const FloatContainerProvider:FC<FloatContainerProps>= ({ children })=> { 
  const [state, dispatch] = useReducer(reducer, { attr: null });
  return (
    <FloatContext.Provider
    value={{   
        attr: state.attr,
      style :state.style,
      proDispatch: dispatch,  
    }}
  >
    {children}
  </FloatContext.Provider> 
  )
 
}

export default FloatContext;
