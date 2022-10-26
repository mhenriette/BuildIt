import { useRouter } from "next/dist/client/router"
import Button from "../../components/button";
function otherid(props){
    const router = useRouter()
    const link = router.query.otherid
    return (<>

    <div className="flex justify-center flex-col items-center  py-32 space-y-10">
        <p className="text-8xl text-darkgenoa font-bold">{link} Page not found !!!</p>
        <Button text={'< Go Back to Home Page '} style={'bg-genoa px-8 py-3 text-white'}/>
    </div>
    </>);
}
export default otherid