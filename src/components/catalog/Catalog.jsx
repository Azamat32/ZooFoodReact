import React from "react";
import "./Catalog.scss";
import CatalogItem from "../UI/catalogItem/CatalogItem";
import cow from "../assets/cow.webp";
import pig from "../assets/pig.webp";
import chiken from "../assets/chiken.webp";
import chikens from "../assets/chikens.webp";
import duck from "../assets/duck.webp";
import rabbit from "../assets/rabbit.webp";
import map from "../assets/map.svg";
import calc from "../assets/calc.svg";
import book from "../assets/book.svg";
import arrowRight from '../assets/arrow_right.svg';
function Catalog() {
  return (
    <div className="catalog">
      <div className="catalog_inner">
        <div className="catalog_title">
          <h1>Почему стоит выбрать «Мегакорм»</h1>
        </div>
        <div className="catalog_wrap">
          <CatalogItem
            animImg={pig}
            catalogTitle="Эффективный и полезный"
            catalogWords="Зерно, белковые вещества, микроэлементы и витамины. Есть все для быстрого роста здоровых животных."
          />
          <CatalogItem
            animImg={chiken}
            linkIcon={map}
            linkWords="Карта дистрибьютеров"
            arrow={arrowRight}
            catalogTitle="Легко купить. Легко использовать "
            catalogWords="Выпускается в удобной упаковке. Доступен в большинстве регионов с доставкой. "
          />
          <CatalogItem
            animImg={cow}
            linkIcon={calc}
            arrow={arrowRight}
            linkWords="Рассчитайте необходимый объем"
            catalogTitle="Просто добиться результата"
            catalogWords="Состав каждого продукта соответствует биологическим потребностям конкретного вида животных. Повышенный иммунитет, сохранение и прирост поголовья – вот результат."
          />
          <CatalogItem
            animImg={rabbit}
            linkIcon={book}
            arrow={arrowRight}
            linkWords="Узнайте больше в нашей статье о производстве"
            catalogTitle="Гарантия качества ингредиентов"
            catalogWords="Используем только качественное сырье от лучших отечественных и мировых поставщиков. В собственной лаборатории используем более 280 критериев для анализа качества входящего сырья и готовой продукции "
          />
          <CatalogItem
            animImg={chikens}
            catalogTitle="Безопасно и экологично"
            catalogWords="Качество продукции соответствует международным стандартам ISO и GMP+. Без гормонов и стимуляторов роста. Нет повода для беспокойства."
          />
          <CatalogItem
            animImg={duck}
            catalogTitle="Ассортимент для всех и каждого"
            catalogWords="Выпускаем смеси для кормления разных видов сельскохозяйственных  животных, учитывая пол и возраст. Есть и универсальные корма. "
          />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
