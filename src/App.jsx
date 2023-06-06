import { BrowserRouter } from 'react-router-dom'
import RoutesContainer from './Routes/RoutesContainer'
import { Provider } from 'react-redux'
import { store, persistor } from './components/Redux/store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <RoutesContainer />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
