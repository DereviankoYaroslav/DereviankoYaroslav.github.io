import TableGameComponent from "./TableGameComponent";
import field_sonic from '../images/field_sonic.jpg';
import field_appearance from '../images/field_appearance.png'

function TableGames(){

    let counter = 0;

    return(
        <div>
            <TableGameComponent field={field_sonic} counter={counter=counter+1} topic={'Sonic'}/>
            <TableGameComponent field={field_appearance} counter={counter=counter+1} topic={'Appearance'}/>
        </div>
    );
}

export default TableGames;