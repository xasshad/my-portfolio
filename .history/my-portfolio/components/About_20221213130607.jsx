import React from 'react'

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16 mx-2">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#5681a6]">
              About Me
            </p>
            <h2 className="py-4">Oh my god, who is she?!</h2>

            <p className="py-2 text-gray-400 italic font-light">*:･ﾟ✧*:･ﾟ I'm a rookie who wants to rise to the top  *:･ﾟ✧*:･ﾟ</p>

            <p className="py-2 text-gray-600">
              I started my tech journey when I saw 12 years old (no joke!) on Tumblr.
              I played around with a lot of HTML and CSS styling as a teenager for my
              personal blog and decided to learn more about web development on my own. 
              In 2019, I learned HTML, CSS, Javascript, and Git fundamentals online from resources 
              like <i className="italic">The Odin Project</i> and <i className="italic">Udemy</it>.
              Throughout COVID-19 lockdowns, I would study these fundamentals while working
              part-time Retail, Hospitality, and Customer Service positions.
            </p>

            <p className="py-2 text-gray-600">
              After receiving my Residency Visa this January, I enrolled with <b>Whitecliffe College of Art and Design</b> for
              their Level 5 Web Development and Design
            </p>
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}

export default About