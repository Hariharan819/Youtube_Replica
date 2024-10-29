# Header
# Body
  -sidebar
   -Menuitems
 -Maincontainer
 -videocontainer
 -videocard

  <!-- const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchvalue?.current?.value +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    ); -->


  <Link key={value} to="/watchpagesearch">
                <li className="shadow-sm px-2 py-2 hover:bg-gray-100 cursor-pointer">
                  🔍 {value}
                </li>
              </Link>

              <li
                key={value}
                className="shadow-sm px-2 py-2 hover:bg-gray-100 cursor-pointer"
              >
                🔍 {value}
              </li>