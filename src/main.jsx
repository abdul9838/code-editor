
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CodeProvider } from './context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  < CodeProvider>
    <App />
  </ CodeProvider >

)