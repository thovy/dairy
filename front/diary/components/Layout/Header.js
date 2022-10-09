import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import MenuIcon from "../../public/static/svg/menu.svg";
import SearchIcon from "../../public/static/svg/search.svg";

const Header = () => {

  return (
    <Wrap>
      <div>
        <Link href="/">
          <Image
        src="/static/images/logo2.png"
        width='55'
        height='38'
    	/></Link>
      </div>
      <div>
        <Link href="/search"><SearchIcon /></Link>
        <Link href="/menu"><MenuIcon className="icon-menu"/></Link>
        
      </div>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background-color: white;

    .icon-menu {
        margin-left : 12px;
    }
`
