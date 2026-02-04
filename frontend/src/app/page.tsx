import Image from "next/image";
import Link from "next/link";
import {
  getHomepage,
  getServices,
  getFeatures,
  getStrapiMedia,
  Homepage,
  Service,
  Feature,
} from "@/lib/strapi";


// Fallback data matching welovepets.care
const fallbackHomepage: Homepage = {
  heroTitle: "UK's #1 Pet Sitting & Dog Walking Company",
  heroSubtitle: "Nationally known, locally owned",
  heroButtonText: "Find your local branch",
  heroButtonLink: "/branches",
  servicesTitle: "Pet care services for every type of animal",
  servicesSubtitle: "We care for every type of animal, however big or small!",
  whyChooseUsTitle: "Why choose We Love Pets?",
  mediaTitle: "We Love Pets | BBC",
  mediaSubtitle: "'Experts on dog walking'",
  mediaDescription: "We Love Pets was invited to BBC Breakfast as expert speakers on how to walk dogs correctly. Managing Director and dog behaviourist Ryan went along with his dog Red to demonstrate…",
};

const fallbackServices: Service[] = [
  {
    id: 1,
    documentId: "1",
    title: "Dog Walking",
    slug: "dog-walking",
    shortDescription: "Our Dog Walking service runs throughout the day, every day. Your dog will be walked in a safe open space and will return home, happy and tired. We also provide fresh water, treats and will towel your dog off in wet weather",
    order: 1,
    buttonText: "Book Now",
  },
  {
    id: 2,
    documentId: "2",
    title: "Pop-in Visits",
    slug: "pop-in-visits",
    shortDescription: "Pop-in visits are a great option for those times when your pet just needs a little extra care during the day. We can stop by to provide fresh food and water, a quick walk or play session, and plenty of fuss and attention.",
    order: 2,
    buttonText: "Book Now",
  },
  {
    id: 3,
    documentId: "3",
    title: "Pet Sitting",
    slug: "pet-sitting",
    shortDescription: "Pet sitting is ideal for when you're away and want your furry friends to stay in the comfort of their own home. We can tailor visits to your needs providing fresh food and water, playtime, and cuddles, while ensuring your home remains secure.",
    order: 3,
    buttonText: "Book Now",
  },
  {
    id: 4,
    documentId: "4",
    title: "Dog Sitting",
    slug: "dog-sitting",
    shortDescription: "Our dog sitters provide company and toilet breaks for your dog when you're unable to pop home and let them out. Ideal if you work long shifts or if your dog needs medication, frequent feeding or regular trips to the garden.",
    order: 4,
    buttonText: "Book Now",
  },
  {
    id: 5,
    documentId: "5",
    title: "Dog Boarding",
    slug: "dog-boarding",
    shortDescription: "Our home-from-home dog boarding service is a great alternative to traditional dog boarding kennels. Ideal for when you go on holiday and want your dog to be thoroughly pampered and looked after while you are away.",
    order: 5,
    buttonText: "Book Now",
  },
  {
    id: 6,
    documentId: "6",
    title: "Cat Sitting",
    slug: "cat-sitting",
    shortDescription: "Cat sitting is perfect for when you are on holiday and want your cat to stay at home where they are comfortable. We can visit as often as you like to provide fresh water, food, make a fuss and check your house is safe and secure.",
    order: 6,
    buttonText: "Book Now",
  },
];

const fallbackFeatures: Feature[] = [
  {
    id: 1,
    documentId: "1",
    title: "We never pack walk",
    description: "We give your dog a physically demanding, stimulating and above all, safe dog walk which is why we walk no more than four dogs at a time as part of our promise to deliver the best pet care possible. Find out why pack walking is dangerous…",
    linkText: "Find out about no pack walking",
    linkUrl: "/about/no-pack-walking",
    order: 1,
  },
  {
    id: 2,
    documentId: "2",
    title: "We're a family business",
    description: "We Love Pets is owned by husband and wife Ryan and Jo who have always kept people and their pets at the heart of what they do. Both are animal mad and it looks like their two children are headed that way too…",
    linkText: "Read our story",
    linkUrl: "/about",
    order: 2,
  },
  {
    id: 3,
    documentId: "3",
    title: "We offer the dream job",
    description: "For many people, getting out from behind a desk to spend more time in the fresh air, work with animals, work flexible hours and be your own boss is a dream come true. Would you like to make your passion for pets a career?",
    linkText: "Discover your dream job",
    linkUrl: "/careers",
    order: 3,
  },
];

export default async function HomePage() {
  let homepage = fallbackHomepage;
  let services = fallbackServices;
  let features = fallbackFeatures;

  try {
    const [homepageRes, servicesRes, featuresRes] = await Promise.all([
      getHomepage().catch(() => null),
      getServices().catch(() => null),
      getFeatures().catch(() => null),
    ]);

    if (homepageRes?.data) homepage = homepageRes.data;
    if (servicesRes?.data?.length) services = servicesRes.data;
    if (featuresRes?.data?.length) features = featuresRes.data;
  } catch (error) {
    console.error("Failed to fetch homepage data:", error);
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#00857C] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-36 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {homepage.heroTitle}
          </h1>
          {homepage.heroSubtitle && (
            <p className="text-xl md:text-2xl mb-10 font-medium">
              <strong>{homepage.heroSubtitle}</strong>
            </p>
          )}
          {homepage.heroButtonText && (
            <Link
              href={homepage.heroButtonLink || "/branches"}
              className="inline-block bg-white text-[#00857C] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              {homepage.heroButtonText}
            </Link>
          )}
        </div>
        {/* Decorative curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L48 115C96 110 192 100 288 90C384 80 480 70 576 70C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {homepage.servicesTitle}
            </h2>
            {homepage.servicesSubtitle && (
              <p className="text-xl text-gray-600">{homepage.servicesSubtitle}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Media/Press Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#00857C] font-semibold text-sm uppercase tracking-wide mb-2">
                What the media says
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {homepage.mediaSubtitle}
              </h2>
              {homepage.mediaDescription && (
                <p className="text-gray-600 text-lg mb-8">
                  {homepage.mediaDescription}
                </p>
              )}
              
              {/* As featured on */}
              <div className="mt-8">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-4 font-semibold">As featured on</p>
                <div className="flex items-center gap-8 opacity-60">
                  <span className="text-2xl font-serif font-bold text-gray-800">Daily Mail</span>
                  <span className="text-2xl font-serif italic text-gray-800">The Telegraph</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-300 rounded-2xl aspect-video flex items-center justify-center overflow-hidden">
              {homepage.mediaVideoUrl ? (
                <iframe
                  src={homepage.mediaVideoUrl}
                  className="w-full h-full"
                  allowFullScreen
                />
              ) : (
                <div className="text-gray-500 text-center p-8">
                  <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="font-medium">BBC Breakfast Video</p>
                  <p className="text-sm mt-1">Add video URL in Strapi</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {homepage.whyChooseUsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#00857C] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need help? Need to find a branch near you?
          </h2>
          <div className="mt-8">
            <Link
              href="/branches"
              className="inline-flex items-center gap-3 bg-white text-[#00857C] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
            >
              <span className="text-2xl">🐾</span>
              Find a branch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const imageUrl = getStrapiMedia(service.image?.url);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
      {imageUrl ? (
        <div className="relative h-56">
          <Image
            src={imageUrl}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="h-56 bg-gradient-to-br from-[#00857C]/10 to-[#00857C]/20 flex items-center justify-center">
          <span className="text-[#00857C] text-7xl">🐕</span>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
        {service.shortDescription && (
          <p className="text-gray-600 mb-5 text-sm leading-relaxed line-clamp-4">{service.shortDescription}</p>
        )}
        <Link
          href={service.buttonLink || `/services/${service.slug}`}
          className="inline-block bg-[#00857C] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#006d66] transition-colors text-sm"
        >
          {service.buttonText || "Book Now"}
        </Link>
      </div>
    </div>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const imageUrl = getStrapiMedia(feature.image?.url);

  return (
    <div className="bg-[#00857C]/5 rounded-2xl p-8 hover:bg-[#00857C]/10 transition-colors">
      {imageUrl ? (
        <div className="relative h-40 mb-6 rounded-xl overflow-hidden">
          <Image src={imageUrl} alt={feature.title} fill className="object-cover" />
        </div>
      ) : (
        <div className="h-20 w-20 bg-[#00857C] rounded-full flex items-center justify-center mb-6">
          <span className="text-white text-3xl">✓</span>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
      {feature.description && (
        <p className="text-gray-600 mb-5 text-sm leading-relaxed">{feature.description}</p>
      )}
      {feature.linkText && feature.linkUrl && (
        <Link
          href={feature.linkUrl}
          className="text-[#00857C] font-semibold hover:underline inline-flex items-center gap-1"
        >
          {feature.linkText}
          <span>→</span>
        </Link>
      )}
    </div>
  );
}
