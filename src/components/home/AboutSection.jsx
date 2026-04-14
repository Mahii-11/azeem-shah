import profileImg from '../../assets/images/profile.png';
export default function AboutSection() {
  return (
    <div className="bg-[#0a0a0a] py-24 px-6 md:px-16">
        <div>
            <div>
                <div></div>
                <img src={profileImg} 
                alt="Profile" 
                className="" />
            </div>
        </div>
    </div>
  )
}
