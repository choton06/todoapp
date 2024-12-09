
function Header(){
    return(
        <div className="flex justify-around items-center h-12 border-gray-700 bg-cyan-900 text-white">
          <h1>I<span>Task</span></h1>
          <div className="flex "> 
            <li className="list-none mx-2">Home</li>
            <li className="list-none mx-2">About </li>
            <li className="list-none mx-2">Contact</li>
          </div>
          
        </div>
    )
}

 export default Header;