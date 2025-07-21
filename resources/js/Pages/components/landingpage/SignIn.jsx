const SignIn = () => {
  return (
    <div className="bg-black text-white w-full h-[40vh] flex justify-center items-center text-center px-4">
      <div className="flex flex-col gap-y-8 ">
        <h1 className="text-4xl uppercase font-bold italic text-center">
          Subscribe now
        </h1>
        <p>
          We deliver all the news that you want to hear. New products, events,
          and seriously fun stuff about optistore.
        </p>
        <form
          action=""
          className="flex justify-center items-stretch gap-2 min-w-[50%]  mx-auto py-2"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className=" bg-transparent flex-1 border-2 border-white  outline-none  p-2 placeholder:text-white font-bold placeholder:font-bold"
          />
          <input
            type="submit"
            value="SUBMIT"
            className="outline-none p-2 bg-white font-bold text-black h-full border-2 border-white hover:bg-transparent hover:text-white hover:border-2 hover:border-white active:scale-90"
          />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
