import Home from './pages/Home'
import NavPage from './pages/NavPage'

const NAV_PAGES = {
  '/expertises': 'Expertises',
  '/work': 'Work',
  '/about': 'About',
  '/contact': 'Contact',
}

function App() {
  const pathname = window.location.pathname.toLowerCase()
  const pageName = NAV_PAGES[pathname]

  if (pageName) {
    return <NavPage title={pageName} />
  }

  return <Home />
}

export default App
