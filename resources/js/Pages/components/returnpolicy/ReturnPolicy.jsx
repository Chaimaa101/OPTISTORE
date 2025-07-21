const ReturnPolicy = () => {
  return (
    <>
      <div  className="container mx-auto px-4 py-16 text-gray-900">
        <h1 className="text-4xl uppercase font-bold italic text-center text-black my-12">
          Return Policy
        </h1>
        <div className="flex flex-col gap-y-5">
          <div>
            <p className="text-base font-medium tracking-wide mb-4">
              We value your satisfaction and are here to assist if your purchase
              doesn&apos;t meet your expectations. Please read our return policy
              carefully to ensure a smooth process.
            </p>
            <p className="text-base font-medium tracking-wide mb-4">
              You have 7 working days to return a product if it does not match
              its description or the photos displayed on our website. To
              initiate a return, please contact our customer service at
              <span className="font-bold text-lg"> 0600334609</span>.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-2xl text-black mb-4">
              Return Conditions
            </h2>
            <ul className="list-decimal ml-10">
              <li className="font-semibold text-lg text-black mb-2">
                Damaged During Delivery:
                <ul className="list-disc ml-10 mt-2">
                  <li className="text-base font-medium tracking-wide mb-1">
                    Contact our customer service within{" "}
                    <span>3 days of receipt</span> to file a claim.
                  </li>
                  <li className="text-base font-medium tracking-wide mb-1">
                    Ensure all product accessories are returned. Incomplete
                    returns will not be accepted.
                  </li>
                </ul>
              </li>
              <li className="font-semibold text-lg text-black mb-2">
                Valid Reasons for Returns:
                <ul className="list-disc ml-10 mt-2">
                  <li className="text-base font-medium tracking-wide mb-1">
                    Wrong product delivered
                  </li>
                  <li className="text-base font-medium tracking-wide mb-1">
                    Damaged or defective product
                  </li>
                  <li className="text-base font-medium tracking-wide mb-1">
                    Missing parts
                  </li>
                  <li className="text-base font-medium tracking-wide mb-1">
                    Incorrect product description on the website
                  </li>
                </ul>
              </li>
              <li className="font-semibold text-lg text-black mb-2">
                Packaging Requirements:
                <ul className="list-disc ml-10 mt-2">
                  <li className="text-base font-medium tracking-wide mb-1">
                    Products must be returned in their original packaging.
                  </li>
                  <li className="text-base font-medium tracking-wide mb-1">
                    Return shipping costs are your responsibility.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-2xl text-black mb-4">
              Return Conditions
            </h2>
            <ul className="list-disc ml-10">
              <li className="text-base font-medium tracking-wide mb-4">
                Upon receiving your return, our team will inspect the product
                within <span className="font-bold text-lg">48 hours</span>.
              </li>
              <li className="text-base font-medium tracking-wide mb-4">
                Refunds will only be processed if the return is validated.
              </li>
              <li className="text-base font-medium tracking-wide mb-4">
                If the return is not eligible for a refund or exchange, the
                product will be returned to you.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-2xl text-black mb-4">
              Important Notes
            </h2>
            <ul className="list-disc ml-10">
              <li className="text-base font-medium tracking-wide mb-4">
                Upon receiving your return, our team will inspect the product
                within <span>48 hours</span>. Include your{" "}
                <span className="font-bold text-lg ">order number</span> and a{" "}
                <span className="font-bold text-lg ">clear reason </span> for
                return on the package.
              </li>
              <li className="text-base font-medium tracking-wide mb-4">
                If the return is not validated, shipping costs will not be
                refunded.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-2xl text-black mb-4">
              Refund Timeline
            </h2>
            <p className="text-base font-medium tracking-wide mb-4">
              Once the return has been validated, your refund will be initiated
              automatically.
            </p>
            <p className="text-base font-medium tracking-wide mb-4">
              For any questions, feel free to contact our customer service team
              at <span className="font-bold text-lg">0600334609</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReturnPolicy;
