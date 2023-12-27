document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault()

    const nama = document.getElementById("nama").value
    const email = document.getElementById("email").value
    const jam = document.getElementById("jam").value
    const tujuan = document.getElementById("tujuan").value
    const tiket = document.getElementById("tiket").value

    document.getElementById("hasil_nama").innerText = nama
    document.getElementById("hasil_email").innerText = email
    document.getElementById("hasil_jam").innerText = jam
    document.getElementById("hasil_tujuan").innerText = tujuan
    document.getElementById("hasil_tiket").innerText = tiket
})