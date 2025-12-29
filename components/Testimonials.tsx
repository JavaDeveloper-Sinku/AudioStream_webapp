"use client";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    image: "/clients/john.jpg",
    feedback:
      "WebDev delivered amazing results. The website exceeded our expectations and the team was extremely professional.",
  },
  {
    name: "Jane Smith",
    role: "Marketing Head, BizSolutions",
    image: "/clients/jane.jpg",
    feedback:
      "The mobile app developed by WebDev helped us reach our audience effectively. Highly recommended!",
  },
  {
    name: "Michael Lee",
    role: "Founder, StartUpHub",
    image: "/clients/michael.jpg",
    feedback:
      "SEO optimization services boosted our traffic by 120% in just 3 months. Fantastic work!",
  },
];

const HomeTestimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-600 mb-12">
          Hear from our happy clients who trusted our services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{testimonial.name}</h3>
              <p className="text-gray-400 mb-4">{testimonial.role}</p>
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
