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

  showData() {
    return Object.values;
  }

  getClassName() {
    return this.constructor.name;
  }

  say() {
    //Konversi Tanggal Lahir ke Umur (per hari ini)
    let date = new Date(this.tanggalLahir);
    let ageInMs = Date.now() - date.getTime();
    let year = Math.floor(ageInMs / 1000 / 60 / 60 / 24 / 30 / 12);
    this.tanggalLahir = year;

    if (this.getClassName() === "Biodata") {
      return console.log(
        `Halo nama saya ${this.nama}, umur saya ${this.tanggalLahir}, alamat saya di ${this.alamat}, nomor Handphone saya ${this.mobile}, dan email saya ${this.email}`
      );
    } else if (this.getClassName() === "Dokter") {
      return console.log(
        `Halo nama saya ${this.nama}, saya berprofesi sebagai ${this.profesi}, berpengalaman ${this.pengalaman_kerja} tahun dan beroperasi di ${this.alamat_rs}. umur saya ${this.tanggalLahir}, alamat saya di ${this.alamat}, nomor Handphone saya ${this.mobile}, dan email saya ${this.email}`
      );
    } else if (this.getClassName() === "Ojol") {
      return console.log(
        `Halo nama saya ${this.nama}, saya berprofesi sebagai ${this.profesi} dan kendaraan saya adalah ${this.kendaraan}. umur saya ${this.tanggalLahir}, alamat saya di ${this.alamat}, nomor Handphone saya ${this.mobile}, dan email saya ${this.email}`
      );
    }
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

class Ojol extends Biodata {
  constructor(
    nama,
    tanggalLahir,
    alamat,
    mobile,
    email,
    kendaraan,
    plat_nomor
  ) {
    super(nama, tanggalLahir, alamat, mobile, email);
    this.kendaraan = kendaraan;
    this.profesi = "Ojol";
    this.plat_nomor = plat_nomor;
  }
}

const udin = new Biodata(
  "Udin",
  "1997-04-04",
  "BSD",
  "081807218539",
  "udin@mail.com"
);

const adan = new Dokter(
  "Adan",
  "1998-07-07",
  "Pamulang",
  "08161128787",
  "adan@mail.com",
  "RS Pondok Indah",
  7
);

const idin = new Ojol(
  "Idin",
  "1996-07-07",
  "PIK",
  "123456789",
  "idin@jek.com",
  "Ninja ZX",
  "B4D"
);

udin.say();
adan.say();
idin.say();
