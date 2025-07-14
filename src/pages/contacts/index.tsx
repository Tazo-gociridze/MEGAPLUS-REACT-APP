import H2Title from '@/utils/h2title';
import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

const Contacts = () => {
  return (
    <div className="fixed-width flex h-[100vh] w-full items-center">
      <div className="grid w-full grid-cols-2 overflow-hidden rounded-2xl border-b-8 border-red-500 bg-white">
        <div className="!pb-15">
          <div className="flex items-start justify-between">
            <H2Title className="!px-10 text-xl" title="Contact us" />
          </div>
          <div className="!mt-10 flex justify-between !px-9">
            <div className="flex flex-col gap-y-6 *:flex *:items-center *:gap-x-5 *:text-xl">
              <div className="">
                <div className="contact-item flex items-center justify-center text-4xl">
                  <CiPhone />
                </div>
                <span>+995 322-500-601</span>
              </div>
              <div className="">
                <div className="contact-item flex items-center justify-center text-4xl">
                  <CiPhone />
                </div>
                <span>+995 322-344-425</span>
              </div>
              <div className="">
                <div className="contact-item flex items-center justify-center text-4xl">
                  <CiMail />
                </div>
                <span>info@megaplus.ge</span>
              </div>
              <div className="">
                <div className="contact-item flex items-center justify-center text-4xl">
                  <CiLocationOn />
                </div>
                <span>წერეთლის გამზირი, №116</span>
              </div>
            </div>
            <div className="flex flex-col justify-between text-4xl  *:flex *:h-[80px] *:w-[80px] *:cursor-pointer *:items-center *:justify-center *:rounded-2xl *:border-4 *:border-red-500 *:transition-all *:duration-300 *:hover:scale-110 *:hover:rotate-3 *:hover:shadow-xl">
              <div className="text-blue-600 hover:bg-blue-600 hover:text-white">
                <FaFacebookF />
              </div>
              <div className="text-red-600 hover:bg-red-600 hover:text-white">
                <FaYoutube />
              </div>
              <div className="text-blue-400 hover:bg-blue-400 hover:text-white">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="!mt-10 h-[1px] w-full bg-[#a598983a]"></div>
          <form className="w-full !px-8">
            <p className="!mt-10 text-gray-600">დაგვიტოვეთ ნომერი და ჩვენ დაგიკავშირდებით</p>
            <div className="!mt-5 grid grid-cols-2 gap-x-4 *:rounded-4xl *:border-[1px] *:border-[#665e5e49] *:!px-4 *:!py-2">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Number" />
            </div>
            <button className="!mt-6 rounded-4xl cursor-pointer bg-red-500 !px-6 !py-2 font-medium text-white transition-all duration-200 ease-in-out hover:scale-105 hover:bg-red-600 hover:shadow-md">
              Submit
            </button>
          </form>
        </div>
        <div className="h-full w-full overflow-hidden dark:shadow-sm">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d937.7483805953681!2d44.78028855424945!3d41.73852674122025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447294cd8c4faf%3A0xb98074af2e79b7b2!2sDidube%20Plaza!5e0!3m2!1sen!2sge!4v1751446187879!5m2!1sen!2sge"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
