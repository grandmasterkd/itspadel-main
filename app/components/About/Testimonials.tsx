import aboutData from '../../../languages/padelabout.json'

const Testimonials = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bison text-4xl md:text-5xl mb-4">What Our Community Says</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutData.testimonials.map((testimonial: {quote: string, author: string}, index: number) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="font-inter text-base text-gray-700 mb-4 italic">
                {testimonial.quote}
              </p>
              <p className="font-bison text-base text-[#009FF3]">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials