export default function Footer(){
    return(
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm: grid-cols-2 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p>Email: info@musicschool.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                    <p>The Vanguard Museum of Modern Art envisions itself as a dynamic cultural hub that fosters innovation and creativity, showcasing cutting-edge contemporary art while inspiring and engaging diverse audiences through immersive and educational experiences.</p>
                </div>
            </div>
            <p className="text-center text-xs pt-8">@2024 VanGuardMuseumbyAG. All rights reserved.</p>
        </footer>
    )
}