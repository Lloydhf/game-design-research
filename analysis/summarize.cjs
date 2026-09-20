const fs = require('node:fs');
function wilson(success, n) {
  if (!n) return null;
  const z = 1.959963984540054, p = success / n, d = 1 + z*z/n;
  const center = (p + z*z/(2*n))/d;
  const half = z*Math.sqrt(p*(1-p)/n + z*z/(4*n*n))/d;
  return [Math.max(0, center-half), Math.min(1, center+half)];
}
function median(values) {
  if (!values.length) return null;
  const v = [...values].sort((a,b)=>a-b), m = Math.floor(v.length/2);
  return v.length%2 ? v[m] : (v[m-1]+v[m])/2;
}
function summarize(rows) {
  if (!Array.isArray(rows)) throw new Error('Input must be an array.');
  const ids = new Set();
  for (const [i,r] of rows.entries()) {
    const fail = message => { throw new Error(`Row ${i+1}: ${message}`); };
    if (!r || typeof r !== 'object') fail('expected an object');
    if (typeof r.session_id !== 'string' || !r.session_id.trim() || ids.has(r.session_id)) fail('missing or duplicate session ID');
    ids.add(r.session_id);
    if (!['A','B'].includes(r.condition)) fail('condition must be A or B');
    for (const k of ['completed','early_exit','assisted','technical_invalid']) if(typeof r[k] !== 'boolean') fail(`${k} must be boolean`);
    if (!Number.isFinite(r.duration_s) || r.duration_s<0 || r.duration_s>300) fail('duration must be 0–300');
    if (!Number.isInteger(r.failures) || r.failures<0) fail('failures must be a nonnegative integer');
    if (r.completed && r.early_exit) fail('completed and early_exit conflict');
    if (!r.completed && !r.technical_invalid && r.duration_s<300 && !r.early_exit) fail('unfinished short session must be an early exit');
    for(const k of ['clarity','fairness','replay']) if(r[k]!==null && (!Number.isInteger(r[k]) || r[k]<1 || r[k]>5)) fail(`${k} must be 1–5 or null`);
    if(!['novice','some','experienced','undisclosed'].includes(r.experience)) fail('invalid experience');
    if(!['keyboard-mouse','controller','touch','undisclosed'].includes(r.device)) fail('invalid device');
  }
  const groups = {};
  for (const condition of ['A','B']) {
    const assigned = rows.filter(r=>r.condition===condition), valid=assigned.filter(r=>!r.technical_invalid);
    const completed=valid.filter(r=>r.completed && !r.assisted);
    const ratings=Object.fromEntries(['clarity','fairness','replay'].map(k=>{
      const answered=valid.map(r=>r[k]).filter(v=>v!==null);
      return [k,{n:answered.length,missing:valid.length-answered.length,median:median(answered)}];
    }));
    groups[condition]={started:assigned.length,technical_exclusions:assigned.length-valid.length,n:valid.length,independent_completions:completed.length,completion_rate:valid.length?completed.length/valid.length:null,wilson_95: wilson(completed.length,valid.length),early_exits:valid.filter(r=>r.early_exit).length,assisted:valid.filter(r=>r.assisted).length,completion_time_median_s_success_only:median(completed.map(r=>r.duration_s)),failures_median:median(valid.map(r=>r.failures)),ratings,experience_counts:Object.fromEntries(['novice','some','experienced','undisclosed'].map(k=>[k,valid.filter(r=>r.experience===k).length]))};
  }
  return {status:rows.length?'Descriptive pilot summary; not causal proof.':'No participant data. No study results.',groups,difference_B_minus_A:groups.A.n && groups.B.n ? groups.B.completion_rate-groups.A.completion_rate:null};
}
module.exports={summarize,wilson};
if(require.main===module){try{if(!process.argv[2])throw new Error('Usage: node analysis/summarize.cjs path/to/private-sessions.json');console.log(JSON.stringify(summarize(JSON.parse(fs.readFileSync(process.argv[2],'utf8'))),null,2));}catch(e){console.error(e.message);process.exitCode=1;}}
