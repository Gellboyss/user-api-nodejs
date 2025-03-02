**Contoh Proyek Backend Node.js (Express.js)**

**Deskripsi**
Proyek ini adalah REST API sederhana yang dibuat dengan Node.js dan Express.js. API ini menyediakan endpoint untuk mengelola data pengguna (CRUD) dan dilengkapi dengan middleware logging untuk mencatat setiap request yang masuk.

**Instalasi**
1. Clone repository ini:
   ```sh
   git clone https://github.com/Gellboyss/user-api-nodejs.git
   ```
2. Masuk ke direktori proyek:
   ```sh
   cd user-api-nodejs
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Jalankan server:
   ```sh
   node server.js
   ```
**End Point API**

-Buat server Express.js

✅ Jalankan server di port 5000.

✅ Buat endpoint GET / yang mengembalikan teks "Hello Backend!".

-Endpoint GET /users

✅ Buat array users yang berisi daftar user.

✅ Buat endpoint GET /users yang mengembalikan data user dalam format JSON.

-Endpoint GET /users/:id

✅ Ambil user berdasarkan ID dari URL (req.params.id).

✅ Jika user ditemukan, kembalikan datanya dalam JSON.

✅ Jika user tidak ditemukan, kembalikan error 404 dengan pesan "User tidak ditemukan!".

-Endpoint POST /users

✅ Endpoint POST /users menerima JSON body { "name": "Budi" }.

✅ Tambahkan user baru ke array users dengan ID unik.

✅ Kembalikan user yang baru ditambahkan.

-Endpoint PUT /users/:id

✅ Ambil user berdasarkan ID.

✅ Jika user ada, update namanya berdasarkan JSON body { "name": "Budi Update" }.

✅ Jika user tidak ditemukan, kembalikan error 404.

-Endpoint DELETE /users/:id

✅ Hapus user berdasarkan ID.

✅ Jika user ada, hapus dari array dan kembalikan pesan "User berhasil dihapus!".

✅ Jika user tidak ditemukan, kembalikan error 404.

-Middleware Logger

✅ Tambahkan middleware yang mencatat method & path setiap request yang masuk.
