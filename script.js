function copyIP(){
    const SERVER_IP = "vexomc.play.hosting";  // ✅ IP السيرفر هنا
    
    navigator.clipboard.writeText(SERVER_IP).then(()=>{
        const btn = document.querySelector(".copy-btn");
        const originalText = btn.innerHTML;
        
        btn.innerHTML = "✅ تم النسخ!";
        btn.style.background = "linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)";
        
        setTimeout(()=>{
            btn.innerHTML = originalText;
            btn.style.background = "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)";
        }, 2500);
    }).catch(()=>{
        alert("انسخ يدوياً: " + SERVER_IP);
    });
}
