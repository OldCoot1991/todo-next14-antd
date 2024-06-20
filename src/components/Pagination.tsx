'use client'

import { Pagination, Typography, Card } from 'antd'; // Импорт компонентов Pagination, Typography и Card из библиотеки Ant Design

import { useState } from 'react'; // Импорт функции useState из библиотеки React

export default function PaginationCard() { // Экспортируем функциональный компонент AboutUs

  const [currentPage, setCurrentPage] = useState(1); // Используем состояние currentPage для отслеживания текущей страницы пагинации
  const [pageSize, setPageSize] = useState(20); // Используем состояние pageSize для хранения количества элементов на странице
  const totalItems = 100; // Общее количество элементов, например, товаров

  // Генерируем массив продуктов (объектов) с уникальными id, названием и описанием
  const products = Array.from({ length: totalItems }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    description: `Description for Product ${index + 1}`,
  }));

  const startIndex = (currentPage - 1) * pageSize; // Рассчитываем индекс начала отображаемых элементов на текущей странице
  const endIndex = Math.min(startIndex + pageSize, totalItems); // Рассчитываем индекс конца отображаемых элементов

  return (
    <div>
      <Pagination // Компонент пагинации Ant Design
        defaultCurrent={1} // Начальная страница пагинации
        size='small' // Размер пагинации
        total={totalItems} // Общее количество элементов
        onChange={(page) => setCurrentPage(page)} // Обработчик изменения текущей страницы
        pageSize={pageSize} // Размер страницы
        pageSizeOptions={[20, 30, 40, 50]} // Опции изменения размера страницы
        onShowSizeChange={(current, size) => setPageSize(size)} // Обработчик изменения размера страницы
      />

      {products.slice(startIndex, endIndex).map((product) => ( // Итерация по продуктам для отображения карточек
        <Card key={product.id}>
          <Typography.Title level={4}>{product.name}</Typography.Title> 
          <Typography.Paragraph className='red'>{product.description}</Typography.Paragraph> 
        </Card>
      ))}
    </div>
  );
}