function Profile({profile_name,profession,url}){
    return (
        <>
        <div className=" max-w-fit shadow-shadows">
            <img src={url} />
            <div className="bg-gradient-to-r from-indigo-300 to-indigo-100 p-3">
            <h1 className="text-base font-bold text-darkgenoa">{profile_name}</h1>
            <h2 className="text-base text-darkgenoa">{profession}</h2>
            </div>
        </div>
        </>
    );
}
export default Profile