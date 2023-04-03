

function TopBar() {

  const iconStyle = "m-3 w-6 h-6"

  return (
    <div className="bg-slate-700 absolute top-0 left-0 right-0 w-screen grid grid-cols-1 place-items-center">
      <div className="w-screen" style={{ maxWidth: '1400px' }}>
        <div className="bg-orange-300">
          <div className="flex items-center">
            <div className="pr-3">ETSY</div>
            <div className="flex grow border-2 border-black rounded-full bg-yellow-200">
              <input className="flex w-max grow p-4 bg-transparent"></input>
              <button className="p-2 rounded-r-full hover:bg-yellow-300">o</button>
            </div>
            <img src="http://www.w3.org/2000/svg" className={iconStyle}></img>
            <img src="http://www.w3.org/2000/svg" className={iconStyle}></img>
            <img src="http://www.w3.org/2000/svg" className={iconStyle}></img>
            <img src="http://www.w3.org/2000/svg" className={iconStyle}></img>
            <img src="http://www.w3.org/2000/svg" className={iconStyle}></img>

          </div>
        </div>
        <div>
          <div>categories</div>
        </div>
      </div>
    </div >
  );
}

export default TopBar;