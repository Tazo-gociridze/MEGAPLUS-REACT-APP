import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import H2Title from '@/utils/h2title';
import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import { message } from 'antd';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
const RECAPTCHA_SITE_KEY = '6Lc8OosrAAAAANA7bocBHV9rffIHvS-4bC36lR8X';


const schema = z
  .object({
    name: z.string().min(2, 'სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს'),
    countryCode: z.enum(['+995', '+7', '+90', '+998', '+44']),
    phone: z.string().regex(/^\d+$/, 'ნომერი უნდა შედგებოდეს მხოლოდ ციფრებისგან'),
  })
  .superRefine((data, ctx) => {
    const lengths: Record<string, number> = {
      '+995': 9,
      '+7': 10,
      '+90': 10,
      '+998': 9,
      '+44': 10,
    };

    const requiredLength = lengths[data.countryCode];
    if (data.phone.length !== requiredLength) {
      ctx.addIssue({
        path: ['phone'],
        code: z.ZodIssueCode.custom,
        message: `ნომერი უნდა შედგებოდეს ${requiredLength} ციფრისგან`,
      });
    }
  });
type FormData = z.infer<typeof schema>;

const Contacts = () => {
  const [token, setToken] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const success = (name: string) => {
    messageApi.open({
      type: 'success',
      content: name,
    });
  };

  const error = (name: string) => {
    messageApi.open({
      type: 'error',
      content: name,
    });
  };

  const warning = (name: string) => {
    messageApi.open({
      type: 'warning',
      content: name,
    });
  };

  const onSubmit = async (data: FormData) => {
    if (!token) {
      warning('გთხოვთ დაადასტურეთ რობოტზე შემოწმება!');
      return;
    }

    const fullPhone = `${data.countryCode}${data.phone}`;

    try {
      const response = await fetch('https://megaplus.com.ge/email_api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: fullPhone,
          token,
        }),
      });

      const result = await response.text();

      if (!response.ok) {
        console.error('Server returned an error:', response.status, result);
        error('დაფიქსირდა შეცდომა. სცადე ხელახლა.');
        return;
      }

      success('წერილი გაიგზავნა წარმატებით!');
      reset();
    } catch (err) {
      console.error('Network error:', err);
      warning('მიმართეთ ქსელის ადმინისტრატორს ხარვეზის აღმოსაფხვრელად.');
    }
  };

  return (
    <div className="fixed-width h-[100vh] w-full items-center">
      {contextHolder}
      <div className="grid w-full !mt-28 grid-cols-2 overflow-hidden rounded-2xl border-b-8 border-red-500 bg-white dark:bg-[var(--dark-light-blue)] dark:text-white">
        <div className="!pb-15">
          <H2Title className="dark:text-[] !px-10 text-xl" title="Contact us" />

          <div className="!mt-10 flex justify-between !px-9">
            <div className="flex flex-col gap-y-6 *:flex *:items-center *:gap-x-5 *:text-xl">
              <div>
                <CiPhone className="text-4xl text-red-600" />
                <span>+995 322-500-601</span>
              </div>
              <div>
                <CiPhone className="text-4xl text-red-600" />
                <span>+995 322-344-425</span>
              </div>
              <div>
                <CiMail className="text-4xl text-red-600" />
                <span>info@megaplus.ge</span>
              </div>
              <div>
                <CiLocationOn className="text-4xl text-red-600" />
                <span>წერეთლის გამზირი, №116</span>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-y-4 text-4xl *:flex *:h-[80px] *:w-[80px] *:cursor-pointer *:items-center *:justify-center *:rounded-2xl *:border-4 *:border-red-500 *:transition-all *:duration-300 *:hover:scale-110 *:hover:rotate-3 *:hover:shadow-xl">
              <a
                href="https://www.facebook.com/MEGAPLUS.GE"
                className="text-blue-600 hover:bg-blue-600 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/channel/UCFHXhna5JW6MC-QIriJagLw"
                className="text-red-600 hover:bg-red-600 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/company/megaplus-retail/"
                className="text-blue-400 hover:bg-blue-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="!mt-10 h-[1px] w-full bg-[#a598983a]"></div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full !px-8">
            <p className="!mt-10 text-gray-600 dark:text-white">
              დაგვიტოვეთ ნომერი და ჩვენ დაგიკავშირდებით
            </p>

            <div className="!mt-5 !mb-3 grid grid-cols-2 gap-x-4 *:rounded-4xl *:border-[1px] *:border-[#665e5e49] *:!px-4 *:!py-2">
              <input type="text" placeholder="Name" {...register('name')} />
              <div className="flex gap-x-2">
                <select {...register('countryCode')} className="rounded-2xl px-2">
                  <option value="+995">GE (+995)</option>
                  <option value="+7">RU (+7)</option>
                  <option value="+90">AZ (+90)</option>
                  <option value="+998">UZ (+998)</option>
                  <option value="+44">US (+44)</option>
                </select>
                <input
                  type="text"
                  placeholder="Phone"
                  {...register('phone')}
                  maxLength={
                    {
                      '+995': 9,
                      '+7': 10,
                      '+90': 10,
                      '+998': 9,
                      '+44': 10,
                    }[watch('countryCode')]
                  }
                  className="flex-1"
                />
              </div>
            </div>

            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

            <button
              type="submit"
              className="!mt-6 cursor-pointer rounded-4xl bg-red-500 !px-6 !py-2 font-medium text-white transition-all duration-200 ease-in-out hover:scale-105 hover:bg-red-600 hover:shadow-md"
            >
              Submit
            </button>
          </form>

          <ReCAPTCHA
            className="!mt-6 !ml-8"
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={(token) => setToken(token || '')}
          />
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
