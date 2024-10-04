function tambah(a, b, c) { 
    return a + b + c;
  } 
  
  function kali(a, b) { 
    return a * b;
  }
  

  function kurang(a, b) { 
    return a - b  ;
  }
  
  function bagi(a, b) { 
    if (b === 0) {
      throw new Error('Tidak bisa membagi dengan nol');
    }
    return a / b;
  }
  
  module.exports = { tambah, kali, kurang, bagi };
  