import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        This is home<br />
        <Link to={"/dashboard"}>Go to Dashboard</Link>
    </div>
  )
}

export default Home;