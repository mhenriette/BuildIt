function Contact(){
    return (

        <>
        <div className="flex  justify-between mx-auto container py-32 my-20 md:px-32">
            <div className="flex flex-col space-y-10">
                <div >
                    <h3 className='text-genoa text-base font-medium'>Contact</h3>
                    <p className='text-4xl font-bold text-darkgenoa'>Get In Touch</p>
                </div>
                {/* contacts */}
                <div className="flex flex-col">
                <div className="flex items-center space-5 text-genoa space-x-5">
                
                        <div className="max-w-fit bg-lightindigo p-2 rounded-md"><img src="/call.svg" /></div>
                  
                    <div className="flex flex-col space-y-1">
                        <h3>Tel</h3>
                        <h1>708-790-0000</h1>
                    </div>

                </div>
                <div className="flex items-center space-x-5 text-genoa">
                 
                        <div className="max-w-fit bg-lightindigo p-2 rounded-md"><img src="/mail.svg"/></div>
                   
                    <div className="flex flex-col space-y-1">
                        <h3>Tel</h3>
                        <h1>708-790-0000</h1>
                    </div>

                </div>
                <div className="flex items-center space-x-5 text-genoa">
                  
                        <div className="max-w-fit bg-lightindigo p-2 rounded-md"><img src="/mail.svg"/></div>
              
                    <div className="flex flex-col space-y-1">
                        <h3>Tel</h3>
                        <h1>708-790-0000</h1>
                    </div>

                </div>
             </div>
            </div>
            {/* form */}
            <div className="bg-lightindigo rounded-sm h-72 w-1/2 box-border py-10 px-5 flex flex-col ">
                <div className="flex flex-row space-x-3">
                <div className="flex flex-col space-y-1">
                <label className="text-darkgenoa">name</label>
                <input placeholder="name" className="border rounded-sm  border-darkgenoa py-1 px-3" type='text'></input>
                </div>
                <div className="flex flex-col space-y-1">
                <label className="text-darkgenoa">Email</label>
                <input  className="border rounded-sm  border-darkgenoa py-1 px-3" type='text'></input>
                </div>
                </div>
                
                <div  className="flex flex-col space-y-1">
                <label className="text-darkgenoa">Subject</label>
                <input  className="border rounded-sm  border-darkgenoa py-1 px-3" type='text'></input>
                </div>
                <div className="flex flex-col space-y-1">
                <label className="text-darkgenoa">Message</label>
                <textarea className="border rounded-sm  border-darkgenoa py-1 px-3" type='text'></textarea>
                </div>
            </div>
        </div>
        </>
    );
}
export default Contact