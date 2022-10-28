import CardComponent from "./CardComponent";
import CardWithPictures from "./CardWithPictures";

function HalloweenComponent(){
    const wordsToLearn1 = {
        words: [
        {eng: 'Screw',
        ukr: 'Шуруп'},
        {eng: 'Metal scrap',
        ukr: 'Металолом'},
        {eng: 'Bolt',
        ukr: 'Болт'},
        {eng: 'Obsolete',
        ukr: 'Застарілий'},
        {eng: 'Go nuts',
        ukr: 'З\'їхати з глузду'},
        {eng: 'Nutty',
        ukr: 'Божевільний'},
        {eng: 'Shell',
        ukr: 'Ракушка, оболонка'},
        {eng: 'Shelter',
        ukr: 'Прихисток, сховище'},
        {eng: 'Womanizer',
        ukr: 'Бабій'},
        {eng: 'Dupe',
        ukr: 'Простофиля'},
        {eng: 'Dude',
        ukr: 'Піжон'},
        {eng: 'Vomit',
        ukr: 'Нудити, рвати'},
        {eng: 'Nausea',
        ukr: 'Нудота'},
        {eng: 'Decent',
        ukr: 'Пристойний, порядний'},
        {eng: 'Sorrow',
        ukr: 'Горе, печаль'},
        {eng: 'Resort',
        ukr: 'Курорт'},
        {eng: 'Screw-driver',
        ukr: 'Викрутка'}
      ],
      lesson: 'about Halloween'};

      let counter = 0;

      const halloween = {
        topic: 'Halloween Tests',
        imgs: [
          'https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          'https://images.unsplash.com/photo-1604149370100-2cf3be3bc845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          'https://images.unsplash.com/photo-1481819434877-23b892ca68ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          'https://images.unsplash.com/photo-1614770596508-de1d826c3765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
  
        ],
        answears: [
          'Pumpkin',
          'Web',
          'Moon',
          'Black cat'
        ],
        question: 'What\'s on the picture?'
      };

      const variants1 = [
        'Witch', 
        'Bat', 
        'Pumpkin', 
        'Moon',
        'Black cat',
        'Web',
        'Spider',
        'Ghost'
    ];

    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1574619151033-a9e1f81cae52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";


    return(
        <div className="halloween">
            <CardComponent words={wordsToLearn1}/>
            <CardWithPictures words={halloween} counter={counter=counter+1} variants={variants1}/>
        </div>
    );
}

export default HalloweenComponent;