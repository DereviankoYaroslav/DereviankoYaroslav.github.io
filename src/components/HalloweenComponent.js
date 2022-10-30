import CardComponent from "./CardComponent";
import CardWithPictures from "./CardWithPictures";
import TableGameComponent from "./TableGameComponent";

function HalloweenComponent(){
    const wordsToLearn1 = {
        words: [
        {eng: 'Pumpkin',
        ukr: 'Гарбуз'},
        {eng: 'Web',
        ukr: 'Павутина'},
        {eng: 'Moon',
        ukr: 'Місяць'},
        {eng: 'Black cat',
        ukr: 'Чорний кіт'}
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
            <TableGameComponent />
        </div>
    );
}

export default HalloweenComponent;