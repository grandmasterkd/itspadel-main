import Link from 'next/link'
import clubsData from '../../../languages/padelclubs.json'

const Regions = () => {
  const regions = Object.values(clubsData.regions)

  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bison text-4xl md:text-5xl mb-4">Find Your Club</h2>
        </div>

        <div>
          {regions.map((region: {name: string, clubs: {name: string, courts: string, link: string, status?: string}[]}, index: number) => (
            <div
              key={index}
              className="mb-16"
            >
              <h3 className="font-bison text-3xl mb-8 text-center">{region.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {region.clubs.map((club: {name: string, courts: string, link: string, status?: string}, clubIndex: number) => (
                  <div
                    key={clubIndex}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <h4 className="font-bison text-xl mb-2">{club.name}</h4>
                    <p className="font-inter text-gray-600 mb-4">{club.courts}</p>
                    {club.status && (
                      <p className="font-inter text-[#009FF3] font-medium mb-4">{club.status}</p>
                    )}
                    <Link
                      href={club.link}
                      className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
                    >
                      View Club
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Regions