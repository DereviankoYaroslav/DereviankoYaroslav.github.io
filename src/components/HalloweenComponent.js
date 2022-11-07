import CardComponent from "./CardComponent";
import CardWithPictures from "./CardWithPictures";
import TableGameComponent from "./TableGameComponent";
import field_halloween from '../images/field_halloween.png'

function HalloweenComponent(){
    const wordsToLearn1 = {
        words: [
        {eng: 'Bat',
        ukr: 'Кажан'},
        {eng: 'Ghost',
        ukr: 'Привид'},
        {eng: 'Vampire',
        ukr: 'Вампір'},
        {eng: 'Witch',
        ukr: 'Відьма'},
        {eng: 'Pumpkin',
        ukr: 'Гарбуз'},
        {eng: 'Skeleton',
        ukr: 'Скелет'},
        {eng: 'Spider',
        ukr: 'Павук'},
        {eng: 'Costumes',
        ukr: 'Костюми'},
        {eng: 'Mummy',
        ukr: 'Мумія'},
        {eng: 'Clown',
        ukr: 'Клоун'},
        {eng: 'Candies',
        ukr: 'Цукерки'},
        {eng: 'Web',
        ukr: 'Павутина'},
        {eng: 'Broom',
        ukr: 'Мітла'},
        {eng: 'Cauldron',
        ukr: 'Котел'},
        {eng: 'Trick',
        ukr: 'Жарт, розіграш'},
        {eng: 'Haunted house',
        ukr: 'Будинок з привидами'},
        {eng: 'Scarecrow',
        ukr: 'Опудало'},
        {eng: 'Owl',
        ukr: 'Сова'},
        {eng: 'Crow',
        ukr: 'Ворона'},
        {eng: 'Fairy',
        ukr: 'Фея'},
        {eng: 'Werewolf',
        ukr: 'Перевертень'},
        {eng: 'Wizard',
        ukr: 'Чаклун'},
        {eng: 'Scary',
        ukr: 'Жахливий, страшний, лякаючий'},
        {eng: 'Creepy',
        ukr: 'Страшний, моторошний'},
        {eng: 'Spooky',
        ukr: 'Моторошний'},
        {eng: 'Potions',
        ukr: 'Зілля'},
        {eng: 'Decorations',
        ukr: 'Прикраси, декорації'},
        {eng: 'To carve',
        ukr: 'Вирізати, різати'},
        {eng: 'Bonfire',
        ukr: 'Вогнище'},
        {eng: 'To dress up',
        ukr: 'Наряджатися, одягатися'},
        {eng: 'To watch scary movies',
        ukr: 'Дивитися страшні фільми'},
        {eng: 'To decorate',
        ukr: 'Прикрашати'},
        {eng: 'Full moon',
        ukr: 'Повний місяць'},
        {eng: 'Harvest',
        ukr: 'Врожай'},
        {eng: 'Candle',
        ukr: 'Свічка'},
        {eng: 'Celebrate',
        ukr: 'Святкувати'}
      ],
      lesson: 'about Halloween'};

      let counter = 0;

      const halloween = {
        topic: 'Halloween Tests',
        imgs: [
          'https://images.unsplash.com/photo-1499578124509-1611b77778c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
          'https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
          'https://images.unsplash.com/photo-1475738972911-5b44ce984c42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          'https://images.unsplash.com/photo-1632066656898-9b112ae9e12d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          'https://images.unsplash.com/photo-1610270066297-7b06341d2b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
          'https://images.unsplash.com/photo-1599744249320-3b57dad6c667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1982&q=80',
          'https://images.unsplash.com/photo-1573997308253-32730b8e2b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          'https://images.unsplash.com/photo-1524373050940-8f19e9b858a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          'https://images.unsplash.com/photo-1433888376991-1297486ba3f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          'https://images.unsplash.com/photo-1549619856-ac562a3ed1a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          'https://images.unsplash.com/photo-1509558567730-6c838437b06b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          'https://images.unsplash.com/photo-1659633882885-66a90a61bbb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          'https://images.unsplash.com/photo-1649257937465-aa003c3c817e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          'https://images.unsplash.com/photo-1571152013534-fdc8f268ce37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
          'https://images.unsplash.com/photo-1602373923082-2ed1ecf5dfa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          'https://images.unsplash.com/photo-1507032248589-d4fabcffff6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
          'https://images.unsplash.com/photo-1604225135394-0c0edd80f9ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1830&q=80',
          'https://images.unsplash.com/photo-1509163245925-f4255dea7727?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          'https://images.unsplash.com/photo-1663754832815-b5100b8a824a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1962&q=80',
          'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          'https://images.unsplash.com/photo-1607871549238-4147b39263f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1782&q=80',
          'https://images.unsplash.com/photo-1607871549203-64998de4f509?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1959&q=80',
          'https://www.kindpng.com/picc/m/190-1905320_vampire-clipart-halloween-vampire-clipart-hd-png-download.png',
          'https://image.winudf.com/v2/image/Y29tLmhkd2Nhci53YW5zaGVuZ3lsMTUwODIyX3NjcmVlbnNob3RzXzBfODVlZmU2NWM/screen-0.jpg?fakeurl=1&type=.webp',
          'https://img.freepik.com/free-vector/flat-design-halloween-bat-holding-bag_23-2148649044.jpg'
        ],
        answears: [
          'Full moon',
          'Harvest',
          'Bonfire',
          'Decorations',
          'Potions',
          'Wizard',
          'Werewolf',
          'Fairy',
          'Crow',
          'Owl',
          'Scarecrow',
          'Haunted house',
          'Cauldron',
          'Broom',
          'Web',
          'Candies',
          'Clown',
          'Costumes',
          'Spider',
          'Skeleton',
          'Pumpkin',
          'Witch',
          'Vampire',
          'Ghost',
          'Bat'
        ],
        question: 'What\'s on the picture?'
      };

      const variants1 = [
        'Full moon',
          'Harvest',
          'Bonfire',
          'Decorations',
          'Potions',
          'Wizard',
          'Werewolf',
          'Fairy',
          'Crow',
          'Owl',
          'Scarecrow',
          'Haunted house',
          'Cauldron',
          'Broom',
          'Web',
          'Candies',
          'Clown',
          'Costumes',
          'Spider',
          'Skeleton',
          'Pumpkin',
          'Witch',
          'Vampire',
          'Ghost',
          'Bat'
    ];

    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1574619151033-a9e1f81cae52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";


    return(
        <div className="halloween">
            <CardComponent words={wordsToLearn1}/>
            <CardWithPictures words={halloween} counter={counter=counter+1} variants={variants1}/>
            <TableGameComponent field={field_halloween} isHW={true}/>
        </div>
    );
}

export default HalloweenComponent;