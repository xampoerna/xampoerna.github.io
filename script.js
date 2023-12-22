document.addEventListener("DOMContentLoaded", function () {
    const navbarSearch = document.getElementById("navbar-search");
    const toggleButtons = document.querySelectorAll("[data-collapse-toggle='navbar-search']");

    // Fungsi untuk mengganti visibilitas kolom pencarian
    function toggleSearchBar() {
        navbarSearch.classList.toggle("hidden");
        navbarSearch.classList.toggle("opacity-100");
    }

    // Fungsi untuk mengganti visibilitas menu di perangkat mobile
    function toggleMobileMenu() {
        const mobileMenu = document.querySelector(".md\\:hidden");
        mobileMenu.classList.toggle("hidden");
    }

    // Menambahkan event listener ke tombol-tombol untuk mengganti visibilitas kolom pencarian
    toggleButtons.forEach((button) => {
        button.addEventListener("click", function () {
            toggleSearchBar();
        });
    });

    // Event listener untuk mengganti visibilitas menu di perangkat mobile
    document.querySelector("[data-collapse-toggle='navbar-menu']").addEventListener("click", function () {
        toggleMobileMenu();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const navbarTitle = document.getElementById("navbar-title");

    // Fungsi untuk mengganti teks sesuai dengan mode
    function updateNavbarTitle() {
        const isMobile = window.innerWidth <= 768; // Ganti angka 768 dengan ukuran breakpoint perangkat Anda

        if (isMobile) {
            navbarTitle.textContent = "Portfolio SAM";
        } else {
            navbarTitle.textContent = "Portfolio OSAMA";
        }
    }

    // Panggil fungsi saat halaman dimuat dan saat ukuran layar berubah
    updateNavbarTitle();
    window.addEventListener("resize", updateNavbarTitle);
});

// Header time scroll
const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
    let time = new Date();
    displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
    setTimeout(showTime, 1000);
}

showTime();

// Date
function updateDate() {
    let today = new Date();

    // return number
    let dayName = today.getDay(),
        dayNum = today.getDate(),
        month = today.getMonth(),
        year = today.getFullYear();

    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const dayWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
    // value -> ID of the html element
    const IDCollection = ["day", "daynum", "month", "year"];
    // return value array with number as a index
    const val = [dayWeek[dayName], dayNum, months[month], year];
    for (let i = 0; i < IDCollection.length; i++) {
        document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
    }
}

updateDate();
setInterval(updateDate, 1000);

//Profile Menu
const userPic = document.getElementById("userPic");
const menuContainer = document.getElementById("menuContainer");

// Tampilkan menu saat gambar diklik
userPic.addEventListener("click", function (event) {
    event.stopPropagation();
    menuContainer.classList.toggle("hidden");
});

// Sembunyikan menu saat klik dilakukan di luar elemen gambar dan menu
document.addEventListener("click", function (event) {
    const targetElement = event.target;
    if (!menuContainer.contains(targetElement) && targetElement !== userPic) {
        menuContainer.classList.add("hidden");
    }
});