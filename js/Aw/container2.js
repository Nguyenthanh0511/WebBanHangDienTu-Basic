// Dữ liệu sản phẩm mẫu (có thể thay thế bằng dữ liệu thực từ API hoặc cơ sở dữ liệu)
var list_productsss = [
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
	var sanPham = list_products[i];

	var itemHTML = `
		<div class="sanPham">
			<img src="${sanPham.img}" alt="${sanPham.name}">
			<h4>${sanPham.name}</h4>
			<p>${sanPham.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
			<button onclick="themVaoGioHang('${sanPham.ten}', ${sanPham.gia})">Thêm vào giỏ hàng</button>
		</div>
	`;

	// Create a container for each group of 4 products
	if (i % 2 === 0) {
		var productGroup = document.createElement('div');
		productGroup.classList.add('product-group');
		containKhungSanPham.appendChild(productGroup);
	}

	// Append the product item to the current product group
	var productGroupLastChild = containKhungSanPham.lastChild;
	productGroupLastChild.appendChild(createElementFromHTML(itemHTML));
}

// Helper function to create a DOM element from an HTML string
function createElementFromHTML(htmlString) {
	var div = document.createElement('div');
	div.innerHTML = htmlString.trim();
	return div.firstChild;
}
