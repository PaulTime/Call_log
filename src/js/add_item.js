export default function add_item(store, name, comment, jcontainer){
	
	const ID = store.length + 1;
	const date = new Date();

	const data = {id: ID, name, comment, date: date.toLocaleDateString()};
	store.setItem(`${store.length}`, JSON.stringify(data))

	const html = `<div class="page-main__cont-wrap__center-cont__body__item">` +
									`<div class="page-main__cont-wrap__center-cont__body__item__ID">${ID}</div>` +
									`<div class="page-main__cont-wrap__center-cont__body__item__name">${name}</div>` +
									`<div class="page-main__cont-wrap__center-cont__body__item__comment">${comment}</div>` +
									`<div class="page-main__cont-wrap__center-cont__body__item__date">${data.date}</div>` +
								`</div>`
	jcontainer.prepend(html);
	console.log(store, data);
}