ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.757521, 37.616369],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 13,
            controls: []
        });
        var coords = [
            [55.758762, 37.582924],
            [55.754751, 37.633497],
            [55.746478, 37.583819],
            [55.751949, 37.603131]
        ];
        var myCollection = new ymaps.GeoObjectCollection({}, {
            // preset: 'islands#redIcon', //все метки красные
            draggable: false, // и их можно перемещать
            iconLayout: 'default#image',
            iconImageHref: './img/icon/marker.svg', //путь из файла index.html
            iconImageSize: [58, 73],
            iconImageOffset: [-3, -42]
        });
        
        for (var i = 0; i < coords.length; i++) {
            myCollection.add(new ymaps.Placemark(coords[i]));
        }
        
        myMap.geoObjects.add(myCollection);
        myMap.behaviors.disable('scrollZoom');
}