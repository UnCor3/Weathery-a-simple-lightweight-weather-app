//If you want to test this app on your phone or any other device on your network
//you need to set the host to your ipv4 address 
//to get your ipv4 address open cmd and type ipconfig
const HOST = "localhost";
const PORT = 3000;

const searchBox = document.getElementsByClassName("search-box")[0];

function handleShowResults(results, success) {
  //function to handle dom updates
  const searchResult = document.getElementsByClassName("search-results")[0];
  if (searchResult) searchResult.remove();

  const div = document.createElement("div");
  div.className = "search-results";
  searchBox.appendChild(div);

  //in case where success is not true
  if (!success) {
    const div2 = document.createElement("div");
    div2.innerText = "Something went wrong";
    div.append(div2);
    return;
  }

  //in case where we don't have results to show
  if (!results || !results.length) {
    const div2 = document.createElement("div");
    div2.innerText = "No result found";
    div.append(div2);
    return;
  }

  //in case where have results to show
  results.forEach((item) => {
    const div2 = document.createElement("div");
    const link = document.createElement("a");
    link.href = `http://${HOST}:${PORT}/w/${item.name.toLowerCase()}`;
    link.innerText = `${item.country}/${item.region}`;
    div2.append(link);
    div.append(div2);
  });
}

  //using this function to determine what dom updates to make 
async function getAutoComplete(searchTerm) {
  const searchResult = document.getElementsByClassName("search-results")[0];
  if (!searchTerm || searchTerm.length < 3) {
    if (searchResult) searchResult.remove();
    return;
  }
  //fetching our auto complete route (client-side rending here*)
  await fetch(`http://${HOST}:${PORT}/auto-complete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      searchTerm: searchTerm,
    }),
  })
    .then((res) => res.json())
    .then(async (res) => {
      const { data, success } = res;
      handleShowResults(data, success);
    })
    .catch(err => handleShowResults(undefined,false))
}

let timer;

  //debounce function to prevent multiple fetches
function debounce(fn, props) {
  console.log("ex");
  if (timer) clearTimeout(timer);

  timer = setTimeout(() => {
    fn(props);
  }, 600);
}

//oninput handler
function handleOnChange(e) {
  e.preventDefault();
  const country = e.target.value;
  debounce(getAutoComplete, country);
}
