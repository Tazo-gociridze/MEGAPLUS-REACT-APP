const Location = () => {
  return (
    <div className="h-[250px] w-full overflow-hidden rounded-xl shadow-2xl dark:shadow-sm">
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
  );
};

export default Location;
