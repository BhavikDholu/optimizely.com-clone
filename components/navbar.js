let navbar = () => {
  return ` <div id="navlogo"><a href="./index.html">
  <img
    src="https://www.optimizely.com/globalassets/02.-global-images/navigation/optimizely_logo_navigation.svg"
    alt="logo"
  />
  </a>
</div>
<div id="pages">
  <ul>
    <li><button><a href="./Products.html">Products</a></button></li>
    <li><button><a href="./Plans.html">Plans</a></button></li>
    <li><button><a href="./Resource.html">Resources</a></button></li>
    <li><button><a href="./partners.html">Partners</a></button></li>
  </ul>
</div>
<div id="searchnav">
  <ul>
    <li><button><a href="./Support.html">Support</a></button></li>
    <li>
      <button>
        <svg
          class="primary-nav__svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.99813 0C8.85396 0.00224941 10.6331 0.74047 11.9454 2.05274C13.2577 3.365 13.9959 5.14418 13.9981 7C13.9932 8.50753 13.497 9.97238 12.5848 11.1726L15.7052 14.293C15.7984 14.3857 15.8725 14.496 15.9231 14.6174C15.9737 14.7388 15.9998 14.869 16 15.0006C16.0002 15.1321 15.9744 15.2624 15.9242 15.384C15.8739 15.5055 15.8002 15.616 15.7071 15.709C15.6141 15.802 15.5037 15.8758 15.3821 15.926C15.2605 15.9763 15.1303 16.0021 14.9987 16.0019C14.8672 16.0017 14.737 15.9755 14.6155 15.925C14.4941 15.8744 14.3839 15.8003 14.2911 15.707L11.1707 12.5867C9.97051 13.4989 8.50567 13.9951 6.99813 14C5.14162 14 3.36114 13.2625 2.04839 11.9497C0.735631 10.637 -0.00186729 8.85652 -0.00186729 7C-0.00186729 5.14349 0.735631 3.36301 2.04839 2.05025C3.36114 0.737498 5.14162 0 6.99813 0V0ZM6.99813 12C7.98704 12 8.95374 11.7068 9.77598 11.1573C10.5982 10.6079 11.2391 9.82705 11.6175 8.91342C11.996 7.99979 12.095 6.99445 11.9021 6.02455C11.7091 5.05464 11.2329 4.16373 10.5337 3.46447C9.8344 2.7652 8.94349 2.289 7.97359 2.09607C7.00368 1.90315 5.99835 2.00216 5.08472 2.3806C4.17109 2.75904 3.39019 3.3999 2.84078 4.22215C2.29138 5.0444 1.99813 6.01109 1.99813 7C1.99969 8.32561 2.52697 9.59647 3.46432 10.5338C4.40166 11.4712 5.67253 11.9984 6.99813 12Z"
          ></path>
        </svg>
        <span>Search</span>
      </button>
    </li>
    <li>
      <button>
        <img
          src="https://www.optimizely.com/contentassets/19e2441ca72d4ea9a3f17e5f3a92bd16/login.svg"
          alt="login"
        />
        <span id="login_span"><a href="./login.html">Login</a></span>
      </button>
    </li>
  </ul>
</div>
<div id="navbar-getstarted">
  <button><a href="./Get_Start.html">Get started</a></button>
</div>`;
};

export default navbar;
