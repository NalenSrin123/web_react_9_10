import '../assets/css/navbar.css'
const Navbar = () => {
    const menu=['Home','កម្សាន្ត','បច្ចេកវិទ្យា','ជីវិតនិងសង្គម','កីឡា','Auto Talk'];
  return (
    <nav>
        <div className="menu">
            <ul>
                {menu.map((val,index)=><li><a href="#">{val}</a></li>)}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar