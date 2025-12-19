import eventsData from '../../../languages/padelevents.json'

const WhatMakesDifferent = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <div>
          <h2 className="font-bison text-4xl md:text-5xl mb-6">
            {eventsData.whatMakesDifferent.headline}
          </h2>
          <p className="font-inter text-base text-gray-700 max-w-4xl mx-auto">
            {eventsData.whatMakesDifferent.paragraph}
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhatMakesDifferent