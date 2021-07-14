import Mail from "@/components/Icon/Mail"

const FloatingButton = () => {
    return (
		<a
			href="mailto:cristian03022680483@gmail.com"
			className="w-[50px] h-[50px] shadow-xl flex-center fixed left-5 md:left-10 bottom-5 md:bottom-8  z-20 bg-white p-2 rounded-full bg-gray-200 dark:bg-gray-800">
			<Mail />
		</a>
    )
}

export default FloatingButton
