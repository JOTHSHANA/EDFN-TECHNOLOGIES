import React from "react";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
function About() {
    return (
        <div className="flex m-2 p-20 rounded-lg shadow-lg">
            <div className="relative bg-gray-800/50 backdrop-blur-sm m-20 p-8 rounded-lg shadow-lg" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="10">
                {/* Floating MUI Icon (Label Effect) */}
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="10" className="absolute -top-7 -left-7 bg-blue-500 text-white p-6 rounded-full shadow-md">
                    <PrecisionManufacturingIcon fontSize="large" />
                </div>
                {/* About Us Section */}
                <h2 className="font-bold text-4xl mb-6 text-center" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="10">About Us</h2>
                <p className="text-lg text-gray-200 leading-relaxed" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="10">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to <span className="font-bold text-blue-400">EDFN Technologies</span>, a pioneering semiconductor and PCB design company based in the vibrant city of Coimbatore, India. At EDFN Technologies, we are passionate about transforming ideas into cutting-edge electronic solutions that power the future. With a deep commitment to innovation and excellence, we are here to revolutionize the semiconductor and PCB design landscape.
                </p>
                <h3 className="font-bold text-2xl mt-6">Our Journey and Mission:</h3>
                <p className="text-lg text-gray-200 leading-relaxed mt-4" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="10">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Founded in 2023, EDFN Technologies was born out of a shared vision among a group of engineers and designers. Our mission is clear: to provide world-class semiconductor and PCB design services that empower businesses and individuals to bring their electronic dreams to life. We thrive on challenges, using every project as an opportunity to showcase our expertise and push the boundaries of what's possible.
                </p>
                <p className="text-lg text-gray-200 leading-relaxed mt-4" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="10">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What sets us apart is our unwavering dedication to quality, precision, and creativity. With a team of highly skilled professionals, we specialize in translating concepts into tangible electronic solutions that exceed expectations. Our deep understanding of semiconductor technologies and PCB design intricacies enables us to deliver designs that are not just functional, but also optimized for performance, manufacturability, and reliability.
                </p>
            </div>
            
        </div>

    )
}

export default About