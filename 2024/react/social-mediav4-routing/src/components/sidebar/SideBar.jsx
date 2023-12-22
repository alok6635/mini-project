import { Link } from "react-router-dom"

const SideBar=()=>{


    return(
        <>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32">
        </svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">

        <Link to="/" className="nav-link" aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16">
            </svg>
          Home
        </Link>
      </li>
      <li className="nav-item">
      <Link to="/createpost" className="nav-link " aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16">
            </svg>
          Create Post
        </Link>
      </li>
    </ul>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
        </>
    )
    }
export default SideBar