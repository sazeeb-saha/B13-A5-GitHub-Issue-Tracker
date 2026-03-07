const currentTab = "all";
const tabActive = ["btn-primary"];
const tabInactive = ["btn-active"];

function switchTab(tab) {
  const tabs = ["all", "open", "closed"];

  tabs.forEach((t) => {
    const tabName = document.getElementById("tab-" + t);

    if (t === tab) {
      tabName.classList.remove(...tabInactive);
      tabName.classList.add(...tabActive);
    } else {
      tabName.classList.add(...tabInactive);
      tabName.classList.remove(...tabActive);
    }
  });
}

async function loadIssues() {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  displayIssues(data.data);
}
function displayIssues(issues) {
  //   //   console.log(issues);
  //   issues.forEach((issue) => {
  //     // console.log(issue);
  //   });
}

loadIssues();
