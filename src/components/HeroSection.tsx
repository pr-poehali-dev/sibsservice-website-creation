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
            <Badge className="bg-gradient-to-r from-amber-500 to-yellow-600 text-gray-900 border-0">
              Здоровье и красота
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              Ваш надёжный партнёр в мире{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-emerald-400 bg-clip-text text-transparent">
                здоровья и красоты
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Качественные товары для дома, косметика, БАДы и профессиональные услуги по уходу за здоровьем
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-gray-900"
                onClick={() => scrollToSection('products')}
              >
                Каталог товаров
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10"
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
            <div className="absolute -bottom-6 -right-6 bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 max-w-xs border border-amber-500/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center">
                  <Icon name="Star" size={24} className="text-gray-900" />
                </div>
                <div>
                  <p className="font-bold text-white">500+ клиентов</p>
                  <p className="text-sm text-gray-300">доверяют нам</p>
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