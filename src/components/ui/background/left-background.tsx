import Image from "next/image";
import background from '@/../public/assets/icons/backgrounds.svg'

function LeftBackground() {
    return (<>
        <Image className="absolute left-0" src={background} alt="background" />
    </>);
}

export default LeftBackground;
