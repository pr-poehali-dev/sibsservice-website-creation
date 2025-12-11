import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface MainSectionsProps {
  handleBooking: (e: React.FormEvent) => void;
}

const MainSections = ({ handleBooking }: MainSectionsProps) => {
  const products = [
    {
      title: 'Бытовая химия',
      description: 'Средства для дома премиум качества',
      icon: 'Sparkles',
      gradient: 'from-gray-800 to-emerald-800'
    },
    {
      title: 'Уходовая косметика',
      description: 'Натуральная косметика для красоты',
      icon: 'Heart',
      gradient: 'from-amber-600 to-yellow-600'
    },
    {
      title: 'БАДы и витамины',
      description: 'Биологически активные добавки',
      icon: 'Pill',
      gradient: 'from-emerald-700 to-gray-800'
    },
    {
      title: 'Аксессуары',
      description: 'Товары для здоровья и красоты',
      icon: 'ShoppingBag',
      gradient: 'from-gray-900 to-amber-700'
    }
  ];

  const services = [
    {
      title: 'Диагностика организма',
      description: 'Комплексное обследование современным оборудованием',
      price: 'от 3 500 ₽',
      icon: 'Stethoscope',
      features: ['Анализ состояния', 'Рекомендации специалиста', 'Подбор программы']
    },
    {
      title: 'Массаж',
      description: 'Профессиональный лечебный и расслабляющий массаж',
      price: 'от 2 000 ₽',
      icon: 'Hand',
      features: ['Различные техники', 'Опытные мастера', 'Индивидуальный подход']
    },
    {
      title: 'Детокс-программы',
      description: 'Комплексное очищение и оздоровление организма',
      price: 'от 5 000 ₽',
      icon: 'Droplets',
      features: ['Натуральные методы', 'Консультация нутрициолога', 'Программа питания']
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Прекрасный сервис! Качественная косметика и приятные цены. Особенно понравилась консультация специалиста.',
      rating: 5
    },
    {
      name: 'Михаил Сергеев',
      text: 'Заказывал бытовую химию для офиса. Доставка быстрая, всё упаковано отлично. Рекомендую!',
      rating: 5
    },
    {
      name: 'Елена Иванова',
      text: 'Ходила на массаж и детокс-программу. Результат превзошёл ожидания! Профессионалы своего дела.',
      rating: 5
    }
  ];

  const promotions = [
    {
      title: 'Скидка 20% на первый заказ',
      description: 'При покупке от 3000 рублей',
      badge: 'Новинка'
    },
    {
      title: 'Бесплатная диагностика',
      description: 'При покупке курса процедур',
      badge: 'Хит'
    },
    {
      title: 'Комплект косметики в подарок',
      description: 'При заказе на сумму от 5000 рублей',
      badge: 'Акция'
    }
  ];

  return (
    <>
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge className="bg-amber-500/20 text-amber-400 border-0">О нас</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white">СибСервис — это</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Компания с многолетним опытом в сфере рекламной деятельности и поставок качественных товаров.
              Мы специализируемся на продаже бытовой химии, уходовой косметики, БАДов и аксессуаров,
              а также предоставляем профессиональные услуги по диагностике организма, массажу и детоксу.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">10+ лет</h3>
                <p className="text-gray-300">на рынке</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">500+</h3>
                <p className="text-gray-300">довольных клиентов</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Package" size={32} className="text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">1000+</h3>
                <p className="text-gray-300">товаров в каталоге</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-0 mb-4">Каталог</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Наши товары</h2>
            <p className="text-xl text-gray-300">Качественная продукция для вашего дома и здоровья</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-amber-500/20 bg-gray-800/80 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon name={product.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{product.title}</CardTitle>
                  <CardDescription className="text-base text-gray-300">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-gray-900 to-emerald-900 hover:from-gray-800 hover:to-emerald-800 text-white">
                    Смотреть каталог
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-0 mb-4">Услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Профессиональный уход</h2>
            <p className="text-xl text-gray-300">Доверьте своё здоровье профессионалам</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border border-amber-500/20 bg-gray-800/80 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-gray-900" />
                  </div>
                  <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-base text-gray-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">{service.price}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <Icon name="Check" size={16} className="text-emerald-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-emerald-700 to-emerald-900 hover:from-emerald-600 hover:to-emerald-800 text-white">
                        Записаться
                        <Icon name="Calendar" className="ml-2" size={18} />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Запись на {service.title.toLowerCase()}</DialogTitle>
                        <DialogDescription>
                          Заполните форму и мы свяжемся с вами для уточнения деталей
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleBooking} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Ваше имя</Label>
                          <Input id="name" placeholder="Иван Иванов" required />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон</Label>
                          <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                        </div>
                        <div>
                          <Label htmlFor="comment">Комментарий</Label>
                          <Textarea id="comment" placeholder="Укажите удобное время" />
                        </div>
                        <Button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-gray-900">
                          Отправить заявку
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <img
              src="https://cdn.poehali.dev/projects/737297b4-a946-46e8-a82d-3ab80f2a7406/files/8daa00ea-3b69-4144-9bbd-ab5c2e07156f.jpg"
              alt="Услуги СибСервис"
              className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="promotions" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-gradient-to-r from-amber-500 to-yellow-600 text-gray-900 border-0 mb-4">
              Выгодно
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Актуальные акции</h2>
            <p className="text-xl text-gray-300">Специальные предложения для наших клиентов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <Card
                key={index}
                className="border-0 bg-gradient-to-br from-gray-900 via-emerald-900 to-amber-900 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <Badge className="bg-white/20 text-white border-0 w-fit mb-2">
                    {promo.badge}
                  </Badge>
                  <CardTitle className="text-2xl text-white">{promo.title}</CardTitle>
                  <CardDescription className="text-white/90 text-base">
                    {promo.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-amber-500 text-gray-900 hover:bg-amber-400 font-semibold">
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-amber-500/20 text-amber-400 border-0 mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Что говорят клиенты</h2>
            <p className="text-xl text-gray-300">Мы ценим каждое мнение</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="border border-amber-500/20 bg-gray-800/80 hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src="https://cdn.poehali.dev/projects/737297b4-a946-46e8-a82d-3ab80f2a7406/files/5c697a37-ac13-4418-b66b-f10728b3621a.jpg"
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-white">{review.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-amber-500 fill-amber-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base text-gray-300">
                    "{review.text}"
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="bg-emerald-500/20 text-emerald-400 border-0 mb-4">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Свяжитесь с нами</h2>
              <p className="text-xl text-gray-300">Мы всегда рады ответить на ваши вопросы</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-gray-900" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Телефон</p>
                      <p className="text-gray-300">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-gray-300">info@sibservice.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-amber-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Адрес</p>
                      <p className="text-gray-300">г. Новосибирск, ул. Примерная, 123</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={20} className="text-gray-900" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Режим работы</p>
                      <p className="text-gray-300">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-gray-300">Сб-Вс: 10:00 - 16:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-amber-500/20 bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Напишите нам</CardTitle>
                  <CardDescription className="text-gray-300">Заполните форму обратной связи</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBooking} className="space-y-4">
                    <div>
                      <Label htmlFor="contact-name">Ваше имя</Label>
                      <Input id="contact-name" placeholder="Иван Иванов" required />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email</Label>
                      <Input id="contact-email" type="email" placeholder="ivan@example.com" required />
                    </div>
                    <div>
                      <Label htmlFor="contact-message">Сообщение</Label>
                      <Textarea id="contact-message" placeholder="Ваше сообщение..." required />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-emerald-700 to-emerald-900 hover:from-emerald-600 hover:to-emerald-800 text-white">
                      Отправить
                      <Icon name="Send" className="ml-2" size={18} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSections;