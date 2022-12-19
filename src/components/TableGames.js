import TableGameComponent from "./TableGameComponent";
import field_sonic from '../images/field_sonic.jpg';
import field_appearance from '../images/field_appearance.png';
import field_city from '../images/field_city.png';
import field_reading from '../images/field_reading.png';
import field_prepositions from '../images/field_prepositions.png';
import field_furniture from '../images/field_furniture.png';

function TableGames(){

    let counter = 0;

    return(
        <div>
            <TableGameComponent field={field_furniture} counter={counter = counter + 1} topic={'Furniture'} />
            <TableGameComponent field={field_prepositions} counter={counter = counter + 1} topic={'Prepositions'} />
            <TableGameComponent field={field_reading} counter={counter = counter + 1} topic={'Reading'} />
            <TableGameComponent field={field_city} counter={counter = counter + 1} topic={'City'} />
            <TableGameComponent field={field_appearance} counter={counter = counter + 1} topic={'Appearance'} />
            <TableGameComponent field={field_sonic} counter={counter=counter+1} topic={'Sonic'}/>
        </div>
    );
}

export default TableGames;