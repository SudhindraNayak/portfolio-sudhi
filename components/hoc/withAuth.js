export default function(Component){
    return class withAuth extends React.Component{
        render(){
            return Component;
        }
    }
}