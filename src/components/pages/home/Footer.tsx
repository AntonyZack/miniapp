import Image from "next/image";
import stake from '@/../public/assets/icons/stake.svg'
import swap from '@/../public/assets/icons/swap.svg'
import wallet from '@/../public/assets/icons/wallet.svg'
import Link from "next/link";





function Footer() {
    return (
        <div className="flex bg-[#09191E] py-2 border-t border-[#00CCF5]
  sticky bottom-0  w-full z-50 justify-around">
            <Link href='stake'>
                <Image src={stake} width={40} height={40} alt="stake" />
            </Link>
            <Link href='/'>
                <Image src={swap} width={40} height={40} alt="swap" />
            </Link>

            <Link href='#'>
                <Image src={wallet} width={40} height={40} alt="wallet" />
            </Link>

        </div>
    );
}

export default Footer;

