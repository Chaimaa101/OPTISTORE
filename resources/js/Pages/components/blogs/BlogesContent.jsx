const BlogesContent = () => {
  const blogItems = [
    {
      id: "1",
      href: "https://blog.lenskart.com/from-nerdy-to-rizzy-eyewear-styles-the-gen-z-is-loving-087751f461dc",
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*tfJuTKT1WGMSPtGf-0GOxg.jpeg",
      title: "From Nerdy to Rizzy: Eyewear Styles the Gen Z is Loving!",
      description:
        "Gen Z isn’t just setting trends; they’re rewriting the rules of fashion entirely. This generation thrives on individuality, bold choices, and a heavy dose of nostalgia, even when it comes to eyewear. From the revival of Y2K aesthetics to technicolor dreams, eyewear is no longer just functional; it’s a statement of personality and style.",
      writer: "Samidha Bhatnagar",
      date: "Jan 22, 2025",
    },
    {
      id: "2",
      href: "https://blog.lenskart.com/lenskarts-take-on-luxury-exploring-premium-eyewear-brands-29fe22a3d7e3",
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*u2LOAmVSn-hX42wcPxhzPQ.jpeg",
      title: "Lenskart’s Take on Luxury: Exploring Premium Eyewear Brands",
      description:
        "The world of eyewear has transcended beyond functionality to become a symbol of style, identity, and luxury. In this journey, Lenskart has emerged as a pioneer in bringing luxury eyewear brands to the forefront. Among its offerings are three standout brands: John Jacobs, OWNDAYS, and Le Petit Lunetier. Each of these brands is a unique amalgamation of design, craftsmanship, and innovation.",
      writer: "Samidha Bhatnagar",
      date: "Jan 26, 2025",
    },
    {
      id: "3",
      href: "https://blog.lenskart.com/eye-testing-made-easy-with-lenskart-039b3e21a67b",
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*oovWY34_HoVaT8asPHBy6Q.jpeg",
      title: "Eye Testing Made Easy with Lenskart",
      description:
        "With prolonged exposure to screens, we’re all the more prone to deteriorating eyesight. But how many of us get our eyes checked regularly? Blurriness, itchiness, headaches, and watery eyes, are signs that you need an eye test. Not only will it help maintain your eye health, but also detect and prevent vision problems early on.",
      writer: "Samidha Bhatnagar",
      date: "Sep 20, 2024",
    },
    {
      id: "4",
      href: "https://blog.lenskart.com/eyewear-trends-to-watch-out-for-in-2025-5b560d8a11f7",
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*JyXXHehNj8J_dnlcr26PSw.jpeg",
      title: "Eyewear Trends to Watch Out for in 2025",
      description:
        "Fashion is always evolving, and eyewear is no exception! As we step into 2025, eyewear trends are bolder, sleeker, and more exciting than ever. Think iconic shapes with a modern twist, daring designs that redefine elegance, and frames that make your personality shine. Whether you’re a fan of vintage classics or cutting-edge silhouettes, this year’s eyewear trends have something for everyone. Ready to elevate your style game?",
      writer: "Samidha Bhatnagar",
      date: "Jan 15, 2025",
    },
    {
      id: "5",
      href: "https://blog.lenskart.com/ace-corpcore-with-lenskart-e329a4851d9f",
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*JMdjatdGy7SCrkt9Nh9k-w.jpeg",
      title: "Ace Corpcore with Lenskart",
      description:
        "Now that workwear is no longer basic and boring, Corpcore has emerged as the new “9 to 5” dress code. A fashionable yet casual take on executive dressing, it blends minimalism with utilitarian elegance, ideal for the modern professional. We’re talking chic, sleek silhouettes, versatile enough for both work and play. So let’s get down to business and explore elevated eye-ssentials for your workday wardrobe.",
      writer: "Samidha Bhatnagar",
      date: "Jan 31, 2025",
    },
    {
      id: "6",
      href: "https://blog.lenskart.com/frames-that-can-handle-lifes-twists-turns-flex-360-08dffda55337?source=collection_home---4------4-----------------------",
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*r5ijGg7c-ztyYBDLhKiMSw.jpeg",
      title: "Frames that Can Handle Life’s Twists & Turns: Flex 360°",
      description:
        "Eyewear tech has come a long way, and Lenskart Air’s Flex 360° is proof — super bendable eyewear that keeps up with every move. The perfect combination of style, comfort, and durability, these frames have taken flexibility to a whole new level. They can twist, bend, and bounce back into shape without cracking or breaking into pieces. So let’s explore why this one’s a must-have!",
      writer: "Samidha Bhatnagar",
      date: "Dec 26, 2024",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 text-gray-900">
      <h1 className="text-4xl uppercase font-bold italic text-center text-stick my-12">
        Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
        {blogItems.map((item) => (
          <a
            href={item?.href}
            target="blank"
            key={item.id}
            className="block h-full"
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
              <div className="w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
              <div className="px-4 py-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p
                  className="flex-grow"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.description}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-600 text-white text-xl font-bold">
                    <p>{item.writer.charAt(0)}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.writer}</p>
                    <small className="text-xs font-medium text-gray-500">
                      {item.date}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogesContent;
