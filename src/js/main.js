import modal_exit from './modal_exit';
import modal_open from './modal_open';
import add_item from './add_item';


$('.page-main__top-wrap__right-elem').on('click', (e) => {
	let elem = $('.page-modal');
	modal_open(elem);
	return
});

$('.page-modal__main-block__exit').on('click', (e) => {
	let modal = $(e.currentTarget).parent().parent();
	modal_exit(modal);
	return
});


const store = localStorage;

$('.page-modal__main-block__form__submit').on('click', (e) => {
	e.preventDefault();

	const jname = $('.page-modal__main-block__form__name');
	const jcomment = $('.page-modal__main-block__form__description');
	const jcontainer = $('.page-main__cont-wrap__center-cont__body');
	const jnum = $('.page-main__cont-wrap__bottom-cont__num');
	
	let valid = false;
	
	if (/([A-Z])\w*|([А-Я])\w*/.test(jname.val()) && jcomment.val()) {
	  valid = true 
	} else if (!jname.val() || !jcomment.val()) {
		alert('Вы должны заполнить оба поля');
		return
	} else {
		alert('Поле Имя должно заполняться соответствующе (example: Name)')
		return
	};
	if (valid) {add_item(store, jname.val(), jcomment.val(), jcontainer)};
	
	jname.val('');
	jcomment.val('');
	jnum.text(`${store.length}`)
	
	return
});