import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function HeadNav() {
    return (
        <div className="bg-extraDarkBlue py-3 text-xs font-semibold text-[#D1D1D1]">
            <div className="flex justify-between w-[1100px] mx-auto">
                <div className="flex gap-6">
                    <div className="flex items-center gap-1">
                        <IoIosCall />
                        <p>09613 815 815</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <MdEmail />
                        <p>info@alzaf.com</p>
                    </div>
                </div>
                <div className="flex gap-6 cursor-pointer">
                    <p>DOCS</p>
                    <p>BLOG</p>
                    <p>PRICING</p>
                    <p>CONTACT</p>
                    <p>ABOUT US</p>
                    <div className="flex gap-[5px]">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none"><circle cx="7.5" cy="8" r="7.5" fill="#006A4E"></circle><path d="M7.5 11.5C9.433 11.5 11 9.933 11 8C11 6.067 9.433 4.5 7.5 4.5C5.567 4.5 4 6.067 4 8C4 9.933 5.567 11.5 7.5 11.5Z" fill="#F42A41"></path></svg>
                        </span>
                        <p>ENGLISH</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
