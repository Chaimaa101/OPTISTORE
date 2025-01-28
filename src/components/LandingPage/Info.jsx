const Info = () => {
  const info = [
    {id: 1, img:'../../public/featruers/morrocan_brand.avif', title:'100% MOROCCAN BRAND' , discption:'Founded in Morocco, Our Brand Embodies Moroccan Culture and Local Craftsmanship.'},
    {id: 2, img:'../../public/featruers/HIGH_QUALITY.avif', title:'HIGH QUALITY' , discption:'Protective Lenses and Frames All Our Sunglasses Comes With a High Quality Protection Lens.'},
    {id: 3, img:'../../public/featruers/CASH_on_delivery.avif', title:'CASH ON DELIVERY' , discption:'You Try Before You Pay.'},
    {id: 4, img:'../../public/featruers/try_on_delivery.avif', title:'TRY ON DELIVERY' , discption:'Free Shipping 24h/48h Shipping Time All Over Morocco.'},
  ];
  return (
    <div className="container px-4 mx-auto my-10 grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-x-5 gap-y-10 text-stick">
      {info.map((item)=> (
      <div key={item.id} className="flex flex-col flex-wrap items-center gap-2.5 text-center ">
        <img className="w-14" src={item.img} alt={item.id} />
        <h1 className="font-semibold text-lg">{item.title}</h1>
        <p className="capitalize text-base lg:text-lg">{item?.discption}</p>
      </div>
      ))}
    </div>
  );
};
export default Info;
