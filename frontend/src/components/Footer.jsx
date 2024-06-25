const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className=" text-white text-center py-3">
      <p>Gamerz &copy; {year}</p>
    </div>
  );
};

export default Footer;
