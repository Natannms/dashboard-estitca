
import Dashboard from './pages/Dashboard'
import Authentication from './pages/Authentication'
import { userStore } from './context'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const userContext =  userStore();
  return (
    <div className='w-screen h-full'>
        <ToastContainer />
        { !userContext.islogged && <Authentication />}
        { userContext.islogged && userContext.userType == 'professional' &&  <Dashboard /> }
    </div >
  )
}

export default App
