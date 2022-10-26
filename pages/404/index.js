import { useRouter } from "next/router"
import Button from "../../components/Button";
function otherid(props){
   const router = useRouter()
   function backhome(){
   router.push('/')

   }

    return (<>

    <div className="flex justify-center flex-col items-center  py-32 space-y-10">
        <p className="text-8xl text-darkgenoa font-bold"> Page not found !!!</p>
        <Button text={'< Go Back to Home Page '} style={'bg-genoa px-8 py-3 text-white'} onclick={backhome} />
    </div>
    </>);
}
export default otherid