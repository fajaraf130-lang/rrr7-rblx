function pilih(paket){

document.getElementById("robux").value = paket;

}


function order(){

let username = document.getElementById("username").value;
let wa = document.getElementById("wa").value;
let catatan = document.getElementById("catatan").value;


if(username == "" || wa == ""){

alert("Isi Username Roblox dan WhatsApp terlebih dahulu!");

return;

}


let paket = document.getElementById("robux").value;


let nomorToko = "6287882922046";


let pesan = 
`Halo RRR7 RBLX⚡

Saya ingin order Robux:

🎮 Username:
${username}

💎 Paket:
${paket}

📱 WhatsApp:
${wa}

📝 Catatan:
${catatan}`;


window.open(
"https://wa.me/"+nomorToko+"?text="+encodeURIComponent(pesan),
"_blank"
);

}
