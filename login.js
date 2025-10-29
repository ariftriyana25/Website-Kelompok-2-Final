// Mendapatkan elemen container yang berisi form login dan registrasi
const container = document.querySelector('.container');
// Mendapatkan tombol register dari panel toggle
const registerBtn = document.querySelector('.register-btn');
// Mendapatkan tombol login dari panel toggle
const loginBtn = document.querySelector('.login-btn');

// Menambahkan event listener untuk tombol register
// Ketika tombol register diklik, tambahkan class 'active' ke container
// Ini akan mengubah tampilan untuk menampilkan form registrasi
registerBtn.addEventListener('click', () =>{
    container.classList.add('active');
});
// Menambahkan event listener untuk tombol login
// Ketika tombol login diklik, hapus class 'active' dari container
// Ini akan mengubah tampilan kembali ke form login
loginBtn.addEventListener('click', () =>{
    container.classList.remove('active');
});