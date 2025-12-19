import eventsData from '../../../languages/padelevents.json'

const Companies = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bison text-4xl md:text-5xl mb-4">Trusted by Leading Companies</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {eventsData.companies.map((company: string, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md text-center"
            >
              <p className="font-inter font-medium text-gray-700">{company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Companies