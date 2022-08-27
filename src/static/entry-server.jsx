import ReactDOMServer from 'react-dom/server'
import App from '../App'

export const render = () =>
  ReactDOMServer.renderToString(
    <App />
  )
