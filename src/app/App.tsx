import { useState } from 'react';
import { 
  Plane, 
  Globe, 
  Hotel, 
  Coffee, 
  MapPin, 
  Shield, 
  Sparkles, 
  Users, 
  MessageCircle, 
  Award,
  Star,
  Utensils,
  Calendar,
  CreditCard,
  CircleCheck,
  Luggage,
  PlaneTakeoff,
  ChevronDown
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

interface CourseModule {
  number: string;
  title: string;
  description: string;
  benefit: string;
  icon: React.ReactNode;
}

export default function App() {
  const [activeGroup, setActiveGroup] = useState<'group1' | 'group2'>('group1');

  const group1Modules: CourseModule[] = [
    {
      number: '1',
      title: 'Аэропорт без стресса',
      description: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.',
      benefit: 'Уверенность уже в первые часы за границей.',
      icon: <PlaneTakeoff className="w-8 h-8" />
    },
    {
      number: '2',
      title: 'В отеле: заселение и помощь',
      description: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.',
      benefit: 'Практика вежливых фраз и повседневной лексики.',
      icon: <Hotel className="w-8 h-8" />
    },
    {
      number: '3',
      title: 'Кафе и рестораны',
      description: 'Заказ еды, вопросы про аллергены, счёт и чаевые.',
      benefit: 'Развитие гастрономического словаря и уверенности в общении.',
      icon: <Utensils className="w-8 h-8" />
    },
    {
      number: '4',
      title: 'На улице: ориентирование и просьбы',
      description: 'Как спросить дорогу, вызвать такси или найти аптеку.',
      benefit: 'Понимание устной речи и произношения в реальных ситуациях.',
      icon: <MapPin className="w-8 h-8" />
    },
    {
      number: '5',
      title: 'Экстренные случаи',
      description: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.',
      benefit: 'Важные фразы, которые могут спасти отпуск.',
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const group2Modules: CourseModule[] = [
    ...group1Modules,
    {
      number: '6',
      title: 'Туризм и развлечения',
      description: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.',
      benefit: 'Погружение в культурный контекст через язык.',
      icon: <Luggage className="w-8 h-8" />
    },
    {
      number: '7',
      title: 'Дружба в путешествиях',
      description: 'Как познакомиться с другими детьми или подростками за границей.',
      benefit: 'Игровая практика диалогов и неформального общения.',
      icon: <MessageCircle className="w-8 h-8" />
    },
    {
      number: '8',
      title: 'Дипломный проект: «Мой идеальный отпуск»',
      description: 'Ребёнок планирует воображаемое путешествие и представляет его на английском.',
      benefit: 'Развитие связной речи и творческого самовыражения.',
      icon: <Award className="w-8 h-8" />
    }
  ];

  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Практическая живая речь',
      description: 'Акцент на практику, а не на грамматику ради грамматики'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Реальные ситуации',
      description: 'Все ситуации — из реальной жизни путешественника'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Интерактивные задания',
      description: 'Ролевые игры, аудиоситуации, мини-квесты'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Уровень A2–B1',
      description: 'Ребёнок выходит на Pre-Intermediate за курс'
    }
  ];

  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1642009071428-119813340e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB3b3JsZCUyMG1hcHxlbnwxfHx8fDE3NjYxMTc5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Travel background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-amber-500/10 border border-cyan-500/20 mb-6">
            <Plane className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300">Набор открыт!</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl mb-6 bg-gradient-to-r from-cyan-300 via-amber-200 to-orange-300 bg-clip-text text-transparent">
            Английский для путешествий
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Мечтаете, чтобы ваш ребёнок свободно общался за границей — от заказа кофе до поиска утраченного чемодана?
          </p>
          
          <p className="text-base sm:text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Этот курс научит реальному разговорному английскому, который пригодится в отпуске, поездках и будущих путешествиях!
          </p>

          <button 
            onClick={scrollToCTA}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-amber-500 hover:from-cyan-600 hover:to-amber-600 text-white rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Записаться на курс
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Users className="w-8 h-8 text-amber-400" />
            <h2 className="text-3xl sm:text-4xl text-center bg-gradient-to-r from-cyan-300 to-amber-300 bg-clip-text text-transparent">
              Для кого курс
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <div className="text-5xl mb-4">👧🏻</div>
              <h3 className="text-2xl mb-3 text-cyan-300">Первая группа</h3>
              <p className="text-slate-300 text-lg">4–5 класс</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
              <div className="text-5xl mb-4">👦🏻</div>
              <h3 className="text-2xl mb-3 text-amber-300">Вторая группа</h3>
              <p className="text-slate-300 text-lg">6–8 класс</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Coffee className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl text-center bg-gradient-to-r from-cyan-300 to-amber-300 bg-clip-text text-transparent">
              Программа курса
            </h2>
          </div>

          {/* Group Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-slate-800 p-1">
              <button
                onClick={() => setActiveGroup('group1')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeGroup === 'group1'
                    ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                4–5 класс
              </button>
              <button
                onClick={() => setActiveGroup('group2')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeGroup === 'group2'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                6–8 класс
              </button>
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {(activeGroup === 'group1' ? group1Modules : group2Modules).map((module, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500/20 to-amber-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    {module.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-cyan-400 mb-1">Модуль {module.number}</div>
                    <h3 className="text-xl text-white">{module.title}</h3>
                  </div>
                </div>
                <p className="text-slate-300 mb-3 leading-relaxed">{module.description}</p>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <span className="text-amber-400 text-lg flex-shrink-0">👉</span>
                  <p className="text-amber-200 text-sm">{module.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Sparkles className="w-8 h-8 text-amber-400" />
            <h2 className="text-3xl sm:text-4xl text-center bg-gradient-to-r from-cyan-300 to-amber-300 bg-clip-text text-transparent">
              Почему этот курс особенный?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-cyan-500/20 to-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg mb-2 text-cyan-200">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <CircleCheck className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl text-center bg-gradient-to-r from-cyan-300 to-amber-300 bg-clip-text text-transparent">
              Что потребуется
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-slate-800/50 border border-cyan-500/20">
              <CircleCheck className="w-6 h-6 text-cyan-400 mb-3" />
              <p className="text-slate-200">Стационарный компьютер или ноутбук</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-slate-800/50 border border-cyan-500/20">
              <CircleCheck className="w-6 h-6 text-cyan-400 mb-3" />
              <p className="text-slate-200">Наушники и микрофон</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-slate-800/50 border border-cyan-500/20">
              <CircleCheck className="w-6 h-6 text-cyan-400 mb-3" />
              <p className="text-slate-200">Стабильный интернет</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-slate-800/50 border border-cyan-500/20">
              <CircleCheck className="w-6 h-6 text-cyan-400 mb-3" />
              <p className="text-slate-200">Приложение Zoom</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Calendar className="w-8 h-8 text-amber-400" />
            <h2 className="text-3xl sm:text-4xl text-center bg-gradient-to-r from-cyan-300 to-amber-300 bg-clip-text text-transparent">
              Расписание
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-slate-800/50 border border-cyan-500/30">
              <Calendar className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-2xl mb-3 text-cyan-300">Четверг, 15:00 (МСК)</h3>
              <p className="text-slate-300">Группа 4–5 класс</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-slate-800/50 border border-amber-500/30">
              <Calendar className="w-8 h-8 text-amber-400 mb-4" />
              <h3 className="text-2xl mb-3 text-amber-300">Пятница, 15:30 (МСК)</h3>
              <p className="text-slate-300">Группа 6–8 класс</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <CreditCard className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl text-center bg-gradient-to-r from-cyan-300 to-amber-300 bg-clip-text text-transparent">
              Стоимость
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border-2 border-amber-500/30 relative overflow-hidden group hover:border-amber-500/50 transition-all">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500 text-white text-sm">
                Выгодно
              </div>
              <h3 className="text-2xl mb-4 text-amber-300">Полный курс</h3>
              <div className="mb-4">
                <span className="text-5xl text-white">12 000</span>
                <span className="text-2xl text-slate-400 ml-2">руб</span>
              </div>
              <p className="text-slate-300 mb-6">10 уроков</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-slate-300">
                  <CircleCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Все модули программы</span>
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CircleCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Дипломный проект</span>
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CircleCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Экономия 1 000 руб</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-slate-800/50 border border-cyan-500/30 hover:border-cyan-500/50 transition-all">
              <h3 className="text-2xl mb-4 text-cyan-300">Абонемент</h3>
              <div className="mb-4">
                <span className="text-5xl text-white">1 300</span>
                <span className="text-2xl text-slate-400 ml-2">руб</span>
              </div>
              <p className="text-slate-300 mb-6">за урок</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-slate-300">
                  <CircleCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Гибкая оплата</span>
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CircleCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Попробуйте перед покупкой</span>
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CircleCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Полный доступ</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Small Group Notice */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-amber-500/10 border border-cyan-500/20 text-center">
            <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <p className="text-lg text-slate-200 mb-2">
              Группы маленькие — максимум 6 детей
            </p>
            <p className="text-amber-300">Места ограничены!</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-900/20 via-slate-900/50 to-amber-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-amber-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-cyan-300">Набор открыт!</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-300 to-amber-300 bg-clip-text text-transparent">
              Запишитесь сейчас!
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
            </p>
          </div>

          <button 
            onClick={() => {
              alert('Спасибо за интерес! В реальном приложении здесь была бы форма регистрации или ссылка на контакт.');
            }}
            className="group px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-500 hover:from-cyan-600 hover:via-purple-600 hover:to-amber-600 text-white rounded-xl transition-all duration-300 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-110 text-lg sm:text-xl animate-pulse hover:animate-none"
          >
            <span className="flex items-center gap-3">
              <Plane className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Записаться на курс
              <Plane className="w-6 h-6 group-hover:-rotate-12 transition-transform" />
            </span>
          </button>

          <p className="mt-8 text-sm text-slate-500">
            Нажимая на кнопку, вы соглашаетесь с условиями обработки данных
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-cyan-400" />
            <span className="text-slate-400">Английский для путешествий</span>
          </div>
          <p className="text-sm text-slate-500">
            © 2025 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
}
