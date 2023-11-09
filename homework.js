//Buat class biodata
//Class Biodata akan menampung data user berupa:
//nama, tanggal lahir, alamat, mobile, email
//buat juga method bernama say => "halo nama saya Udin, umur saya 100 thahun, alamat saya di BSD"

//Buat class inheritance (extends) untuk prodesi dari Class Biodata
//Class Dokter memiliki info tambahan berupa
//alamat_rumah_sakit, profesi, pengalaman_bekerja(dalam tahun)

//Kelas Ojol
//Kendaraan, Profesi, Plat_nomor

//Di kelas dokter method say akan berubah menjadi => "Halo nama saya Udin, saya berprofesi sebagai Dokter dan beroperasi di RS BSD"
//Di kelas ojol method say akan berubah menjadi =>Halo nama saya Udin, saya berprofesi sebagai Ojol dan kendaraan saya adalah Nissan R35

//Seluruh biodata diatas tidak dapat diganti tapi bisa dicek valuenya seperti property pada umumnya

class Biodata {
  constructor(nama, tanggalLahir, alamat, mobile, email) {
    this.nama = nama;
    this.tanggalLahir = tanggalLahir;
    this.alamat = alamat;
    this.mobile = mobile;
    this.email = email;
  }
}

class Dokter extends Biodata {
  constructor(
    nama,
    tanggalLahir,
    alamat,
    mobile,
    email,
    alamat_rs,
    pengalaman_kerja
  ) {
    super(nama, tanggalLahir, alamat, mobile, email);
    this.alamat_rs = alamat_rs;
    this.profesi = "Dokter";
    this.pengalaman_kerja = pengalaman_kerja;
  }
}

const say = (name) => {
  if (name instanceof Biodata) {
    return console.log(
      `Halo nama saya ${name.nama}, umur saya ${name.tanggalLahir}, alamat saya di ${name.alamat}, nomor Handphone saya ${name.mobile}, dan email saya ${name.email}`
    );
  }
};

const udin = new Biodata(
  "Udin",
  "1997-04-04",
  "BSD",
  "081807218539",
  "udin@mail.com"
);

const adan = new Dokter("Adan");

console.log(udin);

say(udin);
