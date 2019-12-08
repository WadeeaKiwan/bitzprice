import Link from 'next/link';

const Navbar = () => (
  <nav className='navbar navbar-expand navbar-dark bg-dark mb-4'>
    <div className='container'>
      <a className='navbar-brand' href='#'>
        BitzPrice
      </a>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link href='/'>
              <a className='nav-link'>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className='nav-link'>About</a>
            </Link>
          </li>
        </ul>

        {/* {How to use style within the component using Next.js} */}
        {/* <style jsx>{`
          ul {
            background: #333;
            list-style: none;
            display: flex;
          }

          ul li {
            margin-right: 20px;
            font-size: 18px;
          }

          ul li a {
            color: #fff;
            text-decoration: none;
          }
        `}</style> */}
      </div>
    </div>
  </nav>
);

export default Navbar;
