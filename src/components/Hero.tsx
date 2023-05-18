function Hero() {
  return (
    <div className='hero'>
      <h1>
        In this example, the StickyNav component consists of a div with a nav element inside. The
        outer div has the Tailwind CSS classes sticky top-0 z-50 to make it sticky at the top of the
        viewport. The z-50 class ensures that the navigation bar stays above other elements on the
        page. The nav element contains two child elements: one for the logo and one for the
        navigation links. The navigation links are placed inside an unordered list (ul) with li
        elements for each link. The styling is simple, with a white background, a drop shadow, and
        basic hover effects for the navigation links. You can customize the styling and layout as
        needed to match your design preferences. To use this sticky navigation bar in your
        application, simply import the StickyNav component and include it in your main layout or the
        desired page component.
      </h1>
    </div>
  );
}
export default Hero;
