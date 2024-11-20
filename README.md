[HOMEPAGE]


![image](https://github.com/user-attachments/assets/91864ad5-1ec0-412f-89de-7094769ab4ae)

[CREATE]
Ketika tombol fab di bagian bawah kanan layar diklik, sebuah modal input akan muncul menggunakan komponen InputModal. Modal ini berisi formulir yang memungkinkan pengguna untuk menambahkan tugas baru atau mengedit tugas yang sudah ada. Data yang dimasukkan pada formulir akan diproses melalui fungsi handleSubmit, yang memeriksa apakah tugas adalah entri baru atau sedang diedit. Jika valid, data tugas disimpan atau diperbarui di database menggunakan layanan firestoreService. Setelah operasi berhasil, daftar tugas akan dimuat ulang untuk memperbarui tampilan. Modal ini juga memberikan umpan balik berupa notifikasi toast untuk menampilkan pesan sukses atau gagal.


![image](https://github.com/user-attachments/assets/34ccd67c-76d9-4a6f-81a7-7ef04de822c2)
![image](https://github.com/user-attachments/assets/9684c350-9d29-4881-be3d-3198f2b00aab)


[UPDATE]
Menggser item lalu mengklik ikon edit, yang memanggil fungsi handleEdit. Fungsi ini menutup item sliding, mengisi data tugas ke variabel reaktif todo, menetapkan editingId untuk menandai mode edit, dan membuka modal InputModal dengan formulir yang terisi. Setelah pengguna menyimpan perubahan melalui formulir, fungsi handleSubmit memperbarui tugas di database menggunakan firestoreService.updateTodo, memuat ulang daftar tugas, dan menampilkan notifikasi toast sebagai konfirmasi.


![image](https://github.com/user-attachments/assets/c0cb01ce-b888-41c5-9a73-a9f69dc6f3b3)
![image](https://github.com/user-attachments/assets/62c30eb7-9d01-480c-8635-e7934b0682ef)
![image](https://github.com/user-attachments/assets/a1daf198-73d8-4995-86fa-b3eae16aa677)


[DELETE]
Menggeser item lalu mengklik tombol hapus, yang memicu fungsi handleDelete. Fungsi ini menerima data tugas yang akan dihapus, lalu memanggil firestoreService.deleteTodo untuk menghapusnya dari database. Setelah penghapusan berhasil, daftar tugas dimuat ulang dengan fungsi loadTodos, dan notifikasi toast ditampilkan untuk mengonfirmasi bahwa tugas berhasil dihapus. Jika terjadi kesalahan, notifikasi error ditampilkan untuk memberi tahu pengguna.


![image](https://github.com/user-attachments/assets/9643f292-2d37-4d63-8f52-1a33fa17c4dc)
![image](https://github.com/user-attachments/assets/f7501114-f42c-4386-ac6d-bfca864c2fff)


[COMPLETED]
Menggeser item lalu mengklik tombol complete memungkinkan pengguna mengubah status tugas dari aktif menjadi selesai . Fungsi handleStatus dipanggil, menerima data tugas yang dipilih, lalu menutup elemen geser menggunakan referensi item (slidingItem). Setelah itu, fungsi ini memanggil firestoreService.updateStatus untuk memperbarui status tugas di database, dan menampilkan notifikasi toast yang mengonfirmasi perubahan status. Daftar tugas kemudian dimuat ulang menggunakan fungsi loadTodos untuk mencerminkan status terbaru pada tampilan.


![image](https://github.com/user-attachments/assets/c428c9a1-0e6a-47cd-b1a6-b93eace14031)
![image](https://github.com/user-attachments/assets/77d10327-177b-440d-a2d7-450d5310e52f)


