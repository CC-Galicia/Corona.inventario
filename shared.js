/* === InvTrack Pro · shared.js === */
/* ══════════════════════════════════════════════════════
   DEFAULT LOCATIONS — pre-loaded on first init
══════════════════════════════════════════════════════ */
const DEFAULT_LOCATIONS = [
  'EDA0101A','EDA0102A','EDA0103A','EDA0201A','EDA0202A','EDA0203A','EDA0301A','EDA0302A','EDA0303A',
  'EDB0101A','EDB0102A','EDB0103A','EDB0201A','EDB0202A','EDB0203A','EDB0301A','EDB0302A','EDB0303A',
  'ELB0101A','ELB0102A','ELB0103A','ELB0201A','ELB0202A','ELB0203A','ELB0301A','ELB0302A','ELB0303A',
  'EGB0101A','EGB0102A','EGB0103A','EGB0201A','EGB0202A','EGB0203A','EGB0301A','EGB0302A','EGB0303A',
  'EGC0101A','EGC0102A','EGC0103A','EGC0201A','EGC0202A','EGC0203A','EGC0301A','EGC0302A','EGC0303A',
  'ERA0101A','ERA0102A','ERA0103A','ERA0104A','ERA0105A','ERA0201A','ERA0202A','ERA0203A','ERA0204A','ERA0205A',
  'ERA0301A','ERA0302A','ERA0303A','ERA0304A','ERA0305A','ERA0401A','ERA0402A','ERA0403A','ERA0404A','ERA0405A',
  'ERB0101A','ERB0102A','ERB0103A','ERB0104A','ERB0105A','ERB0201A','ERB0202A','ERB0203A','ERB0204A','ERB0205A',
  'ERB0301A','ERB0302A','ERB0303A','ERB0304A','ERB0305A','ERB0401A','ERB0402A','ERB0403A','ERB0404A','ERB0405A',
  'ERB0501A','ERB0502A','ERB0503A','ERB0504A','ERB0505A',
  'ERC0101A','ERC0102A','ERC0103A','ERC0104A','ERC0105A','ERC0201A','ERC0202A','ERC0203A','ERC0204A','ERC0205A',
  'ERC0301A','ERC0302A','ERC0303A','ERC0304A','ERC0305A','ERC0401A','ERC0402A','ERC0403A','ERC0404A','ERC0405A',
  'ERC0501A','ERC0502A','ERC0503A','ERC0504A','ERC0505A',
  'ERD0101A','ERD0102A','ERD0103A','ERD0104A','ERD0105A','ERD0201A','ERD0202A','ERD0203A','ERD0204A','ERD0205A',
  'ERD0301A','ERD0302A','ERD0303A','ERD0304A','ERD0305A','ERD0401A','ERD0402A','ERD0403A','ERD0404A','ERD0405A',
  'ERD0501A','ERD0502A','ERD0503A','ERD0504A','ERD0505A',
  'ERE0101A','ERE0102A','ERE0103A','ERE0104A','ERE0105A','ERE0201A','ERE0202A','ERE0203A','ERE0204A','ERE0205A',
  'ERE0301A','ERE0302A','ERE0303A','ERE0304A','ERE0305A','ERE0401A','ERE0402A','ERE0403A','ERE0404A','ERE0405A',
  'ERE0501A','ERE0502A','ERE0503A','ERE0504A','ERE0505A',
  'ERF0101A','ERF0102A','ERF0103A','ERF0104A','ERF0105A','ERF0201A','ERF0202A','ERF0203A','ERF0204A','ERF0205A',
  'ERF0301A','ERF0302A','ERF0303A','ERF0304A','ERF0305A','ERF0401A','ERF0402A','ERF0403A','ERF0404A','ERF0405A',
  'ERF0501A','ERF0502A','ERF0503A','ERF0504A','ERF0505A',
  'ERG0101A','ERG0102A','ERG0103A','ERG0104A','ERG0105A','ERG0201A','ERG0202A','ERG0203A','ERG0204A','ERG0205A',
  'ERG0301A','ERG0302A','ERG0303A','ERG0304A','ERG0305A','ERG0401A','ERG0402A','ERG0403A','ERG0404A','ERG0405A',
  'ERG0501A','ERG0502A','ERG0503A','ERG0504A','ERG0505A',
  'ERH0101A','ERH0102A','ERH0103A','ERH0104A','ERH0105A','ERH0201A','ERH0202A','ERH0203A','ERH0204A','ERH0205A',
  'ERH0301A','ERH0302A','ERH0303A','ERH0304A','ERH0305A','ERH0401A','ERH0402A','ERH0403A','ERH0501A','ERH0502A',
  'ERH0503A','ERH0504A','ERH0601A','ERH0602A','ERH0603A','ERH0604A',
  'EPA0101A','EPA0102A','EPA0103A','EPA0104A','EPA0201A','EPA0202A','EPA0203A','EPA0204A','EPA0301A','EPA0302A',
  'EPA0303A','EPA0304A','EPA0401A','EPA0402A','EPA0403A','EPA0404A','EPA0501A','EPA0502A','EPA0503A','EPA0504A',
  'EPA0601A','EPA0602A','EPA0603A','EPA0604A','EPA0701A','EPA0702A','EPA0703A','EPA0704A','EPA0801A','EPA0802A',
  'EPA0803A','EPA0804A','EPA0901A','EPA0902A','EPA0903A','EPA0904A',
  'EPB0601A','EPB0602A','EPB0603A','EPB0604A','EPB0701A','EPB0702A','EPB0703A','EPB0704A','EPB0801A','EPB0802A',
  'EPB0803A','EPB0804A','EPB0901A','EPB0902A','EPB0903A','EPB0904A',
  'ESA0101A','ESB0101A',
  'ERI0101A','ERI0201A','ERI0301A','ERI0401A','ERI0501A','ERI0601A','ERI0701A','ERI0801A','ERI0901A',
  'PTA0101A','PTB0101A','PTC0101A','PTD0101A','PTE0101A',
  'PPS0101A',
  'PXA0101A'
];

function seedDefaultLocations(){
  const db=getDB();
  if(db._defaultLocsSeeded) return; // only once
  if(!db.masterLocs) db.masterLocs={};
  const now=new Date().toISOString();
  let added=0;
  DEFAULT_LOCATIONS.forEach(code=>{
    if(!db.masterLocs[code]){
      db.masterLocs[code]={code,addedBy:'system',addedAt:now};
      added++;
    }
  });
  db._defaultLocsSeeded=true;
  setDB(db);
  if(added>0) console.log(`InvTrack: ${added} ubicaciones predeterminadas cargadas`);
}

/* ══════════════════════════════════════════════════════
   DATA SCHEMA
   
   DB = {
     users: { username: { name, password, role:'admin'|'operator', createdAt, createdBy } }
     catalogs: { username: { catalog:{}, info:'', assignedBy:'', assignedAt:'' } }
     inventories: [ { id, username, user(display), date, startTime, endTime, locations:[...] } ]
     masterLocs: { LOCCODE: { code, addedBy, addedAt } }
     locStatus: { PERIOD_LOCCODE: { status:'pending'|'counted'|'verified'|'empty', verifiedBy, verifiedAt, invId } }
     locAssignments: { username: [ { code, period, assignedBy, assignedAt, verifiedAt, isEmpty } ] }
     settings: { vibrate, confirmClose }
     _defaultLocsSeeded: true
   }
══════════════════════════════════════════════════════ */

// ── STATE ──
var CUR = { username:'', role:'', name:'' }; window.CUR = CUR;
let CFG = { vibrate:true, confirmClose:true };
let _adminTmpCatalog = null; // temp catalog loaded in admin before assign

// ── DB helpers ──
function dbGet(k){ try{ const v=localStorage.getItem('itp3_'+k); return v?JSON.parse(v):null; }catch(e){ return null; } }
function dbSet(k,v){ try{ localStorage.setItem('itp3_'+k,JSON.stringify(v)); }catch(e){} }

// ── FIREBASE REALTIME DATABASE ──
let _dbCache = {users:{},catalogs:{},inventories:[],masterLocs:{},locStatus:{},settings:{}};
let _fbReady = false;
let _fbRef = null;
let _syncQueue = []; // Cola de cambios pendientes offline
let _isOnline = navigator.onLine;
let _syncIndicator = null; // Referencia al indicador de estado

function _initFirebase(){
  var _x=atob,
  _j=["QUl6YV","N5QndR","Mk5Ldk","lpd1Nm","anh2RF","djQ043","eE1OcV","BVUGZM","VFhz"],
  _a=["YXBwLW","RlLWlu","dmVudG","FyaW8t","OTZkNW","EuZmly","ZWJhc2","VhcHAu","Y29t"],
  _d=["aHR0cH","M6Ly9h","cHAtZG","UtaW52","ZW50YX","Jpby05","NmQ1YS","1kZWZh","dWx0LX","J0ZGIu","ZmlyZW","Jhc2Vp","by5jb2","0="],
  _p=["YXBwLW","RlLWlu","dmVudG","FyaW8t","OTZkNW","E="],
  _s=["YXBwLW","RlLWlu","dmVudG","FyaW8t","OTZkNW","EuZmly","ZWJhc2","VzdG9y","YWdlLm","FwcA=="],
  _m=["MzA3Nz","YxOTUz","Nzc0"],
  _i=["MTozMD","c3NjE5","NTM3Nz","Q6d2Vi","Ojg1Nz","VhYWVh","NjQ4OT","YxYWFl","NTZjZm","Y="];
  const config = {
    apiKey:_x(_j.join("")),
    authDomain:_x(_a.join("")),
    databaseURL:_x(_d.join("")),
    projectId:_x(_p.join("")),
    storageBucket:_x(_s.join("")),
    messagingSenderId:_x(_m.join("")),
    appId:_x(_i.join(""))
  };
  firebase.initializeApp(config);

  // ── Auth anónima: el usuario DEBE estar autenticado antes de leer/escribir ──
  firebase.auth().signInAnonymously()
    .catch(function(error){
      console.error('Auth anónima falló:', error);
      _fbReady = true; // continuar en offline si falla
    });

  firebase.auth().onAuthStateChanged(function(user){
    if(!user) return; // esperar hasta tener sesión
    _fbRef = firebase.database().ref('invtrack');
    _fbRef.on('value', function(snapshot){
    const data = snapshot.val();
    _dbCache = data || {users:{},catalogs:{},inventories:[],masterLocs:{},locStatus:{},settings:{}};
    _fbReady = true;
    // Sincronizar tema con Firebase
    try{ var t=(_dbCache.settings||{}).theme; if(t && window.applyTheme) window.applyTheme(t); }catch(e){}
    // Actualizar la pantalla activa automáticamente
    try{
      if(!CUR || !CUR.username) return;
      const c = typeof cur !== 'undefined' ? cur : '';
      // Operador
      if(c==='home') refHome();
      else if(c==='history') renderH();
      else if(c==='op-tasks') renderOpTasksList(_opTaskFilt);
      else if(c==='op-stats') renderOpStats();
      // Admin
      else if(c==='admin') {} // menú principal, no necesita refresh
      else if(c==='a-livecontrol') renderLiveControl();
      else if(c==='a-history') renderAH();
      else if(c==='a-progress') renderProgress();
      else if(c==='a-tasks'){ renderTasksAdminUserFilter(); renderTasksList(); }
      else if(c==='a-users') renderUsersList();
      else if(c==='a-dashboard') renderDashboard();
      else if(c==='a-export' && typeof renderNovedades==='function') renderNovedades();
      else if(c==='rutamsg' && typeof rmRender==='function') rmRender();
    }catch(e){ console.log('UI refresh error:', e); }
  }, function(error){
    console.error('Firebase error:', error);
    _fbReady = true;
  });
  
  // Auto-refresh del panel de control en vivo — contador regresivo 10s
  // Se inicia/detiene al navegar hacia/desde el panel
  // (ver lcpStartCountdown / lcpStopCountdown llamados en navAdmin)
  }); // fin onAuthStateChanged
}

function getDB(){
  return JSON.parse(JSON.stringify(_dbCache));
}

function _eq(a,b){ try{ return JSON.stringify(a)===JSON.stringify(b); }catch(e){ return false; } }

/* Construye un objeto de paths granulares para firebase.update()
   comparando el estado anterior (oldDb) con el nuevo (newDb).
   Esto evita sobrescribir TODO el árbol y elimina la condición de
   carrera que borraba usuarios/inventarios recién creados cuando dos
   clientes guardaban casi al mismo tiempo. */
function _buildUpdates(oldDb, newDb){
  const u = {};
  const old = oldDb || {};
  const nw  = newDb || {};
  // activeUsers se gestiona aparte (saveActive); nunca lo incluimos aquí
  const SKIP = { activeUsers: 1 };
  // Recolectar TODAS las claves presentes en cualquiera de los dos snapshots
  const allKeys = new Set();
  Object.keys(old).forEach(function(k){ if(!SKIP[k]) allKeys.add(k); });
  Object.keys(nw ).forEach(function(k){ if(!SKIP[k]) allKeys.add(k); });

  allKeys.forEach(function(k){
    const o = old[k];
    const n = nw[k];
    if(_eq(o, n)) return;

    // Caso 1: array (ej. inventories, tasks) → diff por índice
    if(Array.isArray(o) || Array.isArray(n)){
      const oa = Array.isArray(o) ? o : [];
      const na = Array.isArray(n) ? n : [];
      const maxLen = Math.max(oa.length, na.length);
      for(let i=0; i<maxLen; i++){
        if(i >= na.length){ u[k+'/'+i] = null; }
        else if(!_eq(oa[i], na[i])) u[k+'/'+i] = na[i];
      }
      return;
    }

    // Caso 2: objeto plano (ej. users, locNotes, notifications) → merge granular
    if(o && typeof o === 'object' && n && typeof n === 'object'){
      Object.keys(n).forEach(function(id){
        if(!_eq(o[id], n[id])) u[k+'/'+id] = n[id];
      });
      Object.keys(o).forEach(function(id){
        if(!(id in n)) u[k+'/'+id] = null;
      });
      return;
    }

    // Caso 3: la clave aparece/desaparece, o cambia de tipo, o es primitiva
    if(n === undefined){
      u[k] = null;
    } else if(o === undefined || typeof o !== typeof n){
      // Tipo nuevo o cambio de tipo → reemplazar el nodo completo
      u[k] = n;
    } else {
      u[k] = n;
    }
  });
  return u;
}

function setDB(db){
  // Preservar activeUsers en cache local — ese nodo lo gestiona saveActive por separado
  const _savedActiveUsers = _dbCache.activeUsers || {};
  // Snapshot anterior ANTES de mutar la cache, para diffing
  const _prev = _dbCache;
  _dbCache = db;
  _dbCache.activeUsers = _savedActiveUsers;

  const newForWire = Object.assign({}, db); delete newForWire.activeUsers;
  const prevForWire = Object.assign({}, _prev); delete prevForWire.activeUsers;
  const updates = _buildUpdates(prevForWire, newForWire);
  if(!Object.keys(updates).length) return; // nada que escribir

  if(_fbRef && _isOnline){
    _fbRef.update(updates).catch(function(e){
      console.error('Firebase write error:', e);
      _enqueueSync(updates);
    });
  } else {
    _enqueueSync(updates);
  }
}

function _enqueueSync(updates){
  // Fusionar con la cola pendiente — los paths más recientes ganan.
  if(!_syncQueue.length) _syncQueue = [{}];
  Object.assign(_syncQueue[0], updates);
  _updateSyncIndicator();
}

function _flushSyncQueue(){
  if(!_syncQueue.length || !_fbRef || !_isOnline) return;
  const data = _syncQueue[0];
  if(!data || !Object.keys(data).length){ _syncQueue=[]; _updateSyncIndicator(); return; }
  _fbRef.update(data).then(function(){
    _syncQueue = [];
    _updateSyncIndicator();
    flash('☁️ Datos sincronizados','ok');
  }).catch(function(e){
    console.error('Sync retry failed:', e);
    setTimeout(_flushSyncQueue, 5000); // reintentar en 5s
  });
}

function _updateSyncIndicator(){
  const el = document.getElementById('sync-status-bar');
  if(!el) return;
  if(!_isOnline){
    el.style.display = 'flex';
    el.innerHTML = '🔴 Sin conexión — los cambios se guardarán al reconectar';
    el.style.background = 'rgba(220,50,50,0.15)';
    el.style.color = '#ff6b6b';
    el.style.borderColor = 'rgba(220,50,50,0.3)';
  } else if(_syncQueue.length > 0){
    el.style.display = 'flex';
    el.innerHTML = '🟡 Reconectado — sincronizando cambios pendientes…';
    el.style.background = 'rgba(255,180,0,0.15)';
    el.style.color = '#f5a623';
    el.style.borderColor = 'rgba(255,180,0,0.3)';
  } else {
    el.style.display = 'none';
  }
}

// Escuchar cambios de conectividad
window.addEventListener('online', function(){
  _isOnline = true;
  _updateSyncIndicator();
  if(_syncQueue.length > 0){
    setTimeout(_flushSyncQueue, 1000); // esperar 1s para que Firebase se reconecte
  }
});
window.addEventListener('offline', function(){
  _isOnline = false;
  _updateSyncIndicator();
  flash('📵 Sin conexión — trabajando offline','wn');
});

/* ══════════════════════════════════════════════════════
   MULTI-CATÁLOGO PROPIO (por operador)
   - Soporta múltiples catálogos propios sin unificarlos.
   - Claves: `<user>_own` (legacy) o `<user>_own__<id>` (nuevos).
   - Selección activa: db.settings.activeOwn[username] = '<key>'.
   - `_assigned` y `_reconteo` no se tocan.
══════════════════════════════════════════════════════ */
function _ownKeysFor(username,db){
  db=db||getDB();
  if(!db.catalogs) return [];
  const prefix=username+'_own';
  return Object.keys(db.catalogs).filter(k=>k===prefix||k.startsWith(prefix+'__'));
}
function _assignedKeysFor(username,db){
  db=db||getDB();
  if(!db.catalogs) return [];
  const prefix=username+'_assigned';
  return Object.keys(db.catalogs).filter(k=>k===prefix||k.startsWith(prefix+'__'));
}
function _allCatKeysFor(username,db){
  db=db||getDB();
  return _ownKeysFor(username,db).concat(_assignedKeysFor(username,db));
}
function _mapCatEntry(k,e,source){
  return {
    key:k,
    source:source, // 'own' | 'assigned'
    name:e.name||(source==='assigned'?'Catálogo asignado':'Catálogo'),
    info:e.info||'',
    assignedBy:e.assignedBy||'',
    assignedAt:e.assignedAt||'',
    expiresAt:e.expiresAt||'',
    isSelectiveAudit:!!e.isSelectiveAudit,
    selectiveLocs:e.selectiveLocs||null,
    refsCount:Object.keys(e.catalog||{}).length
  };
}
function listOwnCatalogs(username){
  const db=getDB();
  return _ownKeysFor(username,db).map(k=>_mapCatEntry(k,db.catalogs[k]||{},'own'))
    .sort((a,b)=>new Date(b.assignedAt||0)-new Date(a.assignedAt||0));
}
function listAssignedCatalogs(username){
  const db=getDB();
  return _assignedKeysFor(username,db).map(k=>_mapCatEntry(k,db.catalogs[k]||{},'assigned'))
    .sort((a,b)=>new Date(b.assignedAt||0)-new Date(a.assignedAt||0));
}
function listAllCatalogs(username){
  // Combinado (propios + asignados) ordenado por fecha desc
  return listOwnCatalogs(username).concat(listAssignedCatalogs(username))
    .sort((a,b)=>new Date(b.assignedAt||0)-new Date(a.assignedAt||0));
}
function getActiveCatalogKey(username){
  const db=getDB();
  const keys=_allCatKeysFor(username,db);
  if(!keys.length) return null;
  const sel=db.settings&&db.settings.activeOwn&&db.settings.activeOwn[username];
  if(sel&&keys.indexOf(sel)>=0) return sel;
  // fallback: el más reciente (preferir asignados sobre propios si misma fecha)
  return keys.slice().sort((a,b)=>{
    const ea=db.catalogs[a]?.assignedAt||'';
    const eb=db.catalogs[b]?.assignedAt||'';
    return new Date(eb||0)-new Date(ea||0);
  })[0];
}
function getActiveCatalogEntry(username){
  const k=getActiveCatalogKey(username);
  if(!k) return null;
  return getDB().catalogs?.[k]||null;
}
// Aliases (compat con código anterior — ahora consideran asignados también)
function getActiveOwnKey(username){ return getActiveCatalogKey(username); }
function getActiveOwnEntry(username){ return getActiveCatalogEntry(username); }
function setActiveOwn(username,key){
  const db=getDB();
  if(!db.settings) db.settings={};
  if(!db.settings.activeOwn) db.settings.activeOwn={};
  db.settings.activeOwn[username]=key;
  setDB(db);
}
function delOwnCatalog(username,key){
  const db=getDB();
  if(db.catalogs&&db.catalogs[key]) delete db.catalogs[key];
  if(db.settings&&db.settings.activeOwn&&db.settings.activeOwn[username]===key){
    delete db.settings.activeOwn[username];
  }
  setDB(db);
}
function delAssignedCatalog(username,key){
  // Igual que delOwnCatalog pero semántica clara
  return delOwnCatalog(username,key);
}
function delAllOwnCatalogs(username){
  const db=getDB();
  _ownKeysFor(username,db).forEach(k=>{ delete db.catalogs[k]; });
  if(db.settings&&db.settings.activeOwn&&db.settings.activeOwn[username]){
    // si la clave activa era propia, limpiar
    if(!db.catalogs[db.settings.activeOwn[username]]) delete db.settings.activeOwn[username];
  }
  setDB(db);
}
function delAllAssignedCatalogs(username){
  const db=getDB();
  _assignedKeysFor(username,db).forEach(k=>{ delete db.catalogs[k]; });
  if(db.settings&&db.settings.activeOwn&&db.settings.activeOwn[username]){
    if(!db.catalogs[db.settings.activeOwn[username]]) delete db.settings.activeOwn[username];
  }
  setDB(db);
}

function purgeCatalog(username){
  // Elimina entradas vencidas (todos los _own*, _assigned*)
  const db=getDB();
  if(!db.catalogs) return;
  let changed=false;
  const now=Date.now();
  const keys=_allCatKeysFor(username,db);
  keys.forEach(k=>{
    const entry=db.catalogs[k];
    if(entry&&entry.expiresAt&&new Date(entry.expiresAt).getTime()<now){
      delete db.catalogs[k];
      if(db.settings&&db.settings.activeOwn&&db.settings.activeOwn[username]===k){
        delete db.settings.activeOwn[username];
      }
      changed=true;
    }
  });
  if(changed) setDB(db);
}
function purgeAllExpiredCatalogs(){
  const db=getDB();
  if(!db.catalogs) return;
  const now=Date.now();
  let changed=false;
  Object.keys(db.catalogs).forEach(key=>{
    const entry=db.catalogs[key];
    if(entry&&entry.expiresAt&&new Date(entry.expiresAt).getTime()<now){
      delete db.catalogs[key];
      changed=true;
    }
  });
  if(changed){
    // limpiar activeOwn que ya no existan
    if(db.settings&&db.settings.activeOwn){
      Object.keys(db.settings.activeOwn).forEach(u=>{
        const k=db.settings.activeOwn[u];
        if(!db.catalogs[k]) delete db.settings.activeOwn[u];
      });
    }
    setDB(db);
  }
}
function getCatalog(username){
  // Purge expired catalogs first
  purgeCatalog(username);
  const db=getDB();
  // Reconteo tiene prioridad absoluta — solo muestra las ubicaciones del reconteo
  const reconteo=db.catalogs?.[username+'_reconteo']||null;
  if(reconteo) return reconteo;
  // Catálogo activo: el seleccionado por el usuario (propio o asignado), sin unificar.
  return getActiveCatalogEntry(username);
}
function setCatalog(username,cat,info,by,catName){
  const db=getDB();
  if(!db.catalogs) db.catalogs={};
  const isAdmin = by && by !== username;
  if(isAdmin){
    // Admin asignando al operador — crea SIEMPRE una nueva entrada (no unifica)
    const id=Date.now().toString(36)+Math.random().toString(36).slice(2,6);
    const key=username+'_assigned__'+id;
    db.catalogs[key]={
      catalog:cat,
      info,
      name:catName||('Catálogo asignado '+new Date().toLocaleString('es-CO',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})),
      assignedBy:by,
      assignedAt:new Date().toISOString(),
      expiresAt:new Date(Date.now()+12*60*60*1000).toISOString()
    };
    // Marcar el recién asignado como activo para que el operador pueda iniciarlo de inmediato
    if(!db.settings) db.settings={};
    if(!db.settings.activeOwn) db.settings.activeOwn={};
    db.settings.activeOwn[username]=key;
    setDB(db);
    return key;
  }
  // Operador cargando su propio catálogo → SIEMPRE crear una nueva entrada
  const id=Date.now().toString(36)+Math.random().toString(36).slice(2,6);
  const key=username+'_own__'+id;
  db.catalogs[key]={
    catalog:cat,
    info,
    name:catName||('Catálogo '+new Date().toLocaleString('es-CO',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})),
    assignedBy:username,
    assignedAt:new Date().toISOString(),
    expiresAt:new Date(Date.now()+12*60*60*1000).toISOString()
  };
  if(!db.settings) db.settings={};
  if(!db.settings.activeOwn) db.settings.activeOwn={};
  db.settings.activeOwn[username]=key; // el recién cargado pasa a ser el activo
  setDB(db);
  return key;
}
function getUserInvs(username){
  const db=getDB();
  return (db.inventories||[]).filter(i=>i.username===username);
}
function getAllInvs(){
  return (getDB().inventories)||[];
}
function saveInv(inv){
  const db=getDB();
  if(!db.inventories) db.inventories=[];
  // remove existing if same id
  db.inventories=db.inventories.filter(i=>i.id!==inv.id);
  db.inventories.push(inv);
  setDB(db);
}
function delInvById(id){
  const db=getDB();
  db.inventories=(db.inventories||[]).filter(i=>i.id!==id);
  setDB(db);
}

// ── ACTIVE INV (session only, also persisted for recovery) ──
function saveActive(inv){
  dbSet('active_'+CUR.username, inv);
  // También guardar en Firebase para que el admin vea quién está activo
  if(_fbRef){
    _fbRef.child('activeUsers').child(CUR.username).set({
      username: CUR.username,
      name: CUR.name,
      lastSeen: new Date().toISOString(),
      currentLoc: inv && inv.cur ? inv.cur.code : null,
      locsCount: inv ? inv.locations.filter(l=>!l.isMissingLoc).length + (inv.cur ? 1 : 0) : 0,
      refsCount: inv ? inv.locations.filter(l=>!l.isMissingLoc).reduce((a,l)=>a+Object.values(l.items||{}).filter(i=>!i.isExtra).length,0) + (inv.cur ? Object.values(inv.cur.items||{}).filter(i=>!i.isExtra).length : 0) : 0,
      diffsCount: inv ? inv.locations.filter(l=>!l.isMissingLoc).reduce((a,l)=>a+Object.values(l.items||{}).filter(i=>i.status==='diff').length,0) + (inv.cur ? Object.values(inv.cur.items||{}).filter(i=>i.status==='diff').length : 0) : 0,
      countedLocsCodes: inv ? [
        ...inv.locations.filter(l=>!l.isMissingLoc).map(l=>l.code),
        ...(inv.cur ? [inv.cur.code] : [])
      ] : []
    });
  }
}
function loadActive(){ return dbGet('active_'+CUR.username); }
function clearActive(){
  localStorage.removeItem('itp3_active_'+CUR.username);
  // Quitar del registro de activos en Firebase
  if(_fbRef) _fbRef.child('activeUsers').child(CUR.username).remove();
  // Quitar snapshot de inventario en curso (Novedades en tiempo real)
  try{ _clearActiveInvData(CUR.username); }catch(e){}
}

// ── Sync del inventario en curso para que admin/master vean novedades en tiempo real ──
function _syncActiveInvData(inv){
  if(!_fbRef || !inv || !inv.username) return;
  try{
    // Solo sincronizar si hay al menos una ubicación cerrada (las novedades vienen de locs cerradas)
    if(!inv.locations || !inv.locations.length){
      _fbRef.child('activeInvData').child(inv.username).remove();
      return;
    }
    const snap = {
      id: inv.id,
      username: inv.username,
      user: inv.user || inv.username,
      catalogKey: inv.catalogKey || null,
      startTime: inv.startTime || null,
      date: inv.date || null,
      locations: inv.locations || []
    };
    _fbRef.child('activeInvData').child(inv.username).set(snap);
  }catch(e){}
}
function _clearActiveInvData(username){
  if(!_fbRef || !username) return;
  try{ _fbRef.child('activeInvData').child(username).remove(); }catch(e){}
}
function _getActiveInProgressInvs(){
  const data = (_dbCache && _dbCache.activeInvData) || {};
  const closedIds = new Set(((_dbCache && _dbCache.inventories) || []).map(i=>i.id));
  const out = [];
  Object.values(data).forEach(inv=>{
    if(!inv || !inv.locations || !inv.locations.length) return;
    if(closedIds.has(inv.id)) return; // ya cerrado, evitar duplicado
    const cp = JSON.parse(JSON.stringify(inv));
    cp._inProgress = true;
    out.push(cp);
  });
  return out;
}

let ACTIVE = null; // current in-progress inventory

/* ══════════════════════════════════════════════════════
   SETUP / AUTH
══════════════════════════════════════════════════════ */
function hasAnyUser(){
  const db=getDB();
  return Object.keys(db.users||{}).filter(uname=>!isHiddenUser(uname,(db.users||{})[uname])).length>0;
}

function setupAdmin(){
  const name=document.getElementById('su-name').value.trim();
  const user=document.getElementById('su-user').value.trim().toLowerCase();
  const pass=document.getElementById('su-pass').value;
  const pass2=document.getElementById('su-pass2').value;
  if(!name||!user||!pass){ flash('Completa todos los campos','er'); return; }
  if(pass.length<4){ flash('Contraseña mínimo 4 caracteres','er'); return; }
  if(pass!==pass2){ flash('Las contraseñas no coinciden','er'); return; }
  const db=getDB();
  db.users[user]={name,password:hash(pass),role:'admin',createdAt:new Date().toISOString(),createdBy:'system'};
  setDB(db);
  flash('¡Administrador creado! Inicia sesión.','ok');
  showScr('login');
}

function hash(s){ let h=0;for(let i=0;i<s.length;i++){h=Math.imul(31,h)+s.charCodeAt(i)|0;}return String(h); }
function isMaster(){ return CUR && CUR.role==='master'; }
// Filtra usuarios que deben ser invisibles en toda la UI (master y cualquier flag oculto)
function isHiddenUser(uname, u){ return uname==='__master__' || (u && (u.isMaster || u.role==='master')); }

let _loginTab='op';
function setLoginTab(t){
  _loginTab=t;
  document.getElementById('tab-op').className=t==='op'?'btn bp sm':'btn bs sm';
  document.getElementById('tab-adm').className=t==='adm'?'btn bp sm':'btn bs sm';
  document.getElementById('login-err').style.display='none';
}

function doLogin(){
  const user=document.getElementById('l-user').value.trim().toLowerCase();
  const pass=document.getElementById('l-pass').value;
  const err=document.getElementById('login-err');
  err.style.display='none';

  // ── Validación de acceso ──
  const db=getDB();
  const u=db.users[user];
  if(!u||u.password!==hash(pass)){
    err.textContent='Usuario o contraseña incorrectos';
    err.style.display='block';
    return;
  }
  if(_loginTab==='op'&&u.role==='admin'){
    // admin trying to log in as operator — allow, redirect to admin
  }
  if(_loginTab==='adm'&&u.role==='operator'&&!u.isMaster){
    err.textContent='Este usuario no tiene permisos de administrador';
    err.style.display='block';
    return;
  }
  // Si el usuario tiene flag isMaster, tratarlo como master
  const effectiveRole = u.isMaster ? 'master' : u.role;
  const effectiveUsername = u.isMaster ? '__master__' : user;
  CUR={username:effectiveUsername,role:effectiveRole,name:u.name};
  CFG=getDB().settings||{vibrate:true,confirmClose:true};
  purgeAllExpiredCatalogs();
  try{ sessionStorage.setItem('itp3_session', JSON.stringify(CUR)); }catch(e){}
  document.getElementById('l-user').value='';
  document.getElementById('l-pass').value='';
  if(effectiveRole==='master'||effectiveRole==='admin'){ enterAdmin(); }
  else { enterOperator(); }
}

function doLogout(){
  if(ACTIVE){
    appConfirm('Inventario activo','Hay un inventario en curso. ¿Salir?\nLos datos se conservarán.',()=>{stopAll();stopNotifPolling();CUR={username:'',role:'',name:''};ACTIVE=null;try{sessionStorage.removeItem('itp3_session');}catch(e){}showScr('login');});
    return;
  }
  stopAll();
  stopNotifPolling();
  CUR={username:'',role:'',name:''};
  ACTIVE=null;
  try{ sessionStorage.removeItem('itp3_session'); }catch(e){}
  window.location.href = 'index.html';
}

function enterOperator(){
  seedDefaultLocations();
  ACTIVE=loadActive();
  requestNotifPermission();
  startNotifPolling();
  try{ checkPeriodChange(); }catch(e){}
  showScr('home');
  refHome();
}
/* ══════════════════════════════════════════════════════
   CIERRE DE PERÍODO — Detector de cambio de quincena
══════════════════════════════════════════════════════ */
function checkPeriodChange(){
  const current = getCurrentPeriod();
  const db = getDB();
  const last = db.settings?.lastKnownPeriod;

  // Primera vez que se usa la app — solo guardar el período actual, sin alertar
  if(!last){
    if(!db.settings) db.settings={};
    db.settings.lastKnownPeriod = current;
    setDB(db);
    return;
  }

  // Sin cambio — nada que hacer
  if(last === current) return;

  // Cambió la quincena — verificar si ya fue procesado por otro admin
  if(db.settings?.lastClosedPeriod === last) return;

  // Cierre automático silencioso — sin modal, sin descarga de Excel
  autoClosePeriod(last);
}

function autoClosePeriod(period){
  const db = getDB();
  if(!db.settings) db.settings={};

  const [yr, mo, q] = period.split(/[-Q]/);
  const periodInvs = getAllInvs().filter(inv => {
    if(!inv.date) return false;
    const d = new Date(inv.date);
    const half = d.getDate() <= 15 ? 1 : 2;
    return d.getFullYear()===parseInt(yr) &&
           (d.getMonth()+1)===parseInt(mo) &&
           half===parseInt(q);
  });

  // Archivar locStatus del período (snapshot)
  if(!db.periodArchives) db.periodArchives = {};
  const prefix = period + '_';
  const snapshot = {};
  Object.entries(db.locStatus||{}).forEach(([k,v])=>{
    if(k.startsWith(prefix)) snapshot[k] = v;
  });
  db.periodArchives[period] = {
    closedAt  : new Date().toISOString(),
    closedBy  : 'Automático',
    locStatus : snapshot,
    invCount  : periodInvs.length,
  };

  // Reiniciar contadores: limpiar locStatus y asignaciones del período cerrado
  Object.keys(db.locStatus||{}).forEach(k=>{ if(k.startsWith(prefix)) delete db.locStatus[k]; });
  Object.values(db.locAssignments||{}).forEach(arr=>{
    arr.forEach(a=>{ if(a.period===period){ a.verified=false; a.isEmpty=false; delete a.verifiedAt; } });
  });

  db.settings.lastClosedPeriod = period;
  db.settings.lastKnownPeriod  = getCurrentPeriod();
  db.settings.lastClosedAt     = new Date().toISOString();
  db.settings.lastClosedBy     = 'Automático';
  setDB(db);

  try{ logMasterAction(`Cierre automático del período ${period} (${periodInvs.length} inventarios)`, null); }catch(e){}
}

let _pendingClosePeriod = null;

function showPeriodCloseModal(closedPeriod, newPeriod){
  const db = getDB();

  // Calcular estadísticas del período que cerró
  const allInvs = getAllInvs();
  const [yr, mo, q] = closedPeriod.split(/[-Q]/);
  const periodInvs = allInvs.filter(inv => {
    if(!inv.date) return false;
    const d = new Date(inv.date);
    const half = d.getDate() <= 15 ? 1 : 2;
    return d.getFullYear() === parseInt(yr) &&
           (d.getMonth()+1) === parseInt(mo) &&
           half === parseInt(q);
  });

  const totalLocs   = new Set(periodInvs.flatMap(i => i.locations.filter(l=>!l.isMissingLoc).map(l=>l.code))).size;
  const masterLocs  = Object.keys(db.masterLocs||{}).length;
  const operators   = new Set(periodInvs.map(i=>i.username)).size;
  const totalInvs   = periodInvs.length;
  let totalDiff=0, totalOk=0, totalRefs=0;
  periodInvs.forEach(inv=>inv.locations.forEach(loc=>{
    if(loc.isMissingLoc) return;
    Object.values(loc.items).forEach(item=>{
      if(item.isExtra) return;
      totalRefs++;
      if(item.status==='ok') totalOk++;
      if(item.status==='diff') totalDiff++;
    });
  }));
  const precision = calcPrecision(periodInvs, db.novedadVerdicts||{});

  // Formatear etiquetas legibles
  const months=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  const closedLabel = `${months[parseInt(mo)-1]} ${yr} — Quincena ${q}`;
  const newLabel    = newPeriod.replace(/(\d{4})-(\d{2})-Q(\d)/,(_,y,m,qq)=>`${months[parseInt(m)-1]} ${y} — Q${qq}`);

  const mo2 = document.getElementById('period-close-mo');
  if(!mo2) return;
  document.getElementById('pc-closed-label').textContent  = closedLabel;
  document.getElementById('pc-new-label').textContent     = newLabel;
  document.getElementById('pc-total-invs').textContent    = totalInvs;
  document.getElementById('pc-operators').textContent     = operators;
  document.getElementById('pc-locs').textContent          = `${totalLocs}${masterLocs?' / '+masterLocs:''}`;
  document.getElementById('pc-precision').textContent     = `${precision}%`;
  document.getElementById('pc-diffs').textContent         = totalDiff;
  mo2.style.display = 'flex';
}

function confirmPeriodClose(){
  if(!_pendingClosePeriod) return;
  const period = _pendingClosePeriod;
  const db = getDB();
  if(!db.settings) db.settings={};

  // ── 1. Recopilar inventarios del período ──
  const [yr, mo, q] = period.split(/[-Q]/);
  const periodInvs = getAllInvs().filter(inv => {
    if(!inv.date) return false;
    const d = new Date(inv.date);
    const half = d.getDate() <= 15 ? 1 : 2;
    return d.getFullYear()===parseInt(yr) &&
           (d.getMonth()+1)===parseInt(mo) &&
           half===parseInt(q);
  });

  // ── 2. Generar y descargar Excel del período ──
  if(periodInvs.length > 0){
    const fname = `cierre_${period}.xlsx`;
    const rows  = buildRows(periodInvs);

    // Hoja 1: detalle completo de conteos (estilizado)
    const wsDetail = buildStyledSheet(rows,{
      title:`📦 InvTrack Pro — Cierre de Período ${period}`,
      subtitle:`${rows.length} líneas  ·  ${periodInvs.length} inventarios  ·  Generado: ${new Date().toLocaleString('es-CO')}`
    });

    // Hoja 2: resumen por operador
    const byUser = {};
    periodInvs.forEach(inv=>{
      const u = inv.user||inv.username;
      if(!byUser[u]) byUser[u]={Usuario:u,Inventarios:0,Ubicaciones:0,Referencias:0,Correctas:0,Diferencias:0,Extras:0};
      byUser[u].Inventarios++;
      inv.locations.forEach(loc=>{
        if(loc.isMissingLoc) return;
        byUser[u].Ubicaciones++;
        Object.values(loc.items).forEach(item=>{
          if(item.isExtra){ byUser[u].Extras++; return; }
          byUser[u].Referencias++;
          if(item.status==='ok')   byUser[u].Correctas++;
          if(item.status==='diff') byUser[u].Diferencias++;
        });
      });
    });
    Object.values(byUser).forEach(r=>{
      r['Precisión %'] = r.Referencias>0 ? Math.round(r.Correctas/r.Referencias*100)+'%' : '—';
    });
    const wsSummary = buildStyledSheet(Object.values(byUser),{
      title:`👥 Resumen por Operador — ${period}`,
      subtitle:`${Object.keys(byUser).length} operadores activos`,
      widths:[22,12,12,12,12,12,12,14].map(w=>({wch:w}))
    });

    const wb = XLSX.utils.book_new();
    wb.Props={Title:`Cierre ${period}`,Author:'InvTrack Pro · Jose Pérez',CreatedDate:new Date()};
    XLSX.utils.book_append_sheet(wb, wsDetail,  'Detalle');
    XLSX.utils.book_append_sheet(wb, wsSummary, 'Resumen por operador');
    XLSX.writeFile(wb, fname);
  }

  // ── 3. Archivar locStatus del período (guardar snapshot, luego limpiar) ──
  if(!db.periodArchives) db.periodArchives = {};
  const prefix = period + '_';
  const snapshot = {};
  Object.entries(db.locStatus||{}).forEach(([k,v])=>{
    if(k.startsWith(prefix)) snapshot[k] = v;
  });
  db.periodArchives[period] = {
    closedAt  : new Date().toISOString(),
    closedBy  : isMaster() ? 'Sistema' : (CUR.name || CUR.username),
    locStatus : snapshot,
    invCount  : periodInvs.length,
  };

  // ── 4. Limpiar locStatus y asignaciones del período cerrado ──
  Object.keys(db.locStatus||{}).forEach(k=>{ if(k.startsWith(prefix)) delete db.locStatus[k]; });
  Object.values(db.locAssignments||{}).forEach(arr=>{
    arr.forEach(a=>{ if(a.period===period){ a.verified=false; a.isEmpty=false; delete a.verifiedAt; } });
  });

  // ── 5. Registrar el cierre en settings (sin tocar vibrate/confirmClose/theme) ──
  db.settings.lastClosedPeriod = period;
  db.settings.lastKnownPeriod  = getCurrentPeriod();
  db.settings.lastClosedAt     = new Date().toISOString();
  db.settings.lastClosedBy     = isMaster() ? 'Sistema' : (CUR.name || CUR.username);
  setDB(db);

  document.getElementById('period-close-mo').style.display='none';
  _pendingClosePeriod = null;
  logMasterAction(`Cerró el período ${period} (${periodInvs.length} inventarios)`, null);
  flash(periodInvs.length>0
    ? `✅ Período cerrado · Excel descargado · Progreso reiniciado`
    : `✅ Período cerrado · Sin inventarios en el período`
  , 'ok');
}

function dismissPeriodClose(){
  // El admin eligió ignorarlo por ahora — se volverá a mostrar la próxima vez que entre
  document.getElementById('period-close-mo').style.display='none';
}

function downloadPeriodExcel(){
  if(!_pendingClosePeriod) return;
  const period = _pendingClosePeriod;
  const [yr, mo, q] = period.split(/[-Q]/);
  const periodInvs = getAllInvs().filter(inv=>{
    if(!inv.date) return false;
    const d = new Date(inv.date);
    const half = d.getDate()<=15?1:2;
    return d.getFullYear()===parseInt(yr)&&(d.getMonth()+1)===parseInt(mo)&&half===parseInt(q);
  });
  if(!periodInvs.length){ flash('Sin inventarios en este período','wn'); return; }
  const rows = buildRows(periodInvs);
  const period2=_pendingClosePeriod;
  const wsDetail = buildStyledSheet(rows,{
    title:`📦 InvTrack Pro — Período ${period2}`,
    subtitle:`${rows.length} líneas  ·  ${periodInvs.length} inventarios  ·  Generado: ${new Date().toLocaleString('es-CO')}`
  });
  const byUser = {};
  periodInvs.forEach(inv=>{
    const u=inv.user||inv.username;
    if(!byUser[u]) byUser[u]={Usuario:u,Inventarios:0,Ubicaciones:0,Referencias:0,Correctas:0,Diferencias:0,Extras:0};
    byUser[u].Inventarios++;
    inv.locations.forEach(loc=>{
      if(loc.isMissingLoc) return;
      byUser[u].Ubicaciones++;
      Object.values(loc.items).forEach(item=>{
        if(item.isExtra){byUser[u].Extras++;return;}
        byUser[u].Referencias++;
        if(item.status==='ok') byUser[u].Correctas++;
        if(item.status==='diff') byUser[u].Diferencias++;
      });
    });
  });
  Object.values(byUser).forEach(r=>{r['Precisión %']=r.Referencias>0?Math.round(r.Correctas/r.Referencias*100)+'%':'—';});
  const wsSummary = buildStyledSheet(Object.values(byUser),{
    title:`👥 Resumen por Operador — ${period2}`,
    subtitle:`${Object.keys(byUser).length} operadores activos`,
    widths:[22,12,12,12,12,12,12,14].map(w=>({wch:w}))
  });
  const wb = XLSX.utils.book_new();
  wb.Props={Title:`Cierre ${period2}`,Author:'InvTrack Pro · Jose Pérez',CreatedDate:new Date()};
  XLSX.utils.book_append_sheet(wb, wsDetail,  'Detalle');
  XLSX.utils.book_append_sheet(wb, wsSummary, 'Resumen por operador');
  XLSX.writeFile(wb, `cierre_${period2}.xlsx`);
  flash('📥 Excel del período descargado','ok');
}

function enterAdmin(){
  // Mostrar botón Reiniciar solo al máster
  setTimeout(()=>{
    const btn=document.getElementById('btn-reset-app');
    if(btn) btn.style.display=isMaster()?'':'none';
    const ms=document.getElementById('master-control-section');
    if(ms) ms.style.display=isMaster()?'':'none';
  },100);
  seedDefaultLocations();
  ACTIVE=loadActive(); // admin may also have an active inventory
  showScr('admin');
  refAdmin();
  // Verificar si cambió la quincena
  setTimeout(checkPeriodChange, 600);
}

/* ══════════════════════════════════════════════════════
   CATALOG
══════════════════════════════════════════════════════ */
let _adminTmpCat=null;

function parseCatalog(rows, rowsRaw){
  // rowsRaw: mismas filas leídas con raw:true → los números de Excel llegan como number, no string
  // Útil para columnas de stock que SAP exporta con formato de celda (miles, decimales, etc.)
  rowsRaw=rowsRaw||rows; // fallback si no se provee
  // Firebase no permite . # $ / [ ] en claves — los reemplazamos por _
  function safeKey(s){ return s.replace(/[.#$\/\[\]]/g,'_'); }

  // Normaliza un valor de celda a string limpio, ignorando fechas/objetos
  function cellStr(v){
    if(v===null||v===undefined) return '';
    if(v instanceof Date) return '';
    if(typeof v==='object') return '';
    return String(v).trim();
  }
  // Detecta si una columna parece contener fechas o datos no útiles
  function isUselessCol(key,sampleRows){
    let dateCount=0,emptyCount=0;
    sampleRows.forEach(r=>{
      const v=r[key];
      if(v===''||v===null||v===undefined){emptyCount++;return;}
      if(v instanceof Date){dateCount++;return;}
      // Números SAP seriales de fecha (>40000 y <60000 = rango fechas Excel)
      if(typeof v==='number'&&v>40000&&v<60000) dateCount++;
    });
    return dateCount>(sampleRows.length*0.4);
  }

  const keys=Object.keys(rows[0]);
  const sample=rows.slice(0,Math.min(10,rows.length));

  // Detectar columnas útiles con patrones amplios, excluyendo columnas de fechas
  const usable=keys.filter(k=>!isUselessCol(k,sample));

  const cM=usable.find(k=>/material|ref|c[oó]d|code/i.test(k))
         ||keys.find(k=>/material|ref|c[oó]d|code/i.test(k))
         ||usable[0]||keys[0];

  const cN=usable.find(k=>/texto|descri|nombre|name|breve/i.test(k))
         ||keys.find(k=>/texto|descri|nombre|name|breve/i.test(k))
         ||usable[1]||keys[1];

  const cL=usable.find(k=>/ubic|location|almac[eé]/i.test(k))
         ||keys.find(k=>/ubic|location|almac[eé]/i.test(k))
         ||usable[2]||keys[2];

  // Para stock: excluir columnas que parezcan fechas antes de buscar
  const cS=usable.find(k=>/^stock\s*total$/i.test(k))
         ||usable.find(k=>/stock|cant|qty|quantity/i.test(k))
         ||keys.find(k=>/^stock\s*total$/i.test(k))
         ||usable[3]||keys[3];

  const cU=usable.find(k=>/unidad.*med|med.*base|unit.*meas|\bum\b|\buom\b/i.test(k))||null;

  // Columna Lote (acepta: lote, batch, lot, n° lote, nro lote, etc.)
  const cLote=usable.find(k=>/^lote$|^batch$|^lot$|n[°ºo]?\.?\s*lote|nro\.?\s*lote|num\.?\s*lote/i.test(k))
            ||keys.find(k=>/^lote$|^batch$|^lot$|n[°ºo]?\.?\s*lote|nro\.?\s*lote|num\.?\s*lote/i.test(k))
            ||usable.find(k=>/lote|batch/i.test(k))
            ||keys.find(k=>/lote|batch/i.test(k))
            ||null;

  const tmp={};
  // rawLines stores original SAP lines per ref+loc: { code: { loc: [stk1, stk2, ...] } }
  const rawLines={};
  // rawLots: lote alineado con rawLines (mismo índice por línea SAP)
  const rawLots={};
  rows.forEach((r,idx)=>{
    const rawCode=cellStr(r[cM]).toUpperCase();if(!rawCode||rawCode==='MATERIAL') return;
    const code=safeKey(rawCode);
    const name=cellStr(r[cN]);
    const loc=cellStr(r[cL]).toUpperCase();
    // Stock: usar valor raw (número real de Excel) para evitar problemas de formato SAP.
    // Si el valor raw es un número válido y no es un serial de fecha, lo usamos directo.
    // Fallback: parsear el string formateado (con coma o punto decimal).
    const rawRow=rowsRaw[idx]||{};
    const rawStkRaw=rawRow[cS];
    const rawStkStr=r[cS];
    let stk=0;
    if(typeof rawStkRaw==='number'&&!(rawStkRaw>40000&&rawStkRaw<60000)){
      stk=rawStkRaw; // valor numérico limpio del Excel
    } else {
      // Fallback: string → quitar separadores de miles y parsear
      const s=cellStr(rawStkStr).replace(/\s/g,'');
      // Detectar formato europeo (1.234,56) vs anglosajón (1,234.56)
      const isEuropean=/^\d{1,3}(\.\d{3})*(,\d+)?$/.test(s);
      const normalized=isEuropean?s.replace(/\./g,'').replace(',','.'):s.replace(/,/g,'');
      stk=parseFloat(normalized)||0;
    }
    const unit=cU?cellStr(r[cU]).toUpperCase():'';
    const isM2=unit==='M2'||unit==='M²';
    const lote=cLote?cellStr(r[cLote]):'';
    if(!loc) return; // ignorar filas sin ubicación
    if(!tmp[code]) tmp[code]={name,locs:{},isM2:false,unit:''};
    if(name&&!tmp[code].name) tmp[code].name=name;
    if(isM2) tmp[code].isM2=true;
    if(unit&&!tmp[code].unit) tmp[code].unit=unit;
    if(!tmp[code].locs[loc]) tmp[code].locs[loc]=0;
    tmp[code].locs[loc]+=stk;
    // Guardar líneas originales del SAP para distribución proporcional en Excel
    if(!rawLines[code]) rawLines[code]={};
    if(!rawLines[code][loc]) rawLines[code][loc]=[];
    rawLines[code][loc].push(stk);
    if(!rawLots[code]) rawLots[code]={};
    if(!rawLots[code][loc]) rawLots[code][loc]=[];
    rawLots[code][loc].push(lote);
  });
  const cat={};
  Object.entries(tmp).forEach(([code,v])=>{cat[code]={name:v.name,isM2:v.isM2,unit:v.unit||'',locs:Object.entries(v.locs).map(([l,s])=>({loc:l,stock:s})),rawLines:rawLines[code]||{},rawLots:rawLots[code]||{}};});
  const m2count=Object.values(cat).filter(v=>v.isM2).length;
  return {cat,refs:Object.keys(cat).length,rows:rows.length,cols:{cM,cN,cL,cS,cU},m2count};
}

function loadCatalog(file,target){
  if(!file) return;flash('Procesando…','wn');
  const fname=(file.name||'').replace(/\.(xlsx|xls|csv)$/i,'').trim();
  const r=new FileReader();
  r.onload=e=>{
    try{
      // cellDates:false para recibir números seriales en vez de objetos Date,
      // raw:false para que strings numéricos como "NC1.3608.73" no se conviertan
      const wb=XLSX.read(new Uint8Array(e.target.result),{type:'array',cellDates:true,raw:false});
      const ws=wb.Sheets[wb.SheetNames[0]];
      const rows=XLSX.utils.sheet_to_json(ws,{defval:'',raw:false});
      if(!rows.length){flash('Archivo vacío','er');return;}

      // Segunda lectura con raw:true para obtener valores numéricos reales de Stock
      // (SAP suele exportar con formato de celda que raw:false convierte a string)
      const rowsRaw=XLSX.utils.sheet_to_json(ws,{defval:'',raw:true});

      const parsed=parseCatalog(rows, rowsRaw);
      if(!parsed.refs){flash('No se encontraron referencias válidas. Verifica que el archivo tenga columnas de Material, Descripción, Ubicación y Stock.','er');return;}
      if(target==='op'){
        const catName=fname||('Catálogo '+new Date().toLocaleString('es-CO',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}));
        setCatalog(CUR.username,parsed.cat,`${parsed.refs} referencias`,CUR.username,catName);
        renderCatBar();
        renderCatPreview(rows.slice(0,5),parsed.cols,'op-cat-preview');
        renderOwnCatList();
        // Mostrar botón de auditoría selectiva si es admin
        const auditWrap = document.getElementById('op-cat-audit-wrap');
        if(auditWrap) auditWrap.style.display = (CUR.role==='admin'||CUR.role==='master') ? '' : 'none';
        flash(`✓ "${catName}" — ${parsed.refs} refs.${parsed.m2count?` · ${parsed.m2count} en M²`:''} cargadas`,'ok');
      } else {
        _adminTmpCat={cat:parsed.cat,info:`${parsed.refs} referencias`,rows:rows.slice(0,5),cols:parsed.cols,fname:fname};
        renderCatPreview(rows.slice(0,5),parsed.cols,'admin-cat-preview');
        document.getElementById('cat-assign-btn-wrap').style.display='';
        flash(`✓ ${parsed.refs} refs.${parsed.m2count?` · ${parsed.m2count} en M²`:''} — asigna al operador`,'ok');
      }
    }catch(err){flash('Error al leer el archivo: '+err.message,'er');console.error(err);}
  };
  r.readAsArrayBuffer(file);
}
function handleDrop(e,t){e.preventDefault();const f=e.dataTransfer.files[0];if(f) loadCatalog(f,t);}
function clearCatalog(t){
  if(t==="op"){
    // Compat: elimina TODOS los catálogos propios del usuario
    delAllOwnCatalogs(CUR.username);
    renderCatBar();renderOwnCatList();
    document.getElementById("op-cat-preview").innerHTML="";
    flash("Catálogos propios eliminados");
  }
}

/* ── Lista de catálogos propios cargados (operador) ── */
function renderOwnCatList(){
  const wrap=document.getElementById('op-cat-list');
  if(!wrap) return;
  const list=listAllCatalogs(CUR.username);
  const activeKey=getActiveCatalogKey(CUR.username);
  if(!list.length){
    wrap.innerHTML='';
    const cl=document.getElementById('op-cat-clear'); if(cl) cl.style.display='none';
    return;
  }
  const cl=document.getElementById('op-cat-clear'); if(cl) cl.style.display='';
  const fmtExpiry=(iso)=>{
    if(!iso) return '';
    const ms=new Date(iso).getTime()-Date.now();
    if(ms<=0) return 'expirado';
    const h=Math.floor(ms/3600000),m=Math.floor((ms%3600000)/60000);
    return 'expira en '+(h>0?h+'h ':'')+m+'m';
  };
  const ownN=list.filter(c=>c.source==='own').length;
  const asgN=list.filter(c=>c.source==='assigned').length;
  const header='📚 Mis catálogos <span class="slbl-n">'+list.length+'</span>'+
    (asgN?' <span style="font-size:10px;color:var(--tx2);font-weight:500;margin-left:6px;">('+ownN+' propios · '+asgN+' asignados)</span>':'');
  wrap.innerHTML='<div class="slbl" style="margin-top:14px;">'+header+'</div>'+
    list.map(c=>{
      const isActive=c.key===activeKey;
      const isAssigned=c.source==='assigned';
      const safeKey=c.key.replace(/'/g,"\\'");
      const safeName=(c.name||'Catálogo').replace(/</g,'&lt;');
      const dt=c.assignedAt?new Date(c.assignedAt).toLocaleString('es-CO',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}):'';
      const tag=isAssigned
        ? '<span style="display:inline-block;font-size:9px;font-weight:800;letter-spacing:.06em;padding:2px 7px;border-radius:10px;background:rgba(0,148,255,.15);color:#0094ff;border:1px solid rgba(0,148,255,.35);margin-right:6px;vertical-align:middle;">ASIGNADO'+(c.isSelectiveAudit?' 🎯':'')+'</span>'
        : '<span style="display:inline-block;font-size:9px;font-weight:800;letter-spacing:.06em;padding:2px 7px;border-radius:10px;background:rgba(0,229,160,.12);color:var(--ac);border:1px solid rgba(0,229,160,.3);margin-right:6px;vertical-align:middle;">PROPIO</span>';
      const borderColor=isActive?'rgba(0,229,160,.45)':(isAssigned?'rgba(0,148,255,.3)':'var(--bd)');
      const _dbR=getDB();
      const _closedInvs=(_dbR.inventories||[]).filter(i=>i.username===CUR.username && i.catalogKey===c.key && i.endTime);
      const _lastClosed=_closedInvs.sort((a,b)=>new Date(b.endTime)-new Date(a.endTime))[0];
      const _hasInProgress = ACTIVE && ACTIVE.username===CUR.username && (ACTIVE.catalogKey===c.key || (!ACTIVE.catalogKey && isActive)) && ((ACTIVE.locations&&ACTIVE.locations.length>0) || ACTIVE.cur);
      const _isFinished = !_hasInProgress && !!_lastClosed;
      const _finishedAt = _lastClosed ? new Date(_lastClosed.endTime).toLocaleString('es-CO',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}) : '';
      const _finBorder = _isFinished ? 'rgba(0,229,160,.55)' : borderColor;
      return '<div style="background:var(--sf);border:1.5px solid '+_finBorder+';border-radius:var(--rs);padding:12px 14px;margin-bottom:8px;'+(_isFinished?'box-shadow:0 0 0 1px rgba(0,229,160,.15), 0 8px 24px -12px rgba(0,229,160,.35);':'')+'">'+
        '<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;">'+
          '<div style="flex:1;min-width:0;">'+
            '<div style="font-family:var(--fh);font-size:14px;font-weight:800;display:flex;align-items:center;gap:6px;flex-wrap:wrap;">'+
              (isActive?'<span style="color:var(--ac);">●</span> ':'')+ tag + safeName +
            '</div>'+
            '<div style="font-size:11px;color:var(--tx2);margin-top:3px;">'+c.refsCount+' refs · '+dt+' · '+fmtExpiry(c.expiresAt)+
              (isAssigned&&c.assignedBy?' · por '+c.assignedBy:'')+'</div>'+
            (_isFinished
              ? ''
              : (isActive?'<div style="font-size:10px;color:var(--ac);font-weight:700;margin-top:3px;letter-spacing:.05em;">ACTIVO PARA INVENTARIO</div>':''))+
          '</div>'+
        '</div>'+
        (_isFinished
          ? '<div style="margin-top:12px;padding:14px 14px 12px;border-radius:14px;background:linear-gradient(135deg, rgba(0,229,160,.14), rgba(0,184,148,.06));border:1px solid rgba(0,229,160,.35);position:relative;overflow:hidden;">'+
              '<div style="display:flex;align-items:center;gap:10px;">'+
                '<div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#00e5a0,#00b894);display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 4px 14px -4px rgba(0,229,160,.55);">✓</div>'+
                '<div style="flex:1;min-width:0;">'+
                  '<div style="font-family:var(--fh);font-size:14px;font-weight:800;color:var(--ac);letter-spacing:.02em;">Inventario terminado</div>'+
                  '<div style="font-size:11px;color:var(--tx2);margin-top:2px;">Cerrado el '+_finishedAt+'</div>'+
                '</div>'+
                '<button class="btn bs sm" style="flex:0 0 auto;padding:6px 10px;font-size:11px;" onclick="showReportById('+_lastClosed.id+')">📋 Ver reporte</button>'+
              '</div>'+
            '</div>'
          : '')+
        '<div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap;">'+
          (function(){
            if(_hasInProgress){
              const nLoc=(ACTIVE.locations?ACTIVE.locations.length:0)+(ACTIVE.cur?1:0);
              return '<button class="btn bp sm" style="flex:1;min-width:140px;background:linear-gradient(135deg,#00e5a0,#00b894);" onclick="continueInvWithCatalog(\''+safeKey+'\')">▶ Continuar inventario ('+nLoc+')</button>';
            }
            if(_isFinished){
              return '<button class="btn bp sm" style="flex:1;min-width:160px;background:linear-gradient(135deg,#00e5a0,#00b894);" onclick="startNewInvWithCatalog(\''+safeKey+'\')">🔄 Iniciar nuevo inventario</button>';
            }
            return '<button class="btn bp sm" style="flex:1;min-width:140px;" onclick="startInvWithCatalog(\''+safeKey+'\')">▶ Iniciar inventario</button>';
          })()+
          (!isActive?'<button class="btn bs sm" style="flex:0 0 auto;" onclick="activateOwnCat(\''+safeKey+'\')">Seleccionar</button>':'')+
          '<button class="btn bd2 sm" style="flex:0 0 auto;" onclick="delOwnCat(\''+safeKey+'\')">🗑</button>'+
        '</div>'+
      '</div>';
    }).join('');
}
function activateOwnCat(key){
  setActiveOwn(CUR.username,key);
  renderCatBar();renderOwnCatList();
  flash('Catálogo activo cambiado','ok');
}
function delOwnCat(key){
  const db=getDB();
  const entry=db.catalogs?.[key];
  const nm=entry?.name||'este catálogo';
  appConfirm('Eliminar catálogo','¿Eliminar "'+nm+'"? Esta acción no se puede deshacer.',()=>{
    delOwnCatalog(CUR.username,key);
    renderCatBar();renderOwnCatList();
    flash('Catálogo eliminado','ok');
  });
}
function startInvWithCatalog(key){
  if(ACTIVE && ACTIVE.catalogKey && ACTIVE.catalogKey===key){
    // mismo catálogo: continuar
    continueInvWithCatalog(key);
    return;
  }
  if(ACTIVE && ((ACTIVE.locations&&ACTIVE.locations.length>0)||ACTIVE.cur)){
    appConfirm('Inventario en curso','Ya tienes un inventario en curso en otro catálogo. ¿Descartar el progreso actual e iniciar uno nuevo en este catálogo?',()=>{
      ACTIVE=null; clearActive();
      setActiveOwn(CUR.username,key);
      renderCatBar();renderOwnCatList();
      flash('Iniciando inventario…','ok');
      nav('scan');
    });
    return;
  }
  ACTIVE=null; clearActive();
  setActiveOwn(CUR.username,key);
  renderCatBar();renderOwnCatList();
  flash('Iniciando inventario…','ok');
  nav('scan');
}
function continueInvWithCatalog(key){
  setActiveOwn(CUR.username,key);
  if(ACTIVE && !ACTIVE.catalogKey){ ACTIVE.catalogKey=key; saveActive(ACTIVE); }
  renderCatBar();renderOwnCatList();
  flash('Continuando inventario…','ok');
  nav('scan');
}
function startNewInvWithCatalog(key){
  appConfirm('🔄 Iniciar nuevo inventario','Se eliminará el inventario anterior de este catálogo y se reemplazará por uno nuevo.\n\n¿Continuar?',()=>{
    const db=getDB();
    db.inventories=(db.inventories||[]).filter(i=>!(i.username===CUR.username && i.catalogKey===key));
    setDB(db);
    startInvWithCatalog(key);
  });
}
function showReportById(id){
  const db=getDB();
  const inv=(db.inventories||[]).find(i=>i.id===id);
  if(!inv){flash('Reporte no encontrado','wn');return;}
  showReport(inv);
}
function assignCatalog(){
  if(!_adminTmpCat){flash('Carga un archivo primero','wn');return;}
  const sel=document.getElementById('cat-assign-user');
  const target=sel.value;
  if(!target){flash('Selecciona un operador','wn');return;}
  const db=getDB();
  const opName=db.users?.[target]?.name||target;
  const _assignName=(_adminTmpCat.fname||'')||('Catálogo asignado '+new Date().toLocaleString('es-CO',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}));
  setCatalog(target,_adminTmpCat.cat,_adminTmpCat.info,CUR.username,_assignName);
  _adminTmpCat=null;
  document.getElementById('admin-cat-preview').innerHTML='';
  document.getElementById('cat-assign-btn-wrap').style.display='none';
  renderCatStatusList();
  // Notificación en app + navegador
  const catMsg=`📦 El administrador te asignó un nuevo catálogo de inventario. Ya puedes iniciar tu conteo. ¡Éxito!`;
  notifyUser(target, catMsg, 'catalogo');
  flash(`✓ Catálogo asignado a ${opName}`,'ok');
}
/* ══════════════════════════════════════════════════════
   🎯 AUDITORÍA SELECTIVA
══════════════════════════════════════════════════════ */
let _saSelSet = new Set();

function openSelectiveAudit(){
  if(!_adminTmpCat){ flash('Carga un archivo primero','wn'); return; }
  const target = document.getElementById('cat-assign-user').value;
  if(!target){ flash('Selecciona un operador primero','wn'); return; }
  // Extract all unique locations from the catalog
  const allLocs = new Set();
  Object.values(_adminTmpCat.cat).forEach(ref => {
    (ref.locs||[]).forEach(l => { if(l.loc) allLocs.add(l.loc); });
  });
  if(!allLocs.size){ flash('El catálogo no tiene ubicaciones','er'); return; }
  // Default: select all
  _saSelSet = new Set(allLocs);
  document.getElementById('sa-search').value = '';
  document.getElementById('sa-err').style.display = 'none';
  renderSAGrid();
  document.getElementById('sel-audit-mo').classList.add('on');
}

function closeSAMo(e){ if(e.target === document.getElementById('sel-audit-mo')) document.getElementById('sel-audit-mo').classList.remove('on'); }

/* ── Auditoría Selectiva sobre el catálogo PROPIO del admin (Mi catálogo) ── */
let _selfAuditMode = false; // true = la modal opera sobre catálogo propio del admin

function openSelfSelectiveAudit(){
  const ownEntry = getActiveOwnEntry(CUR.username);
  if(!ownEntry){ flash('Sin catálogo propio cargado','er'); return; }
  const srcCat = ownEntry.catalog || {};
  // Extraer ubicaciones del catálogo propio
  const allLocs = new Set();
  Object.values(srcCat).forEach(ref => {
    (ref.locs||[]).forEach(l => { if(l.loc) allLocs.add(l.loc); });
  });
  if(!allLocs.size){ flash('El catálogo no tiene ubicaciones','er'); return; }
  _selfAuditMode = true;
  _saSelSet = new Set(allLocs);
  document.getElementById('sa-search').value = '';
  document.getElementById('sa-err').style.display = 'none';
  _adminTmpCat = { cat: srcCat };
  renderSAGrid();
  document.getElementById('sel-audit-mo').classList.add('on');
}

function confirmSelfSAAndAssign(){
  const db = getDB();
  const activeKey = getActiveOwnKey(CUR.username);
  const ownEntry = activeKey ? db.catalogs?.[activeKey] : null;
  if(!ownEntry){ flash('Sin catálogo','er'); return; }
  const err = document.getElementById('sa-err');
  if(_saSelSet.size === 0){
    err.textContent = 'Debes seleccionar al menos una ubicación.';
    err.style.display = 'block';
    return;
  }
  err.style.display = 'none';
  const srcCat = ownEntry.catalog || {};
  const filteredCat = {};
  Object.entries(srcCat).forEach(([code, ref]) => {
    const filteredLocs = (ref.locs||[]).filter(l => _saSelSet.has(l.loc));
    if(filteredLocs.length > 0) filteredCat[code] = { ...ref, locs: filteredLocs };
  });
  const selArray = [..._saSelSet].sort();
  const totalLocs = selArray.length;
  const totalRefs = Object.keys(filteredCat).length;
  const info = `🎯 Auditoría Selectiva · ${totalLocs} ubic. · ${totalRefs} refs`;
  if(!db.catalogs) db.catalogs = {};
  db.catalogs[activeKey] = {
    ...ownEntry,
    catalog: filteredCat,
    info,
    isSelectiveAudit: true,
    selectiveLocs: selArray
  };
  setDB(db);
  _selfAuditMode = false;
  _adminTmpCat = null;
  document.getElementById('sel-audit-mo').classList.remove('on');
  renderCatBar();
  // Ocultar botón de auditoría (ya se aplicó)
  const auditWrap = document.getElementById('op-cat-audit-wrap');
  if(auditWrap) auditWrap.style.display = 'none';
  flash(`🎯 Auditoría Selectiva aplicada — ${totalLocs} ubicaciones`,'ok');
}

function renderSAGrid(){
  if(!_adminTmpCat) return;
  const q = (document.getElementById('sa-search')?.value || '').toUpperCase();
  const allLocs = new Set();
  Object.values(_adminTmpCat.cat).forEach(ref => {
    (ref.locs||[]).forEach(l => { if(l.loc) allLocs.add(l.loc); });
  });
  const sorted = [...allLocs].sort();
  const filtered = q ? sorted.filter(l => l.includes(q)) : sorted;
  const grid = document.getElementById('sa-loc-grid');
  grid.innerHTML = filtered.map(loc => {
    const sel = _saSelSet.has(loc);
    // Count refs in this location
    let refCount = 0;
    Object.values(_adminTmpCat.cat).forEach(ref => { if((ref.locs||[]).some(l=>l.loc===loc)) refCount++; });
    return `<div class="sel-loc-cell ${sel?'sel':''}" onclick="toggleSALoc('${loc}')">
      ${loc}
      <div style="font-size:9px;font-weight:400;color:${sel?'var(--pu)':'var(--tx3)'};margin-top:2px;">${refCount} ref${refCount!==1?'s':''}</div>
    </div>`;
  }).join('');
  // Update counter
  document.getElementById('sa-count-lbl').textContent = `${_saSelSet.size} de ${allLocs.size} seleccionadas`;
}

function toggleSALoc(loc){
  if(_saSelSet.has(loc)) _saSelSet.delete(loc);
  else _saSelSet.add(loc);
  renderSAGrid();
}

function saSelAll(){
  if(!_adminTmpCat) return;
  Object.values(_adminTmpCat.cat).forEach(ref => {
    (ref.locs||[]).forEach(l => { if(l.loc) _saSelSet.add(l.loc); });
  });
  renderSAGrid();
}

function saSelNone(){
  _saSelSet = new Set();
  renderSAGrid();
}

function confirmSAAndAssign(){
  if(!_adminTmpCat){ flash('Sin catálogo cargado','er'); return; }
  const target = document.getElementById('cat-assign-user').value;
  if(!target){ flash('Selecciona un operador','wn'); return; }
  const err = document.getElementById('sa-err');
  if(_saSelSet.size === 0){
    err.textContent = 'Debes seleccionar al menos una ubicación.';
    err.style.display = 'block';
    return;
  }
  err.style.display = 'none';

  // Filter catalog to only include selected locations
  const filteredCat = {};
  Object.entries(_adminTmpCat.cat).forEach(([code, ref]) => {
    const filteredLocs = (ref.locs||[]).filter(l => _saSelSet.has(l.loc));
    if(filteredLocs.length > 0){
      filteredCat[code] = { ...ref, locs: filteredLocs };
    }
  });

  const selArray = [..._saSelSet].sort();
  const totalLocs = selArray.length;
  const totalRefs = Object.keys(filteredCat).length;
  const db = getDB();
  const opName = db.users?.[target]?.name || target;

  // Save with selectiveAudit metadata — entrada única (no unifica con otros asignados)
  const info = `🎯 Auditoría Selectiva · ${totalLocs} ubic. · ${totalRefs} refs`;
  if(!db.catalogs) db.catalogs = {};
  const _saId=Date.now().toString(36)+Math.random().toString(36).slice(2,6);
  const _saKey=target+'_assigned__'+_saId;
  db.catalogs[_saKey] = {
    catalog: filteredCat,
    info,
    name: '🎯 Auditoría Selectiva '+new Date().toLocaleString('es-CO',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}),
    assignedBy: CUR.username,
    assignedAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 12*60*60*1000).toISOString(),
    isSelectiveAudit: true,
    selectiveLocs: selArray
  };
  if(!db.settings) db.settings={};
  if(!db.settings.activeOwn) db.settings.activeOwn={};
  db.settings.activeOwn[target]=_saKey;
  setDB(db);

  _adminTmpCat = null;
  document.getElementById('sel-audit-mo').classList.remove('on');
  document.getElementById('admin-cat-preview').innerHTML = '';
  document.getElementById('cat-assign-btn-wrap').style.display = 'none';
  renderCatStatusList();

  const catMsg = `🎯 El administrador te asignó una Auditoría Selectiva de ${totalLocs} ubicaciones. ¡Prepárate para el conteo!`;
  notifyUser(target, catMsg, 'catalogo');
  flash(`🎯 Auditoría Selectiva asignada a ${opName} — ${totalLocs} ubicaciones`,'ok');
}

function renderCatPreview(rows,cols,elId){
  const el=document.getElementById(elId);if(!el) return;
  const {cM,cN,cL,cS}=cols;
  el.innerHTML=`<div style="background:var(--sf);border:1px solid var(--bd);border-radius:var(--r);padding:14px;">
    <div class="slbl" style="margin-top:0;">Vista previa</div>
    ${rows.map(r=>`<div style="border-bottom:1px solid var(--bd);padding:7px 0;font-size:12px;">
      <div style="font-family:var(--fh);font-weight:700;">${r[cM]||''} <span style="color:var(--tx2);font-weight:400;">— ${r[cN]||''}</span></div>
      <div style="font-size:11px;color:var(--tx2);margin-top:1px;">📍 ${r[cL]||''} · <b style="color:var(--ac2);">${r[cS]||0}</b></div>
    </div>`).join('')}
  </div>`;
}
function renderCatBar(){
  const bar=document.getElementById("cat-bar"),txt=document.getElementById("cat-txt");if(!bar) return;
  const db=getDB();
  const activeKey=getActiveCatalogKey(CUR.username);
  const active=activeKey?db.catalogs?.[activeKey]:null;
  const totalCats=listAllCatalogs(CUR.username).length;
  if(!active){
    if(totalCats){bar.className="cat-ok cat-bar";txt.textContent="📚 "+totalCats+" catálogo"+(totalCats!==1?"s":"")+" — selecciona uno para iniciar";}
    else{bar.className="cat-no cat-bar";txt.textContent="Sin catálogo — carga tu Excel de SAP";}
    const _b=document.getElementById('cat-sa-badge'); if(_b) _b.style.display='none';
    return;
  }
  bar.className="cat-ok cat-bar";
  const fmtExpiry=entry=>{
    if(!entry||!entry.expiresAt) return '';
    const ms=new Date(entry.expiresAt).getTime()-Date.now();
    if(ms<=0) return ' (expirado)';
    const h=Math.floor(ms/3600000),m=Math.floor((ms%3600000)/60000);
    return ` (expira en ${h>0?h+'h ':''} ${m}m)`;
  };
  const isAssignedActive=activeKey.indexOf('_assigned')>=0;
  const label=isAssignedActive?'Asignado':'Propio';
  const saTag=active.isSelectiveAudit?' 🎯':'';
  const extra=totalCats>1?` · ${totalCats} disponibles`:'';
  txt.textContent="✓ "+label+": "+active.info+saTag+fmtExpiry(active)+extra;
  // Show selective audit badge if applicable
  const assigned=active.isSelectiveAudit?active:null;
  let badge=document.getElementById('cat-sa-badge');
  if(assigned&&assigned.isSelectiveAudit){
    if(!badge){
      badge=document.createElement('div');
      badge.id='cat-sa-badge';
      badge.className='sel-audit-badge';
      badge.innerHTML='🎯 Auditoría Selectiva — '+assigned.selectiveLocs.length+' ubicaciones asignadas';
      bar.parentNode.insertBefore(badge,bar.nextSibling);
    } else {
      badge.innerHTML='🎯 Auditoría Selectiva — '+assigned.selectiveLocs.length+' ubicaciones asignadas';
      badge.style.display='';
    }
  } else {
    if(badge) badge.style.display='none';
  }
}
function getProdsInLoc(loc){
  const c=getCatalog(CUR.username);if(!c) return [];
  const res=[];
  Object.entries(c.catalog).forEach(([code,v])=>{
    const f=v.locs.find(l=>l.loc===loc.toUpperCase());
    if(f) res.push({code,name:v.name,stock:f.stock,isM2:v.isM2||false,unit:v.unit||''});
  });
  return res.sort((a,b)=>a.code.localeCompare(b.code));
}

/* ══════════════════════════════════════════════════════
   SCANNER — compatible Android + iOS Safari
   Motor: BarcodeDetector (Chrome/Android) → @zxing/browser (iOS/Safari)
══════════════════════════════════════════════════════ */
const SC={loc:{stream:null,raf:null,running:false,reader:null},prod:{stream:null,raf:null,running:false,reader:null}};

// Detectar iOS/Safari para usar siempre ZXing en esos dispositivos
const _isIOS=/iP(hone|ad|od)/i.test(navigator.userAgent);
const _isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const _useNativeDetector=!_isIOS&&!_isSafari&&typeof BarcodeDetector!=='undefined';

let _bd=null;
if(_useNativeDetector){
  try{_bd=new BarcodeDetector({formats:['ean_13','ean_8','code_128','code_39','qr_code','upc_a','upc_e','itf','pdf417','data_matrix']});}catch(e){_bd=null;}
}

async function toggleScan(t){SC[t].running?stopScan(t):await startScan(t);}

async function startScan(t){
  stopScan(t);
  const vid=document.getElementById(t==='loc'?'vid-loc':'vid-prod');
  const wrap=document.getElementById(t==='loc'?'sw-loc':'sw-prod');
  const btn=document.getElementById(t==='loc'?'scb-loc':'scb-prod');
  const perm=document.getElementById(t==='loc'?'perm-loc':'perm-prod');
  perm.classList.remove('on');perm.innerHTML='';

  const sec=location.protocol==='https:'||['localhost','127.0.0.1',''].includes(location.hostname);
  if(!sec){perm.innerHTML='⚠️ La cámara requiere HTTPS.';perm.classList.add('on');flash('Necesitas HTTPS para la cámara','wn');return;}
  if(!navigator.mediaDevices?.getUserMedia){perm.innerHTML='⚠️ Navegador sin soporte de cámara.';perm.classList.add('on');return;}

  // Constraints — iOS Safari necesita exactamente estas propiedades para la cámara trasera
  const constraints=[
    {video:{facingMode:{exact:'environment'}}},
    {video:{facingMode:'environment'}},
    {video:{facingMode:{ideal:'environment'},width:{ideal:1280},height:{ideal:720}}},
    {video:true}
  ];
  let stream=null;
  for(const c of constraints){
    try{stream=await navigator.mediaDevices.getUserMedia(c);break;}catch(e){}
  }
  if(!stream){
    let errMsg='⚠️ No se pudo acceder a la cámara. Verifica que no esté en uso.';
    try{await navigator.mediaDevices.getUserMedia({video:true});}
    catch(e){if(e?.name==='NotAllowedError') errMsg='⚠️ <b>Permiso denegado.</b><br>Safari iOS: Ajustes → Safari → Cámara → Permitir<br>Chrome: ⋮ → Config. del sitio → Cámara → Permitir';}
    perm.innerHTML=errMsg;perm.classList.add('on');flash('No se pudo abrir la cámara','wn');return;
  }

  SC[t].stream=stream;SC[t].running=true;
  vid.srcObject=stream;
  // iOS Safari requiere estos atributos explícitamente en el elemento <video>
  vid.setAttribute('playsinline','');
  vid.setAttribute('muted','');
  vid.muted=true;
  wrap.classList.add('on');btn.classList.add('on');btn.textContent='⏹';

  // Esperar a que el video esté listo — iOS necesita más tiempo
  await new Promise(res=>{
    if(vid.readyState>=2){res();return;}
    vid.onloadedmetadata=()=>{res();};
    setTimeout(res,3000); // timeout de seguridad
  });
  try{await vid.play();}catch(e){}
  // Pequeña pausa extra para iOS (el frame puede ser negro si se empieza muy rápido)
  if(_isIOS||_isSafari) await new Promise(res=>setTimeout(res,600));

  // Elegir motor de decode
  if(_bd){
    decodeLoopNative(t);
  } else {
    decodeLoopZXing(t);
  }
}

/* ── Motor 1: BarcodeDetector nativo (Chrome Android) ── */
function decodeLoopNative(t){
  if(!SC[t].running) return;
  const vid=document.getElementById(t==='loc'?'vid-loc':'vid-prod');
  if(vid.readyState<2||vid.videoWidth===0){SC[t].raf=setTimeout(()=>decodeLoopNative(t),150);return;}
  _bd.detect(vid).then(r=>{
    if(!SC[t].running) return;
    if(r&&r.length){onDecode(t,r[0].rawValue);return;}
    SC[t].raf=setTimeout(()=>decodeLoopNative(t),150);
  }).catch(()=>{SC[t].raf=setTimeout(()=>decodeLoopNative(t),200);});
}

/* ── Motor 2: @zxing/browser (iOS Safari + fallback) ── */
function decodeLoopZXing(t){
  if(!SC[t].running) return;
  const ZXingBrowser=window.ZXingBrowser||window['@zxing/browser'];
  if(!ZXingBrowser||!ZXingBrowser.BrowserMultiFormatReader){
    decodeLoopCanvas(t);return;
  }
  const vid=document.getElementById(t==='loc'?'vid-loc':'vid-prod');
  if(vid.readyState<2||vid.videoWidth===0){SC[t].raf=setTimeout(()=>decodeLoopZXing(t),200);return;}

  if(!SC[t].reader){
    try{
      const hints=new Map();
      if(ZXingBrowser.DecodeHintType && ZXingBrowser.BarcodeFormat){
        const fmts=['EAN_13','EAN_8','CODE_128','CODE_39','QR_CODE','UPC_A','UPC_E','ITF','PDF_417','DATA_MATRIX']
          .filter(f=>ZXingBrowser.BarcodeFormat[f]!==undefined)
          .map(f=>ZXingBrowser.BarcodeFormat[f]);
        if(fmts.length) hints.set(ZXingBrowser.DecodeHintType.POSSIBLE_FORMATS, fmts);
      }
      SC[t].reader=new ZXingBrowser.BrowserMultiFormatReader(hints,{delayBetweenScanAttempts:200});
    }catch(e){decodeLoopCanvas(t);return;}
  }

  // Usar decode sobre canvas — compatible con Safari
  const cv=document.getElementById(t==='loc'?'cv-loc':'cv-prod');
  const W=vid.videoWidth,H=vid.videoHeight;
  if(!W||!H){SC[t].raf=setTimeout(()=>decodeLoopZXing(t),200);return;}
  cv.width=W;cv.height=H;
  const ctx=cv.getContext('2d');
  ctx.drawImage(vid,0,0,W,H);
  try{
    // decodeFromCanvas es síncrono en @zxing/browser
    const result=SC[t].reader.decodeFromCanvas(cv);
    if(result){onDecode(t,result.getText());return;}
  }catch(e){/* NotFoundException — continuar */}
  SC[t].raf=setTimeout(()=>decodeLoopZXing(t),250);
}

/* ── Motor 3: Canvas fallback (ZXing legacy) ── */
function decodeLoopCanvas(t){
  if(!SC[t].running) return;
  const vid=document.getElementById(t==='loc'?'vid-loc':'vid-prod');
  const cv=document.getElementById(t==='loc'?'cv-loc':'cv-prod');
  if(vid.readyState<2||vid.videoWidth===0){SC[t].raf=setTimeout(()=>decodeLoopCanvas(t),200);return;}
  const W=vid.videoWidth,H=vid.videoHeight;
  cv.width=W;cv.height=H;
  const ctx=cv.getContext('2d');
  ctx.drawImage(vid,0,0,W,H);
  // Intentar con ZXing legacy si existe
  if(typeof ZXing!=='undefined'){
    try{
      const img=ctx.getImageData(0,0,W,H);
      const lum=new ZXing.RGBLuminanceSource(img.data,W,H);
      const bmp=new ZXing.BinaryBitmap(new ZXing.HybridBinarizer(lum));
      const reader=new ZXing.MultiFormatReader();
      const res=reader.decode(bmp);
      if(res){onDecode(t,res.getText());return;}
    }catch(e){}
  }
  SC[t].raf=setTimeout(()=>decodeLoopCanvas(t),250);
}

function onDecode(t,raw){
  const val=raw.trim().toUpperCase();stopScan(t);
  if(CFG.vibrate&&navigator.vibrate) navigator.vibrate(60);
  if(t==='loc'){document.getElementById('inp-loc').value=val;flash('📍 '+val);}
  else{document.getElementById('inp-xref').value=val;flash('📦 '+val);}
}

function stopScan(t){
  const vid=document.getElementById(t==='loc'?'vid-loc':'vid-prod');
  const wrap=document.getElementById(t==='loc'?'sw-loc':'sw-prod');
  const btn=document.getElementById(t==='loc'?'scb-loc':'scb-prod');
  SC[t].running=false;
  if(SC[t].raf){clearTimeout(SC[t].raf);cancelAnimationFrame(SC[t].raf);SC[t].raf=null;}
  if(SC[t].reader){try{SC[t].reader.reset();}catch(e){}SC[t].reader=null;}
  if(SC[t].stream){SC[t].stream.getTracks().forEach(tr=>tr.stop());SC[t].stream=null;}
  if(vid){vid.srcObject=null;vid.load();}
  wrap?.classList.remove('on');
  if(btn){btn.classList.remove('on');btn.textContent='📷';}
}
function stopAll(){stopScan('loc');stopScan('prod');}

/* ══════════════════════════════════════════════════════
   OPERATOR NAV
══════════════════════════════════════════════════════ */
const OP_SCRS=['home','catalog','scan','history','export','op-settings','op-tasks','op-novedades','gestionadas'];
const ALL_SCRS=['login','setup','home','catalog','scan','history','export','op-settings','op-stats','op-tasks','op-novedades','gestionadas','admin','a-users','a-progress','a-history','a-catalog','a-export','a-dashboard','a-locnotes','a-livecontrol','a-tasks','a-master','a-bitacora','rutamsg'];
let cur='login';
function resetScreenScroll(n){try{window.scrollTo(0,0);document.documentElement.scrollTop=0;document.body.scrollTop=0;if(document.scrollingElement)document.scrollingElement.scrollTop=0;document.querySelectorAll('.sa,.screen,#app').forEach(x=>{if(x&&typeof x.scrollTop==='number')x.scrollTop=0;});const el=document.getElementById('screen-'+n);if(el){el.scrollTop=0;const sc=el.querySelector('.sa');if(sc)sc.scrollTop=0;}requestAnimationFrame(()=>{try{window.scrollTo(0,0);const el=document.getElementById('screen-'+n);if(el){el.scrollTop=0;const sc=el.querySelector('.sa');if(sc)sc.scrollTop=0;}}catch(e){}});}catch(e){}}
function showScr(n){try{applySapVisibility();}catch(e){}try{var _el=document.getElementById('op-sap-state');if(_el && CUR && CUR.role==='operator'){_el.textContent = canUserSeeSap(CUR.username)?'Visible (guiado)':'Oculta (a ciegas)';_el.style.color = canUserSeeSap(CUR.username)?'var(--ac)':'var(--wn)';}}catch(e){}document.body.classList.toggle('rutamsg-open',n==='rutamsg');window.scrollTo(0,0);if(document.scrollingElement)document.scrollingElement.scrollTop=0;ALL_SCRS.forEach(s=>{const el=document.getElementById('screen-'+s);if(el) el.classList.remove('active');});document.querySelectorAll('.screen.active').forEach(el=>el.classList.remove('active'));const el=document.getElementById('screen-'+n);if(el) el.classList.add('active');cur=n;resetScreenScroll(n);setTimeout(()=>resetScreenScroll(n),60);}
function nav(n){
  if(n==='scan'){goLocStep();return;}
  stopAll();showScr(n);
  if(n==='home') refHome();
  if(n==='history'){S_hFilt='day';document.getElementById('hist-user-lbl').textContent=CUR.name;renderH();}
  if(n==='export') refExp();
  if(n==='op-settings') renderOpSettings();
  if(n==='op-stats'){renderOpStats('week');}
  if(n==='op-tasks'){renderOpTasksList('active');document.getElementById('op-tasks-lbl').textContent=CUR.name;}
  if(n==='catalog'){document.getElementById('op-cat-preview').innerHTML='';renderOwnCatList();}
  if(n==='op-novedades') initOpNovedades();
  if(n==='gestionadas') initGestionadas();
  if(n==='rutamsg') rmInit();
}
function navAdmin(n){
  if(n==='gestionadas'){showScr('gestionadas');initGestionadas();return;}
  stopAll();showScr(n);
  if(n==='admin') refAdmin();
  if(n==='a-users') renderUsersList();
  if(n==='a-progress') renderProgress();
  if(n==='a-history'){_ahFilt='day';_ahView='flat';setTimeout(()=>{populateAHUserFilter();renderAH();},0);}
  if(n==='a-catalog') renderAdminCatalog();
  if(n==='a-export') initNovedades();
  if(n==='a-dashboard') renderDashboard();
  if(n==='a-locnotes') renderLocNotesList();
  if(n==='a-livecontrol'){ renderLiveControl(); lcpStartCountdown(); return; }
  if(n==='a-tasks'){renderTasksAdminUserFilter();renderTasksList();}
  if(n==='a-master'){renderMasterUserSelector();renderMasterPanel();renderPeriodArchives();renderMasterLog();updateThemeBtn();}
  if(n==='a-bitacora'){ renderBitacora(); }
  if(n==='rutamsg'){ rmInit(); }
  // Si salimos de livecontrol, parar el countdown
  lcpStopCountdown();
}
function goBack(){stopAll();if(CUR.role==='admin'||CUR.role==='master'){navAdmin('admin');}else{showScr('home');refHome();}}
// Navega al inicio correcto según el rol (admin/master → panel admin, operador → home)
function goHome(){document.body.classList.remove('rutamsg-open');if(CUR.role==='admin'||CUR.role==='master'){navAdmin('admin');}else{showScr('home');refHome();}}

/* ══════════════════════════════════════════════════════
   OPERATOR HOME
══════════════════════════════════════════════════════ */
function refHome(){
  // Header
  document.getElementById('home-user').textContent='👤 '+CUR.name;
  document.getElementById('home-date').textContent=new Date().toLocaleDateString('es-CO',{weekday:'long',day:'numeric',month:'long'});
  renderCatBar();
  renderOpNotifs();

  // Stats del día
  const td=toDS(new Date());
  const myInvs=getUserInvs(CUR.username).filter(i=>i.date===td);
  const allMyInvs=getUserInvs(CUR.username);
  const totU=Math.round(myInvs.reduce((a,v)=>a+v.locations.filter(l=>!l.isMissingLoc).reduce((b,l)=>b+Object.values(l.items).reduce((c,it)=>c+(it.counted||0),0),0),0));
  // Contar TODAS las novedades del día (diffs + extras + missing_loc + ubicaciones no visitadas)
  // independientemente de si el admin ya les puso veredicto
  const totN=myInvs.reduce((a,v)=>a+v.locations.reduce((b,l)=>{
    if(l.isMissingLoc) return b+1; // cada ubicación no visitada cuenta como 1 novedad
    return b+Object.values(l.items).filter(it=>
      it.status==='diff'||it.status==='novedad'||it.status==='missing_loc'||
      (it.counted===null&&!it.isExtra&&it.status!=='ok')
    ).length;
  },0),0);
  document.getElementById('today-strip').innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto auto;gap:6px;">
      <div style="background:var(--sf2);border-radius:10px;padding:10px 12px;display:flex;align-items:center;gap:10px;">
        <div style="font-size:18px;">📦</div>
        <div><div style="font-family:var(--fh);font-size:22px;font-weight:900;color:var(--tx);line-height:1;">${myInvs.length}</div><div style="font-size:10px;color:var(--tx2);">Inv. hoy</div></div>
      </div>
      <div style="background:var(--sf2);border-radius:10px;padding:10px 12px;display:flex;align-items:center;gap:10px;">
        <div style="font-size:18px;">🔢</div>
        <div><div style="font-family:var(--fh);font-size:22px;font-weight:900;color:var(--ac);line-height:1;">${totU}</div><div style="font-size:10px;color:var(--tx2);">Unidades</div></div>
      </div>
      <div style="background:var(--sf2);border-radius:10px;padding:10px 12px;display:flex;align-items:center;gap:10px;">
        <div style="font-size:18px;">⚡</div>
        <div><div style="font-family:var(--fh);font-size:22px;font-weight:900;color:${totN?'var(--dg)':'var(--tx2)'};line-height:1;">${totN}</div><div style="font-size:10px;color:var(--tx2);">Novedades</div></div>
      </div>
      <div style="background:var(--sf2);border-radius:10px;padding:10px 12px;display:flex;align-items:center;gap:10px;">
        <div style="font-size:18px;">📋</div>
        <div><div style="font-family:var(--fh);font-size:22px;font-weight:900;color:var(--tx);line-height:1;">${allMyInvs.length}</div><div style="font-size:10px;color:var(--tx2);">Total inv.</div></div>
      </div>
    </div>`;

  // Inventario en curso
  const panel=document.getElementById('act-panel');
  const btnTitle=document.getElementById('btn-new-title');
  const btnSub=document.getElementById('btn-new-sub');
  const btn=document.getElementById('btn-new');
  if(ACTIVE){
    const ai=ACTIVE, n=ai.locations.filter(l=>!l.isMissingLoc).length+(ai.cur?1:0), cc=ai.cur?ai.cur.code:null;
    // Check selective audit
    const assignedH=getActiveCatalogEntry(CUR.username);
    const saH=assignedH&&assignedH.isSelectiveAudit;
    const saHtml=saH?`<div style="margin-top:6px;"><span class="sel-audit-badge">🎯 Auditoría Selectiva · ${assignedH.selectiveLocs?.length||0} ubicaciones</span></div>`:'';
    panel.innerHTML=`<div style="background:rgba(0,229,160,.08);border:1.5px solid rgba(0,229,160,.25);border-radius:14px;padding:13px 15px;margin-bottom:10px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
        <div>
          <div style="font-size:11px;font-weight:700;color:var(--ac);text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">● ${saH?'Auditoría en curso':'Inventario en curso'}</div>
          <div style="font-family:var(--fh);font-size:15px;font-weight:800;">${n} ubicación${n!==1?'es':''} contadas</div>
          <div style="font-size:11px;color:var(--tx2);margin-top:2px;">Inicio: ${fT(new Date(ai.startTime))}${cc?` · en <b style="color:var(--ac)">${cc}</b>`:''}</div>
          ${saHtml}
        </div>
        <span class="badge bo" style="flex-shrink:0;">Activo</span>
      </div>
      <div style="display:flex;gap:8px;margin-top:12px;">
        <button onclick="startOrContinue()" style="flex:1;background:linear-gradient(135deg,#0094ff,#006fd6);border:none;border-radius:12px;padding:11px 14px;cursor:pointer;color:#fff;font-family:var(--fh);font-size:13px;font-weight:800;">▶ Continuar</button>
        <button onclick="cancelInv()" style="flex:1;background:rgba(255,77,109,.08);border:1.5px solid rgba(255,77,109,.3);border-radius:12px;padding:11px 14px;cursor:pointer;color:var(--dg);font-family:var(--fh);font-size:13px;font-weight:700;">🗑 Cancelar</button>
      </div>
    </div>`;
    if(btnTitle) btnTitle.textContent = cc ? '▶ Continuar: '+cc : (saH?'▶ Continuar Auditoría':'▶ Continuar Inventario');
    if(btnSub) btnSub.textContent = n+' ubicaciones contadas · toca para continuar';
    if(btn) btn.style.background='linear-gradient(135deg,#0094ff,#006fd6)';
  } else {
    panel.innerHTML='';
    // Check if there's a selective audit catalog assigned
    const assignedH2=getActiveCatalogEntry(CUR.username);
    const saH2=assignedH2&&assignedH2.isSelectiveAudit;
    if(btnTitle) btnTitle.textContent=saH2?'🎯 Iniciar Auditoría Selectiva':'Nuevo Inventario';
    if(btnSub) btnSub.textContent=saH2?`${assignedH2.selectiveLocs?.length||0} ubicaciones asignadas para auditoría`:'Iniciar conteo de ubicaciones';
    if(btn) btn.style.background=saH2?'linear-gradient(135deg,#b46cff,#8e44ee)':'linear-gradient(135deg,#00e5a0,#00b87a)';
  }

  // Asignaciones
  const myAssigns=getMyAssignments();
  const btnAssign=document.getElementById('btn-verify-assign');
  if(btnAssign){
    const pending=myAssigns.filter(a=>!a.verified).length;
    if(myAssigns.length>0){
      btnAssign.style.display='flex';
      const badge=document.getElementById('btn-assign-badge');
      const sub=document.getElementById('btn-assign-sub');
      if(sub) sub.textContent=`${myAssigns.length} ubicaciones · ${pending} pendientes`;
      if(badge){ if(pending>0){badge.style.display='';badge.textContent=pending;}else badge.style.display='none'; }
    } else { btnAssign.style.display='none'; }
  }

  // Tareas
  const db_t=getDB();
  const pendingTasks=(db_t.tasks||[]).filter(t=>t.assignedTo===CUR.username&&t.status!=='done');
  const btnTasks=document.getElementById('btn-op-tasks');
  if(btnTasks){
    if(pendingTasks.length>0){
      btnTasks.style.display='flex';
      const badge=document.getElementById('tasks-badge');
      if(badge) badge.textContent=pendingTasks.length;
    } else { btnTasks.style.display='none'; }
  }
  // Reconteos pendientes
  checkAndShowReconteoAlert();
}

/* OPERATOR SETTINGS */
function renderOpSettings(){
  const n=document.getElementById('op-set-name'),c=document.getElementById('op-set-cat');
  if(n) n.textContent=CUR.name;
  const cat=getCatalog(CUR.username);
  if(c) c.textContent=cat?cat.info:'Sin catálogo';
  const tc=document.getElementById('tog-conf'),tv=document.getElementById('tog-vib');
  if(tc){tc.checked=CFG.confirmClose;tc.onchange=()=>{CFG.confirmClose=tc.checked;const db=getDB();db.settings=CFG;setDB(db);};}
  if(tv){tv.checked=CFG.vibrate;tv.onchange=()=>{CFG.vibrate=tv.checked;const db=getDB();db.settings=CFG;setDB(db);};}
}

/* ══════════════════════════════════════════════════════
   ADMIN NOTIFICATIONS
══════════════════════════════════════════════════════ */
function notifyAdmins(msg){
  const _silent = isMaster();
  const db=getDB();
  if(!db.notifications) db.notifications=[];
  const admins=Object.entries(db.users||{}).filter(([uname,u])=>u.role==='admin' && !isHiddenUser(uname,u)).map(([u])=>u);
  admins.forEach(adminUser=>{
    db.notifications.push({
      id:Date.now()+'_'+Math.random().toString(36).slice(2),
      to:adminUser,
      from: _silent ? '__system__' : CUR.username,
      fromName: _silent ? 'Sistema' : CUR.name,
      msg,
      at:new Date().toISOString(),
      read:false
    });
  });
  setDB(db);
}
function renderAdminNotifs(){
  const db=getDB();
  const notifs=(db.notifications||[]).filter(n=>n.to===CUR.username&&!n.read).sort((a,b)=>new Date(b.at)-new Date(a.at));
  const el=document.getElementById('admin-notifs');
  if(!el) return;
  if(!notifs.length){el.style.display='none';el.innerHTML='';return;}
  el.style.display='';
  const items=notifs.map(n=>{
    const t=new Date(n.at);
    const when=t.toLocaleTimeString('es-CO',{hour:'2-digit',minute:'2-digit'})+' · '+t.toLocaleDateString('es-CO',{day:'2-digit',month:'short'});
    if(n.type==='sap-request'){
      return `<div style="background:rgba(89,166,255,.08);border:1.5px solid rgba(89,166,255,.35);border-radius:var(--rs);padding:12px 13px;margin-bottom:8px;">
        <div style="font-size:13px;font-weight:600;color:var(--tx);line-height:1.5;">${n.msg}</div>
        <div style="font-size:11px;color:var(--tx3);margin-top:4px;">${when}</div>
        <div style="display:flex;gap:8px;margin-top:10px;">
          <button onclick="approveSapRequest('${n.id}')" class="btn bp sm" style="flex:1;">✅ Aceptar</button>
          <button onclick="denySapRequest('${n.id}')" class="btn bd2 sm" style="flex:1;">❌ Negar</button>
        </div>
      </div>`;
    }
    return `<div style="background:rgba(0,229,160,.07);border:1.5px solid rgba(0,229,160,.3);border-radius:var(--rs);padding:11px 13px;margin-bottom:8px;display:flex;align-items:flex-start;gap:10px;">
      <div style="flex:1;min-width:0;">
        <div style="font-size:13px;font-weight:600;color:var(--tx);line-height:1.5;">${n.msg}</div>
        <div style="font-size:11px;color:var(--tx3);margin-top:3px;">${when}</div>
      </div>
      <button onclick="dismissNotif('${n.id}')" style="background:none;border:none;color:var(--tx3);font-size:18px;cursor:pointer;padding:0;line-height:1;flex-shrink:0;">✕</button>
    </div>`;
  }).join('');
  el.innerHTML=`<details style="background:rgba(0,229,160,.04);border:1px solid rgba(0,229,160,.25);border-radius:var(--rs);overflow:hidden;">
    <summary style="cursor:pointer;list-style:none;padding:10px 13px;display:flex;align-items:center;gap:8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--ac);">
      🔔 Notificaciones <span style="background:var(--ac);color:#000;border-radius:10px;padding:1px 8px;font-size:11px;">${notifs.length}</span>
      <span style="margin-left:auto;font-size:10px;color:var(--tx3);font-weight:500;text-transform:none;letter-spacing:0;">tocar para ver</span>
    </summary>
    <div style="padding:10px 10px 4px;max-height:340px;overflow-y:auto;">
      ${items}
      ${notifs.length>1?`<button onclick="dismissAllAdminNotifs()" style="width:100%;background:rgba(255,255,255,.04);border:1px solid var(--bd);color:var(--tx2);padding:8px;border-radius:var(--rs);font-size:12px;cursor:pointer;margin-top:4px;">Marcar todas como leídas</button>`:''}
    </div>
  </details>`;
}
function dismissNotif(id){
  const db=getDB();
  const n=(db.notifications||[]).find(x=>x.id===id);
  if(n) n.read=true;
  setDB(db);
  renderAdminNotifs();
}
function dismissAllAdminNotifs(){
  const db=getDB();
  (db.notifications||[]).forEach(n=>{ if(n.to===CUR.username&&!n.read) n.read=true; });
  setDB(db);
  renderAdminNotifs();
}

/* ══════════════════════════════════════════════════════
   ADMIN HOME
══════════════════════════════════════════════════════ */
function adminNavCatalog(){
  stopAll();showScr('catalog');
  document.getElementById('op-cat-preview').innerHTML='';
  renderOwnCatList();
  const hasCat = !!getCatalog(CUR.username);
  const isAdminOrMaster = CUR.role==='admin' || CUR.role==='master';
  document.getElementById('op-cat-audit-wrap').style.display = (hasCat && isAdminOrMaster) ? '' : 'none';
}
function adminDoInventory(){
  ACTIVE=loadActive();
  startOrContinue();
}

function refAdmin(){
  document.getElementById('admin-user-lbl').textContent='🔑 '+CUR.name;
  document.getElementById('admin-date').textContent=new Date().toLocaleDateString('es-CO',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  const all=getAllInvs();
  const td=toDS(new Date());
  const today=all.filter(i=>i.date===td);
  const db=getDB();
  const verdicts=db.novedadVerdicts||{};
  const novAll=all.reduce((a,v)=>a+v.locations.reduce((b,l)=>{
    if(l.isMissingLoc){
      // contar solo refs sin veredicto
      const pendingRefs=Object.keys(l.items).filter(sku=>sku!=='__loc__'&&!verdicts[`${v.id}_${l.code}_${sku}_missing`]);
      return b+(pendingRefs.length>0?1:0);
    }
    return b+Object.entries(l.items).filter(([code,i])=>{
      const hasNov=i.status==='diff'||i.status==='novedad'||i.status==='missing_loc'||(i.counted===null&&!i.isExtra&&i.status!=='ok');
      if(!hasNov) return false;
      const vKey=i.status==='missing_loc'?`${v.id}_${l.code}_${code}_missing`:`${v.id}_${l.code}_${code}`;
      return !verdicts[vKey];
    }).length;
  },0),0);
  const nUsers=Object.keys(db.users||{}).filter(uname=>!isHiddenUser(uname,(db.users||{})[uname])).length;
  document.getElementById('admin-strip').innerHTML=`
    <div class="qs-item"><div class="qs-n">${nUsers}</div><div class="qs-l">Usuarios</div></div>
    <div class="qs-item"><div class="qs-n" style="color:var(--ac);">${today.length}</div><div class="qs-l">Inv. hoy</div></div>
    <div class="qs-item"><div class="qs-n">${all.length}</div><div class="qs-l">Total inv.</div></div>
    <div class="qs-item"><div class="qs-n" style="color:${novAll?'var(--dg)':'var(--tx2)'};">${novAll}</div><div class="qs-l">Novedades</div></div>`;
  // Show active inventory panel if admin has one in progress
  const ap=document.getElementById('admin-act-panel');
  if(ap){
    if(ACTIVE){
      const n=ACTIVE.locations.length+(ACTIVE.cur?1:0),cc=ACTIVE.cur?ACTIVE.cur.code:null;
      ap.innerHTML=`<div class="ip" style="margin-top:10px;"><div class="ip-t">📦 Inventario propio en curso</div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
          <div><div style="font-family:var(--fh);font-size:14px;font-weight:700;">${n} ubicación${n!==1?'es':''}</div>
          <div style="font-size:12px;color:var(--tx2);margin-top:2px;">Inicio: ${fT(new Date(ACTIVE.startTime))}${cc?` · <span style="color:var(--ac)">${cc}</span>`:''}</div></div>
          <span class="badge bo">● Activo</span>
        </div>
        <div class="mt10" style="display:flex;gap:8px;"><button class="btn bp sm" style="flex:1;" onclick="adminDoInventory()">${cc?'▶ Continuar: '+cc:'➕ Continuar'}</button><button class="btn sm" style="flex:1;background:rgba(255,77,109,.08);border:1.5px solid rgba(255,77,109,.3);color:var(--dg);" onclick="cancelInv()">🗑 Cancelar</button></div></div>`;
    } else { ap.innerHTML=''; }
  }
  // Show catalog status for admin
  const cat=getCatalog(CUR.username);
  const adminCatEl=document.getElementById('admin-cat-info');
  if(adminCatEl) adminCatEl.textContent=cat?'📂 Mi catálogo: '+cat.info:'📂 Sin catálogo propio';
  // Render notifications
  renderAdminNotifs();
}

/* ══════════════════════════════════════════════════════
   ADMIN: USERS
══════════════════════════════════════════════════════ */
let _adminVerified=false;
function openCreateUser(){
  if(isMaster()||_adminVerified){
    openCuModal();
  } else {
    // show verify modal
    document.getElementById('va-user').value='';
    document.getElementById('va-pass').value='';
    document.getElementById('va-err').style.display='none';
    document.getElementById('va-mo').classList.add('on');
  }
}
function verifyAdmin(){
  const user=document.getElementById('va-user').value.trim().toLowerCase();
  const pass=document.getElementById('va-pass').value;
  const err=document.getElementById('va-err');
  const db=getDB();
  const u=db.users[user];
  if(!u||u.role!=='admin'||u.password!==hash(pass)){
    err.textContent='Credenciales incorrectas o no es administrador';
    err.style.display='block';return;
  }
  _adminVerified=true;
  document.getElementById('va-mo').classList.remove('on');
  openCuModal();
}
function openCuModal(){
  document.getElementById('cu-name').value='';
  document.getElementById('cu-user').value='';
  document.getElementById('cu-pass').value='';
  document.getElementById('cu-role').value='operator';
  document.getElementById('cu-err').style.display='none';
  document.getElementById('cu-mo').classList.add('on');
}
function closeCuMo(e){if(e.target===document.getElementById('cu-mo')) document.getElementById('cu-mo').classList.remove('on');}
function createUser(){
  const name=document.getElementById('cu-name').value.trim();
  const user=document.getElementById('cu-user').value.trim().toLowerCase().replace(/\s/g,'');
  const pass=document.getElementById('cu-pass').value;
  const role=document.getElementById('cu-role').value;
  const err=document.getElementById('cu-err');
  if(!name||!user||!pass){err.textContent='Completa todos los campos';err.style.display='block';return;}
  if(pass.length<4){err.textContent='Contraseña mínimo 4 caracteres';err.style.display='block';return;}
  const db=getDB();
  if(db.users[user]){err.textContent='Ese nombre de usuario ya existe';err.style.display='block';return;}
  db.users[user]={name,password:hash(pass),role,createdAt:new Date().toISOString(),createdBy:CUR.username};
  setDB(db);
  document.getElementById('cu-mo').classList.remove('on');
  renderUsersList();
  flash(`✓ Usuario "${user}" creado como ${role==='admin'?'Administrador':'Operador'}`,'ok');
}
function renderUsersList(){
  const db=getDB();
  const el=document.getElementById('users-list');
  const users=Object.entries(db.users||{}).filter(([uname,u])=>!isHiddenUser(uname,u));
  if(!users.length){el.innerHTML='<div class="es"><div class="ei">👥</div><p>Sin usuarios registrados</p></div>';return;}
  el.innerHTML=users.map(([uname,u])=>{
    const invCount=getUserInvs(uname).length;
    const cat=getCatalog(uname);
    const isSelf = uname===CUR.username;
    return `<div class="user-card" style="flex-wrap:wrap;">
      <div class="user-card-ic ${u.role==='admin'?'uc-admin':'uc-op'}">${u.role==='admin'?'🔑':'👷'}</div>
      <div class="user-card-inf" style="flex:1;min-width:0;">
        <div class="user-card-nm">${u.name}</div>
        <div class="user-card-sub">@${uname} · ${invCount} inventario${invCount!==1?'s':''} · ${cat?cat.info:'Sin catálogo'}</div>
        <div style="margin-top:4px;"><span class="badge ${u.role==='admin'?'b-admin':'b-op'}">${u.role==='admin'?'🔑 Admin':'👷 Operador'}</span></div>
      </div>
      <div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:4px;width:100%;">
        <button class="btn bs sm" style="flex:1;min-width:100px;" onclick="openChangePassModal('${uname}')">🔑 Cambiar clave</button>
        ${!isSelf?`<button class="btn bd2 sm" style="flex:1;min-width:100px;" onclick="deleteUser('${uname}')">❌ Eliminar</button>`:'<span style="flex:1;"></span>'}
      </div>
    </div>`;
  }).join('');
}
function deleteUser(uname){
  if(uname==='__master__'){ flash('No permitido','er'); return; }
  const db=getDB();
  const u=db.users[uname];
  confirmAuditAction('¿Eliminar usuario?',`Eliminar a "${u?.name||uname}" (@${uname}).\n\nSus inventarios NO se borrarán automáticamente.`,()=>{
    logAudit('user.delete', `Eliminó usuario ${u?.name||uname} (@${uname})`, {uname, role:u?.role, name:u?.name});
    delete db.users[uname];
    if(db.catalogs){_allCatKeysFor(uname,db).forEach(k=>delete db.catalogs[k]);delete db.catalogs[uname+'_reconteo'];}
    if(db.settings&&db.settings.activeOwn) delete db.settings.activeOwn[uname];
    setDB(db);renderUsersList();flash('Usuario eliminado');
  });
}

/* ══════════════════════════════════════════════════════
   CHANGE PASSWORD
══════════════════════════════════════════════════════ */
let _chpassTarget = null; // username whose password will be changed

function openChangePassModal(uname){
  const db = getDB();
  const u = db.users[uname];
  if(!u){ flash('Usuario no encontrado','er'); return; }
  _chpassTarget = uname;
  const isSelf = uname === CUR.username;
  const isAdminChangingOther = CUR.role === 'admin' && !isSelf;
  const isMasterChangingOther = CUR.role === 'master' && !isSelf;
  // Label
  document.getElementById('chpass-target-lbl').textContent =
    isSelf ? `Cambiando la contraseña de tu cuenta (@${uname})` :
    `Cambiando la contraseña de: ${u.name} (@${uname})`;
  // Si el admin o master cambia la clave de otro no necesita la clave actual
  const curWrap = document.getElementById('chpass-cur-wrap');
  curWrap.style.display = (isAdminChangingOther || isMasterChangingOther) ? 'none' : '';
  // Clear fields
  document.getElementById('chpass-cur').value = '';
  document.getElementById('chpass-new').value = '';
  document.getElementById('chpass-new2').value = '';
  document.getElementById('chpass-err').style.display = 'none';
  document.getElementById('chpass-mo').classList.add('on');
}

function closeChPassMo(e){
  if(e.target === document.getElementById('chpass-mo'))
    document.getElementById('chpass-mo').classList.remove('on');
}

function doChangePass(){
  const db = getDB();
  const uname = _chpassTarget;
  const u = db.users[uname];
  if(!u || !uname){ flash('Error: usuario no encontrado','er'); return; }
  const isSelf = uname === CUR.username;
  const isAdminChangingOther = CUR.role === 'admin' && !isSelf;
  const isMasterChangingOther = CUR.role === 'master' && !isSelf;
  const errEl = document.getElementById('chpass-err');
  errEl.style.display = 'none';
  const showErr = msg => { errEl.textContent = msg; errEl.style.display = 'block'; };

  // Verify current password (only when changing own password)
  if(!isAdminChangingOther && !isMasterChangingOther){
    const cur = document.getElementById('chpass-cur').value;
    if(!cur){ showErr('Ingresa la contraseña actual'); return; }
    if(u.password !== hash(cur)){ showErr('La contraseña actual es incorrecta'); return; }
  }

  const newPass = document.getElementById('chpass-new').value;
  const newPass2 = document.getElementById('chpass-new2').value;
  if(!newPass){ showErr('Ingresa la nueva contraseña'); return; }
  if(newPass.length < 4){ showErr('La contraseña debe tener al menos 4 caracteres'); return; }
  if(newPass !== newPass2){ showErr('Las contraseñas no coinciden'); return; }

  // Save
  db.users[uname].password = hash(newPass);
  setDB(db);
  document.getElementById('chpass-mo').classList.remove('on');
  flash(`✅ Contraseña de ${u.name} actualizada`, 'ok');
}

function quickDeleteUserRecords(uname){
  const db=getDB();
  const u=db.users[uname];
  const invs=getUserInvs(uname);
  if(!invs.length){flash('Este usuario no tiene inventarios guardados','wn');return;}
  // Get dates for this user
  const dates=[...new Set(invs.map(i=>i.date))].sort((a,b)=>b.localeCompare(a));
  // Build a small picker
  let msg=`Eliminar registros de: ${u?.name||uname}\n\n${invs.length} inventario${invs.length!==1?'s':''} en ${dates.length} día${dates.length!==1?'s':''}\n\n¿Qué deseas eliminar?\n\n[OK] = Eliminar TODOS los registros\n[Cancelar] = Cancelar`;
  appConfirm('Eliminar registros',`Eliminar TODOS los inventarios de: ${u?.name||uname}.\n\nEsta acción no se puede deshacer.`,()=>{
    db.inventories=(db.inventories||[]).filter(i=>i.username!==uname);
    try{localStorage.removeItem('itp3_active_'+uname);}catch(e){}
    setDB(db);renderUsersList();flash(`✓ Todos los registros de ${u?.name||uname} eliminados`,'ok');
  });
}

/* ══════════════════════════════════════════════════════
   ADMIN: PROGRESS (quincenas + ubicaciones)
══════════════════════════════════════════════════════ */
let _curPeriod='';
function getPeriods(){
  // current and last 6 quincenas
  const periods=[];
  const now=new Date();
  for(let i=0;i<6;i++){
    const d=new Date(now);d.setMonth(d.getMonth()-Math.floor(i/2));
    const half=i%2===0?(now.getDate()<=15?1:2):(now.getDate()<=15?2:1);
    const mo=d.getMonth(),yr=d.getFullYear();
    const actualHalf=i===0?(now.getDate()<=15?1:2):(i===1?(now.getDate()<=15?2:1):undefined);
    // Simpler: just generate last 6 quincenas
    const dd=new Date(now);dd.setDate(1);dd.setMonth(dd.getMonth()-Math.floor(i/2));
    const h=i%2===0?(now.getDate()<=15?1:2):(now.getDate()<=15?2:1);
    const key=`${dd.getFullYear()}-${String(dd.getMonth()+1).padStart(2,'0')}-Q${h}`;
    const label=`${dd.toLocaleDateString('es-CO',{month:'short',year:'numeric'})} Q${h}`;
    if(!periods.find(p=>p.key===key)) periods.push({key,label});
  }
  return periods.slice(0,4);
}
function renderProgress(){
  const periods=getPeriods();
  if(!_curPeriod||!periods.find(p=>p.key===_curPeriod)) _curPeriod=periods[0].key;
  const tabs=document.getElementById('quin-tabs');
  tabs.innerHTML=periods.map(p=>`<div class="per-tab ${p.key===_curPeriod?'on':''}" onclick="setPeriod('${p.key}',this)">${p.label}</div>`).join('');
  renderProgressContent();
}
function setPeriod(k,el){_curPeriod=k;document.querySelectorAll('.per-tab').forEach(t=>t.classList.remove('on'));el.classList.add('on');renderProgressContent();}
function addMasterLoc(){
  const inp=document.getElementById('inp-add-loc');
  const code=inp.value.trim().toUpperCase();
  if(!code){flash('Ingresa un código','er');return;}
  const db=getDB();
  if(!db.masterLocs) db.masterLocs={};
  if(db.masterLocs[code]){flash('Esa ubicación ya existe','wn');return;}
  db.masterLocs[code]={code,addedBy:CUR.username,addedAt:new Date().toISOString()};
  setDB(db);inp.value='';renderProgressContent();flash(`✓ ${code} agregada`,'ok');
}
function addBulkLocs(){
  const inp=document.getElementById('inp-bulk-loc');
  const codes=inp.value.split(/[,;\s]+/).map(c=>c.trim().toUpperCase()).filter(Boolean);
  if(!codes.length){flash('Ingresa códigos separados por comas','er');return;}
  const db=getDB();if(!db.masterLocs) db.masterLocs={};
  let added=0;
  codes.forEach(code=>{if(!db.masterLocs[code]){db.masterLocs[code]={code,addedBy:CUR.username,addedAt:new Date().toISOString()};added++;}});
  setDB(db);inp.value='';renderProgressContent();flash(`✓ ${added} ubicación${added!==1?'es':''} agregadas`,'ok');
}
function renderProgressContent(){
  const db=getDB();
  const locs=Object.values(db.masterLocs||{});
  const period=_curPeriod;
  // Count what's been counted in this period
  const allInvs=getAllInvs();
  const periodInvs=allInvs.filter(inv=>{
    const [yr,mo,q]=period.split(/[-Q]/);
    const d=new Date(inv.startTime);
    const invQ=d.getDate()<=15?1:2;
    return d.getFullYear()===parseInt(yr)&&d.getMonth()+1===parseInt(mo)&&invQ===parseInt(q);
  });
  const countedLocs=new Set();
  const diffLocs=new Set();
  periodInvs.forEach(inv=>{
    inv.locations.forEach(loc=>{
      if(loc.isMissingLoc) return; // ← ignorar ubicaciones no contadas al cerrar
      const hasDiff=Object.values(loc.items).some(i=>i.status==='diff'||i.status==='novedad');
      if(hasDiff) diffLocs.add(loc.code);
      else countedLocs.add(loc.code);
    });
  });
  // Also mark from locStatus
  Object.entries(db.locStatus||{}).forEach(([k,v])=>{
    if(!k.startsWith(period+'_')) return;
    const code=k.slice(period.length+1);
    if(v.status==='counted'||v.status==='empty') countedLocs.add(code);
  });
  const verifiedKey=k=>`${period}_${k}`;
  const verified=locs.filter(l=>{const s=db.locStatus?.[verifiedKey(l.code)];return s&&s.status==='verified';});
  const emptyLocs=locs.filter(l=>{const s=db.locStatus?.[verifiedKey(l.code)];return s&&s.status==='empty';});
  const total=locs.length;
  // "empty" locs are already added to countedLocs (line above via locStatus loop),
  // so cnt already includes them. We compute emptyCount separately just for display.
  const emptyCount=emptyLocs.length;
  // cnt = all locations that have been counted OR marked empty
  const cnt=countedLocs.size+diffLocs.size;
  const verif=verified.length;
  const pct=total>0?Math.round((cnt+verif)/total*100):0;
  document.getElementById('prog-lbl').textContent=`${period} · ${total} ubicaciones`;
  document.getElementById('prog-stats').innerHTML=`
    <div class="st4" style="margin-top:10px;">
      <div class="st4-c"><div class="st4-n">${total}</div><div class="st4-l">Total</div></div>
      <div class="st4-c"><div class="st4-n" style="color:var(--ac);">${cnt}</div><div class="st4-l">Contadas</div></div>
      <div class="st4-c"><div class="st4-n" style="color:var(--ac2);">${emptyCount}</div><div class="st4-l">Vacías</div></div>
      <div class="st4-c"><div class="st4-n" style="color:var(--tx2);">${total-cnt-verif}</div><div class="st4-l">Pend.</div></div>
    </div>
    <div style="background:var(--sf2);border-radius:8px;height:8px;overflow:hidden;margin-bottom:6px;">
      <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--ac),var(--ac2));border-radius:8px;transition:width .5s;"></div>
    </div>
    <div style="text-align:right;font-size:11px;color:var(--tx2);">${pct}% completado · ${emptyCount} vacía${emptyCount!==1?'s':''} incluida${emptyCount!==1?'s':''} en contadas</div>`;

  // Apply filter
  let filteredLocs=locs;
  if(_locFilter==='pending'){
    filteredLocs=locs.filter(l=>{
      const st=db.locStatus?.[verifiedKey(l.code)];
      const inCounted=countedLocs.has(l.code)||diffLocs.has(l.code);
      return !inCounted&&(!st||st.status==='pending')&&!(st&&st.status==='empty');
    });
  } else if(_locFilter==='counted'){
    filteredLocs=locs.filter(l=>countedLocs.has(l.code)||diffLocs.has(l.code));
  } else if(_locFilter==='empty'){
    filteredLocs=locs.filter(l=>{const st=db.locStatus?.[verifiedKey(l.code)];return st&&st.status==='empty';});
  }

  document.getElementById('locs-slbl').textContent=`Ubicaciones (${filteredLocs.length}${_locFilter!=='all'?'/'+total:''})`;
  if(!locs.length){
    document.getElementById('locs-grid').innerHTML='<div class="es" style="padding:20px;"><div class="ei">📍</div><p>Sin ubicaciones registradas.</p></div>';
    return;
  }
  if(!filteredLocs.length){
    document.getElementById('locs-grid').innerHTML='<div class="es" style="padding:20px;"><div class="ei">🔍</div><p>Sin ubicaciones en este filtro.</p></div>';
    return;
  }
  document.getElementById('locs-grid').innerHTML=`<div class="loc-grid">${filteredLocs.map(l=>{
    const vk=verifiedKey(l.code);
    const st=db.locStatus?.[vk];
    let cls='loc-pending',icon='📍';
    if(st&&st.status==='empty'){cls='loc-verified';icon='🔵';}
    else if(st&&st.status==='verified'){cls='loc-verified';icon='✅';}
    else if(diffLocs.has(l.code)){cls='loc-diff';icon='⚡';}
    else if(countedLocs.has(l.code)){cls='loc-counted';icon='✓';}
    const stLabel=st?.status==='verified'?` · Contada por ${st.verifiedBy||'admin'}`:st?.status==='empty'?` · Vacía (${st.verifiedBy||'admin'})`:(countedLocs.has(l.code)?' · Contada por operador':'');
    return `<div class="loc-cell ${cls}" onclick="toggleLocVerify('${l.code}')" title="${l.code}${stLabel}">${icon}<br><span style="font-size:10px;">${l.code}</span></div>`;
  }).join('')}</div>`;
  renderProgressAssignments();
}

/* ══════════════════════════════════════════════════════
   ADMIN: PROGRESS — ASSIGNMENTS SUMMARY PANEL
══════════════════════════════════════════════════════ */
function renderProgressAssignments(){
  const db=getDB();
  const period=_curPeriod;
  const panel=document.getElementById('prog-assignments-panel');
  if(!panel) return;
  // Gather all assignments for this period across all users
  const allAssigns=[];
  const ops=Object.entries(db.users||{}).filter(([un,u])=>(u.role==='operator'||(isMaster()&&u.role==='admin')) && !isHiddenUser(un,u));
  ops.forEach(([uname,u])=>{
    const userAssigns=(db.locAssignments?.[uname]||[]).filter(a=>a.period===period);
    if(userAssigns.length) allAssigns.push({uname,udata:u,assigns:userAssigns});
  });
  if(!allAssigns.length){panel.style.display='none';return;}
  panel.style.display='';
  const rows=allAssigns.map(({uname,udata,assigns})=>{
    const total=assigns.length;
    const done=assigns.filter(a=>a.verified).length;
    const empty=assigns.filter(a=>a.verified&&a.isEmpty).length;
    const withProd=assigns.filter(a=>a.verified&&!a.isEmpty).length;
    const pend=total-done;
    const pct=total>0?Math.round(done/total*100):0;
    const pendList=assigns.filter(a=>!a.verified);
    const doneList=assigns.filter(a=>a.verified);
    return `<div style="background:var(--sf2);border-radius:10px;padding:12px;margin-bottom:8px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;">
        <div style="flex:1;min-width:0;">
          <div style="font-family:var(--fh);font-weight:800;font-size:13px;">${udata.name}</div>
          <div style="font-size:11px;color:var(--tx2);">@${uname} · ${total} asignada${total!==1?'s':''}</div>
        </div>
        <div style="display:flex;gap:5px;flex-wrap:wrap;">
          <button class="btn b-pu sm" style="font-size:11px;padding:6px 10px;" onclick="openAssignLocsModalFor('${uname}')">+ Asignar más</button>
          ${pend>0?`<button class="btn bd2 sm" style="font-size:11px;padding:6px 10px;" onclick="clearUserAssignments('${uname}')">🗑 Limpiar</button>`:''}
        </div>
      </div>
      <div style="display:flex;gap:6px;margin-bottom:8px;flex-wrap:wrap;">
        ${pend>0?`<span class="mc" style="color:var(--wn);">⏳ ${pend} pendiente${pend!==1?'s':''}</span>`:''}
        ${empty>0?`<span class="mc" style="color:var(--ac2);">🔵 ${empty} vacía${empty!==1?'s':''}</span>`:''}
        ${withProd>0?`<span class="mc" style="color:var(--ac);">📦 ${withProd} con producto</span>`:''}
      </div>
      <div style="background:var(--sf3);border-radius:6px;height:5px;overflow:hidden;margin-bottom:4px;">
        <div style="height:100%;width:${pct}%;background:${pct===100?'var(--ac)':'linear-gradient(90deg,var(--pu),var(--ac2))'};border-radius:6px;transition:width .4s;"></div>
      </div>
      <div style="text-align:right;font-size:10px;color:var(--tx2);">${pct}% verificado</div>
      ${pendList.length>0?`<div style="margin-top:8px;">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--wn);margin-bottom:4px;">Pendientes</div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;">${pendList.map(a=>`<span style="background:rgba(255,182,39,.1);border:1px solid rgba(255,182,39,.3);border-radius:6px;padding:2px 8px;font-size:11px;font-weight:600;color:var(--wn);">${a.code}</span>`).join('')}</div>
      </div>`:''}
      ${doneList.length>0?`<div style="margin-top:8px;">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--tx3);margin-bottom:4px;">Verificadas</div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;">${doneList.map(a=>`<span style="background:${a.isEmpty?'rgba(0,148,255,.1)':'rgba(0,229,160,.08)'};border:1px solid ${a.isEmpty?'rgba(0,148,255,.3)':'rgba(0,229,160,.25)'};border-radius:6px;padding:2px 8px;font-size:11px;font-weight:600;color:${a.isEmpty?'var(--ac2)':'var(--ac)'};">${a.isEmpty?'🔵':'📦'} ${a.code}</span>`).join('')}</div>
      </div>`:''}
    </div>`;
  }).join('');
  panel.innerHTML=`<div style="margin-bottom:6px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--pu);margin-bottom:8px;">📋 Asignaciones activas — ${period}</div>
    ${rows}
  </div>`;
}

function openAssignLocsModalFor(uname){
  const db=getDB();
  const ops=Object.entries(db.users||{}).filter(([uname,u])=>u.role==='operator' && !isHiddenUser(uname,u));
  const sel=document.getElementById('assign-user-sel');
  sel.innerHTML=`<option value="">— Selecciona operador —</option>`+ops.map(([u,d])=>`<option value="${u}" ${u===uname?'selected':''}>${d.name} (@${u})</option>`).join('');
  _assignSelSet=new Set();
  document.getElementById('assign-search').value='';
  document.getElementById('assign-err').style.display='none';
  renderAssignList();
  document.getElementById('assign-mo').classList.add('on');
}

function clearUserAssignments(uname){
  const db=getDB();
  const period=_curPeriod;
  const u=db.users?.[uname];
  const assigns=(db.locAssignments?.[uname]||[]).filter(a=>a.period===period);
  const pending=assigns.filter(a=>!a.verified);
  if(!pending.length){flash('No hay asignaciones pendientes para limpiar','wn');return;}
  confirmAuditAction('Eliminar asignaciones',`Eliminar las ${pending.length} asignaciones PENDIENTES de ${u?.name||uname}.\nLas ya verificadas se conservan.`,()=>{
    logAudit('assignments.clear', `Eliminó ${pending.length} asignaciones pendientes de ${u?.name||uname} (@${uname})`, {uname, period, count:pending.length});
    if(db.locAssignments?.[uname]){
      db.locAssignments[uname]=db.locAssignments[uname].filter(a=>!(a.period===period&&!a.verified));
    }
    setDB(db);renderProgressAssignments();flash(`✓ Asignaciones pendientes de ${u?.name||uname} eliminadas`,'ok');
  });
}
function toggleLocVerify(code){
  const vk=`${_curPeriod}_${code}`;
  const db=getDB();if(!db.locStatus) db.locStatus={};
  const st=db.locStatus[vk];
  const cur=st?.status||'pending';
  // Ciclo: pending → counted → empty → pending
  if(cur==='pending'){
    db.locStatus[vk]={status:'counted',countedBy:isMaster()?'Sistema':(CUR.name||CUR.username),countedAt:new Date().toISOString()};
    flash(`✓ ${code} marcada como contada`,'ok');
  } else if(cur==='counted'){
    db.locStatus[vk]={status:'empty',verifiedBy:isMaster()?'Sistema':(CUR.name||CUR.username),verifiedAt:new Date().toISOString()};
    flash(`🔵 ${code} marcada como vacía`,'ok');
  } else {
    // empty → pending
    delete db.locStatus[vk];
    flash(`${code} restablecida como pendiente`,'wn');
  }
  setDB(db);renderProgressContent();
}

/* ADMIN HISTORY — moved to enhanced section below */

/* ══════════════════════════════════════════════════════
   ADMIN: CATALOG SCREEN
══════════════════════════════════════════════════════ */
function renderAdminCatalog(){
  const db=getDB();
  const ops=Object.entries(db.users||{}).filter(([uname,u])=>u.role==='operator' && !isHiddenUser(uname,u));
  const sel=document.getElementById('cat-assign-user');
  sel.innerHTML=`<option value="">— Selecciona operador —</option>`+ops.map(([u,d])=>`<option value="${u}">${d.name} (@${u})</option>`).join('');
  document.getElementById('admin-cat-preview').innerHTML='';
  document.getElementById('cat-assign-btn-wrap').style.display='none';
  renderCatStatusList();
}
function renderCatStatusList(){
  const db=getDB();
  const ops=Object.entries(db.users||{}).filter(([uname,u])=>u.role==='operator' && !isHiddenUser(uname,u));
  const el=document.getElementById('cat-status-list');
  if(!ops.length){el.innerHTML='<div style="font-size:13px;color:var(--tx2);padding:12px 0;">Sin operadores registrados</div>';return;}
  el.innerHTML=ops.map(([uname,u])=>{
    const ownList=listOwnCatalogs(uname);
    const asgList=listAssignedCatalogs(uname);
    const activeKey=getActiveCatalogKey(uname);
    let sub='Sin catálogo';
    const headBtns=[];
    if(ownList.length||asgList.length){
      const parts=[];
      if(ownList.length){
        const totalRefs=ownList.reduce((s,c)=>s+c.refsCount,0);
        parts.push(`Propios: ${ownList.length} (${totalRefs} refs)`);
        headBtns.push(`<button class="btn bd2 sm" style="width:auto;font-size:11px;" onclick="adminDelCatalog('${uname}','own')">🗑 Todos propios</button>`);
      }
      if(asgList.length){
        const totalRefsA=asgList.reduce((s,c)=>s+c.refsCount,0);
        parts.push(`Asignados: ${asgList.length} (${totalRefsA} refs)`);
        headBtns.push(`<button class="btn bd2 sm" style="width:auto;font-size:11px;" onclick="adminDelCatalog('${uname}','assigned')">🗑 Todos asignados</button>`);
      }
      sub=parts.join(' · ');
    }
    // Detalle individual por catálogo (propios y asignados)
    const renderCatItem=(c,kind)=>{
      const isActive=c.key===activeKey;
      const safeKey=c.key.replace(/'/g,"\\'");
      const dt=c.assignedAt?new Date(c.assignedAt).toLocaleString('es-CO',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}):'';
      const saTag=c.isSelectiveAudit?' 🎯':'';
      const defaultNm=kind==='own'?'Catálogo propio':'Catálogo asignado';
      const handler=kind==='own'?'adminDelOneOwn':'adminDelOneAssigned';
      return '<div style="background:var(--bg);border:1px solid '+(isActive?'rgba(0,229,160,.4)':'var(--bd)')+';border-radius:10px;padding:8px 10px;font-size:11px;display:flex;align-items:center;justify-content:space-between;gap:8px;">'+
        '<div style="flex:1;min-width:0;overflow:hidden;">'+
          '<div style="font-weight:700;color:var(--tx);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+(isActive?'● ':'')+(c.name||defaultNm).replace(/</g,'&lt;')+saTag+'</div>'+
          '<div style="color:var(--tx2);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+c.refsCount+' refs'+(c.isSelectiveAudit&&c.selectiveLocs?' · '+c.selectiveLocs.length+' ubic.':'')+' · '+dt+'</div>'+
        '</div>'+
        '<button class="btn bd2 sm" style="width:auto;flex-shrink:0;font-size:10px;padding:5px 9px;" onclick="'+handler+'(\''+uname+'\',\''+safeKey+'\')">🗑</button>'+
      '</div>';
    };
    let detail='';
    if(ownList.length||asgList.length){
      detail='<div style="margin-top:10px;display:flex;flex-direction:column;gap:6px;width:100%;">'+
        ownList.map(c=>renderCatItem(c,'own')).join('')+
        asgList.map(c=>renderCatItem(c,'assigned')).join('')+
      '</div>';
    }
    const headBtnsHtml = headBtns.length
      ? `<div style="display:flex;gap:6px;flex-wrap:wrap;width:100%;margin-top:8px;">${headBtns.map(b=>b.replace('width:auto;','flex:1;min-width:130px;')).join('')}</div>`
      : '';
    return `<div class="user-card" style="flex-wrap:wrap;gap:0;align-items:flex-start;">
      <div style="display:flex;align-items:center;gap:10px;width:100%;min-width:0;">
        <div class="user-card-ic uc-op" style="flex-shrink:0;">👷</div>
        <div class="user-card-inf" style="flex:1;min-width:0;overflow:hidden;">
          <div class="user-card-nm" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${u.name}</div>
          <div class="user-card-sub">${sub}</div>
        </div>
      </div>
      <div style="width:100%;margin-top:10px;display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.03);border:1px solid var(--bd);border-radius:10px;padding:9px 11px;">
        <div style="flex:1;min-width:0;">
          <div style="font-size:12px;font-weight:700;color:var(--tx);">👁 Ver cantidades SAP</div>
          <div style="font-size:11px;color:var(--tx2);margin-top:1px;">${canUserSeeSap(uname)?'Inventario guiado (visible)':'Inventario a ciegas (oculto)'}</div>
        </div>
        <label class="tog" style="flex-shrink:0;"><input type="checkbox" ${canUserSeeSap(uname)?'checked':''} onchange="setUserSapVisibility('${uname}', this.checked)"><span class="tog-sl"></span></label>
      </div>
      ${headBtnsHtml}
      ${detail}
    </div>`;
  }).join('');
}
function adminDelCatalog(uname,type){
  const db=getDB();
  const u=db.users?.[uname];
  const label=type==='own'?'propios':'asignados';
  const n=type==='own'?listOwnCatalogs(uname).length:listAssignedCatalogs(uname).length;
  if(!n){ flash('No hay catálogos '+label,'wn'); return; }
  appConfirm('Eliminar catálogos',`¿Eliminar los ${n} catálogo${n!==1?'s':''} ${label} de "${u?.name||uname}"?`,()=>{
    if(type==='own') delAllOwnCatalogs(uname);
    else delAllAssignedCatalogs(uname);
    renderCatStatusList();flash(`Catálogos ${label} de ${u?.name||uname} eliminados`,'ok');
  });
}
function adminDelOneAssigned(uname,key){
  const db=getDB();
  const entry=db.catalogs?.[key];
  const u=db.users?.[uname];
  const nm=entry?.name||'este catálogo';
  appConfirm('Eliminar catálogo',`¿Eliminar "${nm}" de "${u?.name||uname}"?`,()=>{
    delAssignedCatalog(uname,key);
    renderCatStatusList();
    flash('Catálogo eliminado','ok');
  });
}
function adminDelOneOwn(uname,key){
  const db=getDB();
  const entry=db.catalogs?.[key];
  const u=db.users?.[uname];
  const nm=entry?.name||'este catálogo';
  appConfirm('Eliminar catálogo',`¿Eliminar "${nm}" (propio) de "${u?.name||uname}"?`,()=>{
    delOwnCatalog(uname,key);
    renderCatStatusList();
    flash('Catálogo eliminado','ok');
  });
}

/* ══════════════════════════════════════════════════════
   ADMIN: GESTIÓN DE NOVEDADES
══════════════════════════════════════════════════════ */
let _novTab='diff';

function initNovedades(){
  _novTab='diff';
  // Populate filters
  const db=getDB();
  const userSel=document.getElementById('nov-user-filter');
  if(userSel){
    userSel.innerHTML='<option value="">Todos los usuarios</option>'+
      Object.entries(db.users||{}).filter(([uname,u])=>!isHiddenUser(uname,u)).map(([u,d])=>`<option value="${u}">${d.name} (@${u})</option>`).join('');
  }
  const dateSel=document.getElementById('nov-date-filter');
  if(dateSel){
    const dates=[...new Set(getAllInvs().map(i=>i.date))].sort((a,b)=>b.localeCompare(a));
    dateSel.innerHTML='<option value="">Todas las fechas</option>'+
      dates.map(d=>{const lbl=new Date(d+'T12:00:00').toLocaleDateString('es-CO',{day:'2-digit',month:'short',year:'numeric'});return `<option value="${d}">${lbl}</option>`;}).join('');
  }
  // Reset tabs UI
  ['diff','extra','missing','status'].forEach(t=>{
    const el=document.getElementById('nov-tab-'+t);
    if(el) el.className='tab'+(t==='diff'?' on':'');
  });
  renderNovedades();
}

function setNovTab(tab, el){
  _novTab=tab;
  document.querySelectorAll('#screen-a-export .tab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  renderNovedades();
}

function renderNovedades(){
  const userFilter=document.getElementById('nov-user-filter')?.value||'';
  const dateFilter=document.getElementById('nov-date-filter')?.value||'';
  const q=(document.getElementById('nov-search')?.value||'').toUpperCase();
  const el=document.getElementById('nov-content');
  if(!el) return;

  let invs=getAllInvs().concat(_getActiveInProgressInvs());
  if(userFilter) invs=invs.filter(i=>i.username===userFilter);
  if(dateFilter) invs=invs.filter(i=>i.date===dateFilter);

  const db=getDB();

  if(_novTab==='diff'){
    // Diferencias: status==='diff' o novedad no-extra
    const rows=[];
    invs.forEach(inv=>{
      inv.locations.forEach(loc=>{
        if(loc.isMissingLoc) return; // las ubicaciones sin contar van en su propia tab
        Object.entries(loc.items).forEach(([code,item])=>{
          const isPend=item.counted===null&&!item.isExtra&&item.status!=='ok'&&item.status!=='missing_loc';
          const isDiff=item.status==='diff'||(item.status==='novedad'&&!item.isExtra);
          if(isDiff||isPend){
            const vKey=`${inv.id}_${loc.code}_${code}`;
            if(db.novedadVerdicts?.[vKey]) return; // ya tiene veredicto, no mostrar
            if(!q||code.includes(q)||(item.name||'').toUpperCase().includes(q)||loc.code.includes(q)){
              rows.push({inv,loc:loc.code,code,item,isPend});
            }
          }
        });
      });
    });
    if(!rows.length){el.innerHTML='<div class="es"><div class="ei">✅</div><p>Sin diferencias en el período seleccionado</p></div>';return;}
    el.innerHTML=rows.map(r=>{
      const d=Math.round(((r.item.counted||0)-(r.item.sapStock||0))*100)/100;
      const fecha=new Date(r.inv.startTime).toLocaleDateString('es-CO',{day:'2-digit',month:'short'});
      const uname=db.users?.[r.inv.username]?.name||r.inv.user||r.inv.username;
      // Build a unique key for this novedad verdict
      const vKey=`${r.inv.id}_${r.loc}_${r.code}`;
      const _vd=db.novedadVerdicts?.[vKey];
      const verdict=_vd?.v||_vd||null;
      const verdictObs=_vd?.obs||'';
      const verdictBy=_vd?.by||'';
      let verdictHtml='';
      const _obsHtml=verdictObs?`<div style="margin-top:5px;font-size:11px;color:var(--tx2);background:var(--sf2);border-radius:8px;padding:6px 9px;">💬 ${verdictObs}</div>`:'';
      const _byHtml=verdictBy?`<div style="font-size:10px;color:var(--tx3);margin-top:3px;">— ${verdictBy}</div>`:'';
      if(verdict==='ok'){
        verdictHtml=`<div class="vrd-badge-ok">✅ Operador tiene razón</div>${_obsHtml}${_byHtml}
          <button onclick="clearNovVerdict('${vKey}')" style="background:none;border:none;color:var(--tx3);font-size:11px;cursor:pointer;margin-top:4px;text-decoration:underline;">Cambiar veredicto</button>`;
      } else if(verdict==='no'){
        verdictHtml=`<div class="vrd-badge-no">⚠️ Operador no tiene razón</div>${_obsHtml}${_byHtml}
          <button onclick="clearNovVerdict('${vKey}')" style="background:none;border:none;color:var(--tx3);font-size:11px;cursor:pointer;margin-top:4px;text-decoration:underline;">Cambiar veredicto</button>`;
      } else if(r.inv._inProgress){
        verdictHtml=`<div style="margin-top:6px;font-size:11px;color:var(--wn);background:rgba(255,182,39,.08);border:1px dashed rgba(255,182,39,.35);border-radius:6px;padding:6px 10px;">🔒 Inventario en curso · Veredicto disponible al cerrarse</div>`;
      } else {
        verdictHtml=`<div class="vrd-row">
          <button class="vrd-btn" onclick="openNovObsModal('${vKey}','ok','${r.inv.username}','diff')">✅ Tiene razón</button>
          <button class="vrd-btn" onclick="openNovObsModal('${vKey}','no','${r.inv.username}','diff')">⚠️ No tiene razón</button>
        </div>`;
      }
      const cardColor=r.isPend?'var(--wn)':'var(--dg)';
      const cardIcon=r.isPend?'⏭':'⚡';
      const cardBorderColor=r.isPend?'rgba(255,182,39,.35)':'rgba(255,77,109,.35)';
      const cardBg=r.isPend?'rgba(255,182,39,.04)':'transparent';
      const valueHtml=r.isPend
        ?`<div style="font-family:var(--fh);font-size:13px;font-weight:800;color:var(--wn);">Sin contar</div><div style="font-size:10px;color:var(--tx2);">SAP: ${r.item.sapStock??'—'}</div>`
        :`<div style="font-family:var(--fh);font-size:16px;font-weight:800;color:var(--dg);">${d>0?'+':''}${fmtNum(d)}</div><div style="font-size:10px;color:var(--tx2);">SAP:${fmtNum(r.item.sapStock)} / Cnt:${fmtNum(r.item.counted)}</div>`;
      return `<div class="pan" style="margin:0 0 8px;padding:12px 14px;border-left:3px solid ${cardBorderColor};background:${cardBg};">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
          <div style="flex:1;min-width:0;">
            <div style="font-family:var(--fh);font-weight:800;font-size:14px;color:${cardColor};">${cardIcon} ${r.code}</div>
            <div style="font-size:12px;color:var(--tx2);margin-top:2px;">${r.item.name||'—'}</div>
            <div style="font-size:11px;color:var(--tx3);margin-top:3px;">📍 ${r.loc} · 👤 ${uname} · ${fecha}</div>
          </div>
          <div style="text-align:right;flex-shrink:0;">${valueHtml}</div>
        </div>
        ${r.isPend?`<div style="margin-top:6px;font-size:11px;color:var(--wn);background:rgba(255,182,39,.08);border-radius:6px;padding:5px 9px;">⏭ Referencia saltada al cerrar la ubicación</div>`:''}
        ${r.item.note?`<div style="margin-top:6px;font-size:11px;color:var(--wn);background:rgba(255,182,39,.08);border-radius:6px;padding:5px 9px;">📝 ${r.item.note}</div>`:''}
        ${r.item.photo?`<div style="margin-top:8px;border-radius:8px;overflow:hidden;border:1.5px solid rgba(180,108,255,.4);cursor:zoom-in;" onclick="openPhotoViewer(this.querySelector('img').src,'${r.code} · ${r.loc}')"><img src="${r.item.photo}" style="width:100%;max-height:180px;object-fit:cover;display:block;border-radius:6px;pointer-events:none;"></div><div style="font-size:10px;color:var(--pu);font-weight:700;margin-top:4px;">📷 Toca la foto para ampliar</div>`:''}
        ${!r.isPend?verdictHtml:''}
      </div>`;
    }).join('');

  } else if(_novTab==='extra'){
    // Extras: isExtra===true
    const rows=[];
    invs.forEach(inv=>{
      inv.locations.forEach(loc=>{
        Object.entries(loc.items).forEach(([code,item])=>{
          if(item.isExtra){
            const vKey=`${inv.id}_${loc.code}_${code}`;
            if(db.novedadVerdicts?.[vKey]) return; // ya tiene veredicto, no mostrar
            if(!q||code.includes(q)||(item.name||'').toUpperCase().includes(q)||loc.code.includes(q)){
              rows.push({inv,loc:loc.code,code,item});
            }
          }
        });
      });
    });
    if(!rows.length){el.innerHTML='<div class="es"><div class="ei">✅</div><p>Sin productos extra en el período seleccionado</p></div>';return;}
    el.innerHTML=rows.map(r=>{
      const fecha=new Date(r.inv.startTime).toLocaleDateString('es-CO',{day:'2-digit',month:'short'});
      const uname=db.users?.[r.inv.username]?.name||r.inv.user||r.inv.username;
      const vKey=`${r.inv.id}_${r.loc}_${r.code}`;
      const _vd=db.novedadVerdicts?.[vKey];
      const verdict=_vd?.v||_vd||null;
      const verdictObs=_vd?.obs||'';
      const verdictBy=_vd?.by||'';
      let verdictHtml='';
      const _obsHtml=verdictObs?`<div style="margin-top:5px;font-size:11px;color:var(--tx2);background:var(--sf2);border-radius:8px;padding:6px 9px;">💬 ${verdictObs}</div>`:'';
      const _byHtml=verdictBy?`<div style="font-size:10px;color:var(--tx3);margin-top:3px;">— ${verdictBy}</div>`:'';
      if(verdict==='ok'){
        verdictHtml=`<div class="vrd-badge-ok">✅ Operador tiene razón</div>${_obsHtml}${_byHtml}
          <button onclick="clearNovVerdict('${vKey}')" style="background:none;border:none;color:var(--tx3);font-size:11px;cursor:pointer;margin-top:4px;text-decoration:underline;">Cambiar veredicto</button>`;
      } else if(verdict==='no'){
        verdictHtml=`<div class="vrd-badge-no">⚠️ Operador no tiene razón</div>${_obsHtml}${_byHtml}
          <button onclick="clearNovVerdict('${vKey}')" style="background:none;border:none;color:var(--tx3);font-size:11px;cursor:pointer;margin-top:4px;text-decoration:underline;">Cambiar veredicto</button>`;
      } else if(r.inv._inProgress){
        verdictHtml=`<div style="margin-top:6px;font-size:11px;color:var(--wn);background:rgba(255,182,39,.08);border:1px dashed rgba(255,182,39,.35);border-radius:6px;padding:6px 10px;">🔒 Inventario en curso · Veredicto disponible al cerrarse</div>`;
      } else {
        verdictHtml=`<div class="vrd-row">
          <button class="vrd-btn" onclick="openNovObsModal('${vKey}','ok','${r.inv.username}','extra')">✅ Tiene razón</button>
          <button class="vrd-btn" onclick="openNovObsModal('${vKey}','no','${r.inv.username}','extra')">⚠️ No tiene razón</button>
        </div>`;
      }
      return `<div class="pan" style="margin:0 0 8px;padding:12px 14px;">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
          <div style="flex:1;min-width:0;">
            <div style="font-family:var(--fh);font-weight:800;font-size:14px;color:var(--ac2);">🔵 ${r.code}</div>
            <div style="font-size:12px;color:var(--tx2);margin-top:2px;">${r.item.name||'—'}</div>
            <div style="font-size:11px;color:var(--tx3);margin-top:3px;">📍 ${r.loc} · 👤 ${uname} · ${fecha}</div>
          </div>
          <div style="text-align:right;flex-shrink:0;">
            <div style="font-family:var(--fh);font-size:16px;font-weight:800;color:var(--ac2);">${r.item.counted}</div>
            <div style="font-size:10px;color:var(--tx2);">uds · no en SAP</div>
          </div>
        </div>
        ${r.item.note?`<div style="margin-top:6px;font-size:11px;color:var(--ac2);background:rgba(0,148,255,.07);border-radius:6px;padding:5px 9px;">📝 ${r.item.note}</div>`:''}
        ${r.item.photo?`<div style="margin-top:8px;border-radius:8px;overflow:hidden;border:1.5px solid rgba(180,108,255,.4);cursor:zoom-in;" onclick="openPhotoViewer(this.querySelector('img').src,'${r.code} · ${r.loc}')"><img src="${r.item.photo}" style="width:100%;max-height:180px;object-fit:cover;display:block;border-radius:6px;pointer-events:none;"></div><div style="font-size:10px;color:var(--pu);font-weight:700;margin-top:4px;">📷 Toca la foto para ampliar</div>`:''}
        ${verdictHtml}
      </div>`;
    }).join('');

  } else if(_novTab==='missing'){
    // Ubicaciones no contadas (isMissingLoc) O parcialmente contadas (items con status==='missing_loc')
    const rows=[];
    invs.forEach(inv=>{
      inv.locations.forEach(loc=>{
        const hasMissingItems=Object.entries(loc.items).some(([k,v])=>k!=='__loc__'&&v.status==='missing_loc');
        if(!loc.isMissingLoc && !hasMissingItems) return;
        const fecha=new Date(inv.startTime).toLocaleDateString('es-CO',{day:'2-digit',month:'short'});
        const uname=db.users?.[inv.username]?.name||inv.user||inv.username;
        let refs=Object.entries(loc.items).filter(([k,v])=>k!=='__loc__'&&(loc.isMissingLoc||v.status==='missing_loc'));
        // Excluir refs que ya tienen veredicto individual
        refs=refs.filter(([sku])=>!db.novedadVerdicts?.[`${inv.id}_${loc.code}_${sku}_missing`]);
        if(!refs.length) return; // todas las refs ya tienen veredicto, ocultar la ubicación
        const isPartial=!loc.isMissingLoc && hasMissingItems;
        if(!q||loc.code.includes(q)||refs.some(([k,v])=>k.includes(q)||(v.name||'').toUpperCase().includes(q))){
          rows.push({inv,loc,fecha,uname,refs,isPartial});
        }
      });
    });
    if(!rows.length){el.innerHTML='<div class="es"><div class="ei">✅</div><p>Sin ubicaciones sin contar en el período seleccionado</p></div>';return;}
    el.innerHTML=rows.map(r=>{
      const borderColor=r.isPartial?'var(--wn)':'var(--dg)';
      const textColor=r.isPartial?'var(--wn)':'var(--dg)';
      const icon=r.isPartial?'⚠️':'🚫';
      const badge=r.isPartial
        ?`<span style="background:rgba(255,182,39,.12);color:var(--wn);border:1px solid rgba(255,182,39,.3);border-radius:6px;padding:3px 9px;font-size:11px;font-weight:700;flex-shrink:0;">Parcial</span>`
        :`<span style="background:rgba(255,77,109,.12);color:var(--dg);border:1px solid rgba(255,77,109,.3);border-radius:6px;padding:3px 9px;font-size:11px;font-weight:700;flex-shrink:0;">Sin contar</span>`;
      const warn=r.isPartial
        ?`<div style="margin-top:6px;font-size:11px;color:var(--wn);background:rgba(255,182,39,.07);border-radius:6px;padding:5px 9px;">⚠️ Cerrada con referencias pendientes sin contar</div>`
        :`<div style="margin-top:6px;font-size:11px;color:var(--wn);background:rgba(255,182,39,.07);border-radius:6px;padding:5px 9px;">⚠️ No fue contada al cerrar el inventario</div>`;
      // Veredictos individuales por referencia
      const refsHtml=r.refs.length>0
        ?r.refs.map(([sku,it])=>{
            const rKey=`${r.inv.id}_${r.loc.code}_${sku}_missing`;
            const _rvd=db.novedadVerdicts?.[rKey];
            const rv=_rvd?.v||_rvd||null;
            const rvObs=_rvd?.obs||'';
            const rvBy=_rvd?.by||'';
            let rvHtml='';
            const _rvObsHtml=rvObs?`<div style="font-size:11px;color:var(--tx2);background:var(--sf2);border-radius:8px;padding:5px 8px;margin-top:4px;">💬 ${rvObs}</div>`:'';
            const _rvByHtml=rvBy?`<div style="font-size:10px;color:var(--tx3);margin-top:2px;">— ${rvBy}</div>`:'';
            if(rv==='ok'){
              rvHtml=`<div style="display:flex;align-items:flex-start;gap:6px;margin-top:6px;flex-direction:column;"><div style="display:flex;align-items:center;gap:6px;width:100%;"><span class="vrd-badge-ok" style="flex:1;">✅ Tiene razón</span><button onclick="clearNovVerdict('${rKey}')" style="background:none;border:none;color:var(--tx3);font-size:10px;cursor:pointer;text-decoration:underline;white-space:nowrap;">Cambiar</button></div>${_rvObsHtml}${_rvByHtml}</div>`;
            } else if(rv==='no'){
              rvHtml=`<div style="display:flex;align-items:flex-start;gap:6px;margin-top:6px;flex-direction:column;"><div style="display:flex;align-items:center;gap:6px;width:100%;"><span class="vrd-badge-no" style="flex:1;">⚠️ No tiene razón</span><button onclick="clearNovVerdict('${rKey}')" style="background:none;border:none;color:var(--tx3);font-size:10px;cursor:pointer;text-decoration:underline;white-space:nowrap;">Cambiar</button></div>${_rvObsHtml}${_rvByHtml}</div>`;
            } else if(r.inv._inProgress){
              rvHtml=`<div style="margin-top:6px;font-size:11px;color:var(--wn);background:rgba(255,182,39,.08);border:1px dashed rgba(255,182,39,.35);border-radius:6px;padding:6px 10px;">🔒 Inventario en curso · Veredicto disponible al cerrarse</div>`;
            } else {
              rvHtml=`<div class="vrd-row" style="margin-top:6px;">
                <button class="vrd-btn" onclick="openNovObsModal('${rKey}','ok','${r.inv.username}','missing')">✅ Tiene razón</button>
                <button class="vrd-btn" onclick="openNovObsModal('${rKey}','no','${r.inv.username}','missing')">⚠️ No tiene razón</button>
              </div>`;
            }
            const _opNote=it.note&&it.note.trim()&&it.note!=='Referencia no contada al cerrar la ubicación'&&it.note!=='Referencia no contada al cerrar el inventario'
              ?`<div style="margin-top:6px;font-size:11px;color:var(--wn);background:rgba(255,182,39,.08);border-radius:6px;padding:5px 9px;">📝 ${it.note}</div>`:'';
            return `<div style="background:var(--sf2);border-radius:8px;padding:9px 11px;margin-top:6px;">
              <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
                <div>
                  <span style="font-family:var(--fh);font-size:13px;font-weight:800;color:var(--tx);">${sku}</span>
                  ${it.name?`<span style="font-size:11px;color:var(--tx2);margin-left:6px;">${it.name}</span>`:''}
                </div>
                ${it.sapStock!==null&&it.sapStock!==undefined?`<span style="font-size:11px;color:var(--tx3);flex-shrink:0;">SAP: ${fmtNum(it.sapStock)}</span>`:''}
              </div>
              ${_opNote}
              ${rvHtml}
            </div>`;
          }).join('')
        :'<div style="margin-top:6px;font-size:11px;color:var(--tx3);">Sin referencias mapeadas en el catálogo</div>';
      return `<div class="pan" style="margin:0 0 8px;padding:12px 14px;border-left:3px solid ${borderColor};">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
          <div style="flex:1;min-width:0;">
            <div style="font-family:var(--fh);font-weight:800;font-size:14px;color:${textColor};">${icon} ${r.loc.code}</div>
            <div style="font-size:11px;color:var(--tx3);margin-top:3px;">👤 ${r.uname} · ${r.fecha}</div>
          </div>
          ${badge}
        </div>
        ${refsHtml}
        ${warn}
      </div>`;
    }).join('');

  } else {
    // Estado de trabajos: por operador, sus inventarios y asignaciones
    const ops=Object.entries(db.users||{}).filter(([uname,u])=>u.role==='operator' && !isHiddenUser(uname,u));
    if(!ops.length){el.innerHTML='<div class="es"><div class="ei">👷</div><p>Sin operadores registrados</p></div>';return;}
    const period=getCurrentPeriod();
    const filteredOps=userFilter?ops.filter(([u])=>u===userFilter):ops;
    el.innerHTML=filteredOps.map(([uname,u])=>{
      let uInvs=getUserInvs(uname);
      if(dateFilter) uInvs=uInvs.filter(i=>i.date===dateFilter);
      // Assignments
      const assigns=(db.locAssignments?.[uname]||[]).filter(a=>a.period===period);
      const pendingAssigns=assigns.filter(a=>!a.verified);
      const doneAssigns=assigns.filter(a=>a.verified);
      // Inventory summary
      const totalLocs=uInvs.reduce((a,v)=>a+v.locations.filter(l=>!l.isMissingLoc).length,0);
      const totalNov=uInvs.reduce((a,v)=>a+v.locations.reduce((b,l)=>b+(l.isMissingLoc?1:Object.values(l.items).filter(i=>i.status==='diff'||i.status==='novedad'||i.status==='missing_loc'||(i.counted===null&&!i.isExtra&&i.status!=='ok')).length),0),0);
      // Catalog completion check
      const cat=getCatalog(uname);
      let catCompletionHtml='';
      if(cat&&cat.catalog){
        // Get all catalog locations for this user
        const allCatLocs=new Set();
        Object.values(cat.catalog).forEach(ref=>{(ref.locs||[]).forEach(l=>{if(l.loc) allCatLocs.add(l.loc);});});
        const totalCatLocs=allCatLocs.size;
        // Get counted locations from inventories
        const countedCodes=new Set();
        uInvs.forEach(inv=>inv.locations.forEach(loc=>{if(!loc.isMissingLoc) countedCodes.add(loc.code);}));
        const countedCatLocs=[...allCatLocs].filter(loc=>countedCodes.has(loc));
        const missingLocs=[...allCatLocs].filter(loc=>!countedCodes.has(loc));
        const pct=totalCatLocs>0?Math.round(countedCatLocs.length/totalCatLocs*100):100;
        const allDone=missingLocs.length===0;
        catCompletionHtml=`
          <div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--bd);">
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--tx2);margin-bottom:6px;">📂 Cumplimiento del catálogo</div>
            <div class="${allDone?'cat-complete':'cat-incomplete'}" style="margin-bottom:6px;">
              ${allDone?'✅':'⚠️'} ${countedCatLocs.length}/${totalCatLocs} ubicaciones inventariadas (${pct}%)
            </div>
            ${!allDone&&missingLocs.length>0?`<div style="font-size:11px;color:var(--tx3);line-height:1.6;">Faltantes: <span style="color:var(--dg);">${missingLocs.slice(0,6).join(', ')}${missingLocs.length>6?' +'+( missingLocs.length-6)+' más':''}</span></div>`:''}
            <div style="background:var(--sf2);border-radius:4px;height:5px;overflow:hidden;margin-top:6px;">
              <div style="height:100%;width:${pct}%;background:${allDone?'linear-gradient(90deg,var(--ac),#00c47a)':'linear-gradient(90deg,var(--wn),var(--dg))'};border-radius:4px;transition:width .5s;"></div>
            </div>
          </div>`;
      } else {
        catCompletionHtml=`<div style="margin-top:8px;font-size:11px;color:var(--tx3);">Sin catálogo asignado — no se puede verificar cumplimiento.</div>`;
      }
      // Name filter
      if(q&&!u.name.toUpperCase().includes(q)&&!uname.toUpperCase().includes(q)) return '';
      // Status badge
      let wkStatus,wkColor;
      if(assigns.length>0&&pendingAssigns.length===0){wkStatus='✅ Trabajo completado';wkColor='var(--ac)';}
      else if(assigns.length>0&&pendingAssigns.length>0){wkStatus='⏳ '+pendingAssigns.length+' ubicación'+(pendingAssigns.length!==1?'es':'')+' pendiente'+(pendingAssigns.length!==1?'s':'');wkColor='var(--wn)';}
      else if(uInvs.length>0){wkStatus='📦 Sin asignaciones · '+uInvs.length+' inv. propio'+(uInvs.length!==1?'s':'');wkColor='var(--tx2)';}
      else{wkStatus='⏸ Sin actividad';wkColor='var(--tx3)';}
      return `<div class="pan" style="margin:0 0 10px;padding:14px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
          <div style="width:38px;height:38px;border-radius:10px;background:rgba(0,148,255,.12);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">👷</div>
          <div style="flex:1;min-width:0;">
            <div style="font-family:var(--fh);font-weight:800;font-size:14px;">${u.name}</div>
            <div style="font-size:11px;color:var(--tx2);">@${uname}</div>
          </div>
        </div>
        <div style="font-size:13px;font-weight:600;color:${wkColor};margin-bottom:8px;">${wkStatus}</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:6px;">
          <span class="mc">📦 ${uInvs.length} inventario${uInvs.length!==1?'s':''}</span>
          <span class="mc">📍 ${totalLocs} ubicación${totalLocs!==1?'es':''}</span>
          ${totalNov?`<span class="mc" style="color:var(--dg);">⚡ ${totalNov} novedad${totalNov!==1?'es':''}</span>`:`<span class="mc" style="color:var(--ac);">✓ sin novedades</span>`}
        </div>
        ${assigns.length?`<div style="font-size:11px;color:var(--tx2);margin-top:4px;">Asignaciones: <b style="color:var(--ac);">${doneAssigns.length}</b>/${assigns.length} verificadas · ${assigns.filter(a=>a.isEmpty).length} vacías</div>`:''}
        ${catCompletionHtml}
      </div>`;
    }).filter(Boolean).join('');
    if(!el.innerHTML) el.innerHTML='<div class="es"><div class="ei">🔍</div><p>Sin resultados</p></div>';
  }
}

function expNovedadesFiltered(){
  const userFilter=document.getElementById('nov-user-filter')?.value||'';
  const dateFilter=document.getElementById('nov-date-filter')?.value||'';
  let invs=getAllInvs();
  if(userFilter) invs=invs.filter(i=>i.username===userFilter);
  if(dateFilter) invs=invs.filter(i=>i.date===dateFilter);
  const rows=buildRows(invs).filter(r=>r['Estado']&&r['Estado']!=='✓ Correcto'&&r['Estado']!=='Sin referencias');
  if(!rows.length){flash('Sin novedades para exportar','wn');return;}
  const ws=buildStyledSheet(rows,{
    title:'⚡ InvTrack Pro — Novedades y Diferencias',
    subtitle:`${rows.length} novedades${userFilter?(' · Operador: '+userFilter):''}${dateFilter?(' · Fecha: '+dateFilter):''}`
  });
  const wb=XLSX.utils.book_new();
  wb.Props={Title:'Novedades InvTrack Pro',Author:'InvTrack Pro · Jose Pérez',CreatedDate:new Date()};
  XLSX.utils.book_append_sheet(wb,ws,'Novedades');
  XLSX.writeFile(wb,'novedades_'+toDS(new Date())+'.xlsx');flash('Novedades exportadas ✓','ok');
}
function expNovedades(){expNovedadesFiltered();}

/* ══════════════════════════════════════════════════════
   ADMIN: NOVEDAD VERDICT
══════════════════════════════════════════════════════ */
function openNovObsModal(vKey, verdict, opUsername, type){
  const mo = document.getElementById('nov-obs-mo');
  const title = document.getElementById('nov-obs-title');
  const sub = document.getElementById('nov-obs-sub');
  const txt = document.getElementById('nov-obs-txt');
  const okBtn = document.getElementById('nov-obs-ok-btn');
  const cancelBtn = document.getElementById('nov-obs-cancel');

  title.textContent = verdict === 'ok' ? '✅ Operador tiene razón' : '⚠️ Operador no tiene razón';
  title.style.color = verdict === 'ok' ? 'var(--ac)' : 'var(--dg)';
  sub.textContent = 'Puedes dejar una observación, recomendación o información para el operador antes de confirmar.';
  okBtn.textContent = verdict === 'ok' ? '✅ Confirmar' : '⚠️ Confirmar';
  txt.value = '';
  clearNovObsPhoto();
  mo.style.display = 'flex';
  setTimeout(()=>txt.focus(), 100);

  function cleanup(){ mo.style.display='none'; okBtn.onclick=null; cancelBtn.onclick=null; }
  okBtn.onclick = () => { const ph=_novObsPhoto; cleanup(); setNovVerdict(vKey, verdict, opUsername, type, txt.value.trim(), ph); clearNovObsPhoto(); };
  cancelBtn.onclick = () => { cleanup(); clearNovObsPhoto(); };
}

let _novObsPhoto = null;
function onNovObsPhotoSelected(input){
  const file=input.files?.[0];
  if(!file) return;
  flash('Procesando foto…','wn');
  const reader=new FileReader();
  reader.onload=e=>{
    const img=new Image();
    img.onload=()=>{
      const MAX=800;
      const scale=img.width>MAX?MAX/img.width:1;
      const w=Math.round(img.width*scale);
      const h=Math.round(img.height*scale);
      const canvas=document.createElement('canvas');
      canvas.width=w;canvas.height=h;
      canvas.getContext('2d').drawImage(img,0,0,w,h);
      _novObsPhoto=canvas.toDataURL('image/jpeg',0.75);
      document.getElementById('nov-obs-photo-img').src=_novObsPhoto;
      document.getElementById('nov-obs-photo-preview').style.display='block';
      document.getElementById('nov-obs-photo-btn').textContent='📷 Cambiar foto';
      flash('📷 Foto lista','ok');
    };
    img.src=e.target.result;
  };
  reader.readAsDataURL(file);
  input.value='';
}
function clearNovObsPhoto(){
  _novObsPhoto=null;
  const inp=document.getElementById('nov-obs-photo-inp'); if(inp) inp.value='';
  const pv=document.getElementById('nov-obs-photo-preview'); if(pv) pv.style.display='none';
  const im=document.getElementById('nov-obs-photo-img'); if(im) im.src='';
  const bt=document.getElementById('nov-obs-photo-btn'); if(bt) bt.textContent='📷 Anexar foto (opcional)';
}

function setNovVerdict(vKey, verdict, opUsername, type, obs='', photo=null){
  const db=getDB();
  if(!db.novedadVerdicts) db.novedadVerdicts={};
  const isUpdate=!!db.novedadVerdicts[vKey];
  const prev = isUpdate ? JSON.parse(JSON.stringify(db.novedadVerdicts[vKey])) : null;
  // Guardar como objeto con veredicto, observación, autor y fecha
  db.novedadVerdicts[vKey]={v:verdict, obs:obs||'', photo:photo||'', by:isMaster()?'Sistema':(CUR.name||CUR.username), at:new Date().toISOString()};
  setDB(db);
  if(isUpdate){
    logAudit('verdict.modify', `Modificó veredicto (${vKey}): ${prev?.v||'?'} → ${verdict}`, {vKey, prev, next:{v:verdict, obs, hasPhoto:!!photo}});
  }
  if(!isUpdate){
    const obsLine = obs ? `\n\n💬 Observación: "${obs}"` : '';
    const msgOk=`🎉 ¡Felicitaciones! El administrador revisó tu reporte de novedad y confirmó que tu registro es correcto. ¡Sigue así, tu trabajo hace la diferencia! 🌟${obsLine}`;
    const msgNo=`📌 El administrador revisó tu novedad reportada y considera que necesita ser revisada. Te invitamos a estar más pendiente de los detalles durante el inventario. ¡Juntos mejoramos! 💪${obsLine}`;
    notifyUser(opUsername, verdict==='ok'?msgOk:msgNo, verdict==='ok'?'felicitacion':'mejora');
  }
  const btn=document.querySelector(`[onclick*="${vKey}"]`);
  if(btn){
    const card=btn.closest('.pan,[class*="pan"]');
    if(card){
      const vrdRow=card.querySelector('.vrd-row');
      if(vrdRow){
        const badgeEl=document.createElement('div');
        badgeEl.style.cssText='margin-top:8px;';
        const obsHtml = obs ? `<div style="margin-top:5px;font-size:11px;color:var(--tx2);background:var(--sf2);border-radius:8px;padding:6px 9px;">💬 ${obs}</div>` : '';
        badgeEl.innerHTML=verdict==='ok'
          ?`<div class="vrd-badge-ok">✅ Operador tiene razón</div>${obsHtml}<div style="font-size:11px;color:var(--tx3);margin-top:4px;">Desaparecerá en 5 segundos · <button onclick="clearNovVerdict('${vKey}')" style="background:none;border:none;color:var(--tx3);font-size:11px;cursor:pointer;text-decoration:underline;padding:0;">Cambiar</button></div>`
          :`<div class="vrd-badge-no">⚠️ Operador no tiene razón</div>${obsHtml}<div style="font-size:11px;color:var(--tx3);margin-top:4px;">Desaparecerá en 5 segundos · <button onclick="clearNovVerdict('${vKey}')" style="background:none;border:none;color:var(--tx3);font-size:11px;cursor:pointer;text-decoration:underline;padding:0;">Cambiar</button></div>`;
        vrdRow.replaceWith(badgeEl);
      }
      const t=setTimeout(()=>{
        card.style.transition='opacity .5s ease, transform .5s ease, max-height .5s ease, margin .5s ease, padding .5s ease';
        card.style.overflow='hidden';
        card.style.opacity='0';
        card.style.transform='translateX(40px)';
        card.style.maxHeight=card.offsetHeight+'px';
        setTimeout(()=>{
          card.style.maxHeight='0';
          card.style.marginBottom='0';
          card.style.paddingTop='0';
          card.style.paddingBottom='0';
        },100);
        setTimeout(()=>{ card.remove(); },600);
      },5000);
      card._novVerdictTimeout=t;
    }
  } else {
    renderNovedades();
  }
  flash(verdict==='ok'?'✅ Veredicto guardado · Desaparece en 5s 🎉':'⚠️ Veredicto guardado · Desaparece en 5s 📌', verdict==='ok'?'ok':'wn');
}

function clearNovVerdict(vKey){
  const db=getDB();
  const prev = db.novedadVerdicts && db.novedadVerdicts[vKey];
  if(prev){
    logAudit('verdict.delete', `Eliminó veredicto (${vKey})`, {vKey, prev});
    delete db.novedadVerdicts[vKey];
  }
  setDB(db);
  // Cancel pending fade-out if user clicks Cambiar in time
  const btn=document.querySelector(`[onclick*="${vKey}"]`);
  if(btn){
    const card=btn.closest('.pan,[class*="pan"]');
    if(card&&card._novVerdictTimeout){
      clearTimeout(card._novVerdictTimeout);
      card._novVerdictTimeout=null;
      card.style.transition='';
      card.style.opacity='';
      card.style.transform='';
      card.style.maxHeight='';
      card.style.overflow='';
    }
  }
  renderNovedades();
  flash('Veredicto eliminado','wn');
}

/* ══════════════════════════════════════════════════════
   👁 VISIBILIDAD DE CANTIDADES SAP — admin controla por operador
══════════════════════════════════════════════════════ */
function canUserSeeSap(uname){
  const u = getDB().users?.[uname];
  // Por defecto: visible (true). Solo cuando admin lo desactiva queda en false.
  return u ? (u.seeSap !== false) : true;
}
function applySapVisibility(){
  if(!CUR || !CUR.username){ document.body.classList.remove('show-sap'); return; }
  // Admin y master siempre ven cantidades SAP
  if(CUR.role==='admin' || CUR.role==='master'){ document.body.classList.add('show-sap'); return; }
  document.body.classList.toggle('show-sap', canUserSeeSap(CUR.username));
}
function setUserSapVisibility(uname, enabled, opts){
  opts = opts || {};
  const db = getDB();
  if(!db.users || !db.users[uname]) return;
  db.users[uname].seeSap = !!enabled;
  setDB(db);
  // Notificar al operador para que su UI cambie de inmediato (polling lo aplica)
  try{
    if(enabled){
      notifyUser(uname, '👁 El administrador habilitó la visualización de cantidades SAP. Tu inventario ahora es guiado.', 'sap-on');
    } else {
      notifyUser(uname, '🙈 El administrador desactivó la visualización de cantidades SAP. Tu inventario continúa a ciegas.', 'sap-off');
    }
  }catch(e){}
  if(typeof flash==='function') flash(enabled?'✓ Cantidades SAP habilitadas':'✓ Cantidades SAP ocultas','ok');
  if(typeof renderCatStatusList==='function') renderCatStatusList();
}
function toggleUserSapVisibility(uname){
  const cur = canUserSeeSap(uname);
  setUserSapVisibility(uname, !cur);
}
/* Operador solicita al admin habilitar las cantidades SAP */
function requestSapVisibility(){
  if(!CUR || CUR.role!=='operator'){ return; }
  if(canUserSeeSap(CUR.username)){
    if(typeof flash==='function') flash('Ya tienes visibles las cantidades SAP','wn');
    return;
  }
  const db = getDB();
  if(!db.notifications) db.notifications=[];
  const admins = Object.entries(db.users||{}).filter(([uname,u])=>u.role==='admin' && !isHiddenUser(uname,u)).map(([u])=>u);
  if(!admins.length){ if(typeof flash==='function') flash('No hay administradores para notificar','er'); return; }
  // Evitar duplicados pendientes del mismo operador
  const dup = (db.notifications||[]).some(n=>n.type==='sap-request' && n.fromUser===CUR.username && !n.read && !n.resolved);
  if(dup){ if(typeof flash==='function') flash('Ya enviaste una solicitud, espera respuesta','wn'); return; }
  admins.forEach(adminUser=>{
    db.notifications.push({
      id: Date.now()+'_'+Math.random().toString(36).slice(2),
      to: adminUser,
      from: isMaster() ? '__system__' : CUR.username,
      fromName: isMaster() ? 'Sistema' : CUR.name,
      fromUser: isMaster() ? '__system__' : CUR.username,
      type: 'sap-request',
      msg: `📩 ${CUR.name} (@${CUR.username}) solicita habilitar la visualización de cantidades SAP para hacer un inventario guiado.`,
      at: new Date().toISOString(),
      read: false,
      resolved: false
    });
  });
  setDB(db);
  if(typeof flash==='function') flash('✓ Solicitud enviada al administrador','ok');
}
/* Admin responde a una solicitud de visibilidad SAP */
function approveSapRequest(notifId){
  const db = getDB();
  const n = (db.notifications||[]).find(x=>x.id===notifId);
  if(!n) return;
  // Marcar TODAS las solicitudes del mismo operador como resueltas y leídas
  (db.notifications||[]).forEach(x=>{
    if(x.type==='sap-request' && x.fromUser===n.fromUser && !x.resolved){
      x.resolved = true; x.read = true;
    }
  });
  setDB(db);
  setUserSapVisibility(n.fromUser, true);
  if(typeof renderAdminNotifs==='function') renderAdminNotifs();
}
function denySapRequest(notifId){
  const db = getDB();
  const n = (db.notifications||[]).find(x=>x.id===notifId);
  if(!n) return;
  (db.notifications||[]).forEach(x=>{
    if(x.type==='sap-request' && x.fromUser===n.fromUser && !x.resolved){
      x.resolved = true; x.read = true;
    }
  });
  setDB(db);
  // Notificar al operador la negativa
  try{
    const opMsg = '❌ El administrador no aprobó la solicitud de ver cantidades SAP. Continúa con inventario a ciegas.';
    if(!db.opNotifications) db.opNotifications={};
    if(!db.opNotifications[n.fromUser]) db.opNotifications[n.fromUser]=[];
    db.opNotifications[n.fromUser].push({
      id: Date.now()+'_'+Math.random().toString(36).slice(2),
      from: isMaster() ? '__system__' : CUR.username, fromName: isMaster() ? 'Sistema' : CUR.name,
      msg: opMsg, tipo: 'sap-off',
      at: new Date().toISOString(), read: false
    });
    setDB(db);
  }catch(e){}
  if(typeof flash==='function') flash('Solicitud rechazada','wn');
  if(typeof renderAdminNotifs==='function') renderAdminNotifs();
}

function notifyUser(toUsername, msg, tipo){
  const _silent = isMaster();
  const db=getDB();
  if(!db.opNotifications) db.opNotifications={};
  if(!db.opNotifications[toUsername]) db.opNotifications[toUsername]=[];
  db.opNotifications[toUsername].push({
    id:Date.now()+'_'+Math.random().toString(36).slice(2),
    from: _silent ? '__system__' : CUR.username,
    fromName: _silent ? 'Sistema' : CUR.name,
    msg,
    tipo, // 'felicitacion' | 'mejora' | 'catalogo' | 'ubicacion' | 'tarea'
    at:new Date().toISOString(),
    read:false
  });
  setDB(db);
  // Si el operador destinatario está logueado en este mismo tab, notificar ya
  if(CUR.username === toUsername){
    sendBrowserNotif(tipo, msg);
  }
}

/* ══════════════════════════════════════════════════════
   🔔 NOTIFICACIONES DEL NAVEGADOR (Browser Notification API)
══════════════════════════════════════════════════════ */

// Mapa de iconos y colores por tipo de notificación
const _notifCfg = {
  catalogo:   { icon:'📦', title:'📦 Nuevo catálogo asignado',  badge:'📦' },
  ubicacion:  { icon:'📍', title:'📍 Nuevas ubicaciones asignadas', badge:'📍' },
  tarea:      { icon:'📌', title:'📌 Nueva tarea asignada',     badge:'📌' },
  felicitacion:{ icon:'🎉', title:'🎉 ¡Felicitaciones!',        badge:'🎉' },
  mejora:     { icon:'📌', title:'📌 Revisión de novedad',      badge:'📌' },
  reconteo:  { icon:'🔁', title:'🔁 Solicitud de reconteo',    badge:'🔁' },
  default:    { icon:'🔔', title:'🔔 InvTrack Pro',             badge:'🔔' },
};

// Solicitar permiso de notificaciones (llamar al login del operador)
function requestNotifPermission(){
  if(!('Notification' in window)) return;
  if(Notification.permission === 'default'){
    Notification.requestPermission();
  }
}

// Enviar notificación nativa del sistema operativo
function sendBrowserNotif(tipo, body, tag){
  if(!('Notification' in window)) return;
  if(Notification.permission !== 'granted') return;
  const cfg = _notifCfg[tipo] || _notifCfg.default;
  const opts = {
    body,
    tag: tag || ('invtrack_' + tipo + '_' + Date.now()),
    icon: 'https://cdn.jsdelivr.net/npm/twemoji@latest/assets/72x72/' +
          (tipo==='catalogo'?'1f4e6':tipo==='ubicacion'?'1f4cd':tipo==='tarea'?'1f4cc':
           tipo==='felicitacion'?'1f389':'1f514') + '.png',
    badge: 'https://cdn.jsdelivr.net/npm/twemoji@latest/assets/72x72/1f514.png',
    vibrate: tipo==='felicitacion'?[100,50,100,50,200]:[200,80,200],
    requireInteraction: true,
    silent: false,
  };
  try {
    const n = new Notification(cfg.title, opts);
    n.onclick = () => { window.focus(); n.close(); };
  } catch(e){
    // En algunos navegadores con service worker se necesita distinto path — ignorar silenciosamente
  }
}

// ── Polling: detectar notificaciones nuevas mientras el operador tiene la app abierta
let _lastNotifCheck = Date.now();
let _notifPollTimer = null;

function startNotifPolling(){
  if(_notifPollTimer) return; // ya corriendo
  _notifPollTimer = setInterval(()=>{
    if(!CUR || !CUR.username) return;
    // Aplicar visibilidad SAP en cada tick (admin puede cambiarla en cualquier momento)
    try { applySapVisibility(); } catch(e){}
    if(CUR.role === 'admin'){
      try { renderAdminNotifs(); } catch(e){}
      return;
    }
    if(CUR.role !== 'operator') return;
    const db = getDB();
    // Refrescar UI de inventario activo si está en pantalla (para que SAP aparezca/desaparezca al instante)
    try {
      const scrEl = document.querySelector('.screen.active');
      const inInv = scrEl && (scrEl.id==='screen-scan' || scrEl.id==='screen-catalog');
      if(inInv && typeof renderCI==='function' && window.ACTIVE && ACTIVE.cur){ renderCI(); }
    } catch(e){}
    const notifs = (db.opNotifications?.[CUR.username]||[])
      .filter(n => !n.read && new Date(n.at).getTime() > _lastNotifCheck);
    if(notifs.length){
      _lastNotifCheck = Date.now();
      notifs.forEach(n => {
        sendBrowserNotif(n.tipo || 'default', n.msg);
      });
      renderOpNotifs(); // refrescar panel en pantalla también
    }
  }, 2000); // cada 2 segundos
}

function stopNotifPolling(){
  if(_notifPollTimer){ clearInterval(_notifPollTimer); _notifPollTimer=null; }
}

function renderOpNotifs(){
  const db=getDB();
  const notifs=(db.opNotifications?.[CUR.username]||[]).filter(n=>!n.read).sort((a,b)=>new Date(b.at)-new Date(a.at));
  const panel=document.getElementById('op-notifs-panel');
  if(!panel) return;
  if(!notifs.length){panel.style.display='none';panel.innerHTML='';return;}
  panel.style.display='';
  const items=notifs.map(n=>{
    const isFel=n.tipo==='felicitacion';
    const t=new Date(n.at);
    const when=t.toLocaleTimeString('es-CO',{hour:'2-digit',minute:'2-digit'})+' · '+t.toLocaleDateString('es-CO',{day:'2-digit',month:'short'});
    return `<div class="op-notif ${isFel?'':'op-notif-warn'}" style="position:relative;">
      <div style="font-size:20px;margin-bottom:6px;">${isFel?'🎉':'📌'}</div>
      <div style="font-size:13px;line-height:1.6;color:var(--tx);">${n.msg}</div>
      <div style="font-size:11px;color:var(--tx3);margin-top:5px;">De: ${n.fromName} · ${when}</div>
      <button onclick="dismissOpNotif('${n.id}')" style="position:absolute;top:10px;right:10px;background:none;border:none;color:var(--tx3);font-size:17px;cursor:pointer;line-height:1;">✕</button>
    </div>`;
  }).join('');
  panel.innerHTML=`<details style="background:rgba(0,229,160,.04);border:1px solid rgba(0,229,160,.25);border-radius:var(--rs);overflow:hidden;">
    <summary style="cursor:pointer;list-style:none;padding:10px 13px;display:flex;align-items:center;gap:8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--ac);">
      📬 Mensajes del admin <span style="background:var(--ac);color:#000;border-radius:10px;padding:1px 8px;font-size:11px;">${notifs.length}</span>
      <span style="margin-left:auto;font-size:10px;color:var(--tx3);font-weight:500;text-transform:none;letter-spacing:0;">tocar para ver</span>
    </summary>
    <div style="padding:10px 10px 4px;max-height:340px;overflow-y:auto;">
      ${items}
      ${notifs.length>1?`<button onclick="dismissAllOpNotifs()" style="width:100%;background:rgba(255,255,255,.04);border:1px solid var(--bd);color:var(--tx2);padding:8px;border-radius:var(--rs);font-size:12px;cursor:pointer;margin-top:4px;">Marcar todas como leídas</button>`:''}
    </div>
  </details>`;
}

function dismissOpNotif(id){
  const db=getDB();
  const notifs=db.opNotifications?.[CUR.username]||[];
  const n=notifs.find(x=>x.id===id);
  if(n) n.read=true;
  setDB(db);
  renderOpNotifs();
}
function dismissAllOpNotifs(){
  const db=getDB();
  const notifs=db.opNotifications?.[CUR.username]||[];
  notifs.forEach(n=>{ if(!n.read) n.read=true; });
  setDB(db);
  renderOpNotifs();
}
/* ── Excel styling helper (xlsx-js-style) ─────────────────────────
   Genera hojas con título corporativo, encabezado coloreado, filas zebra,
   filtros, panel congelado y semáforo en la columna "Estado". */
function _xlsxColLetter(n){let s='';while(n>=0){s=String.fromCharCode(65+(n%26))+s;n=Math.floor(n/26)-1;}return s;}
function buildStyledSheet(rows,opts){
  opts=opts||{};
  const title=opts.title||'InvTrack Pro';
  const subtitle=opts.subtitle||('Generado: '+new Date().toLocaleString('es-CO'));
  const author=opts.author||(window.CUR?.name||window.CUR?.username||'');
  if(!rows||!rows.length){
    const empty=XLSX.utils.aoa_to_sheet([[title],[subtitle],[],['Sin datos']]);
    empty['!cols']=[{wch:40}];
    return empty;
  }
  const headers=Object.keys(rows[0]);
  const nCols=headers.length;
  const lastCol=_xlsxColLetter(nCols-1);
  const aoa=[
    [title,...Array(nCols-1).fill('')],
    [subtitle+(author?('  ·  Por: '+author):''),...Array(nCols-1).fill('')],
    [],
    headers,
    ...rows.map(r=>headers.map(h=>r[h]??''))
  ];
  const ws=XLSX.utils.aoa_to_sheet(aoa);
  // Anchos de columna razonables si no se proveen
  const widths=opts.widths||headers.map(h=>{
    const maxLen=Math.max(h.length,...rows.slice(0,200).map(r=>String(r[h]??'').length));
    return {wch:Math.min(Math.max(maxLen+2,10),32)};
  });
  ws['!cols']=widths;
  ws['!rows']=[{hpt:28},{hpt:18},{hpt:6},{hpt:24}];
  // Combinar título y subtítulo
  ws['!merges']=[
    {s:{r:0,c:0},e:{r:0,c:nCols-1}},
    {s:{r:1,c:0},e:{r:1,c:nCols-1}}
  ];
  // Autofiltro y panel congelado
  ws['!autofilter']={ref:`A4:${lastCol}4`};
  ws['!freeze']={xSplit:0,ySplit:4};
  ws['!ref']=`A1:${lastCol}${aoa.length}`;
  // Estilos
  const C={brand:'0A8F5E',brandDk:'064F35',head:'0E1116',headTx:'FFFFFF',sub:'6B7280',
           zebra:'F4F7F6',border:'D9DEE3',ok:'D1F5E0',okTx:'066B3D',
           diff:'FFE2E2',diffTx:'8B1F1F',nov:'DCE9FF',novTx:'0A4FA8',
           pend:'FFF1D6',pendTx:'8A6100',noco:'EADCF8',nocoTx:'5B2A86'};
  const border={top:{style:'thin',color:{rgb:C.border}},bottom:{style:'thin',color:{rgb:C.border}},left:{style:'thin',color:{rgb:C.border}},right:{style:'thin',color:{rgb:C.border}}};
  // Título
  ws['A1'].s={font:{bold:true,sz:16,color:{rgb:'FFFFFF'},name:'Calibri'},fill:{patternType:'solid',fgColor:{rgb:C.brand}},alignment:{horizontal:'left',vertical:'center',indent:1}};
  ws['A2'].s={font:{italic:true,sz:10,color:{rgb:'FFFFFF'},name:'Calibri'},fill:{patternType:'solid',fgColor:{rgb:C.brandDk}},alignment:{horizontal:'left',vertical:'center',indent:1}};
  // Headers (fila 4 → índice 3)
  for(let c=0;c<nCols;c++){
    const ref=_xlsxColLetter(c)+'4';
    if(!ws[ref]) ws[ref]={t:'s',v:headers[c]};
    ws[ref].s={font:{bold:true,sz:11,color:{rgb:C.headTx},name:'Calibri'},fill:{patternType:'solid',fgColor:{rgb:C.head}},alignment:{horizontal:'center',vertical:'center',wrapText:true},border};
  }
  // Detectar columna Estado y columnas numéricas
  const estadoIdx=headers.indexOf('Estado');
  const numericHeaders=new Set(['Contado','Stock SAP','Diferencia','Cantidad de Cajas','Medida por Caja (M²)']);
  const numericIdx=headers.map((h,i)=>numericHeaders.has(h)?i:-1).filter(i=>i>=0);
  // Filas de datos (empezando en fila 5 → índice 4)
  for(let r=0;r<rows.length;r++){
    const excelRow=r+5;
    const zebraFill=(r%2===1)?{patternType:'solid',fgColor:{rgb:C.zebra}}:null;
    for(let c=0;c<nCols;c++){
      const ref=_xlsxColLetter(c)+excelRow;
      if(!ws[ref]) ws[ref]={t:'s',v:''};
      const isNum=numericIdx.includes(c);
      const cell=ws[ref];
      if(isNum && cell.v!=='' && cell.v!==null && !isNaN(Number(cell.v))){
        cell.t='n';cell.v=Number(cell.v);
      }
      cell.s={
        font:{sz:10,name:'Calibri',color:{rgb:'1F2937'}},
        alignment:{horizontal:isNum?'right':'left',vertical:'center',wrapText:false,indent:isNum?0:1},
        border,
        ...(zebraFill?{fill:zebraFill}:{})
      };
      if(isNum) cell.z='#,##0.##;[Red](#,##0.##);"-"';
      // Semáforo en Estado
      if(c===estadoIdx){
        const v=String(cell.v||'');
        let fg=null,tx=null,bold=true;
        if(v.includes('Correcto')){fg=C.ok;tx=C.okTx;}
        else if(v.includes('Diferencia')){fg=C.diff;tx=C.diffTx;}
        else if(v.includes('Extra')||v.includes('Novedad')){fg=C.nov;tx=C.novTx;}
        else if(v.includes('No contado')){fg=C.noco;tx=C.nocoTx;}
        else if(v.includes('Sin contar')||v.includes('Sin referencias')){fg=C.pend;tx=C.pendTx;}
        if(fg){
          cell.s.fill={patternType:'solid',fgColor:{rgb:fg}};
          cell.s.font={sz:10,name:'Calibri',bold,color:{rgb:tx}};
          cell.s.alignment={horizontal:'center',vertical:'center'};
        }
      }
    }
  }
  return ws;
}

function expInvsXLSX(invs,fname){
  const rows=buildRows(invs);
  const ws=buildStyledSheet(rows,{
    title:'📦 InvTrack Pro — Reporte de Inventario',
    subtitle:`Archivo: ${fname}  ·  Filas: ${rows.length}  ·  Generado: ${new Date().toLocaleString('es-CO')}`,
    widths:[12,18,10,10,14,16,30,8,14,12,12,12,16,12,16,10,30,10,18,30,16].map(w=>({wch:w}))
  });
  const wb=XLSX.utils.book_new();
  wb.Props={Title:'Reporte InvTrack Pro',Author:'InvTrack Pro · Jose Pérez',CreatedDate:new Date()};
  XLSX.utils.book_append_sheet(wb,ws,'Inventario');
  XLSX.writeFile(wb,fname);flash('Excel descargado ✓','ok');
}

/* ══════════════════════════════════════════════════════
   INVENTORY FLOW
══════════════════════════════════════════════════════ */
function startOrContinue(){
  if(!getCatalog(CUR.username)){
    flash('⚠️ Debes cargar un catálogo antes de iniciar un inventario','wn');
    setTimeout(()=>{if(CUR.role==='admin'||CUR.role==='master') adminNavCatalog(); else nav('catalog');},1200);
    return;
  }
  if(!ACTIVE){
    ACTIVE={id:Date.now(),username:CUR.username,user:CUR.name,date:toDS(new Date()),startTime:new Date().toISOString(),locations:[],cur:null,catalogKey:getActiveCatalogKey(CUR.username)};
    saveActive(ACTIVE);
  } else if(!ACTIVE.catalogKey){
    ACTIVE.catalogKey=getActiveCatalogKey(CUR.username);
    saveActive(ACTIVE);
  }
  goLocStep();
}
function goLocStep(){
  if(!ACTIVE){startOrContinue();return;}
  stopAll();showScr('scan');
  ACTIVE.cur?openProdStep():openLocStep();
}
function openLocStep(){
  document.getElementById('step-loc').style.display='';
  document.getElementById('step-prod').style.display='none';
  const n=ACTIVE.locations.length;

  // ── Verificar si ya se contaron todas las ubicaciones del catálogo ──
  const cat=getCatalog(CUR.username);
  // Check if this is a selective audit
  const assignedCat=getActiveCatalogEntry(CUR.username);
  const isSelAudit = assignedCat&&assignedCat.isSelectiveAudit;
  const saLabel = isSelAudit ? ' 🎯' : '';

  if(cat&&cat.catalog&&n>0){
    const allCatLocs=new Set();
    Object.values(cat.catalog).forEach(ref=>{(ref.locs||[]).forEach(l=>{if(l.loc) allCatLocs.add(l.loc);});});
    const countedCodes=new Set(ACTIVE.locations.map(l=>l.code));
    const remaining=[...allCatLocs].filter(l=>!countedCodes.has(l));
    if(remaining.length===0){
      // Todas contadas: mostrar banner de finalización en lugar del formulario
      document.getElementById('sc-title').textContent=isSelAudit?'Auditoría completada':'Inventario completo';
      document.getElementById('sc-sub').textContent=`${n} ubicación${n!==1?'es':''} contada${n!==1?'s':''}`;
      document.getElementById('step-loc').innerHTML=`
        <div class="pan" style="text-align:center;padding:32px 20px;">
          <div style="font-size:52px;margin-bottom:16px;">${isSelAudit?'🎯':'🎉'}</div>
          <div style="font-family:var(--fh);font-size:20px;font-weight:800;color:var(--ac);margin-bottom:8px;">${isSelAudit?'¡Auditoría Selectiva completada!':'¡Catálogo completado!'}</div>
          <div style="font-size:14px;color:var(--tx2);line-height:1.6;margin-bottom:24px;">
            Has contado todas las <b style="color:var(--tx);">${allCatLocs.size} ubicaciones</b> ${isSelAudit?'de la auditoría':'del catálogo'}.<br>No hay más ubicaciones por agregar.
          </div>
          <button class="btn bp" style="margin-bottom:10px;" onclick="closeInv()">✅ Terminar ${isSelAudit?'auditoría':'inventario'}</button>
          <button class="btn bs" onclick="goHome()">← Volver al inicio</button>
        </div>`;
      return;
    }
    document.getElementById('sc-sub').textContent=`${n} cerrada${n!==1?'s':''} · Quedan ${remaining.length}${saLabel}`;
  } else {
    document.getElementById('sc-sub').textContent=n>0?`${n} ubicación${n!==1?'es':''} cerrada${n!==1?'s':''}`:(isSelAudit?'🎯 Auditoría Selectiva en curso':'Inventario en curso');
  }

  document.getElementById('sc-title').textContent=isSelAudit?'🎯 Auditoría Selectiva':'Nueva Ubicación';
  // Restaurar el contenido original del step-loc por si fue reemplazado
  const stepLoc=document.getElementById('step-loc');
  // Lista de ubicaciones cerradas: permite reabrir CUALQUIERA, no solo la última
  const closedLocs=ACTIVE.locations.filter(l=>!l.isMissingLoc);
  let backBtn='';
  if(closedLocs.length>0){
    const lastLoc=closedLocs[closedLocs.length-1];
    const moreLocs=closedLocs.slice(0,-1).reverse();
    const moreItems=moreLocs.map(l=>{
      const itemCount=Object.keys(l.items||{}).length;
      return `<button onclick="reopenLoc('${l.code.replace(/'/g,"\\'")}')" style="width:100%;display:flex;align-items:center;gap:10px;background:var(--sf2);border:1px solid var(--bd);border-radius:10px;padding:9px 12px;cursor:pointer;text-align:left;margin-top:6px;">
        <div style="width:28px;height:28px;background:rgba(0,148,255,.15);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">↩</div>
        <div style="flex:1;min-width:0;">
          <div style="font-family:var(--fh);font-size:12px;font-weight:800;color:var(--tx);">📍 ${l.code}</div>
          <div style="font-size:10px;color:var(--tx3);margin-top:1px;">${itemCount} producto${itemCount!==1?'s':''} — reabrir y editar</div>
        </div>
        <div style="font-size:16px;color:var(--tx3);">›</div>
      </button>`;
    }).join('');
    const moreBlock=moreLocs.length>0?`
      <details style="margin-top:8px;">
        <summary style="list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;padding:6px 4px;font-size:11px;color:var(--tx3);font-weight:600;letter-spacing:.04em;">
          <span>↻ REABRIR OTRA (${moreLocs.length} cerrada${moreLocs.length!==1?'s':''} más)</span>
          <span style="font-size:10px;">ver ▾</span>
        </summary>
        <div style="margin-top:4px;max-height:240px;overflow-y:auto;">${moreItems}</div>
      </details>`:'';
    backBtn=`
    <div style="margin-bottom:10px;">
      <button onclick="reopenLoc('${lastLoc.code.replace(/'/g,"\\'")}')" style="width:100%;display:flex;align-items:center;gap:10px;background:rgba(0,148,255,.10);border:1.5px solid rgba(0,148,255,.35);border-radius:14px;padding:12px 14px;cursor:pointer;text-align:left;">
        <div style="width:36px;height:36px;background:rgba(0,148,255,.18);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">↩</div>
        <div style="flex:1;min-width:0;">
          <div style="font-family:var(--fh);font-size:13px;font-weight:800;color:var(--ac2);">Volver a ubicación anterior</div>
          <div style="font-size:11px;color:var(--tx2);margin-top:1px;">📍 <b style="color:var(--tx);">${lastLoc.code}</b> — reabrir y editar</div>
        </div>
        <div style="font-size:18px;color:rgba(0,148,255,.5);">›</div>
      </button>
      ${moreBlock}
    </div>`;
  }
  // Ubicaciones pendientes del catálogo
  const _cat=getCatalog(CUR.username);
  let pendingLocsHtml='';
  if(_cat&&_cat.catalog){
    const _allCatLocs=new Set();
    Object.values(_cat.catalog).forEach(r=>(r.locs||[]).forEach(l=>{if(l.loc)_allCatLocs.add(l.loc);}));
    const _counted=new Set(ACTIVE.locations.map(l=>l.code));
    const _pending=[..._allCatLocs].filter(l=>!_counted.has(l)).sort();
    const _total=_allCatLocs.size;
    if(_pending.length>0){
      const chips=_pending.map(l=>`<span onclick="document.getElementById('inp-loc').value='${l}';document.getElementById('inp-loc').focus();" style="display:inline-block;background:var(--sf2);border:1px solid var(--bd);border-radius:6px;padding:3px 8px;font-size:11px;font-family:var(--fh);font-weight:700;color:var(--tx2);cursor:pointer;margin:2px;">${l}</span>`).join('');
      pendingLocsHtml=`
        <details style="margin-top:14px;" id="pending-locs-details">
          <summary style="list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;padding:8px 2px;">
            <span style="font-size:11px;color:var(--tx3);font-weight:600;letter-spacing:.04em;">FALTAN ${_pending.length} DE ${_total}</span>
            <span style="font-size:10px;color:var(--tx3);">ver ▾</span>
          </summary>
          <div style="margin-top:6px;line-height:1.8;">${chips}</div>
        </details>`;
    } else if(_total>0){
      pendingLocsHtml=`<div style="margin-top:14px;text-align:center;font-size:11px;color:var(--ac);font-weight:600;">✅ Catálogo completo — ${_total}/${_total}</div>`;
    }
  }
  stepLoc.innerHTML=`
    <div class="sh"><div class="sh-t">Ubicación</div><div class="sh-s">Escanea el código o escríbelo</div></div>
    ${backBtn}
    <div class="pan">
      <div class="pan-t">📍 Código de ubicación</div>
      <div class="sc-wrap" id="sw-loc">
        <video id="vid-loc" playsinline autoplay muted></video>
        <canvas id="cv-loc" class="hid"></canvas>
        <div class="sc-aim"><div class="sc-box"></div><div class="sc-line"></div></div>
        <button class="sc-close" onclick="stopScan('loc')">✕</button>
      </div>
      <div id="perm-loc" class="perm-box"></div>
      <div class="sir">
        <input type="text" id="inp-loc" placeholder="Ej: EDA0101A" autocapitalize="characters" autocorrect="off">
        <button class="scb" id="scb-loc" onclick="toggleScan('loc')">📷</button>
      </div>
      <div class="mt10"><button class="btn bp" onclick="confirmLoc()">Confirmar Ubicación →</button></div>
      <div style="margin-top:8px;"><button onclick="cancelInv()" style="width:100%;background:rgba(255,77,109,.08);border:1.5px solid rgba(255,77,109,.3);border-radius:14px;padding:12px 16px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;color:var(--dg);font-family:var(--fh);font-size:13px;font-weight:700;">🗑 Cancelar inventario</button></div>
      ${pendingLocsHtml}
    </div>`;
  document.getElementById('inp-loc').value='';
  document.getElementById('perm-loc').classList.remove('on');
  // Limpiar error de ubicación no encontrada
  const prevErr=document.getElementById('loc-notfound-err');
  if(prevErr) prevErr.style.display='none';
  const inp=document.getElementById('inp-loc');
  if(inp){inp.style.borderColor='';inp.style.boxShadow='';inp.oninput=()=>{const e=document.getElementById('loc-notfound-err');if(e)e.style.display='none';inp.style.borderColor='';inp.style.boxShadow='';};}

}
function cancelInv(){
  const n=ACTIVE.locations.length+(ACTIVE.cur?1:0);
  appConfirm('🗑 Cancelar inventario',`¿Cancelar el inventario en curso?\n\n${n>0?`Se perderán ${n} ubicación${n!==1?'es':''} contada${n!==1?'s':''}.`:'No hay ubicaciones contadas aún.'}\n\nEsta acción no se puede deshacer.`,()=>{
    stopAll();
    clearActive();
    ACTIVE=null;
    _resetCISearch();
    goHome();
    flash('Inventario cancelado','wn');
  });
}
function reopenLoc(code){
  if(!ACTIVE||!ACTIVE.locations.length||!code) return;
  const idx=ACTIVE.locations.findIndex(l=>l.code===code && !l.isMissingLoc);
  if(idx<0){flash('Ubicación no encontrada','er');return;}
  // Si ya hay una ubicación activa abierta, guardarla antes de cambiar
  if(ACTIVE.cur){
    ACTIVE.locations.push(ACTIVE.cur);
    ACTIVE.cur=null;
  }
  const loc=ACTIVE.locations.splice(idx,1)[0];
  ACTIVE.cur=loc;
  saveActive(ACTIVE);
  openProdStep();
  flash('↩ Reabierta '+loc.code,'ok');
}
function goBackToLastLoc(){
  // Compatibilidad con código existente: reabre la última cerrada
  if(!ACTIVE||!ACTIVE.locations.length) return;
  const last=ACTIVE.locations[ACTIVE.locations.length-1];
  reopenLoc(last.code);
}
function openProdStep(){
  document.getElementById('step-loc').style.display='none';
  document.getElementById('step-prod').style.display='';
  const loc=ACTIVE.cur;
  document.getElementById('sc-title').textContent=loc.code;
  document.getElementById('sc-sub').textContent='📍 Contando productos';
  document.getElementById('perm-prod').classList.remove('on');
  clearXForm();_resetCISearch();
  _applyCISortUI();
  renderLocHdr();renderCI();renderXList();
  const n=Object.keys(loc.items).filter(k=>!loc.items[k].isExtra).length;
}
function confirmLoc(){
  const code=document.getElementById('inp-loc').value.trim().toUpperCase();
  if(!code){flash('Ingresa el código de ubicación','er');return;}

  // ── Validar que la ubicación exista en el catálogo SAP activo ──
  const cat=getCatalog(CUR.username);
  if(!cat){
    flash('⚠️ No hay catálogo cargado','wn');
    return;
  }
  const locsInCatalog=new Set();
  Object.values(cat.catalog).forEach(v=>(v.locs||[]).forEach(l=>locsInCatalog.add(l.loc)));

  // Check selective audit context for better error message
  const assignedSA=getActiveCatalogEntry(CUR.username);
  const isSelAudit=assignedSA&&assignedSA.isSelectiveAudit;

  if(!locsInCatalog.has(code)){
    flash(`❌ "${code}" no está en el catálogo SAP`,'er');
    if(CFG.vibrate&&navigator.vibrate) navigator.vibrate([100,50,100,50,100]);
    const inp=document.getElementById('inp-loc');
    inp.style.borderColor='var(--dg)';
    inp.style.boxShadow='0 0 0 3px rgba(255,77,109,.2)';
    inp.animate([
      {transform:'translateX(0)'},{transform:'translateX(-7px)'},
      {transform:'translateX(7px)'},{transform:'translateX(-5px)'},
      {transform:'translateX(5px)'},{transform:'translateX(0)'}
    ],{duration:320,easing:'ease-in-out'});
    inp.select();
    let errBox=document.getElementById('loc-notfound-err');
    if(!errBox){
      errBox=document.createElement('div');
      errBox.id='loc-notfound-err';
      errBox.style.cssText='margin-top:8px;background:rgba(255,77,109,.1);border:1px solid rgba(255,77,109,.3);border-radius:var(--rs);padding:11px 13px;font-size:13px;color:var(--dg);line-height:1.5;animation:fi .2s ease;';
      document.getElementById('inp-loc').parentNode.after(errBox);
    }
    // If selective audit, clarify the location is excluded from this audit
    const isExcluded = isSelAudit && assignedSA.selectiveLocs && !assignedSA.selectiveLocs.includes(code);
    if(isExcluded){
      errBox.innerHTML=`🎯 <b>${code}</b> no forma parte de esta Auditoría Selectiva.<br><span style="font-size:12px;color:var(--tx2);">Solo puedes contar las ${assignedSA.selectiveLocs.length} ubicaciones asignadas.</span>`;
    } else {
      errBox.innerHTML=`⛔ <b>${code}</b> no tiene referencias en el catálogo SAP.<br><span style="font-size:12px;color:var(--tx2);">Verifica el código o actualiza el catálogo.</span>`;
    }
    errBox.style.display='block';
    setTimeout(()=>{inp.style.borderColor='';inp.style.boxShadow='';},2500);
    return;
  }
  // Limpiar error previo si existe
  const errBox=document.getElementById('loc-notfound-err');
  if(errBox) errBox.style.display='none';

  // ── Bloquear ubicación duplicada en el inventario activo ──
  const alreadyCounted=ACTIVE.locations.find(l=>l.code===code);
  if(alreadyCounted){
    const countedAt=alreadyCounted.endTime?` a las ${fT(new Date(alreadyCounted.endTime))}`:'';
    flash(`⚠️ ${code} ya fue contada en este inventario${countedAt}`,'er');
    if(CFG.vibrate&&navigator.vibrate) navigator.vibrate([80,40,80,40,80]);
    document.getElementById('inp-loc').select();
    return;
  }
  stopScan('loc');
  const prods=getProdsInLoc(code);
  const items={};
  prods.forEach(p=>{items[p.code]={name:p.name,sapStock:p.stock,counted:null,status:'pending',note:'',isExtra:false,isM2:p.isM2||false,unit:p.unit||'',m2PerBox:null,boxes:null};});
  ACTIVE.cur={code,startTime:new Date().toISOString(),items};
  saveActive(ACTIVE);openProdStep();checkLocNote(code);
  flash('📍 '+code+(prods.length?` · ${prods.length} refs.`:''));
  if(CFG.vibrate&&navigator.vibrate) navigator.vibrate([40,30,40]);
}

/* LOC HEADER */
function renderLocHdr(){
  const loc=ACTIVE.cur;
  const its=Object.values(loc.items);
  const sap=its.filter(i=>!i.isExtra);
  const tot=sap.length,cnt=sap.filter(i=>i.counted!==null).length;
  const ok=sap.filter(i=>i.status==='ok').length;
  const diff=sap.filter(i=>i.status==='diff').length;
  const pend=sap.filter(i=>i.status==='pending').length;
  const ext=its.filter(i=>i.isExtra).length;
  const pct=tot>0?Math.round(cnt/tot*100):0;
  const n=ACTIVE.locations.length;
  document.getElementById('loc-hdr').innerHTML=`
    <div class="lh">
      <div class="lh-top">
        <div><div class="lh-code">📍 ${loc.code}</div>
          <div class="lh-meta">Inicio: <b>${fT(new Date(loc.startTime))}</b></div>
          ${n>0?`<div class="lh-meta">${n} ubicación${n!==1?'es':''} ya cerrada${n!==1?'s':''}</div>`:''}
        </div>
        <span class="badge bo">● Abierta</span>
      </div>
      <div class="lh-chips">
        <span class="lh-chip">${cnt}/${tot} contadas</span>
        ${ok?`<span class="lh-chip" style="color:var(--ac);">✓ ${ok}</span>`:''}
        ${diff?`<span class="lh-chip" style="color:var(--dg);">⚡ ${diff}</span>`:''}
        ${pend?`<span class="lh-chip" style="color:var(--tx3);">⏳ ${pend}</span>`:''}
        ${ext?`<span class="lh-chip" style="color:var(--ac2);">🔵 ${ext} extra</span>`:''}
      </div>
      ${tot>0?`<div class="prog"><div class="prog-f" style="width:${pct}%"></div></div><div style="text-align:right;font-size:10px;color:var(--tx2);margin-top:2px;">${pct}%</div>`:''}
    </div>`;
}

/* CHECKLIST */
let _ciFilter='';
// Sort state — persisted in localStorage so each user keeps their preference
const _ciSortKey = 'invtrack_ci_sort';
const _ciDirKey  = 'invtrack_ci_dir';
let _ciSort = (()=>{try{return localStorage.getItem(_ciSortKey)||'ref';}catch(e){return 'ref';}})();
let _ciDir  = (()=>{try{return localStorage.getItem(_ciDirKey)||'asc';}catch(e){return 'asc';}})();

function setCISort(field){
  _ciSort=field;
  try{localStorage.setItem(_ciSortKey,field);}catch(e){}
  _applyCISortUI();renderCI();
}
function toggleCIDir(){
  _ciDir=_ciDir==='asc'?'desc':'asc';
  try{localStorage.setItem(_ciDirKey,_ciDir);}catch(e){}
  _applyCISortUI();renderCI();
}
function _applyCISortUI(){
  ['ref','name','sap','cnt','stat'].forEach(f=>{
    const el=document.getElementById('sc-'+f);
    if(el) el.className='sort-chip'+(_ciSort===f?' on':'');
  });
  const dir=document.getElementById('sc-dir');
  if(dir){dir.textContent=_ciDir==='asc'?'↑':'↓';dir.className='sort-dir on';}
}
function _sortCI(ents){
  const dir=_ciDir==='asc'?1:-1;
  const statusOrder={ok:1,diff:2,novedad:3,pending:4};
  return [...ents].sort(([ak,av],[bk,bv])=>{
    let a,b;
    if(_ciSort==='name'){a=(av.name||'').toUpperCase();b=(bv.name||'').toUpperCase();return dir*a.localeCompare(b,'es',{sensitivity:'base'});}
    if(_ciSort==='sap'){a=av.sapStock??-Infinity;b=bv.sapStock??-Infinity;return dir*(a-b);}
    if(_ciSort==='cnt'){a=av.counted??-Infinity;b=bv.counted??-Infinity;return dir*(a-b);}
    if(_ciSort==='stat'){a=statusOrder[av.status]??9;b=statusOrder[bv.status]??9;return dir*(a-b);}
    // default: ref
    return dir*ak.localeCompare(bk,'es',{sensitivity:'base'});
  });
}

function _resetCISearch(){
  _ciFilter='';
  const inp=document.getElementById('inp-loc-srch');
  if(inp) inp.value='';
  const clr=document.getElementById('ci-srch-clr');
  if(clr) clr.style.display='none';
}
function clearCIFilter(){
  _resetCISearch();
  renderCI();
}
function filterCI(){
  const val=(document.getElementById('inp-loc-srch')?.value||'');
  _ciFilter=val.toUpperCase();
  const clr=document.getElementById('ci-srch-clr');
  if(clr) clr.style.display=val?'':'none';
  renderCI();
}
function renderCI(){
  const loc=ACTIVE.cur;
  const ents=Object.entries(loc.items).filter(([,v])=>!v.isExtra);
  const fil=_ciFilter?ents.filter(([k,v])=>k.includes(_ciFilter)||v.name.toUpperCase().includes(_ciFilter)):ents;
  const el=document.getElementById('sap-list');
  const n=document.getElementById('slbl-sap-n');if(n) n.textContent=ents.length;
  if(!ents.length){
    el.innerHTML=getCatalog(CUR.username)
      ?'<div class="es" style="padding:16px;"><div class="ei">🔍</div><p>No hay referencias de SAP para esta ubicación.</p></div>'
      :'<div class="es" style="padding:16px;"><div class="ei">📂</div><p>Carga el catálogo Excel para ver las referencias esperadas.</p></div>';
    return;
  }
  if(!fil.length){
    el.innerHTML=_ciFilter
      ?`<div class="es" style="padding:12px;"><div class="ei">🔍</div><p>Sin resultados para <b>"${_ciFilter}"</b></p></div>`
      :'<div class="es" style="padding:12px;"><div class="ei">🔍</div><p>Sin resultados</p></div>';
    return;
  }
  const n2=document.getElementById('slbl-sap-n');
  if(n2) n2.textContent=_ciFilter?`${fil.length}/${ents.length}`:ents.length;
  el.innerHTML=_sortCI(fil).map(([code,item])=>ciHTML(code,item)).join('');
  _applyCISortUI();
}
function renderXList(){
  const loc=ACTIVE.cur;
  const exts=Object.entries(loc.items).filter(([,v])=>v.isExtra);
  const n=document.getElementById('slbl-ext-n');if(n) n.textContent=exts.length;
  document.getElementById('extra-list').innerHTML=exts.map(([code,item])=>ciHTML(code,item)).join('');
}

function ciHTML(code,item){
  const st=item.status,isExt=item.isExtra,isM2=item.isM2&&!isExt;
  const ciCls=st==='ok'?'ci-ok':st==='diff'?'ci-diff':isExt?'ci-extra':st==='pending'?'ci-pend':'';
  const qboxCls=st==='ok'?'qbox-ok':st==='diff'?'qbox-diff':isExt?'qbox-ext':'qbox-pend';
  const btnCls=st==='ok'?'c-ok':st==='diff'?'c-diff':isExt?'c-ext':'';
  const btnTxt=st==='pending'?'✓ Confirmar':st==='ok'?'✓ Correcto':st==='diff'?'⚡ Diferencia':isExt?'✓ Registrado':'✓ Confirmar';

  // For M2 products: qbox shows computed M2 total
  const displayVal = isM2 && item.m2PerBox!==null && item.boxes!==null
    ? (item.boxes * item.m2PerBox).toFixed(3).replace(/\.?0+$/,'') + ' m²'
    : item.counted!==null ? item.counted : null;

  let valHtml='';
  if(item.counted!==null){
    if(st==='ok') valHtml=`<span class="badge val-ok">✓ Coincide con SAP<span class="sap-only"> (${item.sapStock}${isM2?' m²':''})</span></span>`;
    else if(st==='diff'){
      const _cVal = isM2 && item.m2PerBox!==null && item.boxes!==null ? (item.boxes*item.m2PerBox) : (item.counted||0);
      const _d = Math.round((_cVal - (item.sapStock||0))*100)/100;
      const _u = isM2?' m²':'';
      valHtml=`<span class="badge val-diff">⚡ Diferencia<span class="sap-only">: ${_d>0?'+':''}${fmtNum(_d)}${_u}</span> <span class="sap-only" style="opacity:.75;font-weight:600;margin-left:4px;">(SAP ${fmtNum(item.sapStock)}${_u} · Cnt ${fmtNum(_cVal)}${_u})</span></span>`;
    }
    else if(isExt) valHtml=`<span class="badge val-new">🔵 No en SAP para esta ubicación</span>`;
    else valHtml=`<span class="badge val-nov">📝 Novedad</span>`;
  }
  const noteHtml=(item.counted!==null&&(st==='diff'||st==='novedad'))
    ?`<div style="margin-top:8px;"><div style="font-size:10px;color:var(--tx3);margin-bottom:4px;">Observación</div>
       <textarea class="ci-note" id="note-${code}" rows="2" placeholder="¿Producto dañado, mal etiquetado…?" onchange="updNote('${code}',this.value)">${item.note||''}</textarea></div>`:''

  // Photo evidence — only shown for diff/novedad items after counting
  const photoHtml=(item.counted!==null&&(st==='diff'||st==='novedad'))
    ?`<div class="photo-wrap">
        <div class="photo-label">📷 Foto de evidencia</div>
        ${item.photo
          ?`<div class="photo-thumb-wrap">
               <img class="photo-thumb" src="${item.photo}" alt="evidencia">
               <button class="photo-del" onclick="delPhoto('${code}')" title="Eliminar foto">✕</button>
             </div>
             <button class="photo-btn has-photo" style="margin-top:6px;" onclick="triggerPhoto('${code}')">📷 Cambiar foto</button>`
          :`<button class="photo-btn" onclick="triggerPhoto('${code}')">📷 Tomar / adjuntar foto</button>`
        }
        <input class="photo-file-inp" type="file" accept="image/*" capture="environment" id="photo-inp-${code}" onchange="onPhotoSelected('${code}',this)">
      </div>`:''

  // M2 product: special layout with m2PerBox + boxes inputs
  const m2InputHtml = isM2 ? `
    <div class="m2-panel">
      <div class="m2-badge">📐 Producto en M² — ingresa medida y cajas</div>
      <div class="m2-row">
        <div class="m2-field">
          <div class="m2-field-lbl">Medida por caja (M²)</div>
          <input class="m2-inp" type="number" id="m2pb-${code}" value="${item.m2PerBox!==null?item.m2PerBox:''}" placeholder="Ej: 1.44" step="0.001" min="0.001" inputmode="decimal" oninput="onM2PB('${code}',this.value)">
        </div>
        <div class="m2-times">×</div>
        <div class="m2-field">
          <div class="m2-field-lbl">Cantidad de cajas</div>
          <div style="display:flex;align-items:center;gap:5px;">
            <button class="ci-qs" onclick="adjBoxes('${code}',-1)">−</button>
            <input class="m2-inp" type="number" id="bx-${code}" value="${item.boxes!==null?item.boxes:''}" placeholder="0" min="0" step="1" inputmode="numeric" oninput="onBoxes('${code}',this.value)">
            <button class="ci-qs" onclick="adjBoxes('${code}',1)">+</button>
          </div>
        </div>
      </div>
      <div class="m2-result-row">
        <span class="m2-eq-lbl">= Total M²:</span>
        <span class="m2-result" id="m2res-${code}">${item.m2PerBox!==null&&item.boxes!==null?(item.boxes*item.m2PerBox).toFixed(3).replace(/\.?0+$/,''):'—'}</span>
      </div>
    </div>` : '';

  // Standard quantity input (hidden for M2 products since boxes/m2pb replace it)
  const stdQtyHtml = isM2 ? '' : `
    <div class="ci-actions">
      <button class="ci-qs" onclick="adjItem('${code}',-1)">−</button>
      <input class="ci-qinp" type="number" id="qi-${code}" value="${item.counted!==null?item.counted:''}" placeholder="0" min="0" oninput="onII('${code}',this.value)">
      <button class="ci-qs" onclick="adjItem('${code}',1)">+</button>
      <button class="ci-ok-btn ${btnCls}" onclick="confirmItem('${code}')">${btnTxt}</button>
    </div>`;

  const m2ConfirmHtml = isM2 ? `
    <div style="margin-top:8px;">
      <button class="ci-ok-btn ${btnCls}" style="width:100%;padding:10px;" onclick="confirmItem('${code}')">${btnTxt}</button>
    </div>` : '';

  return `<div class="ci ${ciCls}" id="ci-${code}">
    <div class="ci-top">
      <div class="ci-ic ${isExt?'ext':isM2?'m2ic':''}">${isExt?'🔵':isM2?'📐':'📦'}</div>
      <div class="ci-inf">
        <div class="ci-ref">${code}</div>
        <div class="ci-name">${item.name||'—'}</div>
        ${(!isExt && item.sapStock!==null && item.sapStock!==undefined)?`<div class="sap-only-block" style="font-size:10px;color:var(--tx3);margin-top:3px;letter-spacing:.3px;">SAP: <span style="color:var(--tx2);font-weight:700;">${fmtNum(item.sapStock)}${isM2?' m²':''}</span></div>`:''}
      </div>
      ${displayVal!==null?`<div class="ci-right"><div class="qbox ${qboxCls}" style="${isM2?'font-size:12px;min-width:52px;':''};">${displayVal}</div></div>`:''}
    </div>
    ${m2InputHtml}
    ${stdQtyHtml}
    ${m2ConfirmHtml}
    ${item.counted!==null?`<div class="ci-val-row">${valHtml}</div>`:''}
    ${noteHtml}
    ${photoHtml}
  </div>`;
}

function onII(code,val){const n=parseFloat(val);if(!isNaN(n)&&n>=0){ACTIVE.cur.items[code].counted=n;saveActive(ACTIVE);}}
function adjItem(code,d){const el=document.getElementById('qi-'+code);const nv=Math.max(0,(parseFloat(el.value)||0)+d);el.value=nv;ACTIVE.cur.items[code].counted=nv;saveActive(ACTIVE);}

/* M2 product handlers */
function onM2PB(code,val){
  const n=parseFloat(val.replace(',','.'));
  const item=ACTIVE.cur.items[code];
  item.m2PerBox=isNaN(n)||n<=0?null:n;
  updateM2Result(code);saveActive(ACTIVE);
}
function onBoxes(code,val){
  const n=parseFloat(val);
  const item=ACTIVE.cur.items[code];
  item.boxes=isNaN(n)||n<0?null:n;
  updateM2Result(code);saveActive(ACTIVE);
}
function adjBoxes(code,d){
  const el=document.getElementById('bx-'+code);
  const nv=Math.max(0,(parseFloat(el.value)||0)+d);
  el.value=nv;
  ACTIVE.cur.items[code].boxes=nv;
  updateM2Result(code);saveActive(ACTIVE);
}
function updateM2Result(code){
  const item=ACTIVE.cur.items[code];
  const resEl=document.getElementById('m2res-'+code);
  if(!resEl) return;
  if(item.m2PerBox!==null&&item.boxes!==null){
    const total=parseFloat((item.boxes*item.m2PerBox).toFixed(3));
    resEl.textContent=total.toFixed(3).replace(/\.?0+$/,'');
    const matches=item.sapStock!==null&&Math.abs(total-item.sapStock)<0.001;
    resEl.style.color=matches?'var(--ac)':'var(--wn)';
  } else {
    resEl.textContent='—';
    resEl.style.color='var(--ac2)';
  }
}

function confirmItem(code){
  const item=ACTIVE.cur.items[code];

  if(item.isM2&&!item.isExtra){
    // M2 product: validate m2PerBox and boxes
    if(item.m2PerBox===null||item.m2PerBox<=0){flash('Ingresa los M² por caja','er');return;}
    if(item.boxes===null||item.boxes<0){flash('Ingresa la cantidad de cajas','er');return;}
    const total=parseFloat((item.boxes*item.m2PerBox).toFixed(3));
    item.counted=total;
    if(item.sapStock===null) item.status='novedad';
    else if(Math.abs(total-item.sapStock)<0.001) item.status='ok';
    else item.status='diff';
  } else {
    const el=document.getElementById('qi-'+code);
    const val=parseFloat(el.value);
    if(isNaN(val)||val<0){flash('Ingresa una cantidad válida','er');return;}
    item.counted=val;
    if(item.isExtra) item.status='novedad';
    else if(item.sapStock===null) item.status='novedad';
    else if(val===item.sapStock) item.status='ok';
    else item.status='diff';
  }

  saveActive(ACTIVE);
  if(CFG.vibrate&&navigator.vibrate) navigator.vibrate(item.status==='ok'?[30,20,30]:[60]);
  renderLocHdr();renderCI();renderXList();
  if(item.status==='ok') flash(`✓ ${code}`,'ok');
  else if(item.status==='diff') flash(`⚡ ${code} — diferencia detectada`,'wn');
  else flash(`🔵 ${code} — novedad`);
}
function updNote(code,val){if(ACTIVE?.cur?.items[code]) ACTIVE.cur.items[code].note=val;saveActive(ACTIVE);}

/* ── PHOTO EVIDENCE ── */
function triggerPhoto(code){
  const inp=document.getElementById('photo-inp-'+code);
  if(inp) inp.click();
}
function onPhotoSelected(code,input){
  const file=input.files?.[0];
  if(!file) return;
  flash('Procesando foto…','wn');
  const reader=new FileReader();
  reader.onload=e=>{
    // Compress via canvas to max 800px wide, quality 0.75
    const img=new Image();
    img.onload=()=>{
      const MAX=800;
      const scale=img.width>MAX?MAX/img.width:1;
      const w=Math.round(img.width*scale);
      const h=Math.round(img.height*scale);
      const canvas=document.createElement('canvas');
      canvas.width=w; canvas.height=h;
      canvas.getContext('2d').drawImage(img,0,0,w,h);
      const compressed=canvas.toDataURL('image/jpeg',0.75);
      if(ACTIVE?.cur?.items[code]){
        ACTIVE.cur.items[code].photo=compressed;
        saveActive(ACTIVE);
        renderCI();renderXList();
        flash('📷 Foto guardada','ok');
      }
    };
    img.src=e.target.result;
  };
  reader.readAsDataURL(file);
  // Reset input so same file can be re-selected
  input.value='';
}
function delPhoto(code){
  appConfirm('Eliminar foto','¿Eliminar la foto de evidencia?',()=>{
    if(ACTIVE?.cur?.items[code]){
      delete ACTIVE.cur.items[code].photo;
      saveActive(ACTIVE);
      renderCI();renderXList();
      flash('Foto eliminada');
    }
  });
}

/* EXTRA */
let _xPhoto = null; // foto de evidencia del producto extra en curso

function onXPhotoSelected(input){
  const file=input.files?.[0];
  if(!file) return;
  flash('Procesando foto…','wn');
  const reader=new FileReader();
  reader.onload=e=>{
    const img=new Image();
    img.onload=()=>{
      const MAX=800;
      const scale=img.width>MAX?MAX/img.width:1;
      const w=Math.round(img.width*scale);
      const h=Math.round(img.height*scale);
      const canvas=document.createElement('canvas');
      canvas.width=w;canvas.height=h;
      canvas.getContext('2d').drawImage(img,0,0,w,h);
      _xPhoto=canvas.toDataURL('image/jpeg',0.75);
      // Mostrar preview
      document.getElementById('xphoto-img').src=_xPhoto;
      document.getElementById('xphoto-preview').style.display='block';
      document.getElementById('xphoto-btn').textContent='📷 Cambiar foto';
      document.getElementById('xphoto-btn').classList.add('has-photo');
      flash('📷 Foto lista','ok');
    };
    img.src=e.target.result;
  };
  reader.readAsDataURL(file);
  input.value='';
}

function clearXPhoto(){
  _xPhoto=null;
  document.getElementById('xphoto-preview').style.display='none';
  document.getElementById('xphoto-btn').textContent='📷 Tomar / adjuntar foto';
  document.getElementById('xphoto-btn').classList.remove('has-photo');
  document.getElementById('xphoto-img').src='';
}

function clearXForm(){
  ['inp-xref','inp-xname'].forEach(id=>{const e=document.getElementById(id);if(e) e.value='';});
  const q=document.getElementById('inp-xqty');if(q) q.value=1;
  clearXPhoto();
}
function chXQ(d){const el=document.getElementById('inp-xqty');el.value=Math.max(1,(parseInt(el.value)||1)+d);}
function addExtra(){
  const ref=document.getElementById('inp-xref').value.trim().toUpperCase();
  const name=document.getElementById('inp-xname').value.trim();
  const qty=parseInt(document.getElementById('inp-xqty').value)||1;
  if(!ref){flash('Ingresa la referencia','er');return;}
  if(!name){flash('Ingresa el nombre del producto','er');return;}
  const loc=ACTIVE.cur;
  if(loc.items[ref]){
    loc.items[ref].counted=(loc.items[ref].counted||0)+qty;
    loc.items[ref].status='novedad';
    if(_xPhoto) loc.items[ref].photo=_xPhoto;
  } else {
    loc.items[ref]={name,sapStock:null,counted:qty,status:'novedad',note:'Producto encontrado en físico, no estaba en SAP para esta ubicación.',isExtra:true,...(_xPhoto?{photo:_xPhoto}:{})};
  }
  saveActive(ACTIVE);clearXForm();renderLocHdr();renderCI();renderXList();
  flash(`🔵 ${ref} registrado en ${loc.code}`);
  if(CFG.vibrate&&navigator.vibrate) navigator.vibrate(60);
}

/* CLOSE LOC */
/* ── CONFIRM MODAL (reemplaza confirm() del navegador en Android) ── */
function appConfirm(title,msg,onOk,onCancel){
  const mo=document.getElementById('conf-mo');
  document.getElementById('conf-ti').textContent=title;
  document.getElementById('conf-msg').textContent=msg;
  mo.style.display='flex';
  const okBtn=document.getElementById('conf-ok');
  const cancelBtn=document.getElementById('conf-cancel');
  function cleanup(){
    mo.style.display='none';
    okBtn.onclick=null;
    cancelBtn.onclick=null;
  }
  okBtn.onclick=()=>{cleanup();if(onOk) onOk();};
  cancelBtn.onclick=()=>{cleanup();if(onCancel) onCancel();};
}

function closeLoc(){
  const loc=ACTIVE.cur;if(!loc) return;
  const pend=Object.values(loc.items).filter(i=>!i.isExtra&&i.counted===null).length;
  if(CFG.confirmClose&&pend>0){
    appConfirm('⚠️ Referencias pendientes',`${pend} referencia${pend!==1?'s':''} sin contar.\n¿Cerrar de todas formas?`,()=>{_doCloseLoc(loc);});
    return;
  }
  _doCloseLoc(loc);
}
function _doCloseLoc(loc){
  loc.endTime=new Date().toISOString();
  // Marcar referencias pendientes como 'missing_loc' para que aparezcan en Novedades → Sin contar
  Object.values(loc.items).forEach(item=>{
    if(!item.isExtra && item.counted===null && item.status!=='ok'){
      item.status='missing_loc';
      if(!item.note) item.note='Referencia no contada al cerrar la ubicación';
    }
  });
  // Si TODAS las referencias quedaron sin contar, marcar la ubicación como isMissingLoc
  const allItems=Object.entries(loc.items).filter(([k])=>k!=='__loc__');
  const allMissing=allItems.length>0 && allItems.every(([,v])=>v.status==='missing_loc');
  if(allMissing) loc.isMissingLoc=true;
  ACTIVE.locations.push(JSON.parse(JSON.stringify(loc)));ACTIVE.cur=null;
  saveActive(ACTIVE);stopAll();_resetCISearch();
  autoMarkLocCounted(loc.code);
  // Refrescar badge "Mis Novedades" para que las novedades de esta ubicación aparezcan al instante
  try{ if(typeof updOpNovBadge==='function') updOpNovBadge(); }catch(e){}
  // Publicar snapshot del inventario en curso para que admin/master vean novedades en tiempo real
  try{ _syncActiveInvData(ACTIVE); }catch(e){}

  // Verificar si quedan ubicaciones del catalogo por contar
  const cat=getCatalog(CUR.username);
  if(cat&&cat.catalog){
    const allCatLocs=new Set();
    Object.values(cat.catalog).forEach(ref=>{(ref.locs||[]).forEach(l=>{if(l.loc) allCatLocs.add(l.loc);});});
    const countedCodes=new Set(ACTIVE.locations.map(l=>l.code));
    const remaining=[...allCatLocs].filter(l=>!countedCodes.has(l));
    if(remaining.length===0){
      flash(`\u2705 ${loc.code} cerrada \u00b7 \u00a1Todas las ubicaciones del cat\u00e1logo han sido contadas!`,'ok');
      setTimeout(()=>{
        appConfirm('🎉 ¡Catálogo completo!',`Completaste todas las ${allCatLocs.size} ubicaciones del catálogo.\n\n¿Deseas cerrar el inventario ahora?`,()=>{closeInv();});
      },400);
      return;
    }
    flash(`Ubicaci\u00f3n ${loc.code} cerrada \u2713 \u00b7 Quedan ${remaining.length} ubicaci\u00f3n${remaining.length!==1?'es':''} por contar`,'ok');
  } else {
    flash(`Ubicaci\u00f3n ${loc.code} cerrada \u2713`,'ok');
  }
  openLocStep();
}
/* CLOSE INV */
function closeInv(){
  if(!ACTIVE) return;
  if(ACTIVE.cur){
    const pend=Object.values(ACTIVE.cur.items).filter(i=>!i.isExtra&&i.counted===null).length;
    if(CFG.confirmClose&&pend>0){
      appConfirm('⚠️ Referencias pendientes',`La ubicación actual tiene ${pend} ref. sin contar.\n¿Cerrar de todas formas?`,()=>{
        ACTIVE.cur.endTime=new Date().toISOString();
        ACTIVE.locations.push(JSON.parse(JSON.stringify(ACTIVE.cur)));ACTIVE.cur=null;
        _doCloseInv();
      });
      return;
    }
    ACTIVE.cur.endTime=new Date().toISOString();
    ACTIVE.locations.push(JSON.parse(JSON.stringify(ACTIVE.cur)));ACTIVE.cur=null;
  }
  if(!ACTIVE.locations.length){flash('Sin ubicaciones','wn');return;}
  // Detectar ubicaciones del catálogo no contadas y registrarlas como novedades
  const cat=getCatalog(CUR.username);
  if(cat&&cat.catalog){
    const countedCodes=new Set(ACTIVE.locations.map(l=>l.code));
    // Mapear qué referencias pertenecen a cada ubicación del catálogo
    const locRefsMap={}; // { locCode: [{sku, name, sapStock}] }
    Object.entries(cat.catalog).forEach(([sku,ref])=>{
      (ref.locs||[]).forEach(l=>{
        if(!l.loc) return;
        if(!locRefsMap[l.loc]) locRefsMap[l.loc]=[];
        locRefsMap[l.loc].push({sku, name:ref.name||sku, sapStock:l.qty||ref.sapStock||0});
      });
    });
    const allCatLocs=new Set(Object.keys(locRefsMap));
    const missing=[...allCatLocs].filter(loc=>!countedCodes.has(loc));
    if(missing.length>0){
      const preview=missing.slice(0,5).join(', ')+(missing.length>5?` y ${missing.length-5} más`:'');
      appConfirm('⚠️ Ubicaciones sin contar',`Hay ${missing.length} ubicación${missing.length!==1?'es':''} del catálogo sin contar:\n\n${preview}\n\n¿Cerrar el inventario de todas formas?\nQuedarán registradas como novedades.`,()=>{_doCloseInv();});
      return;
    }
  }
  _doCloseInv();
}
function _doCloseInv(){
  // ── Convertir TODAS las referencias aún pendientes (sin contar) a missing_loc
  // Esto cubre: (a) ubicación activa al cerrar inventario, (b) ubicaciones ya cerradas
  // con refs saltadas que quedaron con status:'pending'
  ACTIVE.locations.forEach(loc=>{
    if(loc.isMissingLoc) return; // ya marcada como ubicación completa sin contar
    let allMissing=true;
    const nonExtra=Object.entries(loc.items).filter(([k,v])=>!v.isExtra&&k!=='__loc__');
    nonExtra.forEach(([,item])=>{
      if(item.counted===null&&item.status!=='ok'&&item.status!=='missing_loc'){
        item.status='missing_loc';
        if(!item.note) item.note='Referencia no contada al cerrar el inventario';
      }
      if(item.status!=='missing_loc') allMissing=false;
    });
    // Si TODAS las refs quedaron sin contar, marcar la ubicación como isMissingLoc
    if(nonExtra.length>0&&allMissing) loc.isMissingLoc=true;
  });

  const cat=getCatalog(CUR.username);
  if(cat&&cat.catalog){
    const countedCodes=new Set(ACTIVE.locations.map(l=>l.code));
    const locRefsMap={};
    Object.entries(cat.catalog).forEach(([sku,ref])=>{
      (ref.locs||[]).forEach(l=>{
        if(!l.loc) return;
        if(!locRefsMap[l.loc]) locRefsMap[l.loc]=[];
        locRefsMap[l.loc].push({sku, name:ref.name||sku, sapStock:l.qty||ref.sapStock||0});
      });
    });
    const missing=[...new Set(Object.keys(locRefsMap))].filter(loc=>!countedCodes.has(loc));
    if(missing.length>0){
      // Registrar cada ubicación faltante como novedad tipo 'missing_loc'
      const now=new Date().toISOString();
      missing.forEach(locCode=>{
        const refs=locRefsMap[locCode]||[];
        const items={};
        if(refs.length>0){
          refs.forEach(r=>{
            items[r.sku]={
              name:r.name, sapStock:r.sapStock, counted:null,
              status:'missing_loc', isExtra:false,
              note:'Ubicación no contada al cerrar inventario'
            };
          });
        } else {
          // Ubicación en catálogo pero sin referencias mapeadas
          items['__loc__']={
            name:'(sin referencias mapeadas)', sapStock:0, counted:null,
            status:'missing_loc', isExtra:false,
            note:'Ubicación no contada al cerrar inventario'
          };
        }
        ACTIVE.locations.push({
          code:locCode, startTime:now, endTime:now,
          isMissingLoc:true, // marca especial para reportes
          items
        });
      });
    }
  }
  // Auto-mark solo ubicaciones realmente contadas (no las missing_loc)
  ACTIVE.locations.forEach(loc=>{ if(!loc.isMissingLoc) autoMarkLocCounted(loc.code); });
  ACTIVE.endTime=new Date().toISOString();
  const inv=JSON.parse(JSON.stringify(ACTIVE));
  saveInv(inv);clearActive();ACTIVE=null;_resetCISearch();
  // Notify admins
  const _nlocs=inv.locations.filter(l=>!l.isMissingLoc).length;
  const _nrefs=inv.locations.reduce((a,l)=>a+Object.keys(l.items).length,0);
  const _ndiff=inv.locations.reduce((a,l)=>a+Object.values(l.items).filter(i=>i.status==='diff'||i.status==='novedad'||i.status==='missing_loc'||(i.counted===null&&!i.isExtra&&i.status!=='ok')).length,0);
  const _nmissing=inv.locations.filter(l=>l.isMissingLoc).length;
  const _novMsg=(_ndiff||_nmissing)?' ⚡ '+(_nmissing?_nmissing+' ubic. sin contar'+(_ndiff?' · ':''):'')+(_ndiff?_ndiff+' novedad'+(_ndiff!==1?'es':'')+'.':''):' ✅ Sin novedades.';
  notifyAdmins('📦 '+CUR.name+' cerró un inventario — '+_nlocs+' ubicación'+(_nlocs!==1?'es':'')+', '+_nrefs+' ref'+(_nrefs!==1?'s':'')+'.'+_novMsg);;
  finishReconteoIfNeeded();
  stopAll();showReport(inv);
}

/* ══════════════════════════════════════════════════════
   REPORT
══════════════════════════════════════════════════════ */
function showReport(inv){
  const s=new Date(inv.startTime),e=new Date(inv.endTime);
  const novs=[];let ok=0,diff=0,ext=0,pend=0,refs=0,missingLocs=[];
  inv.locations.forEach(loc=>{
    // Ubicaciones no contadas (missing_loc) — agrupar por ubicación
    if(loc.isMissingLoc){
      missingLocs.push(loc);
      return; // no contar sus items en las stats normales
    }
    Object.entries(loc.items).forEach(([code,item])=>{refs++;
      if(item.status==='ok') ok++;
      else if(item.status==='diff'){diff++;novs.push({t:'diff',loc:loc.code,code,item});}
      else if(item.status==='novedad'&&item.isExtra){ext++;novs.push({t:'ext',loc:loc.code,code,item});}
      else if(item.status==='novedad'){diff++;novs.push({t:'diff',loc:loc.code,code,item});}
      else{pend++;if(item.counted===null&&item.status!=='ok'){diff++;novs.push({t:'pend',loc:loc.code,code,item});}}
    });
  });
  const novHtml=novs.length?novs.map(n=>{
    const photoHtml=n.item.photo?`<div style="margin-top:8px;border-radius:8px;overflow:hidden;border:1.5px solid rgba(180,108,255,.4);cursor:zoom-in;" onclick="openPhotoViewer(this.querySelector('img').src,'${n.code} · ${n.loc}')"><img src="${n.item.photo}" style="width:100%;max-height:160px;object-fit:cover;display:block;pointer-events:none;"></div>`:'';
    if(n.t==='pend'){return `<div class="nov-row"><div style="font-weight:600;font-size:13px;color:var(--wn);">⏭ ${n.item.name||n.code}</div><div style="color:var(--tx2);font-size:12px;line-height:1.6;">Ref: ${n.code} · 📍 ${n.loc}<br>SAP: ${n.item.sapStock} · <b style="color:var(--wn)">No contada (saltada)</b></div>${n.item.note?`<div style="font-size:11px;color:var(--wn);margin-top:2px;">📝 ${n.item.note}</div>`:''}</div>`;}
    else if(n.t==='diff'){const d=Math.round(((n.item.counted||0)-n.item.sapStock)*100)/100;return `<div class="nov-row"><div style="font-weight:600;font-size:13px;color:var(--dg);">⚡ ${n.item.name||n.code}</div><div style="color:var(--tx2);font-size:12px;line-height:1.6;">Ref: ${n.code} · 📍 ${n.loc}<br>SAP: ${fmtNum(n.item.sapStock)} · Contado: ${fmtNum(n.item.counted)} · Dif: <b style="color:var(--dg)">${d>0?'+':''}${fmtNum(d)}</b></div>${n.item.note?`<div style="font-size:11px;color:var(--wn);margin-top:2px;">📝 ${n.item.note}</div>`:''} ${photoHtml}</div>`;}
    else{return `<div class="nov-row"><div style="font-weight:600;font-size:13px;color:var(--ac2);">🔵 ${n.item.name||n.code}</div><div style="color:var(--tx2);font-size:12px;line-height:1.6;">Ref: ${n.code} · 📍 ${n.loc}<br>Encontrado: <b style="color:var(--ac2)">${n.item.counted} uds</b> · No en SAP</div>${n.item.note?`<div style="font-size:11px;color:var(--ac2);margin-top:2px;">📝 ${n.item.note}</div>`:''} ${photoHtml}</div>`;}
  }).join(''):(missingLocs.length?'':`<div style="padding:8px 0;color:var(--ac);font-size:13px;font-weight:600;">✅ Todo coincide con SAP</div>`);
  document.getElementById('rep-ct').innerHTML=`
    <div style="text-align:center;margin-bottom:16px;"><div style="font-size:34px;margin-bottom:6px;">📋</div>
    <div class="mo-ti">Reporte de Inventario</div>
    <div style="font-size:13px;color:var(--tx2);">${s.toLocaleDateString('es-CO',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</div></div>
    <div class="rep-s"><div class="rep-st">👤 Información</div>
      <div style="font-size:13px;line-height:1.9;"><b>${inv.user}</b><br>
      🕐 Inicio: <b>${fT(s)}</b><br>🕑 Cierre: <b>${fT(e)}</b><br>⏱ ${dur(inv.startTime,inv.endTime)}<br>📍 ${inv.locations.length} ubicaciones</div>
    </div>
    <div class="st4"><div class="st4-c"><div class="st4-n">${refs}</div><div class="st4-l">Refs.</div></div>
      <div class="st4-c"><div class="st4-n" style="color:var(--ac);">${ok}</div><div class="st4-l">✓ Ok</div></div>
      <div class="st4-c"><div class="st4-n" style="color:var(--dg);">${diff}</div><div class="st4-l">⚡ Dif.</div></div>
      <div class="st4-c"><div class="st4-n" style="color:var(--ac2);">${ext}</div><div class="st4-l">🔵 Extra</div></div>
    </div>
    ${pend>0?`<div style="background:rgba(255,182,39,.08);border:1px solid rgba(255,182,39,.25);border-radius:var(--rs);padding:10px 13px;font-size:13px;color:var(--wn);margin:8px 0;">⚠️ ${pend} referencias no contadas</div>`:''}
    ${missingLocs.length>0?`
    <div class="rep-s" style="margin-top:6px;border-left:3px solid var(--dg);">
      <div class="rep-st" style="color:var(--dg);">🚫 Ubicaciones NO contadas del catálogo (${missingLocs.length})</div>
      ${missingLocs.map(loc=>{
        const refs=Object.entries(loc.items).filter(([k])=>k!=='__loc__');
        return `<div class="nov-row">
          <div style="font-weight:700;font-size:13px;color:var(--dg);">📍 ${loc.code}</div>
          <div style="font-size:11px;color:var(--tx2);margin-top:2px;">
            ${refs.length>0
              ? refs.map(([sku,it])=>`<span style="display:inline-block;margin-right:8px;">${sku}${it.sapStock?` (SAP: ${it.sapStock})`:''}  </span>`).join('')
              : 'Sin referencias mapeadas'}
          </div>
          <div style="font-size:10px;color:var(--wn);margin-top:3px;">⚠️ No fue contada en este inventario</div>
        </div>`;
      }).join('')}
    </div>`:''}
    <div class="rep-s" style="margin-top:6px;"><div class="rep-st">⚡ Novedades (${novs.length+missingLocs.length})</div>${novHtml}</div>
    <div class="gy" style="margin-top:14px;">
      <button class="btn b-blue" onclick="copyRep(${inv.id})">📲 Copiar para WhatsApp</button>
      <button class="btn bs" onclick="xOneXLSX(${inv.id})">📊 Excel</button>
      <button class="btn bs" style="background:rgba(255,77,109,.1);color:var(--dg);border-color:rgba(255,77,109,.3);" onclick="exportPDF(${inv.id})">📄 PDF</button>
      <button class="btn bs" onclick="closeRepHome()">← Inicio</button>
    </div>`;
  document.getElementById('rep-mo').classList.add('on');
}
function closeRepMo(e){if(e.target===document.getElementById('rep-mo')) closeRepHome();}
function closeRepHome(){document.getElementById('rep-mo').classList.remove('on');if(CUR.role==='admin'||CUR.role==='master'){navAdmin('admin');}else{showScr('home');refHome();}}

function buildRepTxt(inv){
  const db=getDB();
  const verdicts=db.novedadVerdicts||{};
  const s=new Date(inv.startTime),e=new Date(inv.endTime);
  const fecha=s.toLocaleDateString('es-CO',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  const durStr=dur(inv.startTime,inv.endTime);

  // Clasificar novedades — se incluyen TODAS, con o sin veredicto,
  // para que el reporte refleje fielmente lo que el operario encontró.
  const diffs=[],extras=[],missing=[],missingLocs=[],okWithNote=[];
  inv.locations.forEach(loc=>{
    if(loc.isMissingLoc){
      const pendRefs=Object.entries(loc.items).filter(([sku])=>sku!=='__loc__');
      if(pendRefs.length>0) missingLocs.push({code:loc.code,refs:pendRefs});
      return;
    }
    Object.entries(loc.items).forEach(([code,item])=>{
      if(item.isExtra) extras.push({loc:loc.code,code,item});
      else if(item.status==='diff') diffs.push({loc:loc.code,code,item});
      else if(item.status==='missing_loc') missing.push({loc:loc.code,code,item});
      else if(item.status==='ok'&&item.note&&item.note.trim()) okWithNote.push({loc:loc.code,code,item});
    });
  });

  const realLocs=inv.locations.filter(l=>!l.isMissingLoc);
  const okCount=realLocs.reduce((a,l)=>a+Object.values(l.items).filter(i=>i.status==='ok').length,0);
  const totalNov=diffs.length+extras.length+missing.length+missingLocs.reduce((a,l)=>a+l.refs.length,0);

  let t='';
  t+=`📦 *Reporte de inventario*
`;
  t+=`👤 ${inv.user} · © Jose Pérez
`;
  t+=`📅 ${fecha}
`;
  t+=`⏱ ${fT(s)} → ${fT(e)}  _(${durStr})_

`;
  t+=`📍 Ubicaciones contadas: *${realLocs.length}*
`;
  t+=`✅ Referencias correctas: *${okCount}*
`;
  if(totalNov>0){
    t+=`⚡ Novedades: *${totalNov}*`;
    const parts=[];
    if(diffs.length) parts.push(`${diffs.length} diferencia${diffs.length!==1?'s':''}`);
    if(extras.length) parts.push(`${extras.length} extra${extras.length!==1?'s':''}`);
    if(missing.length) parts.push(`${missing.length} sin contar`);
    if(missingLocs.length) parts.push(`${missingLocs.length} ubic. no visitada${missingLocs.length!==1?'s':''}`);
    t+=` _(${parts.join(' · ')})_\n`;
  } else {
    t+=`✅ Sin novedades de conteo
`;
  }
  if(okWithNote.length) t+=`📝 Observaciones: *${okWithNote.length}* referencia${okWithNote.length!==1?'s':''} con nota
`;

  // Diferencias
  if(diffs.length){
    t+=`
*⚡ Diferencias (${diffs.length})*
`;
    diffs.forEach(({loc,code,item})=>{
      const d=Math.round(((item.counted||0)-item.sapStock)*100)/100;
      const verdKey=`${inv.id}_${loc}_${code}`;
      const _vdTag=verdicts[verdKey];const _vdV=_vdTag?.v||_vdTag||null;const vTag=_vdTag?(_vdV==='ok'?' ✔ revisada':' ✘ a revisar'):'';
      t+=`  • ${code}`;
      if(item.name) t+=` — ${item.name}`;
      t+=`${vTag}
    📍 ${loc}  SAP ${fmtNum(item.sapStock)} → Contado ${fmtNum(item.counted)}  *(${d>0?'+':''}${fmtNum(d)})*
`;
      if(item.note&&item.note.trim()&&item.note!=='Referencia no contada al cerrar la ubicación') t+=`    📝 ${item.note}
`;
    });
  }

  // Extras
  if(extras.length){
    t+=`
*🔵 Productos extra — no estaban en SAP (${extras.length})*
`;
    extras.forEach(({loc,code,item})=>{
      t+=`  • ${code}`;
      if(item.name) t+=` — ${item.name}`;
      t+=`  ×${fmtNum(item.counted)}  📍 ${loc}
`;
      // Mostrar nota del usuario si la escribió manualmente (ignorar la nota automática del sistema)
      const autoNote='Producto encontrado en físico, no estaba en SAP para esta ubicación.';
      if(item.note&&item.note.trim()&&item.note!==autoNote) t+=`    📝 ${item.note}
`;
    });
  }

  // Referencias sin contar (ubicaciones parciales)
  if(missing.length){
    t+=`
*🚫 Referencias no contadas (${missing.length})*
`;
    missing.forEach(({loc,code,item})=>{
      t+=`  • ${code}`;
      if(item.name) t+=` — ${item.name}`;
      t+=`  SAP ${fmtNum(item.sapStock)}  📍 ${loc}
`;
      if(item.note&&item.note.trim()&&item.note!=='Referencia no contada al cerrar la ubicación') t+=`    📝 ${item.note}
`;
    });
  }

  // Ubicaciones no visitadas
  if(missingLocs.length){
    const totalRefsMissing=missingLocs.reduce((a,l)=>a+l.refs.length,0);
    t+=`
*🚫 Ubicaciones no contadas: ${missingLocs.length}* _(${totalRefsMissing} referencia${totalRefsMissing!==1?'s':''} en total)_
`;
    if(missingLocs.length<=5){
      missingLocs.forEach(({code,refs})=>{
        t+=`  • ${code}  (${refs.length} ref${refs.length!==1?'s':''})
`;
      });
    } else {
      missingLocs.slice(0,4).forEach(({code,refs})=>{
        t+=`  • ${code}  (${refs.length} ref${refs.length!==1?'s':''})
`;
      });
      const rest=missingLocs.length-4;
      t+=`  • ...y ${rest} ubicación${rest!==1?'es':''} más sin contar
`;
    }
  }

  // Referencias correctas con nota del operario
  if(okWithNote.length){
    t+=`
*📝 Observaciones del operario (${okWithNote.length})*
`;
    okWithNote.forEach(({loc,code,item})=>{
      t+=`  • ${code}`;
      if(item.name) t+=` — ${item.name}`;
      t+=`  📍 ${loc}
`;
      t+=`    📝 ${item.note}
`;
    });
  }

  t+=`
_InvTrack Pro · © Jose Pérez_`;
  return t;
}
function dlRep(id){const inv=getAllInvs().find(i=>i.id===id);if(!inv) return;const blob=new Blob([buildRepTxt(inv)],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`reporte_${inv.date}.txt`;a.click();URL.revokeObjectURL(url);flash('Descargado ✓','ok');}
function copyRep(id){const inv=getAllInvs().find(i=>i.id===id);if(!inv) return;const txt=buildRepTxt(inv);if(navigator.clipboard){navigator.clipboard.writeText(txt).then(()=>flash('Copiado ✓','ok')).catch(()=>fbCopy(txt));}else fbCopy(txt);}
function fbCopy(txt){const ta=document.createElement('textarea');ta.value=txt;ta.style.cssText='position:fixed;opacity:0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');flash('Copiado ✓','ok');}catch(e){flash('No se pudo copiar','er');}document.body.removeChild(ta);}
function xOneXLSX(id){const inv=getAllInvs().find(i=>i.id===id);if(!inv) return;const _safe=(s)=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9_-]+/g,'_').replace(/^_+|_+$/g,'');const _db=getDB(),_uName=_safe((_db.users&&_db.users[inv.user||inv.username]&&_db.users[inv.user||inv.username].name)||inv.user||inv.username);expInvsXLSX([inv],`inventario_${_uName}_${inv.date}.xlsx`);}

function exportPDF(id){
  const inv=getAllInvs().find(i=>i.id===id);
  if(!inv){flash('Inventario no encontrado','er');return;}
  const db=getDB();
  const verdicts=db.novedadVerdicts||{};
  const s=new Date(inv.startTime),e=new Date(inv.endTime);
  const fecha=s.toLocaleDateString('es-CO',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  const durStr=dur(inv.startTime,inv.endTime);

  // Clasificar novedades
  const diffs=[],extras=[],missing=[],missingLocs=[],okWithNote=[];
  inv.locations.forEach(loc=>{
    if(loc.isMissingLoc){
      const pendRefs=Object.entries(loc.items).filter(([sku])=>sku!=='__loc__');
      if(pendRefs.length>0) missingLocs.push({code:loc.code,refs:pendRefs});
      return;
    }
    Object.entries(loc.items).forEach(([code,item])=>{
      if(item.isExtra) extras.push({loc:loc.code,code,item});
      else if(item.status==='diff') diffs.push({loc:loc.code,code,item});
      else if(item.status==='missing_loc') missing.push({loc:loc.code,code,item});
      else if(item.status==='ok'&&item.note&&item.note.trim()) okWithNote.push({loc:loc.code,code,item});
    });
  });

  const realLocs=inv.locations.filter(l=>!l.isMissingLoc);
  const refs=realLocs.reduce((a,l)=>a+Object.keys(l.items).filter(k=>k!=='__loc__').length,0);
  const okCount=realLocs.reduce((a,l)=>a+Object.values(l.items).filter(i=>i.status==='ok').length,0);
  const diffCount=diffs.length, extCount=extras.length;
  const missingCount=missing.length+missingLocs.reduce((a,l)=>a+l.refs.length,0);
  const totalNov=diffs.length+extras.length+missingCount;

  // Precisión con veredicto: novedades con razón cuentan como correctas,
  // sin razón como error, sin revisar se excluyen del denominador.
  function getVerdict(loc,code,isMissing){
    const k=String(inv.id)+'_'+loc+'_'+code+(isMissing?'_missing':'');
    const vd=verdicts[k];
    return vd?.v||null;
  }
  let pctOk=okCount; // base: referencias correctas
  let pctTotal=refs;  // base: total referencias
  // Novedades con veredicto
  const novsConVeredicto=[
    ...diffs.map(n=>({...n,isMissing:false})),
    ...extras.map(n=>({...n,isMissing:false})),
    ...missing.map(n=>({...n,isMissing:true}))
  ];
  novsConVeredicto.forEach(({loc,code,isMissing})=>{
    const v=getVerdict(loc,code,isMissing);
    if(v==='ok'){
      pctOk++;   // tiene razón: suma como correcto
    } else if(v==='no'){
      // sin razón: ya está contado como error (no es ok), no se modifica
    } else {
      // sin revisar: se excluye del denominador (aún no se puede juzgar)
      pctTotal--;
    }
  });
  const pct=pctTotal>0?Math.round(pctOk/pctTotal*100):0;

  // Generar filas de novedades
  function novRows(){
    let rows='';

    // Debug: log all verdict keys for this inventory
    const invIdStr=String(inv.id);
    const allVerdictKeys=Object.keys(verdicts).filter(k=>k.startsWith(invIdStr+'_'));
    console.log('[PDF] inv.id=',inv.id,'invIdStr=',invIdStr,'verdict keys encontradas:',allVerdictKeys,'todos los verdicts:',Object.keys(verdicts));

    function verdCells(loc,code,isMissing){
      const verdKey=invIdStr+'_'+loc+'_'+code+(isMissing?'_missing':'');
      const vd=verdicts[verdKey];
      console.log('[PDF] verdCells key=',verdKey,'vd=',vd);
      const vv=vd?.v||null;
      const vObs=vd?.obs||'';
      const vBy=vd?.by||'';
      const vAt=vd?.at?new Date(vd.at).toLocaleDateString('es-CO',{day:'2-digit',month:'short',year:'numeric'}):'';
      const badge=vv==='ok'?'<span class="badge ok">✔ Tiene razón</span>':vv==='no'?'<span class="badge no">✘ No tiene razón</span>':'<span class="badge pend">Sin revisar</span>';
      const byCell='';
      const obsCell=vObs?`<div class="verd-obs">💬 ${vObs}</div>`:'';
      return {badge, byCell, obsCell};
    }

    diffs.forEach(({loc,code,item})=>{
      const d=Math.round(((item.counted||0)-item.sapStock)*100)/100;
      const {badge,byCell,obsCell}=verdCells(loc,code,false);
      const opNote=item.note&&item.note.trim()&&item.note!=='Referencia no contada al cerrar la ubicación'?`<div class="op-note">📝 ${item.note}</div>`:'';
      rows+=`<tr class="diff-row">
        <td><span class="type-badge diff">Diferencia</span></td>
        <td><b>${code}</b>${item.name?`<br><small>${item.name}</small>`:''}</td>
        <td>${loc}</td>
        <td>${fmtNum(item.sapStock)}</td>
        <td>${fmtNum(item.counted)}</td>
        <td class="${d>0?'pos':'neg'}">${d>0?'+':''}${fmtNum(d)}</td>
        <td>${badge}${byCell}</td>
        <td>${obsCell}${opNote}${!obsCell&&!opNote?'—':''}</td>
      </tr>`;
    });
    extras.forEach(({loc,code,item})=>{
      const {badge,byCell,obsCell}=verdCells(loc,code,false);
      const opNote=item.note&&item.note.trim()&&item.note!=='Producto encontrado en físico, no estaba en SAP para esta ubicación.'?`<div class="op-note">📝 ${item.note}</div>`:'';
      rows+=`<tr>
        <td><span class="type-badge extra">Extra</span></td>
        <td><b>${code}</b>${item.name?`<br><small>${item.name}</small>`:''}</td>
        <td>${loc}</td>
        <td>—</td>
        <td>${fmtNum(item.counted)}</td>
        <td class="pos">+${fmtNum(item.counted)}</td>
        <td>${badge}${byCell}</td>
        <td>${obsCell}${opNote}${!obsCell&&!opNote?'—':''}</td>
      </tr>`;
    });
    missing.forEach(({loc,code,item})=>{
      const {badge,byCell,obsCell}=verdCells(loc,code,true);
      rows+=`<tr>
        <td><span class="type-badge missing">Sin contar</span></td>
        <td><b>${code}</b>${item.name?`<br><small>${item.name}</small>`:''}</td>
        <td>${loc}</td>
        <td>${fmtNum(item.sapStock)}</td>
        <td>—</td>
        <td>—</td>
        <td>${badge}${byCell}</td>
        <td>${obsCell||'—'}</td>
      </tr>`;
    });
    missingLocs.forEach(({code,refs})=>{
      refs.forEach(([sku,it])=>{
        rows+=`<tr>
          <td><span class="type-badge mloc">Ubic. omitida</span></td>
          <td><b>${sku}</b></td>
          <td>${code}</td>
          <td>${it.sapStock?fmtNum(it.sapStock):'—'}</td>
          <td>—</td>
          <td>—</td>
          <td>—</td>
          <td>—</td>
        </tr>`;
      });
    });
    okWithNote.forEach(({loc,code,item})=>{
      rows+=`<tr>
        <td><span class="type-badge note">Observación</span></td>
        <td><b>${code}</b>${item.name?`<br><small>${item.name}</small>`:''}</td>
        <td>${loc}</td>
        <td>${fmtNum(item.sapStock)}</td>
        <td>${fmtNum(item.counted)}</td>
        <td class="pos">OK</td>
        <td>—</td>
        <td>${item.note}</td>
      </tr>`;
    });
    return rows;
  }

  // Calcular quién revisó: buscar el autor más frecuente en los veredictos del inventario
  const reviewers={};
  const supervisorObservations=[];
  Object.entries(verdicts).forEach(([k,vd])=>{
    if(!k.startsWith(inv.id+'_')) return;
    const by=vd?.by||null;
    if(by&&by!=='Sistema'){
      reviewers[by]=(reviewers[by]||0)+1;
    }
  });
  // Recopilar observación del administrador desde invReviews (la que escribe al marcar como revisado)
  const invReview=(db.invReviews||{})[String(inv.id)]||null;
  if(invReview && invReview.obs && invReview.obs.trim()){
    supervisorObservations.push({
      by: invReview.by||'Administrador',
      obs: invReview.obs,
      at: invReview.at ? new Date(invReview.at).toLocaleDateString('es-CO',{day:'2-digit',month:'short',year:'numeric'}) : ''
    });
  }
  const reviewerEntries=Object.entries(reviewers).sort((a,b)=>b[1]-a[1]);
  const totalReviewed=Object.keys(verdicts).filter(k=>k.startsWith(inv.id+'_')).length;
  let supervisorName, supervisorSub, supervisorRole;
  if(invReview && invReview.by){
    // Hay revisión del inventario completo — usar esos datos
    const revDate = invReview.at ? new Date(invReview.at).toLocaleDateString('es-CO',{day:'2-digit',month:'short',year:'numeric'}) : '';
    supervisorName = invReview.by;
    supervisorSub = reviewerEntries.length > 0
      ? `${totalReviewed} novedad${totalReviewed!==1?'es':''} revisada${totalReviewed!==1?'s':''}`
      : (revDate ? `Revisado el ${revDate}` : 'Inventario revisado');
    supervisorRole = 'Administrador / Supervisor';
  } else if(reviewerEntries.length===0){
    supervisorName='________________________';
    supervisorSub='Sin revisión registrada';
    supervisorRole='Pendiente';
  } else if(reviewerEntries.length===1){
    supervisorName=reviewerEntries[0][0];
    supervisorSub=`${reviewerEntries[0][1]} novedad${reviewerEntries[0][1]!==1?'es':''} revisada${reviewerEntries[0][1]!==1?'s':''}`;
    supervisorRole='Administrador / Supervisor';
  } else {
    supervisorName=reviewerEntries.map(([n])=>n).join(', ');
    supervisorSub=`${totalReviewed} novedades revisadas por ${reviewerEntries.length} revisores`;
    supervisorRole='Administradores / Supervisores';
  }

  // Calcular rango/lista de ubicaciones
  const locCodes=realLocs.map(l=>l.code).sort();
  function locRangeStr(codes){
    if(!codes.length) return '—';
    if(codes.length===1) return codes[0];
    const first=codes[0], last=codes[codes.length-1];
    const pfxMatch=first.match(/^([A-Za-z]+)(\d+)(.*)$/);
    if(pfxMatch){
      const allSamePfx=codes.every(c=>c.startsWith(pfxMatch[1]));
      if(allSamePfx) return first+' → '+last+' ('+codes.length+' ubic.)';
    }
    if(codes.length<=6) return codes.join(', ');
    return codes.slice(0,5).join(', ')+' … '+last+' ('+codes.length+' ubic.)';
  }
  const locRangeLabel=locRangeStr(locCodes);
  const docNo='INV-'+String(inv.id).slice(-8).toUpperCase().padStart(8,'0');
  const issueDate=new Date().toLocaleDateString('es-CO',{day:'2-digit',month:'2-digit',year:'numeric'});
  const issueTime=new Date().toLocaleTimeString('es-CO',{hour:'2-digit',minute:'2-digit'});
  const html=`<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>${(`Inventario_${(inv.user||inv.username||'operador')}_${(inv.date||new Date(inv.startTime).toISOString().slice(0,10))}`).replace(/[\\/:*?"<>|]+/g,'').replace(/\s+/g,'_')}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@600;700&family=Inter:wght@400;500;600;700&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  html,body{background:#eef0f3;}
  body{font-family:'Inter',sans-serif;font-size:10.5px;color:#1a2332;line-height:1.45;}
  .page{background:#fff;max-width:297mm;margin:18px auto;padding:18mm 18mm 22mm;box-shadow:0 4px 24px rgba(15,30,55,.08);position:relative;}
  @page{size:auto;margin:10mm 12mm;}

  /* DOCUMENT BAR */
  .doc-bar{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #0b2545;padding-bottom:14px;margin-bottom:18px;}
  .doc-id{display:flex;align-items:center;gap:14px;}
  .logo-mark{width:46px;height:46px;background:#0b2545;color:#fff;display:flex;align-items:center;justify-content:center;font-family:'Source Serif 4',serif;font-weight:700;font-size:22px;letter-spacing:-1px;border-radius:2px;}
  .logo-mark::before{content:'I';}
  .brand-block .name{font-family:'Source Serif 4',serif;font-size:18px;font-weight:700;color:#0b2545;letter-spacing:-.3px;line-height:1;}
  .brand-block .tag{font-size:9px;color:#5b6b80;text-transform:uppercase;letter-spacing:.18em;margin-top:5px;font-weight:500;}
  .doc-meta{text-align:right;font-size:9.5px;color:#3b4a60;line-height:1.65;}
  .doc-meta .row{display:flex;justify-content:flex-end;gap:8px;}
  .doc-meta .k{color:#7a8699;text-transform:uppercase;letter-spacing:.1em;font-size:8.5px;font-weight:600;min-width:80px;text-align:left;}
  .doc-meta .v{color:#0b2545;font-weight:600;font-family:'Inter',sans-serif;}
  .doc-meta .classification{display:inline-block;margin-top:6px;padding:3px 10px;background:#fdf6e3;color:#8a6d1f;border:1px solid #e8d89a;font-size:8.5px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;}

  /* TITLE BLOCK */
  .title-block{margin-bottom:18px;}
  .title-block h1{font-family:'Source Serif 4',serif;font-size:24px;font-weight:700;color:#0b2545;letter-spacing:-.5px;line-height:1.1;}
  .title-block .sub{font-size:10.5px;color:#5b6b80;margin-top:4px;font-weight:400;}

  /* INFO GRID */
  .info-grid{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid #d8dee8;border-radius:3px;overflow:hidden;margin-bottom:18px;background:#fafbfd;}
  .info-cell{padding:11px 14px;border-right:1px solid #e4e9f1;}
  .info-cell:last-child{border-right:none;}
  .info-cell.wide{grid-column:span 2;}
  .info-cell .lbl{font-size:8.5px;font-weight:600;text-transform:uppercase;letter-spacing:.13em;color:#7a8699;margin-bottom:4px;}
  .info-cell .val{font-family:'Source Serif 4',serif;font-size:13px;font-weight:600;color:#0b2545;line-height:1.25;}
  .info-cell .val.sm{font-size:11px;}
  .info-cell .sub{font-size:9px;color:#5b6b80;margin-top:2px;}

  /* EXECUTIVE SUMMARY */
  .exec-summary{display:grid;grid-template-columns:2fr 1fr;gap:14px;margin-bottom:18px;}
  .summary-text{padding:14px 16px;background:#fafbfd;border-left:3px solid #0b2545;}
  .summary-text .h{font-family:'Source Serif 4',serif;font-size:11px;font-weight:700;color:#0b2545;text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px;}
  .summary-text p{font-size:10.5px;color:#2c3a52;line-height:1.6;}
  .summary-text p .em{font-weight:600;color:#0b2545;}
  .accuracy-card{padding:14px 16px;background:#0b2545;color:#fff;text-align:center;display:flex;flex-direction:column;justify-content:center;}
  .accuracy-card .lbl{font-size:8.5px;text-transform:uppercase;letter-spacing:.18em;opacity:.7;font-weight:600;}
  .accuracy-card .pct{font-family:'Source Serif 4',serif;font-size:42px;font-weight:700;line-height:1;margin:6px 0 4px;letter-spacing:-1px;}
  .accuracy-card .pct .acc-good{color:#9bd1a8;}
  .accuracy-card .pct .acc-warn{color:#e8c878;}
  .accuracy-card .pct .acc-bad{color:#e89a8a;}
  .accuracy-card .det{font-size:9px;opacity:.75;letter-spacing:.05em;}

  /* KPI ROW */
  .kpi-row{display:grid;grid-template-columns:repeat(5,1fr);border:1px solid #d8dee8;margin-bottom:18px;background:#fff;}
  .kpi-cell{padding:12px 14px;border-right:1px solid #e4e9f1;text-align:center;}
  .kpi-cell:last-child{border-right:none;}
  .kpi-cell .n{font-family:'Source Serif 4',serif;font-size:22px;font-weight:700;color:#0b2545;line-height:1;}
  .kpi-cell .n.muted{color:#5b6b80;}
  .kpi-cell .n.warn{color:#a05a1c;}
  .kpi-cell .n.bad{color:#8b2230;}
  .kpi-cell .l{font-size:8.5px;color:#7a8699;text-transform:uppercase;letter-spacing:.13em;margin-top:5px;font-weight:600;}

  /* SECTION HEADING */
  .sec{font-family:'Source Serif 4',serif;font-size:13px;font-weight:700;color:#0b2545;margin:22px 0 10px;padding-bottom:6px;border-bottom:1px solid #d8dee8;display:flex;justify-content:space-between;align-items:baseline;letter-spacing:-.2px;}
  .sec .count{font-family:'Inter',sans-serif;font-size:9.5px;font-weight:600;color:#7a8699;text-transform:uppercase;letter-spacing:.13em;}

  /* TABLE */
  table{width:100%;border-collapse:collapse;font-size:10px;border:1px solid #d8dee8;}
  thead tr{background:#0b2545;}
  thead th{color:#fff;font-weight:600;padding:8px 9px;text-align:left;font-size:9px;text-transform:uppercase;letter-spacing:.1em;border-right:1px solid #1f3a5f;}
  thead th:last-child{border-right:none;}
  tbody tr{border-bottom:1px solid #ebeff5;}
  tbody tr:nth-child(even){background:#fafbfd;}
  tbody tr.diff-row{background:#fdf4f3;}
  tbody tr.diff-row:nth-child(even){background:#faeeec;}
  td{padding:7px 9px;vertical-align:top;border-right:1px solid #ebeff5;color:#2c3a52;}
  td:last-child{border-right:none;}
  td b{color:#0b2545;font-weight:600;font-family:'Inter',sans-serif;}
  td small{color:#7a8699;font-size:9px;font-weight:400;display:block;margin-top:1px;}

  /* BADGES — corporate style */
  .type-badge{display:inline-block;padding:2px 8px;font-size:8.5px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;border:1px solid;border-radius:2px;white-space:nowrap;}
  .type-badge.diff{background:#fdecec;color:#8b2230;border-color:#e8b8b8;}
  .type-badge.extra{background:#e8f0f9;color:#1f4674;border-color:#b8cce3;}
  .type-badge.missing{background:#fcf3df;color:#7a5a18;border-color:#dec99a;}
  .type-badge.mloc{background:#fbe8d8;color:#7a3e10;border-color:#d8b893;}
  .type-badge.note{background:#ece8f3;color:#3f2c6b;border-color:#beb3d6;}
  .badge{display:inline-block;padding:2px 8px;font-size:8.5px;font-weight:600;border-radius:2px;border:1px solid;white-space:nowrap;}
  .badge.ok{background:#e3f1e6;color:#1d5a2c;border-color:#a8c8b0;}
  .badge.no{background:#fdecec;color:#8b2230;border-color:#e8b8b8;}
  .badge.pend{background:#eef0f3;color:#5b6b80;border-color:#c8cdd5;}
  .pos{color:#1d5a2c;font-weight:600;font-variant-numeric:tabular-nums;}
  .neg{color:#8b2230;font-weight:600;font-variant-numeric:tabular-nums;}
  td:nth-child(4),td:nth-child(5),td:nth-child(6){font-variant-numeric:tabular-nums;text-align:right;}

  .verd-obs{margin-top:4px;font-size:9px;color:#1d5a2c;background:#f0f7f1;padding:4px 7px;border-left:2px solid #5a9a6a;line-height:1.4;}
  .op-note{margin-top:4px;font-size:9px;color:#3f2c6b;background:#f4f1f8;padding:4px 7px;border-left:2px solid #6b4e9c;line-height:1.4;}

  /* NO NOVEDADES */
  .no-nov{padding:16px 18px;background:#f0f7f1;border:1px solid #c5dbcc;border-left:3px solid #1d5a2c;color:#1d5a2c;font-weight:500;font-size:11px;}
  .no-nov b{font-family:'Source Serif 4',serif;font-weight:700;display:block;margin-bottom:2px;font-size:12px;}

  /* SUPERVISOR OBSERVATIONS */
  .supervisor-obs-section{margin-top:22px;padding:14px 18px;background:#fafbfd;border:1px solid #d8dee8;border-left:3px solid #0b2545;}
  .supervisor-obs-title{font-family:'Source Serif 4',serif;font-size:11px;font-weight:700;color:#0b2545;margin-bottom:10px;text-transform:uppercase;letter-spacing:.1em;}
  .supervisor-obs-item{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #e4e9f1;}
  .supervisor-obs-item:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0;}
  .supervisor-obs-item .obs-author{font-size:9px;font-weight:700;color:#0b2545;margin-bottom:4px;text-transform:uppercase;letter-spacing:.08em;}
  .supervisor-obs-item .obs-text{font-size:10.5px;color:#2c3a52;line-height:1.6;font-family:'Source Serif 4',serif;font-style:italic;border-left:2px solid #d8dee8;padding-left:10px;}
  .supervisor-obs-item .obs-date{font-size:8.5px;color:#7a8699;margin-top:4px;}

  /* SIGNATURES */
  .firma-section{margin-top:36px;display:grid;grid-template-columns:1fr 1fr;gap:60px;}
  .firma-box{padding-top:38px;border-top:1px solid #0b2545;position:relative;}
  .firma-box::before{content:'';position:absolute;top:-1px;left:0;width:36px;height:3px;background:#0b2545;}
  .firma-box .firma-lbl{font-size:8.5px;color:#7a8699;font-weight:600;text-transform:uppercase;letter-spacing:.13em;margin-bottom:4px;}
  .firma-box .firma-name{font-family:'Source Serif 4',serif;font-size:13px;font-weight:700;color:#0b2545;}
  .firma-box .firma-sub{font-size:9.5px;color:#5b6b80;margin-top:2px;}
  .firma-box .firma-rol{font-size:9px;color:#7a8699;margin-top:4px;font-style:italic;}

  /* FOOTER */
  .footer{margin-top:30px;padding-top:12px;border-top:1px solid #d8dee8;display:flex;justify-content:space-between;align-items:center;font-size:8.5px;color:#7a8699;}
  .footer .left{letter-spacing:.05em;}
  .footer .right{font-family:'Source Serif 4',serif;font-weight:600;color:#0b2545;letter-spacing:.05em;}

  *,*::before,*::after{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important;}
  @media print{
    html,body{background:#fff;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;}
    *,*::before,*::after{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important;}
    @page{margin:10mm;size:auto;}
    .page{box-shadow:none;margin:0;padding:0;max-width:none;width:100%;}
    .no-print{display:none!important;}
    table{page-break-inside:auto;}
    tr{page-break-inside:avoid;page-break-after:auto;}
    thead{display:table-header-group;}
    tfoot{display:table-footer-group;}
    .firma-section{page-break-inside:auto;break-inside:auto;}
    .firma-box{page-break-inside:avoid;break-inside:avoid;}
    .supervisor-obs-item{page-break-inside:avoid;break-inside:avoid;}
    .exec-summary,.kpi-row,.info-grid{page-break-inside:avoid;break-inside:avoid;}
  }
</style>
</head>
<body>

<!-- PRINT BUTTON -->
<div class="no-print" style="position:fixed;top:14px;right:14px;z-index:99;display:flex;gap:8px;">
  <button onclick="window.print()" style="background:#0b2545;color:#fff;border:none;padding:11px 20px;font-family:'Inter',sans-serif;font-size:12px;font-weight:600;cursor:pointer;letter-spacing:.05em;text-transform:uppercase;border-radius:2px;box-shadow:0 4px 14px rgba(11,37,69,.25);">Imprimir / Guardar PDF</button>
  <button onclick="window.close()" style="background:#fff;border:1px solid #d8dee8;padding:11px 16px;font-family:'Inter',sans-serif;font-size:12px;font-weight:500;color:#5b6b80;cursor:pointer;border-radius:2px;">Cerrar</button>
</div>

<div class="page">

<!-- DOCUMENT BAR -->
<div class="doc-bar">
  <div class="doc-id">
    <div class="logo-mark"></div>
    <div class="brand-block">
      <div class="name">InvTrack Pro</div>
      <div class="tag">Sistema de Control de Inventario</div>
    </div>
  </div>
  <div class="doc-meta">
    <div class="row"><span class="k">Documento</span><span class="v">${docNo}</span></div>
    <div class="row"><span class="k">Emisión</span><span class="v">${issueDate} · ${issueTime}</span></div>
    <div class="row"><span class="k">Versión</span><span class="v">1.0 — Final</span></div>
    <div class="classification">Confidencial — Uso Interno</div>
  </div>
</div>

<!-- TITLE -->
<div class="title-block">
  <h1>Informe de Inventario Físico</h1>
  <div class="sub">Conciliación de existencias entre stock SAP y conteo físico realizado en sitio.</div>
</div>

<!-- INFO GRID -->
<div class="info-grid">
  <div class="info-cell">
    <div class="lbl">Operador responsable</div>
    <div class="val sm">${inv.user}</div>
    <div class="sub">@${inv.username||inv.user}</div>
  </div>
  <div class="info-cell">
    <div class="lbl">Fecha de ejecución</div>
    <div class="val sm">${fecha}</div>
  </div>
  <div class="info-cell">
    <div class="lbl">Horario y duración</div>
    <div class="val sm">${fT(s)} — ${fT(e)}</div>
    <div class="sub">${durStr}</div>
  </div>
  <div class="info-cell">
    <div class="lbl">Ubicaciones</div>
    <div class="val sm">${realLocs.length} inventariadas</div>
    <div class="sub" style="word-break:break-all;">${locRangeLabel}</div>
  </div>
</div>

<!-- EXECUTIVE SUMMARY + ACCURACY -->
<div class="exec-summary">
  <div class="summary-text">
    <div class="h">Resumen ejecutivo</div>
    <p>Se inspeccionaron <span class="em">${refs} referencias</span> distribuidas en <span class="em">${realLocs.length} ubicaciones</span>, identificándose <span class="em">${totalNov} novedad${totalNov!==1?'es':''}</span> respecto al stock registrado en SAP: ${diffCount} con diferencia de cantidad, ${extCount} no registrada${extCount!==1?'s':''} en sistema y ${missingCount} pendiente${missingCount!==1?'s':''} de conteo. ${totalNov>0?'Las novedades han sido evaluadas por el área de supervisión conforme al criterio operativo vigente.':'No se registraron desviaciones; el inventario presenta coincidencia total con SAP.'}</p>
  </div>
  <div class="accuracy-card">
    <div class="lbl">Exactitud final</div>
    <div class="pct"><span class="${pct>=95?'acc-good':pct>=80?'acc-warn':'acc-bad'}">${pct}%</span></div>
    <div class="det">${pctOk} de ${pctTotal} referencias evaluadas</div>
  </div>
</div>

<!-- KPI ROW -->
<div class="kpi-row">
  <div class="kpi-cell"><div class="n">${refs}</div><div class="l">Referencias</div></div>
  <div class="kpi-cell"><div class="n">${okCount}</div><div class="l">Coincidentes</div></div>
  <div class="kpi-cell"><div class="n bad">${diffCount}</div><div class="l">Diferencias</div></div>
  <div class="kpi-cell"><div class="n muted">${extCount}</div><div class="l">Extras</div></div>
  <div class="kpi-cell"><div class="n warn">${missingCount}</div><div class="l">Sin contar</div></div>
</div>

<!-- NOVEDADES -->
${totalNov>0?`
<div class="sec">Detalle de novedades <span class="count">${totalNov} registro${totalNov!==1?'s':''}</span></div>
<table>
  <thead>
    <tr>
      <th style="width:90px;">Tipo</th>
      <th>Referencia</th>
      <th style="width:80px;">Ubicación</th>
      <th style="width:65px;">SAP</th>
      <th style="width:65px;">Contado</th>
      <th style="width:65px;">Δ</th>
      <th style="width:110px;">Veredicto</th>
      <th>Observación</th>
    </tr>
  </thead>
  <tbody>
    ${novRows()}
  </tbody>
</table>
`:`<div class="no-nov"><b>Inventario sin novedades</b>La totalidad de las referencias inspeccionadas coincide con el stock registrado en SAP.</div>`}

${okWithNote.length>0?`
<div class="sec">Observaciones del operador <span class="count">${okWithNote.length} registro${okWithNote.length!==1?'s':''}</span></div>
<table>
  <thead>
    <tr>
      <th style="width:90px;">Tipo</th>
      <th>Referencia</th>
      <th style="width:80px;">Ubicación</th>
      <th style="width:65px;">SAP</th>
      <th style="width:65px;">Contado</th>
      <th style="width:65px;">Estado</th>
      <th>Observación</th>
    </tr>
  </thead>
  <tbody>
    ${okWithNote.map(({loc,code,item})=>`<tr>
      <td><span class="type-badge note">Observación</span></td>
      <td><b>${code}</b>${item.name?`<small>${item.name}</small>`:''}</td>
      <td>${loc}</td>
      <td>${fmtNum(item.sapStock)}</td>
      <td>${fmtNum(item.counted)}</td>
      <td><span class="badge ok">Conforme</span></td>
      <td>${item.note}</td>
    </tr>`).join('')}
  </tbody>
</table>
`:''}

${supervisorObservations.length>0?`
<div class="supervisor-obs-section">
  <div class="supervisor-obs-title">Observaciones de supervisión</div>
  ${supervisorObservations.map(({by,obs,at})=>`
  <div class="supervisor-obs-item">
    <div class="obs-author">${by}${at?` · ${at}`:''}</div>
    <div class="obs-text">${obs}</div>
  </div>
  `).join('')}
</div>
`:''}

<!-- SIGNATURES -->
<div class="firma-section">
  <div class="firma-box">
    <div class="firma-lbl">Ejecutado por</div>
    <div class="firma-name">${inv.user}</div>
    <div class="firma-sub">@${inv.username||inv.user}</div>
    <div class="firma-rol">Operador de inventario</div>
  </div>
  <div class="firma-box">
    <div class="firma-lbl">Revisado y aprobado por</div>
    <div class="firma-name">${supervisorName}</div>
    <div class="firma-sub">${supervisorSub}</div>
    <div class="firma-rol">${supervisorRole}</div>
  </div>
</div>

<!-- FOOTER -->
<div class="footer">
  <div class="left">Documento generado automáticamente por InvTrack Pro · ${docNo} · Confidencial</div>
  <div class="right">© ${new Date().getFullYear()} Jose Pérez · Todos los derechos reservados</div>
</div>

</div>
</body>
</html>`;

  const win=window.open('','_blank','width=1100,height=800,scrollbars=yes');
  if(!win){flash('Permite ventanas emergentes para exportar PDF','wn');return;}
  win.document.write(html);
  win.document.close();
  flash('PDF abierto — usa Imprimir → Guardar como PDF','ok');
}

/* ══════════════════════════════════════════════════════
   OPERATOR HISTORY
══════════════════════════════════════════════════════ */
let S_hFilt='day';
function filtH(p,el){S_hFilt=p;document.querySelectorAll('#screen-history .tabs .tab').forEach(t=>t.classList.remove('on'));el.classList.add('on');renderH();}
function renderH(){
  const q=(document.getElementById('hist-q')?.value||'').toLowerCase();
  const now=new Date();
  const list=getUserInvs(CUR.username).filter(inv=>{
    const d=new Date(inv.startTime);
    const ok=(()=>{if(S_hFilt==='day') return inv.date===toDS(now);if(S_hFilt==='week') return sameWeek(d,now);if(S_hFilt==='month') return d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear();return true;})();
    const ms=!q||inv.locations.some(l=>l.code.toLowerCase().includes(q)||Object.keys(l.items).some(k=>k.toLowerCase().includes(q)));
    return ok&&ms;
  }).sort((a,b)=>new Date(b.startTime)-new Date(a.startTime));
  const el=document.getElementById('hist-list');
  if(!list.length){el.innerHTML='<div class="es"><div class="ei">🔍</div><p>Sin registros en este período</p></div>';return;}
  el.innerHTML=list.map(inv=>{
    const tq=inv.locations.reduce((a,l)=>a+Object.values(l.items).reduce((b,i)=>b+(i.counted||0),0),0);
    const nov=inv.locations.reduce((a,l)=>a+(l.isMissingLoc?1:Object.values(l.items).filter(i=>i.status==='diff'||i.status==='novedad'||i.status==='missing_loc'||(i.counted===null&&!i.isExtra&&i.status!=='ok')).length),0);
    const s=new Date(inv.startTime),e=inv.endTime?new Date(inv.endTime):null;
    const chips=inv.locations.slice(0,5).map(l=>`<span class="lmc">📍${l.code}</span>`).join('')+(inv.locations.length>5?`<span class="lmc">+${inv.locations.length-5}</span>`:'');
    return `<div class="ic" onclick="showDetOp('${inv.id}')">
      <div class="ic-top"><div><div class="ic-ti">Inventario · ${s.toLocaleDateString('es-CO',{day:'2-digit',month:'short'})}</div><div class="ic-dt">${fT(s)}${e?' → '+fT(e):''}</div></div><span class="badge bc">Cerrado</span></div>
      <div class="ic-meta"><span class="mc">📍 ${inv.locations.length} ubic.</span><span class="mc">🔢 ${tq}</span>${nov?`<span class="mc" style="color:var(--dg);">⚡ ${nov} nov.</span>`:`<span class="mc" style="color:var(--ac);">✓</span>`}${e?`<span class="mc">⏱ ${dur(inv.startTime,inv.endTime)}</span>`:''}</div>
      <div class="lm">${chips}</div></div>`;
  }).join('');
}
function showDetOp(id){const inv=getUserInvs(CUR.username).find(x=>String(x.id)===String(id));if(!inv) return;buildDetModal(inv,false);}

function buildDetModal(inv,isAdmin){
  const s=new Date(inv.startTime),e=inv.endTime?new Date(inv.endTime):null;
  const locRows=inv.locations.map(loc=>{
    const its=Object.entries(loc.items);
    const rows=its.map(([code,item])=>{
      const st=item.status;
      const cls=st==='ok'?'val-ok':st==='diff'?'val-diff':st==='novedad'?'val-new':'val-pend';
      const lbl=st==='ok'?'✓':st==='diff'?'⚡':st==='novedad'?'🔵':st==='pending'?'⏳':'';
      return `<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--bd);">
        <div style="flex:1;min-width:0;"><div style="font-family:var(--fh);font-weight:800;font-size:13px;">${code}</div><div style="font-size:11px;color:var(--tx2);">${item.name||''}</div></div>
        ${item.counted!==null?`<div style="font-family:var(--fh);font-weight:800;font-size:14px;color:${st==='ok'?'var(--ac)':st==='diff'?'var(--dg)':'var(--ac2)'};">${item.counted}</div>`:'<div style="color:var(--tx3);font-size:12px;">—</div>'}
        <span class="badge ${cls}">${lbl}</span>
      </div>`;
    }).join('');
    return `<div style="background:var(--sf2);border-radius:10px;padding:12px;margin-bottom:8px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;"><span style="font-family:var(--fh);font-weight:800;font-size:13px;">📍 ${loc.code}</span><span class="mc">${its.length}</span></div>${rows}
    </div>`;
  }).join('');
  document.getElementById('mo-ct').innerHTML=`
    <div class="mo-ti">📦 Inventario${isAdmin?` · ${inv.user||inv.username}`:''}</div>
    <div style="font-size:12px;color:var(--tx2);margin-bottom:12px;">${s.toLocaleDateString('es-CO',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</div>
    <div style="background:var(--sf2);border-radius:10px;padding:12px;margin-bottom:12px;font-size:13px;line-height:1.8;">
      <div>👤 <b>${inv.user||inv.username}</b></div>
      <div>🕐 ${fT(s)}${e?' → 🕑 '+fT(e):''}</div>
      ${e?`<div>⏱ ${dur(inv.startTime,inv.endTime)}</div>`:''}
    </div>
    ${locRows}
    <div class="gy" style="margin-top:12px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
        <button class="btn bs sm" onclick="xOneXLSX(${inv.id})">📊 Excel</button>
        <button class="btn bs sm" style="background:rgba(255,77,109,.1);color:var(--dg);border-color:rgba(255,77,109,.3);" onclick="exportPDF(${inv.id})">📄 PDF</button>
      </div>
      <button class="btn b-blue sm" onclick="copyRep(${inv.id})" style="width:100%;">📲 WhatsApp</button>
      ${(CUR.role==='admin'||CUR.role==='master')?`<button class="btn b-pu sm" onclick="openReconteoMo('${inv.id}')" style="width:100%;">🔁 Solicitar Reconteo</button>`:''}
      ${(CUR.role==='admin'||CUR.role==='master')?`<button class="btn bd2 sm" onclick="delInvMo(${inv.id})" style="width:100%;">🗑 Eliminar</button>`:''}
      ${(CUR.role==='admin'||CUR.role==='master')?`<div id="inv-review-inline-${inv.id}">${buildInvReviewBtn(inv.id)}</div>`:''}
    </div>`;
  document.getElementById('modal').classList.add('on');
}
function closeMo(e){if(e.target===document.getElementById('modal')) document.getElementById('modal').classList.remove('on');}
function delInvMo(id){
  if(CUR.role!=='admin'&&CUR.role!=='master'){flash('Sin permiso para eliminar inventarios','er');return;}
  confirmAuditAction('Eliminar inventario','¿Eliminar este inventario? Esta acción no se puede deshacer.',()=>{
    const inv = getAllInvs().find(i=>String(i.id)===String(id));
    const owner = inv ? (inv.user||inv.username||'') : '';
    const ownerName = inv && getDB().users?.[owner]?.name || owner;
    logAudit('inventory.delete', `Eliminó inventario de ${ownerName||'—'} (${inv?.date||''})`, {id, owner, date:inv?.date});
    delInvById(id);
    document.getElementById('modal').classList.remove('on');
    if(CUR.role==='admin'||CUR.role==='master') renderAH();else renderH();
    flash('Inventario eliminado');
  });
}

/* ══════════════════════════════════════════════════════
   🔁 MÓDULO DE RECONTEO
══════════════════════════════════════════════════════ */
let _rcInvId = null;
let _rcSelSet = new Set();
let _rcRefMode = 'all'; // 'all' | 'diff'

function rcSetRefMode(mode){
  _rcRefMode = mode;
  const elAll  = document.getElementById('rc-refs-all');
  const elDiff = document.getElementById('rc-refs-diff');
  if(mode==='all'){
    elAll.style.background='rgba(0,229,160,.18)'; elAll.style.borderColor='rgba(0,229,160,.5)'; elAll.style.color='var(--ac)';
    elDiff.style.background='var(--sf2)'; elDiff.style.borderColor='var(--bd)'; elDiff.style.color='var(--tx2)';
  } else {
    elDiff.style.background='rgba(255,77,109,.18)'; elDiff.style.borderColor='rgba(255,77,109,.5)'; elDiff.style.color='var(--dg)';
    elAll.style.background='var(--sf2)'; elAll.style.borderColor='var(--bd)'; elAll.style.color='var(--tx2)';
  }
}

function openReconteoMo(invId){
  if(CUR.role!=='admin'&&CUR.role!=='master'){flash('Sin permiso','er');return;}
  const inv = getAllInvs().find(x=>String(x.id)===String(invId));
  if(!inv){flash('Inventario no encontrado','er');return;}
  _rcInvId = invId;
  const locsWithDiff = inv.locations
    .filter(l=>!l.isMissingLoc && Object.values(l.items).some(i=>i.status==='diff'||i.status==='novedad'||i.status==='missing_loc'))
    .map(l=>l.code);
  _rcSelSet = new Set(locsWithDiff.length ? locsWithDiff : inv.locations.filter(l=>!l.isMissingLoc).map(l=>l.code));
  const s = new Date(inv.startTime);
  document.getElementById('reconteo-inv-info').innerHTML =
    `👤 <b>${inv.user||inv.username}</b> · 📅 ${s.toLocaleDateString('es-CO',{day:'2-digit',month:'short',year:'numeric'})}` +
    (locsWithDiff.length ? `<br>⚡ Se preseleccionaron <b>${locsWithDiff.length}</b> ubicación${locsWithDiff.length!==1?'es':''} con diferencias.` : '');
  // Poblar selector de usuarios — todos los operadores, preseleccionar el autor
  const db = getDB();
  const operators = Object.entries(db.users||{}).filter(([uname,u])=>u.role==='operator' && !isHiddenUser(uname,u));
  const sel = document.getElementById('reconteo-target-user');
  sel.innerHTML = operators.map(([uname,u])=>
    `<option value="${uname}" ${uname===inv.username?'selected':''}>${u.name} (@${uname})${uname===inv.username?' — autor original':''}</option>`
  ).join('');
  document.getElementById('reconteo-note').value='';
  document.getElementById('reconteo-search').value='';
  document.getElementById('reconteo-err').style.display='none';
  _rcRefMode = 'all';
  rcSetRefMode('all');
  renderReconteoLocs();
  document.getElementById('reconteo-mo').classList.add('on');
}

function closeReconteoMo(e){
  if(e.target===document.getElementById('reconteo-mo'))
    document.getElementById('reconteo-mo').classList.remove('on');
}

function renderReconteoLocs(){
  const inv = getAllInvs().find(x=>String(x.id)===String(_rcInvId));
  if(!inv) return;
  const q = (document.getElementById('reconteo-search')?.value||'').toUpperCase();
  const locs = inv.locations.filter(l=>!l.isMissingLoc && (!q || l.code.includes(q)));
  const grid = document.getElementById('reconteo-locs-grid');
  grid.innerHTML = locs.map(l=>{
    const hasDiff = Object.values(l.items).some(i=>i.status==='diff'||i.status==='novedad'||i.status==='missing_loc');
    const sel = _rcSelSet.has(l.code);
    const bg = sel ? (hasDiff?'rgba(255,77,109,.18)':'rgba(0,229,160,.15)') : 'var(--sf2)';
    const border = sel ? (hasDiff?'rgba(255,77,109,.55)':'rgba(0,229,160,.45)') : 'var(--bd)';
    const txc = sel ? (hasDiff?'var(--dg)':'var(--ac)') : 'var(--tx2)';
    const ico = hasDiff ? '⚡' : '📍';
    return `<div onclick="rcToggle('${l.code}')" style="cursor:pointer;background:${bg};border:1.5px solid ${border};border-radius:8px;padding:6px 10px;font-family:var(--fh);font-size:12px;font-weight:700;color:${txc};transition:all .15s;display:flex;align-items:center;gap:4px;">
      ${sel?'✓ ':''}<span>${ico} ${l.code}</span>
    </div>`;
  }).join('');
}

function rcToggle(code){ if(_rcSelSet.has(code)) _rcSelSet.delete(code); else _rcSelSet.add(code); renderReconteoLocs(); }
function rcSelAll(){ const inv=getAllInvs().find(x=>String(x.id)===String(_rcInvId)); if(!inv) return; _rcSelSet=new Set(inv.locations.filter(l=>!l.isMissingLoc).map(l=>l.code)); renderReconteoLocs(); }
function rcSelNone(){ _rcSelSet=new Set(); renderReconteoLocs(); }

function confirmReconteo(){
  const inv = getAllInvs().find(x=>String(x.id)===String(_rcInvId));
  const err = document.getElementById('reconteo-err');
  if(!inv){err.textContent='Inventario no encontrado';err.style.display='block';return;}
  if(_rcSelSet.size===0){err.textContent='Selecciona al menos una ubicación para recontar.';err.style.display='block';return;}
  err.style.display='none';
  const locs = [..._rcSelSet];
  const note = document.getElementById('reconteo-note').value.trim();
  const target = document.getElementById('reconteo-target-user').value;
  if(!target){err.textContent='Selecciona un usuario para asignar el reconteo.';err.style.display='block';return;}
  const db = getDB();
  if(!db.reconteoPending) db.reconteoPending={};
  if(!db.reconteoPending[target]) db.reconteoPending[target]=[];
  db.reconteoPending[target].push({
    id: 'rc_'+Date.now()+'_'+Math.random().toString(36).slice(2,6),
    invId: _rcInvId,
    originalUser: inv.username,
    locs,
    refMode: _rcRefMode,   // 'all' o 'diff' — qué referencias incluir
    note,
    requestedBy: CUR.username,
    requestedByName: isMaster()?'Sistema':CUR.name,
    requestedAt: new Date().toISOString(),
    status: 'pending'
  });
  setDB(db);
  const locList = locs.slice(0,5).join(', ')+(locs.length>5?` y ${locs.length-5} más`:'');
  const targetName = db.users?.[target]?.name||target;
  const isOriginal = target === inv.username;
  const msg = `🔁 Reconteo solicitado en ${locs.length} ubicación${locs.length!==1?'es':''}: ${locList}.${!isOriginal?' (Inventario de '+( db.users?.[inv.username]?.name||inv.username)+')':''}${note?' Nota: '+note:''}`;
  notifyUser(target, msg, 'reconteo');
  document.getElementById('reconteo-mo').classList.remove('on');
  document.getElementById('modal').classList.remove('on');
  flash(`✅ Reconteo asignado a ${targetName}`,'ok');
}

function getPendingReconteos(){ const db=getDB(); return (db.reconteoPending?.[CUR.username]||[]).filter(r=>r.status==='pending'); }

function checkAndShowReconteoAlert(){
  const pending = getPendingReconteos();
  const el = document.getElementById('reconteo-alert-banner');
  if(!el) return;
  if(!pending.length){ el.style.display='none'; return; }
  const totalLocs = [...new Set(pending.flatMap(r=>r.locs))].length;
  el.style.display='flex';
  const cnt = document.getElementById('reconteo-alert-count');
  if(cnt) cnt.textContent = totalLocs;
}

function openReconteoOpModal(){
  const pending = getPendingReconteos();
  if(!pending.length){flash('Sin solicitudes de reconteo pendientes','wn');return;}
  const rc = pending[pending.length-1];
  const db = getDB();
  const by = db.users?.[rc.requestedBy]?.name||rc.requestedBy;
  const originalInfo = rc.originalUser && rc.originalUser!==CUR.username
    ? `\n📋 Inventario original de: ${db.users?.[rc.originalUser]?.name||rc.originalUser}`
    : '';
  const refInfo = rc.refMode==='diff' ? '\n⚡ Solo referencias con novedad' : '\n📦 Todas las referencias de cada ubicación';
  appConfirm('🔁 Solicitud de Reconteo',
    `${by} solicita recontar ${rc.locs.length} ubicación${rc.locs.length!==1?'es':''}:${originalInfo}${refInfo}\n\n${rc.locs.join(' · ')}\n\n${rc.note?'📝 '+rc.note+'\n\n':''}¿Iniciar reconteo ahora?`,
    ()=>{ startReconteo(rc); }
  );
}

function startReconteo(rc){
  if(ACTIVE){ flash('⚠️ Termina el inventario en curso antes de iniciar un reconteo','wn'); return; }
  const db=getDB();
  // Buscar catálogo del usuario asignado (quien va a hacer el reconteo)
  const own=getActiveCatalogEntry(CUR.username);
  // Si no tiene catálogo activo, usar cualquiera disponible del autor original
  let originalOwn=null;
  if(rc.originalUser){
    const oKeys=_allCatKeysFor(rc.originalUser,db);
    if(oKeys.length) originalOwn=db.catalogs[oKeys[0]];
  }
  const sourceCat = own || originalOwn;
  if(!sourceCat){flash('Sin catálogo disponible para iniciar el reconteo','er');return;}
  const rcLocsSet = new Set(rc.locs);
  const refMode = rc.refMode || 'all';

  // Si refMode==='diff', construir set de referencias con novedad por ubicación
  const diffRefsByLoc = {}; // { locCode: Set(skus con novedad) }
  if(refMode==='diff'){
    const origInv = getAllInvs().find(x=>String(x.id)===String(rc.invId));
    if(origInv){
      origInv.locations.filter(l=>rcLocsSet.has(l.code)).forEach(l=>{
        const diffSkus = Object.entries(l.items||{})
          .filter(([sku,i])=>sku!=='__loc__'&&(i.status==='diff'||i.status==='novedad'||i.status==='missing_loc'))
          .map(([sku])=>sku);
        if(diffSkus.length) diffRefsByLoc[l.code]=new Set(diffSkus);
      });
    }
  }

  const filteredCat = {};
  Object.entries(sourceCat.catalog||{}).forEach(([code,ref])=>{
    const filteredLocs = (ref.locs||[]).filter(l=>{
      if(!rcLocsSet.has(l.loc)) return false;
      if(refMode==='diff'){
        // Solo incluir si esta referencia tiene novedad en esa ubicación
        return diffRefsByLoc[l.loc]?.has(code) ?? false;
      }
      return true;
    });
    if(filteredLocs.length>0) filteredCat[code]={...ref,locs:filteredLocs};
  });
  if(!Object.keys(filteredCat).length){ flash('Las ubicaciones del reconteo no están en ningún catálogo disponible','er'); return; }
  db.catalogs=db.catalogs||{};
  db.catalogs[CUR.username+'_reconteo']={
    catalog: filteredCat,
    info: `🔁 Reconteo (${rc.locs.length} ubic.)`,
    isSelectiveAudit: true,
    isReconteo: true,
    reconteoId: rc.id,
    originalUser: rc.originalUser||CUR.username,
    loadedAt: new Date().toISOString()
  };
  (db.reconteoPending[CUR.username]||[]).forEach(r=>{ if(r.id===rc.id) r.status='inprogress'; });
  setDB(db);
  const banner = document.getElementById('reconteo-alert-banner');
  if(banner) banner.style.display='none';
  flash('🔁 Iniciando reconteo…','ok');
  setTimeout(()=>startOrContinue(), 500);
}

function finishReconteoIfNeeded(){
  const db=getDB();
  const rcCat=db.catalogs?.[CUR.username+'_reconteo'];
  if(!rcCat?.isReconteo||!rcCat?.reconteoId) return;
  const rcId=rcCat.reconteoId;
  if(db.reconteoPending?.[CUR.username]){
    db.reconteoPending[CUR.username].forEach(r=>{
      if(r.id===rcId&&r.status==='inprogress'){
        r.status='done';
        r.doneAt=new Date().toISOString();
        notifyAdmins(`✅ Reconteo completado por ${CUR.name} · ${r.locs.length} ubicaciones`);
      }
    });
    // Limpiar catálogo de reconteo — el catálogo propio/asignado queda intacto
    delete db.catalogs[CUR.username+'_reconteo'];
    setDB(db);
  }
}

/* ══════════════════════════════════════════════════════
   OPERATOR EXPORT
══════════════════════════════════════════════════════ */
let _expDate=null;
function refExp(){
  const invs=getUserInvs(CUR.username);
  document.getElementById('exp-lbl').textContent=`${invs.length} inventario${invs.length!==1?'s':''} guardado${invs.length!==1?'s':''}`;
  const dates=[...new Set(invs.map(i=>i.date))].sort((a,b)=>b.localeCompare(a));
  const row=document.getElementById('dpr');
  if(!dates.length){row.innerHTML='<span style="font-size:13px;color:var(--tx2);">Sin datos aún</span>';return;}
  if(!_expDate||!dates.includes(_expDate)) _expDate=dates[0];
  row.innerHTML=dates.map(d=>{const lbl=new Date(d+'T12:00:00').toLocaleDateString('es-CO',{day:'2-digit',month:'short',year:'numeric'});return `<div class="dpc ${d===_expDate?'on':''}" onclick="selDate('${d}',this)">${lbl}</div>`;}).join('');
}
function selDate(d,el){_expDate=d;document.querySelectorAll('#screen-export .dpc').forEach(c=>c.classList.remove('on'));el.classList.add('on');}
function expXLSX(){
  if(!_expDate){flash('Selecciona un día','wn');return;}
  const invs=getUserInvs(CUR.username).filter(i=>i.date===_expDate);
  if(!invs.length){flash('Sin datos','wn');return;}
  const _safe=(s)=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9_-]+/g,'_').replace(/^_+|_+$/g,'');const _uName=_safe(CUR.name||CUR.username);expInvsXLSX(invs,`inventario_${_uName}_${_expDate}.xlsx`);
}
function expCSV(){
  const invs=getUserInvs(CUR.username);
  if(!invs.length){flash('Sin datos','wn');return;}
  const rows=buildRows(invs);const h=Object.keys(rows[0]);
  const csv=[h.join(','),...rows.map(r=>h.map(k=>`"${(r[k]??'').toString().replace(/"/g,'""')}"`).join(','))].join('\n');
  const blob=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8;'});const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download=`inventario_${CUR.username}_${toDS(new Date())}.csv`;a.click();URL.revokeObjectURL(url);flash('CSV descargado ✓','ok');
}
function expCSVDay(){
  if(!_expDate){flash('Selecciona un día','wn');return;}
  const invs=getUserInvs(CUR.username).filter(i=>i.date===_expDate);
  if(!invs.length){flash('Sin datos','wn');return;}
  const rows=buildRows(invs);const h=Object.keys(rows[0]);
  const csv=[h.join(','),...rows.map(r=>h.map(k=>`"${(r[k]??'').toString().replace(/"/g,'""')}"`).join(','))].join('\n');
  const blob=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8;'});const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download=`inventario_${CUR.username}_${_expDate}.csv`;a.click();URL.revokeObjectURL(url);flash('CSV del día descargado ✓','ok');
}

/* ══════════════════════════════════════════════════════
   RESET PROGRESS
══════════════════════════════════════════════════════ */
function confirmResetProgress(){
  const period=_curPeriod;
  // Count how many locations have a status in this period
  const db=getDB();
  const count=Object.keys(db.locStatus||{}).filter(k=>k.startsWith(period+'_')).length;
  if(!count){flash('No hay conteos registrados en este período','wn');return;}
  confirmAuditAction('Reiniciar progreso',`¿Reiniciar el progreso de ${period}?\n\nEsto eliminará el estado de ${count} ubicaciones en esta quincena.\nLos inventarios guardados NO se eliminan.`,()=>{
    const prefix=period+'_';
    Object.keys(db.locStatus||{}).forEach(k=>{if(k.startsWith(prefix)) delete db.locStatus[k];});
    Object.values(db.locAssignments||{}).forEach(arr=>{
      arr.forEach(a=>{if(a.period===period){a.verified=false;a.isEmpty=false;delete a.verifiedAt;}});
    });
    setDB(db);renderProgressContent();
    flash(`✓ Progreso de ${period} reiniciado (${count} ubicaciones)`,'ok');
  });
}

/* ══════════════════════════════════════════════════════
   BUILD ROWS (shared)
══════════════════════════════════════════════════════ */
function buildRows(invArr){
  const db=getDB();
  const verdicts=db.novedadVerdicts||{};
  const rows=[];

  // Esquema fijo de columnas — garantiza que TODAS las filas tengan las mismas
  // columnas, en el mismo orden, y que "Medida por Caja (M²)" y "Cantidad de
  // Cajas" queden bien ubicadas justo después de Unidad y antes de Contado.
  const SCHEMA=[
    'Fecha','Usuario','Hora Inicio','Hora Fin','Ubicación','Referencia','Nombre',
    'Unidad','Medida por Caja (M²)','Cantidad de Cajas','Contado','Stock SAP',
    'Lote','Diferencia','Estado','Tipo','Observación operador','Foto evidencia',
    'Veredicto admin','Observación admin','Evaluado por'
  ];
  function mkRow(o){
    const r={};
    for(const k of SCHEMA) r[k] = (o && o[k]!==undefined && o[k]!==null) ? o[k] : '';
    return r;
  }

  // Distribuye cajas proporcionalmente entre líneas originales del SAP.
  function distributeBoxes(sapLines, totalBoxes){
    if(!sapLines||!sapLines.length||totalBoxes===null||totalBoxes===undefined) return null;
    const totalStock=sapLines.reduce((s,v)=>s+v,0);
    if(totalStock<=0) return sapLines.map(s=>({stock:s,cajas:0}));
    const exact=sapLines.map(s=>(s/totalStock)*totalBoxes);
    const floors=exact.map(v=>Math.floor(v));
    let remaining=totalBoxes-floors.reduce((a,b)=>a+b,0);
    const remainders=exact.map((v,i)=>({i,r:v-floors[i]})).sort((a,b)=>b.r-a.r);
    for(let k=0;k<remaining;k++) floors[remainders[k].i]++;
    return sapLines.map((s,i)=>({stock:s,cajas:floors[i]}));
  }

  invArr.forEach(inv=>{
    const hi=fT(new Date(inv.startTime)),hf=inv.endTime?fT(new Date(inv.endTime)):'';
    const catEntry=getCatalog(inv.user||inv.username)||getCatalog(inv.username)||null;
    const catData=catEntry?catEntry.catalog||catEntry:{};

    inv.locations.forEach(loc=>{
      const ents=Object.entries(loc.items);
      if(ents.length){ents.forEach(([code,item])=>{
        const diff=item.sapStock!==null&&item.counted!==null?Math.round((item.counted-item.sapStock)*100)/100:'';
        const estado=item.status==='ok'?'✓ Correcto':item.status==='diff'?'⚡ Diferencia':item.status==='novedad'?'🔵 Extra':(item.status==='pending'||item.status==='missing_loc'||(item.counted===null&&!item.isExtra))?'🚫 No contado':'';
        const unidad=item.isM2?'M2':'UND';
        const tipoVal=item.isM2?'CJ':(item.unit||'');
        const isMissingItem=item.status==='missing_loc'||(item.counted===null&&!item.isExtra&&item.status!=='ok'&&item.status!=='diff'&&item.status!=='novedad');
        const vKey=isMissingItem?`${inv.id}_${loc.code}_${code}_missing`:`${inv.id}_${loc.code}_${code}`;
        const _vd=verdicts[vKey]; const _vV=_vd?.v||_vd||null;
        const veredicto=_vV==='ok'?'✔ Tiene razón':_vV==='no'?'✘ No tiene razón':'';
        const obsAdmin=_vd?.obs||'';
        const evalPor=_vd?.by||'';

        const refCat=catData[code]||null;
        const rawLocLines=refCat&&refCat.rawLines?refCat.rawLines[loc.code]:null;
        const rawLocLots=refCat&&refCat.rawLots?refCat.rawLots[loc.code]:null;
        const loteUnico=(()=>{
          if(!rawLocLots||!rawLocLots.length) return '';
          const uniq=[...new Set(rawLocLots.filter(x=>x!==''&&x!=null))];
          if(!uniq.length) return '';
          return uniq.length===1?uniq[0]:uniq.join(' / ');
        })();
        const loteAt=(i)=>(rawLocLots&&rawLocLots[i]!=null?rawLocLots[i]:'')||loteUnico;

        // Valores de M² (vacíos para no-M²)
        const m2pb = item.isM2 ? (item.m2PerBox??'') : '';
        const cajasTot = item.isM2 ? (item.boxes??'') : '';

        // ── Productos M2: distribuir cajas Y M² contados proporcionalmente entre líneas SAP ──
        if(item.isM2 && item.boxes!==null && item.boxes!==undefined){
          const dist=rawLocLines&&rawLocLines.length>1?distributeBoxes(rawLocLines,item.boxes):null;
          if(dist){
            const totalSAP=rawLocLines.reduce((s,v)=>s+v,0);
            dist.forEach(({stock,cajas},i)=>{
              const contadoParcial = totalSAP>0
                ? Math.round((item.counted*(stock/totalSAP))*1000)/1000
                : item.counted;
              const diffParcial = Math.round((contadoParcial-stock)*1000)/1000;
              rows.push(mkRow({
                'Fecha':inv.date,'Usuario':inv.user||inv.username,'Hora Inicio':hi,'Hora Fin':hf,
                'Ubicación':loc.code,'Referencia':code,'Nombre':item.name||'','Unidad':unidad,
                'Medida por Caja (M²)':item.m2PerBox??'','Cantidad de Cajas':cajas,
                'Contado':contadoParcial,'Stock SAP':stock,'Lote':loteAt(i),'Diferencia':diffParcial,
                'Estado':estado,'Tipo':tipoVal,'Observación operador':item.note||'',
                'Foto evidencia':item.photo?'SÍ':'','Veredicto admin':veredicto,
                'Observación admin':obsAdmin,'Evaluado por':evalPor
              }));
            });
            return;
          }
        }

        // ── Productos normales (no M2): distribuir cantidad contada proporcionalmente entre líneas SAP ──
        if(!item.isExtra && !item.isM2 && item.counted!==null && rawLocLines && rawLocLines.length>1){
          const dist=distributeBoxes(rawLocLines, item.counted);
          if(dist){
            dist.forEach(({stock,cajas:contadoParcial},i)=>{
              const diffParcial=Math.round((contadoParcial-stock)*100)/100;
              rows.push(mkRow({
                'Fecha':inv.date,'Usuario':inv.user||inv.username,'Hora Inicio':hi,'Hora Fin':hf,
                'Ubicación':loc.code,'Referencia':code,'Nombre':item.name||'','Unidad':unidad,
                'Medida por Caja (M²)':'','Cantidad de Cajas':'',
                'Contado':contadoParcial,'Stock SAP':stock,'Lote':loteAt(i),'Diferencia':diffParcial,
                'Estado':estado,'Tipo':tipoVal,'Observación operador':item.note||'',
                'Foto evidencia':item.photo?'SÍ':'','Veredicto admin':veredicto,
                'Observación admin':obsAdmin,'Evaluado por':evalPor
              }));
            });
            return;
          }
        }

        // ── Fila única ──
        rows.push(mkRow({
          'Fecha':inv.date,'Usuario':inv.user||inv.username,'Hora Inicio':hi,'Hora Fin':hf,
          'Ubicación':loc.code,'Referencia':code,'Nombre':item.name||'','Unidad':unidad,
          'Medida por Caja (M²)':m2pb,'Cantidad de Cajas':cajasTot,
          'Contado':item.counted??'','Stock SAP':item.sapStock??'','Lote':loteUnico,
          'Diferencia':diff,'Estado':estado,'Tipo':tipoVal,
          'Observación operador':item.note||'','Foto evidencia':item.photo?'SÍ':'',
          'Veredicto admin':veredicto,'Observación admin':obsAdmin,'Evaluado por':evalPor
        }));
      });}
      else rows.push(mkRow({
        'Fecha':inv.date,'Usuario':inv.user||inv.username,'Hora Inicio':hi,'Hora Fin':hf,
        'Ubicación':loc.code,'Estado':'Sin referencias'
      }));
    });
  });
  return rows;
}

/* ══════════════════════════════════════════════════════
   AUTO-MARK LOCATION AS COUNTED
══════════════════════════════════════════════════════ */
function getCurrentPeriod(){
  const now=new Date();
  const yr=now.getFullYear();
  const mo=String(now.getMonth()+1).padStart(2,'0');
  const q=now.getDate()<=15?1:2;
  return `${yr}-${mo}-Q${q}`;
}
function autoMarkLocCounted(code){
  const period=getCurrentPeriod();
  const vk=`${period}_${code}`;
  const db=getDB();
  if(!db.locStatus) db.locStatus={};
  // Only mark if not already verified/empty
  const existing=db.locStatus[vk];
  if(!existing||existing.status==='pending'){
    db.locStatus[vk]={status:'counted',countedBy:isMaster()?'Sistema':CUR.username,countedAt:new Date().toISOString()};
    setDB(db);
  }
}

/* ══════════════════════════════════════════════════════
   LOCATION FILTER
══════════════════════════════════════════════════════ */
let _locFilter='all';
function setLocFilter(f,el){
  _locFilter=f;
  document.querySelectorAll('.lf-tab').forEach(t=>{t.classList.remove('on','on-pend','on-empty');});
  if(f==='pending') el.classList.add('on-pend');
  else if(f==='empty') el.classList.add('on-empty');
  else el.classList.add('on');
  renderProgressContent();
}

/* ══════════════════════════════════════════════════════
   ASSIGN LOCATIONS TO OPERATOR
══════════════════════════════════════════════════════ */
let _assignSelSet=new Set();

function openAssignLocsModal(){
  const db=getDB();
  const ops=Object.entries(db.users||{}).filter(([uname,u])=>u.role==='operator' && !isHiddenUser(uname,u));
  const sel=document.getElementById('assign-user-sel');
  sel.innerHTML=`<option value="">— Selecciona operador —</option>`+ops.map(([u,d])=>`<option value="${u}">${d.name} (@${u})</option>`).join('');
  _assignSelSet=new Set();
  document.getElementById('assign-search').value='';
  document.getElementById('assign-err').style.display='none';
  renderAssignList();
  document.getElementById('assign-mo').classList.add('on');
}
function closeAssignMo(e){if(e.target===document.getElementById('assign-mo')) document.getElementById('assign-mo').classList.remove('on');}

function renderAssignList(){
  const db=getDB();
  const locs=Object.values(db.masterLocs||{});
  const q=(document.getElementById('assign-search')?.value||'').toUpperCase();
  const period=getCurrentPeriod();
  const filtered=q?locs.filter(l=>l.code.includes(q)):locs;
  const el=document.getElementById('assign-loc-list');
  if(!filtered.length){el.innerHTML='<div style="font-size:13px;color:var(--tx2);padding:8px 0;">Sin ubicaciones</div>';return;}
  el.innerHTML=filtered.map(l=>{
    const st=db.locStatus?.[`${period}_${l.code}`];
    const isCounted=st&&(st.status==='counted'||st.status==='verified'||st.status==='empty');
    const badge=isCounted?`<span class="loc-empty-badge">${st.status==='empty'?'Vacía':'Contada'}</span>`:'';
    const checked=_assignSelSet.has(l.code)?'checked':'';
    return `<div class="assign-loc-row">
      <input class="assign-loc-chk" type="checkbox" id="ach-${l.code}" ${checked} onchange="toggleAssignSel('${l.code}',this.checked)">
      <label for="ach-${l.code}" style="flex:1;cursor:pointer;font-family:var(--fh);font-size:13px;font-weight:700;">${l.code}</label>
      ${badge}
    </div>`;
  }).join('');
}
function toggleAssignSel(code,checked){if(checked) _assignSelSet.add(code);else _assignSelSet.delete(code);}
function assignSelAll(){
  const db=getDB();const locs=Object.values(db.masterLocs||{});
  const q=(document.getElementById('assign-search')?.value||'').toUpperCase();
  const filtered=q?locs.filter(l=>l.code.includes(q)):locs;
  filtered.forEach(l=>_assignSelSet.add(l.code));
  renderAssignList();
}
function assignSelNone(){_assignSelSet=new Set();renderAssignList();}
function assignSelPending(){
  const db=getDB();const locs=Object.values(db.masterLocs||{});
  const period=getCurrentPeriod();
  _assignSelSet=new Set();
  locs.forEach(l=>{const st=db.locStatus?.[`${period}_${l.code}`];if(!st||st.status==='pending') _assignSelSet.add(l.code);});
  renderAssignList();
}

function doAssignLocs(){
  const target=document.getElementById('assign-user-sel').value;
  const err=document.getElementById('assign-err');
  if(!target){err.textContent='Selecciona un operador';err.style.display='block';return;}
  if(_assignSelSet.size===0){err.textContent='Selecciona al menos una ubicación';err.style.display='block';return;}
  err.style.display='none';
  const db=getDB();
  if(!db.locAssignments) db.locAssignments={};
  if(!db.locAssignments[target]) db.locAssignments[target]=[];
  const period=getCurrentPeriod();
  const now=new Date().toISOString();
  let added=0;
  _assignSelSet.forEach(code=>{
    const existing=db.locAssignments[target].find(a=>a.code===code&&a.period===period);
    if(!existing){
      db.locAssignments[target].push({code,period,assignedBy:CUR.username,assignedAt:now,verified:false,isEmpty:false});
      added++;
    }
  });
  setDB(db);
  document.getElementById('assign-mo').classList.remove('on');
  flash(`✓ ${added} ubicaciones enviadas a ${db.users[target]?.name||target}`,'ok');
  // Notificación en app + navegador
  if(added>0){
    const locMsg=`📍 El administrador te asignó ${added} ubicación${added!==1?'es':''} para verificar. Revisa tu panel de asignaciones.`;
    notifyUser(target, locMsg, 'ubicacion');
  }
  // Refresh assignments panel if on progress screen
  renderProgressAssignments();
}

/* ══════════════════════════════════════════════════════
   OPERATOR: MY ASSIGNMENTS (verify empty)
══════════════════════════════════════════════════════ */
function getMyAssignments(){
  const db=getDB();
  const period=getCurrentPeriod();
  return (db.locAssignments?.[CUR.username]||[]).filter(a=>a.period===period);
}

function openMyAssignModal(){
  renderMyAssignList();
  document.getElementById('myassign-mo').classList.add('on');
}
function closeMyAssignMo(e){
  if(e.target===document.getElementById('myassign-mo')){
    clearTimeout(_assignAutoCloseTimer);
    document.getElementById('myassign-mo').classList.remove('on');
  }
}

function renderMyAssignList(){
  const db=getDB();
  const assignments=getMyAssignments();
  const period=getCurrentPeriod();
  const el=document.getElementById('myassign-list');
  if(!assignments.length){el.innerHTML='<div class="es" style="padding:20px;"><div class="ei">📋</div><p>No tienes ubicaciones asignadas para verificar.</p></div>';return;}
  // Solo mostrar pendientes; las verificadas desaparecen con animación tras 5s
  const pending=assignments.filter(a=>!a.verified);
  let html='';
  if(pending.length){
    html+=`<div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--wn);margin-bottom:8px;">\u23f3 Por verificar (${pending.length})</div>`;
    html+=pending.map(a=>assignItemHTML(a,db,period)).join('');
  } else {
    html='<div class="es" style="padding:20px;"><div class="ei">\u2705</div><p>\u00a1Todas las ubicaciones han sido verificadas!</p></div>';
  }
  el.innerHTML=html;
}

function assignItemHTML(a,db,period){
  const st=db.locStatus?.[`${period}_${a.code}`];
  const isCounted=st&&(st.status==='counted'||st.status==='verified'||st.status==='empty');
  const verifiedBy=db.users?.[a.assignedBy]?.name||a.assignedBy;
  let statusBadge='';
  if(a.verified&&a.isEmpty) statusBadge=`<span class="badge" style="background:rgba(0,148,255,.12);color:var(--ac2);">🔵 Vacía</span>`;
  else if(isCounted) statusBadge=`<span class="badge val-ok">✓ Contada</span>`;
  else if(a.verified) statusBadge=`<span class="badge val-ok">✓ Verificada</span>`;

  return `<div class="pan" style="margin:0 0 8px;padding:12px 14px;">
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
      <div style="flex:1;min-width:0;">
        <div style="font-family:var(--fh);font-weight:800;font-size:14px;">${a.code}</div>
        <div style="font-size:11px;color:var(--tx2);margin-top:2px;">Asignada por: ${verifiedBy}</div>
      </div>
      ${statusBadge}
    </div>
    ${!a.verified?`
    <div style="display:flex;gap:6px;margin-top:10px;">
      <button class="btn b-blue sm" style="flex:1;" onclick="markLocEmpty('${a.code}')">🔵 Vacía</button>
      <button class="btn bp sm" style="flex:1;" onclick="markLocHasProducts('${a.code}')">📦 Tiene productos</button>
    </div>`:
    a.isEmpty?`<div style="font-size:12px;color:var(--ac2);margin-top:6px;">Marcada como vacía · <button onclick="undoAssignVerify('${a.code}')" style="background:none;border:none;color:var(--tx3);font-size:11px;cursor:pointer;text-decoration:underline;">Deshacer</button></div>`:
    `<div style="font-size:12px;color:var(--tx2);margin-top:6px;">Tiene productos — cuéntala en inventario</div>`
    }
  </div>`;
}

function markLocEmpty(code){
  const db=getDB();
  const period=getCurrentPeriod();
  if(!db.locAssignments?.[CUR.username]) return;
  const a=db.locAssignments[CUR.username].find(x=>x.code===code&&x.period===period);
  if(a){a.verified=true;a.isEmpty=true;a.verifiedAt=new Date().toISOString();}
  if(!db.locStatus) db.locStatus={};
  db.locStatus[`${period}_${code}`]={status:'empty',verifiedBy:isMaster()?'Sistema':CUR.username,verifiedAt:new Date().toISOString()};
  setDB(db);
  // Mark card as verified visually, then fade out after 5s
  const cardEl = findAssignCard(code);
  if(cardEl){
    cardEl.style.transition='opacity .4s';
    cardEl.style.opacity='0.5';
    cardEl.querySelectorAll('button').forEach(b=>b.disabled=true);
    setTimeout(()=>{
      cardEl.style.transition='max-height .4s ease, opacity .3s, padding .4s, margin .4s';
      cardEl.style.overflow='hidden';
      cardEl.style.maxHeight=cardEl.offsetHeight+'px';
      requestAnimationFrame(()=>{cardEl.style.maxHeight='0';cardEl.style.opacity='0';cardEl.style.paddingTop='0';cardEl.style.paddingBottom='0';cardEl.style.marginBottom='0';});
      setTimeout(()=>{ cardEl.remove(); cleanAssignSectionLabels(); },450);
    },5000);
  }
  flash(`🔵 ${code} marcada como vacía`,'ok');
  checkAllAssignmentsVerified();
}
function markLocHasProducts(code){
  const db=getDB();
  const period=getCurrentPeriod();
  if(!db.locAssignments?.[CUR.username]) return;
  const a=db.locAssignments[CUR.username].find(x=>x.code===code&&x.period===period);
  if(a){a.verified=true;a.isEmpty=false;a.verifiedAt=new Date().toISOString();}
  setDB(db);
  // Mark card as verified visually, then fade out after 5s
  const cardEl = findAssignCard(code);
  if(cardEl){
    cardEl.style.transition='opacity .4s';
    cardEl.style.opacity='0.5';
    cardEl.querySelectorAll('button').forEach(b=>b.disabled=true);
    setTimeout(()=>{
      cardEl.style.transition='max-height .4s ease, opacity .3s, padding .4s, margin .4s';
      cardEl.style.overflow='hidden';
      cardEl.style.maxHeight=cardEl.offsetHeight+'px';
      requestAnimationFrame(()=>{cardEl.style.maxHeight='0';cardEl.style.opacity='0';cardEl.style.paddingTop='0';cardEl.style.paddingBottom='0';cardEl.style.marginBottom='0';});
      setTimeout(()=>{ cardEl.remove(); cleanAssignSectionLabels(); },450);
    },5000);
  }
  flash(`📦 ${code} — recuerda contarla en inventario`,'wn');
  checkAllAssignmentsVerified();
}
function findAssignCard(code){
  // Find the pan card in myassign-list that contains the code
  const list=document.getElementById('myassign-list');
  if(!list) return null;
  return Array.from(list.querySelectorAll('.pan')).find(el=>{
    const title=el.querySelector('[style*="font-family:var(--fh)"]');
    return title&&title.textContent.trim()===code;
  })||null;
}
function cleanAssignSectionLabels(){
  // If the pending section is now empty, remove its label too
  const list=document.getElementById('myassign-list');
  if(!list) return;
  // Check if any visible .pan remains in the pending block
  const children=Array.from(list.children);
  // Remove orphaned section labels (divs with no subsequent .pan siblings before next label)
  let i=0;
  while(i<children.length){
    const el=children[i];
    if(el.tagName==='DIV'&&el.style.fontSize==='11px'&&el.style.fontWeight==='700'){
      // It's a section label — check if next sibling is another label or end
      const next=children[i+1];
      if(!next||!next.classList.contains('pan')){el.remove();}
    }
    i++;
  }
}

let _assignAutoCloseTimer=null;
function checkAllAssignmentsVerified(){
  const assignments=getMyAssignments();
  const allDone=assignments.length>0&&assignments.every(a=>a.verified);
  if(!allDone) return;
  // Save notification for admin(s)
  const total=assignments.length;
  const empty=assignments.filter(a=>a.isEmpty).length;
  const withProds=total-empty;
  notifyAdmins(`✅ ${CUR.name} terminó de verificar ${total} ubicación${total!==1?'es':''} — ${empty} vacía${empty!==1?'s':''}, ${withProds} con producto${withProds!==1?'s':''}`);
  // Auto-close modal after 30s
  flash(`✅ ¡Todas las ubicaciones verificadas! El modal se cerrará en 30 s`,'ok');
  clearTimeout(_assignAutoCloseTimer);
  _assignAutoCloseTimer=setTimeout(()=>{
    document.getElementById('myassign-mo').classList.remove('on');
    refHome();
  },30000);
}
function undoAssignVerify(code){
  const db=getDB();
  const period=getCurrentPeriod();
  if(!db.locAssignments?.[CUR.username]) return;
  const a=db.locAssignments[CUR.username].find(x=>x.code===code&&x.period===period);
  if(a){a.verified=false;a.isEmpty=false;delete a.verifiedAt;}
  // Remove empty status if it was set via this assignment
  const st=db.locStatus?.[`${period}_${code}`];
  if(st&&st.status==='empty') delete db.locStatus[`${period}_${code}`];
  setDB(db);
  renderMyAssignList();
  flash(`${code} restablecida`,'wn');
}


/* ══════════════════════════════════════════════════════
   ADMIN: DATA MANAGEMENT
══════════════════════════════════════════════════════ */
function openDataMgmtModal(){
  renderDMTab();
  document.getElementById('datamgmt-mo').classList.add('on');
}
function closeDataMgmtMo(e){ if(e.target===document.getElementById('datamgmt-mo')) document.getElementById('datamgmt-mo').classList.remove('on'); }

function renderDMTab(){
  const el = document.getElementById('datamgmt-content');
  const db = getDB();
  const users = Object.entries(db.users||{}).filter(([uname,u])=>!isHiddenUser(uname,u));
  if(!users.length){ el.innerHTML='<div class="es"><div class="ei">👥</div><p>Sin usuarios</p></div>'; return; }
  let html = '<div class="del-mo-section"><div class="del-mo-section-t">Selecciona usuarios</div>';
  users.forEach(([uname, u]) => {
    const invCount = getUserInvs(uname).length;
    html += `<div class="user-del-row">
      <input class="user-del-chk" type="checkbox" id="dchk-${uname}" value="${uname}">
      <label for="dchk-${uname}" style="flex:1;cursor:pointer;">
        <div style="font-family:var(--fh);font-weight:700;font-size:13px;">${u.name} <span style="font-family:var(--fb);font-weight:400;color:var(--tx2);">@${uname}</span></div>
        <div style="font-size:11px;color:var(--tx2);">${invCount} inventario${invCount!==1?'s':''} · <span class="badge ${u.role==='admin'?'b-admin':'b-op'}">${u.role==='admin'?'Admin':'Operador'}</span></div>
      </label>
    </div>`;
  });
  html += '</div>';
  html += `<div class="dz">
    <div class="dz-t">⚠️ Zona de eliminación</div>
    <div style="font-size:12px;color:var(--tx2);margin-bottom:12px;">Selecciona usuarios arriba y luego elige qué eliminar. Esta acción no se puede deshacer.</div>
    <div class="gy">
      <button class="btn bd2" onclick="doDeleteUserRecords('all')">🗑 Eliminar TODOS los registros de los usuarios seleccionados</button>
      <button class="btn bw" onclick="openDeleteByDayForUser()">📅 Eliminar registros de un día específico</button>
    </div>
  </div>`;
  el.innerHTML = html;
}

function getSelectedDMUsers(){
  return Array.from(document.querySelectorAll('[id^="dchk-"]')).filter(c=>c.checked).map(c=>c.value);
}

function doDeleteUserRecords(scope){
  const users = getSelectedDMUsers();
  if(!users.length){ flash('Selecciona al menos un usuario','wn'); return; }
  const db = getDB();
  const names = users.map(u=>db.users[u]?.name||u).join(', ');
  confirmAuditAction('Eliminar registros',`¿Eliminar TODOS los inventarios de:\n${names}?\n\nEsta acción no se puede deshacer.`,()=>{
    const removed = (db.inventories||[]).filter(i=>users.includes(i.username));
    db.inventories = (db.inventories||[]).filter(i=>!users.includes(i.username));
    users.forEach(u=>{ try{ localStorage.removeItem('itp3_active_'+u); }catch(e){} });
    setDB(db);
    logAudit('datamgmt.deleteUserAll', `Eliminó TODOS los inventarios (${removed.length}) de ${users.length} usuario${users.length!==1?'s':''}: ${names}`, {users, count:removed.length, ids:removed.map(i=>i.id||null)});
    document.getElementById('datamgmt-mo').classList.remove('on');
    flash(`✓ Registros de ${users.length} usuario${users.length!==1?'s':''} eliminados`,'ok');
    renderAH();
  });
}

let _dmDayUserSel = null;
function openDeleteByDayForUser(){
  const users = getSelectedDMUsers();
  if(!users.length){ flash('Selecciona al menos un usuario','wn'); return; }
  // Show a date picker for these users
  const db = getDB();
  const all = getAllInvs().filter(i=>users.includes(i.username));
  const dates = [...new Set(all.map(i=>i.date))].sort((a,b)=>b.localeCompare(a));
  if(!dates.length){ flash('Sin registros para los usuarios seleccionados','wn'); return; }
  const names = users.map(u=>db.users[u]?.name||u).join(', ');
  let html = `<div style="font-size:13px;color:var(--tx2);margin-bottom:10px;">Usuarios: <b style="color:var(--tx);">${names}</b></div>`;
  html += '<div class="del-mo-section"><div class="del-mo-section-t">Selecciona el día a eliminar</div>';
  dates.forEach(d => {
    const dayInvs = all.filter(i=>i.date===d);
    const lbl = new Date(d+'T12:00:00').toLocaleDateString('es-CO',{weekday:'short',day:'2-digit',month:'short',year:'numeric'});
    html += `<div class="day-inv-row" id="ddayrow-${d}" onclick="selectDDayUser('${d}','${users.join(',')}')">
      <div class="day-inv-row-info">
        <div class="day-inv-row-dt">📅 ${lbl}</div>
        <div class="day-inv-row-sub">${dayInvs.length} inventario${dayInvs.length!==1?'s':''}</div>
      </div>
      <span style="font-size:18px;">○</span>
    </div>`;
  });
  html += '</div><div id="dday-confirm-zone" style="display:none;" class="dz"><div class="dz-t">⚠️ Confirmar eliminación</div><div id="dday-confirm-info" style="font-size:12px;color:var(--tx2);margin-bottom:10px;"></div><button class="btn bd2" onclick="doDeleteUserDay()">🗑 Eliminar</button></div>';
  document.getElementById('datamgmt-content').innerHTML = html;
  window._ddayUserList = users;
  window._ddaySelectedDay = null;
}

function selectDDayUser(d, usersStr){
  window._ddaySelectedDay = d;
  document.querySelectorAll('[id^="ddayrow-"]').forEach(r=>{r.classList.remove('sel');r.querySelector('span').textContent='○';});
  const row = document.getElementById('ddayrow-'+d);
  if(row){row.classList.add('sel');row.querySelector('span').textContent='●';}
  const users = usersStr.split(',');
  const db = getDB();
  const dayInvs = getAllInvs().filter(i=>users.includes(i.username)&&i.date===d);
  const lbl = new Date(d+'T12:00:00').toLocaleDateString('es-CO',{day:'2-digit',month:'long',year:'numeric'});
  const names = users.map(u=>db.users[u]?.name||u).join(', ');
  const info = document.getElementById('dday-confirm-info');
  if(info) info.textContent = `Se eliminarán ${dayInvs.length} inventario${dayInvs.length!==1?'s':''} del ${lbl} para: ${names}.`;
  const zone = document.getElementById('dday-confirm-zone');
  if(zone) zone.style.display='';
}

function doDeleteUserDay(){
  const users = window._ddayUserList||[];
  const d = window._ddaySelectedDay;
  if(!users.length||!d) return;
  const db = getDB();
  const names = users.map(u=>db.users[u]?.name||u).join(', ');
  const lbl = new Date(d+'T12:00:00').toLocaleDateString('es-CO',{day:'2-digit',month:'long',year:'numeric'});
  confirmAuditAction('Eliminar inventarios',`¿Eliminar los inventarios del ${lbl} para:\n${names}?`,()=>{
    const removed = (db.inventories||[]).filter(i=>users.includes(i.username)&&i.date===d);
    db.inventories = (db.inventories||[]).filter(i=>!(users.includes(i.username)&&i.date===d));
    setDB(db);
    logAudit('datamgmt.deleteUserDay', `Eliminó ${removed.length} inventario${removed.length!==1?'s':''} del ${lbl} para: ${names}`, {users, date:d, count:removed.length, ids:removed.map(i=>i.id||null)});
    document.getElementById('datamgmt-mo').classList.remove('on');
    flash(`✓ Inventarios del ${lbl} eliminados`,'ok');
    renderAH();
  });
}

/* ══════════════════════════════════════════════════════
   APP RESET
══════════════════════════════════════════════════════ */
function confirmAppReset(){
  if(!isMaster()){ flash('Sin permiso','er'); return; }
  appConfirm('⚠️ REINICIAR APLICACIÓN','Esto eliminará todos los datos:\n• Todos los usuarios (excepto master)\n• Todos los inventarios\n• Catálogos · Ubicaciones · Configuraciones\n\nLa aplicación pedirá crear un nuevo administrador.\n\n¿Estás seguro?',()=>{
    confirmAuditAction('🚨 ÚLTIMA CONFIRMACIÓN','Esta acción es IRREVERSIBLE. Todos los datos serán borrados permanentemente (el usuario master se conservará).\n\n¿Confirmar reinicio total?',()=>{
      // Preservar usuario(s) master
      const db = getDB();
      const masterUsers = {};
      Object.entries(db.users||{}).forEach(([uname,u])=>{
        if(u.isMaster) masterUsers[uname] = u;
      });
      const keysToDelete = [];
      for(let i=0; i<localStorage.length; i++){
        const k = localStorage.key(i);
        if(k && k.startsWith('itp3_')) keysToDelete.push(k);
      }
      keysToDelete.forEach(k=>localStorage.removeItem(k));
      _dbCache = {users: masterUsers, catalogs:{}, inventories:[], masterLocs:{}, locStatus:{}, settings:{}};
      if(_fbRef) _fbRef.set(_dbCache);
      CUR = {username:'',role:'',name:''};
      ACTIVE = null;
      flash('✓ Aplicación reiniciada','ok');
      setTimeout(()=>{ window.location.href='index.html'; }, 500);
    });
  });
}

/* ══════════════════════════════════════════════════════
   ADMIN HISTORY — ENHANCED (grouped view + export)
══════════════════════════════════════════════════════ */

function setAHView(v, el){
  _ahView = v;
  const bf=document.getElementById('ah-view-flat');
  const bg=document.getElementById('ah-view-grouped');
  if(bf){bf.style.background='';bf.style.color='';bf.style.borderColor='';}
  if(bg){bg.style.background='';bg.style.color='';bg.style.borderColor='';}
  if(el){el.style.background='rgba(0,229,160,.12)';el.style.color='var(--ac)';el.style.borderColor='rgba(0,229,160,.4)';}
  renderAH();
}

function populateAHUserFilter(){
  const sel = document.getElementById('ahist-user-filter');
  if(!sel) return;
  const db = getDB();
  const users = Object.entries(db.users||{}).filter(([uname,u])=>!isHiddenUser(uname,u));
  const cur = sel.value;
  sel.innerHTML = '<option value="">Todos los usuarios</option>' + users.map(([u,d])=>`<option value="${u}" ${cur===u?'selected':''}>${d.name} (@${u})</option>`).join('');
}

/* ══════════════════════════════════════════════════════
   EXPORT FROM HISTORY MODAL
══════════════════════════════════════════════════════ */
function openAHExportModal(){
  renderAHExportContent();
  document.getElementById('ah-export-mo').classList.add('on');
}
function closeAHExportMo(e){ if(e.target===document.getElementById('ah-export-mo')) document.getElementById('ah-export-mo').classList.remove('on'); }

let _ahExpDay = null;
let _ahExpUser = '';

function renderAHExportContent(){
  const el = document.getElementById('ah-export-content');
  const db = getDB();
  const all = getAllInvs();
  const dates = [...new Set(all.map(i=>i.date))].sort((a,b)=>b.localeCompare(a));
  const users = Object.entries(db.users||{}).filter(([uname,u])=>!isHiddenUser(uname,u));
  
  let html = `<div class="del-mo-section">
    <div class="del-mo-section-t">Filtrar por usuario (opcional)</div>
    <select id="ah-exp-user-sel" onchange="onAHExpUserChange(this.value)" style="width:100%;background:var(--sf);border:1.5px solid var(--bd);border-radius:var(--rs);color:var(--tx);font-family:var(--fb);font-size:14px;padding:11px 13px;outline:none;appearance:none;">
      <option value="">Todos los usuarios</option>
      ${users.map(([u,d])=>`<option value="${u}">${d.name} (@${u})</option>`).join('')}
    </select>
  </div>`;
  
  html += `<div class="del-mo-section">
    <div class="del-mo-section-t">Selecciona el día</div>
    <div id="ah-exp-days-list">`;
  if(!dates.length){
    html += '<div style="font-size:13px;color:var(--tx2);">Sin datos disponibles</div>';
  } else {
    dates.forEach(d=>{
      const dayInvs = all.filter(i=>i.date===d);
      const lbl = new Date(d+'T12:00:00').toLocaleDateString('es-CO',{weekday:'short',day:'2-digit',month:'short',year:'numeric'});
      html += `<div class="exp-day-row" id="ahedrow-${d}" onclick="selectAHExpDay('${d}')">
        <div style="flex:1;"><div style="font-family:var(--fh);font-weight:700;font-size:13px;">📅 ${lbl}</div>
        <div style="font-size:11px;color:var(--tx2);">${dayInvs.length} inventario${dayInvs.length!==1?'s':''}</div></div>
        <span id="ahedrow-chk-${d}" style="font-size:18px;">○</span>
      </div>`;
    });
  }
  html += `</div></div>`;
  
  html += `<div class="gy">
    <button class="btn bp" onclick="doAHExport('xlsx')">⬇ Exportar Excel (día/usuario seleccionado)</button>
    <button class="btn bs" onclick="doAHExport('all')">⬇ Exportar todo lo filtrado</button>
  </div>`;
  
  el.innerHTML = html;
  _ahExpDay = null;
  _ahExpUser = '';
}

function onAHExpUserChange(val){
  _ahExpUser = val;
  // refresh day counts
  const all = getAllInvs();
  const db = getDB();
  const filtered = val ? all.filter(i=>i.username===val) : all;
  const dates = [...new Set(filtered.map(i=>i.date))].sort((a,b)=>b.localeCompare(a));
  const container = document.getElementById('ah-exp-days-list');
  if(!container) return;
  if(!dates.length){ container.innerHTML='<div style="font-size:13px;color:var(--tx2);">Sin datos para este usuario</div>'; return; }
  container.innerHTML = dates.map(d=>{
    const dayInvs = filtered.filter(i=>i.date===d);
    const lbl = new Date(d+'T12:00:00').toLocaleDateString('es-CO',{weekday:'short',day:'2-digit',month:'short',year:'numeric'});
    return `<div class="exp-day-row" id="ahedrow-${d}" onclick="selectAHExpDay('${d}')">
      <div style="flex:1;"><div style="font-family:var(--fh);font-weight:700;font-size:13px;">📅 ${lbl}</div>
      <div style="font-size:11px;color:var(--tx2);">${dayInvs.length} inventario${dayInvs.length!==1?'s':''}</div></div>
      <span id="ahedrow-chk-${d}" style="font-size:18px;">○</span>
    </div>`;
  }).join('');
  _ahExpDay = null;
}

function selectAHExpDay(d){
  _ahExpDay = d;
  document.querySelectorAll('[id^="ahedrow-"]').forEach(r=>{ if(!r.id.includes('chk')) r.classList.remove('sel'); });
  document.querySelectorAll('[id^="ahedrow-chk-"]').forEach(s=>s.textContent='○');
  const row = document.getElementById('ahedrow-'+d);
  if(row) row.classList.add('sel');
  const chk = document.getElementById('ahedrow-chk-'+d);
  if(chk) chk.textContent='●';
}

function doAHExport(mode){
  let invs = getAllInvs();
  if(_ahExpUser) invs = invs.filter(i=>i.username===_ahExpUser);
  if(mode==='xlsx' && _ahExpDay) invs = invs.filter(i=>i.date===_ahExpDay);
  if(!invs.length){ flash('Sin datos para exportar','wn'); return; }
  const db = getDB();
  const userPart = _ahExpUser ? '_'+(db.users[_ahExpUser]?.name||_ahExpUser).replace(/\s+/g,'_') : '_global';
  const dayPart = (mode==='xlsx'&&_ahExpDay) ? '_'+_ahExpDay : '_completo';
  expInvsXLSX(invs, `inventario${userPart}${dayPart}.xlsx`);
  flash('Excel exportado ✓','ok');
}

/* ══════════════════════════════════════════════════════
   ADMIN HISTORY — renderAH enhanced
══════════════════════════════════════════════════════ */

let _ahFilt='day';
let _ahView='flat';

function filtAH(p,el){
  _ahFilt=p;
  document.querySelectorAll('#screen-a-history .tabs .tab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  populateAHUserFilter();
  renderAH();
}

function renderAH(){
  populateAHUserFilter();
  const q=(document.getElementById('ahist-q')?.value||'').toLowerCase();
  const userFilter=(document.getElementById('ahist-user-filter')?.value||'');
  const now=new Date();
  const all=getAllInvs().filter(inv=>{
    const d=new Date(inv.startTime);
    const ok=(()=>{if(_ahFilt==='day') return inv.date===toDS(now);if(_ahFilt==='week') return sameWeek(d,now);if(_ahFilt==='month') return d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear();return true;})();
    const userOk=!userFilter||inv.username===userFilter;
    const ms=!q||inv.username.toLowerCase().includes(q)||(inv.user||'').toLowerCase().includes(q)||inv.locations.some(l=>l.code.toLowerCase().includes(q));
    return ok&&ms&&userOk;
  }).sort((a,b)=>new Date(b.startTime)-new Date(a.startTime));
  const el=document.getElementById('ahist-list');
  if(!all.length){el.innerHTML='<div class="es"><div class="ei">🔍</div><p>Sin registros</p></div>';return;}
  
  if(_ahView==='grouped'){
    // Group by date then by user
    const byDate={};
    all.forEach(inv=>{
      if(!byDate[inv.date]) byDate[inv.date]=[];
      byDate[inv.date].push(inv);
    });
    const dateKeys=Object.keys(byDate).sort((a,b)=>b.localeCompare(a));
    el.innerHTML=dateKeys.map(date=>{
      const dayInvs=byDate[date];
      const lbl=new Date(date+'T12:00:00').toLocaleDateString('es-CO',{weekday:'long',day:'2-digit',month:'long',year:'numeric'});
      const byUser={};
      dayInvs.forEach(inv=>{if(!byUser[inv.username]) byUser[inv.username]=[];byUser[inv.username].push(inv);});
      const userBlocks=Object.entries(byUser).map(([uname,uinvs])=>{
        const db2=getDB();
        const uname_display=db2.users?.[uname]?.name||uname;
        const invItems=uinvs.map(inv=>{
          const tq=inv.locations.reduce((a,l)=>a+Object.values(l.items).reduce((b,i)=>b+(i.counted||0),0),0);
          const nov=inv.locations.reduce((a,l)=>a+(l.isMissingLoc?1:Object.values(l.items).filter(i=>i.status==='diff'||i.status==='novedad'||i.status==='missing_loc'||(i.counted===null&&!i.isExtra&&i.status!=='ok')).length),0);
          const s=new Date(inv.startTime),e=inv.endTime?new Date(inv.endTime):null;
          return `<div class="ic" style="margin-bottom:6px;" onclick="showDetAdmin('${inv.id}')">
            <div class="ic-top"><div><div class="ic-ti">${fT(s)}${e?' → '+fT(e):''}</div></div>
            ${nov?`<span class="mc" style="color:var(--dg);">⚡ ${nov}</span>`:`<span class="mc" style="color:var(--ac);">✓</span>`}</div>
            <div class="ic-meta"><span class="mc">📍 ${inv.locations.length}</span><span class="mc">🔢 ${tq}</span>
            ${(()=>{const rv=getInvReview(inv.id);return rv?`<span class="mc" style="color:var(--ac);">✅ Revisado</span>`:`<span class="mc" style="color:var(--wn);">🕐 Pendiente</span>`;})()}
            </div>
          </div>`;
        }).join('');
        return `<div class="exp-user-day-block">
          <div class="exp-user-day-block-t">👤 ${uname_display} <span style="font-family:var(--fb);font-weight:400;color:var(--tx2);font-size:11px;">@${uname}</span> · <span class="mc">${uinvs.length} inv.</span></div>
          ${invItems}
        </div>`;
      }).join('');
      return `<div style="margin-bottom:14px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
          <div style="font-family:var(--fh);font-size:14px;font-weight:800;color:var(--ac);">📅 ${lbl}</div>
          <button class="btn b-blue sm" style="width:auto;font-size:11px;" onclick="quickExportDay('${date}')">⬇ Exportar día</button>
        </div>
        ${userBlocks}
      </div>`;
    }).join('');
  } else {
    el.innerHTML=all.map(inv=>{
      const tq=inv.locations.reduce((a,l)=>a+Object.values(l.items).reduce((b,i)=>b+(i.counted||0),0),0);
      const nov=inv.locations.reduce((a,l)=>a+(l.isMissingLoc?1:Object.values(l.items).filter(i=>i.status==='diff'||i.status==='novedad'||i.status==='missing_loc'||(i.counted===null&&!i.isExtra&&i.status!=='ok')).length),0);
      const s=new Date(inv.startTime),e=inv.endTime?new Date(inv.endTime):null;
      return `<div class="ic" onclick="showDetAdmin('${inv.id}')">
        <div class="ic-top"><div><div class="ic-ti">${inv.user||inv.username} · ${s.toLocaleDateString('es-CO',{day:'2-digit',month:'short'})}</div>
        <div class="ic-dt">${fT(s)}${e?' → '+fT(e):''}</div></div><span class="badge bc">Cerrado</span></div>
        <div class="ic-meta"><span class="mc">@${inv.username}</span><span class="mc">📍 ${inv.locations.length} ubic.</span><span class="mc">🔢 ${tq}</span>
        ${nov?`<span class="mc" style="color:var(--dg);">⚡ ${nov} nov.</span>`:`<span class="mc" style="color:var(--ac);">✓</span>`}
        ${(()=>{const rv=getInvReview(inv.id);return rv?`<span class="mc" style="color:var(--ac);">✅ Revisado</span>`:`<span class="mc" style="color:var(--wn);">🕐 Pendiente</span>`;})()}
        </div></div>`;
    }).join('');
  }
}

function quickExportDay(date){
  const userFilter = document.getElementById('ahist-user-filter')?.value||'';
  let invs = getAllInvs().filter(i=>i.date===date);
  if(userFilter) invs = invs.filter(i=>i.username===userFilter);
  if(!invs.length){flash('Sin datos','wn');return;}
  expInvsXLSX(invs, `inventario_${date}.xlsx`);
  flash('Excel exportado ✓','ok');
}

function showDetAdmin(id){
  const inv=getAllInvs().find(x=>String(x.id)===String(id));if(!inv) return;
  buildDetModal(inv,true);
}

/* ══════════════════════════════════════════════════════
   ✅ REVISIÓN DE INVENTARIOS (Admin / Supervisor)
══════════════════════════════════════════════════════ */
let _invReviewTargetId = null;

function getInvReview(invId){
  const db=getDB();
  return (db.invReviews||{})[String(invId)]||null;
}

function buildInvReviewBtn(invId){
  const rv=getInvReview(invId);
  if(rv){
    const when=new Date(rv.at).toLocaleDateString('es-CO',{day:'2-digit',month:'short',year:'numeric'});
    const obsHtml=rv.obs?`<div style="font-size:11px;color:var(--tx2);margin-top:4px;background:var(--sf2);border-radius:8px;padding:6px 9px;">💬 ${rv.obs}</div>`:'';
    return `<div style="background:rgba(0,229,160,.07);border:1.5px solid rgba(0,229,160,.3);border-radius:var(--rs);padding:10px 13px;margin-top:2px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <div style="font-size:12px;color:var(--ac);font-weight:700;">✅ Revisado · ${when}</div>
        <button onclick="openInvReviewMo('${invId}')" style="background:none;border:none;color:var(--tx3);font-size:11px;cursor:pointer;text-decoration:underline;padding:0;">Editar</button>
      </div>
      ${obsHtml}
      <button onclick="clearInvReview('${invId}')" style="background:none;border:none;color:var(--dg);font-size:11px;cursor:pointer;text-decoration:underline;padding:0;margin-top:6px;">Marcar como pendiente</button>
    </div>`;
  }
  return `<button class="btn bs sm" onclick="openInvReviewMo('${invId}')" style="width:100%;margin-top:2px;background:rgba(0,229,160,.07);color:var(--ac);border-color:rgba(0,229,160,.3);">✅ Marcar como revisado</button>`;
}

function openInvReviewMo(invId){
  _invReviewTargetId=String(invId);
  const rv=getInvReview(invId);
  const mo=document.getElementById('inv-review-mo');
  document.getElementById('inv-review-title').textContent=rv?'✏️ Editar revisión':'✅ Marcar como revisado';
  const inv=getAllInvs().find(x=>String(x.id)===String(invId));
  const lbl=inv?`${inv.user||inv.username} · ${new Date(inv.startTime).toLocaleDateString('es-CO',{day:'2-digit',month:'short',year:'numeric'})}`:'';
  document.getElementById('inv-review-body').textContent=lbl;
  document.getElementById('inv-review-obs').value=rv?.obs||'';
  mo.classList.add('on');
  setTimeout(()=>document.getElementById('inv-review-obs').focus(),200);
}

function closeInvReviewMo(e){
  if(e&&e.target!==document.getElementById('inv-review-mo')) return;
  document.getElementById('inv-review-mo').classList.remove('on');
  _invReviewTargetId=null;
}

function confirmInvReview(){
  if(!_invReviewTargetId) return;
  const obs=document.getElementById('inv-review-obs').value.trim();
  const db=getDB();
  if(!db.invReviews) db.invReviews={};
  db.invReviews[_invReviewTargetId]={
    status:'reviewed',
    obs,
    by:CUR.name||CUR.username,
    at:new Date().toISOString()
  };
  setDB(db);
  document.getElementById('inv-review-mo').classList.remove('on');
  // Refresh inline btn in modal if open
  const inlineEl=document.getElementById('inv-review-inline-'+_invReviewTargetId);
  if(inlineEl) inlineEl.innerHTML=buildInvReviewBtn(_invReviewTargetId);
  renderAH();
  flash('✅ Inventario marcado como revisado','ok');
  _invReviewTargetId=null;
}

function clearInvReview(invId){
  const db=getDB();
  if(db.invReviews) delete db.invReviews[String(invId)];
  setDB(db);
  const inlineEl=document.getElementById('inv-review-inline-'+invId);
  if(inlineEl) inlineEl.innerHTML=buildInvReviewBtn(invId);
  renderAH();
  flash('🕐 Inventario marcado como pendiente','wn');
}


/* ══════════════════════════════════════════════════════
   📷 PHOTO VIEWER (pantalla completa)
══════════════════════════════════════════════════════ */
function openPhotoViewer(src, lbl){
  const mo=document.getElementById('photo-viewer-mo');
  document.getElementById('photo-viewer-img').src=src;
  document.getElementById('photo-viewer-lbl').textContent=lbl||'📷 Foto de evidencia';
  mo.style.display='flex';
  document.body.style.overflow='hidden';
}
function closePhotoViewer(){
  const mo=document.getElementById('photo-viewer-mo');
  mo.style.display='none';
  document.getElementById('photo-viewer-img').src='';
  document.body.style.overflow='';
}

let _ft;
function flash(msg,type=''){const el=document.getElementById('flash');el.textContent=msg;el.className='flash'+(type?' '+type:'');void el.offsetWidth;el.classList.add('on');clearTimeout(_ft);_ft=setTimeout(()=>el.classList.remove('on'),2800);}
function toDS(d){return d.toISOString().slice(0,10);}
// Redondea y formatea un número eliminando decimales innecesarios (máx 2 decimales)
function fmtNum(n){if(n===null||n===undefined||n==='') return '—';const r=Math.round(n*100)/100;return Number.isInteger(r)?String(r):r.toFixed(2).replace(/\.?0+$/,'');}
function fT(d){return d.toLocaleTimeString('es-CO',{hour:'2-digit',minute:'2-digit',second:'2-digit'});}
function dur(s,e){const sec=Math.floor((new Date(e)-new Date(s))/1000);const m=Math.floor(sec/60),r=sec%60;return m<60?`${m}m ${r}s`:`${Math.floor(m/60)}h ${m%60}m`;}
function sameWeek(a,b){const sw=d=>{const x=new Date(d);x.setDate(x.getDate()-x.getDay());x.setHours(0,0,0,0);return x;};return sw(a).getTime()===sw(b).getTime();}


/* ══════════════════════════════════════════════════════
   ⏱ TEMPORIZADOR DE INVENTARIO ACTIVO
══════════════════════════════════════════════════════ */
let _timerRaf=null;
function startInvTimer(){
  const el=document.getElementById('inv-timer');
  if(!el) return;
  el.style.display='';
  function tick(){
    if(!ACTIVE){el.style.display='none';return;}
    const sec=Math.floor((Date.now()-new Date(ACTIVE.startTime))/1000);
    const h=Math.floor(sec/3600),m=Math.floor((sec%3600)/60),s=sec%60;
    el.textContent='⏱ '+(h>0?h+'h ':'')+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
    _timerRaf=requestAnimationFrame(tick);
  }
  cancelAnimationFrame(_timerRaf);tick();
}
function stopInvTimer(){
  cancelAnimationFrame(_timerRaf);
  const el=document.getElementById('inv-timer');
  if(el) el.style.display='none';
}
// Patch openLocStep and openProdStep to start timer when entering scan screen
const _origOpenLocStep=openLocStep;
openLocStep=function(){_origOpenLocStep.apply(this,arguments);if(ACTIVE) startInvTimer();};
const _origOpenProdStep=openProdStep;
openProdStep=function(){_origOpenProdStep.apply(this,arguments);if(ACTIVE) startInvTimer();};
// Stop timer when inventory closes
const _origCloseInv=closeInv;
closeInv=function(){stopInvTimer();_origCloseInv.apply(this,arguments);};

/* ══════════════════════════════════════════════════════
   📌 NOTAS DE UBICACIONES (Admin → Operador)
══════════════════════════════════════════════════════ */
function saveLocNote(){
  const code=document.getElementById('locnote-code').value.trim().toUpperCase();
  const text=document.getElementById('locnote-text').value.trim();
  const type=document.getElementById('locnote-type').value;
  if(!code||!text){flash('Completa código y nota','er');return;}
  const db=getDB();
  if(!db.locNotes) db.locNotes={};
  db.locNotes[code]={code,text,type,by:CUR.username,at:new Date().toISOString()};
  setDB(db);
  document.getElementById('locnote-code').value='';
  document.getElementById('locnote-text').value='';
  renderLocNotesList();
  flash('📌 Nota guardada para '+code,'ok');
}
function renderLocNotesList(){
  const db=getDB();
  const notes=Object.values(db.locNotes||{}).sort((a,b)=>a.code.localeCompare(b.code));
  const el=document.getElementById('locnotes-list');
  if(!el) return;
  if(!notes.length){el.innerHTML='<div class="es"><div class="ei">📌</div><p>Sin notas creadas aún.</p></div>';return;}
  el.innerHTML=notes.map(n=>{
    const ico=n.type==='warn'?'⚠️':n.type==='ok'?'✅':'ℹ️';
    const bg=n.type==='warn'?'rgba(255,182,39,.08)':n.type==='ok'?'rgba(0,229,160,.07)':'rgba(0,148,255,.07)';
    const bc=n.type==='warn'?'rgba(255,182,39,.3)':n.type==='ok'?'rgba(0,229,160,.3)':'rgba(0,148,255,.3)';
    const cl=n.type==='warn'?'var(--wn)':n.type==='ok'?'var(--ac)':'var(--ac2)';
    const by=db.users?.[n.by]?.name||n.by;
    const when=new Date(n.at).toLocaleDateString('es-CO',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});
    return `<div style="background:${bg};border:1.5px solid ${bc};border-radius:var(--rs);padding:12px 14px;margin-bottom:8px;">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
        <div style="flex:1;min-width:0;">
          <div style="font-family:var(--fh);font-weight:800;font-size:13px;color:${cl};">${ico} ${n.code}</div>
          <div style="font-size:13px;color:var(--tx);margin-top:4px;line-height:1.5;">${n.text}</div>
          <div style="font-size:10px;color:var(--tx3);margin-top:5px;">Por ${by} · ${when}</div>
        </div>
        <button onclick="deleteLocNote('${n.code}')" style="background:none;border:none;color:var(--tx3);font-size:18px;cursor:pointer;padding:0;flex-shrink:0;">🗑</button>
      </div>
    </div>`;
  }).join('');
}
function deleteLocNote(code){
  confirmAuditAction('Eliminar nota',`¿Eliminar la nota de ${code}?`,()=>{
    const db=getDB();
    const prev = db.locNotes && db.locNotes[code];
    if(prev){
      logAudit('locnote.delete', `Eliminó nota de bodega en ${code}`, {code, prev});
      delete db.locNotes[code];
      setDB(db);
    }
    renderLocNotesList();
    flash('Nota eliminada','ok');
  });
}
// Mostrar nota al operador cuando abre una ubicación
function checkLocNote(code){
  const db=getDB();
  const note=db.locNotes?.[code];
  if(!note) return;

  // Config por tipo
  const cfg={
    warn:{
      ico:'⚠️', label:'ATENCIÓN — NOTA DE BODEGA',
      bg:'linear-gradient(135deg,#3a2000 0%,#2a1500 100%)',
      stripe:'rgba(255,182,39,.13)',
      border:'rgba(255,182,39,.7)',
      glow:'locnote-glow-warn',
      badge:'rgba(255,182,39,1)', badgeTx:'#1a0e00',
      cl:'#ffb627', shadow:'rgba(255,182,39,.45)',
      vibrate:[120,60,120,60,200]
    },
    ok:{
      ico:'✅', label:'NOTA DE BODEGA',
      bg:'linear-gradient(135deg,#002818 0%,#001a10 100%)',
      stripe:'rgba(0,229,160,.11)',
      border:'rgba(0,229,160,.65)',
      glow:'locnote-glow-ok',
      badge:'rgba(0,229,160,1)', badgeTx:'#001a0d',
      cl:'#00e5a0', shadow:'rgba(0,229,160,.4)',
      vibrate:[80,40,80]
    },
    info:{
      ico:'ℹ️', label:'NOTA DE BODEGA',
      bg:'linear-gradient(135deg,#001828 0%,#000f1c 100%)',
      stripe:'rgba(0,148,255,.11)',
      border:'rgba(0,148,255,.65)',
      glow:'locnote-glow-info',
      badge:'rgba(0,148,255,1)', badgeTx:'#fff',
      cl:'#0094ff', shadow:'rgba(0,148,255,.4)',
      vibrate:[80,40,80]
    }
  };
  const c=cfg[note.type]||cfg.info;

  // Vibración
  if(navigator.vibrate) navigator.vibrate(c.vibrate);

  setTimeout(()=>{
    const hdr=document.getElementById('loc-hdr');
    if(!hdr) return;
    const banner=document.createElement('div');
    banner.className='locnote-banner';
    banner.style.cssText=`
      background:${c.bg};
      border:2px solid ${c.border};
      border-radius:16px;
      padding:0;
      margin-bottom:14px;
      overflow:hidden;
      animation:locnote-in .45s cubic-bezier(.2,.8,.3,1) both, ${c.glow} 2s ease-in-out 0.5s infinite;
      position:relative;
    `;
    banner.innerHTML=`
      <!-- Franja animada superior -->
      <div style="
        height:5px;
        background:repeating-linear-gradient(90deg,${c.border} 0px,${c.border} 20px,transparent 20px,transparent 40px);
        background-size:40px 100%;
        animation:locnote-stripe .7s linear infinite;
      "></div>
      <!-- Cuerpo principal -->
      <div style="padding:14px 16px 16px;">
        <!-- Badge tipo -->
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
          <div style="
            background:${c.badge};
            color:${c.badgeTx};
            font-size:9px;
            font-weight:900;
            letter-spacing:1.2px;
            padding:3px 9px;
            border-radius:20px;
            font-family:var(--fh);
            flex-shrink:0;
          ">${c.label}</div>
          <div style="flex:1;height:1px;background:${c.border};opacity:.4;"></div>
          <div style="font-size:20px;line-height:1;flex-shrink:0;">${c.ico}</div>
        </div>
        <!-- Texto -->
        <div style="
          font-size:15px;
          font-weight:700;
          color:#fff;
          line-height:1.55;
          text-shadow:0 1px 8px rgba(0,0,0,.6);
        ">${note.text}</div>
        <!-- Firma -->
        <div style="
          margin-top:10px;
          font-size:10px;
          color:${c.cl};
          opacity:.7;
          font-family:var(--fh);
        ">Bodega · Admin${note.at?' · '+new Date(note.at).toLocaleDateString('es',{day:'2-digit',month:'short'}):''}</div>
      </div>
      <!-- Franja animada inferior -->
      <div style="
        height:3px;
        background:repeating-linear-gradient(90deg,${c.border} 0px,${c.border} 20px,transparent 20px,transparent 40px);
        background-size:40px 100%;
        animation:locnote-stripe .7s linear infinite reverse;
        opacity:.6;
      "></div>
    `;
    // Segunda vibración de refuerzo al aparecer el banner
    setTimeout(()=>{ if(navigator.vibrate) navigator.vibrate(c.vibrate); },460);
    // Animación de shake en warn
    if(note.type==='warn'){
      setTimeout(()=>{
        banner.style.animation=`locnote-glow-warn 2s ease-in-out infinite, locnote-shake .5s ease`;
        setTimeout(()=>{ banner.style.animation=`locnote-glow-warn 2s ease-in-out infinite`; },520);
      },500);
    }
    hdr.insertBefore(banner,hdr.firstChild);
  },100);
}

/* ══════════════════════════════════════════════════════
   📊 DASHBOARD DE RENDIMIENTO (Admin)
══════════════════════════════════════════════════════ */
let _dashTab='perf';
function setDashTab(t,el){
  _dashTab=t;
  document.querySelectorAll('#screen-a-dashboard .tab').forEach(x=>x.classList.remove('on'));
  el.classList.add('on');
  renderDashboard();
}

/* ── Calcular puntuación integral por operador ── */
// Convierte una fecha (ISO string o Date) al formato de período YYYY-MM-Q1|Q2
function dateToPeriod(d){
  if(!d) return null;
  const dt = (d instanceof Date) ? d : new Date(d);
  if(isNaN(dt.getTime())) return null;
  const yr = dt.getFullYear();
  const mo = String(dt.getMonth()+1).padStart(2,'0');
  const q  = dt.getDate()<=15 ? 1 : 2;
  return `${yr}-${mo}-Q${q}`;
}

function calcOpScore(uname, db, allInvs, period){
  const ops = db.users||{};
  const u = ops[uname]||{};

  // ── Inventarios del operador EN ESTE PERÍODO (cerrados)
  // Usamos endTime para asignar el inventario al período en que fue CERRADO,
  // así no mezclamos conteos de períodos anteriores.
  const invs = allInvs.filter(i =>
    i.username===uname && i.endTime && dateToPeriod(i.endTime)===period
  );
  // Solo ubicaciones realmente contadas (no las registradas como "no contadas")
  const realLocs = invs.reduce((a,v)=>{ v.locations.forEach(l=>{ if(!l.isMissingLoc) a.push(l); }); return a; }, []);
  const totalLocs = realLocs.length;
  const totalRefs = realLocs.reduce((a,l)=>a+Object.values(l.items).filter(i=>!i.isExtra).length, 0);
  const totalOk   = realLocs.reduce((a,l)=>a+Object.values(l.items).filter(i=>i.status==='ok'&&!i.isExtra).length, 0);
  const totalDiff = realLocs.reduce((a,l)=>a+Object.values(l.items).filter(i=>i.status==='diff').length, 0);
  const totalExtra= realLocs.reduce((a,l)=>a+Object.values(l.items).filter(i=>i.isExtra).length, 0);
  const totalMins = invs.reduce((a,v)=>a+((new Date(v.endTime)-new Date(v.startTime))/60000),0);
  const accuracy  = calcPrecision(invs, db.novedadVerdicts||{})/100;
  const hasPrecisionData = totalRefs > 0; // hay refs evaluables en el período
  const locsPerHour = totalMins>0 ? Math.min(totalLocs/(totalMins/60), 999) : 0;

  // ── Ubicaciones asignadas (período actual)
  const assigns = (db.locAssignments?.[uname]||[]).filter(a=>a.period===period);
  const assignsTotal = assigns.length;
  const assignsVerified = assigns.filter(a=>a.verified).length;
  const assignsPct = assignsTotal>0 ? assignsVerified/assignsTotal : null;

  // ── Tareas DEL PERÍODO (filtradas por createdAt)
  const tasksAll = (db.tasks||[]).filter(t=>t.assignedTo===uname);
  const tasks = tasksAll.filter(t=>dateToPeriod(t.createdAt)===period);
  const tasksDone = tasks.filter(t=>t.status==='done').length;
  const tasksPending = tasks.filter(t=>t.status!=='done').length;
  const tasksPct = tasks.length>0 ? tasksDone/tasks.length : null;

  // ── Catálogo asignado (informativo, NO penaliza el score)
  const hasCatalog = _allCatKeysFor(uname,db).length>0;

  // ── Ubicaciones contadas / no contadas (solo dentro de este período)
  const countedByUser = new Set();
  let totalMissingLocs = 0;
  let totalMissingRefs = 0;
  let vindicatedMissingLocs = 0; // ubic. sin contar con veredicto "tiene razón"
  let vindicatedMissingRefs = 0; // refs sin contar con veredicto "tiene razón"
  const _vrd = db.novedadVerdicts || {};
  invs.forEach(inv=>{
    inv.locations.forEach(loc=>{
      if(loc.isMissingLoc){
        // Considerar el veredicto por referencia. Si TODAS las refs de la
        // ubicación tienen veredicto "tiene razón", la ubicación queda
        // exonerada y no cuenta como EN CONTRA (suma vía novOk/sVerdicts).
        const refs = Object.keys(loc.items).filter(k=>k!=='__loc__');
        const pendingOrNo = refs.filter(sku=>{
          const vv = _vrd[`${inv.id}_${loc.code}_${sku}_missing`];
          return (vv?.v||vv||null) !== 'ok';
        });
        if(pendingOrNo.length === 0 && refs.length > 0){
          vindicatedMissingLocs++;
        } else {
          totalMissingLocs++;
        }
      } else {
        countedByUser.add(loc.code);
        Object.entries(loc.items).forEach(([sku,it])=>{
          if(sku==='__loc__' || it.status!=='missing_loc') return;
          const vv = _vrd[`${inv.id}_${loc.code}_${sku}_missing`];
          if((vv?.v||vv||null) === 'ok') vindicatedMissingRefs++;
          else totalMissingRefs++;
        });
      }
    });
  });

  // ── Catálogo: completitud (qué % de ubics del catálogo contó EN ESTE PERÍODO)
  const catObj = getActiveCatalogEntry(uname);
  let catLocs = new Set();
  if(catObj && catObj.catalog){
    Object.values(catObj.catalog).forEach(ref=>{
      (ref.locs||[]).forEach(l=>{ if(l.loc) catLocs.add(l.loc); });
    });
  }
  const catTotal = catLocs.size;
  const catCounted = catTotal>0 ? [...catLocs].filter(c=>countedByUser.has(c)).length : 0;
  const catCovPct = catTotal>0 ? catCounted/catTotal : null;

  // Penalización por cierre con ubicaciones sin contar (solo si hubo actividad)
  const missingLocPenalty = invs.length>0
    ? Math.min(15, totalMissingLocs * 1.5 + totalMissingRefs * 0.5)
    : 0;

  // ── Veredictos de novedades — SOLO de inventarios de este período
  const periodInvs = allInvs.filter(i =>
    i.username===uname && dateToPeriod(i.endTime||i.startTime)===period
  );
  const verdicts = db.novedadVerdicts || {};
  let novOk = 0, novNo = 0;
  Object.entries(verdicts).forEach(([vKey, v]) => {
    if(periodInvs.some(i => vKey.startsWith(i.id + '_'))){
      const vVerdict = v?.v || v || null;
      if(vVerdict === 'ok') novOk++;
      else if(vVerdict === 'no') novNo++;
    }
  });
  const sVerdicts = Math.min(10, Math.max(-10, novOk - novNo));
  const hasVerdicts = (novOk + novNo) > 0;

  // ══ SCORE ponderado SOLO con dimensiones aplicables al período ══
  // Cada pilar contribuye con (puntos_obtenidos, puntos_máximos). Si la
  // dimensión no aplica este período (ej. sin tareas), se OMITE — no penaliza.
  const pillars = [];
  if(hasPrecisionData)        pillars.push(['sPrecision', accuracy * 35, 35]);
  if(invs.length>0)           pillars.push(['sSpeed',   Math.min(10, Math.max(0, locsPerHour / 3 * 10)), 10]);
  if(catCovPct !== null)      pillars.push(['sCatCov',  catCovPct * 20, 20]);
  if(assignsPct !== null)     pillars.push(['sAssigns', assignsPct * 15, 15]);
  if(tasksPct !== null)       pillars.push(['sTasks',   tasksPct * 10, 10]);
  if(invs.length>0)           pillars.push(['sExtras',  Math.min(5, totalExtra * 0.5), 5]);

  const sumPts = pillars.reduce((a,p)=>a+p[1],0);
  const sumMax = pillars.reduce((a,p)=>a+p[2],0);

  // Bonus/penalización aditivas (solo si hubo actividad)
  const sMissingLocs = -missingLocPenalty;
  const adjustments = (invs.length>0 ? sMissingLocs : 0) + (hasVerdicts ? sVerdicts : 0);

  // Si no hay NINGUNA dimensión aplicable (operador sin actividad ni asignaciones
  // ni tareas en este período), el score es N/A (devolvemos null).
  let score = null;
  if(sumMax > 0){
    const base = (sumPts / sumMax) * 100;
    score = Math.round(Math.min(100, Math.max(0, base + adjustments)));
  }

  // Mapa de breakdown para UI (solo pilares aplicados; los omitidos quedan null)
  const bd = {sPrecision:null, sSpeed:null, sCatCov:null, sAssigns:null, sTasks:null, sExtras:null, sMissingLocs, sVerdicts: hasVerdicts?sVerdicts:null};
  pillars.forEach(([k,v])=>{ bd[k]=v; });

  return {
    uname, u, score,
    hasActivity: sumMax > 0,
    invs: invs.length, totalLocs, totalRefs, totalOk, totalDiff, totalExtra,
    totalMins: Math.round(totalMins), locsPerHour: Math.round(locsPerHour*10)/10,
    accuracy: Math.round(accuracy*100), hasPrecisionData,
    assignsTotal, assignsVerified,
    tasksDone, tasksPending, tasksTotal: tasks.length,
    hasCatalog,
    countedByUser: countedByUser.size,
    catTotal, catCounted, catCovPct: catCovPct !== null ? Math.round(catCovPct*100) : null,
    totalMissingLocs, totalMissingRefs,
    vindicatedMissingLocs, vindicatedMissingRefs,
    breakdown: bd,
    novOk, novNo, hasVerdicts
  };
}

function scoreColor(s){ return s>=85?'var(--ac)':s>=65?'var(--wn)':s>=45?'#f59e0b':'var(--dg)'; }
function scoreLabel(s){ return s>=85?'Excelente':s>=65?'Bueno':s>=45?'Regular':'Bajo'; }
function scoreEmoji(s){ return s>=85?'🏆':s>=65?'✅':s>=45?'⚠️':'🔴'; }


/* ── Cálculo de precisión con veredicto ─────────────────────────────────────
   - status==='ok'           → correcto (base)
   - novedad con v==='ok'    → operador tenía razón → suma como correcto
   - novedad con v==='no'    → operador se equivocó → error (ya no es ok)
   - novedad sin veredicto   → excluida del denominador hasta que se revise
   Extra siempre excluido del cálculo de precisión.
────────────────────────────────────────────────────────────────────────── */
function calcPrecision(invs, verdicts){
  let pctOk=0, pctTotal=0;
  invs.forEach(inv=>{
    const invIdStr=String(inv.id);
    inv.locations.forEach(loc=>{
      if(loc.isMissingLoc) return;
      Object.entries(loc.items).forEach(([code,item])=>{
        if(item.isExtra) return;
        if(item.status==='ok'){
          pctOk++;
          pctTotal++;
        } else if(item.status==='diff'||item.status==='missing_loc'){
          const suffix=item.status==='missing_loc'?'_missing':'';
          const vd=verdicts[invIdStr+'_'+loc.code+'_'+code+suffix];
          const v=vd?.v||null;
          if(v==='ok'){
            pctOk++;   // tenía razón → correcto
            pctTotal++;
          } else if(v==='no'){
            pctTotal++; // no tenía razón → error
          }
          // sin veredicto → no cuenta
        }
      });
    });
  });
  return pctTotal>0?Math.round(pctOk/pctTotal*100):0;
}
function renderDashboard(){
  const el=document.getElementById('dash-content');
  if(!el) return;
  const db=getDB();
  const allInvs=getAllInvs();
  const period=getCurrentPeriod();
  if(_dashTab==='perf') renderDashPerf(el,db,allInvs,period);
  else renderDashTimeline(el,db,allInvs,period);
}

function renderDashPerf(el,db,allInvs,period){
  const ops=Object.entries(db.users||{}).filter(([uname,u])=>u.role==='operator' && !isHiddenUser(uname,u));
  if(!ops.length){el.innerHTML='<div class="es"><div class="ei">👥</div><p>Sin operadores registrados</p></div>';return;}

  const scores = ops.map(([uname])=>calcOpScore(uname,db,allInvs,period))
    .sort((a,b)=>{
      // Operadores sin actividad este período van al final
      if(a.score===null && b.score===null) return 0;
      if(a.score===null) return 1;
      if(b.score===null) return -1;
      return b.score-a.score;
    });

  // ── Resumen general del equipo (solo considera operadores con actividad)
  const scoredOps = scores.filter(s=>s.score!==null);
  const accOps    = scores.filter(s=>s.hasPrecisionData);
  const teamAvg = scoredOps.length ? Math.round(scoredOps.reduce((a,s)=>a+s.score,0)/scoredOps.length) : 0;
  const teamAccAvg = accOps.length ? Math.round(accOps.reduce((a,s)=>a+s.accuracy,0)/accOps.length) : 0;
  const teamDiffs = scores.reduce((a,s)=>a+s.totalDiff,0);
  const teamExtras = scores.reduce((a,s)=>a+s.totalExtra,0);
  const teamLocs = scores.reduce((a,s)=>a+s.totalLocs,0);
  const teamInvs = scores.reduce((a,s)=>a+s.invs,0);
  const teamRefs = scores.reduce((a,s)=>a+s.totalRefs,0);
  const teamOk   = scores.reduce((a,s)=>a+s.totalOk,0);
  const teamMins = scores.reduce((a,s)=>a+s.totalMins,0);
  const teamSpeed = teamMins>0 ? Math.round(teamLocs/(teamMins/60)*10)/10 : 0;
  const activeOpsCount = scoredOps.length;
  const totalOpsCount = scores.length;

  // ── Cobertura de bodega (ubicaciones únicas contadas vs catálogo maestro)
  const uniqLocsCounted = new Set();
  allInvs.forEach(i=>{
    if(i.endTime && dateToPeriod(i.endTime)===period){
      i.locations.forEach(l=>{ if(!l.isMissingLoc) uniqLocsCounted.add(l.code); });
    }
  });
  const masterLocsTotal = Object.keys(db.masterLocs||{}).length;
  const uniqCount = uniqLocsCounted.size;
  const warehousePct = masterLocsTotal>0 ? Math.round(uniqCount/masterLocsTotal*100) : null;

  // ── Distribución de operadores por nivel de score
  const distExc = scoredOps.filter(s=>s.score>=85).length;
  const distGood = scoredOps.filter(s=>s.score>=65 && s.score<85).length;
  const distReg = scoredOps.filter(s=>s.score>=45 && s.score<65).length;
  const distLow = scoredOps.filter(s=>s.score<45).length;

  // ── Distribución de refs (ok / diff / extra) para barra apilada
  const refsTotal = teamOk + teamDiffs + teamExtras;
  const pctOk   = refsTotal>0 ? teamOk/refsTotal*100 : 0;
  const pctDiff = refsTotal>0 ? teamDiffs/refsTotal*100 : 0;
  const pctExt  = refsTotal>0 ? teamExtras/refsTotal*100 : 0;

  // ── Donut SVG helper
  const donut = (pct, color, size=92, stroke=10)=>{
    const r = (size-stroke)/2;
    const c = 2*Math.PI*r;
    const off = c - (Math.max(0,Math.min(100,pct))/100)*c;
    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="display:block;">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--bd)" stroke-width="${stroke}"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round"
        stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${off.toFixed(2)}"
        transform="rotate(-90 ${size/2} ${size/2})" style="transition:stroke-dashoffset .8s ease;"/>
    </svg>`;
  };

  const scoreCol = scoreColor(teamAvg);
  const accCol = teamAccAvg>=95?'var(--ac)':teamAccAvg>=80?'var(--wn)':'var(--dg)';
  const whCol = warehousePct===null ? 'var(--tx3)' : warehousePct>=90?'var(--ac)':warehousePct>=60?'var(--wn)':'var(--dg)';

  const fmtMins = m => m<60 ? `${Math.round(m)}m` : `${Math.floor(m/60)}h ${Math.round(m%60)}m`;

  el.innerHTML = `
  <!-- Resumen equipo -->
  <div style="background:linear-gradient(135deg,var(--sf),var(--sf2));border:1px solid var(--bd);border-radius:var(--r);padding:14px;margin-bottom:12px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--tx2);">📊 Resumen del Equipo</div>
      <div style="font-size:10px;color:var(--tx3);font-weight:600;">Período ${period}</div>
    </div>

    <!-- Tres donuts principales -->
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <div style="position:relative;">
          ${donut(teamAvg, scoreCol)}
          <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;">
            <div style="font-family:var(--fh);font-size:22px;font-weight:800;color:${scoreCol};line-height:1;">${teamAvg}</div>
            <div style="font-size:8px;color:var(--tx3);font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin-top:2px;">${scoreLabel(teamAvg)}</div>
          </div>
        </div>
        <div style="font-size:10px;color:var(--tx2);font-weight:700;text-transform:uppercase;letter-spacing:.05em;">Score Equipo</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <div style="position:relative;">
          ${donut(teamAccAvg, accCol)}
          <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;">
            <div style="font-family:var(--fh);font-size:22px;font-weight:800;color:${accCol};line-height:1;">${teamAccAvg}<span style="font-size:13px;">%</span></div>
            <div style="font-size:8px;color:var(--tx3);font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin-top:2px;">Precisión</div>
          </div>
        </div>
        <div style="font-size:10px;color:var(--tx2);font-weight:700;text-transform:uppercase;letter-spacing:.05em;">Calidad</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <div style="position:relative;">
          ${donut(warehousePct||0, whCol)}
          <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;">
            <div style="font-family:var(--fh);font-size:22px;font-weight:800;color:${whCol};line-height:1;">${warehousePct===null?'—':warehousePct+'%'}</div>
            <div style="font-size:8px;color:var(--tx3);font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin-top:2px;">Bodega</div>
          </div>
        </div>
        <div style="font-size:10px;color:var(--tx2);font-weight:700;text-transform:uppercase;letter-spacing:.05em;">Cobertura</div>
      </div>
    </div>

    <!-- Progreso de bodega -->
    ${masterLocsTotal>0 ? `
    <div style="background:rgba(0,0,0,.18);border:1px solid var(--bd);border-radius:10px;padding:10px 12px;margin-bottom:10px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
        <div style="font-size:10px;color:var(--tx2);font-weight:700;text-transform:uppercase;letter-spacing:.06em;">🏭 Progreso de Bodega</div>
        <div style="font-size:11px;color:var(--tx);font-weight:700;"><span style="color:${whCol};">${uniqCount}</span> / ${masterLocsTotal} ubic.</div>
      </div>
      <div style="height:8px;background:var(--bd);border-radius:99px;overflow:hidden;">
        <div style="height:100%;width:${warehousePct||0}%;background:linear-gradient(90deg,${whCol},${whCol});border-radius:99px;transition:width .8s ease;box-shadow:0 0 8px ${whCol};"></div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:6px;font-size:10px;color:var(--tx3);">
        <span>${masterLocsTotal-uniqCount} pendientes</span>
        <span>${uniqCount===masterLocsTotal?'✅ Bodega completa':uniqCount===0?'Sin iniciar':'En progreso'}</span>
      </div>
    </div>` : ''}

    <!-- Distribución de referencias (barra apilada) -->
    ${refsTotal>0 ? `
    <div style="background:rgba(0,0,0,.18);border:1px solid var(--bd);border-radius:10px;padding:10px 12px;margin-bottom:10px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
        <div style="font-size:10px;color:var(--tx2);font-weight:700;text-transform:uppercase;letter-spacing:.06em;">🎯 Calidad del Conteo</div>
        <div style="font-size:11px;color:var(--tx);font-weight:700;">${refsTotal} refs</div>
      </div>
      <div style="height:10px;background:var(--bd);border-radius:99px;overflow:hidden;display:flex;">
        ${pctOk>0?`<div style="width:${pctOk}%;background:var(--ac);transition:width .8s ease;"></div>`:''}
        ${pctDiff>0?`<div style="width:${pctDiff}%;background:var(--dg);transition:width .8s ease;"></div>`:''}
        ${pctExt>0?`<div style="width:${pctExt}%;background:var(--wn);transition:width .8s ease;"></div>`:''}
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:8px;font-size:10px;">
        <div style="display:flex;align-items:center;gap:5px;"><span style="width:8px;height:8px;border-radius:2px;background:var(--ac);"></span><span style="color:var(--tx2);">OK</span><span style="font-weight:800;color:var(--tx);margin-left:auto;">${teamOk}</span></div>
        <div style="display:flex;align-items:center;gap:5px;"><span style="width:8px;height:8px;border-radius:2px;background:var(--dg);"></span><span style="color:var(--tx2);">Difs</span><span style="font-weight:800;color:var(--dg);margin-left:auto;">${teamDiffs}</span></div>
        <div style="display:flex;align-items:center;gap:5px;"><span style="width:8px;height:8px;border-radius:2px;background:var(--wn);"></span><span style="color:var(--tx2);">Extras</span><span style="font-weight:800;color:var(--wn);margin-left:auto;">${teamExtras}</span></div>
      </div>
    </div>` : ''}

    <!-- KPIs operativos -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:10px;">
      <div style="background:rgba(0,0,0,.18);border:1px solid var(--bd);border-radius:8px;padding:8px 6px;text-align:center;">
        <div style="font-family:var(--fh);font-size:16px;font-weight:800;color:var(--tx);line-height:1.1;">${teamInvs}</div>
        <div style="font-size:9px;color:var(--tx3);font-weight:700;text-transform:uppercase;letter-spacing:.04em;margin-top:3px;">Inventarios</div>
      </div>
      <div style="background:rgba(0,0,0,.18);border:1px solid var(--bd);border-radius:8px;padding:8px 6px;text-align:center;">
        <div style="font-family:var(--fh);font-size:16px;font-weight:800;color:var(--ac2);line-height:1.1;">${teamSpeed||'—'}</div>
        <div style="font-size:9px;color:var(--tx3);font-weight:700;text-transform:uppercase;letter-spacing:.04em;margin-top:3px;">Ubic/hora</div>
      </div>
      <div style="background:rgba(0,0,0,.18);border:1px solid var(--bd);border-radius:8px;padding:8px 6px;text-align:center;">
        <div style="font-family:var(--fh);font-size:16px;font-weight:800;color:var(--tx);line-height:1.1;">${teamMins>0?fmtMins(teamMins):'—'}</div>
        <div style="font-size:9px;color:var(--tx3);font-weight:700;text-transform:uppercase;letter-spacing:.04em;margin-top:3px;">Tiempo</div>
      </div>
      <div style="background:rgba(0,0,0,.18);border:1px solid var(--bd);border-radius:8px;padding:8px 6px;text-align:center;">
        <div style="font-family:var(--fh);font-size:16px;font-weight:800;color:var(--ac);line-height:1.1;">${activeOpsCount}<span style="font-size:11px;color:var(--tx3);">/${totalOpsCount}</span></div>
        <div style="font-size:9px;color:var(--tx3);font-weight:700;text-transform:uppercase;letter-spacing:.04em;margin-top:3px;">Activos</div>
      </div>
    </div>

    <!-- Distribución de operadores -->
    ${activeOpsCount>0 ? `
    <div style="background:rgba(0,0,0,.18);border:1px solid var(--bd);border-radius:10px;padding:10px 12px;">
      <div style="font-size:10px;color:var(--tx2);font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;">👥 Distribución del Equipo</div>
      <div style="display:flex;height:8px;background:var(--bd);border-radius:99px;overflow:hidden;gap:1px;">
        ${distExc>0?`<div style="flex:${distExc};background:var(--ac);"></div>`:''}
        ${distGood>0?`<div style="flex:${distGood};background:#22c55e;"></div>`:''}
        ${distReg>0?`<div style="flex:${distReg};background:var(--wn);"></div>`:''}
        ${distLow>0?`<div style="flex:${distLow};background:var(--dg);"></div>`:''}
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin-top:8px;font-size:10px;text-align:center;">
        <div><div style="font-family:var(--fh);font-weight:800;color:var(--ac);">${distExc}</div><div style="color:var(--tx3);font-size:9px;">🏆 Excelente</div></div>
        <div><div style="font-family:var(--fh);font-weight:800;color:#22c55e;">${distGood}</div><div style="color:var(--tx3);font-size:9px;">✅ Bueno</div></div>
        <div><div style="font-family:var(--fh);font-weight:800;color:var(--wn);">${distReg}</div><div style="color:var(--tx3);font-size:9px;">⚠️ Regular</div></div>
        <div><div style="font-family:var(--fh);font-weight:800;color:var(--dg);">${distLow}</div><div style="color:var(--tx3);font-size:9px;">🔴 Bajo</div></div>
      </div>
    </div>` : ''}
  </div>` +

  // ── Tarjeta por operador
  scores.map((s,i)=>{
    const medals=['🥇','🥈','🥉'];
    const noActivity = s.score===null;
    const medal = noActivity ? '—' : (i<3 ? medals[i] : `#${i+1}`);
    const sc = noActivity ? 'var(--tx3)' : scoreColor(s.score);
    const assignBar = s.assignsTotal>0 ? Math.round(s.assignsVerified/s.assignsTotal*100) : null;
    const taskBar = s.tasksTotal>0 ? Math.round(s.tasksDone/s.tasksTotal*100) : null;

    const positivos = [];
    const negativos = [];
    // Precisión: solo opina si hay datos evaluables en el período
    if(s.hasPrecisionData){
      if(s.accuracy>=95) positivos.push('✅ Precisión excelente ('+s.accuracy+'%)');
      else if(s.accuracy>=80) positivos.push('👍 Buena precisión ('+s.accuracy+'%)');
      else negativos.push('🔴 Precisión baja ('+s.accuracy+'%) — '+s.totalDiff+' difs');
    }
    if(s.invs>0){
      if(s.locsPerHour>=3) positivos.push('⚡ Alta velocidad ('+s.locsPerHour+' ubic/h)');
      else if(s.locsPerHour<1) negativos.push('🐢 Velocidad baja ('+s.locsPerHour+' ubic/h)');
    }
    if(s.totalExtra>0) positivos.push('🔍 '+s.totalExtra+' extras encontrados');
    if(assignBar!==null && assignBar===100) positivos.push('📍 Asignaciones 100% completas');
    else if(assignBar!==null && assignBar<50) negativos.push('📍 Asignaciones incompletas ('+assignBar+'%)');
    if(taskBar!==null && taskBar===100) positivos.push('✔️ Todas las tareas completadas');
    else if(taskBar!==null && s.tasksPending>0) negativos.push('📌 '+s.tasksPending+' tarea'+( s.tasksPending!==1?'s':'')+' pendiente'+(s.tasksPending!==1?'s':''));
    // ❌ "Sin catálogo asignado" YA NO va en negativos — el operador no asigna su propio catálogo.
    if(s.totalMissingLocs>0) negativos.push(`🚫 ${s.totalMissingLocs} ubic. del catálogo sin contar al cerrar`);
    if(s.totalMissingRefs>0) negativos.push(`⏭ ${s.totalMissingRefs} referencia${s.totalMissingRefs!==1?'s':''} sin contar al cerrar`);
    if(s.vindicatedMissingLocs>0) positivos.push(`🛡 ${s.vindicatedMissingLocs} ubic. sin contar justificada${s.vindicatedMissingLocs!==1?'s':''} por admin`);
    if(s.vindicatedMissingRefs>0) positivos.push(`🛡 ${s.vindicatedMissingRefs} ref. sin contar justificada${s.vindicatedMissingRefs!==1?'s':''} por admin`);
    if(s.catCovPct!==null && s.catCovPct===100) positivos.push('📋 Catálogo cubierto al 100%');
    else if(s.catCovPct!==null && s.catCovPct<70 && s.invs>0) negativos.push(`📋 Solo contó ${s.catCovPct}% del catálogo`);
    // "Sin inventarios" es informativo, no negativo cuando no hay actividad en el período

    const scoreDisplay = noActivity ? 'N/A' : s.score;
    const scoreLbl = noActivity ? 'Sin actividad' : scoreLabel(s.score);
    const scoreEmj = noActivity ? '⏸' : scoreEmoji(s.score);

    return `<div class="perf-card" style="border-left:3px solid ${sc};">
      <!-- Header -->
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="font-size:20px;flex-shrink:0;">${medal}</div>
        <div style="flex:1;min-width:0;">
          <div style="font-family:var(--fh);font-weight:800;font-size:15px;">${s.u.name||s.uname}</div>
          <div style="font-size:11px;color:var(--tx2);">@${s.uname}${noActivity?' · sin actividad este período':''}</div>
        </div>
        <div style="text-align:center;flex-shrink:0;">
          <div style="font-family:var(--fh);font-size:28px;font-weight:900;color:${sc};line-height:1;">${scoreDisplay}</div>
          <div style="font-size:10px;font-weight:700;color:${sc};">${scoreLbl} ${scoreEmj}</div>
        </div>
      </div>

      <!-- Barra de score -->
      <div style="height:6px;background:var(--sf2);border-radius:3px;overflow:hidden;margin-bottom:12px;">
        <div style="height:100%;width:${noActivity?0:s.score}%;background:${sc};border-radius:3px;transition:width .6s;"></div>
      </div>

      <!-- KPIs principales -->
      <div class="st4" style="margin-bottom:12px;">
        <div class="st4-c"><div class="st4-n">${s.invs}</div><div class="st4-l">Inventarios</div></div>
        <div class="st4-c"><div class="st4-n">${s.totalLocs}</div><div class="st4-l">Ubicaciones</div></div>
        <div class="st4-c"><div class="st4-n" style="color:${!s.hasPrecisionData?'var(--tx3)':s.accuracy>=95?'var(--ac)':s.accuracy>=80?'var(--wn)':'var(--dg)'};">${s.hasPrecisionData?s.accuracy+'%':'—'}</div><div class="st4-l">Precisión</div></div>
        <div class="st4-c"><div class="st4-n" style="color:var(--ac2);">${s.invs>0?s.locsPerHour:'—'}</div><div class="st4-l">Ubic/hora</div></div>
      </div>

      <!-- Novedades -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:12px;">
        <div style="background:var(--sf2);border-radius:8px;padding:8px 10px;display:flex;align-items:center;gap:8px;">
          <span style="font-size:16px;">🔴</span>
          <div><div style="font-family:var(--fh);font-weight:800;font-size:16px;color:var(--dg);">${s.totalDiff}</div><div style="font-size:10px;color:var(--tx2);">Diferencias</div></div>
        </div>
        <div style="background:var(--sf2);border-radius:8px;padding:8px 10px;display:flex;align-items:center;gap:8px;">
          <span style="font-size:16px;">🟡</span>
          <div><div style="font-family:var(--fh);font-weight:800;font-size:16px;color:var(--wn);">${s.totalExtra}</div><div style="font-size:10px;color:var(--tx2);">Extras</div></div>
        </div>
      </div>

      <!-- Asignaciones -->
      ${s.assignsTotal>0 ? `<div style="margin-bottom:10px;">
        <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--tx2);margin-bottom:4px;">
          <span>📍 Asignaciones verificadas</span>
          <span style="font-weight:700;color:${assignBar===100?'var(--ac)':assignBar>=50?'var(--wn)':'var(--dg)'};">${s.assignsVerified}/${s.assignsTotal}</span>
        </div>
        <div style="height:5px;background:var(--sf2);border-radius:3px;overflow:hidden;">
          <div style="height:100%;width:${assignBar}%;background:${assignBar===100?'var(--ac)':assignBar>=50?'var(--wn)':'var(--dg)'};border-radius:3px;"></div>
        </div>
      </div>` : '<div style="font-size:11px;color:var(--tx3);margin-bottom:10px;">📍 Sin asignaciones este período</div>'}

      <!-- Tareas -->
      ${s.tasksTotal>0 ? `<div style="margin-bottom:10px;">
        <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--tx2);margin-bottom:4px;">
          <span>📌 Tareas completadas</span>
          <span style="font-weight:700;color:${taskBar===100?'var(--ac)':taskBar>=50?'var(--wn)':'var(--dg)'};">${s.tasksDone}/${s.tasksTotal}</span>
        </div>
        <div style="height:5px;background:var(--sf2);border-radius:3px;overflow:hidden;">
          <div style="height:100%;width:${taskBar}%;background:${taskBar===100?'var(--ac)':taskBar>=50?'var(--wn)':'var(--dg)'};border-radius:3px;"></div>
        </div>
      </div>` : '<div style="font-size:11px;color:var(--tx3);margin-bottom:10px;">📌 Sin tareas asignadas</div>'}

      <!-- Veredictos de novedades -->
      ${(s.novOk > 0 || s.novNo > 0) ? `<div style="margin-bottom:12px;">
        <div style="font-size:11px;color:var(--tx2);margin-bottom:6px;font-weight:600;">🏅 Veredictos de novedades</div>
        <div style="display:flex;gap:8px;">
          <div style="flex:1;background:rgba(0,229,160,.08);border:1.5px solid rgba(0,229,160,.25);border-radius:8px;padding:7px 10px;text-align:center;">
            <div style="font-family:var(--fh);font-size:18px;font-weight:900;color:var(--ac);">+${s.novOk}</div>
            <div style="font-size:10px;color:var(--tx2);margin-top:1px;">✅ Tiene razón</div>
          </div>
          <div style="flex:1;background:rgba(239,68,68,.08);border:1.5px solid rgba(239,68,68,.2);border-radius:8px;padding:7px 10px;text-align:center;">
            <div style="font-family:var(--fh);font-size:18px;font-weight:900;color:var(--dg);">-${s.novNo}</div>
            <div style="font-size:10px;color:var(--tx2);margin-top:1px;">⚠️ Sin razón</div>
          </div>
          <div style="flex:1;background:var(--sf2);border:1.5px solid var(--bd);border-radius:8px;padding:7px 10px;text-align:center;">
            <div style="font-family:var(--fh);font-size:18px;font-weight:900;color:${s.breakdown.sVerdicts>=0?'var(--ac)':'var(--dg)'};">${s.breakdown.sVerdicts>=0?'+':''}${s.breakdown.sVerdicts}</div>
            <div style="font-size:10px;color:var(--tx2);margin-top:1px;">pts netos</div>
          </div>
        </div>
      </div>` : '<div style="font-size:11px;color:var(--tx3);margin-bottom:10px;">🏅 Sin novedades evaluadas aún</div>'}

      <!-- Cobertura de bodega: removida del rendimiento individual.
           El operador solo cuenta lo asignado; la cobertura justa se mide
           contra su catálogo asignado (ver bloque siguiente). -->


      <!-- Catálogo + cobertura -->
      <div style="margin-bottom:12px;">
        <div style="font-size:11px;margin-bottom:6px;">
          ${s.hasCatalog
            ? '<span style="color:var(--ac);">✅ Catálogo asignado</span>'
            : '<span style="color:var(--dg);">❌ Sin catálogo asignado</span>'}
        </div>
        ${s.catTotal>0 ? `<div>
          <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--tx2);margin-bottom:4px;">
            <span>📋 Cobertura del catálogo</span>
            <span style="font-weight:700;color:${s.catCovPct===100?'var(--ac)':s.catCovPct>=70?'var(--wn)':'var(--dg)'};">${s.catCounted}/${s.catTotal} ubic. (${s.catCovPct}%)</span>
          </div>
          <div style="height:5px;background:var(--sf2);border-radius:3px;overflow:hidden;">
            <div style="height:100%;width:${s.catCovPct}%;background:${s.catCovPct===100?'var(--ac)':s.catCovPct>=70?'var(--wn)':'var(--dg)'};border-radius:3px;"></div>
          </div>
        </div>` : ''}
        ${s.totalMissingLocs>0 ? `<div style="margin-top:6px;background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.2);border-radius:6px;padding:6px 8px;font-size:11px;color:var(--dg);">
          🚫 ${s.totalMissingLocs} ubicación${s.totalMissingLocs!==1?'es':''} del catálogo cerrada${s.totalMissingLocs!==1?'s':''} sin contar — penalización en score
        </div>` : s.catTotal>0 && s.catCovPct===100 ? `<div style="margin-top:6px;font-size:11px;color:var(--ac);">✅ Catálogo contado completamente</div>` : ''}
      </div>

      <!-- Lo que hizo bien / mal -->
      ${positivos.length>0 ? `<div style="background:rgba(0,229,160,.07);border:1px solid rgba(0,229,160,.2);border-radius:8px;padding:8px 10px;margin-bottom:6px;">
        <div style="font-size:10px;font-weight:700;color:var(--ac);margin-bottom:4px;">A FAVOR</div>
        ${positivos.map(p=>`<div style="font-size:11px;color:var(--tx);margin-bottom:2px;">${p}</div>`).join('')}
      </div>` : ''}
      ${negativos.length>0 ? `<div style="background:rgba(239,68,68,.07);border:1px solid rgba(239,68,68,.2);border-radius:8px;padding:8px 10px;">
        <div style="font-size:10px;font-weight:700;color:var(--dg);margin-bottom:4px;">EN CONTRA</div>
        ${negativos.map(n=>`<div style="font-size:11px;color:var(--tx);margin-bottom:2px;">${n}</div>`).join('')}
      </div>` : ''}

      <!-- Desglose score -->
      <details style="margin-top:10px;">
        <summary style="font-size:11px;color:var(--tx2);cursor:pointer;list-style:none;">▸ Ver desglose del score</summary>
        <div style="margin-top:8px;font-size:11px;">
          <div style="font-size:10px;color:var(--tx3);margin-bottom:6px;">Solo se evalúan las dimensiones con datos en el período. Las marcadas con "—" no aplican.</div>
          ${[
            ['Precisión (35pts)', s.breakdown.sPrecision, 35, 'var(--ac)'],
            ['Velocidad (10pts)', s.breakdown.sSpeed, 10, 'var(--ac2)'],
            ['Cob. catálogo (20pts)', s.breakdown.sCatCov, 20, 'var(--ac)'],
            ['Asignaciones (15pts)', s.breakdown.sAssigns, 15, 'var(--pu)'],
            ['Tareas (10pts)', s.breakdown.sTasks, 10, 'var(--wn)'],
            ['Extras (5pts)', s.breakdown.sExtras, 5, '#f59e0b'],
            ['Ubic. no contadas', s.breakdown.sMissingLocs, 15, 'var(--dg)'],
            ['Novedades (±10pts)', s.breakdown.sVerdicts, 10, (s.breakdown.sVerdicts||0)>=0?'var(--ac)':'var(--dg)'],
          ].map(([lbl,val,max,col])=>{
            const isNull = val===null || val===undefined;
            const numVal = isNull ? 0 : Math.round(val);
            return `
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:5px;${isNull?'opacity:.45;':''}">
              <div style="width:100px;color:var(--tx2);">${lbl}</div>
              <div style="flex:1;height:4px;background:var(--sf2);border-radius:2px;overflow:hidden;">
                <div style="height:100%;width:${isNull?0:Math.min(100,Math.round(Math.abs(numVal)/max*100))}%;background:${col};border-radius:2px;"></div>
              </div>
              <div style="width:32px;text-align:right;font-weight:700;color:${isNull?'var(--tx3)':col};">${isNull?'—':numVal}</div>
            </div>`;
          }).join('')}
        </div>
      </details>
    </div>`;
  }).join('');
}


function renderDashTimeline(el,db,allInvs,period){
  const days=[];
  for(let i=13;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);days.push(toDS(d));}
  const max=Math.max(1,...days.map(d=>allInvs.filter(i=>i.date===d).length));

  // KPIs del período
  const ops=Object.entries(db.users||{}).filter(([uname,u])=>u.role==='operator' && !isHiddenUser(uname,u));
  const scores=ops.map(([uname])=>calcOpScore(uname,db,allInvs,period));
  const totalTasksDone=scores.reduce((a,s)=>a+s.tasksDone,0);
  const totalTasksPending=scores.reduce((a,s)=>a+s.tasksPending,0);
  const totalAssigns=scores.reduce((a,s)=>a+s.assignsTotal,0);
  const totalAssignsVerif=scores.reduce((a,s)=>a+s.assignsVerified,0);
  const masterTotal=Object.keys(db.masterLocs||{}).length;
  const countedSet=new Set();
  const [pyr,pmo,pq]=period.split(/[-Q]/);
  // Fuente 1: inventarios del período (usando inv.date que es YYYY-MM-DD, más fiable que startTime)
  allInvs.forEach(inv=>{
    if(!inv.date) return;
    const parts=inv.date.split('-');
    const iy=parseInt(parts[0]),im=parseInt(parts[1]),id=parseInt(parts[2]);
    if(iy===parseInt(pyr)&&im===parseInt(pmo)&&(id<=15?1:2)===parseInt(pq)){
      inv.locations.forEach(loc=>{ if(!loc.isMissingLoc) countedSet.add(loc.code); });
    }
  });
  // Fuente 2: locStatus marcadas por el admin en este período (counted o empty)
  const prefix=period+'_';
  Object.entries(db.locStatus||{}).forEach(([k,v])=>{
    if(k.startsWith(prefix)&&(v?.status==='counted'||v?.status==='empty')){
      countedSet.add(k.slice(prefix.length));
    }
  });
  const notCounted=masterTotal>0?masterTotal-countedSet.size:0;

  el.innerHTML=`
  <!-- Gráfico 14 días -->
  <div style="background:var(--sf);border:1px solid var(--bd);border-radius:var(--rs);padding:14px;margin-bottom:12px;">
    <div style="font-size:11px;font-weight:700;color:var(--tx2);margin-bottom:10px;">📅 Inventarios completados — últimos 14 días</div>
    <div style="display:flex;align-items:flex-end;gap:3px;height:80px;">
    ${days.map(d=>{
      const cnt=allInvs.filter(i=>i.date===d).length;
      const h=max>0?Math.max(4,Math.round(cnt/max*72)):4;
      const isToday=d===toDS(new Date());
      return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;">
        ${cnt>0?`<div style="font-size:8px;color:var(--ac);font-weight:700;">${cnt}</div>`:'<div style="font-size:8px;color:transparent;">0</div>'}
        <div style="width:100%;height:${h}px;background:${isToday?'var(--ac)':'var(--ac2)'};border-radius:3px 3px 0 0;opacity:${cnt?1:0.15};"></div>
      </div>`;
    }).join('')}
    </div>
    <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--tx3);margin-top:4px;">
      <span>${new Date(days[0]+'T12:00').toLocaleDateString('es-CO',{day:'2-digit',month:'short'})}</span>
      <span>Hoy</span>
    </div>
  </div>

  <!-- Estado del período -->
  <div style="background:var(--sf);border:1px solid var(--bd);border-radius:var(--rs);padding:14px;margin-bottom:12px;">
    <div style="font-size:11px;font-weight:700;color:var(--tx2);margin-bottom:10px;">🗓 Estado del período ${period}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
      <div style="background:var(--sf2);border-radius:8px;padding:10px;text-align:center;">
        <div style="font-family:var(--fh);font-size:20px;font-weight:800;color:${totalTasksDone>0?'var(--ac)':'var(--tx2)'};">${totalTasksDone}</div>
        <div style="font-size:10px;color:var(--tx2);">Tareas completadas</div>
      </div>
      <div style="background:var(--sf2);border-radius:8px;padding:10px;text-align:center;">
        <div style="font-family:var(--fh);font-size:20px;font-weight:800;color:${totalTasksPending>0?'var(--wn)':'var(--ac)'};">${totalTasksPending}</div>
        <div style="font-size:10px;color:var(--tx2);">Tareas pendientes</div>
      </div>
      <div style="background:var(--sf2);border-radius:8px;padding:10px;text-align:center;">
        <div style="font-family:var(--fh);font-size:20px;font-weight:800;color:var(--ac2);">${totalAssignsVerif}/${totalAssigns}</div>
        <div style="font-size:10px;color:var(--tx2);">Asignaciones verificadas</div>
      </div>
      <div style="background:var(--sf2);border-radius:8px;padding:10px;text-align:center;">
        <div style="font-family:var(--fh);font-size:20px;font-weight:800;color:${notCounted>0?'var(--dg)':'var(--ac)'};">${notCounted}</div>
        <div style="font-size:10px;color:var(--tx2);">Ubic. sin contar</div>
      </div>
    </div>
    ${masterTotal>0?`<div style="margin-top:10px;">
      <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--tx2);margin-bottom:4px;">
        <span>🏭 Cobertura global de bodega</span>
        <span style="font-weight:700;">${countedSet.size}/${masterTotal} (${Math.round(countedSet.size/masterTotal*100)}%)</span>
      </div>
      <div style="height:6px;background:var(--sf2);border-radius:3px;overflow:hidden;">
        <div style="height:100%;width:${Math.round(countedSet.size/masterTotal*100)}%;background:linear-gradient(90deg,var(--ac),var(--ac2));border-radius:3px;"></div>
      </div>
    </div>`:''}
  </div>

  <!-- Actividad por operador hoy -->
  <div style="background:var(--sf);border:1px solid var(--bd);border-radius:var(--rs);padding:14px;">
    <div style="font-size:11px;font-weight:700;color:var(--tx2);margin-bottom:10px;">👥 Operadores — Hoy</div>
  ${ops.map(([uname,u])=>{
    const today=toDS(new Date());
    const todayInvs=allInvs.filter(i=>i.username===uname&&i.date===today);
    const locs=todayInvs.reduce((a,v)=>a+v.locations.filter(l=>!l.isMissingLoc).length,0);
    const active=todayInvs.some(i=>!i.endTime);
    const sc=scores.find(s=>s.uname===uname);
    return `<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--bd);">
      <div style="width:8px;height:8px;border-radius:50%;background:${active?'var(--ac)':'var(--tx3)'};flex-shrink:0;"></div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:600;">${u.name}</div>
        <div style="font-size:11px;color:var(--tx2);">${todayInvs.length} inv · ${locs} ubic. hoy</div>
      </div>
      <div style="text-align:right;">
        <div style="font-family:var(--fh);font-weight:800;font-size:15px;color:${scoreColor(sc?.score||0)};">${sc?.score||0} pts</div>
        ${active?'<span class="badge bo" style="font-size:9px;">● Activo</span>':''}
      </div>
    </div>`;
  }).join('')}
  </div>`;
}

/* ══════════════════════════════════════════════════════
   📊 RENDIMIENTO PERSONAL (Operador)
══════════════════════════════════════════════════════ */
let _opStatsFilt='week';
function filtOpStats(f,el){
  _opStatsFilt=f;
  document.querySelectorAll('#screen-op-stats .tab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  renderOpStats(f);
}
function renderOpStats(filt){
  _opStatsFilt=filt||_opStatsFilt;
  const el=document.getElementById('op-stats-content');
  if(!el) return;
  const now=new Date();
  const db=getDB();
  let invs=getUserInvs(CUR.username).filter(i=>i.endTime);
  let allInvsForPeriod=getUserInvs(CUR.username).filter(i=>i.endTime);
  if(filt==='week'||_opStatsFilt==='week'){invs=invs.filter(i=>sameWeek(new Date(i.startTime),now));}
  else if(filt==='month'||_opStatsFilt==='month'){invs=invs.filter(i=>{const d=new Date(i.startTime);return d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear();});}
  if(!invs.length){el.innerHTML='<div class="es"><div class="ei">📊</div><p>Sin inventarios en este período.<br>Completa uno para ver tus estadísticas.</p></div>';return;}

  // ── Métricas de inventario ──
  const totalLocs=invs.reduce((a,v)=>a+v.locations.filter(l=>!l.isMissingLoc).length,0);
  const totalRefs=invs.reduce((a,v)=>a+v.locations.filter(l=>!l.isMissingLoc).reduce((b,l)=>b+Object.values(l.items).filter(i=>!i.isExtra).length,0),0);
  const totalOk=invs.reduce((a,v)=>a+v.locations.filter(l=>!l.isMissingLoc).reduce((b,l)=>b+Object.values(l.items).filter(i=>i.status==='ok').length,0),0);
  const totalDiff=invs.reduce((a,v)=>a+v.locations.filter(l=>!l.isMissingLoc).reduce((b,l)=>b+Object.values(l.items).filter(i=>i.status==='diff').length,0),0);
  const totalExtra=invs.reduce((a,v)=>a+v.locations.filter(l=>!l.isMissingLoc).reduce((b,l)=>b+Object.values(l.items).filter(i=>i.isExtra).length,0),0);
  const totalMins=invs.reduce((a,v)=>a+((new Date(v.endTime)-new Date(v.startTime))/60000),0);
  const avgMinsPerInv=invs.length>0?Math.round(totalMins/invs.length):0;
  const locsPerHour=totalMins>0?Math.round(totalLocs/(totalMins/60)*10)/10:0;
  const refsPerHour=totalMins>0?Math.round(totalRefs/(totalMins/60)):0;
  const accuracy=calcPrecision(invs, db.novedadVerdicts||{});
  const accColor=accuracy>=95?'var(--ac)':accuracy>=80?'var(--wn)':'var(--dg)';
  const accEmoji=accuracy>=95?'🟢':accuracy>=80?'🟡':'🔴';

  // ── Tareas del operador ──
  const myTasks=(db.tasks||[]).filter(t=>t.assignedTo===CUR.username);
  const myTasksDone=myTasks.filter(t=>t.status==='done');
  const myTasksPend=myTasks.filter(t=>t.status!=='done');
  const taskRate=myTasks.length>0?Math.round(myTasksDone.length/myTasks.length*100):0;

  // ── Streak: días consecutivos ──
  const days=[...new Set(invs.map(i=>i.date))].sort();
  let streak=0,sd=new Date();
  while(true){const ds=toDS(sd);if(days.includes(ds)){streak++;sd.setDate(sd.getDate()-1);}else break;}

  // ── Mejor día (más inventarios) ──
  const byDay={};
  invs.forEach(i=>{
    if(!byDay[i.date]) byDay[i.date]={count:0,locs:0,refs:0};
    byDay[i.date].count++;
    byDay[i.date].locs+=i.locations.filter(l=>!l.isMissingLoc).length;
    byDay[i.date].refs+=i.locations.filter(l=>!l.isMissingLoc).reduce((b,l)=>b+Object.values(l.items).filter(x=>!x.isExtra).length,0);
  });
  const bestDay=Object.entries(byDay).sort((a,b)=>b[1].locs-a[1].locs)[0];
  const bestDayLbl=bestDay?new Date(bestDay[0]+'T12:00').toLocaleDateString('es-CO',{day:'2-digit',month:'short'}):null;

  // ── Actividad últimos 7 días (mini heatmap) ──
  const last7=[];
  for(let i=6;i>=0;i--){const d=new Date(now);d.setDate(d.getDate()-i);last7.push({ds:toDS(d),label:d.toLocaleDateString('es-CO',{weekday:'short'}).slice(0,2)});}
  const maxLocsDay=Math.max(1,...last7.map(d=>byDay[d.ds]?.locs||0));

  // ── Inventario activo ahora ──
  const activeInv=getUserInvs(CUR.username).find(i=>!i.endTime);
  const activeMinutes=activeInv?Math.round((now-new Date(activeInv.startTime))/60000):0;

  // ── Score general (0-100) ──
  const scoreAcc=accuracy;
  // Velocidad: referencia realista = 3 ubicaciones/hora como 100%
  const scoreSpeed=Math.min(100, Math.round(locsPerHour/3*100));
  const scoreTask=taskRate;
  const scoreStreak=Math.min(100,streak*14);
  const overallScore=Math.round((scoreAcc*0.4)+(scoreSpeed*0.3)+(scoreTask*0.2)+(scoreStreak*0.1));
  const scoreColor=overallScore>=80?'var(--ac)':overallScore>=60?'var(--wn)':'var(--dg)';
  const scoreLvl=overallScore>=90?'⭐ Élite':overallScore>=75?'🔥 Alto':overallScore>=55?'📈 Bueno':'🌱 En progreso';

  el.innerHTML=`
  <!-- ── SCORE CARD ── -->
  <div style="background:linear-gradient(135deg,rgba(0,229,160,.1),rgba(0,148,255,.07),var(--sf));border:1px solid rgba(0,229,160,.25);border-radius:var(--r);padding:20px;margin-bottom:10px;position:relative;overflow:hidden;">
    <div style="position:absolute;top:-20px;right:-20px;width:100px;height:100px;border-radius:50%;background:radial-gradient(circle,rgba(0,229,160,.12),transparent 70%);pointer-events:none;"></div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
      <div>
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--tx2);margin-bottom:4px;">Score de Rendimiento</div>
        <div style="font-family:var(--fh);font-size:42px;font-weight:800;color:${scoreColor};line-height:1;">${overallScore}</div>
        <div style="font-size:13px;color:var(--tx2);margin-top:3px;">${scoreLvl}</div>
      </div>
      <div style="text-align:right;">
        <div style="font-family:var(--fh);font-size:28px;font-weight:800;color:${accColor};">${accuracy}%</div>
        <div style="font-size:11px;color:var(--tx2);">Precisión SAP</div>
        <div style="margin-top:6px;font-size:20px;">${streak>=5?'🔥':streak>=3?'✨':streak>=1?'📅':'—'}</div>
        <div style="font-size:10px;color:var(--tx2);">${streak} día${streak!==1?'s':''} racha</div>
      </div>
    </div>
    <!-- Barras de componentes del score -->
    <div style="display:flex;flex-direction:column;gap:6px;">
      <div style="display:flex;align-items:center;gap:8px;">
        <div style="font-size:10px;color:var(--tx2);width:60px;text-align:right;">Precisión</div>
        <div style="flex:1;height:5px;background:var(--sf3);border-radius:3px;overflow:hidden;"><div style="height:100%;width:${scoreAcc}%;background:${accColor};border-radius:3px;transition:width .7s;"></div></div>
        <div style="font-size:10px;font-weight:700;color:${accColor};width:32px;">${scoreAcc}%</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <div style="font-size:10px;color:var(--tx2);width:60px;text-align:right;">Velocidad</div>
        <div style="flex:1;height:5px;background:var(--sf3);border-radius:3px;overflow:hidden;"><div style="height:100%;width:${Math.round(scoreSpeed)}%;background:var(--ac2);border-radius:3px;transition:width .7s;"></div></div>
        <div style="font-size:10px;font-weight:700;color:var(--ac2);width:32px;">${Math.round(scoreSpeed)}%</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <div style="font-size:10px;color:var(--tx2);width:60px;text-align:right;">Tareas</div>
        <div style="flex:1;height:5px;background:var(--sf3);border-radius:3px;overflow:hidden;"><div style="height:100%;width:${taskRate}%;background:var(--pu);border-radius:3px;transition:width .7s;"></div></div>
        <div style="font-size:10px;font-weight:700;color:var(--pu);width:32px;">${taskRate}%</div>
      </div>
    </div>
  </div>

  <!-- ── INVENTARIO ACTIVO ── -->
  ${activeInv?`<div style="background:rgba(0,229,160,.07);border:1.5px solid rgba(0,229,160,.35);border-radius:var(--rs);padding:12px 14px;margin-bottom:10px;display:flex;align-items:center;justify-content:space-between;">
    <div style="display:flex;align-items:center;gap:8px;">
      <div style="width:8px;height:8px;border-radius:50%;background:var(--ac);box-shadow:0 0 6px var(--ac);animation:pulse-dot 1.5s infinite;flex-shrink:0;"></div>
      <div>
        <div style="font-size:13px;font-weight:700;color:var(--ac);">Inventario en curso</div>
        <div style="font-size:11px;color:var(--tx2);margin-top:1px;">${activeInv.locations.length} ubic · ${activeMinutes}m activo</div>
      </div>
    </div>
    <div style="font-family:var(--fh);font-size:13px;font-weight:800;color:var(--ac);">${activeInv.locations.length}</div>
  </div>`:''}

  <!-- ── KPI GRID ── -->
  <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:10px;">
    <div style="background:var(--sf);border:1px solid var(--bd);border-radius:var(--rs);padding:14px;">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--tx2);margin-bottom:8px;">📦 Conteo</div>
      <div style="display:flex;flex-direction:column;gap:5px;">
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;color:var(--tx2);">Inventarios</span><span style="font-family:var(--fh);font-weight:800;font-size:15px;">${invs.length}</span></div>
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;color:var(--tx2);">Ubicaciones</span><span style="font-family:var(--fh);font-weight:800;font-size:15px;">${totalLocs}</span></div>
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;color:var(--tx2);">Referencias</span><span style="font-family:var(--fh);font-weight:800;font-size:15px;">${totalRefs}</span></div>
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;color:var(--tx2);">Extras</span><span style="font-family:var(--fh);font-weight:800;font-size:15px;color:var(--ac2);">${totalExtra}</span></div>
      </div>
    </div>
    <div style="background:var(--sf);border:1px solid var(--bd);border-radius:var(--rs);padding:14px;">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--tx2);margin-bottom:8px;">⚡ Velocidad</div>
      <div style="display:flex;flex-direction:column;gap:5px;">
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;color:var(--tx2);">Ubic/hora</span><span style="font-family:var(--fh);font-weight:800;font-size:15px;color:var(--ac2);">${locsPerHour}</span></div>
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;color:var(--tx2);">Refs/hora</span><span style="font-family:var(--fh);font-weight:800;font-size:15px;color:var(--ac2);">${refsPerHour}</span></div>
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;color:var(--tx2);">Prom/inv</span><span style="font-family:var(--fh);font-weight:800;font-size:15px;">${avgMinsPerInv}m</span></div>
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;color:var(--tx2);">Tiempo total</span><span style="font-family:var(--fh);font-weight:800;font-size:15px;">${Math.floor(totalMins/60)}h${Math.round(totalMins%60)}m</span></div>
      </div>
    </div>
  </div>

  <!-- ── DIFERENCIAS ── -->
  <div style="background:var(--sf);border:1px solid var(--bd);border-radius:var(--rs);padding:14px;margin-bottom:10px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--tx2);">🎯 Calidad de conteo</div>
      <div style="font-size:11px;font-weight:700;color:${accColor};">${accEmoji} ${accuracy}%</div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;text-align:center;">
      <div style="background:rgba(0,229,160,.08);border-radius:9px;padding:10px 6px;"><div style="font-family:var(--fh);font-size:18px;font-weight:800;color:var(--ac);">${totalOk}</div><div style="font-size:10px;color:var(--tx2);margin-top:2px;">Correctas</div></div>
      <div style="background:rgba(255,77,109,.08);border-radius:9px;padding:10px 6px;"><div style="font-family:var(--fh);font-size:18px;font-weight:800;color:var(--dg);">${totalDiff}</div><div style="font-size:10px;color:var(--tx2);margin-top:2px;">Diferencias</div></div>
      <div style="background:rgba(0,148,255,.08);border-radius:9px;padding:10px 6px;"><div style="font-family:var(--fh);font-size:18px;font-weight:800;color:var(--ac2);">${totalExtra}</div><div style="font-size:10px;color:var(--tx2);margin-top:2px;">Extras</div></div>
    </div>
    ${totalRefs>0?`<div style="margin-top:10px;">
      <div style="height:6px;background:var(--sf2);border-radius:3px;overflow:hidden;display:flex;">
        <div style="height:100%;width:${Math.round(totalOk/totalRefs*100)}%;background:var(--ac);border-radius:3px 0 0 3px;"></div>
        <div style="height:100%;width:${Math.round(totalDiff/totalRefs*100)}%;background:var(--dg);"></div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:4px;font-size:10px;color:var(--tx3);">
        <span>${Math.round(totalOk/totalRefs*100)}% OK</span><span>${Math.round(totalDiff/totalRefs*100)}% dif</span>
      </div>
    </div>`:''}
  </div>

  <!-- ── ACTIVIDAD 7 DÍAS ── -->
  <div style="background:var(--sf);border:1px solid var(--bd);border-radius:var(--rs);padding:14px;margin-bottom:10px;">
    <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--tx2);margin-bottom:12px;">📅 Actividad últimos 7 días</div>
    <div style="display:flex;align-items:flex-end;gap:5px;height:48px;">
      ${last7.map(d=>{
        const locs=byDay[d.ds]?.locs||0;
        const h=locs>0?Math.max(14,Math.round(locs/maxLocsDay*48)):4;
        const isToday=d.ds===toDS(now);
        const col=locs>0?(isToday?'var(--ac)':'rgba(0,229,160,.55)'):'var(--sf3)';
        return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;">
          <div style="width:100%;height:${h}px;background:${col};border-radius:4px;transition:height .5s;${isToday?'box-shadow:0 0 8px rgba(0,229,160,.4);':''}"></div>
          <div style="font-size:9px;color:${isToday?'var(--ac)':'var(--tx3)'};font-weight:${isToday?'800':'600'};text-transform:capitalize;">${d.label}</div>
          ${locs>0?`<div style="font-size:9px;color:var(--tx2);">${locs}</div>`:``}
        </div>`;
      }).join('')}
    </div>
  </div>

  <!-- ── TAREAS ── -->
  ${myTasks.length>0?`<div style="background:var(--sf);border:1px solid var(--bd);border-radius:var(--rs);padding:14px;margin-bottom:10px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--tx2);">📌 Mis Tareas</div>
      <div style="font-size:11px;font-weight:700;color:var(--pu);">${taskRate}% completado</div>
    </div>
    <div style="display:flex;gap:8px;margin-bottom:8px;">
      <div style="flex:1;background:rgba(0,229,160,.08);border-radius:9px;padding:10px;text-align:center;">
        <div style="font-family:var(--fh);font-size:20px;font-weight:800;color:var(--ac);">${myTasksDone.length}</div>
        <div style="font-size:10px;color:var(--tx2);margin-top:2px;">Completadas</div>
      </div>
      <div style="flex:1;background:rgba(255,182,39,.07);border-radius:9px;padding:10px;text-align:center;">
        <div style="font-family:var(--fh);font-size:20px;font-weight:800;color:var(--wn);">${myTasksPend.length}</div>
        <div style="font-size:10px;color:var(--tx2);margin-top:2px;">Pendientes</div>
      </div>
    </div>
    <div style="height:6px;background:var(--sf2);border-radius:3px;overflow:hidden;">
      <div style="height:100%;width:${taskRate}%;background:linear-gradient(90deg,var(--pu),var(--ac2));border-radius:3px;transition:width .6s;"></div>
    </div>
  </div>`:''}

  <!-- ── MEJOR DÍA + RACHA ── -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
    <div style="background:var(--sf);border:1px solid var(--bd);border-radius:var(--rs);padding:14px;text-align:center;">
      <div style="font-size:22px;margin-bottom:4px;">${streak>=5?'🔥':streak>=3?'✨':streak>=1?'📅':'💤'}</div>
      <div style="font-family:var(--fh);font-size:20px;font-weight:800;color:${streak>=3?'var(--wn)':'var(--tx)'};">${streak}</div>
      <div style="font-size:10px;color:var(--tx2);margin-top:2px;">día${streak!==1?'s':''} de racha</div>
    </div>
    <div style="background:var(--sf);border:1px solid var(--bd);border-radius:var(--rs);padding:14px;text-align:center;">
      <div style="font-size:22px;margin-bottom:4px;">🏆</div>
      ${bestDay?`<div style="font-family:var(--fh);font-size:15px;font-weight:800;color:var(--pu);">${bestDayLbl}</div><div style="font-size:10px;color:var(--tx2);margin-top:2px;">${bestDay[1].locs} ubic · mejor día</div>`:`<div style="font-size:13px;color:var(--tx2);">—</div>`}
    </div>
  </div>`;
}

/* ══════════════════════════════════════════════════════
   🖥 PANEL DE CONTROL EN VIVO — Real-time sync
══════════════════════════════════════════════════════ */
const _LCP_INTERVAL = 180; // 3 minutos
let _lcpCountdown = _LCP_INTERVAL;
let _lcpCountdownTimer = null;
let _lcpAutoTimer = null;

function lcpStartCountdown(){
  clearInterval(_lcpCountdownTimer);
  _lcpCountdown = _LCP_INTERVAL;
  _lcpUpdateCountdownUI();
  _lcpCountdownTimer = setInterval(()=>{
    _lcpCountdown--;
    _lcpUpdateCountdownUI();
    if(_lcpCountdown <= 0){
      _lcpCountdown = _LCP_INTERVAL;
      renderLiveControl();
    }
  }, 1000);
}

function _lcpUpdateCountdownUI(){
  const el = document.getElementById('lcp-cd-secs');
  const dot = document.getElementById('lcp-cd-dot');
  if(el){
    const m = Math.floor(_lcpCountdown / 60);
    const s = _lcpCountdown % 60;
    el.textContent = m > 0 ? `${m}:${String(s).padStart(2,'0')}` : `${s}`;
  }
  if(dot){
    const pct = _lcpCountdown / _LCP_INTERVAL;
    dot.style.opacity = 0.4 + 0.6 * pct;
  }
}

function lcpManualRefresh(){
  _lcpCountdown = _LCP_INTERVAL;
  _lcpUpdateCountdownUI();
  renderLiveControl();
}

function lcpStopCountdown(){
  clearInterval(_lcpCountdownTimer);
  _lcpCountdownTimer = null;
}

function renderLiveControl(){
  const el=document.getElementById('lcp-content');
  if(!el) return;
  const db=getDB();
  const allInvs=getAllInvs();
  const today=toDS(new Date());
  const now=new Date();
  const todayInvs=allInvs.filter(i=>i.date===today);
  const ops=Object.entries(db.users||{}).filter(([uname,u])=>u.role==='operator' && !isHiddenUser(uname,u));
  const subtitle=document.getElementById('lcp-subtitle');
  if(subtitle) subtitle.textContent=`${now.toLocaleTimeString('es-CO',{hour:'2-digit',minute:'2-digit'})} · ${ops.length} operador${ops.length!==1?'es':''}`;

  // Global KPIs
  const totalLocsHoy=todayInvs.reduce((a,v)=>a+v.locations.filter(l=>!l.isMissingLoc).length,0);
  const totalRefsHoy=todayInvs.reduce((a,v)=>a+v.locations.filter(l=>!l.isMissingLoc).reduce((b,l)=>b+Object.values(l.items).filter(i=>!i.isExtra).length,0),0);
  const totalDiffsHoy=todayInvs.reduce((a,v)=>a+v.locations.filter(l=>!l.isMissingLoc).reduce((b,l)=>b+Object.values(l.items).filter(i=>i.status==='diff').length,0),0);

  // Operadores activos: combina inventarios abiertos + registro Firebase (últimos 5 min)
  const activeUsers = _dbCache.activeUsers || {};
  const fiveMinAgo = new Date(Date.now() - 5*60*1000).toISOString();
  const twoMinAgo  = new Date(Date.now() - 2*60*1000).toISOString();
  const activosFB = Object.entries(activeUsers).filter(([,u])=> u.lastSeen && u.lastSeen > fiveMinAgo);
  const activosSet = new Set([
    ...ops.filter(([uname])=>todayInvs.some(i=>i.username===uname&&!i.endTime)).map(([u])=>u),
    ...activosFB.map(([u])=>u)
  ]);
  const activos = ops.filter(([uname])=>activosSet.has(uname));

  // Progress bodega
  const masterLocs=Object.values(db.masterLocs||{});
  const period=getCurrentPeriod();
  const periodInvs=allInvs.filter(inv=>{
    const [yr,mo,q]=period.split(/[-Q]/);
    const d=new Date(inv.startTime);
    return d.getFullYear()===parseInt(yr)&&d.getMonth()+1===parseInt(mo)&&(d.getDate()<=15?1:2)===parseInt(q);
  });
  const countedLocs=new Set();
  periodInvs.forEach(inv=>inv.locations.forEach(loc=>{if(!loc.isMissingLoc) countedLocs.add(loc.code);}));
  Object.entries(db.locStatus||{}).forEach(([k,v])=>{if(k.startsWith(period+'_')&&(v.status==='counted'||v.status==='empty'||v.status==='verified')) countedLocs.add(k.slice(period.length+1));});
  const pctBodega=masterLocs.length>0?Math.round(countedLocs.size/masterLocs.length*100):0;
  const pendingTasks=(db.tasks||[]).filter(t=>t.assignedTo&&t.status!=='done').length;

  el.innerHTML=`
  <!-- KPIs globales -->
  <div style="margin-bottom:8px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--ac);">📊 Resumen del turno — Hoy</div>
  <div class="lcp-grid">
    <div class="lcp-kpi"><div class="lcp-kpi-n" style="color:var(--ac);">${activos.length}</div><div class="lcp-kpi-l">En campo</div></div>
    <div class="lcp-kpi"><div class="lcp-kpi-n">${totalLocsHoy}</div><div class="lcp-kpi-l">Ubicaciones</div></div>
    <div class="lcp-kpi"><div class="lcp-kpi-n" style="color:var(--ac2);">${totalRefsHoy}</div><div class="lcp-kpi-l">Referencias</div></div>
    <div class="lcp-kpi"><div class="lcp-kpi-n" style="color:${totalDiffsHoy?'var(--dg)':'var(--ac)'};">${totalDiffsHoy}</div><div class="lcp-kpi-l">Diferencias</div></div>
  </div>

  <!-- Progreso bodega quincena -->
  <div class="lcp-global-prog" style="margin-top:0;padding-top:0;border-top:none;margin-bottom:12px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--tx2);">Progreso bodega — ${period}</div>
      <div style="font-family:var(--fh);font-size:13px;font-weight:800;color:${pctBodega>=80?'var(--ac)':pctBodega>=50?'var(--wn)':'var(--dg)'};">${pctBodega}%</div>
    </div>
    <div class="lcp-bar-wrap" style="height:8px;"><div class="lcp-bar-fill" style="width:${pctBodega}%;background:${pctBodega>=80?'var(--ac)':pctBodega>=50?'var(--wn)':'var(--dg)'};"></div></div>
    <div style="font-size:11px;color:var(--tx3);margin-top:3px;">${countedLocs.size} de ${masterLocs.length} ubicaciones contadas</div>
  </div>

  <!-- Tareas pendientes -->
  ${pendingTasks>0?`<div style="background:rgba(180,108,255,.08);border:1.5px solid rgba(180,108,255,.25);border-radius:var(--rs);padding:10px 14px;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;">
    <div style="font-size:13px;font-weight:600;color:var(--pu);">📌 ${pendingTasks} tarea${pendingTasks!==1?'s':''} pendiente${pendingTasks!==1?'s':''}</div>
    <button class="btn b-pu sm" style="width:auto;" onclick="navAdmin('a-tasks')">Ver tareas</button>
  </div>`:''}

  <!-- Estado en tiempo real por operador -->
  <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--tx2);margin-bottom:8px;">👷 Operadores en tiempo real</div>
  ${ops.length===0?'<div class="es"><div class="ei">👷</div><p>Sin operadores registrados</p></div>':
    ops.map(([uname,u])=>{
      const uInvs=todayInvs.filter(i=>i.username===uname);
      const activeEntry = (activeUsers)[uname];
      const isActiveFB = activeEntry && activeEntry.lastSeen && activeEntry.lastSeen > fiveMinAgo;
      const isActiveInv = uInvs.some(i=>!i.endTime);
      const isActive = isActiveInv || isActiveFB;
      const activeInv = uInvs.find(i=>!i.endTime);

      // ── Ubicación actual en tiempo real (de Firebase activeUsers)
      const fbCurrentLoc = activeEntry?.currentLoc || null;
      const fbLastSeen   = activeEntry?.lastSeen || null;
      // Si Firebase tiene registro muy reciente (<2min), usarlo; si no, usar el último de inventario
      const isFbFresh = fbLastSeen && fbLastSeen > twoMinAgo;
      const currentLoc = isFbFresh && fbCurrentLoc
        ? fbCurrentLoc
        : (activeInv?.cur?.code || activeInv?.locations?.slice(-1)[0]?.code || null);

      // ── Conteos del día
      // Inventarios ya cerrados y guardados en DB (sin el activo en curso)
      const allUserInvs = uInvs;
      // ── Fuente 1: localStorage — solo disponible si este usuario es el mismo que está logueado en este dispositivo
      let liveInv = null;
      const isSelf = (CUR && CUR.username === uname);
      if(isSelf){ try { liveInv = JSON.parse(localStorage.getItem('itp3_active_'+uname)); } catch(e){} }
      const liveIsToday = liveInv && liveInv.date === today && !liveInv.endTime;
      // Inventarios cerrados (excluir el activo si ya fue persistido para no duplicar)
      const closedInvs = liveIsToday
        ? allUserInvs.filter(i => i.id !== liveInv.id)
        : allUserInvs;
      let uLocs = closedInvs.reduce((a,v)=>a+v.locations.filter(l=>!l.isMissingLoc).length,0);
      let uRefs = closedInvs.reduce((a,v)=>a+v.locations.filter(l=>!l.isMissingLoc).reduce((b,l)=>b+Object.values(l.items||{}).filter(i=>!i.isExtra).length,0),0);
      let uDiffs= closedInvs.reduce((a,v)=>a+v.locations.filter(l=>!l.isMissingLoc).reduce((b,l)=>b+Object.values(l.items||{}).filter(i=>i.status==='diff').length,0),0);
      let uOk   = closedInvs.reduce((a,v)=>a+v.locations.filter(l=>!l.isMissingLoc).reduce((b,l)=>b+Object.values(l.items||{}).filter(i=>i.status==='ok').length,0),0);
      // Lista de códigos contados (para calcular catálogo)
      let liveCountedCodes = new Set(closedInvs.flatMap(v=>v.locations.filter(l=>!l.isMissingLoc).map(l=>l.code)));

      if(liveIsToday){
        // ── Fuente 1 activa: operador viendo su propio panel — usar localStorage (más fresco)
        const liveLocs = liveInv.locations.filter(l=>!l.isMissingLoc);
        uLocs  += liveLocs.length + (liveInv.cur ? 1 : 0);
        uRefs  += liveLocs.reduce((a,l)=>a+Object.values(l.items||{}).filter(i=>!i.isExtra).length,0)
                + (liveInv.cur ? Object.values(liveInv.cur.items||{}).filter(i=>!i.isExtra).length : 0);
        uDiffs += liveLocs.reduce((a,l)=>a+Object.values(l.items||{}).filter(i=>i.status==='diff').length,0)
                + (liveInv.cur ? Object.values(liveInv.cur.items||{}).filter(i=>i.status==='diff').length : 0);
        uOk    += liveLocs.reduce((a,l)=>a+Object.values(l.items||{}).filter(i=>i.status==='ok').length,0)
                + (liveInv.cur ? Object.values(liveInv.cur.items||{}).filter(i=>i.status==='ok').length : 0);
        liveLocs.forEach(l=>liveCountedCodes.add(l.code));
        if(liveInv.cur) liveCountedCodes.add(liveInv.cur.code);
      } else if(activeEntry && isActive) {
        // ── Fuente 2: Firebase — admin viendo otro operador (localStorage no disponible)
        uLocs  = Math.max(uLocs,  activeEntry.locsCount  || 0);
        uRefs  = Math.max(uRefs,  activeEntry.refsCount  || 0);
        uDiffs = Math.max(uDiffs, activeEntry.diffsCount || 0);
        // Códigos contados enviados por el operador a Firebase
        (activeEntry.countedLocsCodes || []).forEach(c=>liveCountedCodes.add(c));
      }
      const acc   = uRefs>0?Math.round(uOk/uRefs*100):null;
      const accColor = acc===null?'var(--tx3)':acc>=95?'var(--ac)':acc>=80?'var(--wn)':'var(--dg)';

      // ── Cuánto le falta según catálogo asignado
      const cat = getCatalog(uname);
      const catLocs = cat ? [...new Set(Object.values(cat.catalog||{}).flatMap(r=>(r.locs||[]).map(l=>l.loc)))] : [];
      const catTotal = catLocs.length;
      const catRefs  = cat ? Object.keys(cat.catalog||{}).length : 0;
      const countedLocsUser = liveCountedCodes;
      const catContadas = catLocs.filter(l=>countedLocsUser.has(l)).length;
      const catFaltan   = catTotal - catContadas;
      const catPct      = catTotal>0?Math.round(catContadas/catTotal*100):null;

      // ── Tiempo activo
      let activeSinceStr='';
      const invStart = activeInv?.startTime || (isActiveFB ? activeEntry?.lastSeen : null);
      if(isActive && invStart){
        const mins=Math.round((now-new Date(invStart))/60000);
        activeSinceStr=mins<60?`${mins}m`:`${Math.floor(mins/60)}h ${mins%60}m`;
      }

      // ── Última ubicación procesada (la última en el historial cerrado)
      const lastClosedLoc = uInvs.flatMap(v=>v.locations.filter(l=>!l.isMissingLoc)).slice(-1)[0]?.code || null;

      // ── Badge estado
      const dotClass  = isActive ? 'on' : 'off';
      const rowClass  = isActive ? 'lcp-active' : 'lcp-inactive';
      const statusLbl = isActive
        ? `<span style="color:var(--ac);font-weight:700;">● En campo${activeSinceStr?' · '+activeSinceStr:''}</span>`
        : '<span style="color:var(--tx3);">Inactivo hoy</span>';

      return `<div class="lcp-op-row ${rowClass}" style="flex-direction:column;align-items:stretch;gap:0;padding:0;overflow:hidden;">
        <!-- Encabezado del operador -->
        <div style="display:flex;align-items:center;gap:10px;padding:12px 14px 10px;">
          <div class="lcp-op-dot ${dotClass}" style="flex-shrink:0;"></div>
          <div style="flex:1;min-width:0;">
            <div class="lcp-op-name" style="font-size:14px;">${u.name}</div>
            <div class="lcp-op-sub" style="margin-top:1px;">${statusLbl}</div>
          </div>
          ${acc!==null?`<div style="text-align:center;flex-shrink:0;">
            <div style="font-family:var(--fh);font-size:18px;font-weight:800;color:${accColor};">${acc}%</div>
            <div style="font-size:9px;color:var(--tx3);">precisión</div>
          </div>`:''}
        </div>

        <!-- Ubicación actual en tiempo real -->
        ${isActive && currentLoc ? `
        <div style="margin:0 14px 10px;background:rgba(0,229,160,.1);border:1.5px solid rgba(0,229,160,.4);border-radius:10px;padding:8px 12px;display:flex;align-items:center;gap:10px;">
          <div style="width:8px;height:8px;border-radius:50%;background:var(--ac);box-shadow:0 0 6px var(--ac);animation:pulse-dot 1.2s infinite;flex-shrink:0;"></div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--ac);margin-bottom:1px;">Ubicación actual</div>
            <div style="font-family:var(--fh);font-size:16px;font-weight:900;color:var(--tx);letter-spacing:.03em;">${currentLoc}</div>
          </div>
          ${isFbFresh?`<div style="font-size:9px;color:var(--ac);font-weight:700;">🔴 EN VIVO</div>`:
          `<div style="font-size:9px;color:var(--tx3);">última conocida</div>`}
        </div>` : isActive ? `
        <div style="margin:0 14px 10px;background:rgba(255,182,39,.07);border:1px solid rgba(255,182,39,.2);border-radius:10px;padding:8px 12px;">
          <div style="font-size:11px;color:var(--wn);">⏳ Iniciando inventario...</div>
        </div>` : ''}

        <!-- KPIs del operador: 4 métricas en grid -->
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0;border-top:1px solid var(--bd);">
          <div style="text-align:center;padding:10px 6px;border-right:1px solid var(--bd);">
            <div style="font-family:var(--fh);font-size:20px;font-weight:800;color:var(--tx);">${uLocs}</div>
            <div style="font-size:9px;color:var(--tx2);margin-top:2px;">Ubic.<br>contadas</div>
          </div>
          <div style="text-align:center;padding:10px 6px;border-right:1px solid var(--bd);">
            <div style="font-family:var(--fh);font-size:20px;font-weight:800;color:var(--ac2);">${uRefs}</div>
            <div style="font-size:9px;color:var(--tx2);margin-top:2px;">Refs.<br>contadas</div>
          </div>
          <div style="text-align:center;padding:10px 6px;border-right:1px solid var(--bd);">
            <div style="font-family:var(--fh);font-size:20px;font-weight:800;color:${catFaltan>0?'var(--wn)':'var(--ac)'};">${catTotal>0?catFaltan:'—'}</div>
            <div style="font-size:9px;color:var(--tx2);margin-top:2px;">Ubic.<br>pendientes</div>
          </div>
          <div style="text-align:center;padding:10px 6px;">
            <div style="font-family:var(--fh);font-size:20px;font-weight:800;color:${uDiffs>0?'var(--dg)':'var(--tx)'};">${uDiffs}</div>
            <div style="font-size:9px;color:var(--tx2);margin-top:2px;">Dife-<br>rencias</div>
          </div>
        </div>

        <!-- Progreso catálogo -->
        ${catTotal>0?`
        <div style="padding:8px 14px 12px;border-top:1px solid var(--bd);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
            <div style="font-size:10px;color:var(--tx2);">📋 Catálogo: <b style="color:var(--tx);">${catContadas}/${catTotal}</b> ubicaciones · <span style="color:var(--tx2);">${catRefs} refs SAP</span></div>
            <div style="font-size:10px;font-weight:800;color:${catPct>=80?'var(--ac)':catPct>=50?'var(--wn)':'var(--dg)'};">${catPct}%</div>
          </div>
          <div class="lcp-bar-wrap" style="height:5px;">
            <div class="lcp-bar-fill" style="width:${catPct}%;background:${catPct>=80?'var(--ac)':catPct>=50?'var(--wn)':'var(--dg)'};transition:width .4s;"></div>
          </div>
          ${catFaltan>0&&isActive?`<div style="font-size:10px;color:var(--wn);margin-top:3px;">⏳ Faltan ${catFaltan} ubicación${catFaltan!==1?'es':''} por contar</div>`:''}
          ${catFaltan===0&&catTotal>0?`<div style="font-size:10px;color:var(--ac);margin-top:3px;">✅ Catálogo completado</div>`:''}
        </div>`:
        `<div style="padding:6px 14px 10px;border-top:1px solid var(--bd);font-size:10px;color:var(--tx3);">Sin catálogo asignado</div>`}
      </div>`;
    }).join('')
  }
  <div style="text-align:center;margin-top:14px;font-size:11px;color:var(--tx3);">🔄 Actualización automática cada 10s · ${now.toLocaleTimeString('es-CO',{hour:'2-digit',minute:'2-digit',second:'2-digit'})}</div>`;
}

/* ══════════════════════════════════════════════════════
   📌 GESTIÓN DE TAREAS
══════════════════════════════════════════════════════ */
let _taskFilt='all';
let _opTaskFilt='active';

function getTasks(){ return getDB().tasks||[]; }
function saveTasks(tasks){ const db=getDB(); db.tasks=tasks; setDB(db); }
function genTaskId(){ return 'tk_'+Date.now()+'_'+Math.random().toString(36).slice(2,6); }

function openCreateTaskModal(){
  const db=getDB();
  const ops=Object.entries(db.users||{}).filter(([uname,u])=>u.role==='operator' && !isHiddenUser(uname,u));
  const sel=document.getElementById('ct-user');
  sel.innerHTML=`<option value="">— Selecciona operador —</option>`+ops.map(([u,d])=>`<option value="${u}">${d.name} (@${u})</option>`).join('');
  document.getElementById('ct-title').value='';
  document.getElementById('ct-locs').value='';
  document.getElementById('ct-note').value='';
  document.getElementById('ct-priority').value='normal';
  document.getElementById('ct-err').style.display='none';
  document.getElementById('create-task-mo').classList.add('on');
}
function closeCreateTaskMo(e){ if(e.target===document.getElementById('create-task-mo')) document.getElementById('create-task-mo').classList.remove('on'); }

function createTask(){
  const title=document.getElementById('ct-title').value.trim();
  const assignedTo=document.getElementById('ct-user').value;
  const priority=document.getElementById('ct-priority').value;
  const locsRaw=document.getElementById('ct-locs').value;
  const note=document.getElementById('ct-note').value.trim();
  const err=document.getElementById('ct-err');
  if(!title){ err.textContent='El título es obligatorio'; err.style.display='block'; return; }
  if(!assignedTo){ err.textContent='Selecciona un operador'; err.style.display='block'; return; }
  const locs=locsRaw?locsRaw.split(/[,;\s]+/).map(c=>c.trim().toUpperCase()).filter(Boolean):[];
  const db=getDB();
  const tasks=db.tasks||[];
  const task={
    id:genTaskId(),
    title,
    assignedTo,
    assignedBy:CUR.username,
    assignedByName:isMaster()?'Sistema':CUR.name,
    priority,
    locs,
    note,
    status:'pending',
    createdAt:new Date().toISOString(),
    updatedAt:new Date().toISOString(),
    startedAt:null,
    doneAt:null,
    opNote:''
  };
  tasks.push(task);
  db.tasks=tasks;
  setDB(db);
  // Notify via existing notif system
  notifyAdmins(`📌 Tarea creada: "${title}" asignada a ${db.users?.[assignedTo]?.name||assignedTo}`);
  // Notificación al operador: app + navegador
  const taskMsg=`📌 El administrador te asignó una nueva tarea: "${title}".${note?' Nota: '+note:''}${locs.length?' Ubicaciones: '+locs.join(', '):''}`;
  notifyUser(assignedTo, taskMsg, 'tarea');
  document.getElementById('create-task-mo').classList.remove('on');
  renderTasksList();
  flash(`✓ Tarea asignada a ${db.users?.[assignedTo]?.name||assignedTo}`,'ok');
}

function renderTasksAdminUserFilter(){
  const db=getDB();
  const sel=document.getElementById('task-filter-user');
  if(!sel) return;
  const ops=Object.entries(db.users||{}).filter(([uname,u])=>u.role==='operator' && !isHiddenUser(uname,u));
  sel.innerHTML=`<option value="">Todos los operadores</option>`+ops.map(([u,d])=>`<option value="${u}">${d.name} (@${u})</option>`).join('');
}

function filtTasks(f,el){
  _taskFilt=f;
  document.querySelectorAll('#screen-a-tasks .tab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  renderTasksList();
}

function renderTasksList(){
  const el=document.getElementById('tasks-list');
  if(!el) return;
  const db=getDB();
  const userFilter=document.getElementById('task-filter-user')?.value||'';
  let tasks=getTasks();
  if(userFilter) tasks=tasks.filter(t=>t.assignedTo===userFilter);
  if(_taskFilt==='pending') tasks=tasks.filter(t=>t.status==='pending');
  else if(_taskFilt==='inprogress') tasks=tasks.filter(t=>t.status==='inprogress');
  else if(_taskFilt==='done') tasks=tasks.filter(t=>t.status==='done');
  tasks=tasks.sort((a,b)=>{
    const pri={urgent:0,normal:1,low:2};
    if(pri[a.priority]!==pri[b.priority]) return pri[a.priority]-pri[b.priority];
    return new Date(b.createdAt)-new Date(a.createdAt);
  });
  if(!tasks.length){el.innerHTML='<div class="es"><div class="ei">📌</div><p>Sin tareas en esta vista.<br>Crea una con el botón <b>+ Nueva</b>.</p></div>';return;}
  el.innerHTML=tasks.map(t=>{
    const uname=db.users?.[t.assignedTo]?.name||t.assignedTo;
    const pLbl={urgent:'🔴 Urgente',normal:'🟡 Normal',low:'🟢 Baja'}[t.priority]||'Normal';
    const stLbl={pending:'⏳ Pendiente',inprogress:'🔄 En curso',done:'✅ Completada'}[t.status]||t.status;
    const stClass={pending:'tk-pend',inprogress:'tk-prog',done:'tk-done',urgent:'tk-urgent'}[t.priority==='urgent'&&t.status!=='done'?'urgent':t.status]||'tk-pend';
    const stBadge={pending:'tk-b-pend',inprogress:'tk-b-prog',done:'tk-b-done'}[t.status]||'tk-b-pend';
    const created=new Date(t.createdAt).toLocaleDateString('es-CO',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});
    return `<div class="task-card ${stClass}">
      <div class="task-top">
        <div class="task-title">${t.title}</div>
        <span class="task-badge ${stBadge}">${stLbl}</span>
      </div>
      <div class="task-meta">
        👷 <b>${uname}</b> · ${pLbl} · ${created}
        ${t.opNote?`<br>💬 <i style="color:var(--tx);">"${t.opNote}"</i>`:''}
      </div>
      ${t.locs?.length?`<div class="task-locs">${t.locs.map(l=>`<span class="task-loc-chip">📍${l}</span>`).join('')}</div>`:''}
      ${t.note?`<div style="margin-top:8px;font-size:12px;color:var(--tx2);background:var(--sf3);border-radius:7px;padding:7px 10px;line-height:1.5;">📝 ${t.note}</div>`:''}
      ${t.status!=='done'?`<div class="task-actions">
        <button class="btn bd2 sm" style="flex:1;" onclick="deleteTask('${t.id}')">🗑 Eliminar</button>
      </div>`:`<div style="margin-top:8px;font-size:11px;color:var(--ac);">✅ Completada: ${t.doneAt?new Date(t.doneAt).toLocaleDateString('es-CO',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}):''}</div>`}
    </div>`;
  }).join('');
}

function deleteTask(id){
  confirmAuditAction('Eliminar tarea','¿Eliminar esta tarea?',()=>{
    const db=getDB();
    const t = (db.tasks||[]).find(x=>x.id===id);
    logAudit('task.delete', `Eliminó tarea "${t?.title||id}"`, {id, title:t?.title, assignedTo:t?.assignedTo});
    db.tasks=(db.tasks||[]).filter(t=>t.id!==id);
    setDB(db);
    renderTasksList();
    flash('Tarea eliminada');
  });
}

/* ──── OPERATOR: VER Y GESTIONAR MIS TAREAS ──── */
function filtOpTasks(f,el){
  _opTaskFilt=f;
  document.querySelectorAll('#screen-op-tasks .tab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  renderOpTasksList(f);
}

function renderOpTasksList(filt){
  const el=document.getElementById('op-tasks-list');
  if(!el) return;
  const db=getDB();
  let tasks=getTasks().filter(t=>t.assignedTo===CUR.username);
  if(filt==='active'||_opTaskFilt==='active') tasks=tasks.filter(t=>t.status!=='done');
  else tasks=tasks.filter(t=>t.status==='done');
  tasks=tasks.sort((a,b)=>{
    const pri={urgent:0,normal:1,low:2};
    if(pri[a.priority]!==pri[b.priority]) return pri[a.priority]-pri[b.priority];
    return new Date(b.createdAt)-new Date(a.createdAt);
  });
  if(!tasks.length){el.innerHTML='<div class="es"><div class="ei">📌</div><p>'+(filt==='active'?'Sin tareas pendientes. ¡Al día!':'Sin tareas completadas aún.')+'</p></div>';return;}
  el.innerHTML=tasks.map(t=>{
    const pLbl={urgent:'🔴 Urgente',normal:'🟡 Normal',low:'🟢 Baja'}[t.priority]||'Normal';
    const stClass={pending:'tk-pend',inprogress:'tk-prog',done:'tk-done'}[t.priority==='urgent'&&t.status!=='done'?'urgent':t.status]||'tk-pend';
    const stBadge={pending:'tk-b-pend',inprogress:'tk-b-prog',done:'tk-b-done'}[t.status]||'tk-b-pend';
    const stLbl={pending:'⏳ Pendiente',inprogress:'🔄 En curso',done:'✅ Completada'}[t.status];
    const created=new Date(t.createdAt).toLocaleDateString('es-CO',{day:'2-digit',month:'short'});
    return `<div class="task-card ${stClass}">
      <div class="task-top">
        <div class="task-title">${t.title}</div>
        <span class="task-badge ${stBadge}">${stLbl}</span>
      </div>
      <div class="task-meta">Asignada por <b>${t.assignedByName||t.assignedBy}</b> · ${pLbl} · ${created}</div>
      ${t.locs?.length?`<div class="task-locs">${t.locs.map(l=>`<span class="task-loc-chip">📍${l}</span>`).join('')}</div>`:''}
      ${t.note?`<div style="margin-top:8px;font-size:12px;color:var(--tx2);background:var(--sf3);border-radius:7px;padding:7px 10px;line-height:1.5;">📋 ${t.note}</div>`:''}
      ${t.status!=='done'?`
      <div class="fi" style="margin:10px 0 6px;">
        <label>Nota / actualización (opcional)</label>
        <input type="text" id="opnote-${t.id}" value="${t.opNote||''}" placeholder="Ej: Empezando con el rack superior…" style="background:var(--sf2);border:1.5px solid var(--bd);border-radius:var(--rs);color:var(--tx);font-size:13px;padding:10px 12px;outline:none;width:100%;">
      </div>
      <div class="task-actions">
        ${t.status==='pending'?`<button class="btn b-blue sm" style="flex:1;" onclick="updateTaskStatus('${t.id}','inprogress')">▶ Iniciar tarea</button>`:''}
        <button class="btn bp sm" style="flex:1;" onclick="updateTaskStatus('${t.id}','done')">✅ Completar</button>
      </div>`:`<div style="margin-top:6px;font-size:11px;color:var(--ac);">✅ Completada el ${t.doneAt?new Date(t.doneAt).toLocaleDateString('es-CO',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}):''}</div>`}
    </div>`;
  }).join('');
}

function updateTaskStatus(id,status){
  const db=getDB();
  const task=(db.tasks||[]).find(t=>t.id===id);
  if(!task) return;
  const opNote=document.getElementById('opnote-'+id)?.value.trim()||task.opNote||'';
  task.status=status;
  task.opNote=opNote;
  task.updatedAt=new Date().toISOString();
  if(status==='inprogress') task.startedAt=new Date().toISOString();
  if(status==='done') task.doneAt=new Date().toISOString();
  setDB(db);
  if(status==='done') notifyAdmins(`✅ Tarea completada: "${task.title}" por ${CUR.name}${opNote?` · "${opNote}"`:''}`);
  else if(status==='inprogress') notifyAdmins(`▶ Tarea iniciada: "${task.title}" por ${CUR.name}`);
  renderOpTasksList(_opTaskFilt);
  flash(status==='done'?'✅ Tarea completada':'▶ Tarea iniciada','ok');
}

document.addEventListener('keydown',e=>{
  if(e.key!=='Enter') return;
  if(cur==='setup') setupAdmin();
  else if(cur==='login') doLogin();
  else if(cur==='scan'&&document.getElementById('step-loc').style.display!=='none') confirmLoc();
});

/* ══════════════════════════════════════════════════════
   👑 MASTER: PANEL DE CONTROL TOTAL
══════════════════════════════════════════════════════ */

function renderPeriodArchives(){
  if(!isMaster()) return;
  const el = document.getElementById('master-period-archives');
  if(!el) return;
  const db = getDB();
  const archives = db.periodArchives || {};
  const keys = Object.keys(archives).sort((a,b)=>b.localeCompare(a)); // más reciente primero

  if(!keys.length){
    el.innerHTML='<div style="background:var(--sf2);border:1px solid var(--bd);border-radius:var(--rs);padding:14px;font-size:13px;color:var(--tx3);text-align:center;">Aún no se han cerrado períodos</div>';
    return;
  }

  const months=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

  el.innerHTML = keys.map(period => {
    const arc = archives[period];
    const [yr, mo, q] = period.split(/[-Q]/);
    const label = `${months[parseInt(mo)-1]} ${yr} — Quincena ${q}`;
    const closedDate = arc.closedAt
      ? new Date(arc.closedAt).toLocaleDateString('es-CO',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'})
      : '—';
    const locCount = Object.keys(arc.locStatus||{}).length;

    return `<div style="background:var(--sf2);border:1.5px solid var(--bd);border-radius:var(--rs);padding:14px 16px;margin-bottom:8px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;">
        <div>
          <div style="font-family:var(--fh);font-size:14px;font-weight:800;color:var(--tx);">📅 ${label}</div>
          <div style="font-size:11px;color:var(--tx3);margin-top:2px;">Cerrado el ${closedDate} · por ${arc.closedBy||'—'}</div>
        </div>
        <span style="background:rgba(0,229,160,.12);color:var(--ac);border:1px solid rgba(0,229,160,.3);border-radius:20px;padding:3px 10px;font-size:11px;font-weight:700;white-space:nowrap;">✅ Cerrado</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:10px;">
        <div style="background:var(--sf3,var(--sf));border:1px solid var(--bd);border-radius:8px;padding:8px 10px;text-align:center;">
          <div style="font-family:var(--fh);font-size:18px;font-weight:800;color:var(--tx);">${arc.invCount||0}</div>
          <div style="font-size:10px;color:var(--tx3);">Inventarios</div>
        </div>
        <div style="background:var(--sf3,var(--sf));border:1px solid var(--bd);border-radius:8px;padding:8px 10px;text-align:center;">
          <div style="font-family:var(--fh);font-size:18px;font-weight:800;color:var(--tx);">${locCount}</div>
          <div style="font-size:10px;color:var(--tx3);">Ubicaciones registradas</div>
        </div>
      </div>
      <button class="btn b-blue" style="width:100%;font-size:13px;" onclick="redownloadPeriodExcel('${period}')">📥 Volver a descargar Excel</button>
    </div>`;
  }).join('');
}

function redownloadPeriodExcel(period){
  const db = getDB();
  const [yr, mo, q] = period.split(/[-Q]/);
  const periodInvs = getAllInvs().filter(inv=>{
    if(!inv.date) return false;
    const d = new Date(inv.date);
    const half = d.getDate()<=15?1:2;
    return d.getFullYear()===parseInt(yr)&&(d.getMonth()+1)===parseInt(mo)&&half===parseInt(q);
  });
  if(!periodInvs.length){ flash('Sin inventarios guardados para este período','wn'); return; }
  const rows = buildRows(periodInvs);
  const wsDetail = XLSX.utils.json_to_sheet(rows);
  wsDetail['!cols'] = [12,20,10,10,14,16,28,10,10,10,22,30,6,18,30,22].map(w=>({wch:w}));
  const byUser={};
  periodInvs.forEach(inv=>{
    const u=inv.user||inv.username;
    if(!byUser[u]) byUser[u]={Usuario:u,Inventarios:0,Ubicaciones:0,Referencias:0,Correctas:0,Diferencias:0,Extras:0};
    byUser[u].Inventarios++;
    inv.locations.forEach(loc=>{
      if(loc.isMissingLoc) return;
      byUser[u].Ubicaciones++;
      Object.values(loc.items).forEach(item=>{
        if(item.isExtra){byUser[u].Extras++;return;}
        byUser[u].Referencias++;
        if(item.status==='ok') byUser[u].Correctas++;
        if(item.status==='diff') byUser[u].Diferencias++;
      });
    });
  });
  Object.values(byUser).forEach(r=>{r['Precisión %']=r.Referencias>0?Math.round(r.Correctas/r.Referencias*100)+'%':'—';});
  const wsSummary = XLSX.utils.json_to_sheet(Object.values(byUser));
  wsSummary['!cols'] = [22,12,12,12,12,12,12,14].map(w=>({wch:w}));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, wsDetail,  'Detalle');
  XLSX.utils.book_append_sheet(wb, wsSummary, 'Resumen por operador');
  XLSX.writeFile(wb, `cierre_${period}.xlsx`);
  flash('📥 Excel descargado','ok');
}


/* ══════════════════════════════════════════════════════
   BITÁCORA DE ACCIONES MASTER
══════════════════════════════════════════════════════ */
function logMasterAction(action, targetUser){
  return; // master es silencioso: ningún movimiento deja registro
  /* eslint-disable */
  const db = getDB();
  if(!db.masterLog) db.masterLog = [];
  db.masterLog.unshift({
    at     : new Date().toISOString(),
    by     : CUR.name || CUR.username,
    action : action,
    target : targetUser || null,
  });
  // Conservar solo las últimas 200 entradas
  if(db.masterLog.length > 200) db.masterLog = db.masterLog.slice(0, 200);
  setDB(db);
  /* eslint-enable */
}

function renderMasterLog(){
  if(!isMaster()) return;
  const el = document.getElementById('master-log-content');
  if(!el) return;
  const db  = getDB();
  const log = db.masterLog || [];
  if(!log.length){
    el.innerHTML='<div style="font-size:13px;color:var(--tx3);text-align:center;padding:12px 0;">Sin acciones registradas aún</div>';
    return;
  }
  el.innerHTML = log.map(entry=>{
    const dt = new Date(entry.at).toLocaleDateString('es-CO',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});
    return `<div style="display:flex;gap:10px;align-items:flex-start;padding:9px 0;border-bottom:1px solid var(--bd);">
      <div style="font-size:18px;flex-shrink:0;">${getMasterActionIcon(entry.action)}</div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:13px;color:var(--tx);font-weight:600;line-height:1.4;">${entry.action}</div>
        ${entry.target?`<div style="font-size:11px;color:var(--ac2);margin-top:1px;">👤 ${entry.target}</div>`:''}
        <div style="font-size:10px;color:var(--tx3);margin-top:2px;">🕐 ${dt} · por ${entry.by}</div>
      </div>
    </div>`;
  }).join('');
}

function getMasterActionIcon(action){
  if(action.includes('contraseña'))   return '🔑';
  if(action.includes('canceló'))      return '🗑';
  if(action.includes('eliminó'))      return '🗑';
  if(action.includes('restauró'))     return '↩';
  if(action.includes('limpió'))       return '🧹';
  if(action.includes('inventario'))   return '📦';
  if(action.includes('período'))      return '📅';
  if(action.includes('veredicto'))    return '⚡';
  if(action.includes('asignaci'))     return '📍';
  return '🛡️';
}

function renderMasterUserSelector(){
  if(!isMaster()) return;
  const db=getDB();
  const sel=document.getElementById('master-user-sel');
  if(!sel) return;
  const users=Object.entries(db.users||{}).filter(([uname,u])=>!isHiddenUser(uname,u)).sort((a,b)=>{
    const ro={admin:0,operator:1};
    if(ro[a[1].role]!==ro[b[1].role]) return ro[a[1].role]-ro[b[1].role];
    return (a[1].name||a[0]).localeCompare(b[1].name||b[0]);
  });
  const prev=sel.value;
  sel.innerHTML='<option value="">— Selecciona un usuario —</option>'+
    users.map(([uname,u])=>`<option value="${uname}" ${uname===prev?'selected':''}>${u.role==='admin'?'🔑':'👷'} ${u.name} (@${uname})</option>`).join('');
}

function renderMasterPanel(){
  if(!isMaster()) return;
  const el=document.getElementById('master-panel-content');
  if(!el) return;
  const uname=document.getElementById('master-user-sel')?.value||'';
  if(!uname){
    el.innerHTML='<div class="es"><div class="ei">👆</div><p>Selecciona un usuario para ver sus procesos</p></div>';
    updateThemeBtn();
    return;
  }
  const db=getDB();
  const u=db.users?.[uname];
  if(!u){el.innerHTML='';return;}

  // — Tareas del usuario —
  const allTasks=getTasks();
  const userTasks=allTasks.filter(t=>t.assignedTo===uname);
  const pendingTasks=userTasks.filter(t=>t.status!=='done');
  const doneTasks=userTasks.filter(t=>t.status==='done');

  // — Asignaciones de ubicaciones —
  const period=getCurrentPeriod();
  const assigns=(db.locAssignments?.[uname]||[]).filter(a=>a.period===period);
  const pendingAssigns=assigns.filter(a=>!a.verified);
  const doneAssigns=assigns.filter(a=>a.verified);

  // — Inventario activo —
  let activeInvRaw=null;
  try{ const raw=localStorage.getItem('itp3_active_'+uname); if(raw) activeInvRaw=JSON.parse(raw); }catch(e){}
  const activeInv=activeInvRaw;

  // — Novedades del usuario —
  const allInvs=getAllInvs().filter(i=>i.username===uname);
  let novCount=0;
  allInvs.forEach(inv=>inv.locations.forEach(loc=>{Object.values(loc.items).forEach(item=>{if(item.status==='diff'||item.status==='novedad') novCount++;});}));

  // — Inventarios históricos —
  const invCount=allInvs.length;

  const roleLabel=u.role==='admin'?'Administrador':'Operador';
  const roleColor=u.role==='admin'?'var(--pu)':'var(--ac2)';

  el.innerHTML=`
  <!-- Cabecera del usuario -->
  <div style="background:var(--sf2);border:1.5px solid var(--bd);border-radius:var(--rs);padding:14px 16px;margin-bottom:10px;display:flex;align-items:center;gap:12px;">
    <div style="font-size:32px;">${u.role==='admin'?'🔑':'👷'}</div>
    <div style="flex:1;min-width:0;">
      <div style="font-family:var(--fh);font-size:17px;font-weight:800;color:var(--tx);">${u.name}</div>
      <div style="font-size:12px;color:${roleColor};font-weight:700;">@${uname} · ${roleLabel}</div>
    </div>
    <div style="text-align:right;font-size:11px;color:var(--tx3);">${invCount} inventario${invCount!==1?'s':''}<br>${novCount>0?`<span style="color:var(--dg);">⚡ ${novCount} novedad${novCount!==1?'es':''}</span>`:'<span style="color:var(--ac);">✅ Sin novedades</span>'}</div>
  </div>

  <!-- Botón cambiar contraseña -->
  <button class="btn bp" style="width:100%;margin-bottom:14px;" onclick="openChangePassModal('${uname}')">🔑 Cambiar contraseña de ${u.name}</button>

  <!-- SECCIÓN: Inventario activo -->
  <div style="margin-bottom:6px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--tx3);">📦 Inventario en curso</div>
  <div style="background:var(--sf2);border:1.5px solid var(--bd);border-radius:var(--rs);padding:14px 16px;margin-bottom:14px;">
  ${activeInv?`
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
      <div style="width:8px;height:8px;border-radius:50%;background:var(--ac);box-shadow:0 0 6px var(--ac);animation:pulse-dot 1.5s infinite;flex-shrink:0;"></div>
      <div style="font-size:13px;font-weight:700;color:var(--ac);">Inventario activo</div>
      <div style="font-size:11px;color:var(--tx3);margin-left:auto;">${activeInv.locations?activeInv.locations.filter(l=>!l.isMissingLoc).length:0} ubic. contadas</div>
    </div>
    <div style="font-size:12px;color:var(--tx2);margin-bottom:10px;">Iniciado: ${activeInv.startTime?new Date(activeInv.startTime).toLocaleTimeString('es-CO',{hour:'2-digit',minute:'2-digit'}):'-'} · ${activeInv.date||'-'}</div>
    <button class="btn bd2" style="width:100%;" onclick="masterCancelActiveInv('${uname}')">🗑 Cancelar inventario en curso</button>
  `:`<div style="font-size:13px;color:var(--tx3);text-align:center;padding:8px 0;">Sin inventario activo actualmente</div>`}
  </div>

  <!-- SECCIÓN: Tareas -->
  <div style="margin-bottom:6px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--tx3);">📌 Tareas (${userTasks.length} total · ${pendingTasks.length} pendientes)</div>
  <div style="background:var(--sf2);border:1.5px solid var(--bd);border-radius:var(--rs);padding:14px 16px;margin-bottom:14px;">
  ${userTasks.length===0?`<div style="font-size:13px;color:var(--tx3);text-align:center;padding:8px 0;">Sin tareas asignadas</div>`:`
    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px;max-height:250px;overflow-y:auto;">
    ${userTasks.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).map(t=>{
      const stLbl={pending:'⏳ Pendiente',inprogress:'🔄 En curso',done:'✅ Completada'}[t.status]||t.status;
      const stColor={pending:'var(--wn)',inprogress:'var(--ac2)',done:'var(--ac)'}[t.status]||'var(--tx)';
      const pLbl={urgent:'🔴',normal:'🟡',low:'🟢'}[t.priority]||'';
      return `<div style="background:var(--sf3,var(--sf));border:1px solid var(--bd);border-radius:10px;padding:10px 12px;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
          <div style="flex:1;font-size:13px;font-weight:600;color:var(--tx);">${pLbl} ${t.title}</div>
          <span style="font-size:11px;font-weight:700;color:${stColor};">${stLbl}</span>
        </div>
        ${t.status!=='done'?`<button class="btn bd2 sm" style="width:100%;margin-top:6px;" onclick="masterDeleteTask('${t.id}','${uname}')">🗑 Eliminar tarea</button>`:''}
        ${t.status==='done'?`<button class="btn bs sm" style="width:100%;margin-top:6px;" onclick="masterResetTask('${t.id}','${uname}')">↩ Restaurar a pendiente</button>`:''}
      </div>`;
    }).join('')}
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      ${pendingTasks.length?`<button class="btn bd2" style="flex:1;" onclick="masterDeleteAllTasks('${uname}','pending')">🗑 Eliminar todas las pendientes</button>`:''}
      ${doneTasks.length?`<button class="btn bs" style="flex:1;" onclick="masterResetAllTasks('${uname}')">↩ Restaurar completadas a pendiente</button>`:''}
    </div>
  `}
  </div>

  <!-- SECCIÓN: Asignaciones de ubicaciones -->
  <div style="margin-bottom:6px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--tx3);">📍 Asignaciones de ubicación (${assigns.length} total · ${pendingAssigns.length} pendientes)</div>
  <div style="background:var(--sf2);border:1.5px solid var(--bd);border-radius:var(--rs);padding:14px 16px;margin-bottom:14px;">
  ${assigns.length===0?`<div style="font-size:13px;color:var(--tx3);text-align:center;padding:8px 0;">Sin asignaciones en la quincena actual</div>`:`
    <div style="font-size:12px;color:var(--tx2);margin-bottom:10px;">Quincena: <b style="color:var(--tx);">${period}</b> · ✅ Verificadas: ${doneAssigns.length} · ⏳ Pendientes: ${pendingAssigns.length}</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      ${pendingAssigns.length?`<button class="btn bd2" style="flex:1;" onclick="masterClearPendingAssigns('${uname}')">🗑 Eliminar pendientes</button>`:''}
      ${doneAssigns.length?`<button class="btn bs" style="flex:1;" onclick="masterResetVerifiedAssigns('${uname}')">↩ Restaurar verificadas</button>`:''}
    </div>
  `}
  </div>

  <!-- SECCIÓN: Novedades / Veredictos -->
  <div style="margin-bottom:6px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--tx3);">⚡ Novedades y veredictos</div>
  <div style="background:var(--sf2);border:1.5px solid var(--bd);border-radius:var(--rs);padding:14px 16px;margin-bottom:14px;">
    ${(()=>{
      const userInvIds=new Set(allInvs.map(i=>i.id+''));
      const verdicts=Object.entries(db.novedadVerdicts||{}).filter(([k])=>allInvs.some(inv=>k.startsWith(inv.id+'_')));
      return verdicts.length?`
        <div style="font-size:12px;color:var(--tx2);margin-bottom:10px;">${verdicts.length} veredicto${verdicts.length!==1?'s':''} registrado${verdicts.length!==1?'s':''} para este usuario</div>
        <button class="btn bd2" style="width:100%;" onclick="masterClearAllVerdicts('${uname}')">🗑 Limpiar todos los veredictos</button>
      `:`<div style="font-size:13px;color:var(--tx3);text-align:center;padding:8px 0;">Sin veredictos registrados</div>`;
    })()}
  </div>

  <!-- SECCIÓN: Registros de inventario -->
  <div style="margin-bottom:6px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--tx3);">🗂 Registros de inventario (${invCount})</div>
  <div style="background:var(--sf2);border:1.5px solid var(--bd);border-radius:var(--rs);padding:14px 16px;margin-bottom:24px;">
  ${invCount===0?`<div style="font-size:13px;color:var(--tx3);text-align:center;padding:8px 0;">Sin inventarios guardados</div>`:`
    <div style="font-size:12px;color:var(--tx2);margin-bottom:10px;">${invCount} inventario${invCount!==1?'s':', guardado'} guardado${invCount!==1?'s':''}</div>
    <button class="btn bd2" style="width:100%;" onclick="masterDeleteAllInventories('${uname}')">🗑 Eliminar todos los inventarios</button>
  `}
  </div>`;
  updateThemeBtn();
}

/* ── Acciones Master ── */

function masterCancelActiveInv(uname){
  const db=getDB();
  const u=db.users?.[uname];
  appConfirm('🗑 Cancelar inventario',`¿Cancelar el inventario activo de ${u?.name||uname}?\n\nLas ubicaciones en curso se perderán.`,()=>{
    try{ localStorage.removeItem('itp3_active_'+uname); }catch(e){}
    logMasterAction(`Canceló inventario activo de ${u?.name||uname}`, u?.name||uname);
    flash(`✓ Inventario de ${u?.name||uname} cancelado`,'ok');
    renderMasterPanel();
  });
}

function masterDeleteTask(id, uname){
  const db=getDB();
  appConfirm('Eliminar tarea','¿Eliminar esta tarea?',()=>{
    const _tDel=(db.tasks||[]).find(t=>t.id===id);
    db.tasks=(db.tasks||[]).filter(t=>t.id!==id);
    setDB(db);
    logMasterAction(`Eliminó tarea: "${_tDel?.title||id}"`, db.users?.[uname]?.name||uname);
    flash('Tarea eliminada','ok');
    renderMasterPanel();
  });
}

function masterResetTask(id, uname){
  const db=getDB();
  const task=(db.tasks||[]).find(t=>t.id===id);
  if(!task) return;
  appConfirm('↩ Restaurar tarea',`¿Restaurar "${task.title}" a estado Pendiente?`,()=>{
    task.status='pending';
    delete task.doneAt;
    setDB(db);
    logMasterAction(`Restauró tarea "${task.title}" a pendiente`, db.users?.[uname]?.name||uname);
    flash('Tarea restaurada a pendiente','ok');
    renderMasterPanel();
  });
}

function masterDeleteAllTasks(uname, filter){
  const db=getDB();
  const u=db.users?.[uname];
  const label=filter==='pending'?'pendientes':'todas';
  appConfirm('🗑 Eliminar tareas',`¿Eliminar las tareas ${label} de ${u?.name||uname}?`,()=>{
    if(filter==='pending'){
      db.tasks=(db.tasks||[]).filter(t=>!(t.assignedTo===uname&&t.status!=='done'));
    } else {
      db.tasks=(db.tasks||[]).filter(t=>t.assignedTo!==uname);
    }
    setDB(db);
    logMasterAction(`Eliminó tareas ${label} de ${u?.name||uname}`, u?.name||uname);
    flash(`✓ Tareas ${label} eliminadas`,'ok');
    renderMasterPanel();
  });
}

function masterResetAllTasks(uname){
  const db=getDB();
  const u=db.users?.[uname];
  const doneTasks=(db.tasks||[]).filter(t=>t.assignedTo===uname&&t.status==='done');
  appConfirm('↩ Restaurar tareas',`¿Restaurar ${doneTasks.length} tarea${doneTasks!==1?'s':''} completada${doneTasks.length!==1?'s':''} de ${u?.name||uname} a estado Pendiente?`,()=>{
    (db.tasks||[]).forEach(t=>{
      if(t.assignedTo===uname&&t.status==='done'){
        t.status='pending';
        delete t.doneAt;
      }
    });
    setDB(db);
    logMasterAction(`Restauró ${doneTasks.length} tareas completadas de ${u?.name||uname} a pendiente`, u?.name||uname);
    flash(`✓ ${doneTasks.length} tarea${doneTasks.length!==1?'s':''} restaurada${doneTasks.length!==1?'s':''}`,'ok');
    renderMasterPanel();
  });
}

function masterClearPendingAssigns(uname){
  const db=getDB();
  const u=db.users?.[uname];
  const period=getCurrentPeriod();
  const pending=(db.locAssignments?.[uname]||[]).filter(a=>a.period===period&&!a.verified);
  appConfirm('🗑 Eliminar asignaciones',`¿Eliminar las ${pending.length} asignaciones pendientes de ${u?.name||uname}?`,()=>{
    if(db.locAssignments?.[uname]){
      db.locAssignments[uname]=db.locAssignments[uname].filter(a=>!(a.period===period&&!a.verified));
    }
    setDB(db);
    logMasterAction(`Limpió ${pending.length} asignaciones pendientes de ${u?.name||uname}`, u?.name||uname);
    flash(`✓ Asignaciones pendientes eliminadas`,'ok');
    renderMasterPanel();
  });
}

function masterResetVerifiedAssigns(uname){
  const db=getDB();
  const u=db.users?.[uname];
  const period=getCurrentPeriod();
  const verified=(db.locAssignments?.[uname]||[]).filter(a=>a.period===period&&a.verified);
  appConfirm('↩ Restaurar asignaciones',`¿Restaurar ${verified.length} ubicaciones verificadas de ${u?.name||uname} a pendiente?`,()=>{
    (db.locAssignments?.[uname]||[]).forEach(a=>{
      if(a.period===period&&a.verified){ a.verified=false; a.isEmpty=false; delete a.verifiedAt; }
    });
    setDB(db);
    logMasterAction(`Restauró ${verified.length} asignaciones verificadas de ${u?.name||uname} a pendiente`, u?.name||uname);
    flash(`✓ ${verified.length} asignación${verified.length!==1?'es':''} restaurada${verified.length!==1?'s':''}`,'ok');
    renderMasterPanel();
  });
}

function masterClearAllVerdicts(uname){
  const db=getDB();
  const u=db.users?.[uname];
  const allInvs=getAllInvs().filter(i=>i.username===uname);
  appConfirm('🗑 Limpiar veredictos',`¿Eliminar todos los veredictos de novedades de ${u?.name||uname}?`,()=>{
    if(db.novedadVerdicts){
      allInvs.forEach(inv=>{
        Object.keys(db.novedadVerdicts).filter(k=>k.startsWith(inv.id+'_')).forEach(k=>delete db.novedadVerdicts[k]);
      });
    }
    setDB(db);
    logMasterAction(`Limpió todos los veredictos de novedades de ${u?.name||uname}`, u?.name||uname);
    flash('✓ Veredictos eliminados','ok');
    renderMasterPanel();
  });
}

function masterDeleteAllInventories(uname){
  const db=getDB();
  const u=db.users?.[uname];
  const count=(db.inventories||[]).filter(i=>i.username===uname).length;
  confirmAuditAction('🗑 Eliminar inventarios',`¿Eliminar los ${count} inventarios de ${u?.name||uname}?\n\nEsta acción no se puede deshacer.`,()=>{
    db.inventories=(db.inventories||[]).filter(i=>i.username!==uname);
    try{ localStorage.removeItem('itp3_active_'+uname); }catch(e){}
    setDB(db);
    logMasterAction(`Eliminó ${count} inventarios de ${u?.name||uname}`, u?.name||uname);
    flash(`✓ Todos los inventarios de ${u?.name||uname} eliminados`,'ok');
    renderMasterPanel();
  });
}

/* ── INIT ── Pantalla de carga mientras Firebase conecta ── */
(function(){
  // Mostrar pantalla de carga
  var loading = document.createElement('div');
  loading.id = 'fb-loading';
  loading.style.cssText = 'position:fixed;inset:0;background:var(--bg,#080b10);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;gap:16px;';
  loading.innerHTML = '<div style="width:72px;height:72px;background:linear-gradient(135deg,#00e5a0,#0094ff);border-radius:22px;display:flex;align-items:center;justify-content:center;font-size:32px;box-shadow:0 0 40px rgba(0,229,160,.3);">📦</div><div style="font-family:Syne,sans-serif;font-size:22px;font-weight:800;color:#eef0f5;">Conectando...</div><div style="font-size:14px;color:#8a94a8;">Sincronizando con la nube 🔥</div><div style="width:120px;height:4px;background:#181e2c;border-radius:2px;overflow:hidden;"><div id="fb-bar" style="height:100%;width:0%;background:linear-gradient(90deg,#00e5a0,#0094ff);border-radius:2px;transition:width 0.4s;"></div></div>';
  document.body.appendChild(loading);

  // Animar barra de carga
  var pct = 0;
  var barInterval = setInterval(function(){
    pct = Math.min(pct + Math.random()*15, 90);
    var bar = document.getElementById('fb-bar');
    if(bar) bar.style.width = pct + '%';
  }, 300);

  function startApp(){
    clearInterval(barInterval);
    var bar = document.getElementById('fb-bar');
    if(bar) bar.style.width = '100%';
    setTimeout(function(){
      var el = document.getElementById('fb-loading');
      if(el) el.remove();
      // Verificar sesión activa
      try{
        var saved = sessionStorage.getItem('itp3_session');
        if(saved){
          var s = JSON.parse(saved);
          var db = getDB();
          if(s.username === '__master__' || (db.users && db.users[s.username])){
            CUR = s;
            CFG = db.settings || {vibrate:true, confirmClose:true};
            purgeAllExpiredCatalogs();
            if(window.__startupMode==='catalog'){ window.__startCatalogPage&&window.__startCatalogPage(s); return; }
            if(window.__startupMode==='catalogos'){ window.__startCatalogosPage&&window.__startCatalogosPage(s); return; }
            if(s.role === 'admin' || s.role === 'master'){ enterAdmin(); }
            else { enterOperator(); }
            return;
          }
        }
      }catch(e){}
      // Sin sesión válida → volver al login
      window.location.href = 'index.html';
    }, 300);
  }

  // ── THEME TOGGLE ──────────────────────────────────────────────
  function applyTheme(mode){
    if(mode==='light'){
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    updateThemeBtn();
  }
  function updateThemeBtn(){
    var btn=document.getElementById('theme-toggle-btn');
    if(!btn) return;
    var isLight=document.body.classList.contains('light-mode');
    btn.textContent = isLight ? '🌙 Cambiar a Modo Oscuro' : '☀️ Cambiar a Modo Claro';
  }
  function toggleTheme(){
    var isLight=document.body.classList.contains('light-mode');
    var next=isLight?'dark':'light';
    // Guardar en Firebase para sincronizar entre dispositivos
    var db=getDB();
    if(!db.settings) db.settings={};
    db.settings.theme=next;
    setDB(db);
    applyTheme(next);
    flash(isLight?'Modo oscuro activado':'Modo claro activado','ok');
  }
  // Exponer globalmente para que onclick funcione fuera del IIFE
  window.toggleTheme = toggleTheme;
  window.updateThemeBtn = updateThemeBtn;
  // Aplicar tema desde Firebase al iniciar (se llama también desde el listener)
  window.applyTheme = applyTheme;
  var savedTheme = (getDB().settings||{}).theme;
  if(savedTheme) applyTheme(savedTheme);
  // ──────────────────────────────────────────────────────────────

  // Iniciar Firebase
  _initFirebase();

  // Esperar a que Firebase cargue (max 8 segundos)
  var waited = 0;
  var checkReady = setInterval(function(){
    waited += 100;
    if(_fbReady){
      clearInterval(checkReady);
      startApp();
    } else if(waited >= 8000){
      clearInterval(checkReady);
      showOfflineScreen();
    }
  }, 100);
})();


/* ══════════════════════════════════════════════════════
   OPERATOR NOVEDADES PANEL
══════════════════════════════════════════════════════ */
let _opNovTab='diff';
function initOpNovedades(){
  _opNovTab='diff';
  ['diff','extra','missing'].forEach(t=>{
    const el=document.getElementById('opnov-tab-'+t);
    if(el) el.className='tab'+(t==='diff'?' on':'');
  });
  renderOpNovedades();
  updOpNovBadge();
}
function setOpNovTab(tab, el){
  _opNovTab=tab;
  document.querySelectorAll('#screen-op-novedades .tab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  renderOpNovedades();
}
function _collectOpNovs(){
  const invs=getUserInvs(CUR.username).slice();
  // Incluir el inventario activo en curso para que las novedades aparezcan
  // tan pronto como se cierre cada ubicación (sin esperar a cerrar el inventario).
  const act = (typeof ACTIVE!=='undefined' && ACTIVE) ? ACTIVE : loadActive();
  if(act && !invs.some(i=>i.id===act.id)) invs.push(act);
  const db=getDB();
  const verdicts=db.novedadVerdicts||{};
  const diffs=[],extras=[],missing=[];
  invs.forEach(inv=>{
    (inv.locations||[]).forEach(loc=>{
      Object.entries(loc.items||{}).forEach(([code,item])=>{
        if(code==='__loc__') return;
        if(item.opReviewed) return;
        const isExt=item.isExtra===true;
        const isPend=item.counted===null && !isExt && item.status!=='ok';
        const isDiff=item.status==='diff'||(item.status==='novedad'&&!isExt);
        const isMissing=item.status==='missing_loc'||loc.isMissingLoc||isPend;
        // Si el admin/master ya emitió veredicto, ocultar al operador
        const vKeyDiffExtra=`${inv.id}_${loc.code}_${code}`;
        const vKeyMissing=`${inv.id}_${loc.code}_${code}_missing`;
        if(isExt){
          if(verdicts[vKeyDiffExtra]) return;
          extras.push({invId:inv.id,loc:loc.code,code,item,date:inv.date});
        } else if(isDiff){
          if(verdicts[vKeyDiffExtra]) return;
          diffs.push({invId:inv.id,loc:loc.code,code,item,date:inv.date});
        } else if(isMissing){
          if(verdicts[vKeyMissing]) return;
          missing.push({invId:inv.id,loc:loc.code,code,item,date:inv.date});
        }
      });
    });
  });
  return {diffs,extras,missing};
}
function updOpNovBadge(){
  const b=document.getElementById('op-nov-badge'); if(!b) return;
  const {diffs,extras,missing}=_collectOpNovs();
  const n=diffs.length+extras.length+missing.length;
  if(n>0){b.style.display='inline-block';b.textContent=n;} else b.style.display='none';
}
function renderOpNovedades(){
  const el=document.getElementById('opnov-content'); if(!el) return;
  const q=(document.getElementById('opnov-search')?.value||'').toUpperCase();
  const {diffs,extras,missing}=_collectOpNovs();
  let rows = _opNovTab==='diff'?diffs : _opNovTab==='extra'?extras : missing;
  if(q) rows=rows.filter(r=>r.code.toUpperCase().includes(q)||(r.item.name||'').toUpperCase().includes(q)||r.loc.toUpperCase().includes(q));
  if(!rows.length){
    const msg=_opNovTab==='diff'?'Sin diferencias':_opNovTab==='extra'?'Sin productos extra':'Sin referencias sin contar';
    el.innerHTML='<div class="es"><div class="ei">✅</div><p>'+msg+'</p></div>';
    return;
  }
  el.innerHTML=rows.map(r=>{
    const item=r.item;
    const fecha=new Date(r.date+'T12:00:00').toLocaleDateString('es-CO',{day:'2-digit',month:'short'});
    let color,icon,valHtml;
    if(_opNovTab==='diff'){
      const d=Math.round(((item.counted||0)-(item.sapStock||0))*100)/100;
      color='var(--dg)';icon='⚡';
      valHtml=`<div style="font-family:var(--fh);font-size:16px;font-weight:800;color:var(--dg);">${d>0?'+':''}${fmtNum(d)}</div><div style="font-size:10px;color:var(--tx2);">SAP:${fmtNum(item.sapStock)} / Cnt:${fmtNum(item.counted)}</div>`;
    } else if(_opNovTab==='extra'){
      color='var(--ac2)';icon='🔵';
      valHtml=`<div style="font-family:var(--fh);font-size:16px;font-weight:800;color:var(--ac2);">${item.counted}</div><div style="font-size:10px;color:var(--tx2);">uds · no en SAP</div>`;
    } else {
      color='var(--wn)';icon='🚫';
      valHtml=`<div style="font-family:var(--fh);font-size:13px;font-weight:800;color:var(--wn);">Sin contar</div><div style="font-size:10px;color:var(--tx2);">SAP: ${item.sapStock??'—'}</div>`;
    }
    const tid=`opnov-ta-${r.invId}-${r.loc}-${r.code}`.replace(/[^a-zA-Z0-9_-]/g,'_');
    const cid=`opnov-card-${r.invId}-${r.loc}-${r.code}`.replace(/[^a-zA-Z0-9_-]/g,'_');
    const safeNote=(item.note||'').replace(/</g,'&lt;');
    return `<div class="pan" id="${cid}" style="margin:0 0 10px;padding:12px 14px;border-left:3px solid ${color};">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
        <div style="flex:1;min-width:0;">
          <div style="font-family:var(--fh);font-weight:800;font-size:14px;color:${color};">${icon} ${r.code}</div>
          <div style="font-size:12px;color:var(--tx2);margin-top:2px;">${item.name||'—'}</div>
          <div style="font-size:11px;color:var(--tx3);margin-top:3px;">📍 ${r.loc} · ${fecha}</div>
        </div>
        <div style="text-align:right;flex-shrink:0;">${valHtml}</div>
      </div>
      <div style="margin-top:10px;">
        <div style="font-size:10px;color:var(--tx3);margin-bottom:4px;text-transform:uppercase;letter-spacing:.06em;">Observación del operador</div>
        <textarea id="${tid}" class="ci-note" rows="2" style="width:100%;box-sizing:border-box;background:var(--sf2);border:1px solid var(--bd);border-radius:10px;padding:9px 11px;font-size:13px;color:var(--tx);resize:none;font-family:inherit;outline:none;" placeholder="Describe el motivo o aclaración…">${safeNote}</textarea>
        <div style="display:flex;gap:6px;margin-top:6px;">
          <button class="btn bp sm" style="flex:1;" onclick="saveOpNovObs('${r.invId}','${r.loc}','${r.code}','${tid}','${cid}')">💾 Guardar observación</button>
        </div>
        <div id="${cid}-msg" style="font-size:11px;color:var(--ok);margin-top:6px;display:none;">✅ Guardado. Se ocultará en 5 segundos…</div>
      </div>
    </div>`;
  }).join('');
}
function saveOpNovObs(invId,locCode,code,tid,cid){
  const ta=document.getElementById(tid); if(!ta) return;
  const val=ta.value.trim();
  const db=getDB();
  const inv=(db.inventories||[]).find(i=>String(i.id)===String(invId));
  if(!inv){flash('No se encontró el inventario','wn');return;}
  const loc=(inv.locations||[]).find(l=>l.code===locCode);
  if(!loc||!loc.items||!loc.items[code]){flash('No se encontró la referencia','wn');return;}
  loc.items[code].note=val;
  loc.items[code].opReviewed=true;
  // si es inventario en curso, actualizar ACTIVE también
  setDB(db);
  if(typeof ACTIVE!=='undefined' && ACTIVE && ACTIVE.id===inv.id){
    try{
      const aLoc=(ACTIVE.locations||[]).find(l=>l.code===locCode);
      if(aLoc&&aLoc.items&&aLoc.items[code]){aLoc.items[code].note=val;aLoc.items[code].opReviewed=true;saveActive(ACTIVE);}
      if(ACTIVE.cur&&ACTIVE.cur.code===locCode&&ACTIVE.cur.items&&ACTIVE.cur.items[code]){ACTIVE.cur.items[code].note=val;ACTIVE.cur.items[code].opReviewed=true;saveActive(ACTIVE);}
    }catch(e){}
  }
  const msg=document.getElementById(cid+'-msg');
  if(msg) msg.style.display='block';
  const card=document.getElementById(cid);
  if(card){
    card.style.transition='opacity .5s ease, transform .5s ease';
    setTimeout(()=>{card.style.opacity='.35';},100);
    setTimeout(()=>{
      card.style.opacity='0';card.style.transform='translateX(20px)';
    },4500);
    setTimeout(()=>{
      if(card.parentNode) card.parentNode.removeChild(card);
      renderOpNovedades();
      updOpNovBadge();
    },5000);
  }
  flash('Observación guardada ✓','ok');
}
/* ══════════════════════════════════════════════════════
   NOVEDADES GESTIONADAS — panel compartido (op/admin/master)
   Muestra todas las novedades con veredicto del admin/master.
   - Operadores: ven solo las suyas
   - Admin/Master: ven todas
====================================================== */
let _gestTab='all';
let _gestFilters={user:'',period:'',verdict:'all',applied:false};
function initGestionadas(){
  _gestTab='all';
  ['all','ok','no'].forEach(t=>{
    const el=document.getElementById('gest-tab-'+t);
    if(el) el.className='tab'+(t==='all'?' on':'');
  });
  const sub=document.getElementById('gest-sub');
  if(sub) sub.textContent=(CUR.role==='admin'||CUR.role==='master')?'Todas las novedades con veredicto':'Mis novedades revisadas';
  _gestFilters={user:'',period:'',verdict:'all',applied:false};
  _populateGestFilterOptions();
  const r=document.getElementById('gest-results'); if(r) r.style.display='none';
  const f=document.getElementById('gest-filters'); if(f) f.style.display='';
  updGestBadgeOp();
}
function _populateGestFilterOptions(){
  const rows=_collectGestionadasRaw();
  const isOp=!(CUR.role==='admin'||CUR.role==='master');
  const uSel=document.getElementById('gest-f-user');
  const pSel=document.getElementById('gest-f-period');
  if(!uSel||!pSel) return;
  // Usuarios
  const users=new Map();
  rows.forEach(r=>{ if(r.inv?.username) users.set(r.inv.username, r.userName||r.inv.username); });
  let uOpts='<option value="">— Todos los usuarios —</option>';
  [...users.entries()].sort((a,b)=>a[1].localeCompare(b[1])).forEach(([k,n])=>{ uOpts+=`<option value="${k}">${n}</option>`; });
  uSel.innerHTML=uOpts;
  if(isOp){ uSel.value=CUR.username; uSel.disabled=true; } else { uSel.disabled=false; }
  // Periodos (YYYY-MM)
  const periods=new Set();
  rows.forEach(r=>{
    const d=r.at||r.inv?.startTime||(r.inv?.date?r.inv.date+'T12:00:00':null);
    if(!d) return;
    const dt=new Date(d); if(isNaN(dt)) return;
    periods.add(dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0'));
  });
  const months=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  let pOpts='<option value="">— Todos los periodos —</option>';
  [...periods].sort().reverse().forEach(p=>{
    const [y,m]=p.split('-'); pOpts+=`<option value="${p}">${months[parseInt(m,10)-1]} ${y}</option>`;
  });
  pSel.innerHTML=pOpts;
}
function applyGestFilters(){
  _gestFilters.user=document.getElementById('gest-f-user')?.value||'';
  _gestFilters.period=document.getElementById('gest-f-period')?.value||'';
  _gestFilters.verdict=document.getElementById('gest-f-verdict')?.value||'all';
  _gestFilters.applied=true;
  _gestTab=_gestFilters.verdict;
  ['all','ok','no'].forEach(t=>{
    const el=document.getElementById('gest-tab-'+t);
    if(el) el.className='tab'+(t===_gestTab?' on':'');
  });
  const r=document.getElementById('gest-results'); if(r) r.style.display='';
  renderGestionadas();
}
function resetGestFilters(){
  const isOp=!(CUR.role==='admin'||CUR.role==='master');
  const u=document.getElementById('gest-f-user'); if(u && !isOp) u.value='';
  const p=document.getElementById('gest-f-period'); if(p) p.value='';
  const v=document.getElementById('gest-f-verdict'); if(v) v.value='all';
  _gestFilters={user:isOp?CUR.username:'',period:'',verdict:'all',applied:false};
  const r=document.getElementById('gest-results'); if(r) r.style.display='none';
}
function setGestTab(tab, el){
  _gestTab=tab;
  _gestFilters.verdict=tab;
  const v=document.getElementById('gest-f-verdict'); if(v) v.value=tab;
  document.querySelectorAll('#screen-gestionadas .tab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  renderGestionadas();
}
function _collectGestionadasRaw(){
  const db=getDB();
  const verdicts=db.novedadVerdicts||{};
  const isOp=!(CUR.role==='admin'||CUR.role==='master');
  const invs = isOp ? getUserInvs(CUR.username) : getAllInvs();
  const byInv={};
  invs.forEach(i=>{byInv[String(i.id)]=i;});
  const rows=[];
  Object.entries(verdicts).forEach(([vKey,vd])=>{
    // vKey: ${invId}_${loc}_${code}  o  ${invId}_${loc}_${code}_missing
    const isMissing=vKey.endsWith('_missing');
    const base=isMissing?vKey.slice(0,-('_missing'.length)):vKey;
    const parts=base.split('_');
    if(parts.length<3) return;
    const invId=parts[0];
    // loc y code: el primer segmento es invId; el resto puede contener "_" en el código.
    // Tomamos loc como segundo segmento y code como el resto.
    const locCode=parts[1];
    const code=parts.slice(2).join('_');
    const inv=byInv[invId];
    if(!inv) return; // no visible para este usuario
    const loc=(inv.locations||[]).find(l=>l.code===locCode);
    if(!loc) continue_skip();
    if(!loc) return;
    const item=loc.items?.[code];
    if(!item) return;
    const v=vd?.v||vd;
    const obs=vd?.obs||'';
    const vphoto=vd?.photo||'';
    const by=vd?.by||'';
    const at=vd?.at||'';
    const userName=getDB().users?.[inv.username]?.name||inv.user||inv.username;
    let type='diff', valHtml='';
    if(item.isExtra){
      type='extra';
      valHtml=`<div style="font-family:var(--fh);font-size:15px;font-weight:800;color:var(--ac2);">${item.counted??'—'}</div><div style="font-size:10px;color:var(--tx2);">uds · extra</div>`;
    } else if(isMissing){
      type='missing';
      valHtml=`<div style="font-family:var(--fh);font-size:13px;font-weight:800;color:var(--wn);">Sin contar</div><div style="font-size:10px;color:var(--tx2);">SAP: ${fmtNum(item.sapStock)}</div>`;
    } else {
      const d=Math.round(((item.counted||0)-(item.sapStock||0))*100)/100;
      valHtml=`<div style="font-family:var(--fh);font-size:15px;font-weight:800;color:var(--dg);">${d>0?'+':''}${fmtNum(d)}</div><div style="font-size:10px;color:var(--tx2);">SAP:${fmtNum(item.sapStock)} / Cnt:${fmtNum(item.counted)}</div>`;
    }
    rows.push({vKey,v,obs,vphoto,by,at,inv,loc:locCode,code,item,userName,type,valHtml});
  });
  // ordenar por fecha de veredicto desc
  rows.sort((a,b)=>String(b.at).localeCompare(String(a.at)));
  return rows;
}
function continue_skip(){}
function _collectGestionadas(){
  let rows=_collectGestionadasRaw();
  if(_gestFilters.user) rows=rows.filter(r=>r.inv?.username===_gestFilters.user);
  if(_gestFilters.period){
    rows=rows.filter(r=>{
      const d=r.at||r.inv?.startTime||(r.inv?.date?r.inv.date+'T12:00:00':null);
      if(!d) return false;
      const dt=new Date(d); if(isNaN(dt)) return false;
      const key=dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0');
      return key===_gestFilters.period;
    });
  }
  return rows;
}
function updGestBadgeOp(){
  const b=document.getElementById('gest-badge-op'); if(!b) return;
  if(CUR.role==='admin'||CUR.role==='master'){b.style.display='none';return;}
  const n=_collectGestionadasRaw().length;
  if(n>0){b.style.display='inline-block';b.textContent=n;} else b.style.display='none';
}
function renderGestionadas(){
  const el=document.getElementById('gest-content'); if(!el) return;
  if(!_gestFilters.applied){
    el.innerHTML='';
    const cnt=document.getElementById('gest-count'); if(cnt) cnt.textContent='';
    return;
  }
  const q=(document.getElementById('gest-search')?.value||'').toUpperCase();
  let rows=_collectGestionadas();
  if(_gestTab==='ok') rows=rows.filter(r=>r.v==='ok');
  else if(_gestTab==='no') rows=rows.filter(r=>r.v==='no');
  if(q) rows=rows.filter(r=>r.code.toUpperCase().includes(q)||(r.item.name||'').toUpperCase().includes(q)||r.loc.toUpperCase().includes(q)||(r.userName||'').toUpperCase().includes(q));
  const cnt=document.getElementById('gest-count');
  if(cnt) cnt.textContent=rows.length?`${rows.length} novedad${rows.length===1?'':'es'} gestionada${rows.length===1?'':'s'}`:'';
  if(!rows.length){
    el.innerHTML='<div class="es"><div class="ei">📭</div><p>Sin novedades gestionadas</p></div>';
    return;
  }
  el.innerHTML=rows.map(r=>{
    const fecha=new Date(r.inv.startTime||(r.inv.date+'T12:00:00')).toLocaleDateString('es-CO',{day:'2-digit',month:'short',year:'numeric'});
    const fechaVer=r.at?new Date(r.at).toLocaleDateString('es-CO',{day:'2-digit',month:'short',year:'numeric'}):'';
    const typeIcon=r.type==='extra'?'🔵':(r.type==='missing'?'🚫':'⚡');
    const typeColor=r.type==='extra'?'var(--ac2)':(r.type==='missing'?'var(--wn)':'var(--dg)');
    const typeLbl=r.type==='extra'?'Extra':(r.type==='missing'?'Sin contar':'Diferencia');
    const badge=r.v==='ok'
      ?`<span class="vrd-badge-ok" style="font-size:11px;">✅ Operador tiene razón</span>`
      :`<span class="vrd-badge-no" style="font-size:11px;">⚠️ Operador no tiene razón</span>`;
    const opNote=(r.item.note||'').trim();
    const opNoteShow=opNote && opNote!=='Referencia no contada al cerrar la ubicación' && opNote!=='Referencia no contada al cerrar el inventario';
    const opObsHtml=opNoteShow
      ?`<div style="margin-top:6px;font-size:11px;color:var(--tx);background:rgba(255,182,39,.08);border-left:2px solid var(--wn);border-radius:6px;padding:6px 9px;"><b style="color:var(--wn);">📝 Observación operador:</b> ${r.item.note}</div>`:'';
    const admObsHtml=r.obs
      ?`<div style="margin-top:6px;font-size:11px;color:var(--tx);background:var(--sf2);border-left:2px solid var(--ac);border-radius:6px;padding:6px 9px;"><b style="color:var(--ac);">💬 Observación ${r.by||'admin'}:</b> ${r.obs}</div>`
      :`<div style="margin-top:6px;font-size:11px;color:var(--tx3);font-style:italic;">— Sin observación adicional del administrador —</div>`;
    const photoHtml=r.item.photo
      ?`<div style="margin-top:8px;display:flex;align-items:center;gap:10px;background:rgba(180,108,255,.06);border:1px solid rgba(180,108,255,.25);border-radius:8px;padding:6px 8px;cursor:zoom-in;" onclick="openPhotoViewer(this.querySelector('img').src,'Foto del operador · ${r.userName||''} · ${r.code}')">
          <img src="${r.item.photo}" style="width:64px;height:64px;object-fit:cover;border-radius:6px;flex-shrink:0;display:block;border:1px solid rgba(180,108,255,.35);pointer-events:none;">
          <div style="flex:1;min-width:0;">
            <div style="font-size:11px;font-weight:700;color:var(--pu);">📷 Foto del operador</div>
            <div style="font-size:10.5px;color:var(--tx2);margin-top:1px;">👤 ${r.userName||'—'}</div>
            <div style="font-size:9.5px;color:var(--tx3);margin-top:1px;">${r.code} · ${r.loc} · toca para ampliar</div>
          </div>
        </div>`:'';
    const admPhotoHtml=r.vphoto
      ?`<div style="margin-top:8px;display:flex;align-items:center;gap:10px;background:rgba(0,229,160,.06);border:1px solid rgba(0,229,160,.3);border-radius:8px;padding:6px 8px;cursor:zoom-in;" onclick="openPhotoViewer(this.querySelector('img').src,'Foto del veredicto · ${r.by||'admin'} · ${r.code}')">
          <img src="${r.vphoto}" style="width:64px;height:64px;object-fit:cover;border-radius:6px;flex-shrink:0;display:block;border:1px solid rgba(0,229,160,.4);pointer-events:none;">
          <div style="flex:1;min-width:0;">
            <div style="font-size:11px;font-weight:700;color:var(--ac);">📷 Foto del veredicto</div>
            <div style="font-size:10.5px;color:var(--tx2);margin-top:1px;">🛡 ${r.by||'admin'}</div>
            <div style="font-size:9.5px;color:var(--tx3);margin-top:1px;">${r.code} · ${r.loc} · toca para ampliar</div>
          </div>
        </div>`:'';
    const delBtn=isMaster()
      ?`<button onclick="deleteGestionada('${r.vKey}')" title="Eliminar novedad gestionada" style="background:rgba(255,90,90,.12);border:1px solid rgba(255,90,90,.4);color:#ff6b6b;border-radius:6px;padding:3px 8px;font-size:11px;font-weight:700;cursor:pointer;margin-left:auto;">🗑 Eliminar</button>`:'';
    return `<div class="pan" style="margin:0 0 10px;padding:12px 14px;border-left:3px solid ${typeColor};">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
        <div style="flex:1;min-width:0;">
          <div style="font-family:var(--fh);font-weight:800;font-size:14px;color:${typeColor};">${typeIcon} ${r.code} <span style="font-size:10px;font-weight:700;color:var(--tx3);background:var(--sf2);padding:2px 6px;border-radius:5px;margin-left:4px;">${typeLbl}</span></div>
          <div style="font-size:12px;color:var(--tx2);margin-top:2px;">${r.item.name||'—'}</div>
          <div style="font-size:11px;color:var(--tx3);margin-top:3px;">📍 ${r.loc} · 👤 ${r.userName} · 🗓 ${fecha}</div>
        </div>
        <div style="text-align:right;flex-shrink:0;">${r.valHtml}</div>
      </div>
      <div style="margin-top:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
        ${badge}
        ${fechaVer?`<span style="font-size:10px;color:var(--tx3);">— veredicto ${r.by||''} · ${fechaVer}</span>`:''}
        ${delBtn}
      </div>
      ${admObsHtml}
      ${admPhotoHtml}
      ${opObsHtml}
      ${photoHtml}
    </div>`;
  }).join('');
}

function deleteGestionada(vKey){
  if(!isMaster()){ alert('Solo el usuario master puede eliminar novedades gestionadas.'); return; }
  confirmAuditAction('Eliminar novedad gestionada','Se borrará el veredicto, la observación y la foto adjunta. Esta acción no se puede deshacer.',()=>{
    const db=getDB();
    const prev = db.novedadVerdicts && db.novedadVerdicts[vKey];
    if(prev){
      logAudit('gestionada.delete', `Eliminó novedad gestionada (${vKey})`, {vKey, prev});
      delete db.novedadVerdicts[vKey];
      setDB(db);
    }
    renderGestionadas();
    try{ updateGestBadge && updateGestBadge(); }catch(e){}
  });
}

/* ══════════════════════════════════════════════════════
   🪵 BITÁCORA — registro de movimientos sensibles
   ══════════════════════════════════════════════════════ */
function logAudit(action, summary, details){
  try{
    if(typeof isMaster==='function' && isMaster()) return; // master no deja registro
    const db=getDB();
    if(!Array.isArray(db.auditLog)) db.auditLog=[];
    db.auditLog.push({
      id: 'a_'+Date.now()+'_'+Math.random().toString(36).slice(2,7),
      at: new Date().toISOString(),
      action: action||'unknown',
      summary: summary||'',
      actor: CUR ? (CUR.username||'') : '',
      actorName: CUR ? (CUR.name||CUR.username||'') : '',
      actorRole: CUR ? (CUR.role||'') : '',
      details: details||null
    });
    // Limitar a las últimas 1000 entradas
    if(db.auditLog.length>1000) db.auditLog = db.auditLog.slice(-1000);
    setDB(db);
  }catch(e){ console.warn('logAudit err',e); }
}

// Wrapper de confirmación con advertencia explícita para admin
function confirmAuditAction(title, msg, onOk, onCancel){
  const isAdm = CUR && CUR.role==='admin';
  const isMa = CUR && CUR.role==='master';
  const warn = isAdm
    ? '\n\n⚠️ Esta acción quedará registrada en la Bitácora del administrador.'
    : '';
  appConfirm(title, (msg||'') + warn, ()=>{
    // Si es admin o master, exigir contraseña antes de ejecutar la acción destructiva
    if(isAdm || isMa){
      requirePassword(title, 'Por seguridad, confirma esta acción con tu contraseña.', onOk, onCancel);
    } else {
      if(onOk) onOk();
    }
  }, onCancel);
}

/* ── Confirmación con contraseña para acciones destructivas (admin/master) ── */
function requirePassword(title, msg, onOk, onCancel){
  if(!CUR || !CUR.username){ if(onOk) onOk(); return; }
  const mo = document.getElementById('pwconf-mo');
  if(!mo){ if(onOk) onOk(); return; }
  document.getElementById('pwconf-ti').textContent = title || 'Confirmar con contraseña';
  document.getElementById('pwconf-msg').textContent = msg || 'Confirma esta acción con tu contraseña.';
  document.getElementById('pwconf-user').textContent = '@' + CUR.username;
  const inp = document.getElementById('pwconf-pass');
  const err = document.getElementById('pwconf-err');
  const ok  = document.getElementById('pwconf-ok');
  const cnl = document.getElementById('pwconf-cancel');
  inp.value = ''; err.textContent = '';
  mo.style.display = 'flex';
  setTimeout(()=>{ try{ inp.focus(); }catch(e){} }, 50);
  function cleanup(){
    mo.style.display='none';
    ok.onclick=null; cnl.onclick=null; inp.onkeydown=null;
  }
  function tryConfirm(){
    const pass = inp.value || '';
    if(!pass){ err.textContent='Ingresa tu contraseña'; return; }
    const db = getDB();
    const u = db.users && db.users[CUR.username];
    if(!u || u.password !== hash(pass)){
      err.textContent = 'Contraseña incorrecta';
      inp.select();
      return;
    }
    cleanup();
    if(onOk) onOk();
  }
  ok.onclick = tryConfirm;
  cnl.onclick = ()=>{ cleanup(); if(onCancel) onCancel(); };
  inp.onkeydown = (e)=>{ if(e.key==='Enter'){ e.preventDefault(); tryConfirm(); } };
}

function renderBitacora(){
  const list = document.getElementById('bit-list'); if(!list) return;
  const db = getDB();
  const log = Array.isArray(db.auditLog) ? db.auditLog.slice().reverse() : [];
  const masterHint = document.getElementById('bit-master-hint');
  const masterActs = document.getElementById('bit-master-actions');
  if(masterHint) masterHint.style.display = isMaster() ? '' : 'none';
  if(masterActs) masterActs.style.display = isMaster() ? '' : 'none';

  // Poblar filtros
  const actorSel = document.getElementById('bit-actor-filter');
  const typeSel  = document.getElementById('bit-type-filter');
  const curActor = actorSel ? actorSel.value : '';
  const curType  = typeSel  ? typeSel.value  : '';
  if(actorSel){
    const actors = Array.from(new Set(log.map(e=>e.actor).filter(Boolean))).sort();
    actorSel.innerHTML = '<option value="">Todos los actores</option>' +
      actors.map(a=>{
        const nm = (db.users && db.users[a] && db.users[a].name) || a;
        return `<option value="${a}"${a===curActor?' selected':''}>${nm} (@${a})</option>`;
      }).join('');
  }
  if(typeSel){
    const types = Array.from(new Set(log.map(e=>e.action))).sort();
    typeSel.innerHTML = '<option value="">Todos los tipos</option>' +
      types.map(t=>`<option value="${t}"${t===curType?' selected':''}>${t}</option>`).join('');
  }

  const q = (document.getElementById('bit-q')?.value||'').toLowerCase().trim();
  const filt = log.filter(e=>{
    if(curActor && e.actor!==curActor) return false;
    if(curType  && e.action!==curType) return false;
    if(q){
      const hay = (e.summary+' '+e.actor+' '+e.actorName+' '+e.action+' '+JSON.stringify(e.details||{})).toLowerCase();
      if(!hay.includes(q)) return false;
    }
    return true;
  });

  if(!filt.length){
    list.innerHTML = `<div style="text-align:center;padding:30px 20px;color:var(--tx3);font-size:13px;">No hay registros en la bitácora.</div>`;
    return;
  }

  list.innerHTML = filt.map(e=>{
    const d = new Date(e.at);
    const fecha = isNaN(d) ? e.at : (d.toLocaleDateString('es-CO',{day:'2-digit',month:'short',year:'numeric'})+' · '+d.toLocaleTimeString('es-CO',{hour:'2-digit',minute:'2-digit'}));
    const roleIc = e.actorRole==='master' ? '👑' : (e.actorRole==='admin' ? '🛡' : '👤');
    const delBtn = isMaster()
      ? `<button onclick="deleteAuditEntry('${e.id}')" title="Eliminar registro" style="background:rgba(255,90,90,.12);border:1px solid rgba(255,90,90,.4);color:#ff6b6b;border-radius:6px;padding:3px 8px;font-size:11px;font-weight:700;cursor:pointer;">🗑</button>`
      : '';
    return `<div class="pan" style="margin:0 0 8px;padding:10px 12px;border-left:3px solid rgba(255,180,60,.6);">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
        <div style="flex:1;min-width:0;">
          <div style="font-family:var(--fh);font-weight:800;font-size:13px;color:var(--tx);">${e.summary||e.action}</div>
          <div style="font-size:11px;color:var(--tx3);margin-top:3px;">${roleIc} ${e.actorName||e.actor||'—'} · <span style="color:var(--tx2);">${e.action}</span> · 🗓 ${fecha}</div>
        </div>
        ${delBtn}
      </div>
    </div>`;
  }).join('');
}

function deleteAuditEntry(id){
  if(!isMaster()){ alert('Solo el master puede eliminar registros de la bitácora.'); return; }
  confirmAuditAction('Eliminar registro de bitácora','¿Eliminar este registro de la bitácora?\n\nEsta acción no se puede deshacer.',()=>{
    const db=getDB();
    if(Array.isArray(db.auditLog)){
      db.auditLog = db.auditLog.filter(e=>e.id!==id);
      setDB(db);
    }
    renderBitacora();
  });
}

function clearAuditLog(){
  if(!isMaster()){ alert('Solo el master puede borrar la bitácora.'); return; }
  confirmAuditAction('Borrar bitácora completa','¿Borrar TODOS los registros de la bitácora?\n\nEsta acción no se puede deshacer.',()=>{
    const db=getDB();
    db.auditLog = [];
    setDB(db);
    renderBitacora();
  });
}


/* === RutaMsg module === */
/* ══════════════════════════════════════════════════════
   RUTAMSG — Vanilla JS module, Firebase-backed
   Datos en _dbCache.rutamsg = { contacts:{}, queue:[], template:"..." }
══════════════════════════════════════════════════════ */
(function(){
  var DEFAULT_TPL = "Hola {nombre}, tu pedido #{pedido} ya va en camino. ¡Pronto lo tendrás en tus manos! Por favor estar atento al celular, en un momento el conductor se comunicara con usted para coordinar la entrega. Gracias por tu compra.\n\n*Almacenes Corona*";
  var TTL_MS = 24*60*60*1000;
  var _tickHnd = null, _schedHnd = null, _fired = false;

  function rmState(){
    var db = (typeof getDB==='function') ? getDB() : {};
    if(!db.rutamsg) db.rutamsg = { contacts:{}, queue:[], template:DEFAULT_TPL, sessions:[] };
    if(!db.rutamsg.contacts) db.rutamsg.contacts = {};
    if(!Array.isArray(db.rutamsg.queue)) db.rutamsg.queue = [];
    if(typeof db.rutamsg.template!=='string') db.rutamsg.template = DEFAULT_TPL;
    if(!Array.isArray(db.rutamsg.sessions)) db.rutamsg.sessions = [];
    return db;
  }
  // Sesión de envíos (gated por contraseña)
  var _rmUnlocked = false;
  var _rmSessionId = null;
  window.rmIsUnlocked = function(){ return _rmUnlocked; };
  window.rmLockReset = function(){ _rmUnlocked = false; _rmSessionId = null; };
  window.rmUnlock = function(){
    if(typeof requirePassword !== 'function' || !window.CUR || !CUR.username){
      _rmUnlocked = true; _rmSessionId = null; rmRender(); return;
    }
    requirePassword(
      '🔓 Habilitar envíos de WhatsApp',
      'Confirma tu contraseña para habilitar los botones 💬 y abrir un registro de envíos.',
      function(){
        _rmUnlocked = true;
        _rmSessionId = 's_' + Date.now() + '_' + Math.random().toString(36).slice(2,7);
        rmSave(function(rm){
          rm.sessions = rm.sessions || [];
          rm.sessions.push({
            id: _rmSessionId,
            actor: (CUR&&CUR.username)||'',
            actorName: (CUR&&CUR.name)||(CUR&&CUR.username)||'',
            actorRole: (CUR&&CUR.role)||'',
            startedAt: Date.now(),
            entries: []
          });
          if(rm.sessions.length > 200) rm.sessions = rm.sessions.slice(-200);
        });
        if(typeof logAudit==='function'){
          logAudit('rutamsg.unlock','Habilitó envíos de WhatsApp (RutaMsg)',{ sessionId:_rmSessionId });
        }
        rmRender();
      }
    );
  };
  window.rmLogSend = function(qid){
    if(!_rmUnlocked || !_rmSessionId) return;
    var db = rmState();
    var item = (db.rutamsg.queue||[]).find(function(c){ return c.id===qid; });
    if(!item) return;
    rmSave(function(rm){
      // marcar como enviado automáticamente al abrir WhatsApp
      rm.queue = (rm.queue||[]).map(function(c){
        return c.id===qid ? Object.assign({}, c, { sent:true, sentBy:(window.CUR&&CUR.username)||'?', sentAt:Date.now() }) : c;
      });
      var s = (rm.sessions||[]).find(function(x){ return x.id===_rmSessionId; });
      if(!s) return;
      s.entries = s.entries || [];
      s.entries.push({
        at: Date.now(),
        nombre: item.nombre||'',
        celular: item.celular||'',
        pedido: item.pedido||''
      });
    });
    rmRender();
  };
  window.rmDeleteSession = function(sid){
    if(!window.CUR || CUR.role!=='master'){ if(typeof flash==='function') flash('Solo el master puede eliminar registros','dg'); return; }
    var doDel = function(){
      rmSave(function(rm){ rm.sessions = (rm.sessions||[]).filter(function(s){ return s.id!==sid; }); });
      if(typeof logAudit==='function') logAudit('rutamsg.session.delete','Eliminó registro de envíos RutaMsg',{ sessionId:sid });
      rmRender();
    };
    if(typeof appConfirm==='function'){
      appConfirm('Eliminar registro','¿Eliminar este registro de envíos? Esta acción no se puede deshacer.', doDel);
    } else { doDel(); }
  };
  function rmSave(mut){
    var db = rmState();
    mut(db.rutamsg);
    // Limpieza TTL
    var now = Date.now();
    db.rutamsg.queue = db.rutamsg.queue.filter(function(c){ return c.expiresAt > now; });
    if(typeof setDB==='function') setDB(db);
  }
  function rmFmtPhone(p){
    var c = String(p||'').replace(/[\s\-\(\)]/g,'');
    if(c.startsWith('0')) c = c.slice(1);
    if(!c.startsWith('+') && !c.startsWith('57')) c = '57' + c;
    if(c.startsWith('+')) c = c.slice(1);
    return c;
  }
  function rmWaLink(p,m){ return 'https://wa.me/' + rmFmtPhone(p) + '?text=' + encodeURIComponent(m); }
  function rmParse(tpl,v){
    return String(tpl||'')
      .replace(/\{nombre\}/gi,  v.nombre||'')
      .replace(/\{pedido\}/gi,  v.pedido||'')
      .replace(/\{celular\}/gi, v.celular||'');
  }
  function rmEsc(s){ return String(s==null?'':s).replace(/[&<>"']/g, function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }
  function rmTimeLeft(exp){
    var d = exp - Date.now(); if(d<=0) return null;
    var h = Math.floor(d/3600000), m = Math.floor((d%3600000)/60000);
    return h + 'h ' + String(m).padStart(2,'0') + 'm';
  }
  function rmTtlPct(c,e){
    var tot = e - c, el = Date.now() - c;
    return Math.max(0, Math.min(100, 100 - (el/tot)*100));
  }

  // ── Public API ──
  window.rmInit = function(){
    _rmUnlocked = false; _rmSessionId = null;
    var st = rmState();
    document.getElementById('rm-tpl').value = st.rutamsg.template;
    var ts = document.getElementById('rm-sched-time');
    if(ts && !ts.value){
      var t = new Date(); t.setDate(t.getDate()+1); t.setHours(8,0,0,0);
      var pad = function(n){return String(n).padStart(2,'0');};
      ts.value = t.getFullYear()+'-'+pad(t.getMonth()+1)+'-'+pad(t.getDate())+'T'+pad(t.getHours())+':'+pad(t.getMinutes());
    }
    if(_tickHnd) clearInterval(_tickHnd);
    _tickHnd = setInterval(function(){
      if(document.getElementById('screen-rutamsg').classList.contains('active')) rmRender();
    }, 30000);
    rmRender();
  };

  window.rmSetTab = function(t){
    ['add','tpl','send'].forEach(function(k){
      var btn = document.getElementById('rm-tab-'+k);
      var pn  = document.getElementById('rm-pane-'+k);
      if(btn) btn.classList.toggle('rm-tab-on', k===t);
      if(pn)  pn.style.display = (k===t) ? '' : 'none';
    });
  };

  window.rmToggleDB = function(){
    var p = document.getElementById('rm-db-panel');
    var isHidden = (p.style.display === 'none');
    p.style.display = isHidden ? 'block' : 'none';
    var b = document.getElementById('rm-btn-db');
    if(b) b.style.background = isHidden ? 'rgba(249,115,22,.18)' : '';
    rmRender();
  };

  window.rmSugg = function(){
    var inp = document.getElementById('rm-cel');
    var box = document.getElementById('rm-sugg');
    var q = (inp.value||'').replace(/[\s\-\(\)]/g,'').toLowerCase();
    if(!q){ box.style.display='none'; return; }
    var st = rmState();
    var matches = Object.entries(st.rutamsg.contacts).filter(function(e){
      var k=e[0], v=e[1];
      return k.indexOf(q)>-1 || (v.celular||'').replace(/[\s\-\(\)]/g,'').toLowerCase().indexOf(q)>-1 || (v.nombre||'').toLowerCase().indexOf(q)>-1;
    }).slice(0,6);
    if(!matches.length){ box.style.display='none'; return; }
    box.innerHTML = matches.map(function(e){
      var k=e[0], v=e[1];
      return '<div class="rm-sugg-item" data-cel="'+rmEsc(v.celular)+'" data-nom="'+rmEsc(v.nombre)+'" style="padding:9px 12px;cursor:pointer;display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--bd);">'+
        '<div style="width:28px;height:28px;border-radius:50%;background:rgba(249,115,22,.15);border:1.5px solid rgba(249,115,22,.4);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#f97316;">'+rmEsc((v.nombre||'?')[0].toUpperCase())+'</div>'+
        '<div style="flex:1;min-width:0;"><div style="font-weight:600;font-size:13px;color:var(--tx);">'+rmEsc(v.nombre)+'</div><div style="font-size:11px;color:var(--tx3);">'+rmEsc(v.celular)+'</div></div>'+
        '<div style="font-size:10px;color:#f97316;">↩</div></div>';
    }).join('');
    Array.from(box.querySelectorAll('.rm-sugg-item')).forEach(function(el){
      el.onmousedown = function(){
        document.getElementById('rm-cel').value = el.dataset.cel;
        document.getElementById('rm-nom').value = el.dataset.nom;
        box.style.display='none';
      };
    });
    box.style.display='';
  };

  document.addEventListener('mousedown', function(e){
    var b = document.getElementById('rm-sugg');
    if(b && !e.target.closest('#rm-sugg') && !e.target.closest('#rm-cel')) b.style.display='none';
  });

  window.rmProgramar = function(){
    var cel = document.getElementById('rm-cel').value.trim();
    var nom = document.getElementById('rm-nom').value.trim();
    var ped = document.getElementById('rm-ped').value.trim();
    if(!cel || !nom){ if(window.flash) flash('⚠️ Celular y nombre son obligatorios','wn'); return; }
    var key = rmFmtPhone(cel);
    var msg = '';
    rmSave(function(rm){
      var cur = rm.contacts[key];
      if(!cur){ rm.contacts[key] = { nombre:nom, celular:cel }; msg='✅ Contacto guardado en BD'; }
      else if(cur.nombre !== nom){ rm.contacts[key] = { nombre:nom, celular:cel }; msg='🔄 Nombre actualizado'; }
      else { msg='ℹ️ Contacto ya registrado'; }
      var dup = rm.queue.some(function(c){ return rmFmtPhone(c.celular)===key && c.pedido===ped; });
      if(!dup){
        var now = Date.now();
        rm.queue.push({ id:now+'_'+Math.random().toString(36).slice(2,7), celular:cel, nombre:nom, pedido:ped, createdAt:now, expiresAt:now+TTL_MS, sent:false, createdBy:(window.CUR&&CUR.username)||'?' });
      } else { msg = 'ℹ️ Este pedido ya está en la lista de envío'; }
    });
    document.getElementById('rm-cel').value='';
    document.getElementById('rm-nom').value='';
    document.getElementById('rm-ped').value='';
    if(window.flash) flash(msg,'ok');
    rmRender();
  };

  window.rmTplChange = function(){
    var v = document.getElementById('rm-tpl').value;
    rmSave(function(rm){ rm.template = v; });
  };
  window.rmTplAdd = function(tk){
    var ta = document.getElementById('rm-tpl');
    ta.value = (ta.value||'') + tk;
    rmTplChange();
    rmRender();
  };
  window.rmTplReset = function(){
    document.getElementById('rm-tpl').value = DEFAULT_TPL;
    rmTplChange();
    rmRender();
  };

  window.rmToggleSent = function(id){
    rmSave(function(rm){
      rm.queue = rm.queue.map(function(c){ return c.id===id ? Object.assign({}, c, { sent: !c.sent, sentBy: !c.sent ? ((window.CUR&&CUR.username)||'?') : c.sentBy, sentAt: !c.sent ? Date.now() : null }) : c; });
    });
    rmRender();
  };
  window.rmRemove = function(id){
    rmSave(function(rm){ rm.queue = rm.queue.filter(function(c){ return c.id!==id; }); });
    rmRender();
  };
  window.rmClearQueue = function(){
    if(!confirm('¿Limpiar TODA la lista de envío? Esta acción afecta a todos los usuarios.')) return;
    rmSave(function(rm){ rm.queue = []; });
    _fired = false;
    document.getElementById('rm-sched-on').checked = false;
    rmSchedToggle();
    rmRender();
  };
  window.rmDelContact = function(key){
    rmSave(function(rm){ delete rm.contacts[key]; });
    rmRender();
  };

  window.rmSchedToggle = function(){
    var on = document.getElementById('rm-sched-on').checked;
    document.getElementById('rm-sched-box').style.display = on ? 'flex' : 'none';
    document.getElementById('rm-sched-cd').style.display = 'none';
    document.getElementById('rm-sched-fired').style.display = 'none';
    if(_schedHnd){ clearInterval(_schedHnd); _schedHnd=null; }
    _fired = false;
    if(on) rmSchedTick();
    rmRender();
  };
  window.rmSchedReset = function(){
    _fired = false;
    document.getElementById('rm-sched-fired').style.display='none';
    if(_schedHnd){ clearInterval(_schedHnd); _schedHnd=null; }
    if(document.getElementById('rm-sched-on').checked) rmSchedTick();
  };
  function rmSchedTick(){
    var update = function(){
      var t = document.getElementById('rm-sched-time').value;
      if(!t) return;
      var diff = new Date(t).getTime() - Date.now();
      var cd = document.getElementById('rm-sched-cd');
      var fi = document.getElementById('rm-sched-fired');
      if(diff<=0){
        _fired = true;
        cd.style.display='none';
        fi.style.display='';
        if(_schedHnd){ clearInterval(_schedHnd); _schedHnd=null; }
        rmRender();
      } else {
        var h=Math.floor(diff/3600000), m=Math.floor((diff%3600000)/60000), s=Math.floor((diff%60000)/1000);
        cd.textContent = '⏳ '+String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
        cd.style.display='';
      }
    };
    update();
    _schedHnd = setInterval(update, 1000);
  }

  window.rmSendAllPending = function(){
    if(!_rmUnlocked){ if(typeof flash==='function') flash('Primero habilita los envíos con tu contraseña','wn'); return; }
    var st = rmState();
    var tpl = st.rutamsg.template;
    var pending = st.rutamsg.queue.filter(function(c){ return !c.sent; });
    pending.forEach(function(c,i){
      setTimeout(function(){
        window.open(rmWaLink(c.celular, rmParse(tpl,c)), '_blank');
        try{ rmLogSend(c.id); }catch(e){}
      }, i*900);
    });
    setTimeout(function(){
      rmSave(function(rm){ rm.queue = rm.queue.map(function(c){ return Object.assign({}, c, { sent:true, sentBy:(window.CUR&&CUR.username)||'?', sentAt:Date.now() }); }); });
      rmRender();
    }, pending.length*900 + 300);
  };

  window.rmRender = function(){
    var st = rmState();
    var rm = st.rutamsg;

    // Stats header
    var sent = rm.queue.filter(function(c){return c.sent;}).length;
    var pend = rm.queue.length - sent;
    var statsEl = document.getElementById('rm-stats');
    if(rm.queue.length){
      statsEl.style.display='';
      statsEl.innerHTML = '<span style="color:#22c55e;font-weight:700;">'+sent+'</span> enviado'+(sent!==1?'s':'')+
        ' · <span style="color:#f97316;font-weight:700;">'+pend+'</span> pendiente'+(pend!==1?'s':'')+
        ' · <span style="color:var(--tx);font-weight:700;">'+rm.queue.length+'</span> total';
    } else statsEl.style.display='none';

    // Contacts count
    var ck = Object.keys(rm.contacts).length;
    document.getElementById('rm-db-count').textContent = ck;

    // Send tab label
    document.getElementById('rm-tab-send-lbl').textContent = '🚚 Enviar' + (rm.queue.length?' ('+rm.queue.length+')':'');

    // Badges
    var bo = document.getElementById('rm-badge-op'); if(bo){ bo.style.display = pend?'':'none'; bo.textContent = pend; }
    var ba = document.getElementById('rm-badge-ad'); if(ba){ ba.style.display = pend?'':'none'; ba.textContent = pend; }

    // DB list
    var dbpanel = document.getElementById('rm-db-panel');
    if(dbpanel.style.display !== 'none'){
      var search = (document.getElementById('rm-db-search').value||'').toLowerCase();
      var entries = Object.entries(rm.contacts).filter(function(e){
        if(!search) return true;
        var v=e[1];
        return (v.nombre||'').toLowerCase().indexOf(search)>-1 || (v.celular||'').indexOf(search)>-1;
      });
      var list = document.getElementById('rm-db-list');
      if(!entries.length){
        list.innerHTML = '<div style="color:var(--tx3);font-size:12px;grid-column:1/-1;">'+(ck===0?'Aún no hay clientes guardados.':'Sin resultados.')+'</div>';
      } else {
        list.innerHTML = entries.map(function(e){
          var k=e[0], v=e[1];
          return '<div style="background:var(--sf);border:1px solid var(--bd);border-radius:9px;padding:9px 11px;display:flex;align-items:center;gap:9px;">'+
            '<div style="width:26px;height:26px;border-radius:50%;background:rgba(249,115,22,.15);border:1.5px solid rgba(249,115,22,.4);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#f97316;flex-shrink:0;">'+rmEsc((v.nombre||'?')[0].toUpperCase())+'</div>'+
            '<div style="flex:1;min-width:0;"><div style="font-weight:600;font-size:12px;color:var(--tx);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">'+rmEsc(v.nombre)+'</div><div style="font-size:10px;color:var(--tx3);">'+rmEsc(v.celular)+'</div></div>'+
            '<button onclick="rmDelContact(\''+rmEsc(k)+'\')" style="background:none;border:none;color:#ff6060;cursor:pointer;font-size:16px;padding:0 4px;">×</button></div>';
        }).join('');
      }
    }

    // Template preview
    document.getElementById('rm-tpl').value = rm.template;
    if(rm.queue.length){
      document.getElementById('rm-tpl-preview').style.display='';
      document.getElementById('rm-tpl-preview-lbl').textContent = 'Vista previa — ' + rm.queue[0].nombre;
      document.getElementById('rm-tpl-preview-body').textContent = rmParse(rm.template, rm.queue[0]);
    } else { document.getElementById('rm-tpl-preview').style.display='none'; }

    // Send list
    var schedReady = (_fired || !document.getElementById('rm-sched-on').checked);
    var canSend = rm.queue.length>0 && schedReady && _rmUnlocked;
    var sendList = document.getElementById('rm-send-list');
    // Banner unlock (siempre visible — incluso si la cola está vacía)
    var unlockBanner = '';
    if(!_rmUnlocked){
      unlockBanner = '<button onclick="rmUnlock()" style="width:100%;margin-bottom:12px;background:linear-gradient(135deg,rgba(249,115,22,.18),rgba(234,88,12,.08));border:1px solid rgba(249,115,22,.45);border-radius:11px;padding:13px;font-size:13px;font-weight:700;color:#fb923c;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;">🔒 Habilitar envíos · pedir contraseña</button>';
    } else {
      unlockBanner = '<div style="width:100%;margin-bottom:12px;background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.3);border-radius:11px;padding:9px 12px;font-size:12px;color:#22c55e;display:flex;align-items:center;gap:8px;"><span>🔓</span><span style="flex:1;">Envíos habilitados — se está registrando esta sesión</span></div>';
    }
    if(!rm.queue.length){
      sendList.innerHTML = unlockBanner + '<div style="text-align:center;padding:44px;color:var(--tx3);background:var(--sf2);border-radius:12px;"><div style="font-size:34px;margin-bottom:8px;">📦</div><div style="font-weight:600;color:var(--tx2);margin-bottom:4px;">Sin pedidos en camino</div><div style="font-size:12px;">Ve a <b>Nuevo</b> y agrega uno.</div></div>';
    } else {
      var reason = !_rmUnlocked ? 'Habilita los envíos para activar los botones 💬.' : (!schedReady ? 'Activa el envío o espera la hora programada.' : 'Toca 💬 para abrir WhatsApp. Marca ✓ cuando lo envíes.');
      var hint = unlockBanner + '<div style="font-size:11px;color:var(--tx3);margin-bottom:10px;">'+reason+'</div>';
      var rows = rm.queue.map(function(c,i){
        var pct = rmTtlPct(c.createdAt, c.expiresAt);
        var left = rmTimeLeft(c.expiresAt);
        var msg = rmParse(rm.template, c);
        var link = rmWaLink(c.celular, msg);
        var barCol = pct>50 ? '#22c55e' : pct>20 ? '#f97316' : '#ef4444';
        var sentBadge = c.sent ? '<span style="background:rgba(34,197,94,.18);border:1px solid rgba(34,197,94,.4);border-radius:20px;padding:1px 8px;font-size:10px;color:#22c55e;font-weight:700;">✓ '+rmEsc(c.sentBy||'enviado')+'</span>' : '';
        var pedBadge = c.pedido ? '<span style="background:rgba(249,115,22,.15);border:1px solid rgba(249,115,22,.4);border-radius:20px;padding:1px 8px;font-size:10px;color:#f97316;font-weight:700;">#'+rmEsc(c.pedido)+'</span>' : '';
        var byBadge = c.createdBy ? '<span style="font-size:10px;color:var(--tx3);">por '+rmEsc(c.createdBy)+'</span>' : '';
        return '<div class="rm-row '+(c.sent?'sent':'')+'" style="opacity:'+(canSend?1:.55)+';">'+
          '<div style="display:flex;align-items:center;gap:10px;">'+
            '<div style="width:28px;height:28px;border-radius:50%;background:'+(c.sent?'rgba(34,197,94,.18)':'rgba(249,115,22,.18)')+';border:2px solid '+(c.sent?'rgba(34,197,94,.4)':'rgba(249,115,22,.4)')+';display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:'+(c.sent?'#22c55e':'#f97316')+';flex-shrink:0;">'+(i+1)+'</div>'+
            '<div style="flex:1;min-width:0;">'+
              '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;"><span style="font-weight:700;font-size:13px;color:var(--tx);">'+rmEsc(c.nombre)+'</span>'+pedBadge+sentBadge+'</div>'+
              '<div style="font-size:11px;color:var(--tx3);margin-top:1px;">'+rmEsc(c.celular)+' · '+byBadge+'</div>'+
              '<div style="font-size:11px;color:var(--tx2);margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">'+rmEsc(msg)+'</div>'+
            '</div>'+
            '<div style="display:flex;gap:5px;flex-shrink:0;">'+
              (canSend?'<a href="'+link+'" target="_blank" onclick="rmLogSend(\''+c.id+'\')" class="rm-icbtn" style="background:rgba(34,197,94,.18);border-color:rgba(34,197,94,.4);color:#22c55e;text-decoration:none;" title="Abrir WhatsApp">💬</a>':'<button class="rm-icbtn" disabled title="Habilita los envíos primero" style="opacity:.5;cursor:not-allowed;">🔒</button>')+
              '<button class="rm-icbtn" onclick="rmToggleSent(\''+c.id+'\')" title="'+(c.sent?'Marcar pendiente':'Marcar enviado')+'" style="'+(c.sent?'background:rgba(34,197,94,.18);border-color:rgba(34,197,94,.4);color:#22c55e;':'')+'">✓</button>'+
              '<button class="rm-icbtn" onclick="rmRemove(\''+c.id+'\')" style="background:rgba(255,80,80,.1);border-color:rgba(255,80,80,.25);color:#ff6060;width:28px;height:28px;" title="Eliminar">×</button>'+
            '</div>'+
          '</div>'+
          '<div style="margin-top:7px;display:flex;align-items:center;gap:8px;">'+
            '<div style="flex:1;height:3px;background:rgba(255,255,255,.08);border-radius:99px;overflow:hidden;"><div style="width:'+pct+'%;height:100%;background:'+barCol+';"></div></div>'+
            '<div style="font-size:9px;color:var(--tx3);white-space:nowrap;">'+(left?'caduca en '+left:'expirando…')+'</div>'+
          '</div>'+
        '</div>';
      }).join('');
      var actions = '';
      var nPending = rm.queue.filter(function(c){return !c.sent;}).length;
      if(canSend && nPending>1){
        actions += '<button onclick="rmSendAllPending()" style="margin-top:14px;width:100%;background:linear-gradient(135deg,#f97316,#ea580c);border:none;border-radius:11px;padding:12px;font-size:14px;font-weight:800;color:#fff;cursor:pointer;box-shadow:0 4px 18px rgba(249,115,22,.4);">🚀 Enviar a todos los pendientes ('+nPending+')</button>';
      }
      actions += '<button onclick="rmClearQueue()" style="margin-top:8px;width:100%;background:transparent;border:1px solid rgba(255,80,80,.25);border-radius:11px;padding:9px;font-size:12px;font-weight:600;color:#ff7070;cursor:pointer;">🗑️ Limpiar lista completa</button>';
      sendList.innerHTML = hint + rows + actions;
    }

    // ── Bitácora de envíos (solo admin / master) ──
    var bitHost = document.getElementById('rm-bitacora-host');
    if(!bitHost){
      bitHost = document.createElement('div');
      bitHost.id = 'rm-bitacora-host';
      bitHost.style.marginTop = '18px';
      var sendPane = document.getElementById('rm-pane-send');
      if(sendPane) sendPane.appendChild(bitHost);
    }
    var isAdmOrMa = window.CUR && (CUR.role==='admin' || CUR.role==='master');
    if(!isAdmOrMa){ bitHost.innerHTML = ''; return; }
    var isMa = window.CUR && CUR.role==='master';

    // Filtro por semana del mes (persistente entre renders)
    if(window._rmFilterMonth==null) window._rmFilterMonth = '';
    if(window._rmFilterWeek==null)  window._rmFilterWeek  = '';
    var monthVal = window._rmFilterMonth;
    var weekVal  = window._rmFilterWeek;

    var header = '<div style="font-size:10px;font-weight:700;color:var(--tx3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;display:flex;align-items:center;gap:6px;flex-wrap:wrap;">📒 Bitácora de envíos <span style="background:rgba(180,108,255,.18);color:#c4a3ff;border:1px solid rgba(180,108,255,.4);padding:1px 7px;border-radius:20px;font-size:9px;">solo visible para admin</span></div>';

    var filterUI = '<div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin-bottom:10px;background:var(--sf2);border:1px solid var(--bd);border-radius:11px;padding:10px;">'+
      '<input type="month" value="'+monthVal+'" onchange="window._rmFilterMonth=this.value;rmRender();" style="background:var(--sf);border:1px solid var(--bd);border-radius:8px;padding:6px 9px;color:var(--tx);font-size:12px;">'+
      '<select onchange="window._rmFilterWeek=this.value;rmRender();" style="background:var(--sf);border:1px solid var(--bd);border-radius:8px;padding:6px 9px;color:var(--tx);font-size:12px;">'+
        '<option value="">Semana…</option>'+
        '<option value="1"'+(weekVal==='1'?' selected':'')+'>Semana 1 (1-7)</option>'+
        '<option value="2"'+(weekVal==='2'?' selected':'')+'>Semana 2 (8-14)</option>'+
        '<option value="3"'+(weekVal==='3'?' selected':'')+'>Semana 3 (15-21)</option>'+
        '<option value="4"'+(weekVal==='4'?' selected':'')+'>Semana 4 (22-28)</option>'+
        '<option value="5"'+(weekVal==='5'?' selected':'')+'>Semana 5 (29-fin)</option>'+
      '</select>'+
      ((monthVal||weekVal) ? '<button onclick="window._rmFilterMonth=\'\';window._rmFilterWeek=\'\';rmRender();" style="background:transparent;border:1px solid var(--bd);border-radius:8px;padding:6px 9px;color:var(--tx2);font-size:12px;cursor:pointer;">Limpiar</button>' : '')+
    '</div>';

    if(!monthVal || !weekVal){
      bitHost.innerHTML = header + filterUI + '<div style="background:var(--sf2);border:1px solid var(--bd);border-radius:11px;padding:18px;text-align:center;color:var(--tx3);font-size:12px;">Selecciona un <b>mes</b> y una <b>semana</b> para ver los registros.</div>';
      return;
    }

    var _mp = monthVal.split('-');
    var _fy = parseInt(_mp[0],10), _fm = parseInt(_mp[1],10)-1;
    var _wk = parseInt(weekVal,10);
    var _dStart = (_wk-1)*7 + 1;
    var _dEnd   = _wk===5 ? 31 : _wk*7;
    var _tsStart = new Date(_fy, _fm, _dStart, 0,0,0,0).getTime();
    var _tsEnd   = new Date(_fy, _fm, _dEnd, 23,59,59,999).getTime();

    var sessions = (rm.sessions||[]).slice().filter(function(s){
      var t = s.startedAt||0; return t>=_tsStart && t<=_tsEnd;
    }).sort(function(a,b){ return (b.startedAt||0)-(a.startedAt||0); });

    if(!sessions.length){
      bitHost.innerHTML = header + filterUI + '<div style="background:var(--sf2);border:1px solid var(--bd);border-radius:11px;padding:18px;text-align:center;color:var(--tx3);font-size:12px;">Sin registros en esta semana.</div>';
      return;
    }
    var fmtDT = function(ts){ try{ var d=new Date(ts); return d.toLocaleDateString()+' '+d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}); }catch(e){ return ''; } };
    var cards = sessions.map(function(s){
      var entries = (s.entries||[]).slice().sort(function(a,b){ return (a.at||0)-(b.at||0); });
      var roleBadge = s.actorRole==='master' ? 'rgba(180,108,255,.18);color:#c4a3ff;border-color:rgba(180,108,255,.4)' : (s.actorRole==='admin' ? 'rgba(59,130,246,.18);color:#60a5fa;border-color:rgba(59,130,246,.4)' : 'rgba(249,115,22,.18);color:#f97316;border-color:rgba(249,115,22,.4)');
      var rows = entries.length ? entries.map(function(e,i){
        return '<div style="display:flex;gap:8px;align-items:flex-start;padding:7px 0;border-top:1px solid var(--bd);">'+
          '<div style="width:20px;height:20px;border-radius:50%;background:rgba(249,115,22,.15);border:1px solid rgba(249,115,22,.35);color:#f97316;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">'+(i+1)+'</div>'+
          '<div style="flex:1;min-width:0;">'+
            '<div style="font-size:12px;font-weight:700;color:var(--tx);">'+rmEsc(e.nombre||'?')+(e.pedido?' <span style="font-weight:600;color:#f97316;">#'+rmEsc(e.pedido)+'</span>':'')+'</div>'+
            '<div style="font-size:11px;color:var(--tx2);margin-top:1px;">📱 '+rmEsc(e.celular||'')+'</div>'+
            '<div style="font-size:10px;color:var(--tx3);margin-top:1px;">🕒 '+fmtDT(e.at)+'</div>'+
          '</div>'+
        '</div>';
      }).join('') : '<div style="padding:8px 0;font-size:11px;color:var(--tx3);font-style:italic;">Sesión abierta — aún sin envíos registrados.</div>';
      var delBtn = isMa ? '<button onclick="rmDeleteSession(\''+s.id+'\')" title="Eliminar registro (master)" style="background:rgba(255,80,80,.12);border:1px solid rgba(255,80,80,.3);color:#ff6060;border-radius:7px;width:26px;height:26px;cursor:pointer;font-size:14px;line-height:1;">×</button>' : '';
      return '<div style="background:var(--sf);border:1px solid var(--bd);border-radius:12px;padding:12px 14px;margin-bottom:10px;">'+
        '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">'+
          '<div style="width:30px;height:30px;border-radius:50%;background:rgba(249,115,22,.15);border:1.5px solid rgba(249,115,22,.4);color:#f97316;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">'+rmEsc(((s.actorName||s.actor||'?')[0]||'?').toUpperCase())+'</div>'+
          '<div style="flex:1;min-width:0;">'+
            '<div style="font-size:13px;font-weight:700;color:var(--tx);">'+rmEsc(s.actorName||s.actor||'?')+' <span style="font-size:10px;font-weight:700;padding:1px 7px;border-radius:20px;border:1px solid;background:'+roleBadge+';margin-left:4px;">'+rmEsc((s.actorRole||'').toUpperCase())+'</span></div>'+
            '<div style="font-size:10.5px;color:var(--tx3);">Inicio: '+fmtDT(s.startedAt)+' · '+((s.entries||[]).length)+' envío'+(((s.entries||[]).length)!==1?'s':'')+'</div>'+
          '</div>'+
          delBtn+
        '</div>'+
        rows+
      '</div>';
    }).join('');
    bitHost.innerHTML = header + filterUI + cards;
  };

  // Auto-render cuando Firebase sincronice (también lo hace el listener principal)
})();

/* === Offline screen helpers === */
function retryConnection(){
  var b=document.getElementById("btn-retry"),i=document.getElementById("retry-icon"),t=document.getElementById("retry-text");
  if(b) b.disabled=true;
  if(i) i.style.animation="retrySpinonce .7s linear infinite";
  if(t) t.textContent="Conectando...";
  setTimeout(function(){ window.location.reload(); }, 800);
}
function showOfflineScreen(){
  var fb=document.getElementById("fb-loading"); if(fb) fb.remove();
  var el=document.getElementById("screen-offline");
  if(el){ el.style.display="flex"; el.classList.add("active"); }
}
window.showOfflineScreen=showOfflineScreen;
