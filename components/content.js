function Content({title,subtitle,paragraph,styles}){
    return(
        <>
        <div className={`flex flex-col  ${styles}  `}>
            <h3 className="text-lightgenoa text-base font-medium">{title}</h3>
            <h1 className="text-darkgenoa text-4xl font-bold leading-relaxed ">{subtitle}</h1>
            <p className="text-darkgenoa text-base leading-8">{paragraph}</p>
        </div>
        </>
    );

}
export default Content