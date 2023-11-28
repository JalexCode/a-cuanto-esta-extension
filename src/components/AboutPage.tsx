import HeaderAboutComponent from "./HeaderAboutComponent";


const AboutPage = ({ handlePage }) => {
    return (
        <div className="">
            <HeaderAboutComponent handlePage={handlePage} />
            <div className='transition duration-300 opacity-100 p-10'>
                <div className='justify-center w-full'>
                    <p className='tinny-text'>Developed by <a href='https://github.com/JalexCode' target='_blank' rel="noreferrer">JalexCode</a></p>
                </div>
            </div>
        </div>
    )
}
export default AboutPage;