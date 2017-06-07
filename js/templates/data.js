/**
 * Created by zuoa on 06.06.2017.
 */

export const welcome = Object.freeze({
  title: `Правила игры`,
  subtitle: `Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br> Удачи!`
});

export const levelArtist = Object.freeze({
  title: `Кто исполняет эту песню?`,
  answers: [{
    title: `Пелагея`,
    pick: `https://images.unsplash.com/photo-1495458200315-8a1dce4bbe77?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  },{
    title: `Краснознаменная дивизия имени моей бабушки`,
    pick: `https://images.unsplash.com/photo-1491933367339-d869a4dcc137?dpr=1&auto=compress,format&fit=max&w=576&q=80&cs=tinysrgb&crop=`
  },{
    title: `Тибетское горловое пение`,
    pick: `https://images.unsplash.com/photo-1481762554390-ff5562748bdf?dpr=1&auto=compress,format&fit=max&w=376&q=80&cs=tinysrgb&crop=`
  }],
  track: `./audio/Fringe.mp3`
});

export const levelGenre = Object.freeze({
  title: `Выберите инди-рок треки`,
  answers: [
    `./audio/Act_Three.mp3`,
    `./audio/Fringe.mp3`,
    `./audio/Militaire_Electronic.mp3`,
    `./audio/Pilots_Of_Stone.mp3`
  ]
});

export const result = Object.freeze({
  victory: {
    title: `Вы настоящий меломан!`,
    content: {
      subtitle: `За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии`,
      rating: `80`
    }
  },
  defeat: {
    title: `Вы проиграли`,
    content: {
      subtitle: `Ничего, вам повезет в следующий раз`
    }
  }
});
