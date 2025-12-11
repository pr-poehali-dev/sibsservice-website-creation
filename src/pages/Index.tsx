import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
  };

  const products = [
    {
      title: 'Бытовая химия',
      description: 'Средства для дома премиум качества',
      icon: 'Sparkles',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      title: 'Уходовая косметика',
      description: 'Натуральная косметика для красоты',
      icon: 'Heart',
      gradient: 'from-pink-400 to-orange-400'
    },
    {
      title: 'БАДы и витамины',
      description: 'Биологически активные добавки',
      icon: 'Pill',
      gradient: 'from-orange-400 to-purple-400'
    },
    {
      title: 'Аксессуары',
      description: 'Товары для здоровья и красоты',
      icon: 'ShoppingBag',
      gradient: 'from-purple-500 to-pink-500'
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">С</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                СибСервис
              </h1>
            </div>
            <nav className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О компании' },
                { id: 'products', label: 'Товары' },
                { id: 'services', label: 'Услуги' },
                { id: 'promotions', label: 'Акции' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'contacts', label: 'Контакты' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors hover:text-purple-600 ${
                    activeSection === item.id ? 'text-purple-600' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

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

      <section id="about" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge className="bg-purple-100 text-purple-700 border-0">О нас</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">СибСервис — это</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Компания с многолетним опытом в сфере рекламной деятельности и поставок качественных товаров.
              Мы специализируемся на продаже бытовой химии, уходовой косметики, БАДов и аксессуаров,
              а также предоставляем профессиональные услуги по диагностике организма, массажу и детоксу.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">10+ лет</h3>
                <p className="text-gray-600">на рынке</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="text-gray-600">довольных клиентов</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Package" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">1000+</h3>
                <p className="text-gray-600">товаров в каталоге</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-pink-100 text-pink-700 border-0 mb-4">Каталог</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши товары</h2>
            <p className="text-xl text-gray-600">Качественная продукция для вашего дома и здоровья</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon name={product.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    Смотреть каталог
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-orange-100 text-orange-700 border-0 mb-4">Услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Профессиональный уход</h2>
            <p className="text-xl text-gray-600">Доверьте своё здоровье профессионалам</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-white animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <Icon name="Check" size={16} className="text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white">
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
                        <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
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

      <section id="promotions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 mb-4">
              Выгодно
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Актуальные акции</h2>
            <p className="text-xl text-gray-600">Специальные предложения для наших клиентов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <Card
                key={index}
                className="border-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
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
                  <Button className="w-full bg-white text-purple-600 hover:bg-white/90">
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-purple-100 text-purple-700 border-0 mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят клиенты</h2>
            <p className="text-xl text-gray-600">Мы ценим каждое мнение</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="border-0 bg-white hover:shadow-xl transition-all duration-300 animate-scale-in"
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
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base text-gray-700">
                    "{review.text}"
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="bg-orange-100 text-orange-700 border-0 mb-4">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-gray-600">Мы всегда рады ответить на ваши вопросы</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-gray-600">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@sibservice.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-gray-600">г. Новосибирск, ул. Примерная, 123</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-gray-600">Сб-Вс: 10:00 - 16:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Напишите нам</CardTitle>
                  <CardDescription>Заполните форму обратной связи</CardDescription>
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
                    <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
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
    </div>
  );
};

export default Index;
