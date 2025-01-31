const AboutContent = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-gray-900">
      <h1 className="text-4xl uppercase font-bold italic text-center text-stick my-12">
        Who Are We
      </h1>
      <div className="flex flex-col gap-8">
        {/* Who Are We Section */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-2xl text-stick">Who Are We?</h3>
          <p className="text-lg font-medium tracking-wide">
            Welcome to{" "}
            <span className="uppercase font-bold text-xl text-stick underline">
              Optistore
            </span>
            , your ultimate destination for stylish and functional eyewear. We
            specialize in premium-quality sunglasses, eyeglasses, and
            accessories for men and women, catering to every lifestyle and
            personality.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-2xl text-stick">Our Mission</h3>
          <p className="text-lg font-medium tracking-wide">
            At{" "}
            <span className="uppercase font-bold text-xl text-stick underline">
              Optistore
            </span>
            , we believe eyewear is more than just a necessity—it’s a statement.
            Our mission is to offer high-quality, affordable designs that let
            you express yourself while keeping your eyes protected.
          </p>
        </div>

        {/* What We Offer Section */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-2xl text-stick">What We Offer</h3>
          <ul className="list-disc pl-8 space-y-4">
            <li className="text-lg font-medium tracking-wide">
              <span className="font-semibold text-lg">Sunglasses:</span>{" "}
              Discover a wide range of UV-protective, fashion-forward sunglasses
              designed for outdoor adventures and everyday wear.
            </li>
            <li className="text-lg font-medium tracking-wide">
              <span className="font-semibold text-lg">Eyeglasses:</span> From
              professional frames to trendy designs, our eyeglasses offer style
              and durability for clear vision all day long.
            </li>
            <li className="text-lg font-medium tracking-wide">
              <span className="font-semibold text-lg">Accessories:</span>{" "}
              Explore our selection of cases, cleaning kits, and more to keep
              your eyewear safe and stylish.
            </li>
          </ul>
        </div>

        {/* For Everyone Section */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-2xl text-stick ">
            For Everyone, Everywhere
          </h3>
          <p className="text-lg font-medium tracking-wide">
            Whether you&apos;re looking for minimalist frames, bold designs, or
            timeless classics, we have something to suit every face shape and
            personal taste. Our collection combines fashion and functionality,
            making it perfect for men, women, and anyone in between.
          </p>
        </div>

        {/* Our Promise Section */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-2xl text-stick">
            Our Promise to You
          </h3>
          <ul className="list-disc pl-8 space-y-4">
            <li className="text-lg font-medium tracking-wide">
              <span className="font-semibold text-lg">
                Quality You Can Trust:
              </span>
              Crafted with premium materials for durability and comfort.
            </li>
            <li className="text-lg font-medium tracking-wide">
              <span className="font-semibold text-lg">Affordable Prices:</span>
              Look amazing without breaking the bank.
            </li>
            <li className="text-lg font-medium tracking-wide">
              <span className="font-semibold text-lg">
                Exceptional Service:
              </span>
              Our team is dedicated to helping you find the perfect pair and
              ensuring your satisfaction every step of the way.
            </li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-2xl text-stick">Why Choose Us?</h2>
          <p className="text-lg font-medium tracking-wide">
            We are more than just a store.{" "}
            <span className="uppercase font-bold text-xl text-stick underline">
              Optistore
            </span>{" "}
            is about creating confidence, protecting your vision, and elevating
            your style.
          </p>
        </div>

        {/* Shop With Us Section */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-2xl text-stick">
            Shop With Us Today
          </h2>
          <p className="text-lg font-medium tracking-wide">
            Browse our collection and find your perfect fit. Whether you&apos;re
            hitting the beach, the office, or the city streets,{" "}
            <span className="uppercase font-bold text-xl text-stick underline">
              Optistore
            </span>{" "}
            has you covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
