import React from 'react'

const skills = [
    {name : 'HTML', icon : '🌐'},
    {name : 'CSS', icon : '🎨'},
    {name : 'jAVAsCRIPT', icon : '📜'},
    {name : 'React.js', icon : '⚛️'},
    {name : 'Node.js', icon : '🟢'},
    {name : 'mongoDB', icon : '🍃'},
    {name : 'Git & GitHub', icon : '🔧'},
    {name : 'TailwindCSS', icon : '💨'},
]
const Skills = () => {
  return (
    <>
    <section id="skills" className='py-20 px-6 bg-gray-100 text-gray-800'>
        <div className='max-w-5xl mx-auto text-center'>
            <h2 className='text-4xl font-bold mb-12 text-blue-600'>My Skills</h2>
            <div className='grid gris-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
                {skills.map((skill, index) => (
                    <div key={index}
                    className='bg-white rounded-xl p-6 shadow hover:shadow-lg transition duration-300' >
                        <div className='text-3xl mb-2'>{skill.icon}</div>
                        <h4 className='text-lg font-semibold'>{skill.name}</h4>
            </div>
                ))}
            </div>
        </div>

    </section>
    
    </>
  )
}

export default Skills;