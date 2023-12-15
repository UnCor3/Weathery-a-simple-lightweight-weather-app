const searchBox = document.querySelector(".search-box");

function handleShowResults(results, success) {
  //function to handle dom updates
  const searchResult = document.getElementsByClassName("search-results")[0];
  if (searchResult) searchResult.remove();

  const div = document.createElement("div");
  div.className = "search-results";
  searchBox.appendChild(div);

  const div2 = document.createElement("div");

  //in case where success is not true
  if (!success) {
    div2.innerText = "Something went wrong";
    div.append(div2);
    return;
  }

  //in case where we don't have results to show
  if (!results || !results.length) {
    div2.innerText = "No result found";
    div.append(div2);
    return;
  }

  //in case there are results to show
  results.forEach((item) => {
    const link = document.createElement("a");
    link.href = `/w/${item.name.toLowerCase()}`;
    link.innerText = `${item.country}/${item.region}`;
    div.append(link);
  });
}

//using this function to determine what dom updates to make
async function getAutoComplete(e) {
  const searchTerm = e.target.value;
  const searchResult = document.getElementsByClassName("search-results")[0];
  if (!searchTerm || searchTerm.length < 3) {
    if (searchResult) searchResult.remove();
    return;
  }
  //fetching our auto complete route (client-side rending here*)
  await fetch(`/auto-complete`, {
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
    .catch((err) => handleShowResults(undefined, false));
}

//debounce function to prevent multiple fetches
function debounce(fn) {
  let timer;
  return (...params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...params);
      console.log("hit");
    }, 600);
  };
}

document
  .querySelector(".search-box input")
  .addEventListener("input", debounce(getAutoComplete));
