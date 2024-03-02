// Dữ liệu sản phẩm mẫu (có thể thay thế bằng dữ liệu thực từ API hoặc cơ sở dữ liệu)
var danhSachSanPham = [
    { ten: 'Sản phẩm 1', gia: 1000000, hinhAnh: 'path/to/image1.jpg' },
    { ten: 'Sản phẩm 2', gia: 1500000, hinhAnh: 'path/to/image2.jpg' },
    { ten: 'Sản phẩm 3', gia: 2000000, hinhAnh: 'path/to/image3.jpg' },
    { ten: 'Sản phẩm 4', gia: 2000000, hinhAnh: 'path/to/image3.jpg' },
    { ten: 'Sản phẩm 3', gia: 2000000, hinhAnh: 'path/to/image3.jpg' },
    { ten: 'Sản phẩm 1', gia: 1000000, hinhAnh: 'path/to/image1.jpg' },
    { ten: 'Sản phẩm 2', gia: 1500000, hinhAnh: 'path/to/image2.jpg' },
    { ten: 'Sản phẩm 2', gia: 1500000, hinhAnh: 'path/to/image2.jpg' },
    { ten: 'Sản phẩm 3', gia: 2000000, hinhAnh: 'path/to/image3.jpg' },
    { ten: 'Sản phẩm 3', gia: 2000000, hinhAnh: 'path/to/image3.jpg' },
    // Thêm các sản phẩm khác theo cấu trúc tương tự
];

// Lấy tham chiếu đến phần contain-khungSanPham
var containKhungSanPham = document.querySelector('.contain-khungSanPham');

// Thêm sản phẩm vào phần contain-khungSanPham
for (var i = 0; i < danhSachSanPham.length; i++) {
    var sanPham = danhSachSanPham[i];
    var itemHTML = `
        <div class="sanPham">
            <img src="${sanPham.hinhAnh}" alt="${sanPham.ten}">
            <h4>${sanPham.ten}</h4>
            <p>${sanPham.gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
            <button onclick="themVaoGioHang('${sanPham.ten}', ${sanPham.gia})">Thêm vào giỏ hàng</button>
        </div>
    `;
     // Kiểm tra nếu đã đủ 4 sản phẩm
     if (i < 4) {
        // Nếu chưa đủ 4 sản phẩm, thêm vào containKhungSanPham
        containKhungSanPham.innerHTML += itemHTML;
    } else {
        // Nếu đã đủ 4 sản phẩm, tạo một div thứ hai và thêm vào
        if (i == 4) {
            var secondDiv = document.createElement('div');
            secondDiv.classList.add('contain-khungSanPham'); // Tự thêm class để giữ layout
            document.body.appendChild(secondDiv);
        }

        // Thêm sản phẩm vào thẻ div thứ hai
        secondDiv.innerHTML += itemHTML;
    }
}

// Hàm thêm vào giỏ hàng (đây chỉ là ví dụ, bạn có thể thay đổi hoặc thêm vào theo ý muốn)
function themVaoGioHang(tenSanPham, giaSanPham) {
    // Thực hiện logic thêm sản phẩm vào giỏ hàng
    console.log(`Thêm sản phẩm ${tenSanPham} vào giỏ hàng với giá ${giaSanPham}`);
}
