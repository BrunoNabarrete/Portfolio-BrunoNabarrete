import HomeAbout from './components/HomeAbout'
import NavBar from './Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      <NavBar/>
      </div>
      <HomeAbout/>
      
    </main>
  )
}
