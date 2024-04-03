import bgimg from "./assets/pngfind.png"

function Content(){
    return(
        <main>
            <h1 className="main-title">Fun Facts About React</h1>
            <img src={bgimg} className="img"></img>
            <ul className="main-facts">
                <li>eas first released in 2013</li>
                <li>was originally created by jordan walke</li>
                <li>Has well over 100k stars n GitHub</li>
                <li>is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps,including mobile apps</li>
            </ul>
        </main>
    )
}
export default Content
