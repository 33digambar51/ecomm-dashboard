import{useHistory} from 'react-router-dom';
import{useEffect} from 'react';

function Protected(props){
    let Compo = props.cmp;

    //Check Localstorage, and then Redirect page
    const history = useHistory();
    useEffect(()=>{
        if(!localStorage.getItem("user-info"))
        {
            history.push("./register");
        }
    },[])

    return(
        <div>
            <Compo/>
        </div>
    );
}
export default Protected;