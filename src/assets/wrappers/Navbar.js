import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle {
    background: transparent;
    border-color: transparent;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: var(--transition);
    color: var(--grey-800);
  }
  .toggle:hover {
    background: var(--primary-100);
    color: var(--primary-500);
  }
  .toggle svg {
    font-size: 1.15rem;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: var(--white);
  .btn-container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    right: 0;
    width: 77%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.2rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
  @media (max-width: 576px) {
    .nav-center {
      width: 95vw;
    }
    .btn-container {
      gap: 0.5rem;
    }
    .btn {
      padding: 0.25rem 0.5rem;
      font-size: 0.85rem;
    }
    .btn svg {
      font-size: 1rem;
    }
    .toggle-btn {
      font-size: 1.4rem;
    }
    .dropdown {
      top: 35px;
      left: auto;
      right: 0;
      width: 100px;
      padding: 0.25rem;
    }
    .dropdown-btn {
      font-size: 0.85rem;
    }
  }
`;
export default Wrapper;
