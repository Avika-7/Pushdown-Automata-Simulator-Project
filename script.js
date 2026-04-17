// ─────────────────────────────────────────────
//  PDA LANGUAGE DEFINITIONS
// ─────────────────────────────────────────────

const LANGUAGES = {

  custom: {
    label: "✏ Custom (define your own)",
    desc: "Define your own PDA using the editor below.",
    startState: "",
    acceptStates: [],
    startStack: ["Z"],
    transitions: []
  },

  anbn: {
    label: "aⁿbⁿ",
    desc: "Equal number of a's followed by equal number of b's. n ≥ 1.",
    startState: "q0",
    acceptStates: ["q2"],
    startStack: ["Z"],
    transitions: [
      { state: "q0", input: "a", stackTop: "Z", next: "q0", push: ["A","Z"],  action: "AZ" },
      { state: "q0", input: "a", stackTop: "A", next: "q0", push: ["A","A"],  action: "AA" },
      { state: "q0", input: "b", stackTop: "A", next: "q1", push: [],         action: "ε"  },
      { state: "q1", input: "b", stackTop: "A", next: "q1", push: [],         action: "ε"  },
      { state: "q1", input: "",  stackTop: "Z", next: "q2", push: ["Z"],      action: "Z"  }
    ]
  },

  eqab: {
    label: "equal a's & b's (any order)",
    desc: "Strings with equal a's and b's in any order. Uses stack as ±counter.",
    startState: "q0",
    acceptStates: ["q1"],
    startStack: ["Z"],
    transitions: [
      { state: "q0", input: "a", stackTop: "Z", next: "q0", push: ["A","Z"],  action: "AZ" },
      { state: "q0", input: "a", stackTop: "A", next: "q0", push: ["A","A"],  action: "AA" },
      { state: "q0", input: "a", stackTop: "B", next: "q0", push: [],         action: "ε"  },
      { state: "q0", input: "b", stackTop: "Z", next: "q0", push: ["B","Z"],  action: "BZ" },
      { state: "q0", input: "b", stackTop: "B", next: "q0", push: ["B","B"],  action: "BB" },
      { state: "q0", input: "b", stackTop: "A", next: "q0", push: [],         action: "ε"  },
      { state: "q0", input: "",  stackTop: "Z", next: "q1", push: ["Z"],      action: "Z"  }
    ],
  },

  anbncm: {
    label: "aⁿbⁿcᵐ",
    desc: "Equal a's and b's, followed by any number of c's. n ≥ 1, m ≥ 0.",
    startState: "q0",
    acceptStates: ["q3"],
    startStack: ["Z"],
    transitions: [
      { state: "q0", input: "a", stackTop: "Z", next: "q0", push: ["A","Z"],  action: "AZ" },
      { state: "q0", input: "a", stackTop: "A", next: "q0", push: ["A","A"],  action: "AA" },
      { state: "q0", input: "b", stackTop: "A", next: "q1", push: [],         action: "ε"  },
      { state: "q1", input: "b", stackTop: "A", next: "q1", push: [],         action: "ε"  },
      { state: "q1", input: "c", stackTop: "Z", next: "q2", push: ["Z"],      action: "Z"  },
      { state: "q2", input: "c", stackTop: "Z", next: "q2", push: ["Z"],      action: "Z"  },
      { state: "q2", input: "",  stackTop: "Z", next: "q3", push: ["Z"],      action: "Z"  }
    ]
  },

  anbmcn: {
    label: "aⁿbᵐcⁿ",
    desc: "Equal a's and c's with any number of b's between them. n, m ≥ 0.",
    startState: "q0",
    acceptStates: ["q3"],
    startStack: ["Z"],
    transitions: [
      { state: "q0", input: "a", stackTop: "Z", next: "q0", push: ["A","Z"],  action: "AZ" },
      { state: "q0", input: "a", stackTop: "A", next: "q0", push: ["A","A"],  action: "AA" },

      { state: "q0", input: "b", stackTop: "A", next: "q1", push: ["A"],      action: "A"  },
      { state: "q0", input: "b", stackTop: "Z", next: "q1", push: ["Z"],      action: "Z"  },
      { state: "q1", input: "b", stackTop: "A", next: "q1", push: ["A"],      action: "A"  },
      { state: "q1", input: "b", stackTop: "Z", next: "q1", push: ["Z"],      action: "Z"  },
      { state: "q1", input: "",  stackTop: "Z", next: "q3", push: ["Z"],      action: "Z"  },

      { state: "q1", input: "c", stackTop: "A", next: "q2", push: [],         action: "ε"  },
      { state: "q2", input: "c", stackTop: "A", next: "q2", push: [],         action: "ε"  },
      { state: "q2", input: "",  stackTop: "Z", next: "q3", push: ["Z"],      action: "Z"  }
    ]
  },

  amnbncm: {
    label: "a⁽ᵐ⁺ⁿ⁾bⁿcᵐ",
    desc: "For 'a', b's consume n, c's consume m. m, n > 0.",
    startState: "q0",
    acceptStates: ["q3"],
    startStack: ["Z"],
    transitions: [
      { state: "q0", input: "a", stackTop: "Z", next: "q0", push: ["A","Z"],   action: "AAZ" },
      { state: "q0", input: "a", stackTop: "A", next: "q0", push: ["A","A"],   action: "AAA" },
      { state: "q0", input: "b", stackTop: "A", next: "q1", push: [],              action: "ε"   },
      { state: "q1", input: "b", stackTop: "A", next: "q1", push: [],              action: "ε"   },
      { state: "q1", input: "c", stackTop: "A", next: "q2", push: [],              action: "ε"   },
      { state: "q2", input: "c", stackTop: "A", next: "q2", push: [],              action: "ε"   },
      { state: "q2", input: "",  stackTop: "Z", next: "q3", push: ["Z"],           action: "Z"   }
    ]
  },

  anbmncm: {
    label: "aⁿb⁽ᵐ⁺ⁿ⁾cᵐ",
    desc: "a's push A's; b's first drain A's (n of them), then push B's (m of them); c's drain B's.",
    startState: "q0",
    acceptStates: ["q3"],
    startStack: ["Z"],
    transitions: [
      { state: "q0", input: "a", stackTop: "Z", next: "q0", push: ["A","Z"],  action: "AZ" },
      { state: "q0", input: "a", stackTop: "A", next: "q0", push: ["A","A"],  action: "AA" },
      
      { state: "q0", input: "b", stackTop: "A", next: "q1", push: [],         action: "ε"  },
      { state: "q1", input: "b", stackTop: "A", next: "q1", push: [],         action: "ε"  },
      
      { state: "q1", input: "b", stackTop: "Z", next: "q1", push: ["B","Z"],  action: "BZ" },
      { state: "q1", input: "b", stackTop: "B", next: "q1", push: ["B","B"],  action: "BB" },

      { state: "q1", input: "c", stackTop: "B", next: "q2", push: [],         action: "ε"  },
      { state: "q2", input: "c", stackTop: "B", next: "q2", push: [],         action: "ε"  },
      { state: "q2", input: "",  stackTop: "Z", next: "q3", push: ["Z"],      action: "Z"  }
    ]
  },

  anbmcnm: {
    label: "aⁿbᵐc⁽ⁿ⁺ᵐ⁾",
    desc: "a's push A's, b's push B's; c's pop B's first then A's. Total c's = n+m. n, m ≥ 0",
    startState: "q0",
    acceptStates: ["q2"],
    startStack: ["Z"],
    transitions: [
      { state: "q0", input: "a", stackTop: "Z", next: "q0", push: ["A","Z"],  action: "AZ" },
      { state: "q0", input: "a", stackTop: "A", next: "q0", push: ["A","A"],  action: "AA" },

      { state: "q0", input: "b", stackTop: "A", next: "q1", push: ["B","A"],  action: "BA" },
      { state: "q0", input: "b", stackTop: "Z", next: "q0", push: ["B","Z"],  action: "BZ" },
      { state: "q1", input: "b", stackTop: "B", next: "q1", push: ["B","B"],  action: "BB" },

      { state: "q0", input: "c", stackTop: "B", next: "q1", push: [],         action: "ε"  },
      { state: "q1", input: "c", stackTop: "B", next: "q1", push: [],         action: "ε"  },
      { state: "q0", input: "c", stackTop: "A", next: "q1", push: [],         action: "ε"  },
      { state: "q1", input: "c", stackTop: "A", next: "q1", push: [],         action: "ε"  },

      { state: "q1", input: "",  stackTop: "Z", next: "q2", push: ["Z"],      action: "Z"  }
    ]
  },

  oddpal: {
    label: "odd palindrome (wcwᴿ)",
    desc: "Odd-length palindromes over {a,b,c} e.g. abbcbba.",
    startState: "q0",
    acceptStates: ["q2"],
    startStack: ["Z"],
    transitions: [
      { state: "q0", input: "a", stackTop: "Z", next: "q0", push: ["A","Z"],  action: "AZ" },
      { state: "q0", input: "b", stackTop: "Z", next: "q0", push: ["B","Z"],  action: "BZ" },
      { state: "q0", input: "a", stackTop: "A", next: "q0", push: ["A","A"],  action: "AA" },
      { state: "q0", input: "a", stackTop: "B", next: "q0", push: ["A","B"],  action: "AB" },
      { state: "q0", input: "b", stackTop: "A", next: "q0", push: ["B","A"],  action: "BA" },
      { state: "q0", input: "b", stackTop: "B", next: "q0", push: ["B","B"],  action: "BB" },

      { state: "q0", input: "c", stackTop: "A", next: "q1", push: ["A"],  action: "A" },
      { state: "q0", input: "c", stackTop: "B", next: "q1", push: ["B"],  action: "B" },

      //start popping matching symbols
      { state: "q1", input: "a", stackTop: "A", next: "q1", push: [],         action: "ε"  },
      { state: "q1", input: "b", stackTop: "B", next: "q1", push: [],         action: "ε"  },
      { state: "q1", input: "",  stackTop: "Z", next: "q2", push: ["Z"],      action: "Z"  }
    ],
  },

  anb2n: {
    label: "aⁿb²ⁿ",
    desc: "Each 'a' pushes two A's; each 'b' pops one. Total b's must be exactly 2n.",
    startState: "q0",
    acceptStates: ["q2"],
    startStack: ["Z"],
    transitions: [
      { state: "q0", input: "a", stackTop: "Z", next: "q0", push: ["A","A","Z"],   action: "AAZ" },
      { state: "q0", input: "a", stackTop: "A", next: "q0", push: ["A","A","A"],   action: "AAA" },
      { state: "q0", input: "b", stackTop: "A", next: "q1", push: [],              action: "ε"   },
      { state: "q1", input: "b", stackTop: "A", next: "q1", push: [],              action: "ε"   },
      { state: "q1", input: "",  stackTop: "Z", next: "q2", push: ["Z"],           action: "Z"   }
    ]
  },

  evenPalindrome: {
  label: "even palindrome (wwᴿ)",
  desc: "Even-length palindrome using NPDA.",
  startState: "q0",
  acceptStates: ["q2"],
  startStack: ["Z"],
  transitions: [

    // push phase
    { state:"q0", input:"a", stackTop:"Z", next:"q0", push:["A","Z"], action:"AZ" },
    { state:"q0", input:"b", stackTop:"Z", next:"q0", push:["B","Z"], action:"BZ" },
    { state:"q0", input:"a", stackTop:"A", next:"q0", push:["A","A"], action:"AA" },
    { state:"q0", input:"b", stackTop:"A", next:"q0", push:["B","A"], action:"BA" },
    { state:"q0", input:"a", stackTop:"B", next:"q0", push:["A","B"], action:"AB" },
    { state:"q0", input:"b", stackTop:"B", next:"q0", push:["B","B"], action:"BB" },

    // nondeterministic switch
    { state:"q0", input:"", stackTop:"A", next:"q1", push:["A"], action:"A" },
    { state:"q0", input:"", stackTop:"B", next:"q1", push:["B"], action:"B" },
    { state:"q0", input:"", stackTop:"Z", next:"q1", push:["Z"], action:"Z" },

    // pop phase
    { state:"q1", input:"a", stackTop:"A", next:"q1", push:[], action:"ε" },
    { state:"q1", input:"b", stackTop:"B", next:"q1", push:[], action:"ε" },

    // accept
    { state:"q1", input:"", stackTop:"Z", next:"q2", push:["Z"], action:"Z" }
  ]
}

};

// ─────────────────────────────────────────────
//  RUNTIME STATE
// ─────────────────────────────────────────────

let configs = [];
let currentLangKey = "anbn";
let currentState, remainingInput, stack;
let simStarted = false, simDone = false;
let lastOp = null, fullInput = "";

function currentLang() {
  return currentLangKey === "custom" ? buildCustomLang() : LANGUAGES[currentLangKey];
}

// ─────────────────────────────────────────────
//  CUSTOM BUILDER
// ─────────────────────────────────────────────

function buildCustomLang() {
  const rows = document.querySelectorAll("#transBody tr");
  const transitions = [];
  rows.forEach(row => {
    const c = row.querySelectorAll("input");
    const state    = c[0].value.trim();
    const input    = c[1].value.trim() === "ε" ? "" : c[1].value.trim();
    const stackTop = c[2].value.trim();
    const next     = c[3].value.trim();
    const pushRaw  = c[4].value.trim();
    if (!state || !stackTop || !next) return;
    const push = (pushRaw === "" || pushRaw === "ε")
      ? [] : pushRaw.split(",").map(s => s.trim()).filter(Boolean);
    transitions.push({ state, input, stackTop, next, push, action: push.length ? push.join("") : "ε" });
  });
  return {
    label: "Custom", desc: "User-defined PDA",
    startState:   document.getElementById("customStart").value.trim(),
    acceptStates: document.getElementById("customAccept").value.trim().split(",").map(s=>s.trim()).filter(Boolean),
    startStack:  [document.getElementById("customStackSym").value.trim() || "Z"],
    transitions
  };
}

function addTransRow(prefill) {
  const tbody = document.getElementById("transBody");
  const row   = document.createElement("tr");
  const vals  = prefill || ["","","","",""];
  const ph    = ["state","input / ε","stack top","next state","push (a,b) or ε"];
  row.innerHTML = vals.map((v,i) =>
    `<td><input type="text" value="${v}" placeholder="${ph[i]}" /></td>`
  ).join("") +
  `<td><button class="btn-del" onclick="this.closest('tr').remove()">✕</button></td>`;
  tbody.appendChild(row);
}

function clearCustomEditor() {
  document.getElementById("transBody").innerHTML = "";
  document.getElementById("customStart").value   = "";
  document.getElementById("customAccept").value  = "";
  document.getElementById("customStackSym").value = "Z";
}

function loadPresetIntoEditor(key) {
  if (!key || !LANGUAGES[key]) return;
  const lang = LANGUAGES[key];
  clearCustomEditor();
  document.getElementById("customStart").value    = lang.startState;
  document.getElementById("customAccept").value   = lang.acceptStates.join(", ");
  document.getElementById("customStackSym").value = lang.startStack[0] || "Z";
  lang.transitions.forEach(t => addTransRow([
    t.state, t.input === "" ? "ε" : t.input, t.stackTop, t.next,
    t.push.length ? t.push.join(",") : "ε"
  ]));
}

// ─────────────────────────────────────────────
//  SELECTOR
// ─────────────────────────────────────────────

function buildSelector() {
  const sel = document.getElementById("langSelect");
  Object.entries(LANGUAGES).forEach(([key, lang], i) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = key === "custom" ? lang.label : `${i}. ${lang.label}`;
    sel.appendChild(opt);
  });
  sel.value = currentLangKey;
  updateDesc(); syncEditor();
}

function onLangChange() {
  currentLangKey = document.getElementById("langSelect").value;
  updateDesc(); syncEditor(); resetSimulation();
}

function updateDesc() {
  const d = currentLangKey === "custom"
    ? "Define your own PDA using the editor below."
    : LANGUAGES[currentLangKey].desc;
  document.getElementById("langDesc").textContent = d;
}

function syncEditor() {
  const ed = document.getElementById("customEditor");
  if (currentLangKey === "custom") {
    ed.style.display = "block";
    if (document.getElementById("transBody").rows.length === 0) addTransRow();
  } else {
    ed.style.display = "none";
  }
}

// ─────────────────────────────────────────────
//  SIMULATION HELPERS
// ─────────────────────────────────────────────

function isAccepted() {
  const lang = currentLang();
  if (lang.acceptFn) return lang.acceptFn(currentState, remainingInput, stack, lang.acceptStates);
  return remainingInput === "" && lang.acceptStates.includes(currentState);
}

function getOpType(t) {
  if (!t.push || t.push.length === 0) return "pop";
  if (t.push.length > 1)              return "push";
  return "replace";
}

// ─────────────────────────────────────────────
//  START
// ─────────────────────────────────────────────

function startSimulation() {
  const lang = currentLang();
  if (!lang.startState) { log("⚠ Set a start state first."); return; }
  fullInput = document.getElementById("inputString").value;
  configs = [{
    state: lang.startState,
    input: fullInput,
    stack: [...lang.startStack]
  }];
  simStarted = true;
  simDone = false;
  document.getElementById("log").innerHTML = "";
  document.getElementById("stateStatus").textContent = "";
  log(`▶ ${lang.label} · input: "${fullInput || "ε"}"`);
  updateNPDAUI();
  updateInputDisplay();
}

// ─────────────────────────────────────────────
//  STEP
// ─────────────────────────────────────────────

function stepSimulation() {
  if (!simStarted) { log("⚠ Click START first."); return; }
  if (simDone) return;

  let newConfigs = [];

  configs.forEach(cfg => {

    let sym = cfg.input[0] || "";
    let top = cfg.stack[cfg.stack.length - 1];

    let possible = currentLang().transitions.filter(tr =>
      tr.state === cfg.state &&
      tr.stackTop === top &&
      (tr.input === sym || tr.input === "")
    );

    possible.forEach(t => {
      let newStack = [...cfg.stack];
      newStack.pop();

      for (let i = t.push.length - 1; i >= 0; i--) {
        newStack.push(t.push[i]);
      }

      newConfigs.push({
        state: t.next,
        input: t.input === "" ? cfg.input : cfg.input.slice(1),
        stack: newStack
      });

      log(`(${t.state}, ${t.input || "ε"}, ${t.stackTop}) → (${t.next}, ${t.action})`);
    });
  });

  configs = newConfigs;

  // ACCEPT CHECK
  if (configs.some(cfg =>
    cfg.input === "" &&
    currentLang().acceptStates.includes(cfg.state)
  )) {
    log("🌳 String Accepted!");
    markResult(true);
    simDone = true;
    return;
  }
  if (configs.length === 0) {
    log("👎 Rejected");
    markResult(false);
    simDone = true;
    return;
  }
  updateNPDAUI();
  updateInputDisplay();
}

function updateNPDAUI() {
  if (!configs.length) return;

  const cfg = configs[0]; // show first path

  document.getElementById("state").textContent = cfg.state;
  document.getElementById("remaining").textContent = cfg.input || "ε";

  const sd = document.getElementById("stack");
  sd.innerHTML = "";

  [...cfg.stack].reverse().forEach(s => {
    const el = document.createElement("div");
    el.className = "stack-cell";
    el.textContent = s;
    sd.appendChild(el);
  });
}

// ─────────────────────────────────────────────
//  RUN ALL
// ─────────────────────────────────────────────

function runAll() {
  if (!simStarted) startSimulation();
  let g = 0;
  while (!simDone && g++ < 1000) stepSimulation();
  if (g >= 1000) log("⚠ Max steps reached.");
}

// ─────────────────────────────────────────────
//  RESET
// ─────────────────────────────────────────────

function resetSimulation() {
  configs = [];
  currentState = "—"; remainingInput = ""; stack = [];
  simStarted = false; simDone = false; lastOp = null; fullInput = "";
  document.getElementById("transition").textContent = "—";
  document.getElementById("log").innerHTML = "";
  document.getElementById("inputDisplay").innerHTML = "";
  document.getElementById("stateStatus").textContent = "";
  document.getElementById("stateStatus").className = "state-status";
  updateUI();
  document.getElementById("inputDisplay").innerHTML = "";
}

// ─────────────────────────────────────────────
//  RENDER INPUT
// ─────────────────────────────────────────────

function renderInput(consumed) {
  const div = document.getElementById("inputDisplay");
  if (!fullInput) { div.innerHTML = ""; return; }
  div.innerHTML = fullInput.split("").map((ch, i) => {
    if (i < consumed)   return `<span class="ch-done">${ch}</span>`;
    if (i === consumed) return `<span class="ch-current">${ch}</span>`;
    return `<span class="ch-pending">${ch}</span>`;
  }).join("");
}

// ─────────────────────────────────────────────
//  RESULT BADGE
// ─────────────────────────────────────────────

function markResult(ok) {
  const el = document.getElementById("stateStatus");
  el.textContent = ok ? "✓  ACCEPTED" : "✗  REJECTED";
  el.className = "state-status " + (ok ? "status-accept" : "status-reject");
}

// ─────────────────────────────────────────────
//  UPDATE UI
// ─────────────────────────────────────────────

function updateUI() {
  document.getElementById("state").textContent     = currentState;
  document.getElementById("remaining").textContent = remainingInput || "ε";

  const sd = document.getElementById("stack");
  sd.innerHTML = "";
  if (!stack.length) return;

  [...stack].reverse().forEach((s, i) => {
    const el = document.createElement("div");
    el.className = "stack-cell" + (i === 0 ? " stack-top" : "");
    el.textContent = s;
    if (i === 0 && lastOp === "push")    el.classList.add("anim-push");
    if (i === 0 && lastOp === "replace") el.classList.add("anim-replace");
    sd.appendChild(el);
  });

  if (lastOp === "pop") {
    const g = document.createElement("div");
    g.className = "stack-ghost"; g.textContent = "↑ popped";
    sd.prepend(g);
  }
}

// ─────────────────────────────────────────────
//  LOG
// ─────────────────────────────────────────────

function log(html) {
  const ld = document.getElementById("log");
  const d  = document.createElement("div");
  d.innerHTML = html;
  ld.appendChild(d);
  ld.scrollTop = ld.scrollHeight;
}

// ─────────────────────────────────────────────
//  DRAG SCROLL ON STRIP
// ─────────────────────────────────────────────

function initDragScroll() {
  const strip = document.getElementById("infoStrip");
  if (!strip) return;
  let isDragging = false, startX = 0, scrollLeft = 0;

  strip.addEventListener("mousedown", e => {
    isDragging = true;
    startX     = e.pageX - strip.offsetLeft;
    scrollLeft = strip.scrollLeft;
    strip.classList.add("is-dragging");
  });
  strip.addEventListener("mouseleave", () => { isDragging = false; strip.classList.remove("is-dragging"); });
  strip.addEventListener("mouseup",    () => { isDragging = false; strip.classList.remove("is-dragging"); });
  strip.addEventListener("mousemove",  e => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - strip.offsetLeft;
    strip.scrollLeft = scrollLeft - (x - startX) * 1.4;
  });
}

// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────

window.addEventListener("DOMContentLoaded", () => {
  buildSelector();
  updateUI();
  initDragScroll();
});

function updateInputDisplay() {
  if (!configs.length) return;

  const cfg = configs[0]; // current visible path
  const consumedLength = fullInput.length - cfg.input.length;

  let html = "";

  for (let i = 0; i < fullInput.length; i++) {
    if (i < consumedLength) {
      html += `<span class="ch-done">${fullInput[i]}</span>`;
    } else if (i === consumedLength) {
      html += `<span class="ch-current">${fullInput[i]}</span>`;
    } else {
      html += `<span class="ch-pending">${fullInput[i]}</span>`;
    }
  }

  document.getElementById("inputDisplay").innerHTML = html;
}