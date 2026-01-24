"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen pb-20">
      <div className="container mx-auto px-4 md:px-8 space-y-16">

        {/* Header Section */}
        <section className="text-center space-y-4 pt-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Lucksan Design Studio
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            "A place to craft your future landmarks."
          </p>
        </section>

        {/* Introduction Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Who We Are
            </h2>
            <p className="text-white leading-relaxed">
              Lucksan Design Studio is a multi-disciplinary design studio specializing in architectural planning,
              consultancy, and technical drawings. Located in Kondavil, we believe that every great structure
              begins with a precise plan.
            </p>
            <p className="text-white leading-relaxed mt-4">
              Our mission is simple: to provide a professional place to craft your future landmarks with accuracy, 
              innovation, and local expertise.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/hero/hero3.jpg"
              alt="Studio Design"
              width={500}
              height={350}
              className="rounded-xl shadow-lg object-cover"
              priority
            />
          </div>
        </section>

        {/* Core Services */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[radial-gradient(_#a8f0b0_0%,_#22c55e_100%)] rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-white">Architectural Planning</h3>
              <p className="text-white">
                Approval drawings and 3D design visualizations to bring your projects to life.
              </p>
            </div>
            <div className="bg-[radial-gradient(_#a8f0b0_0%,_#22c55e_100%)] rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-white">Technical Services</h3>
              <p className="text-white">
                Survey plans, Building Estimates (BOQ), and consultancy to ensure precision and compliance.
              </p>
            </div>
            <div className="bg-[radial-gradient(_#a8f0b0_0%,_#22c55e_100%)] rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-white">Specialized Printing</h3>
              <p className="text-white">
                Professional A1 & A2 scale printing for your architectural projects.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-[radial-gradient(_#a8f0b0_0%,_#22c55e_100%)] rounded-xl p-8 md:p-16 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Why Choose Us?</h2>
          <p className="text-white max-w-3xl mx-auto leading-relaxed">
            Precision, innovation, and local expertise define us. Our logo's "ruler" and "compass" symbolize 
            accuracy and direction, guiding every project from concept to reality. As a forward-thinking firm 
            in Kondavil, we are committed to creating structures that stand the test of time.
          </p>
        </section>

        {/* Process / Gallery */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            How We Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[radial-gradient(_#a8f0b0_0%,_#22c55e_100%)] rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-white">Survey & Planning</h3>
              <p className="text-white">We start with precise survey plans to understand your site and requirements.</p>
            </div>
            <div className="bg-[radial-gradient(_#a8f0b0_0%,_#22c55e_100%)] rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-white">3D Modeling & Design</h3>
              <p className="text-white">Transform ideas into detailed 3D visualizations for approvals and planning.</p>
            </div>
            <div className="bg-[radial-gradient(_#a8f0b0_0%,_#22c55e_100%)] rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-white">Consultancy & BOQs</h3>
              <p className="text-white">Provide building consultancy, precise BOQs, and execution guidance.</p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-[radial-gradient(_#a8f0b0_0%,_#22c55e_100%)] rounded-xl p-8 md:p-16 text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Get in Touch</h2>
          <p className="text-white">
            Address: NO. 7/3, Kaladdy Lane, Kondavil West, Kondavil
          </p>
          <p className="text-white">Phone: 077 506 8901</p>
          <p className="text-white">Email: lucksandesignstudio@gmail.com</p>
        </section>

      </div>
    </main>
  );
}
