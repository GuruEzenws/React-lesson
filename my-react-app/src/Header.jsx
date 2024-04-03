import logo from "./assets/reactpng.png"
function Header(){
    return(
     <div>
      <nav>
          <img src={logo} width={"50px"} className="nav-icon"></img>
            <h2 className="nav-id">ReactFacts</h2>
            <h3 className="nav-title">React Course-Project1</h3>
      </nav>
     </div>
    )
  }
  export default Header