<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@600;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:transparent;width:1920px;height:1080px;overflow:hidden}
.c1{--p:#1a50c8;--s:#ffd700;--bg:rgba(5,12,45,.92);--gl:rgba(30,100,255,.6)}
.c2{--p:#cc2200;--s:#ff9900;--bg:rgba(40,5,0,.92);--gl:rgba(200,50,0,.6)}
.c3{--p:#1a1a1a;--s:#f0f0f0;--bg:rgba(0,0,0,.88);--gl:rgba(255,255,255,.35)}
.c4{--p:#0a6030;--s:#ffd700;--bg:rgba(5,28,15,.92);--gl:rgba(10,150,60,.6)}
.c5{--p:#7700cc;--s:#cccccc;--bg:rgba(20,0,40,.92);--gl:rgba(140,0,220,.6)}
.lt{position:absolute;bottom:80px;left:80px;display:flex;align-items:center;opacity:0;transform:translateY(22px);transition:opacity .5s ease,transform .65s cubic-bezier(.22,1,.36,1)}
.lt.show{opacity:1;transform:translateY(0)}
.L,.R{flex-shrink:0}
.C{display:flex;flex-direction:column}
.naam{font-family:'Bebas Neue',sans-serif;font-size:44px;color:#fff;letter-spacing:2px;line-height:1;white-space:nowrap}
.titl{font-family:'Rajdhani',sans-serif;font-size:17px;font-weight:700;color:var(--s);letter-spacing:3px;text-transform:uppercase;margin-top:5px;white-space:nowrap}
.s1 .L{width:6px;height:78px;background:linear-gradient(180deg,var(--s),var(--p));border-radius:3px;margin-right:16px;box-shadow:0 0 16px var(--gl)}
.s1 .C{background:var(--bg);padding:14px 28px;border-radius:4px;box-shadow:0 4px 24px rgba(0,0,0,.6)}
.s1 .R{display:none}
.s2{flex-direction:column;align-items:flex-start;gap:3px}
.s2 .L{height:3px;width:460px;background:linear-gradient(90deg,var(--p),var(--s),transparent);border-radius:2px}
.s2 .C{background:var(--p);padding:14px 40px 14px 20px;clip-path:polygon(0 0,100% 0,95% 100%,0 100%);box-shadow:0 4px 20px rgba(0,0,0,.5)}
.s2 .titl{color:rgba(255,255,255,.8)}
.s2 .R{height:5px;width:340px;background:linear-gradient(90deg,var(--s),transparent);border-radius:2px}
.s3 .L{width:120px;height:120px;border-radius:50%;border:5px solid var(--p);background:radial-gradient(circle at 35% 35%,#1a2a50,#050d1a);margin-right:-16px;box-shadow:0 0 25px var(--gl),0 0 50px var(--gl)}
.s3 .C{background:var(--p);padding:16px 38px 16px 30px;clip-path:polygon(0 0,100% 0,94% 100%,0 100%);min-width:400px;border-top:2px solid var(--s);box-shadow:0 0 25px var(--gl)}
.s3 .R{display:none}
.s4{flex-direction:column;align-items:flex-start;gap:4px}
.s4 .L{height:3px;width:520px;background:linear-gradient(90deg,transparent,var(--p),var(--s));box-shadow:0 0 12px var(--gl);border-radius:2px}
.s4 .C{background:var(--bg);padding:13px 26px;border-left:5px solid var(--p);border-bottom:2px solid var(--s);min-width:460px;clip-path:polygon(0 0,98% 0,100% 100%,0 100%);box-shadow:0 0 25px var(--gl)}
.s4 .naam{color:var(--s);text-shadow:0 0 20px var(--gl);font-size:48px}
.s4 .titl{color:#ddd;letter-spacing:4px}
.s4 .R{display:none}
.s5 .L{display:none}
.s5 .C{padding:8px 0 14px;position:relative}
.s5 .C::after{content:'';position:absolute;bottom:0;left:0;width:100%;height:2px;background:linear-gradient(90deg,var(--p),var(--s),transparent)}
.s5 .naam{font-size:54px;text-shadow:0 2px 24px rgba(0,0,0,.9)}
.s5 .R{display:none}
.s6{flex-direction:column;align-items:flex-start;gap:0}
.s6 .L{background:var(--p);padding:5px 18px;border-radius:3px 3px 0 0;font-family:'Rajdhani',sans-serif;font-size:12px;font-weight:700;color:var(--s);letter-spacing:3px}
.s6 .L::after{content:'● LIVE NOW'}
.s6 .C{background:var(--bg);padding:14px 24px;border-top:3px solid var(--p);min-width:400px;border-radius:0 4px 4px 4px;box-shadow:0 4px 24px rgba(0,0,0,.6)}
.s6 .R{display:none}
.s7 .L{width:92px;height:90px;background:linear-gradient(135deg,var(--s),#ff7700);clip-path:polygon(12% 0,100% 0,88% 100%,0 100%);margin-right:5px;box-shadow:0 4px 16px rgba(0,0,0,.4)}
.s7 .C{background:var(--p);padding:14px 36px 14px 16px;clip-path:polygon(0 0,100% 0,96% 100%,0 100%);border-bottom:4px solid var(--s);box-shadow:0 4px 20px rgba(0,0,0,.5)}
.s7 .titl{color:rgba(255,255,255,.8)}
.s7 .R{display:none}
.s8{flex-direction:column;align-items:flex-start;gap:6px}
.s8 .L{height:1px;width:560px;background:linear-gradient(90deg,var(--p),var(--s),transparent)}
.s8 .C{padding:8px 0}
.s8 .naam{font-size:52px;letter-spacing:8px;text-shadow:0 2px 20px rgba(0,0,0,.8)}
.s8 .titl{letter-spacing:6px;font-size:16px}
.s8 .R{height:1px;width:380px;background:linear-gradient(90deg,var(--s),transparent)}
.s9{align-items:stretch;min-width:700px}
.s9 .L{width:8px;background:linear-gradient(180deg,var(--s),var(--p));box-shadow:0 0 18px var(--gl)}
.s9 .C{background:linear-gradient(90deg,var(--bg),rgba(0,0,0,.5),transparent);padding:20px 80px 20px 24px;justify-content:center;flex:1}
.s9 .naam{font-size:48px}
.s9 .R{display:none}
.s10{flex-direction:column;align-items:flex-start;gap:4px}
.s10 .L{display:none}
.s10 .C{gap:4px}
.s10 .naam{background:var(--p);padding:11px 40px 11px 20px;clip-path:polygon(0 0,100% 0,96% 100%,0 100%);box-shadow:0 0 18px var(--gl);font-size:42px;display:block}
.s10 .titl{background:var(--bg);padding:7px 32px 7px 20px;clip-path:polygon(0 0,93% 0,89% 100%,0 100%);border-left:4px solid var(--s);font-size:16px;letter-spacing:4px;margin-top:0;display:block}
.s10 .R{display:none}
</style>
</head>
<body>
<div class="lt s1 c1" id="lt">
  <div class="L"></div>
  <div class="C">
    <div class="naam" id="naam">NAAM YAHAN</div>
    <div class="titl" id="titl">TITLE LIVE</div>
  </div>
  <div class="R"></div>
</div>
<script>
function connect(){
  const ws=new WebSocket('wss://'+location.host);
  ws.onmessage=(e)=>{
    const d=JSON.parse(e.data);
    if(d.type==='update'){
      const lt=document.getElementById('lt');
      document.getElementById('naam').textContent=d.naam;
      document.getElementById('titl').textContent=d.title;
      lt.className=`lt s${d.style} c${d.color} show`;
    }
    if(d.type==='hide') document.getElementById('lt').classList.remove('show');
  };
  ws.onclose=()=>setTimeout(connect,3000);
}
connect();
</script>
</body>
</html>
