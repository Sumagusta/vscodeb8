function objectLiteral() {
    
    var biodata = { //  js object literal
        nama : "Ronald",
        kelas : "7-A",
        usia : 20,
        alamat : "Jakarta Utara"
    }

    
    for (const key in biodata) {
        console.log(key +" "+ biodata[key]);
    }
}

// jika mempunyai parameter / inputan manual ke object key 
function objectFunctionDeclaration(nama, kelas, usia, alamat) {
    var biodata = {}
    biodata.nama = nama;
    biodata.kelas = kelas;
    biodata.usia = usia;
    biodata.alamat = alamat;
    return biodata;
}

function callBackFunctionDeclaration() {
    var siswa = objectFunctionDeclaration("Robert", "6-B", 21, "Bandung")

    for (const key in siswa) {
        console.log(siswa[key]);
    }
}

function ObjectConstructorFunc(nama, kelas, usia, alamat) {
    this.nama = nama;
    this.kelas = kelas;
    this.usia = usia;
    this.alamat = alamat;
}

function callBackObjConstruct() {
    var siswa = new objectFunctionDeclaration("Jojo", "6-A", 26, "Pasundan")

    for (const key in siswa) {
        console.log(siswa[key]);
    }
}

function objectPrototypeProduct(merk, nama, harga) {
    this.merk = merk,
    this.nama = nama,
    this.harga = harga;
}

objectPrototypeProduct.prototype.stok = function(jumlah){
    var totalHarga =  this.harga * jumlah;
    return "total harga berdasarkan stok produk = "+ totalHarga
}

var product = new objectPrototypeProduct("Adodas", "Series A7", 10000000);