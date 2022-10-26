import { useRouter } from "next/router";
import Button from "./Button";

function Call() {
    const router = useRouter()
    function call(){
        router.push('/Contact')
    }
  return (
    <>
      <div className="flex justify-between border-y-2 py-8 border-genoa my-20  container w-10/12 mx-auto">
        <div className="w-1/2"><p className="text-darkgenoa font-bold text-xl">Call us</p></div>
        {/* buttons */}
        <div className=" flex space-x-5 w-1/2 justify-end">
          <Button text={"Call"} style={" bg-genoa rounded-lg w-1/2 p-3 w-1/2 text-white"} onclick={call} />
          <Button text={"Email"} style={" bg-lightindigo rounded-lg p-2 w-3/4"} />
        </div>
      </div>
    </>
  );
}
export default Call