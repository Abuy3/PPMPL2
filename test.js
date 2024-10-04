const { expect } = require('chai');
const { tambah, kali, kurang, bagi } = require('./math');

describe('Pengujian Fungsi Matematika', function() {
   //Test cases untuk fungsi tambah
   describe('Fungsi tambah', function() {
    it('seharusnya menambahkan dua angka positif dengan benar', function() {
      expect(tambah(2, 3)).to.equal(5);
   });

   it('seharusnya menangani angka negatif', function() {
     expect(tambah(-2, -3)).to.equal(-5);
     });

    it('seharusnya mengembalikan NaN saat input bukan angka', function() {
      expect(tambah('2', 3)).to.be.NaN;
      expect(tambah(null, 3)).to.be.NaN;
      expect(tambah(undefined, 3)).to.be.NaN;
    });
  });

  //Test cases untuk fungsi kali
  describe('Fungsi kali', function() {
    it('seharusnya mengalikan dua angka positif dengan benar', function() {
      expect(kali(2, 3)).to.equal(6);
    });

    it('seharusnya menangani angka negatif', function() {
      expect(kali(-2, -3)).to.equal(6);
    });

    it('seharusnya mengembalikan NaN saat input bukan angka', function() {
      expect(kali('5', 10)).to.be.NaN;
      expect(kali(null, 10)).to.be.NaN;
      expect(kali(undefined, 10)).to.be.NaN;
    });
  });

  // Test cases untuk fungsi kurang
 describe('Fungsi kurang', function() {
    it('seharusnya mengurangkan dua angka positif dengan benar', function() {
      expect(kurang(5, 3)).to.equal(2);
    });

    it('seharusnya menangani angka negatif', function() {
      expect(kurang(-2, -3)).to.equal(1);
    });

    it('seharusnya mengembalikan NaN saat input bukan angka', function() {
      expect(kurang('5', 10)).to.be.NaN;
      expect(kurang(null, 10)).to.be.NaN;
      expect(kurang(undefined, 10)).to.be.NaN;
    });
  });

  //Test cases untuk fungsi bagi
describe('Fungsi bagi', function() {
    it('seharusnya membagi dua angka positif dengan benar', function() {
      expect(bagi(6, 3)).to.equal(2);
    });

    it('seharusnya menangani angka negatif', function() {
      expect(bagi(-6, -3)).to.equal(2);
   });

    it('seharusnya mengembalikan error saat membagi dengan nol', function() {
      expect(() => bagi(6, 0)).to.throw('Tidak bisa membagi dengan nol');
    });

    it('seharusnya mengembalikan NaN saat input bukan angka', function() {
      expect(bagi('6', 3)).to.be.NaN;
      expect(bagi(null, 3)).to.be.NaN;
      expect(bagi(undefined, 3)).to.be.NaN;
    });
   });
});