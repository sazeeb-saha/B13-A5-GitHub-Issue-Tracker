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
  //   console.log(issues);
  const issueContainer = document.getElementById("issues-container");
  issueContainer.innerHTML = "";

  issues.forEach((issue) => {
    // console.log(issue);
    let date = new Date(issue.createdAt).toLocaleString();
    const div = document.createElement("div");
    div.onclick = () => {
      modal(issue);
    };
    div.className = `bg-[#ffffff] p-4 rounded-xl space-y-3 shadow-xl border-t-4 ${issue.status === "open" ? `border-[#00A96E]` : `border-[#A855F7]`} `;
    div.innerHTML = `
        <div class="flex justify-between items-center ">

                    ${
                      issue.status === "open"
                        ? `<img src="./assets/Open-Status.png" alt="">`
                        : `<p class="text-purple-600"> <i class="fa-regular fa-circle-check"></i> </p>`
                      // : `<img src="./assets/Closed-status.png" alt="">`
                    }
                    
                        ${
                          issue.priority === "high"
                            ? `<p class="px-5 py-1 rounded-full text-[12px] bg-[#FEECEC] text-[#F04545] font-semibold">HIGH</p>`
                            : `${
                                issue.priority === "medium"
                                  ? '<p class="px-5 py-1 rounded-full text-[12px] font-semibold bg-[#FFF6D1] text-[#F59E0B]">MEDIUM</p>'
                                  : '<p class="px-5 py-1 rounded-full text-[12px] font-semibold bg-[#EEEFF2] text-[#9CA3AF]">LOW</p>'
                              } `
                        } 
                   
                </div>
                <div>
                    <h3 class="font-semibold text-[14px] ">${issue.title}</h3>
                    <p class="text-[12px] text-[#64748B] ">${issue.description}</p>
                </div>
                <div class="flex items-start sm:items-center  flex-col sm:flex-row  gap-2 py-3">


                ${issue.labels
                  .map((label) => {
                    if (label === "bug") {
                      return `<p class="flex items-center  gap-1 px-3 py-1 rounded-full text-[12px] bg-[#FEECEC] text-[#F04545] border-2 border-[#FECACA]">
                        <i class="fa-solid fa-bug"></i> BUG </p>`;
                    }

                    if (label === "help wanted") {
                      return `<p class="px-3 py-1 rounded-full text-[12px] bg-[#FFF8DB] border-2 border-[#FDE68A] text-[#F04545]">
                        <i class="fa-regular fa-life-ring"></i> HELP WANTED </p>`;
                    }

                    if (label === "enhancement") {
                      return `<p class="flex items-center gap-1 px-3 py-1 rounded-full text-[12px] bg-[#DEFCE8] border-2 border-[#BBF7D0] text-[#00A96E]">
                        <i class="fa-solid fa-wand-magic-sparkles"></i> ENHANCEMENT </p>`;
                    }

                    if (label === "good first issue") {
                      return `<p class="px-3 py-1 rounded-full text-[12px] bg-[#DEFCE8] border-2 border-[#BBF7D0] text-[#00A96E]">
                      <i class="fa-solid fa-handshake"></i>
                         GOOD FIRST ISSUE</p>`;
                    } else {
                      return `<p class="px-3 py-1 rounded-full text-[12px] bg-[#DEFCE8] border-2 border-[#BBF7D0] text-[#00A96E] uppercase">
                      <i class="fa-solid fa-file-lines"></i>
                         ${label}.
                    </p>`;
                    }
                  })
                  .join("")}
                    
                </div>
                <div class="border-t-2 border-[#E4E4E7] space-y-1 py-3">
                    <p class="text-[12px] text-[#64748B]"> # ${issue.author} </p>
                    <p class="text-[12px] text-[#64748B]">${date}</p>
                </div>
    `;
    issueContainer.appendChild(div);
  });
}

loadIssues();
