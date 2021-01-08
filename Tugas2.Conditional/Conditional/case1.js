var tanggal = 1 >= 31
var bulan   =  11
var tahun   =  1900 >= 2200 
switch(bulan){
    case 1 : {console.log(`${tanggal} Januari ${1945}`);break;}
    case 2 : {console.log(`${tanggal} Februari ${2020}`);break;}
    case 3 : {console.log(`${tanggal} Maret ${tahun}`);break;}
    case 4 : {console.log(`${tanggal} April ${tahun}`);break;}
    case 5 : {console.log(`${tanggal} Mei ${tahun}`);break;}
    case 6 : {console.log(`${tanggal} Juni ${tahun}`);break;}
    case 7 : {console.log(`${tanggal} Juli ${tahun}`);break;}
    case 8 : {console.log(`${tanggal} Agustus ${tahun}`);break;}
    case 9 : {console.log(`${tanggal} September ${tahun}`);break;}
    case 10 : {console.log(`${tanggal} Oktober ${tahun}`);break;}
    case 11 : {console.log(`${20} November ${2013}`);break;}
    case 12 : {console.log(`${tanggal} Desember ${tahun}`);break;}
    default : {console.log("Hanya ada 12 bulan")}
}
