//////////////////// ПРЕЛОАДЕР
// document.body.onload = function() {
// 	// выполним функцию после определенного кол-во времени
// 	setTimeout( function() {
// 		var preloader = document.getElementById('preloader');	// выбираем div
			
// 			// если в списке классов нет класса "done"
// 			if ( !preloader.classList.contains('done') ) {

// 				// то добавим его (скрываем прелоадер)
// 				preloader.classList.add('done');	
// 			}

// 	// даже после загрузки страницы видно прелоадер 500мск
// 	}, 500);
// }


//////////////////// ЗАПРЕТ СКРОЛЛА КАРТЫ GOOGLE MAPS
  // Disable scroll zooming and bind back the click event
  var onMapMouseleaveHandler = function (event) {
    var that = $(this);

    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
  }

  var onMapClickHandler = function (event) {
    var that = $(this);

    // Disable the click handler until the user leaves the map area
    that.off('click', onMapClickHandler);

    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");

    // Handle the mouse leave event
    that.on('mouseleave', onMapMouseleaveHandler);
  }

  // Enable map zooming with mouse scroll when the user clicks the map
  $('.maps.embed-container').on('click', onMapClickHandler);



//////////////////// СЛАЙДЕР
	var	index = 1,			// номер слайда
		duration = 5000,		// время переключения
		x = document.getElementsByClassName("img_slides");		// все слайды

	// сдвиг вправо
	function moveRight() {
		index++;	// увеличиваем на 1	
		if (index > x.length) { index = 1; }	// если индекс больше числа слайдов, то показываем первый слайд
		showSlider(index);	// показываем слайд
	}

	// сдвиг влево
	function moveLeft() {
		index--;	// уменьшаем на 1	
		if (index < 1) { index = x.length; }	// если индекс меньше чем 1, то показываем последний слайд
		showSlider(index);	// показываем слайд
	}

	// показываем слайд по номеру
	function showSlider(n) {
		// все слайды делаем невидимыми
		for (var i = 0; i < x.length; i++) { x[i].style.display = "none"; }
		// слайд с текущим индексом делаем видимым
		x[n-1].style.display = "block";
	}

	// показываем первый слайд
	showSlider(index);

	// определенное кол-во времени сдвигаем вправо слайд
	setInterval(function() {
		moveRight();
	}, duration);





$(document).ready( function(){

	var images = $('#services .container .item img');

	for(var i = 0; i < images.length; i++ ){

		var img = $('#services .container .item:eq(' + i + ') img');
			src = img.attr('src'),
			par = img.parent();
		
		img.remove();
		par.css('background', 'url("' + src + '")');
		par.css('background-size', 'cover');
		par.css('background-repeat', 'no-repeat');
		par.css('background-position', 'center center');
	}


});