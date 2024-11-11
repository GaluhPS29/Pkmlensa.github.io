document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Ambil nilai dari input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validasi sederhana (Anda bisa mengganti dengan logika yang lebih kompleks)
    if (username === 'admin' && password === 'lensaid') {
        // Jika login berhasil, alihkan pengguna ke halaman lain
        alert('Login berhasil!');
        window.location.href = 'absen.html'; // Ganti dengan URL halaman yang sesuai
    } else {
        alert('Username atau password salah!');
    }
});