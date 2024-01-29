// Thêm hãng sản xuất
function addCompany(img, nameCompany) {
	var link = createLinkFilter('add', 'company', nameCompany);
	var new_tag = `<a href=` + link + `><img src=` + img + `></a>`;
    //
	var khung_hangSanXuat = document.querySelector('companyMenu');
	khung_hangSanXuat.innerHTML += new_tag;
}