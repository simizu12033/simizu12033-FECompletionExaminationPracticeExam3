const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const memoryStore={};
const storage={getItem(k){try{return localStorage.getItem(k)}catch{return memoryStore[k]??null}},setItem(k,v){memoryStore[k]=String(v);try{localStorage.setItem(k,v)}catch{}},removeItem(k){delete memoryStore[k];try{localStorage.removeItem(k)}catch{}}};
const readJSON=(key,fallback)=>{try{return JSON.parse(storage.getItem(key))??fallback}catch{return fallback}};
window.renderRichVisual=q=>{
 const s=q.scene;
 if(s.type==='table')return `<div class="mini-table"><table><thead><tr>${s.head.map(t=>`<th>${esc(t)}</th>`).join('')}</tr></thead><tbody>${s.rows.map(row=>`<tr>${row.map(t=>`<td>${esc(t)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
 if(s.type==='compare')return `<div class="v-compare"><section><h4>${esc(s.leftTitle)}</h4>${s.left.map(t=>`<p>${esc(t)}</p>`).join('')}</section><b>⇄</b><section class="good"><h4>${esc(s.rightTitle)}</h4>${s.right.map(t=>`<p>${esc(t)}</p>`).join('')}</section></div>`;
 return `<div class="v-flow ${s.type==='calc'?'calc-steps':''}">${s.items.map((t,i)=>`${i?'<div class="v-arrow" aria-hidden="true">↓</div>':''}<div class="v-box ${i===s.items.length-1?'focus':''}">${esc(t)}</div>`).join('')}</div>`;
};
