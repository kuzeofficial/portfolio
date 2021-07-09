import Container from '@/components/Container'
import Card from '@/components/Card'


function Portfolio() {
    return (
        <Container>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <div>
                        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-black dark:text-white text-center mt-12 mb-0">Last Projects</h1>
                        <div class="flex flex-wrap overflow-hidden">
                            <div class="w-1/2 overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                                <Card image="/images/ui_food_delivery_app.jpg" title="Hello" description="My name is Cristian"/>
                            </div>
                            <div class="w-1/2 overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                                <Card image="/images/ui_food_delivery_app.jpg" title="Hello" description="My Name is Cristian"/>
                            </div>
                        </div>
                    </div>
            </div>
        </Container>
    )
}

export default Portfolio
