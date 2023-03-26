let tombolRahasia = document.getElementById("tombol-rahasia");
let rahasia = document.getElementById("judul-rahasia")
tombolRahasia.addEventListener("click", function() {
  // kode yang akan dijalankan saat tombol diklik
    rahasia.removeAttribute("hidden")
});

document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      // kode yang akan dijalankan saat pengguna menekan tombol Enter
      rahasia.removeAttribute("hidden")
    }
  });

tombolRahasia.addEventListener("mousemove", function() {
// kode yang akan dijalankan saat kursor diatas button
    let p = document.querySelector("p")
    p.innerText = "kamu diatas tombol, silahkan tekan untuk menampilkan judul rahasia"

    
});

tombolRahasia.addEventListener("mouseout", function() {
    // kode yang akan dijalankan saat kursor diatas button
        let p = document.querySelector("p")
    p.innerText = ""

    
        
    });

let myImage = document.querySelector("img");
myImage.addEventListener("load", function() {
    // kode yang akan dijalankan saat gambar selesai dimuat
    alert("gambar berhasil di load")
});
