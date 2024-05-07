// Hàm đọc file và hiển thị các phần văn bản
function docVanBan() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var vanBan = this.responseText.split("\n\n"); // Tách văn bản thành các phần dựa trên dấu xuống dòng kép
            for (var i = 0; i < vanBan.length; i++) {
                var phanTiepTheo = document.createElement("div");
                phanTiepTheo.setAttribute("class", "phanTiepTheo");
                var vanBanChinhSua = vanBan[i].replace("(thời gian)", demThoiGian()); // Thay thế chuỗi "(thời gian)" bằng thời gian tính toán
                phanTiepTheo.innerHTML = vanBanChinhSua;
                document.body.appendChild(phanTiepTheo);
            }
        }
    };
    xhttp.open("GET", "vanban.txt", true);
    xhttp.send();
}

// Hàm để tính thời gian từ ngày chia tay
function demThoiGian() {
    // Ngày chia tay
    var ngayChiaTay = new Date("2024-03-04T22:23:18");

    // Thời gian hiện tại
    var thoiGianHienTai = new Date();

    // Số milliseconds từ ngày chia tay đến thời gian hiện tại
    var khoangCach = thoiGianHienTai - ngayChiaTay;

    // Tính số ngày, giờ, phút và giây
    var ngay = Math.floor(khoangCach / (1000 * 60 * 60 * 24));
    var gio = Math.floor((khoangCach % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var phut = Math.floor((khoangCach % (1000 * 60 * 60)) / (1000 * 60));
    var giay = Math.floor((khoangCach % (1000 * 60)) / 1000);

    // Trả về chuỗi thời gian đã tính toán
    return ngay + " ngày, " + gio + " giờ, " + phut + " phút, " + giay + " giây";
}

// Gọi hàm đọc và hiển thị phần văn bản khi trang được tải
window.onload = function() {
    docVanBan();
};