var nama = "Junaedi"
var peran = "Guard"

if (nama == "" && peran == ""){
    console.log("Nama Harus diisi")
}
else if (nama!=null && peran == ""){
    console.log(`Halo ${nama}, Pilih Peranmu untuk Memulai Game`)
}
else if (nama !=null && peran == "Penyihir"){
    console.log(`Selamat datang di dunia warewolf,${nama}`); console.log(`Halo Penyihir ${nama}, Kamu dapat melihat siapa yang menjadi warewolf`)
}
else if(nama !=null && peran == "Guard"){
    console.log(`Selamat Datang di dunia warewolf,${nama}`); console.log(`Halo Guard ${nama}, Kamu akan membantu melindungi temanmu dari serangan warewolf`)
}
else if(nama !=null && peran == "Warewolf"){
    console.log(`Selamat Datang di dunia warewolf,${nama}`); console.log(`Halo Warewolf ${nama}, Kamu akan memakan mangsa setaip malam !`)
}