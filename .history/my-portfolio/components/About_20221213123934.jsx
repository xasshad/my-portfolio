import React from 'react'

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-2">
            <p>About Me</p>
            <h2>Oh my god, who is she?!</h2>
            <p>*:･ﾟ✧*:･ﾟ I'm a rookie who wants to rise to the top  *:･ﾟ✧*:･ﾟ</p>

            <p>
              I started my tech journey when I saw 12 years old (no joke!) on Tumblr.
              I played around with a lot of HTML and CSS styling as a teenager for my
              personal blog and decided to learn more about web development on my own. 
              In 2019, I learned HTML, CSS, and Git fundamentals online from resources 
              like <it className="italic">The Odin Project</it> and <it className="italic">Udemy</it>.
            </p>
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}

export default About