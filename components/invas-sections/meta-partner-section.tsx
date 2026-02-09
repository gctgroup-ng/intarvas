
export function MetaPartnerSection() {
  return (
    <section className="bg-blue-700 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Meta Business Partner
            </h2>
            <p className="text-blue-50 mb-4 text-base md:text-lg leading-relaxed">
              Invas a cutting-edge platform that leverages the full power of Meta Business APIs to deliver smarter marketing automation and richer customer engagement. By integrating deeply with Meta's advanced tools and technologies, Invas enables businesses to connect seamlessly with their audiences through WhatsApp and the Meta ecosystem.
            </p>
            <p className="text-blue-50 mb-8 text-base">
              As a trusted Meta Partner, we deliver robust, scalable solutions that help businesses grow faster and thrive in today's digital world.
            </p>
            {/* <Link href="/partner">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                Meta Business Partners
              </Button>
            </Link> */}
          </div>

          {/* Right - Meta Logo/Badge */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl w-full max-w-lg flex flex-col items-center justify-center text-center">
              <img
                src="/meta-logo.png"
                alt="Meta Business Partner"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
