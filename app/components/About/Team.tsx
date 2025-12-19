import aboutData from '../../../languages/padelabout.json'
import Image from 'next/image'

const Team = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bison text-4xl md:text-5xl mb-4">{aboutData.people.headline}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.team.map((member: {name: string, role: string, image: string}, index: number) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden h-[500px] relative w-full"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={500}
                className="w-full h-full object-cover aspect-auto grayscale"
              />
              <div className="w-full absolute bottom-0 left-0 z-10 p-6 h-44 bg-gradient-to-t from-[#009FF3] to-transparent">
                <h3 className="font-bison text-3xl mt-8 text-white">{member.name}</h3>
                <p className="font-inter text-white">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team