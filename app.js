const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const memoryStore={};
const storage={getItem(k){try{return localStorage.getItem(k)}catch{return memoryStore[k]??null}},setItem(k,v){memoryStore[k]=String(v);try{localStorage.setItem(k,v)}catch{}},removeItem(k){delete memoryStore[k];try{localStorage.removeItem(k)}catch{}}};
const readJSON=(key,fallback)=>{try{return JSON.parse(storage.getItem(key))??fallback}catch{return fallback}};
window.renderRichVisual=q=>`<a class="diagram-link" href="assets/diagrams/q${String(q.n).padStart(2,"0")}.svg" target="_blank" rel="noopener" aria-label="問${q.n}の解説図を拡大"><img class="explanation-diagram" src="assets/diagrams/q${String(q.n).padStart(2,"0")}.svg" alt="${esc(q.title)}の解説図" loading="lazy"><span>図を拡大 ↗</span></a>`;
