import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-start">
            {/* Navbar */}
            <nav className="flex justify-evenly items-center w-full bg-blue-500 text-white p-4 text-center shadow-md">
                <div>
                    roxparkdavid@gmail.com
                </div>
                <div>
                    <h1 className="text-xl font-bold">Chevy Suburban 2019</h1>
                </div>
                <div>
                    720-425-2327
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center  w-full p-6">
                <div className="bg-gray-100 w-full max-w-4xl p-4 rounded-md shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        2019 Chevy Suburban ½ Ton Z71 Midnight Edition Luxury Package

                    </h2>
                    <div className="p-3">
                        <ul>
                            <li>32,300 MILES</li>
                            <li>ORIGINAL OWNER</li>
                            <li>New KO2s</li>
                            <li>New WeatherTech mats</li>
                            <li>2 TV screens, sunroof</li>
                            <li>Leather throughout</li>
                            <li>Heated, adjustable mid-row captain chairs</li>
                            <li>Too much to list, see window sticker!</li>
                            <li>$47,500.00</li>
                        </ul>
                        <br/><br/>
                        <div className="flex items-center justify-center">
                            <Image src="/images/frontLeft.png" width={628} height={467} alt="Front Left"
                                   style={{
                                       borderRadius: "20px",
                                       border: "none",
                                       boxShadow: "0 0 0 2px rgba(0,0,0,1)"
                                   }}/>
                        </div>
                        <br/>
                        <div className="flex items-center justify-center">
                            <Image src="/images/frontRight.png" width={500} height={500} alt="Front Right"
                                   style={{
                                       borderRadius: "20px",
                                       border: "none",
                                       boxShadow: "0 0 0 2px rgba(0,0,0,1)"
                                   }}/>
                        </div>
                        <br/>
                        <div className="flex items-center justify-center">
                            <Image src="/images/interior1.png" width={768} height={577} alt="Interior"
                                   style={{
                                       borderRadius: "20px",
                                       border: "none",
                                       boxShadow: "0 0 0 2px rgba(0,0,0,1)"
                                   }}/>
                        </div>
                        <br/>
                        <div className="flex items-center justify-center">
                            <Image src="/images/interior2.png" width={500} height={500} alt="Interior, side"
                                   style={{
                                       borderRadius: "20px",
                                       border: "none",
                                       boxShadow: "0 0 0 2px rgba(0,0,0,1)"
                                   }}/>
                        </div>
                        <br/>
                        <div className="flex items-center justify-center">
                            <Image src="/images/interior4.png" width={768} height={579} alt="Interior, rear"
                                   style={{
                                       borderRadius: "20px",
                                       border: "none",
                                       boxShadow: "0 0 0 2px rgba(0,0,0,1)"
                                   }}/>
                        </div>
                        <br/>
                        <div className="flex items-center justify-center">
                            <Image src="/images/interior5.png" width={761} height={576} alt="Interior, rear view"
                                   style={{
                                       borderRadius: "20px",
                                       border: "none",
                                       boxShadow: "0 0 0 2px rgba(0,0,0,1)"
                                   }}/>
                        </div>
                        <br/>
                        <div className="flex items-center justify-center">
                            <Image src="/images/interior3.png" width={767} height={576} alt="Interior, side2"
                                   style={{
                                       borderRadius: "20px",
                                       border: "none",
                                       boxShadow: "0 0 0 2px rgba(0,0,0,1)"
                                   }}/>
                        </div>
                        <br/>
                        <div className="flex items-center justify-center">
                            <Image src="/images/rearLeft.png" width={500} height={500} alt="Rear Left"
                                   style={{
                                       borderRadius: "20px",
                                       border: "none",
                                       boxShadow: "0 0 0 2px rgba(0,0,0,1)"
                                   }}/>
                        </div>
                        <br/>
                        <div className="flex items-center justify-center">
                            <Image src="/images/rearRight.png" width={636} height={474} alt="Rear Right"
                                   style={{
                                       borderRadius: "20px",
                                       border: "none",
                                       boxShadow: "0 0 0 2px rgba(0,0,0,1)"
                                   }}/>
                        </div>
                        <br/>
                        <div className="flex items-center justify-center">
                            <Image src="/images/rearTailgateInterior.png" width={743} height={578}
                                   alt="Rear Tailgate Interior"
                                   style={{
                                       borderRadius: "20px",
                                       border: "none",
                                       boxShadow: "0 0 0 2px rgba(0,0,0,1)"
                                   }}/>
                        </div>
                        <br/>
                        <div className="flex items-center justify-center">
                            <Image src="/images/tire1.png" width={500} height={500} alt="Tires"
                                   style={{
                                       borderRadius: "20px",
                                       border: "none",
                                       boxShadow: "0 0 0 2px rgba(0,0,0,1)"
                                   }}/>
                        </div>
                        <br/>
                        <div className="flex items-center justify-center">
                            <Image src="/images/mileage.png" width={500} height={500} alt="Mileage"
                                   style={{
                                       borderRadius: "20px",
                                       border: "none",
                                       boxShadow: "0 0 0 2px rgba(0,0,0,1)"
                                   }}/>
                        </div>
                        <br/>
                        <div className="flex items-center justify-center">
                            <Image src="/images/sticker01.png" width={859} height={463} alt="Sticker"
                                   style={{
                                       borderRadius: "20px",
                                       border: "none",
                                       boxShadow: "0 0 0 2px rgba(0,0,0,1)"
                                   }}/>
                        </div>
                        <br/>
                        <div className="flex items-center justify-center">
                            <Image src="/images/cf01.png" width={872} height={1132} alt="Car Fax 01"
                                   style={{
                                       borderRadius: "20px",
                                       border: "none",
                                       boxShadow: "0 0 0 2px rgba(0,0,0,1)"
                                   }}/>
                        </div>
                        <br/>
                        <div className="flex items-center justify-center">
                            <Image src="/images/cf02.png" width={872} height={1178} alt="Car Fax 02"
                                   style={{
                                       borderRadius: "20px",
                                       border: "none",
                                       boxShadow: "0 0 0 2px rgba(0,0,0,1)"
                                   }}/>
                        </div>
                        <br/>
                        <div className="flex items-center justify-center">
                            <Image src="/images/cf03.png" width={872} height={1178} alt="Car Fax 03"
                                   style={{
                                       borderRadius: "20px",
                                       border: "none",
                                       boxShadow: "0 0 0 2px rgba(0,0,0,1)"
                                   }}/>
                        </div>
                        <br/>
                        <div className="flex items-center justify-center">
                            <Image src="/images/cf04.png" width={872} height={1178} alt="Car Fax 04"
                                   style={{
                                       borderRadius: "20px",
                                       border: "none",
                                       boxShadow: "0 0 0 2px rgba(0,0,0,1)"
                                   }}/>
                        </div>
                        <br/>
                    </div>


                </div>
            </div>

            {/* Bottom Pane */}
            <footer className="w-full bg-gray-200 py-8 flex justify-center items-center">
                Last Updated 01-14-2025
            </footer>
        </div>
    );
}