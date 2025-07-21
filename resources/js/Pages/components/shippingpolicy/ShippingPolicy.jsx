const ShippingPolicy = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-16 text-gray-900">
        <h1 className="text-4xl uppercase font-bold italic text-center text-black my-12">
          Shipping Policy
        </h1>
        <div>
          <h3 className="font-semibold text-2xl text-black mb-6">
            Shipping Policy
          </h3>
          <p className="text-lg font-medium tracking-wide mb-4">
            At{" "}
            <span className="uppercase font-bold text-xl text-black underline">
              Optistore
            </span>
            , we aim to deliver your orders quickly and reliably. Once
            you&apos;ve placed your order, our team will contact you to confirm
            your details and delivery address. Orders confirmed before 2:00 PM
            are shipped the same day, ensuring speedy delivery. Your package
            will typically arrive within 24 to 48 hours, depending on your
            location.
          </p>
          <p className="text-lg font-medium tracking-wide mb-4">
            We’re pleased to offer free shipping on all orders, making your
            shopping experience even more enjoyable and stress-free. Our
            priority is to ensure your items reach you safely and on time.
          </p>
          <div>
            <p className="text-lg font-medium tracking-wide mb-4">
              {" "}
              For any questions or concerns about shipping, feel free to get in
              touch with us:
            </p>
            <ul className="list-disc pl-8 space-y-4 mb-4">
              <li className="text-lg font-medium tracking-wide">
                <span className="font-semibold text-lg">Phone:</span>{" "}
                +212600334609
              </li>
              <li className="text-lg font-medium tracking-wide">
                <span className="font-semibold text-lg">Email:</span>{" "}
                contact@optistore.com
              </li>
            </ul>
            <p className="text-lg font-medium tracking-wide mb-4">
              Our team is always here to assist you with any inquiries.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingPolicy;
