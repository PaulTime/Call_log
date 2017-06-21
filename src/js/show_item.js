export default function show_item(item, jcontainer){
	console.log(item)
	const html = `<div class="page-main__cont-wrap__center-cont__body__item">` +
									`<div class="page-main__cont-wrap__center-cont__body__item__ID">${item.name}</div>` +
									`<div class="page-main__cont-wrap__center-cont__body__item__name">${item.name}</div>` +
									`<div class="page-main__cont-wrap__center-cont__body__item__comment">${item.comment}</div>` +
									`<div class="page-main__cont-wrap__center-cont__body__item__date">${item.date}</div>` +
								`</div>`
	jcontainer.prepend(html);
}