import New from "../components/New";
import Popular from "../components/Popular";

function Check (Component){
    return function(props){
        if(props.views < 100){
            return <New>
                     <Component {...props}/>
                   </New>
        }

        if(props.views >= 1000){
            return <Popular>
                     <Component {...props}/>
                   </Popular>
        }
        
        return <Component {...props}/>        
    }
}

export default Check;