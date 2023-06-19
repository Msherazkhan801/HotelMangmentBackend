
export const errorHandler =(status,massage)=>{
    console.log(status)
const error= new Error();
error.status=status;
error.massage=massage;

}