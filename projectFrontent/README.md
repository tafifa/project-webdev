WEBSITE FEATURES

    INPUT BOOK
- mengambil data dari "book-name", "book-author", dan "book-year" menggunakan getdocumentbyid dengan variabel nama yang sama ex: const name = getdocumentbyid("#book-name")
- data tersebut kemudian disimpan dalam object ex: const book = {name, author, year}
// debatable, sepertinya harus menggunakan class
- jika menekan button "add-option01" maka object book disimpan dalam buku yang sudah Dibaca
- jika menekan button "add-option02" maka object book disimpan dalam buku yang belum Dibaca

    SEARCH BOOK
- search berdasarkan variabel apa yang ingin dicari meggunakan fitur select
- jika select mendeteksi search-name maka search akan mencari pada variabel name di object book
- jika select mendeteksi search-author maka search akan mencari pada variabel author di object book
- jika select mendeteksi search-year maka search akan mencari pada variabel year di object book
- button search akan menjalankan aksi pencarian
- search akan menampilkan sesuai kata kunci yang ingin dicari
- (optional) ditambahi fitur loading

    BOOKSHELF
- pada awalnya isi kedua shelf kosong
- saat ditambahkan, buku akan muncul pada shelf
// debatable, sepertinya menyimpan buku dengan class
- saat menekan button belum selesai dibaca ada pop up yang menanyakan "apakah anda belum selesai membaca?"
- saat menekan button sudah selesai dibaca ada pop up yang menanyakan "apakah anda sudah selesai membaca?"
- pada pop up terdapat 2 pilihan, "ya, saya sudah/belum selesai membaca" dan "batalkan"
- saat menekan button hapus buku, ada pop up "anda yakin ingin menghapus buku ini dari rak?"
- terdapat 2 pilihan "ya" dan "batalkan", menekan ya maka akan menghapus data dari shelf
- buku akan bertambah seiring input ditambahkan

    ADDITIONAL
- data harus disimpan dalam localStorage

- ditambahkan variabel id untuk object book
- pembuatan variabel id dibuat unik, sebanyak 4 digit dengan varian huruf kapital, kecil, angka, dan karakter
- total kemungkinan digit adalah 24 010 000 kemungkinan atau lebih dari 24 juta kemungkinan digit
- id bisa dibuat menggunakan fungsi hash

- object menyimpan data kapan buku tersebut diinput atau ditambahkan
- dibawah tahun dibuat tulisan menggunakan huruf miring, kecil, dan agak samar
- ex: "book added at 2.44 PM Sunday, March 15th 2022"
