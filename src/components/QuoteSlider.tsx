import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Quote {
  id: number;
  text: string;
  author: string;
  image?: string;
  type: 'text' | 'image';
}

const QuoteSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const quotes: Quote[] = [
    // Страница 1 - Обычные цитаты
    {
      id: 1,
      text: "Единственный способ делать великую работу — любить то, что ты делаешь.",
      author: "Стив Джобс",
      type: 'text'
    },
    {
      id: 2,
      text: "Жизнь — это то, что с тобой происходит, пока ты строишь другие планы.",
      author: "Джон Леннон",
      type: 'text'
    },
    {
      id: 3,
      text: "Будь собой, все остальные роли уже заняты.",
      author: "Оскар Уайльд",
      type: 'text'
    },
    
    // Страница 2 - Фото цитаты
    {
      id: 4,
      text: "фикус",
      author: "Фикус лировидный",
      image: "/img/b2257bfc-4bfe-43f8-b6f2-ea964e548c1b.jpg",
      type: 'image'
    },
    {
      id: 5,
      text: "фикус",
      author: "Фикус каучуконосный",
      image: "/img/ca7ddae8-b19d-4ba8-95c1-c0c502b45320.jpg",
      type: 'image'
    },
    {
      id: 6,
      text: "фикус",
      author: "Фикус Бенджамина",
      image: "/img/10edd57f-cdc2-4e8d-874e-365affc79dc1.jpg",
      type: 'image'
    }
  ];

  const quotesPerPage = 3;
  const totalPages = Math.ceil(quotes.length / quotesPerPage);
  const currentQuotes = quotes.slice(currentPage * quotesPerPage, (currentPage + 1) * quotesPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full">
      {/* Quote Cards */}
      <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-500 ${
        currentPage === 1 ? 'p-8 bg-gray-600 rounded-2xl' : ''
      }`}>
        {currentQuotes.map((quote) => (
          <Card 
            key={quote.id} 
            className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            {quote.type === 'image' ? (
              // Фото цитата
              <div className="relative h-80">
                <img 
                  src={quote.image} 
                  alt={quote.author}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <div className="p-6 text-white w-full">
                    <p className="text-2xl font-bold font-['Montserrat'] mb-2">
                      {quote.text}
                    </p>
                    <p className="text-sm opacity-90 font-['Open_Sans']">
                      {quote.author}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              // Обычная цитата
              <div className="p-8">
                <div className="mb-6">
                  <Icon name="Quote" size={48} className="text-gray-300 mb-4" />
                </div>
                <p className="text-gray-700 font-['Open_Sans'] text-lg mb-6 leading-relaxed">
                  "{quote.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-black font-['Montserrat'] font-semibold">
                    — {quote.author}
                  </span>
                  <Button variant="outline" size="sm">
                    <Icon name="Heart" size={16} className="mr-2" />
                    Сохранить
                  </Button>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Пагинация */}
      <div className="flex items-center justify-center space-x-4">
        <Button 
          variant="outline" 
          onClick={prevPage}
          disabled={currentPage === 0}
          className="px-4 py-2"
        >
          <Icon name="ChevronLeft" size={20} className="mr-1" />
          Назад
        </Button>

        {/* Точки пагинации */}
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === i 
                  ? 'bg-black scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <Button 
          variant="outline" 
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="px-4 py-2"
        >
          Далее
          <Icon name="ChevronRight" size={20} className="ml-1" />
        </Button>
      </div>

      {/* Индикатор страницы */}
      <div className="text-center mt-4 text-gray-500 font-['Open_Sans']">
        Страница {currentPage + 1} из {totalPages}
      </div>
    </div>
  );
};

export default QuoteSlider;