const a=document.getElementById("app"),e={method:"GET",headers:{"X-RapidAPI-Key":"b238a60885msh099b034f1de1456p12c7f3jsn1dc1835bfbae","X-RapidAPI-Host":"anime-db.p.rapidapi.com"}};(async()=>{const n=await fetch("https://anime-db.p.rapidapi.com/anime?page=1&size=9&sortBy=ranking&sortOrder=asc",e),i=(await n.json()).data,t=i?.map((a=>`\n        <article class= "Card">\n            <img src="${a.image}">\n            <div class="container-body">\n                <h2>\n                    ${a.title}\n                </h2>\n                <a href= "${a.link}"> Ver ▶</a>\n            </div>\n        </article>\n        `)).join("");let d=document.createElement("section");d.classList.add("Items"),d.innerHTML=t,a.appendChild(d)})();
//# sourceMappingURL=index.24bca508.js.map
