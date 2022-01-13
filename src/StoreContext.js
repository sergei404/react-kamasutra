import React from "react"

const StoreContext = React.createContext(null)

// const Provider = ({children, value}) => {
//   console.log(value.getState());
//   return (<StoreContext.Provider value={value}>
//     {children}
//   </StoreContext.Provider>)
// }

export default StoreContext
//export default Provider