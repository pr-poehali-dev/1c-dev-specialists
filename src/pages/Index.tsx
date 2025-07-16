import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Code" className="text-blue-600" size={32} />
              <h1 className="text-xl font-bold text-slate-900">1C Development</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-600 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">О нас</a>
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#cases" className="text-slate-600 hover:text-blue-600 transition-colors">Кейсы</a>
              <a href="#blog" className="text-slate-600 hover:text-blue-600 transition-colors">Блог</a>
              <a href="#contacts" className="text-slate-600 hover:text-blue-600 transition-colors">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Связаться</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Разработка и внедрение 
                <span className="text-blue-300"> 1C решений</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Профессиональная разработка конфигураций, интеграция с внешними системами 
                и полная техническая поддержка ваших 1C проектов
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Наши проекты
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/adc18d41-d118-4848-9b88-6a4a35bc6371.jpg" 
                alt="1C Developers Team" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">О нашей команде</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Мы — команда сертифицированных специалистов по 1C с опытом работы более 8 лет. 
              Реализовали свыше 200 проектов для компаний различных отраслей и масштабов.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-blue-600">200+</div>
                <div className="text-slate-600">Реализованных проектов</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-blue-600">8+</div>
                <div className="text-slate-600">Лет опыта</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-slate-600">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Наши услуги</h2>
            <p className="text-lg text-slate-600">Полный спектр услуг по разработке и поддержке 1C систем</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Code" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Разработка конфигураций</CardTitle>
                <CardDescription>
                  Создание уникальных конфигураций 1C под специфику вашего бизнеса
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Типовые и отраслевые конфигурации</li>
                  <li>• Доработка существующих решений</li>
                  <li>• Создание внешних обработок</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Workflow" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Интеграция систем</CardTitle>
                <CardDescription>
                  Подключение 1C к внешним системам и сервисам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Интеграция с CRM и ERP</li>
                  <li>• Обмен с банковскими системами</li>
                  <li>• API для веб-приложений</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Поддержка и обслуживание</CardTitle>
                <CardDescription>
                  Техническая поддержка и сопровождение 1C систем
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Обновление конфигураций</li>
                  <li>• Устранение ошибок</li>
                  <li>• Оптимизация производительности</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Обучение пользователей</CardTitle>
                <CardDescription>
                  Проведение тренингов и обучающих курсов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Групповые и индивидуальные занятия</li>
                  <li>• Создание инструкций</li>
                  <li>• Онлайн и офлайн формат</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Package" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Продажа ПО</CardTitle>
                <CardDescription>
                  Лицензирование и поставка программных продуктов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Лицензии 1C</li>
                  <li>• Готовые решения</li>
                  <li>• Консультации по выбору</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Database" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Миграция данных</CardTitle>
                <CardDescription>
                  Перенос данных между системами и версиями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Переход на новые версии</li>
                  <li>• Импорт из других систем</li>
                  <li>• Резервное копирование</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Кейсы наших проектов</h2>
            <p className="text-lg text-slate-600">Примеры успешно реализованных решений</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
                <img 
                  src="/img/691e79e9-3b93-4fe4-b2a6-a3833a299193.jpg" 
                  alt="1C Dashboard" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/20"></div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Управление торговлей</Badge>
                  <span className="text-sm text-slate-500">6 месяцев</span>
                </div>
                <CardTitle>Автоматизация торговой сети</CardTitle>
                <CardDescription>
                  Внедрение системы управления торговлей для сети из 15 магазинов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Настройка товарного учета</p>
                  <p>• Интеграция с кассовым оборудованием</p>
                  <p>• Система лояльности клиентов</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 relative overflow-hidden">
                <img 
                  src="/img/fd929fb1-9e29-4de4-a260-11d6313d8354.jpg" 
                  alt="Business Process" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-green-900/20"></div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Зарплата и кадры</Badge>
                  <span className="text-sm text-slate-500">4 месяца</span>
                </div>
                <CardTitle>HR-система для производства</CardTitle>
                <CardDescription>
                  Комплексная система управления персоналом для производственного предприятия
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Учет рабочего времени</p>
                  <p>• Расчет заработной платы</p>
                  <p>• Система мотивации сотрудников</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-900/20"></div>
                <div className="w-full h-full flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-white" size={48} />
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Бухгалтерия</Badge>
                  <span className="text-sm text-slate-500">3 месяца</span>
                </div>
                <CardTitle>Финансовый учет для холдинга</CardTitle>
                <CardDescription>
                  Консолидированная отчетность для группы компаний
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Многоуровневая структура</p>
                  <p>• Валютные операции</p>
                  <p>• Регламентированная отчетность</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-orange-900/20"></div>
                <div className="w-full h-full flex items-center justify-center">
                  <Icon name="Truck" className="text-white" size={48} />
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Логистика</Badge>
                  <span className="text-sm text-slate-500">5 месяцев</span>
                </div>
                <CardTitle>Система складского учета</CardTitle>
                <CardDescription>
                  Автоматизация логистических процессов распределительного центра
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• WMS система</p>
                  <p>• Штрихкодирование</p>
                  <p>• Планирование маршрутов</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Блог</h2>
            <p className="text-lg text-slate-600">Полезные статьи и новости из мира 1C</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-sm text-slate-500 mb-2">15 июля 2024</div>
                <CardTitle className="text-lg">Новые возможности 1C 8.3.24</CardTitle>
                <CardDescription>
                  Обзор ключевых изменений в последнем релизе платформы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">Читать далее</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-sm text-slate-500 mb-2">10 июля 2024</div>
                <CardTitle className="text-lg">Оптимизация производительности</CardTitle>
                <CardDescription>
                  Практические советы по ускорению работы 1C систем
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">Читать далее</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-sm text-slate-500 mb-2">5 июля 2024</div>
                <CardTitle className="text-lg">Интеграция с CRM</CardTitle>
                <CardDescription>
                  Как настроить обмен данными между 1C и внешними системами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">Читать далее</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Контакты</h2>
            <p className="text-lg text-slate-600">Свяжитесь с нами для обсуждения вашего проекта</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Адрес</h3>
                  <p className="text-slate-600">г. Москва, ул. Примерная, д. 123, офис 456</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Телефон</h3>
                  <p className="text-slate-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                  <p className="text-slate-600">info@1c-development.ru</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Режим работы</h3>
                  <p className="text-slate-600">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>
                  Мы свяжемся с вами в течение рабочего дня
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <Input placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Сообщение</label>
                  <Textarea placeholder="Опишите вашу задачу..." rows={4} />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Code" className="text-blue-400" size={24} />
                <h3 className="font-bold text-lg">1C Development</h3>
              </div>
              <p className="text-slate-400">
                Профессиональная разработка и поддержка 1C решений
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Услуги</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Разработка конфигураций</li>
                <li>Интеграция систем</li>
                <li>Техподдержка</li>
                <li>Обучение</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Компания</h4>
              <ul className="space-y-2 text-slate-400">
                <li>О нас</li>
                <li>Кейсы</li>
                <li>Блог</li>
                <li>Контакты</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Контакты</h4>
              <ul className="space-y-2 text-slate-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@1c-development.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 1C Development. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}