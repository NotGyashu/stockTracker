export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div class="bg-[#421748] text-gray-300 font-poppins  flex flex-col">
      <div class="grid grid-cols-3 gap-4 p-4 md:p-8">
        <div class="col-span-1 ">
          <h3 class="text-2xl font-bold mb-4">stocktracker</h3>
          <p class="text-justify">
            stocktracker is a tool or application that monitors and provides
            real-time information about stock prices, market trends, and
            financial data, helping users stay informed about their investment
            portfolios.
          </p>
        </div>

        <div class="col-span-1">
          <h3 class="text-xl font-bold mb-4 flex justify-center">Some Links</h3>
          <ul class="list-none flex items-center flex-col">
            <li>
              <a href="#faq" class=" hover:text-purple-300">
                F.A.Q
              </a>
            </li>
            <li>
              <a href="#cookies-policy" class=" hover:text-purple-300">
                Cookies Policy
              </a>
            </li>
            <li>
              <a href="#terms-of-services" class=" hover:text-purple-300">
                Terms Of Service
              </a>
            </li>
            <li>
              <a href="#support" class=" hover:text-purple-300">
                Support
              </a>
            </li>
          </ul>
        </div>

        <div class="col-span-1 ">
          <h3 class="text-2xl font-bold mb-4">Newsletter</h3>
          <div class="flex space-x-2">
            <input
              type="email"
              placeholder="Your email id here"
              class="w-full p-2 rounded focus:outline-none text-black"
            />
            <button class="bg-yellow-600 text-white p-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between p-2 md:p-4 bg-[#531f5b]">
        <div class="footer-menu mb-4 md:mb-0 flex gap-10">
          <a href="/" class=" hover:text-purple-700">
            Home
          </a>
          <a href="/" class=" hover:text-purple-700">
            About
          </a>
          <a href="/" class=" hover:text-purple-700">
            Contact
          </a>
          <a href="/" class=" hover:text-purple-700">
            Blog
          </a>
          <a href="/" class=" hover:text-purple-700">
            Social
          </a>
        </div>
        <p class="text-sm">&copy; {year} snowMan</p>
      </div>
    </div>
  );
};
