async function launchBinLoader() {
    const log = document.getElementById("log");
    const status = document.getElementById("status");

    status.innerText = "AWAITING PAYLOAD FROM CHROMEBOOK";
    status.style.color = "#00ff00";

    log.innerHTML += "[*] WebKit Exploit: SUCCESS<br>";
    log.innerHTML += "[!] Listening on Port: 9020<br>";
    log.innerHTML += "[!] Use the Web Sender on your Chromebook now.<br>";
}
