(() => {
  "use strict";
  const paths = {
    compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z"/>',
    book:'<path d="M4 19V5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0 0 4h14M8 8h8m-8 4h6" transform="translate(0 -1)"/>',
    checkList:'<path d="m3 6 2 2 3-4m-5 9 2 2 3-4m-5 9 2 2 3-4M11 6h10m-10 7h10m-10 7h10"/>',
    chart:'<path d="M4 4v16h16M8 16v-4m5 4V8m5 8v-6"/>',
    lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3m-4 4v3"/>',
    unlock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 7.6-1.8M12 14v3"/>',
    shield:'<path d="M12 22s7-3 7-10V5l-7-3-7 3v7c0 7 7 10 7 10Z"/><path d="m9 12 2 2 4-4"/>',
    pin:'<path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    heart:'<path d="M20.8 8.6c0 4.7-8.8 10.2-8.8 10.2S3.2 13.3 3.2 8.6A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.8 2.2Z"/>',
    shell:'<path d="M11 19c-3.8-1-7.8-4.3-8.1-8.4-.2-2.1 1.3-3.5 2.8-3.5.5-1.8 2.1-2.7 3.8-2.2 1.4-1.7 3.6-1.7 5 0 1.7-.5 3.3.4 3.8 2.2 1.5 0 3 1.4 2.8 3.5C20.8 14.7 16.8 18 13 19l-1 1-1-1Zm1 0V8m-1 11L7 10m6 9 4-9"/>',
    chest:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 11h18m-11 0v4h4v-4M6 6v5m12-5v5"/>',
    swap:'<path d="M3 7h17m-4-4 4 4-4 4M21 17H4m4-4-4 4 4 4"/>',
    sword:'<path d="m14.5 17.5-8-8M3 21l5-5m-3-3 6 6m-.5-7L19 4l2-1-1 2-8.5 8.5"/>',
    star:'<path d="m12 3 2.6 5.5 6.1.8-4.4 4.3 1 6.1-5.3-2.9-5.4 2.9 1.1-6.1-4.4-4.3 6.1-.8L12 3Z"/>',
    flask:'<path d="M9 3h6m-5 0v7l-5 7c-1.4 2 .1 4 2 4h10c2 0 3.4-2 2-4l-5-7V3M8 15h8"/>',
    grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    down:'<path d="m6 9 6 6 6-6"/>',
    right:'<path d="m9 6 6 6-6 6"/>',
    left:'<path d="m15 6-6 6 6 6"/>',
    arrow:'<path d="M3 12h17m-6-6 6 6-6 6"/>',
    play:'<path d="m8 5 11 7-11 7V5Z"/>',
    menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
    x:'<path d="m6 6 12 12M18 6 6 18"/>',
    search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    minus:'<path d="M5 12h14"/>',
    mountain:'<path d="m2 19 6-9 3 4 4-9 7 14H2Zm11-10 2 2 2-2"/>',
    gem:'<path d="M4 9 8 4h8l4 5-8 11L4 9Zm0 0h16M8 4l4 16 4-16"/>',
    fish:'<path d="M15 12c-2.3-4.7-7.8-6.2-12 0 4.2 6.2 9.7 4.7 12 0Zm0 0 5-4v8l-5-4Zm-7-1h.01"/>',
    music:'<path d="M9 17V5l10-2v12M9 8l10-2"/><ellipse cx="6" cy="17" rx="3" ry="2"/><ellipse cx="16" cy="15" rx="3" ry="2"/>',
    castle:'<path d="M3 21V8h4v3h3V4h4v7h3V8h4v13H3Zm7 0v-4a2 2 0 1 1 4 0v4"/>',
    leaf:'<path d="M6 17c-5-7 4-14 14-13 1 10-6 19-13 14m-3 3L15 10"/>'
  };
  const icon = (name) => '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(paths[name] ?? paths.compass)+'</svg>';
  const cats = {
    heart:["Heart Pieces","Heart Piece","heart"], shell:["Secret Seashells","Seashell","shell"],
    chest:["Treasure Chests","Chest","chest"], trade:["Trading Quest","Trade","swap"],
    gear:["Equipment & Upgrades","Equipment","sword"], container:["Heart Containers","Heart Container","heart"],
    instrument:["Instruments","Instrument","music"], song:["Ocarina Songs","Song","music"],
    bottle:["Fairy Bottles","Bottle","flask"], figure:["Figures","Figure","star"],
    mini:["Mini-game Rewards","Mini-game","fish"], lure:["Fishing Lures","Lure","fish"],
    challenge:["Chamber Challenges","Challenge","grid"], stone:["Chamber Stones","Chamber Stone","gem"],
    effect:["Chamber Effects","Effect","star"], warp:["Warp Points","Warp Point","pin"],
    fairy:["Great Fairy Fountains","Fountain","leaf"], explore:["Island Sweep","Exploration","compass"],
    amiibo:["Optional amiibo","amiibo","star"], story:["Route Steps","Route","book"]
  };

  const main = document.querySelector("#main");
  const rail = document.querySelector("#chapter-rail");
  const topNav = document.querySelector("#top-nav");
  const dialog = document.querySelector("#dialog");
  const status = document.querySelector("#status");
  const menuToggle = document.querySelector("#menu-toggle");
  const scrim = document.querySelector(".scrim");
  document.querySelector("#brand-icon").innerHTML = icon("compass");
  menuToggle.innerHTML = icon("menu");
  const esc = (input) => String(input ?? "").replace(/[&<>"']/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const two = (number) => String(number).padStart(2,"0");
  const readChapter = (value, fallback = 1) => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 9 ? Number(value) : fallback;

  function orderedSections(chapter) {
    const sides = window.KOHOLINT_SIDE.filter((group) => group.chapter === chapter.id);
    const pick = (placement) => {
      const byTitle = new Map();
      for (const group of sides.filter((item) => item.placement === placement)) {
        const previous = byTitle.get(group.title);
        byTitle.set(group.title, previous ? {...previous, steps:[...previous.steps,...group.steps]} : group);
      }
      return [...byTitle.values()];
    };
    const breaks = {1:2,2:1,3:3,4:3,5:1,6:1,7:2,8:1,9:0};
    const index = breaks[chapter.id];
    const story = chapter.sections;
    if (chapter.id === 1) {
      return [story[0],...pick("village"),story[1],...pick("before-dungeon"),...story.slice(index),...pick("after")];
    }
    if (chapter.id === 8) {
      return [story[0],...pick("before-dungeon"),...story.slice(1,3),...pick("roof"),...story.slice(3),...pick("after")];
    }
    if (chapter.id === 3) {
      return [story[0],...pick("early"),...story.slice(1,index),...pick("before-dungeon"),...story.slice(index),...pick("after")];
    }
    return [...story.slice(0,index),...pick("before-dungeon"),...story.slice(index),...pick("after")];
  }

  const chapters = window.KOHOLINT_CHAPTERS.sort((a,b) => a.id-b.id).map((chapter) => ({
    ...chapter,
    groups: orderedSections(chapter).map((group, index) => ({
      ...group, key: "section-"+chapter.id+"-"+(index+1),
      rows: group.steps.map(([id,raw,title,text]) => ({
        id, title, text, chapter: chapter.id, location: group.location, group: group.title,
        tags: [...new Set([...[raw].flat(),...(window.KOHOLINT_TAGS[id] ?? [])])]
      }))
    }))
  }));
  const allRows = chapters.flatMap((chapter) => chapter.groups.flatMap((group) => group.rows));
  const byId = new Map(allRows.map((row) => [row.id,row]));
  const coreRows = allRows.filter((row) => !row.tags.includes("amiibo"));
  const modeNames = {normal:"Normal",hero:"Hero"};
  const storageKey = "koholint-field-guide.v1";
  const blankRun = () => ({deaths:0, cleared:false});
  const defaultState = () => ({version:1, checks:{}, ceiling:1, spoilers:true, chapter:1, mode:"normal", runs:{normal:blankRun(),hero:blankRun()}});
  let storageError = false;
  function validateState(value) {
    if (!value || value.version !== 1 || !value.checks || Array.isArray(value.checks) || typeof value.checks !== "object") throw new Error("This file is not a Koholint progress backup.");
    const result = defaultState();
    result.checks = Object.fromEntries(Object.entries(value.checks).filter(([id, checked]) => byId.has(id) && checked === true));
    result.ceiling = readChapter(value.ceiling);
    result.chapter = readChapter(value.chapter);
    result.spoilers = value.spoilers !== false;
    result.mode = value.mode === "hero" ? "hero" : "normal";
    for (const mode of Object.keys(modeNames)) {
      const run = value.runs?.[mode];
      if (run) result.runs[mode] = {deaths: Number.isSafeInteger(run.deaths) && run.deaths >= 0 ? run.deaths : 0, cleared: run.cleared === true};
    }
    return result;
  }
  function loadState() {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? validateState(JSON.parse(raw)) : defaultState();
    } catch {
      storageError = true;
      return defaultState();
    }
  }
  let state = loadState();
  let routeFilter = "all";
  let routeStatus = "all";
  let collectionFilter = "all";
  let collectionStatus = "all";
  let collectionChapter = "all";
  let query = "";
  let active = {view:"guide",chapter:1};
  let opened = new Map();
  let highlighted = "";
  let lastDialogTrigger;
  let importState;
  let confirmAction;
  function saved() {
    const button = document.querySelector("#save-status");
    button.toggleAttribute("data-error",storageError);
    button.innerHTML = "<span></span>"+(storageError ? "Storage unavailable" : "Progress saved");
    button.setAttribute("aria-label", storageError ? "Storage unavailable. Open progress settings" : "Progress saved. Open progress settings");
  }
  function persist() {
    try {
      localStorage.setItem(storageKey,JSON.stringify(state));
      storageError = false;
    } catch {
      storageError = true;
    }
    saved();
  }
  function speak(text) {
    status.textContent = text;
  }
  const isOpen = (chapter) => !state.spoilers || chapter <= state.ceiling;
  const isChecked = (row) => state.checks[row.id] === true;
  const checkedCount = (rows) => rows.filter(isChecked).length;
  const tagRows = (tag) => allRows.filter((row) => row.tags.includes(tag));
  const pct = (done,total) => total ? Math.floor(done/total*100) : 0;
  const primaryTag = (row) => row.tags.find((tag) => tag !== "story") ?? row.tags[0];
  function progress(done,total, label) {
    return '<div class="progress" role="progressbar" aria-label="'+esc(label)+'" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+pct(done,total)+'"><span style="width:'+pct(done,total)+'%"></span></div>';
  }
  function stat(tag) {
    const rows = tag === "overall" ? coreRows : tagRows(tag);
    const done = checkedCount(rows);
    const [name,,graphic] = cats[tag] ?? ["Overall Completion","","compass"];
    const label = tag === "overall" ? pct(done,rows.length)+"%" : done;
    const detail = tag === "overall" ? done+" of "+rows.length : "/ "+rows.length;
    const href = tag === "overall" ? "#dashboard" : "#checklist/"+tag;
    return '<a class="stat" href="'+href+'"><span class="stat-head"><span class="stat-icon '+tag+'">'+icon(graphic)+'</span>'+name+'</span><span class="stat-values">'+label+' <small>'+detail+'</small></span>'+progress(done,rows.length,name)+'</a>';
  }
  function deathStat() {
    const run = state.runs[state.mode];
    const caption = run.cleared ? (run.deaths === 0 ? "Deathless clear" : "Run cleared") : modeNames[state.mode]+" mode";
    return '<a class="stat" href="#dashboard/deathless"><span class="stat-head"><span class="stat-icon death">'+icon("shield")+'</span>Deathless Run</span><span class="stat-values">'+run.deaths+' <small>'+ (run.deaths === 1 ? "death" : "deaths")+'</small></span><span class="stat-caption"><span class="live-dot"></span>'+caption+'</span></a>';
  }
  function crumbs(current, first = "Link’s Awakening") {
    return '<div class="breadcrumb">'+icon("compass")+'<span>'+esc(first)+'</span>'+icon("right")+'<strong>'+esc(current)+'</strong></div>';
  }
  function btn(label, action, style = "outline", graphic = "", value = "") {
    return '<button type="button" class="button '+style+'" data-action="'+action+'"'+(value ? ' data-value="'+esc(value)+'"' : "")+'>'+ (graphic ? icon(graphic) : "")+esc(label)+'</button>';
  }
  function iconButton(label, action, graphic) {
    return '<button type="button" class="icon-button" data-action="'+action+'" aria-label="'+esc(label)+'">'+icon(graphic)+'</button>';
  }
  function linkButton(label, href, style = "outline", graphic = "") {
    return '<a class="button '+style+'" href="'+href+'">'+(graphic ? icon(graphic) : "")+esc(label)+'</a>';
  }
  function renderNav() {
    const navs = [["guide","Guide","book","#guide/"+state.chapter],["checklist","Checklist","checkList","#checklist"],["dashboard","Progress","chart","#dashboard"]];
    topNav.innerHTML = navs.map(([id,label,graphic,href]) => '<a href="'+href+'"'+(active.view===id ? ' aria-current="page"' : "")+'>'+icon(graphic)+label+'</a>').join("");
    rail.innerHTML = '<div><div class="rail-heading">Walkthrough</div><nav class="rail-nav" aria-label="Walkthrough chapters">'+chapters.map((chapter) => {
      const current = active.view === "guide" && active.chapter === chapter.id && isOpen(chapter.id);
      const n = two(chapter.id);
      if (!isOpen(chapter.id)) return '<button class="chapter-link locked" type="button" data-action="reveal" data-value="'+chapter.id+'"><span class="number">'+n+'</span><span>Chapter '+n+'</span>'+icon("lock")+'<span class="sr-only"> · spoilers hidden</span></button>';
      const complete = chapter.groups.every((group) => group.rows.every(isChecked));
      return '<a class="chapter-link" href="#guide/'+chapter.id+'"'+(current ? ' aria-current="page"' : "")+'><span class="number">'+n+'</span><span>'+esc(chapter.title)+'</span>'+icon(complete ? "check" : "right")+'</a>';
    }).join("")+'</nav></div><div class="rail-bottom"><div class="spoiler-card">'+icon(state.spoilers ? "lock" : "unlock")+'<div><strong>Spoiler protection '+(state.spoilers ? "on" : "off")+'</strong><p>'+(state.spoilers ? "Chapters past "+state.ceiling+" are hidden." : "All chapters are visible.")+'</p><button class="text-button" type="button" data-action="settings">Change settings</button></div></div><div class="rail-credit">Nintendo Switch · 2019 remake</div></div>';
  }
  function rowHTML(row, prefix, origin = false) {
    const tag = primaryTag(row);
    const id = prefix+"-"+row.id;
    const current = isChecked(row);
    const badges = [tag,...row.tags.filter((entry) => entry !== tag && ["heart","shell","chest","bottle","container"].includes(entry))];
    return '<div class="route-row'+(current ? " completed" : "")+(highlighted===row.id ? " highlight" : "")+'" id="entry-'+row.id+'"><input id="'+id+'" type="checkbox" data-check="'+row.id+'"'+(current ? " checked" : "")+'><div><label for="'+id+'">'+esc(row.title)+'</label><p>'+esc(row.text)+'</p></div><div class="row-meta">'+badges.map((entry) => '<span class="tag '+entry+'">'+cats[entry][1]+'</span>').join("")+(origin ? '<a class="origin" href="#guide/'+row.chapter+'/'+row.id+'">Chapter '+row.chapter+'</a>' : "")+'</div></div>';
  }
  function groupHTML(group, rows, index, filtered, origin = false) {
    const isGroupOpen = filtered || (opened.get(group.key) ?? index === 0) || rows.some((row) => highlighted === row.id);
    const graphic = group.icon ?? (rows.some((row) => row.tags.includes("chest")) ? "chest" : (group.location?.includes("Dampé") ? "grid" : "pin"));
    return '<details class="route-group" data-section="'+group.key+'"'+(isGroupOpen ? " open" : "")+'><summary><span class="group-icon">'+icon(graphic)+'</span><span><h3>'+esc(group.title)+'</h3><small>'+esc(group.location)+'</small></span><span class="group-count">'+checkedCount(rows)+' / '+rows.length+'</span>'+icon("down").replace("svg-icon","svg-icon caret")+'</summary><div class="route-list">'+rows.map((row) => rowHTML(row,group.key,origin)).join("")+'</div></details>';
  }
  function sourcesHTML(items) {
    return '<details class="sources"><summary>Sources and maps</summary><ul>'+items.map(([label,url]) => '<li><a href="'+esc(url)+'"'+(url.startsWith("#") ? "" : ' target="_blank" rel="noopener noreferrer"')+'>'+esc(label)+'</a></li>').join("")+'</ul></details>';
  }
  const passesStatus = (row, value) => value === "all" || (value === "done") === isChecked(row);
  const options = (choices,value) => choices.map(([key,label]) => '<option value="'+esc(key)+'"'+(String(value)===String(key) ? " selected" : "")+'>'+esc(label)+'</option>').join("");
  function select(id, label, choices, value, bare = false) {
    return '<label class="field" for="'+id+'"><span'+(bare ? ' class="sr-only"' : '')+'>'+label+'</span><select id="'+id+'" class="select">'+options(choices,value)+'</select></label>';
  }
  function chip(label, action, value, current) {
    return '<button class="chip" type="button" data-action="'+action+'" data-value="'+value+'" aria-pressed="'+(value===current)+'">'+label+'</button>';
  }
  const statusOptions = [["all","All statuses"],["todo","Unfinished"],["done","Completed"]];
  const noResults = (message) => '<div class="empty">'+message+'</div>';

  function renderGuide() {
    if (!isOpen(active.chapter)) {
      main.innerHTML = crumbs("Chapter "+active.chapter)+'<div class="page-heading"><h1>Chapter '+active.chapter+' is hidden</h1><p>Reveal through this chapter when you’re ready.</p></div>'+btn("Reveal chapter","reveal","", "unlock",active.chapter)+' '+linkButton("Back to your guide","#guide/"+state.ceiling);
      return;
    }
    const chapter = chapters[active.chapter-1];
    const rows = chapter.groups.flatMap((group) => group.rows);
    const done = checkedCount(rows);
    const groups = chapter.groups.map((group) => ({...group, shown: group.rows.filter((row) => (routeFilter === "all" || row.tags.includes(routeFilter)) && passesStatus(row,routeStatus))})).filter((group) => group.shown.length);
    const labels = [["all","All steps"],["story","Route steps"],["heart","Hearts"],["shell","Seashells"],["chest","Chests"],["trade","Trades"]].filter(([key]) => key === "all" || rows.some((row) => row.tags.includes(key)));
    const next = chapter.id < 9 ? (isOpen(chapter.id+1) ? linkButton("Next chapter","#guide/"+(chapter.id+1),"","arrow") : btn("Reveal next chapter","reveal","","unlock",chapter.id+1)) : linkButton("View progress","#dashboard","", "chart");
    main.innerHTML = crumbs(chapter.title,"Link’s Awakening")+
      '<section class="hero'+(chapter.id===1 ? " first" : "")+'"><div class="hero-content"><div class="hero-meta"><span class="kicker">Chapter '+two(chapter.id)+' / 09</span><span>'+esc(chapter.region)+'</span></div><h1>'+esc(chapter.title)+'</h1><p>'+esc(chapter.intro)+'</p><div class="hero-actions">'+btn(done ? "Resume route" : "Start walkthrough","resume","gold","play")+linkButton("Open checklist","#checklist/all/"+chapter.id,"ghost","checkList")+'</div></div></section>'+
      '<section class="stats" aria-label="Progress summary">'+stat("overall")+stat("heart")+stat("shell")+deathStat()+'</section>'+
      '<section id="route" aria-labelledby="route-title"><div class="subhead"><div><h2 id="route-title">Chapter route</h2><p>'+done+' of '+rows.length+' steps complete</p></div><button class="text-link" type="button" data-action="expand">'+icon("down")+'<span>Expand all</span></button></div>'+
      '<div class="toolbar"><div class="chips" aria-label="Route categories">'+labels.map(([id,label]) => chip(label,"route-filter",id,routeFilter)).join("")+'</div>'+select("route-status","Route completion status",statusOptions,routeStatus,true)+'</div>'+
      (groups.length ? groups.map((group,index) => groupHTML(group,group.shown,index,routeFilter!=="all" || routeStatus!=="all")).join("") : noResults("No steps match these filters."))+
      '<div class="end-nav"><span>'+(chapter.id > 1 ? linkButton("Previous chapter","#guide/"+(chapter.id-1),"outline","left") : "")+'</span>'+next+'</div></section>'+
      sourcesHTML([...chapter.sources,["Heart Pieces, shells and side-quest sources","#sources"]]);
  }
  function matchingRows() {
    const needle = query.trim().toLocaleLowerCase();
    return allRows.filter((row) => isOpen(row.chapter) &&
      (collectionFilter === "all" || row.tags.includes(collectionFilter)) &&
      (collectionChapter === "all" || row.chapter === Number(collectionChapter)) &&
      passesStatus(row,collectionStatus) &&
      (!needle || [row.title,row.text,row.location,row.group,...row.tags.map((tag)=>cats[tag][0])].join(" ").toLocaleLowerCase().includes(needle)));
  }
  function renderResults() {
    const rows = matchingRows();
    const list = document.querySelector("#checklist-results");
    if (!list) return;
    document.querySelector("#results-count").textContent = rows.length+" "+(rows.length === 1 ? "match" : "matches");
    list.innerHTML = rows.length ? chapters.filter((chapter) => isOpen(chapter.id)).map((chapter) => {
      const here = rows.filter((row) => row.chapter === chapter.id);
      return here.length ? groupHTML({key:"index-"+chapter.id,title:chapter.title,location:"Chapter "+two(chapter.id),icon:"book"},here,0,true,true) : "";
    }).join("") : noResults("Nothing matches. Try changing a filter or search term.");
  }
  function renderChecklist() {
    const visible = allRows.filter((row) => isOpen(row.chapter));
    const top = [["all","All entries"],["heart","Heart Pieces"],["shell","Seashells"],["chest","Chests"],["trade","Trades"],["mini","Mini-games"],["challenge","Chambers"]];
    main.innerHTML = crumbs("Checklist")+'<header class="page-heading"><h1>Completion checklist</h1><p>Search by item, location or activity. Checks are shared with the walkthrough.</p></header>'+
      (state.spoilers && state.ceiling<9 ? '<div class="callout">'+icon("lock")+'<span>Showing chapters 1–'+state.ceiling+' only. Later entries unlock as you reveal chapters.</span></div>' : "")+
      '<div class="chips" aria-label="Checklist categories">'+top.map(([id,label]) => chip(label,"checklist-filter",id,collectionFilter)).join("")+'</div>'+
      '<div class="filters"><label class="search" for="search">'+icon("search")+'<span class="sr-only">Search entries</span><input type="search" id="search" placeholder="Search items or locations" value="'+esc(query)+'"></label>'+
      select("collection-category","Category",[["all","All categories"],...Object.entries(cats).map(([id,[name]])=>[id,name])],collectionFilter)+
      select("collection-chapter","Chapter",[["all","All revealed"],...chapters.filter((chapter)=>isOpen(chapter.id)).map((chapter)=>[chapter.id,"Chapter "+chapter.id])],collectionChapter)+
      select("collection-status","Status",statusOptions,collectionStatus)+btn("Clear","clear-filters")+'</div>'+
      '<div class="subhead"><p id="results-count" role="status"></p><p>'+checkedCount(visible)+' of '+visible.length+' revealed entries checked</p></div><div id="checklist-results"></div>';
    renderResults();
  }
  function runPanel() {
    const run = state.runs[state.mode];
    const mode = modeNames[state.mode];
    let message = "No deaths logged. Compare this count with the grave icon on your Switch save-select screen.";
    if (run.deaths) message = "A Game Over ends this deathless attempt. Your collection checklist still works for this file.";
    if (run.cleared) message = run.deaths ? "Clear recorded with deaths." : "Zero-death clear recorded for "+mode+" mode.";
    return '<section id="deathless" class="panel"><h2>Deathless run</h2><div class="run-mode" aria-label="Run mode">'+Object.entries(modeNames).map(([id,label])=>chip(label,"mode",id,state.mode)).join("")+'</div>'+
      '<div class="run-number">'+run.deaths+'<small>'+(run.deaths===1 ? "death" : "deaths")+'</small></div><p>'+message+'</p><div class="controls">'+
      btn("Log death","death-plus","", "plus")+
      '<button class="button outline" data-action="death-minus" type="button"'+(run.deaths===0 ? " disabled" : "")+'>'+icon("minus")+'Undo death</button>'+
      btn(run.cleared ? "Undo clear" : "Record clear","run-clear")+
      btn("Reset this run","run-reset")+'</div>'+
      '<p>Log a Game Over. Secret Medicine can revive you automatically without adding a death. Use bottled fairies before health reaches zero.</p>'+
      '<p>Normal and Hero runs are logged separately. The collection checklist is shared.</p></section>';
  }
  function renderDashboard() {
    const total = coreRows.length;
    const done = checkedCount(coreRows);
    const visible = chapters.filter((chapter) => isOpen(chapter.id));
    main.innerHTML = crumbs("Progress")+'<header class="page-heading"><h1>Your progress</h1><p>Track completion across the island and log a deathless attempt.</p><span class="inline-stat">'+pct(done,total)+'% complete · '+done+' of '+total+' entries</span></header>'+
      '<div class="dashboard-grid"><div><section class="panel"><h2>Chapter progress</h2><p>Open a revealed chapter to resume its route.</p>'+visible.map((chapter) => {
        const rows = chapter.groups.flatMap((group) => group.rows);
        return '<a class="chapter-progress" href="#guide/'+chapter.id+'"><small>'+two(chapter.id)+'</small><strong>'+esc(chapter.title)+'</strong>'+progress(checkedCount(rows),rows.length,chapter.title)+'<small>'+checkedCount(rows)+' / '+rows.length+'</small></a>';
      }).join("")+(state.spoilers && state.ceiling<9 ? '<p>'+(9-state.ceiling)+' chapters hidden by spoiler protection.</p>' : "")+'</section>'+
      '<section class="panel"><h2>Progress backup</h2><p>Progress lives in this browser. Export a backup to move it to another device or keep a copy.</p><div class="controls">'+btn("Export progress","export")+btn("Import progress","settings")+'</div></section></div><div>'+runPanel()+'</div></div>'+
      '<section class="panel"><div class="subhead"><div><h2>By category</h2><p>Category totals include the full guide. Optional amiibo and the deathless log sit outside overall completion.</p></div></div><div class="category-board">'+Object.keys(cats).filter((id)=>id!=="story").map(stat).join("")+'</div></section>';
  }
  function renderSources() {
    main.innerHTML = crumbs("Sources")+'<header class="page-heading"><h1>Sources and maps</h1><p>These references cover the 2019 Nintendo Switch remake. The external guides may reveal later chapters.</p></header>'+
      '<section class="panel"><h2>Collectibles, systems and side quests</h2><ul class="source-list">'+window.KOHOLINT_SOURCES.map(([label,url])=>'<li><a href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">'+esc(label)+'</a></li>').join("")+'</ul></section>'+
      '<section class="panel source-panel"><h2>Walkthrough references</h2>'+chapters.filter((chapter)=>isOpen(chapter.id)).map((chapter)=>'<div><h3>'+esc(chapter.title)+'</h3><ul class="source-list">'+chapter.sources.map(([label,url])=>'<li><a href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">'+esc(label)+'</a></li>').join("")+'</ul></div>').join("")+'</section>';
  }

  function draw() {
    renderNav();
    saved();
    if (active.view === "checklist") renderChecklist();
    else if (active.view === "dashboard") renderDashboard();
    else if (active.view === "sources") renderSources();
    else renderGuide();
  }
  function closeMenu(restore = false) {
    rail.classList.remove("open");
    scrim.hidden = true;
    menuToggle.setAttribute("aria-expanded","false");
    menuToggle.setAttribute("aria-label","Open chapters");
    if (restore) menuToggle.focus();
  }
  function parseRoute(initial = false) {
    const [view,part,third] = location.hash.slice(1).split("/");
    const prior = active;
    highlighted = "";
    if (view === "checklist") {
      active = {view:"checklist",chapter:state.chapter};
      collectionFilter = Object.hasOwn(cats,part) ? part : "all";
      collectionChapter = third && isOpen(readChapter(third)) ? String(readChapter(third)) : "all";
      collectionStatus = "all";
      query = "";
    } else if (view === "dashboard" || view === "sources") {
      active = {view,chapter:state.chapter};
    } else {
      active = {view:"guide",chapter:readChapter(part,state.chapter)};
      if (isOpen(active.chapter) && active.chapter !== state.chapter) {
        state.chapter = active.chapter;
        persist();
      }
      if (prior.view !== "guide" || prior.chapter !== active.chapter || third) {
        routeFilter = "all";
        routeStatus = "all";
      }
      if (third && byId.get(third)?.chapter === active.chapter && isOpen(active.chapter)) highlighted = third;
    }
    closeMenu();
    draw();
    const target = highlighted ? document.querySelector("#entry-"+highlighted) : part === "deathless" && view === "dashboard" ? document.querySelector("#deathless") : null;
    if (target) target.scrollIntoView({block:"start"});
    else if (!initial) {
      window.scrollTo(0,0);
      main.focus({preventScroll:true});
    }
  }
  function refreshFocus(key) {
    draw();
    if (key) {
      const node = key.id ? document.getElementById(key.id) : document.querySelector('[data-action="'+key.action+'"]'+(key.value ? '[data-value="'+key.value+'"]' : ""));
      node?.focus({preventScroll:true});
    }
  }
  function resume() {
    const chapter = chapters[active.chapter-1];
    const group = chapter.groups.find((item) => item.rows.some((row) => !isChecked(row)));
    routeFilter = "all";
    routeStatus = "all";
    highlighted = group?.rows.find((row) => !isChecked(row))?.id ?? "";
    if (group) opened.set(group.key,true);
    draw();
    const element = highlighted ? document.getElementById("entry-"+highlighted) : document.getElementById("route");
    element?.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",block:"start"});
    (element?.querySelector("input") ?? element?.querySelector("button"))?.focus({preventScroll:true});
  }
  function displayDialog(title, body) {
    if (!dialog.open) lastDialogTrigger = document.activeElement;
    dialog.innerHTML = '<h2 id="dialog-title">'+esc(title)+'</h2><span class="close">'+iconButton("Close dialog","close-dialog","x")+'</span>'+body;
    if (!dialog.open) dialog.showModal();
    dialog.querySelector("[autofocus], input, select, .controls button")?.focus();
  }
  function hideDialog() {
    if (dialog.open) dialog.close();
  }
  function settings() {
    importState = undefined;
    const ceilings = chapters.map((chapter) => [chapter.id,"Chapter "+chapter.id]);
    displayDialog("Guide settings",'<p>Choose how far the guide can reveal. Checklist searches follow the same spoiler setting.</p>'+
      '<form id="spoiler-form"><label><input type="checkbox" name="spoilers"'+(state.spoilers ? " checked" : "")+'> Hide later chapters</label>'+
      '<label class="field">Reveal through<select class="select" name="ceiling">'+options(ceilings,state.ceiling)+'</select></label>'+
      '<div class="controls"><button type="submit" class="button">Save settings</button></div></form>'+
      '<hr><p>Export a copy of all checks, spoiler settings and run logs. Importing replaces the current progress.</p>'+
      (storageError ? '<p class="inline-error">Browser storage is unavailable. Export a backup before closing this tab.</p>' : '')+
      '<label class="field" for="import-file">Import progress backup<input id="import-file" type="file" accept=".json,application/json"></label><p id="import-status" role="status"></p>'+
      '<div class="controls">'+btn("Export progress","export")+'<button type="button" class="button outline" data-action="import" id="import-button" disabled>Replace with backup</button></div>');
  }
  function confirm(title, explanation, label, action, danger = false) {
    confirmAction = action;
    displayDialog(title,'<p>'+esc(explanation)+'</p><div class="controls">'+btn(label,"confirmed",danger ? "danger" : "")+btn("Cancel","close-dialog")+'</div>');
  }
  function exportProgress() {
    const href = URL.createObjectURL(new Blob([JSON.stringify(state,null,2)+"\n"],{type:"application/json"}));
    const link = document.createElement("a");
    link.href = href;
    link.download = "koholint-progress.json";
    link.click();
    setTimeout(() => URL.revokeObjectURL(href),1000);
    speak("Progress backup exported.");
  }

  document.addEventListener("click",(event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const {action,value} = button.dataset;
    const run = state.runs[state.mode];
    if (action === "toggle-menu") {
      if (rail.classList.contains("open")) closeMenu(true);
      else {
        rail.classList.add("open");
        scrim.hidden = false;
        menuToggle.setAttribute("aria-expanded","true");
        menuToggle.setAttribute("aria-label","Close chapters");
        (rail.querySelector('[aria-current="page"]') ?? rail.querySelector(".chapter-link"))?.focus();
      }
    }
    if (action === "settings") settings();
    if (action === "close-dialog") hideDialog();
    if (action === "reveal") {
      const next = readChapter(value);
      confirm("Reveal through Chapter "+next+"?","This also reveals earlier chapters in navigation, checklist and search.","Reveal and open",() => {
        state.ceiling = Math.max(next,state.ceiling);
        state.chapter = next;
        persist();
        if (location.hash === "#guide/"+next) parseRoute();
        else location.hash = "#guide/"+next;
      });
    }
    if (action === "confirmed") {
      const complete = confirmAction;
      hideDialog();
      complete?.();
    }
    if (action === "resume") resume();
    if (action === "expand") {
      const groups = [...main.querySelectorAll(".route-group")];
      const expand = groups.some((group) => !group.open);
      for (const group of groups) {
        group.open = expand;
        opened.set(group.dataset.section,expand);
      }
      button.querySelector("span").textContent = expand ? "Collapse all" : "Expand all";
    }
    if (action === "route-filter") {
      routeFilter = value;
      highlighted = "";
      refreshFocus({action,value});
    }
    if (action === "checklist-filter") {
      collectionFilter = value;
      refreshFocus({action,value});
    }
    if (action === "clear-filters") {
      collectionFilter = collectionStatus = collectionChapter = "all";
      query = "";
      draw();
      document.querySelector("#search")?.focus();
    }
    if (action === "mode") {
      state.mode = value;
      persist();
      refreshFocus({action,value});
    }
    if (action === "death-plus" || action === "death-minus") {
      run.deaths = action === "death-plus" ? Math.min(Number.MAX_SAFE_INTEGER,run.deaths+1) : Math.max(0,run.deaths-1);
      persist();
      refreshFocus({action:run.deaths === 0 ? "death-plus" : action});
      speak(run.deaths+" deaths logged.");
    }
    if (action === "run-clear") {
      run.cleared = !run.cleared;
      persist();
      refreshFocus({action});
      speak(run.cleared ? "Run clear recorded." : "Run clear removed.");
    }
    if (action === "run-reset") confirm("Reset the "+modeNames[state.mode]+" run?","The death count and clear status for this mode will be reset.","Reset run",() => {
      state.runs[state.mode] = blankRun();
      persist();
      refreshFocus({action});
    },true);
    if (action === "export") exportProgress();
    if (action === "import" && importState) {
      state = importState;
      persist();
      hideDialog();
      const view = active.view === "guide" ? "#guide/"+(isOpen(state.chapter) ? state.chapter : state.ceiling) : "#"+active.view;
      if (location.hash === view) parseRoute();
      else location.hash = view;
      speak("Progress backup loaded.");
    }
  });

  document.addEventListener("change",async (event) => {
    const node = event.target;
    const id = node.id;
    if (node.dataset.check) {
      if (node.checked) state.checks[node.dataset.check] = true;
      else delete state.checks[node.dataset.check];
      persist();
      refreshFocus({id});
      if (!document.getElementById(id)) {
        document.querySelector(active.view === "checklist" ? "#collection-status" : "#route-status")?.focus({preventScroll:true});
      }
      speak(node.checked ? "Checked and saved." : "Unchecked and saved.");
    }
    if (id === "route-status") {
      routeStatus = node.value;
      highlighted = "";
      refreshFocus({id});
    }
    if (id === "collection-category" || id === "collection-chapter" || id === "collection-status") {
      if (id === "collection-category") collectionFilter = node.value;
      if (id === "collection-chapter") collectionChapter = node.value;
      if (id === "collection-status") collectionStatus = node.value;
      refreshFocus({id});
    }
    if (id === "import-file") {
      const feedback = document.querySelector("#import-status");
      const accept = document.querySelector("#import-button");
      importState = undefined;
      accept.disabled = true;
      const file = node.files[0];
      if (!file) return;
      try {
        if (file.size > 1000000) throw new Error("The backup is too large.");
        const parsed = validateState(JSON.parse(await file.text()));
        if (!feedback.isConnected || node.files[0] !== file) return;
        importState = parsed;
        feedback.classList.remove("inline-error");
        feedback.textContent = Object.keys(parsed.checks).length+" checked entries found. Select Replace with backup to load them.";
        accept.disabled = false;
      } catch {
        if (!feedback.isConnected || node.files[0] !== file) return;
        feedback.classList.add("inline-error");
        feedback.textContent = "Couldn’t read this Koholint progress backup.";
      }
    }
  });
  document.addEventListener("input",(event) => {
    if (event.target.id === "search") {
      query = event.target.value;
      renderResults();
    }
  });
  document.addEventListener("submit",(event) => {
    if (event.target.id !== "spoiler-form") return;
    event.preventDefault();
    const fields = new FormData(event.target);
    state.spoilers = fields.has("spoilers");
    state.ceiling = readChapter(fields.get("ceiling"));
    if (!isOpen(state.chapter)) state.chapter = state.ceiling;
    if (collectionChapter !== "all" && !isOpen(Number(collectionChapter))) collectionChapter = "all";
    persist();
    hideDialog();
    if (active.view === "guide" && !isOpen(active.chapter)) location.hash = "#guide/"+state.chapter;
    else draw();
    speak("Spoiler settings saved.");
  });
  document.addEventListener("toggle",(event) => {
    if (event.target.matches?.(".route-group[data-section]") && event.target.isConnected && active.view==="guide" && routeFilter==="all" && routeStatus==="all") {
      opened.set(event.target.dataset.section,event.target.open);
    }
  },true);
  document.addEventListener("keydown",(event) => {
    if (event.key === "Escape" && rail.classList.contains("open") && !dialog.open) closeMenu(true);
  });
  dialog.addEventListener("close",() => {
    if (lastDialogTrigger?.isConnected) lastDialogTrigger.focus({preventScroll:true});
    lastDialogTrigger = undefined;
    confirmAction = undefined;
  });
  window.addEventListener("hashchange",() => {
    if (location.hash === "#main") {
      main.focus();
      return;
    }
    parseRoute();
  });
  window.addEventListener("storage",(event) => {
    if (event.key === storageKey) {
      state = loadState();
      if (!isOpen(active.chapter) && active.view === "guide") location.hash = "#guide/"+state.ceiling;
      else draw();
    }
  });
  parseRoute(true);
})();
