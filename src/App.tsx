
import Dashboard from './pages/Dashboard'
import Authentication from './pages/Authentication'
import { userStore } from './context'
function App() {
  const userContext =  userStore();
  return (
    <div className='w-screen h-full'>
        { !userContext.islogged && <Authentication />}
        { userContext.islogged && userContext.userType == 'professional' &&  <Dashboard /> }
    </div >
  )
}

export default App
