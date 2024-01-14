const Footer = () => {
  let today = new Date();

  return (
    <footer className="footer-container">
      
          <small> Team Member Allocation App - {today.getFullYear()} </small>
        
    </footer>
  );
};

export default Footer;
