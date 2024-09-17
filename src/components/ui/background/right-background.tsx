import Image from "next/image";
import background_img from '@/../public/assets/icons/backgrounds1.svg'
function RightBackground() {
    return (
        <>
            <Image className="absolute right-0" src={background_img} alt="background" />
        </>
    );
}

export default RightBackground;
