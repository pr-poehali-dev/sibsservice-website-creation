import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
              Здоровье и красота
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Ваш надёжный партнёр в мире{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                здоровья и красоты
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Качественные товары для дома, косметика, БАДы и профессиональные услуги по уходу за здоровьем
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                onClick={() => scrollToSection('products')}
              >
                Каталог товаров
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 hover:bg-purple-50"
                onClick={() => scrollToSection('services')}
              >
                Наши услуги
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <img
              src="https://cdn.poehali.dev/projects/737297b4-a946-46e8-a82d-3ab80f2a7406/files/f1fe30c0-5306-49b9-b3bb-468775edfe21.jpg"
              alt="Продукция СибСервис"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-xl flex items-center justify-center">
                  <Icon name="Star" size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">500+ клиентов</p>
                  <p className="text-sm text-gray-600">доверяют нам</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
