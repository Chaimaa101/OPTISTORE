const Collaboration = () => {
  return (
    <>
      <h1 className="text-4xl uppercase font-bold italic text-center my-12">
        featured collaboration
      </h1>
      <div className="container px-4 mx-auto my-10 text-stick flex justify-center items-center gap-5 flex-wrap">
        {[
          { image: "../../public/colaboration/calvin-klein-logo.png" },
          { image: "../../public/colaboration/hm-logo-black-and-white.png" },
          {
            image: "../../public/colaboration/moma-3-logo-black-and-white.png",
          },
          {
            image:
              "../../public/colaboration/new-york-red-bulls-logo-black-and-white.png",
          },
          {
            image:
              "../../public/colaboration/paul-smith-logo-black-and-white.png",
          },
          {
            image:
              "../../public/colaboration/manchester-united-logo-black-and-white.png",
          },
          {
            image:
              "../../public/colaboration/ugg-australia-logo-black-and-white.png",
          },
        ].map((item, index) => (
          <div key={index}>
            <img
              className="max-w-36"
              src={item.image}
              alt={`Logo ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Collaboration;
