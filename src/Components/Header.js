import './Header.css'

const Header=()=>{
    return(
        <div className="header">
            <h1 className="Heading_Header">Family Weelness</h1>
            <h4>MESSAGE THERAPY</h4>
            <ul id="list">
                <li id="home">HOME</li>
                <li class="header_list">ABOUT</li>
                <li class="header_list">SERVICE</li>
                <li class="header_list">FAQ</li>
                <li class="header_list">CONTACT</li>
            </ul>

        </div>
    );
}
export default Header;