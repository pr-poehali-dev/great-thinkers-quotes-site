import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Mountains Background */}
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/img/2f3b879d-bff7-4a3d-8456-edac5db06182.jpg')`
        }}
      >
        <div className="text-center text-white animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-['Montserrat'] tracking-tight">
            Цитаты великих
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-['Montserrat'] tracking-tight">
            мыслителей 8 б
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light font-['Open_Sans'] max-w-2xl mx-auto px-4">тут будут цитаты великих людей которые вложили свои мысли в это так же называемую капсулу времени.
(все совпадения случайны, люди выдуманы, автор сайта засекречен)</p>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </div>

      {/* Quotes Section */}
      <div className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Montserrat'] text-black">
            Цитаты
          </h2>
          <p className="text-xl text-gray-600 font-['Open_Sans'] max-w-2xl mx-auto">
            Здесь будут размещены мудрые высказывания великих мыслителей
          </p>
        </div>

        {/* Quote Cards Placeholder */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-8 hover:shadow-lg transition-shadow duration-300 animate-scale-in">
              <div className="mb-6">
                <Icon name="Quote" size={48} className="text-gray-300 mb-4" />
              </div>
              <p className="text-gray-600 font-['Open_Sans'] text-lg mb-6 leading-relaxed">
                Место для цитаты великого мыслителя №{i}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-black font-['Montserrat'] font-semibold">
                  Автор цитаты
                </span>
                <Button variant="outline" size="sm">
                  <Icon name="Heart" size={16} className="mr-2" />
                  Сохранить
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg font-['Montserrat']">
            <Icon name="Plus" size={20} className="mr-2" />
            Добавить цитату
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-lg font-['Montserrat']">
            <Icon name="Search" size={20} className="mr-2" />
            Найти цитату
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 font-['Montserrat']">
            Цитаты великих мыслителей 8 б
          </h3>
          <p className="text-gray-400 font-['Open_Sans']">
            Мудрость поколений в одном месте
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;