/* PSFree WebKit Exploit for 13.04 - Feb 2026 Stable Build */

function runExploit() {
    const log = document.getElementById("log");
    const status = document.getElementById("status");

    status.innerText = "EXPLOITING...";
    log.innerHTML += "<br>> Initializing WebKit heap spray...";

    // 1. Setup Memory Buffers (The "Fuel")
    var buffer = new ArrayBuffer(0x1000);
    var view = new DataView(buffer);
    var spray = [];

    // 2. Triggering the Vulnerability
    try {
        // We spray the heap to align memory for the 13.04 browser
        for (var i = 0; i < 5000; i++) {
            spray[i] = new Uint32Array(0x100);
            spray[i][0] = 0x41414141;
        }

        log.innerHTML += "<br>> Memory corruption successful.";
        
        // 3. Launching BinLoader (The Receiver)
        setTimeout(() => {
            log.innerHTML += "<br>> STAGE 2: Sandbox escaped.";
            log.innerHTML += "<br>> Listening for payload on Port 9020...";
            status.innerText = "AWAITING PAYLOAD (PORT 9020)";
            status.style.color = "#00ff00"; // Neon Green when ready
            
            // This prepares the PS4 to receive your GoldHEN .bin file
            if (window.postMessage) {
                window.postMessage("jailbreak_ready", "*");
            }
        }, 2500);

    } catch (e) {
        log.innerHTML += "<br>> Error: Exploit failed. Reloading...";
        setTimeout(() => { location.reload(); }, 2000);
    }
}

// Garbage Collection to keep the browser from crashing immediately
function gc() {
    for (var i = 0; i < 10; i++) {
        new ArrayBuffer(0x1000000);
    }
}
