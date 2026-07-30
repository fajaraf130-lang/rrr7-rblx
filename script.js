function order(){

    let robux = document.getElementById("robux").value;
    let username = document.getElementById("username").value;
    let wa = document.getElementById("wa").value;
    let catatan = document.getElementById("catatan").value;


    if(username === "" || wa === ""){
        alert("Silakan isi Username Roblox dan Nomor WhatsApp!");
        return;
    }


    let nomorToko = "628XXXXXXXXXX"; 
    // GANTI XXXXXXXXXX DENGAN NOMOR WHATSAPP TOKO


    let pesan = 
`Halo RRR7 RBLX⚡

Saya ingin order Robux:

🎮 Username Roblox:
${username}

💎 Paket:
${robux}

📱 WhatsApp:
${wa}

📝 Catatan:
${catatan}

Terima kasih.`;


    let url = 
    "https://wa.me/" + nomorToko + 
    "?text=" + encodeURIComponent(pesan);


    window.open(url, "_blank");

}
