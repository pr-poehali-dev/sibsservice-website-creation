import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xl">С</span>
              </div>
              <h3 className="text-xl font-bold">СибСервис</h3>
            </div>
            <p className="text-white/80">
              Ваш надёжный партнёр в мире здоровья и красоты
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Разделы</h4>
            <ul className="space-y-2 text-white/80">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О компании</button></li>
              <li><button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors">Товары</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Услуги</button></li>
              <li><button onClick={() => scrollToSection('promotions')} className="hover:text-white transition-colors">Акции</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-white/80">
              <li>+7 (999) 123-45-67</li>
              <li>info@sibservice.ru</li>
              <li>г. Новосибирск</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Социальные сети</h4>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="hover:bg-white/20 text-white">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/20 text-white">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/20 text-white">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 СибСервис. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
