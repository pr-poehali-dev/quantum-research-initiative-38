import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white/50 bg-white/5 backdrop-blur-sm">Набор открыт</Badge>,
    title: "Время строить будущее.",
    showButton: true,
    buttonText: 'Присоединиться'
  },
  {
    id: 'about',
    title: 'Почему мы?',
    content: 'Мы даём всё необходимое для роста: менторство опытных практиков, живое сообщество единомышленников и ресурсы, которые реально работают.'
  },
  {
    id: 'features',
    title: 'Что вы получите',
    content: 'Экспертные консультации один на один, закрытый нетворкинг с основателями и доступ к инструментам, которые ускоряют путь от идеи до результата.'
  },
  {
    id: 'testimonials',
    title: 'Истории участников',
    content: 'Сотни команд уже превратили свои идеи в работающие продукты. Ваша история успеха — следующая.'
  },
  {
    id: 'join',
    title: 'Готовы к старту?',
    content: 'Сделайте первый шаг прямо сейчас. Присоединяйтесь к сообществу, которое строит будущее — вместе.',
    showButton: true,
    buttonText: 'Начать бесплатно'
  },
]
