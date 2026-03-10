<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Mukta:wght@700;800&display=swap" rel="stylesheet">
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { background:transparent; width:1920px; height:1080px; overflow:hidden; }
.lower-third { position:absolute; bottom:80px; left:80px; display:flex; align-items:center; opacity:0; transform:translateX(-80px); transition:opacity 0.6s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1); }
.lower-third.show { opacity:1; transform:translateX(0); }
.circle-wrap { position:relative; width:130px; height:130px; flex-shrink:0; z-index:2; margin-right:-20px; }
.circle-outer { position:absolute; inset:0; border-radius:50%; background:conic-gradient(#00aaff,#0044cc,#00aaff); padding:4px; box-shadow:0 0 18px 4px rgba(0,170,255,0.7),0 0 40px 8px rgba(0,100,255,0.4); animation:rotateBorder 4s linear infinite; }
@keyframes rotateBorder { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
.circle-inner { width:100%; height:100%; border-radius:50%; background:radial-gradient(circle at 35% 35%,#1a2a4a,#050d1a); border:2px solid #001133; }
.bar-wrap { position:relative; display:flex; flex-direction:column; }
.main-bar { position:relative; background:linear-gradient(90deg,#1a3a8a 0%,#1e50c8 30%,#2060e8 60%,#1a3a8a 100%); padding:18px 50px 18px 36px; clip-path:polygon(0 0,100% 0,94% 100%,0 100%); min-width:480px; border-top:2px solid rgba(100,180,255,0.6); box-shadow:0 0 20px rgba(0,100,255,0.5),inset 0 1px 0 rgba(255,255,255,0.15); overflow:hidden; }
.main-bar::before { content:''; position:absolute; top:0; left:0; right:0; height:45%; background:linear-gradient(180deg,rgba(255,255,255,0.12) 0%,transparent 100%); }
.naam-text { font-family:'Mukta',sans-serif; font-size:42px; font-weight:800; color:#ffffff; letter-spacing:1px; text-shadow:0 2px 8px rgba(0,0,0,0.8); position:relative; z-index:1; line-height:1.1; }
.title-text { font-family:'Mukta',sans-serif; font-size:17px; font-weight:700; color:rgba(180,220,255,0.85); letter-spacing:3px; text-transform:uppercase; margin-top:3px; position:relative; z-index:1; }
.accent-lines { display:flex; align-items:center; clip-path:polygon(0 0,100% 0,96% 100%,0 100%); }
.line-orange { height:6px; width:160px; background:linear-gradient(90deg,#ff9900,#ffcc00); box-shadow:0 0 10px rgba(255,150,0,0.8); }
.line-gap { width:4px; height:6px; background:#050d1a; }
.line-cyan { height:4px; flex:1; background:linear-gradient(90deg,#00ccff,rgba(0,200,255,0.2)); box-shadow:0 0 8px rgba(0,200,255,0.6); }
.shadow-bar { height:8px; background:linear-gradient(90deg,rgba(0,50,150,0.6),transparent); clip-path:polygon(0 0,92% 0,88% 100%,0 100%); margin-top:2px; filter:blur(2px); }
.glow-floor { position:absolute; bottom:-18px; left:60px; width:500px; height:20px; background:radial-gradient(ellipse,rgba(0,120,255,0.35) 0%,transparent 70%); filter:blur(6px); pointer-events:none; }
</style>
</head>
<body>
<div class="lower-third" id="lt">
  <div class="circle-wrap">
    <div class="circle-outer"><div class="circle-inner"></div></div>
  </div>
  <div class="bar-wrap">
    <div class="main-bar">
      <div class="naam-text" id="naam">आपका नाम यहाँ</div>
      <div class="title-text" id="title">LIVE • YOUTUBE</div>
    </div>
    <div class="accent-lines">
      <div class="line-orange"></div>
      <div class="line-gap"></div>
      <div class="line-cyan"></div>
    </div>
    <div class="shadow-bar"></div>
  </div>
  <div class="glow-floor"></div>
</div>
<script>
const ws = new WebSocket('wss://' + location.host);
ws.onmessage = (e) => {
  const data = JSON.parse(e.data);
  if (data.type === 'update') {
    document.getElementById('naam').textContent = data.naam;
    document.getElementById('title').textContent = data.title;
    document.getElementById('lt').classList.add('show');
  }
  if (data.type === 'hide') {
    document.getElementById('lt').classList.remove('show');
  }
};
</script>
</body>
</html>
