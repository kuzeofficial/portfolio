import Figma from '@/components/Icon/Figma'
import Photoshop from '@/components/Icon/Photoshop'
import Reactjs from '@/components/Icon/Reactjs'
import Css3 from '@/components/Icon/Css3'
import GitHub from '@/components/Icon/GitHub'

const Skills = () => {
	return (
		// TODO: Implementar los iconos reales de las skills
		<div className="w-auto mt-8 md:mb-20 lg:mb-3 2xl:mb-0">
			<ul className="flex flex-wrap my-2 ml-[-5px] items-center">
				<li>
					<Figma  className="md:h-10 sm:w-auto lg:h-auto lg:w-auto"/>
				</li>
				<li>
					<Photoshop />
				</li>
				<li>
					<Reactjs />
				</li>
				<li>
					<Css3 />
				</li>
                <li>
					<GitHub />
				</li>
			</ul>
		</div>
	)
}

export default Skills
