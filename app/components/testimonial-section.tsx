export default function TestimonialSection() {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Junhao is an exceptional software engineer with great attention to detail.",
      image: "/john-doe.jpg",
    },
    {
      name: "Jane Smith",
      feedback: "Working with Junhao has been a pleasure. His skills are top-notch!",
      image: "/jane-smith.jpg",
    },
    {
      name: "Alice Brown",
      feedback: "Junhao's portfolio is impressive and inspiring!",
      image: "/alice-brown.jpg",
    },
  ]

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4 border rounded shadow-sm flex flex-col items-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-2"
            />
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-neutral-600 text-center">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
